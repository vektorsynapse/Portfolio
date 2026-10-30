"use client"

import { Check, Clock, HelpCircle, Minus, Sparkles } from "lucide-react"
import { motion } from "motion/react"
import { useState } from "react"
import { CtaLink } from "@/components/cta-button"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { pricingTiers } from "@/lib/data/pricing"
import { cn } from "@/lib/utils"

type Currency = "INR" | "USD" | "EUR"

const rates: Record<Currency, { symbol: string; rate: number }> = {
  INR: { symbol: "₹", rate: 1 },
  USD: { symbol: "$", rate: 0.014 },
  EUR: { symbol: "€", rate: 0.013 },
}

/** Convert a ₹ price string like "₹1,000 – ₹5,000" to the chosen currency */
function convertPrice(inrString: string, currency: Currency) {
  const { symbol, rate } = rates[currency]

  if (inrString.includes("–") || inrString.includes("-")) {
    const parts = inrString.split(/[–-]/).map((p) => p.trim())
    const convertedParts = parts.map((part) => {
      const hasPlus = part.endsWith("+")
      const num = Number(part.replace(/[₹,+]/g, ""))
      if (isNaN(num)) return part
      const converted = Math.max(1, Math.round(num * rate))
      return `${symbol}${converted.toLocaleString()}${hasPlus ? "+" : ""}`
    })
    return convertedParts.join(" – ")
  }

  const hasPlus = inrString.endsWith("+")
  const num = Number(inrString.replace(/[₹,+]/g, ""))
  if (isNaN(num)) return inrString
  const converted = Math.max(1, Math.round(num * rate))
  return `${symbol}${converted.toLocaleString()}${hasPlus ? "+" : ""}`
}

export function Pricing() {
  const [currency, setCurrency] = useState<Currency>("INR")

  return (
    <section id="pricing" aria-labelledby="pricing-title" className="scroll-mt-24 sm:scroll-mt-28 px-4">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Pricing"
          title={
            <>
              Transparent,{" "}
              <span className="text-gradient">fixed-price packages</span>
            </>
          }
          description="No hourly surprises. Every project starts with a written scope and a fixed price tied to milestones — you know exactly what you're paying before work begins."
        />

        {/* Currency switcher */}
        <Reveal className="mt-10 flex items-center gap-2">
          <span className="text-sm font-medium text-muted-foreground">Show prices in</span>
          <div className="glass flex gap-1 rounded-full p-1">
            {(["INR", "USD", "EUR"] as Currency[]).map((c) => (
              <button
                key={c}
                type="button"
                aria-pressed={currency === c}
                aria-label={`Show prices in ${c}`}
                onClick={() => setCurrency(c)}
                className={cn(
                  "cursor-pointer rounded-full px-4 py-1.5 text-sm font-semibold transition-all duration-200",
                  currency === c
                    ? "bg-gradient-to-r from-[#3a4cff] to-[#8a3dff] text-white shadow-sm shadow-purple-500/25 scale-[1.02]"
                    : "text-muted-foreground hover:text-foreground hover:bg-foreground/[0.06] active:scale-95",
                )}
              >
                {c}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Tier cards */}
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {pricingTiers.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 0.08}>
              <motion.article
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className={cn(
                  "glass relative flex h-full flex-col overflow-hidden rounded-[2rem] p-7 transition-shadow duration-300",
                  tier.popular &&
                    "ring-2 ring-[#8a3dff]/40 shadow-lg shadow-purple-500/10",
                )}
                style={
                  {
                    "--acc-a": tier.accent,
                    "--acc-b": tier.accent,
                  } as React.CSSProperties
                }
              >
                {/* Background blob */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-12 -top-12 size-48 rounded-full blur-3xl"
                  style={{ background: `rgb(${tier.accentRgb}/0.12)` }}
                />

                {/* Popular badge */}
                {tier.badge && (
                  <div
                    className="mb-4 inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold text-white"
                    style={{
                      background: `linear-gradient(135deg, ${tier.accent}dd, ${tier.accent}88)`,
                      boxShadow: `0 4px 14px -4px rgb(${tier.accentRgb}/0.6)`,
                    }}
                  >
                    <Sparkles aria-hidden="true" className="size-3" />
                    {tier.badge}
                  </div>
                )}

                {/* Header */}
                <div className="relative">
                  <h3 className="text-xl font-extrabold">{tier.name}</h3>
                  <p className="mt-0.5 text-sm text-muted-foreground">{tier.tagline}</p>

                  {/* Price */}
                  <div className="mt-5 flex flex-wrap items-baseline gap-2">
                    <span
                      className="text-2xl font-extrabold tracking-tight tabular-nums sm:text-3xl"
                      style={{ color: tier.accent }}
                    >
                      {convertPrice(tier.priceFrom, currency)}
                    </span>
                    <span className="text-xs font-medium text-muted-foreground">{tier.priceSuffix}</span>
                  </div>

                  {/* Timeline Badge */}
                  <div className="mt-3.5 inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-foreground/[0.04] px-3 py-1 text-xs font-semibold text-foreground/80">
                    <Clock aria-hidden="true" className="size-3.5 text-brand-violet" />
                    <span>{tier.timeline}</span>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {tier.description}
                  </p>
                </div>

                {/* Divider */}
                <div className="my-6 h-px bg-border" />

                {/* Features */}
                <ul className="relative flex-1 space-y-3">
                  {tier.features.map((f) => (
                    <li key={f.text} className="flex items-start gap-3 text-sm">
                      {f.included ? (
                        <span
                          aria-hidden="true"
                          className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full"
                          style={{ background: `rgb(${tier.accentRgb}/0.15)` }}
                        >
                          <Check
                            className="size-3 font-bold"
                            style={{ color: tier.accent }}
                            strokeWidth={3}
                          />
                        </span>
                      ) : (
                        <span
                          aria-hidden="true"
                          className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-foreground/5"
                        >
                          <Minus className="size-3 text-muted-foreground/40" strokeWidth={2.5} />
                        </span>
                      )}
                      <span className={cn(!f.included && "text-muted-foreground/50")}>
                        {f.text}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="mt-7">
                  <CtaLink
                    href={tier.ctaHref}
                    size="lg"
                    className={cn(
                      "w-full justify-center",
                      !tier.popular && "!bg-foreground/6 !bg-none !text-foreground !shadow-none hover:!bg-foreground/10",
                    )}
                  >
                    {tier.cta}
                  </CtaLink>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>

        {/* Footer note & Bug fixes banner */}
        <Reveal className="mt-8 flex flex-col gap-4 rounded-2xl border border-border p-5 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <HelpCircle aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-brand-violet" />
            <div>
              <p>
                <strong className="text-foreground">Need a quick bug fix or single UI tweak?</strong> Clearly identified small issues start at{" "}
                <strong className="text-foreground">₹500 – ₹1,500</strong>.
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                Payment gateways, custom dashboards, and full-stack systems are quoted individually. Milestone payments (40% / 30% / 30%) — zero surprise fees.
              </p>
            </div>
          </div>
          <CtaLink href="/contact" size="md" variant="glass" className="shrink-0 text-xs">
            Discuss Scope →
          </CtaLink>
        </Reveal>
      </div>
    </section>
  )
}
