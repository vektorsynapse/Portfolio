import { Mail } from "lucide-react"
import { CtaLink } from "@/components/cta-button"
import { Reveal } from "@/components/reveal"
import { profile } from "@/lib/data/profile"

export function CtaBand() {
  return (
    <section aria-labelledby="cta-title" className="px-4 pt-28">
      <Reveal className="relative mx-auto max-w-7xl overflow-hidden rounded-[3rem] border border-white/90 bg-white/85 p-10 text-center shadow-[0_24px_50px_-12px_rgba(90,70,220,0.12),inset_0_2px_1.5px_#ffffff,inset_0_-3px_8px_rgba(90,70,220,0.06)] backdrop-blur-2xl transition-all duration-300 md:p-16 dark:border-white/12 dark:bg-gradient-to-br dark:from-[#120e36]/90 dark:via-[#191345]/85 dark:to-[#221344]/90 dark:shadow-[0_28px_60px_-15px_rgba(0,0,0,0.7),inset_0_1.5px_1px_rgba(255,255,255,0.18),inset_0_-3px_10px_rgba(0,0,0,0.5)]">
        {/* Ambient atmospheric glows matching hero and page background lighting */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-16 -top-16 size-80 rounded-full bg-gradient-to-br from-[#8b5cf6]/20 to-[#3b82f6]/20 blur-3xl dark:from-[#6366f1]/25 dark:to-[#3b82f6]/20"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-20 -right-10 size-80 rounded-full bg-gradient-to-tl from-[#ec4899]/20 to-[#f59e0b]/15 blur-3xl dark:from-[#ec4899]/25 dark:to-[#a855f7]/20"
        />

        <div className="relative z-10">
          <p className="eyebrow font-bold tracking-[0.25em] text-violet-700 dark:text-violet-300">
            Start a project
          </p>
          <h2
            id="cta-title"
            className="mx-auto mt-4 max-w-3xl text-balance text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl dark:text-white"
          >
            Let&apos;s build something{" "}
            <span className="bg-gradient-to-r from-[#2563eb] via-[#9333ea] to-[#f43f5e] bg-clip-text text-transparent dark:from-[#38bdf8] dark:via-[#a855f7] dark:to-[#f43f5e]">
              dependable
            </span>
            .
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-lg font-medium text-slate-600 dark:text-slate-200">
            {profile.availability}.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <CtaLink
              href="/contact"
              size="lg"
              className="bg-gradient-to-r from-[#3a4cff] via-[#7b3cff] to-[#a855f7] text-white font-bold shadow-[0_6px_22px_-2px_rgba(99,102,241,0.4),inset_0_1.5px_1px_rgba(255,255,255,0.65),inset_0_-2.5px_5px_rgba(0,0,0,0.2)] hover:scale-[1.03] hover:brightness-105 active:scale-[0.97] transition-all duration-200"
            >
              Start the conversation
            </CtaLink>
            <CtaLink
              href={`mailto:${profile.email}`}
              size="lg"
              arrow={false}
              icon={<Mail aria-hidden="true" className="size-4.5 text-white dark:text-cyan-400 shrink-0" />}
              className="bg-slate-900 hover:bg-slate-950 text-white border border-slate-800/80 shadow-[0_6px_20px_-4px_rgba(15,23,42,0.3),inset_0_1.5px_1px_rgba(255,255,255,0.2),inset_0_-2px_4px_rgba(0,0,0,0.3)] dark:bg-slate-900/85 dark:hover:bg-slate-900 dark:text-white dark:border-white/20 dark:shadow-[0_8px_24px_-4px_rgba(0,0,0,0.4),inset_0_1.5px_1px_rgba(255,255,255,0.25),inset_0_-2px_4px_rgba(0,0,0,0.3)] backdrop-blur-md hover:scale-[1.03] active:scale-[0.97] transition-all duration-200"
            >
              <span className="font-bold text-white">{profile.email}</span>
            </CtaLink>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
