import { NextResponse } from "next/server"
import { contactSchema } from "@/lib/contact-schema"
import { profile } from "@/lib/data/profile"

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

  // Option 1: Resend API (set RESEND_API_KEY in your env or Vercel dashboard)
  if (process.env.RESEND_API_KEY) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Portfolio Lead <onboarding@resend.dev>",
          to: [profile.email],
          reply_to: email,
          subject: `New Project Inquiry: ${name} (${projectType})`,
          text: `Name: ${name}\nEmail: ${email}\nProject Type: ${projectType}\n\nMessage:\n${message}`,
        }),
      })
      if (res.ok) {
        return NextResponse.json({ ok: true, delivered: true })
      }
    } catch {
      // Fall through to fallback
    }
  }

  // Option 2: Web3Forms (fallback server-side delivery)
  const web3FormsKey = process.env.WEB3FORMS_ACCESS_KEY || "fa412951-f8fa-46e5-892a-de23943b8ec8"
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
        return NextResponse.json({ ok: true, delivered: true })
      }
    } catch {
      // Fall through to fallback
    }
  }

  // Fallback: validated payload successfully, user can complete delivery via email or WhatsApp
  return NextResponse.json({ ok: true, delivered: false })
}
