import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export interface ContactEmailPayload {
  email: string;
  phone?: string;
  requirement?: string;
  subCategory?: string;
  message: string;
  source?: string;
}

/**
 * Send admin notification email
 */
export async function sendContactEmail(data: ContactEmailPayload) {
  if (!process.env.RESEND_API_KEY) {
    throw new Error("RESEND_API_KEY is not configured");
  }

  await resend.emails.send({
    from: "Website Enquiry <no-reply@ntechglobalsolution.com>",
    to: ["admin@ntechglobalsolution.com"],
    replyTo: data.email,
    subject: "New Website Contact Submission",
    html: `
      <div style="font-family:Inter,Arial,sans-serif;color:#111;line-height:1.6">
        <h2>New Contact Form Submission</h2>

        <table width="100%" cellpadding="6" cellspacing="0" style="border-collapse:collapse">
          ${row("Email", data.email)}
          ${row("Phone", data.phone)}
          ${row("Requirement", data.requirement)}
          ${row("Sub Category", data.subCategory)}
          ${row("Source", data.source)}
        </table>

        <div style="margin-top:16px">
          <strong>Message</strong>
          <p style="white-space:pre-line">${escape(data.message)}</p>
        </div>

        <hr style="margin:24px 0" />
        <small style="color:#666">
          Sent from ntechglobalsolution.com • ${new Date().toLocaleString()}
        </small>
      </div>
    `,
  });
}

/* ---------- helpers ---------- */

function row(label: string, value?: string) {
  if (!value) return "";
  return `
    <tr>
      <td style="font-weight:600">${label}</td>
      <td>${escape(value)}</td>
    </tr>
  `;
}

function escape(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
