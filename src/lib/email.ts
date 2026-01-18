// src/lib/email.ts
import { Resend } from "resend";

/**
 * Resend client (server-only)
 * Never import this file into client components
 */
const resend = new Resend(process.env.RESEND_API_KEY);

/**
 * Strong typing for form payload
 */
export interface ContactEmailPayload {
  name: string;
  email: string;
  message: string;
  source?: string; // optional: sidebar / contact-page / footer
}

/**
 * Send admin notification email
 * Delivers to info@dotphenix.com
 */
export async function sendContactEmail({
  name,
  email,
  message,
  source,
}: ContactEmailPayload) {
  if (!process.env.RESEND_API_KEY) {
    throw new Error("RESEND_API_KEY is not configured");
  }

  return resend.emails.send({
    from: "Dot Phenix Solutions <no-reply@dotphenix.com>",
    to: ["info@dotphenix.com"],
    replyTo: email,
    subject: `New Website Enquiry — ${name}`,
    html: `
      <div style="font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial; line-height:1.6; color:#111;">
        <h2 style="margin-bottom:16px;">New Contact Submission</h2>

        <table cellpadding="0" cellspacing="0" style="width:100%; border-collapse:collapse;">
          <tr>
            <td style="padding:8px 0; font-weight:600;">Name</td>
            <td style="padding:8px 0;">${escapeHtml(name)}</td>
          </tr>
          <tr>
            <td style="padding:8px 0; font-weight:600;">Email</td>
            <td style="padding:8px 0;">${escapeHtml(email)}</td>
          </tr>
          ${
            source
              ? `<tr>
                  <td style="padding:8px 0; font-weight:600;">Source</td>
                  <td style="padding:8px 0;">${escapeHtml(source)}</td>
                </tr>`
              : ""
          }
        </table>

        <div style="margin-top:16px;">
          <p style="font-weight:600; margin-bottom:8px;">Message</p>
          <p style="white-space:pre-line;">${escapeHtml(message)}</p>
        </div>

        <hr style="margin:24px 0;" />
        <small style="color:#555;">
          Sent from dotphenix.com • ${new Date().toLocaleString()}
        </small>
      </div>
    `,
  });
}

/**
 * Prevent basic HTML injection in emails
 */
function escapeHtml(input: string) {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
