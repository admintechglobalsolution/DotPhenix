import { Resend } from "resend";

/* ------------------ types ------------------ */

export interface ContactEmailPayload {
  email: string;
  phone?: string;
  requirement?: string;
  subCategory?: string;
  message: string;
  source?: string;
}

/* ------------------ internal helpers ------------------ */

/**
 * Lazily create Resend client
 * Prevents build-time crashes when env vars are missing
 */
function getResendClient(): Resend {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured");
  }

  return new Resend(apiKey);
}

/* ------------------ main function ------------------ */

/**
 * Send admin notification email
 * Server-only (used by API routes)
 */
export async function sendContactEmail(data: ContactEmailPayload) {
  const resend = getResendClient();

  await resend.emails.send({
    from: "Website Enquiry <no-reply@dotphoenixsolutions.com>",
    to: ["info@dotphoenixsolutions.com"],
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
          <p style="white-space:pre-line">${escapeHtml(data.message)}</p>
        </div>

        <hr style="margin:24px 0" />
        <small style="color:#666">
          Sent from ntechglobalsolution.com • ${new Date().toLocaleString()}
        </small>
      </div>
    `,
  });
}

/* ------------------ rendering helpers ------------------ */

function row(label: string, value?: string) {
  if (!value) return "";
  return `
    <tr>
      <td style="font-weight:600">${label}</td>
      <td>${escapeHtml(value)}</td>
    </tr>
  `;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
