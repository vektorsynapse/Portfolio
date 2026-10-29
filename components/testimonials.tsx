"use client"

import { CheckCircle2, ExternalLink, Quote, Star } from "lucide-react"
import Link from "next/link"
import { motion } from "motion/react"
import { CtaLink } from "@/components/cta-button"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { testimonials } from "@/lib/data/testimonials"

export function Testimonials() {
  return (
    <section id="testimonials" aria-labelledby="testimonials-title" className="scroll-mt-28 px-4 pt-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Social Proof"
          title={
            <>
              What clients say about{" "}
              <span className="text-gradient">delivering real results</span>
            </>
          }
          description="Direct feedback from business owners and technical leads who relied on me to deliver mission-critical software."
          action={
            <CtaLink href="/work" variant="glass">
              Explore All Case Studies
            </CtaLink>
          }
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.id} delay={i * 0.1}>
              <motion.article
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
                className="glass relative flex h-full flex-col justify-between rounded-[2rem] p-7 shadow-sm transition-shadow duration-300 hover:shadow-xl"
              >
                <div>
                  {/* Top row: stars + verified badge */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1 text-amber-400" aria-label={`${t.rating} out of 5 stars`}>
                      {Array.from({ length: t.rating }).map((_, starIdx) => (
                        <Star key={starIdx} className="size-4 fill-current" />
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                      <CheckCircle2 className="size-3" /> Verified Client
                    </span>
                  </div>

                  {/* Quote icon & text */}
                  <div className="relative mt-5">
                    <Quote
                      aria-hidden="true"
                      className="absolute -left-2 -top-2 size-8 text-brand-violet/15"
                    />
                    <p className="relative z-10 text-pretty text-sm leading-relaxed text-foreground/90">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                  </div>
                </div>

                {/* Bottom meta */}
                <div className="mt-6 border-t border-border pt-5">
                  {t.metrics && (
                    <div className="mb-4 inline-block rounded-xl bg-foreground/[0.04] px-3 py-1 font-mono text-xs font-semibold text-primary">
                      {t.metrics}
                    </div>
                  )}

                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#3a4cff] to-[#8a3dff] font-mono text-xs font-bold text-white shadow-md">
                        {t.avatarInitials}
                      </div>
                      <div className="min-w-0">
                        <p className="truncate text-sm font-bold">{t.clientName}</p>
                        <p className="truncate text-xs text-muted-foreground">
                          {t.role} · {t.company}
                        </p>
                      </div>
                    </div>

                    {t.projectSlug && (
                      <Link
                        href={`/work/${t.projectSlug}`}
                        className="cursor-pointer rounded-full p-2 text-muted-foreground transition-colors hover:bg-foreground/5 hover:text-foreground"
                        aria-label={`View ${t.projectTitle} project details`}
                        title="View case study"
                      >
                        <ExternalLink className="size-4" />
                      </Link>
                    )}
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
