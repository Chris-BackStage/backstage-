import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations";
import { sendEmail, contactEmailTemplate, autoReplyTemplate } from "@/lib/email/sendEmail";
import { rateLimit, getClientIp } from "@/lib/rateLimit";
import { appendLeadToSheet } from "@/lib/sheets";

export async function POST(request: NextRequest) {
  // Rate limiting
  const ip = getClientIp(request);
  const limit = rateLimit(ip, {
    maxRequests: Number(process.env.RATE_LIMIT_REQUESTS ?? 5),
    windowMs: Number(process.env.RATE_LIMIT_WINDOW_MS ?? 60_000),
  });

  if (!limit.success) {
    return NextResponse.json(
      { error: "Too many requests. Please wait before trying again." },
      { status: 429, headers: { "Retry-After": String(Math.ceil((limit.resetAt - Date.now()) / 1000)) } }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  // Validate
  const parsed = contactFormSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed.", details: parsed.error.flatten().fieldErrors },
      { status: 422 }
    );
  }

  const { name, email, company, useCase, budget, timeline, _honey } = parsed.data;

  // Honeypot check
  if (_honey && _honey.length > 0) {
    // Silent success — fool bots
    return NextResponse.json({ success: true });
  }

  const toEmail = process.env.RESEND_TO_EMAIL ?? process.env.SMTP_USER ?? "sales@backstage.build";

  // Send notification to team
  const notifyResult = await sendEmail({
    to: toEmail,
    subject: `New enquiry from ${name} at ${company}`,
    html: contactEmailTemplate({ name, email, company, useCase, budget, timeline }),
    replyTo: email,
  });

  if (!notifyResult.success) {
    console.error("[contact/route] Failed to send notification email:", notifyResult.error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }

  // Send auto-reply to sender
  await sendEmail({
    to: email,
    subject: "We received your enquiry — Backstage",
    html: autoReplyTemplate(name),
  }).catch((err) => console.error("[contact/route] Auto-reply failed:", err));

  // Append to Google Sheet (non-blocking — never fails the request)
  await appendLeadToSheet({ name, email, company, useCase, budget, timeline }).catch(
    (err) => console.error("[contact/route] Sheet append failed:", err)
  );

  return NextResponse.json({ success: true });
}
