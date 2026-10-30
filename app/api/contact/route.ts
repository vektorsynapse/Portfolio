import { NextResponse } from "next/server"
import { contactSchema } from "@/lib/contact-schema"
import { profile } from "@/lib/data/profile"
import { renderLeadNotificationEmail } from "@/lib/email-templates"

export async function POST(request: Request) {
  let payload: unknown
  try {
    payload = await request.json()
  } catch {
    return NextResponse.json(
      { ok: false, error: "The request body was not valid JSON." },
      { status: 400 },
    )
  }

  const result = contactSchema.safeParse(payload)
  if (!result.success) {
    const fieldErrors: Record<string, string> = {}
    for (const issue of result.error.issues) {
      const key = String(issue.path[0] ?? "form")
      if (!fieldErrors[key]) fieldErrors[key] = issue.message
    }
    return NextResponse.json({ ok: false, fieldErrors }, { status: 422 })
  }

  const { name, email, projectType, message } = result.data

  // Option 1: Resend API (High-delivery custom HTML emails)
  if (process.env.RESEND_API_KEY) {
    try {
      const fromEmail = process.env.RESEND_FROM_EMAIL || "Vektorsynapse Studio <onboarding@resend.dev>"
      const leadHtml = renderLeadNotificationEmail({ name, email, projectType, message })

      // 1. Deliver custom-designed lead alert to Studio owner
      const resendRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: fromEmail,
          to: [profile.email],
          reply_to: email,
          subject: `New Project Inquiry: ${name} (${projectType})`,
          html: leadHtml,
          text: `New Lead from ${name} (${email})\nProject Type: ${projectType}\n\nMessage:\n${message}`,
        }),
      })

      if (resendRes.ok) {
        return NextResponse.json({ ok: true, delivered: true, provider: "resend" })
      }
    } catch {
      // Fall through to fallback provider
    }
  }

  // Option 2: Web3Forms (server-side delivery)
  const web3FormsKey = process.env.WEB3FORMS_ACCESS_KEY || process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY
  if (web3FormsKey) {
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
        },
        body: JSON.stringify({
          access_key: web3FormsKey,
          name,
          email,
          from_name: name,
          subject: `New Project Request: ${name} (${projectType})`,
          message: `Project Type: ${projectType}\n\n${message}`,
        }),
      })
      const data = await res.json().catch(() => null)
      if (res.ok && data?.success) {
        return NextResponse.json({ ok: true, delivered: true, provider: "web3forms" })
      }
    } catch {
      // Fall through to fallback
    }
  }

  // Fallback: validated payload successfully, user can complete delivery via email app
  return NextResponse.json({ ok: true, delivered: false })
}
