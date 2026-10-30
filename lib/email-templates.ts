/**
 * Vektorsynapse — Studio Email Templates
 * 
 * Clean, lightweight, professional email templates matching the portfolio's
 * light glass aesthetic, purple/violet typography, and brand gradient.
 */

export interface LeadEmailData {
  name: string
  email: string
  projectType: string
  message: string
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://vektorsynapse.netlify.app"
const logoUrl = `${siteUrl.replace(/\/$/, "")}/images/vs-logo.png`

/**
 * 1. Studio Lead Notification Template
 * Delivered to YOUR inbox (contact.vektorsynapse@gmail.com) when a client submits the form.
 */
export function renderLeadNotificationEmail(data: LeadEmailData): string {
  const name = escapeHtml(data.name)
  const email = escapeHtml(data.email)
  const projectType = escapeHtml(data.projectType)
  const message = escapeHtml(data.message)
  const replySubject = encodeURIComponent(`Re: Project Inquiry (${data.projectType}) — Vektorsynapse`)

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Project Inquiry</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f5f3ff; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1e1b4b; -webkit-font-smoothing: antialiased;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #f5f3ff; padding: 40px 16px;">
    <tr>
      <td align="center">
        <!-- Main Container Card -->
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width: 580px; background-color: #ffffff; border-radius: 20px; overflow: hidden; border: 1px solid #e9e5f5; box-shadow: 0 10px 30px -5px rgba(90, 70, 220, 0.08);">
          
          <!-- Top Gradient Accent Line matching website -->
          <tr>
            <td style="height: 4px; background: linear-gradient(90deg, #2563eb 0%, #9333ea 50%, #f43f5e 100%);"></td>
          </tr>

          <!-- Brand Header with Logo -->
          <tr>
            <td style="padding: 28px 32px; border-bottom: 1px solid #f1eeff;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td style="vertical-align: middle;">
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                      <tr>
                        <td style="vertical-align: middle; padding-right: 14px; width: 40px;">
                          <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="width: 40px; height: 40px; border-radius: 10px; background: linear-gradient(135deg, #7c3aed 0%, #2563eb 100%); overflow: hidden; border-collapse: separate;">
                            <tr>
                              <td align="center" valign="middle" style="width: 40px; height: 40px; padding: 0; text-align: center;">
                                <img src="${logoUrl}" alt="VS" width="40" height="40" style="display: block; width: 40px; height: 40px; max-width: 40px; max-height: 40px; border: 0; outline: none; border-radius: 10px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 14px; font-weight: 800; color: #ffffff; line-height: 40px; text-align: center;" />
                              </td>
                            </tr>
                          </table>
                        </td>
                        <td style="vertical-align: middle;">
                          <span style="font-size: 17px; font-weight: 800; color: #0f172a; letter-spacing: -0.3px; display: block; line-height: 1.2;">
                            Vektor<span style="color: #7c3aed;">synapse</span>
                          </span>
                          <span style="font-size: 9.5px; font-weight: 700; letter-spacing: 1.8px; color: #64748b; text-transform: uppercase; display: block; margin-top: 2px;">
                            Software Studio
                          </span>
                        </td>
                      </tr>
                    </table>
                  </td>
                  <td align="right" style="vertical-align: middle;">
                    <span style="display: inline-block; padding: 4px 12px; background-color: #ecfdf5; border: 1px solid #a7f3d0; border-radius: 9999px; color: #047857; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">
                      &bull; New Lead
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Content Body -->
          <tr>
            <td style="padding: 32px;">
              <h1 style="margin: 0 0 6px 0; font-size: 20px; font-weight: 800; color: #0f172a; letter-spacing: -0.3px;">
                New Project Request Received
              </h1>
              <p style="margin: 0 0 24px 0; font-size: 14px; color: #64748b; line-height: 1.5;">
                You received a new message through the website contact form.
              </p>

              <!-- Client Information Table -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #faf9fe; border-radius: 12px; border: 1px solid #ede9fe; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 14px 18px; border-bottom: 1px solid #f1eeff; width: 34%; font-size: 11.5px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px;">
                    Client Name
                  </td>
                  <td style="padding: 14px 18px; border-bottom: 1px solid #f1eeff; font-size: 14.5px; font-weight: 700; color: #0f172a;">
                    ${name}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 14px 18px; border-bottom: 1px solid #f1eeff; font-size: 11.5px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px;">
                    Email Address
                  </td>
                  <td style="padding: 14px 18px; border-bottom: 1px solid #f1eeff; font-size: 14px; font-weight: 600;">
                    <a href="mailto:${email}" style="color: #6366f1; text-decoration: none;">${email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 14px 18px; font-size: 11.5px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px;">
                    Project Type
                  </td>
                  <td style="padding: 14px 18px;">
                    <span style="display: inline-block; padding: 3px 10px; background-color: #f3f0ff; border: 1px solid #ddd6fe; border-radius: 9999px; color: #6d28d9; font-size: 12px; font-weight: 700;">
                      ${projectType}
                    </span>
                  </td>
                </tr>
              </table>

              <!-- Project Message Box -->
              <div style="margin-bottom: 28px;">
                <span style="display: block; font-size: 11px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.8px; margin-bottom: 8px;">
                  Project Message
                </span>
                <div style="background-color: #fbfaff; border: 1px solid #e5e1f8; border-radius: 12px; padding: 18px; font-size: 14px; line-height: 1.6; color: #1e293b; white-space: pre-wrap;">${message}</div>
              </div>

              <!-- Quick Reply Button matching website CTA -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td align="center">
                    <a href="mailto:${email}?subject=${replySubject}" style="display: inline-block; padding: 12px 28px; background: linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #f43f5e 100%); color: #ffffff; text-decoration: none; font-size: 13.5px; font-weight: 700; border-radius: 9999px; box-shadow: 0 4px 14px rgba(168, 85, 247, 0.35);">
                      Reply to ${name} &rarr;
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 20px 32px; background-color: #faf9fe; border-top: 1px solid #f1eeff; text-align: center;">
              <p style="margin: 0; font-size: 11.5px; color: #64748b; line-height: 1.5;">
                Sent via <a href="${siteUrl}" style="color: #7c3aed; text-decoration: none; font-weight: 600;">Vektorsynapse Portfolio</a> &bull; Reply-To set to ${email}
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
}

/**
 * 2. Client Confirmation Template
 * Delivered to the CLIENT's email confirming their inquiry was received.
 */
export function renderClientConfirmationEmail(data: LeadEmailData): string {
  const name = escapeHtml(data.name)
  const projectType = escapeHtml(data.projectType)
  const message = escapeHtml(data.message)

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank you for contacting Vektorsynapse</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f5f3ff; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1e1b4b; -webkit-font-smoothing: antialiased;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #f5f3ff; padding: 40px 16px;">
    <tr>
      <td align="center">
        <!-- Main Card -->
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width: 580px; background-color: #ffffff; border-radius: 20px; overflow: hidden; border: 1px solid #e9e5f5; box-shadow: 0 10px 30px -5px rgba(90, 70, 220, 0.08);">
          
          <!-- Top Gradient Accent Bar -->
          <tr>
            <td style="height: 4px; background: linear-gradient(90deg, #2563eb 0%, #9333ea 50%, #f43f5e 100%);"></td>
          </tr>

          <!-- Brand Header with Logo -->
          <tr>
            <td style="padding: 28px 32px; border-bottom: 1px solid #f1eeff;">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td style="vertical-align: middle; padding-right: 14px; width: 40px;">
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="width: 40px; height: 40px; border-radius: 10px; background: linear-gradient(135deg, #7c3aed 0%, #2563eb 100%); overflow: hidden; border-collapse: separate;">
                      <tr>
                        <td align="center" valign="middle" style="width: 40px; height: 40px; padding: 0; text-align: center;">
                          <img src="${logoUrl}" alt="VS" width="40" height="40" style="display: block; width: 40px; height: 40px; max-width: 40px; max-height: 40px; border: 0; outline: none; border-radius: 10px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 14px; font-weight: 800; color: #ffffff; line-height: 40px; text-align: center;" />
                        </td>
                      </tr>
                    </table>
                  </td>
                  <td style="vertical-align: middle;">
                    <span style="font-size: 17px; font-weight: 800; color: #0f172a; letter-spacing: -0.3px; display: block; line-height: 1.2;">
                      Vektor<span style="color: #7c3aed;">synapse</span>
                    </span>
                    <span style="font-size: 9.5px; font-weight: 700; letter-spacing: 1.8px; color: #64748b; text-transform: uppercase; display: block; margin-top: 2px;">
                      Software Studio
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Content Body -->
          <tr>
            <td style="padding: 32px;">
              <h1 style="margin: 0 0 10px 0; font-size: 20px; font-weight: 800; color: #0f172a; letter-spacing: -0.3px;">
                Thank you for reaching out, ${name}!
              </h1>
              <p style="margin: 0 0 24px 0; font-size: 14.5px; color: #475569; line-height: 1.6;">
                We received your inquiry regarding <strong style="color: #0f172a;">${projectType}</strong>. We review every request carefully and will get back to you within 24 hours.
              </p>

              <!-- What happens next box -->
              <div style="background-color: #faf9fe; border-radius: 12px; border: 1px solid #ede9fe; padding: 20px; margin-bottom: 24px;">
                <span style="display: block; font-size: 11.5px; font-weight: 700; color: #7c3aed; text-transform: uppercase; letter-spacing: 0.8px; margin-bottom: 14px;">
                  What Happens Next
                </span>
                
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="font-size: 13.5px; color: #334155; line-height: 1.5;">
                  <tr>
                    <td style="padding-bottom: 10px; vertical-align: top; width: 24px; color: #7c3aed; font-weight: 800;">1.</td>
                    <td style="padding-bottom: 10px;"><strong>Scope Review</strong> &mdash; We review your brief and technical requirements.</td>
                  </tr>
                  <tr>
                    <td style="padding-bottom: 10px; vertical-align: top; width: 24px; color: #7c3aed; font-weight: 800;">2.</td>
                    <td style="padding-bottom: 10px;"><strong>Discovery & Alignment</strong> &mdash; We respond with clarifying questions or schedule a quick discovery call.</td>
                  </tr>
                  <tr>
                    <td style="vertical-align: top; width: 24px; color: #7c3aed; font-weight: 800;">3.</td>
                    <td><strong>Fixed Proposal</strong> &mdash; You receive a milestone-based proposal with scope, timeline, and fixed price.</td>
                  </tr>
                </table>
              </div>

              <!-- Message Copy -->
              <div style="margin-bottom: 20px;">
                <span style="display: block; font-size: 11px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.8px; margin-bottom: 6px;">
                  Your Message
                </span>
                <div style="background-color: #fbfaff; border: 1px solid #e5e1f8; border-radius: 10px; padding: 14px; font-size: 13px; line-height: 1.5; color: #475569; white-space: pre-wrap;">${message}</div>
              </div>

              <p style="margin: 0; font-size: 13px; color: #64748b; line-height: 1.5;">
                Need to add something? You can reply directly to this email at any time.
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 20px 32px; background-color: #faf9fe; border-top: 1px solid #f1eeff; text-align: center;">
              <p style="margin: 0 0 4px 0; font-size: 12px; font-weight: 600; color: #334155;">
                Vektorsynapse Software Studio
              </p>
              <p style="margin: 0; font-size: 11px; color: #64748b;">
                Production-grade Web, Mobile & Desktop Applications
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
}
