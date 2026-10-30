"use client"

import { motion, useInView } from "motion/react"
import { useRef } from "react"
import { CtaLink } from "@/components/cta-button"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"

const steps = [
  {
    number: "01",
    title: "Discovery Call",
    duration: "30 min",
    description:
      "We hop on a free call to map your goals, challenges, timeline, and budget. I ask the right technical questions so the proposal is precise, not padded.",
    accent: "#3a4cff",
    accentRgb: "58 76 255",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="size-5">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.36 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Proposal & Scope",
    duration: "1–2 days",
    description:
      "You receive a detailed written proposal: exact deliverables, tech stack, milestone breakdown, timeline, and fixed price. No ambiguity, no scope creep.",
    accent: "#8a3dff",
    accentRgb: "138 61 255",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="size-5">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14,2 14,8 20,8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10,9 9,9 8,9" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Build & Iterate",
    duration: "Sprints",
    description:
      "I build in structured sprints with weekly demos and async updates. You see real, working software at each milestone — not a big reveal at the end.",
    accent: "#22cfee",
    accentRgb: "34 207 238",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="size-5">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Launch & Handover",
    duration: "1–2 days",
    description:
      "Production deployment, full documentation, environment configs, and a recorded walkthrough. You leave with a codebase you truly own and can hand to any developer.",
    accent: "#ff4fa3",
    accentRgb: "255 79 163",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="size-5">
        <path d="M22.7 19.5l-7.1-7.1" />
        <path d="m5 3 4 4" />
        <path d="m15 3-4 4" />
        <path d="M4.929 19.071A10 10 0 0 0 19.07 4.93" />
        <path d="M2 12h2" />
        <path d="M12 2v2" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Support & Growth",
    duration: "Ongoing",
    description:
      "Optional retainer for bug fixes, new features, and performance monitoring. I stay available to grow the product alongside your business needs.",
    accent: "#34d399",
    accentRgb: "52 211 153",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="size-5">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
]

function StepCard({ step, index }: { step: (typeof steps)[0]; index: number }) {
  const ref = useRef<HTMLLIElement>(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <li ref={ref} className="relative flex gap-5 md:gap-7">
      {/* Connector line */}
      {index < steps.length - 1 && (
        <div
          aria-hidden="true"
          className="absolute left-[1.625rem] top-14 hidden h-[calc(100%+2rem)] w-px md:block"
          style={{ background: `linear-gradient(to bottom, rgb(${step.accentRgb}/0.4), transparent)` }}
        />
      )}

      {/* Step icon bubble */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : {}}
        transition={{ delay: index * 0.1 + 0.1, type: "spring", stiffness: 300, damping: 22 }}
        aria-hidden="true"
        className="relative z-10 mt-1 flex size-[3.25rem] shrink-0 items-center justify-center rounded-2xl text-white shadow-lg"
        style={{
          background: `linear-gradient(135deg, ${step.accent}dd, ${step.accent}88)`,
          boxShadow: `0 8px 24px -6px rgb(${step.accentRgb}/0.5)`,
        }}
      >
        {step.icon}
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: -16 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: index * 0.1 + 0.15, duration: 0.5, ease: "easeOut" }}
        className="glass flex-1 rounded-[1.75rem] p-6 md:p-7"
      >
        <div className="mb-3 flex flex-wrap items-center gap-3">
          <span
            className="font-mono text-sm font-bold"
            style={{ color: step.accent }}
          >
            {step.number}
          </span>
          <h3 className="text-lg font-bold">{step.title}</h3>
          <span className="ml-auto rounded-full border border-border px-3 py-0.5 text-xs font-semibold text-muted-foreground">
            {step.duration}
          </span>
        </div>
        <p className="leading-relaxed text-muted-foreground">{step.description}</p>
      </motion.div>
    </li>
  )
}

export function HowWeWork() {
  return (
    <section id="process" aria-labelledby="process-title" className="scroll-mt-24 sm:scroll-mt-28 px-4">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.3fr] lg:gap-24">
          {/* Left: heading + CTA */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Reveal>
              <p className="eyebrow mb-4">How it works</p>
              <h2
                id="process-title"
                className="text-balance text-4xl font-extrabold tracking-tight md:text-5xl"
              >
                From first message to{" "}
                <span className="text-gradient">production launch</span>
              </h2>
              <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
                A simple, transparent process with no surprises. You always know what&apos;s happening, what&apos;s next, and what it costs.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <CtaLink href="/contact">Start the conversation</CtaLink>
                <CtaLink href="/work" variant="glass" arrow={false}>
                  See past work
                </CtaLink>
              </div>
            </Reveal>

            {/* Quick trust stats */}
            <Reveal delay={0.1} className="mt-10 grid grid-cols-2 gap-3">
              {[
                { value: "24h", label: "Response time" },
                { value: "100%", label: "Project ownership" },
                { value: "IST / GMT / EST", label: "Time zones covered" },
                { value: "Fixed price", label: "No surprise invoices" },
              ].map((s) => (
                <div key={s.label} className="glass rounded-2xl p-4">
                  <p className="text-gradient text-xl font-extrabold">{s.value}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </Reveal>
          </div>

          {/* Right: step list */}
          <ol className="space-y-8">
            {steps.map((step, i) => (
              <StepCard key={step.number} step={step} index={i} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
