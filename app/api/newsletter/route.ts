import { NextRequest, NextResponse } from "next/server";
import { newsletterSchema } from "@/lib/validations";
import { rateLimit, getClientIp } from "@/lib/rateLimit";

export async function POST(request: NextRequest) {
  const ip = getClientIp(request);
  const limit = rateLimit(`newsletter:${ip}`, { maxRequests: 3, windowMs: 60_000 });

  if (!limit.success) {
    return NextResponse.json(
      { error: "Too many requests. Please try again shortly." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const parsed = newsletterSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid email address." },
      { status: 422 }
    );
  }

  const { email, _honey } = parsed.data;

  if (_honey && _honey.length > 0) {
    return NextResponse.json({ success: true });
  }

  // Mailchimp integration
  const apiKey = process.env.MAILCHIMP_API_KEY;
  const audienceId = process.env.MAILCHIMP_AUDIENCE_ID;
  const serverPrefix = process.env.MAILCHIMP_SERVER_PREFIX;

  if (!apiKey || !audienceId || !serverPrefix) {
    console.warn("[newsletter/route] Mailchimp not configured — skipping subscription");
    return NextResponse.json({ success: true });
  }

  try {
    const url = `https://${serverPrefix}.api.mailchimp.com/3.0/lists/${audienceId}/members`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Basic ${Buffer.from(`anystring:${apiKey}`).toString("base64")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email_address: email,
        status: "subscribed",
        tags: ["website"],
      }),
    });

    if (!response.ok) {
      const data = await response.json();
      // Already subscribed is fine
      if (data.title === "Member Exists") {
        return NextResponse.json({ success: true });
      }
      throw new Error(data.detail ?? "Mailchimp error");
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("[newsletter/route] Error:", message);
    return NextResponse.json(
      { error: "Failed to subscribe. Please try again." },
      { status: 500 }
    );
  }
}
