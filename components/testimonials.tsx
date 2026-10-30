"use client"

import { CheckCircle2, ExternalLink, Quote, Star } from "lucide-react"
import Link from "next/link"
import { motion } from "motion/react"
import { CtaLink } from "@/components/cta-button"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { testimonials } from "@/lib/data/testimonials"
import { cn } from "@/lib/utils"

export function Testimonials() {
  return (
    <section id="testimonials" aria-labelledby="testimonials-title" className="scroll-mt-24 sm:scroll-mt-28 px-4">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Client Outcomes"
          title={
            <>
              What clients say about{" "}
              <span className="text-gradient">delivering real results</span>
            </>
          }
          description="Measurable business outcomes and direct feedback from founders and technical leads who relied on Vektorsynapse."
          action={
            <CtaLink href="/work" variant="glass">
              Explore All Case Studies
            </CtaLink>
          }
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {testimonials.map((t, i) => (
            <Reveal
              key={t.id}
              delay={i * 0.1}
              className={cn(
                "h-full flex flex-col",
                i === 2 ? "md:max-lg:col-span-2 md:max-lg:max-w-xl md:max-lg:mx-auto md:max-lg:w-full" : "",
              )}
            >
              <motion.article
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
                className="glass relative flex h-full flex-col justify-between rounded-[1.75rem] sm:rounded-[2rem] p-5 sm:p-6 lg:p-7 shadow-sm transition-all duration-300 hover:shadow-xl dark:border-white/10 dark:bg-slate-900/40"
              >
                <div className="flex-1 flex flex-col">
                  {/* Top row: stars + verified badge */}
                  <div className="flex flex-wrap items-center justify-between gap-2.5">
                    <div role="img" className="flex items-center gap-1 text-amber-400 shrink-0" aria-label={`${t.rating} out of 5 stars`}>
                      {Array.from({ length: t.rating }).map((_, starIdx) => (
                        <Star key={starIdx} className="size-4 fill-current" />
                      ))}
                    </div>
                    <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 text-xs font-semibold text-emerald-600 dark:border-emerald-400/20 dark:bg-emerald-500/15 dark:text-emerald-400">
                      <CheckCircle2 aria-hidden="true" className="size-3.5 shrink-0" />
                      <span>Verified Client</span>
                    </span>
                  </div>

                  {/* Quote icon & text */}
                  <div className="relative mt-5 flex-1">
                    <Quote
                      aria-hidden="true"
                      className="pointer-events-none absolute -left-2 -top-2 size-8 text-brand-violet/15 dark:text-violet-400/15"
                    />
                    <p className="relative z-10 text-pretty text-sm sm:text-[15px] leading-relaxed text-foreground/90">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                  </div>
                </div>

                {/* Bottom meta */}
                <div className="mt-6 border-t border-border/80 pt-5 dark:border-white/10">
                  {t.metrics && (
                    <div className="mb-4">
                      <span className="inline-flex max-w-full items-center truncate rounded-xl border border-primary/20 bg-primary/5 px-3 py-1 font-mono text-xs font-semibold text-primary dark:border-primary/30 dark:bg-primary/10 dark:text-violet-300">
                        {t.metrics}
                      </span>
                    </div>
                  )}

                  <div className="flex items-center justify-between gap-3">
                    <div className="flex min-w-0 flex-1 items-center gap-3">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#3a4cff] to-[#8a3dff] font-mono text-xs font-bold text-white shadow-md">
                        {t.avatarInitials}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-bold text-slate-900 dark:text-white">
                          {t.clientName || t.company}
                        </p>
                        <p className="truncate text-xs text-muted-foreground" title={t.clientName ? `${t.role} · ${t.company}` : `${t.role} · ${t.location}`}>
                          {t.clientName ? `${t.role} · ${t.company}` : `${t.role} · ${t.location}`}
                        </p>
                      </div>
                    </div>

                    {t.projectSlug && (
                      <Link
                        href={`/work/${t.projectSlug}`}
                        className="group/link shrink-0 flex size-9 items-center justify-center rounded-full border border-border/70 bg-foreground/[0.04] text-muted-foreground transition-all duration-200 hover:border-primary/50 hover:bg-primary/10 hover:text-primary active:scale-95 dark:border-white/15 dark:hover:border-violet-500/50 dark:hover:bg-violet-500/20 dark:hover:text-violet-300"
                        aria-label={`View ${t.projectTitle} project details`}
                        title="View case study"
                      >
                        <ExternalLink aria-hidden="true" className="size-4 transition-transform duration-200 group-hover/link:scale-110" />
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
