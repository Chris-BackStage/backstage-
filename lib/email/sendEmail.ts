// Email abstraction — supports Resend (default) or SMTP
// Set EMAIL_PROVIDER=smtp and SMTP_* vars to use SMTP

export interface EmailPayload {
  to: string;
  from?: string;
  subject: string;
  html: string;
  replyTo?: string;
}

export interface EmailResult {
  success: boolean;
  id?: string;
  error?: string;
}

export async function sendEmail(payload: EmailPayload): Promise<EmailResult> {
  const provider = process.env.EMAIL_PROVIDER ?? "resend";

  if (provider === "resend") {
    return sendViaResend(payload);
  }

  if (provider === "smtp") {
    return sendViaSMTP(payload);
  }

  console.warn("[sendEmail] No email provider configured. Set EMAIL_PROVIDER in .env");
  return { success: false, error: "No email provider configured" };
}

async function sendViaResend(payload: EmailPayload): Promise<EmailResult> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return { success: false, error: "RESEND_API_KEY not set" };
  }

  try {
    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);

    const { data, error } = await resend.emails.send({
      from: payload.from ?? process.env.RESEND_FROM_EMAIL ?? "Backstage <hello@backstage.build>",
      to: payload.to,
      subject: payload.subject,
      html: payload.html,
      replyTo: payload.replyTo,
    });

    if (error) {
      return { success: false, error: error.message };
    }

    return { success: true, id: data?.id };
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return { success: false, error: message };
  }
}

async function sendViaSMTP(payload: EmailPayload): Promise<EmailResult> {
  // SMTP implementation — install nodemailer and add types
  // npm install nodemailer @types/nodemailer
  try {
    // Dynamic import to avoid bundling nodemailer in edge runtime
    const nodemailer = await import("nodemailer");
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: payload.from ?? process.env.SMTP_USER,
      to: payload.to,
      subject: payload.subject,
      html: payload.html,
      replyTo: payload.replyTo,
    });

    return { success: true, id: info.messageId };
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return { success: false, error: message };
  }
}

// Email templates
export function contactEmailTemplate(data: {
  name: string;
  email: string;
  company: string;
  useCase: string;
  budget: string;
  timeline: string;
}): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Enquiry — Backstage</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: #F6F4EF; margin: 0; padding: 40px 16px; }
    .wrapper { max-width: 560px; margin: 0 auto; background: #fff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.06); }
    .header { background: #0F1317; color: #F6F4EF; padding: 32px 40px; }
    .header h1 { margin: 0; font-size: 22px; font-weight: 600; letter-spacing: -0.02em; }
    .header p { margin: 8px 0 0; opacity: 0.6; font-size: 14px; }
    .body { padding: 32px 40px; }
    .field { margin-bottom: 20px; }
    .label { font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; color: #4A5568; margin-bottom: 4px; }
    .value { font-size: 15px; color: #0F1317; line-height: 1.5; }
    .divider { height: 1px; background: #EAE7DE; margin: 24px 0; }
    .footer { background: #F6F4EF; padding: 20px 40px; font-size: 12px; color: #8F8778; }
    .badge { display: inline-block; padding: 3px 8px; border-radius: 4px; font-size: 12px; font-weight: 600; }
    .badge-gold { background: #F9F4E8; color: #8B7238; }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="header">
      <h1>New Contact Enquiry</h1>
      <p>Received via backstage.build/contact</p>
    </div>
    <div class="body">
      <div class="field">
        <div class="label">From</div>
        <div class="value">${data.name} &lt;${data.email}&gt;</div>
      </div>
      <div class="field">
        <div class="label">Company</div>
        <div class="value">${data.company}</div>
      </div>
      <div class="divider"></div>
      <div class="field">
        <div class="label">Use Case</div>
        <div class="value">${data.useCase}</div>
      </div>
      <div class="field">
        <div class="label">Budget</div>
        <div class="value"><span class="badge badge-gold">${data.budget}</span></div>
      </div>
      <div class="field">
        <div class="label">Timeline</div>
        <div class="value">${data.timeline}</div>
      </div>
    </div>
    <div class="footer">
      Sent from backstage.build — Reply directly to this email to respond to ${data.name}.
    </div>
  </div>
</body>
</html>
  `.trim();
}

export function autoReplyTemplate(name: string): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>We received your enquiry — Backstage</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: #F6F4EF; margin: 0; padding: 40px 16px; }
    .wrapper { max-width: 560px; margin: 0 auto; background: #fff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.06); }
    .header { background: #0F1317; padding: 40px; text-align: center; }
    .brand { color: #C2A660; font-size: 13px; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase; }
    .body { padding: 40px; }
    .body h1 { font-size: 24px; font-weight: 600; color: #0F1317; margin: 0 0 16px; letter-spacing: -0.02em; }
    .body p { font-size: 15px; color: #4A5568; line-height: 1.7; margin: 0 0 16px; }
    .cta-button { display: inline-block; background: #0A5AA1; color: #F6F4EF; text-decoration: none; padding: 14px 28px; border-radius: 6px; font-size: 14px; font-weight: 600; margin: 8px 0 24px; }
    .footer { background: #F6F4EF; padding: 20px 40px; font-size: 12px; color: #8F8778; text-align: center; }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="header">
      <div class="brand">Backstage</div>
    </div>
    <div class="body">
      <h1>We'll be in touch shortly, ${name}.</h1>
      <p>Thanks for reaching out. We've received your enquiry and will get back to you within one business day.</p>
      <p>In the meantime, if you'd like to schedule a discovery call directly:</p>
      <a href="[[CALENDLY_URL]]" class="cta-button">Book a discovery call</a>
      <p>We look forward to learning more about your operations.</p>
      <p style="color: #8F8778; font-size: 13px;">— The Backstage Team</p>
    </div>
    <div class="footer">
      <p>Backstage · hello@backstage.build</p>
      <p><a href="https://backstage.build" style="color: #0A5AA1;">backstage.build</a></p>
    </div>
  </div>
</body>
</html>
  `.trim();
}
