"use client"

import { Check, Copy, Loader2, Mail, Send } from "lucide-react"
import { useRef, useState } from "react"
import { ctaClass } from "@/components/cta-button"
import { CustomSelect } from "@/components/custom-select"
import { contactSchema, projectTypes, type ContactField, type ContactInput } from "@/lib/contact-schema"
import { profile } from "@/lib/data/profile"

type Status = "idle" | "submitting" | "ready" | "error"
type Errors = Partial<Record<ContactField, string>>

const fieldClass =
  "w-full rounded-2xl border border-input bg-white/70 px-4 py-3 text-base shadow-inner outline-none transition focus:border-ring focus:ring-4 focus:ring-ring/20 dark:bg-white/5 aria-[invalid=true]:border-destructive"

function composeMessage(v: ContactInput) {
  return `Hi Vektorsynapse,\n\nProject type: ${v.projectType}\n\n${v.message}\n\n${v.name}\n${v.email}`
}

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle")
  const [errors, setErrors] = useState<Errors>({})
  const [formError, setFormError] = useState("")
  const [values, setValues] = useState<ContactInput | null>(null)
  const [delivered, setDelivered] = useState(false)
  const [copied, setCopied] = useState(false)
  const isSubmittingRef = useRef(false)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    // Prevent duplicate triggers if already submitting
    if (isSubmittingRef.current || status === "submitting") {
      return
    }

    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))
    const parsed = contactSchema.safeParse(data)
    if (!parsed.success) {
      const next: Errors = {}
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as ContactField
        if (!next[key]) next[key] = issue.message
      }
      setErrors(next)
      setStatus("idle")
      return
    }

    isSubmittingRef.current = true
    setErrors({})
    setFormError("")
    setStatus("submitting")

    try {
      let sentSuccessfully = false

      // 1. Primary: Post to internal API route (handles Resend custom HTML emails)
      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(parsed.data),
        })

        const body = await res.json().catch(() => ({}))
        if (res.ok && body.delivered) {
          sentSuccessfully = true
        }
      } catch {
        // Fall through to backup provider
      }

      // 2. Backup: Direct client-side Web3Forms if Resend is not set or failed
      if (!sentSuccessfully) {
        const web3Key = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY
        if (web3Key) {
          try {
            const formData = new FormData()
            formData.append("access_key", web3Key)
            formData.append("name", parsed.data.name)
            formData.append("email", parsed.data.email)
            formData.append("from_name", parsed.data.name)
            formData.append("subject", `New Project Inquiry: ${parsed.data.name} (${parsed.data.projectType})`)
            formData.append("project_type", parsed.data.projectType)
            formData.append("message", parsed.data.message)

            const web3Res = await fetch("https://api.web3forms.com/submit", {
              method: "POST",
              headers: { Accept: "application/json" },
              body: formData,
            })
            const web3Data = await web3Res.json().catch(() => null)
            if (web3Res.ok && web3Data?.success) {
              sentSuccessfully = true
            }
          } catch {
            // Fall through to draft fallback
          }
        }
      }

      if (sentSuccessfully) {
        setValues(parsed.data)
        setDelivered(true)
        setStatus("ready")
      } else {
        // 3. Final fallback: prepared draft for email app
        setValues(parsed.data)
        setDelivered(false)
        setStatus("ready")
      }
    } catch (err) {
      setFormError(err instanceof Error ? err.message : "Something went wrong. Please try again.")
      setStatus("error")
    } finally {
      isSubmittingRef.current = false
    }
  }

  async function copy() {
    if (!values) return
    await navigator.clipboard.writeText(composeMessage(values))
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  if (status === "ready" && values) {
    const text = composeMessage(values)
    const subject = `Project enquiry: ${values.projectType}`

    if (delivered) {
      return (
        <div className="glass rounded-[2.25rem] p-8 md:p-10" role="status">
          <span className="flex size-14 items-center justify-center rounded-full bg-gradient-to-br from-[#34d399] to-[#0ea5a4] text-white shadow-lg">
            <Check aria-hidden="true" className="size-7" />
          </span>
          <h2 className="mt-6 text-2xl font-extrabold">Message Sent Successfully!</h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            Thank you, <strong className="text-foreground">{values.name}</strong>. Your message regarding{" "}
            <strong className="text-foreground">{values.projectType}</strong> has been delivered to our inbox. We typically review and reply within a few hours.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => {
                setStatus("idle")
                setValues(null)
              }}
              className="text-sm font-semibold text-primary underline-offset-4 hover:underline"
            >
              Send another message
            </button>
          </div>
        </div>
      )
    }

    return (
      <div className="glass rounded-[2.25rem] p-8 md:p-10" role="status">
        <span className="flex size-14 items-center justify-center rounded-full bg-gradient-to-br from-[#34d399] to-[#0ea5a4] text-white shadow-lg">
          <Check aria-hidden="true" className="size-7" />
        </span>
        <h2 className="mt-6 text-2xl font-extrabold">Your project details are ready!</h2>
        <p className="mt-3 leading-relaxed text-muted-foreground">
          Send your drafted message via email:
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={`mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`}
            className={ctaClass("primary")}
          >
            <Mail aria-hidden="true" className="size-4" />
            Open in Email App
          </a>
          <button type="button" onClick={copy} className={ctaClass("glass")}>
            {copied ? <Check aria-hidden="true" className="size-4" /> : <Copy aria-hidden="true" className="size-4" />}
            {copied ? "Copied" : "Copy text"}
          </button>
        </div>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold text-primary underline-offset-4 hover:underline"
        >
          Edit details
        </button>
      </div>
    )
  }

  const err = (k: ContactField) => errors[k]
  return (
    <form onSubmit={onSubmit} noValidate className="glass space-y-5 rounded-[2.25rem] p-8 md:p-10">
      <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-semibold">
            Name
          </label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            defaultValue={values?.name}
            className={fieldClass}
            aria-invalid={Boolean(err("name"))}
            aria-describedby={err("name") ? "name-error" : undefined}
          />
          {err("name") && (
            <p id="name-error" className="mt-1.5 text-sm text-destructive">
              {err("name")}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-semibold">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            defaultValue={values?.email}
            className={fieldClass}
            aria-invalid={Boolean(err("email"))}
            aria-describedby={err("email") ? "email-error" : undefined}
          />
          {err("email") && (
            <p id="email-error" className="mt-1.5 text-sm text-destructive">
              {err("email")}
            </p>
          )}
        </div>
      </div>
      <div className="relative z-20">
        <label htmlFor="projectType" className="mb-2 block text-sm font-semibold">
          What do you need?
        </label>
        <CustomSelect
          id="projectType"
          name="projectType"
          placeholder="Choose a project type"
          defaultValue={values?.projectType ?? ""}
          options={projectTypes}
          error={err("projectType")}
        />
        {err("projectType") && (
          <p id="type-error" className="mt-1.5 text-sm text-destructive">
            {err("projectType")}
          </p>
        )}
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-semibold">
          Project details
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          defaultValue={values?.message}
          className={fieldClass}
          aria-invalid={Boolean(err("message"))}
          aria-describedby={err("message") ? "message-error" : undefined}
        />
        {err("message") && (
          <p id="message-error" className="mt-1.5 text-sm text-destructive">
            {err("message")}
          </p>
        )}
      </div>
      {formError && (
        <p role="alert" className="text-sm font-semibold text-destructive">
          {formError}
        </p>
      )}
      <button type="submit" disabled={status === "submitting"} className={ctaClass("primary", "lg", "w-full disabled:opacity-70 disabled:cursor-not-allowed")}>
        {status === "submitting" ? <Loader2 aria-hidden="true" className="size-5 animate-spin" /> : <Send aria-hidden="true" className="size-5" />}
        {status === "submitting" ? "Sending Message…" : "Send Message"}
      </button>
    </form>
  )
}
