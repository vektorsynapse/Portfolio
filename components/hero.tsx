import { ArrowRight, Play, Star } from "lucide-react"
import { Reveal } from "@/components/reveal"

export function Hero() {
  return (
    <section
      className="relative flex min-h-[100dvh] flex-col justify-center overflow-hidden px-4 pt-24 pb-14 sm:pt-28 sm:pb-16"
      aria-labelledby="hero-title"
    >
      {/* Light theme background - hidden on small screens */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-cover bg-right bg-no-repeat transition-opacity duration-500 dark:opacity-0 hidden md:block"
        style={{ backgroundImage: "url('/hero.png')" }}
      />

      {/* Dark theme background - hidden on small screens */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-cover bg-right bg-no-repeat opacity-0 transition-opacity duration-500 dark:opacity-100 hidden md:block"
        style={{ backgroundImage: "url('/hero-dark.png')" }}
      />

      {/* Soft directional scrim behind text for optimal legibility across both themes on desktop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 w-full max-w-3xl bg-gradient-to-r from-background/70 via-background/35 to-transparent select-none dark:from-[#0c0a24]/80 dark:via-[#0c0a24]/40 hidden md:block"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="min-w-0 max-w-2xl lg:max-w-xl xl:max-w-2xl">
          <Reveal immediate>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-white/95 px-3.5 py-1.5 text-xs font-semibold text-emerald-700 shadow-[0_2px_8px_-2px_rgba(16,185,129,0.25),inset_0_1.5px_1px_rgba(255,255,255,0.9),inset_0_-1.5px_3px_rgba(0,0,0,0.05)] backdrop-blur-md dark:border-emerald-400/30 dark:bg-slate-900/85 dark:text-emerald-300 dark:shadow-[0_2px_8px_-2px_rgba(16,185,129,0.35),inset_0_1.5px_1px_rgba(255,255,255,0.2),inset_0_-1.5px_3px_rgba(0,0,0,0.4)]">
              <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for new projects</span>
            </div>
          </Reveal>
          <Reveal immediate delay={0.08}>
            <p className="eyebrow mb-3 tracking-[0.22em] font-bold text-xs uppercase text-slate-800 dark:text-violet-300">
              Full-Stack Software Studio
            </p>
          </Reveal>
          <Reveal immediate delay={0.14}>
            <h1
              id="hero-title"
              className="text-balance text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl xl:text-[3.55rem] dark:text-white"
            >
              Building Modern{" "}
              <span className="bg-gradient-to-r from-[#2563eb] via-[#9333ea] to-[#f43f5e] bg-clip-text text-transparent dark:from-[#38bdf8] dark:via-[#a855f7] dark:to-[#f43f5e]">
                Web Experiences
              </span>{" "}
              for Global Brands
            </h1>
          </Reveal>
          <Reveal immediate delay={0.22}>
            <p className="mt-5 max-w-xl text-pretty text-base sm:text-[17px] leading-relaxed font-medium text-slate-700 dark:text-slate-200">
              Vektorsynapse designs and develops high-performance websites and web applications using React, Next.js, Node.js and more. Focused on creating clean, scalable and user-friendly solutions for businesses worldwide.
            </p>
          </Reveal>
          <Reveal immediate delay={0.3} className="mt-7 flex flex-wrap gap-3.5">
            <a
              href="/contact"
              className="group/hero-cta inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#6366f1] via-[#a855f7] to-[#f43f5e] px-7 py-3.5 text-sm font-bold text-white shadow-[0_4px_16px_-2px_rgba(244,63,94,0.35),0_10px_26px_-4px_rgba(168,85,247,0.35),inset_0_1.5px_1px_rgba(255,255,255,0.65),inset_0_-3px_6px_rgba(0,0,0,0.18)] transition-all duration-200 hover:scale-[1.03] hover:shadow-[0_8px_24px_-2px_rgba(244,63,94,0.45),0_14px_32px_-4px_rgba(168,85,247,0.45),inset_0_1.5px_1.5px_rgba(255,255,255,0.8),inset_0_-3px_8px_rgba(0,0,0,0.22)] hover:brightness-105 active:scale-[0.97]"
            >
              <span>Let&apos;s Discuss Your Project</span>
              <ArrowRight className="size-4 transition-transform duration-200 group-hover/hero-cta:translate-x-1" />
            </a>
            <a
              href="/work"
              className="group/hero-work inline-flex items-center justify-center gap-2.5 rounded-full border border-slate-900/10 bg-white/90 px-6 py-3.5 text-sm font-bold text-slate-900 shadow-[0_4px_16px_-2px_rgba(0,0,0,0.06),inset_0_1.5px_1px_rgba(255,255,255,0.85),inset_0_-2px_5px_rgba(0,0,0,0.05)] backdrop-blur-md transition-all duration-200 hover:bg-white hover:border-primary/40 hover:scale-[1.03] hover:shadow-[0_8px_24px_-2px_rgba(0,0,0,0.1),inset_0_1.5px_1.5px_rgba(255,255,255,0.95),inset_0_-2.5px_6px_rgba(0,0,0,0.08)] hover:text-primary active:scale-[0.97] dark:border-white/15 dark:bg-slate-900/80 dark:text-white dark:shadow-[0_4px_16px_-2px_rgba(0,0,0,0.35),inset_0_1.5px_1px_rgba(255,255,255,0.25),inset_0_-2.5px_6px_rgba(0,0,0,0.4)] dark:hover:bg-slate-800/90 dark:hover:border-primary/40 dark:hover:shadow-[0_8px_24px_-2px_rgba(0,0,0,0.5),inset_0_1.5px_1.5px_rgba(255,255,255,0.35),inset_0_-3px_8px_rgba(0,0,0,0.5)]"
            >
              <span>View My Work</span>
              <Play className="size-3.5 fill-current text-primary transition-transform duration-200 group-hover/hero-work:scale-125" />
            </a>
          </Reveal>
          <Reveal immediate delay={0.38} className="mt-8 flex flex-wrap items-center gap-3 text-sm">
            {/* 4 Overlapping Avatar Portraits matching target image */}
            <div className="flex -space-x-2">
              <span className="inline-flex size-7.5 items-center justify-center rounded-full bg-[#3b82f6] font-bold text-[9px] text-white ring-2 ring-white shadow-xs dark:ring-slate-900">
                SJ
              </span>
              <span className="inline-flex size-7.5 items-center justify-center rounded-full bg-[#8b5cf6] font-bold text-[9px] text-white ring-2 ring-white shadow-xs dark:ring-slate-900">
                MB
              </span>
              <span className="inline-flex size-7.5 items-center justify-center rounded-full bg-[#ec4899] font-bold text-[9px] text-white ring-2 ring-white shadow-xs dark:ring-slate-900">
                ED
              </span>
              <span className="inline-flex size-7.5 items-center justify-center rounded-full bg-[#f59e0b] font-bold text-[9px] text-white ring-2 ring-white shadow-xs dark:ring-slate-900">
                RK
              </span>
            </div>
            <div className="flex items-center gap-0.5 text-amber-500 dark:text-amber-400" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-current" />
              ))}
            </div>
            <span className="text-xs font-bold text-slate-900 dark:text-white">
              5.0 <span className="font-medium text-slate-600 dark:text-slate-300">(Client Satisfaction)</span>
            </span>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
