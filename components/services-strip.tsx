import { Database, Globe, Rocket, Zap } from "lucide-react"
import { Reveal } from "@/components/reveal"

const pillars = [
  {
    icon: Globe,
    title: "Business Websites",
    description: "Modern, responsive and SEO friendly websites",
    iconBg: "bg-sky-100 text-sky-600 dark:bg-sky-500/20 dark:text-sky-400",
  },
  {
    icon: Zap,
    title: "Web Applications",
    description: "Custom web apps with powerful features",
    iconBg: "bg-purple-100 text-purple-600 dark:bg-purple-500/20 dark:text-purple-400",
  },
  {
    icon: Database,
    title: "API & Integrations",
    description: "Third-party API integrations and custom APIs",
    iconBg: "bg-rose-100 text-rose-600 dark:bg-rose-500/20 dark:text-rose-400",
  },
  {
    icon: Rocket,
    title: "Performance & Growth",
    description: "Optimisation, maintenance and feature development",
    iconBg: "bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400",
  },
]

export function ServicesStrip() {
  return (
    <section id="services" aria-labelledby="services-title" className="relative z-20 scroll-mt-24 sm:scroll-mt-28 px-4">
      <h2 id="services-title" className="sr-only">
        Services & Capabilities
      </h2>
      <Reveal className="mx-auto max-w-7xl">
        <div className="glass grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 rounded-[2rem] p-4 sm:p-5">
          {pillars.map((p) => {
            const Icon = p.icon
            return (
              <div
                key={p.title}
                className="flex items-center gap-3.5 rounded-2xl p-2.5 transition-all hover:bg-white/60 dark:hover:bg-white/5"
              >
                <span
                  className={`flex size-12 shrink-0 items-center justify-center rounded-2xl shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.7),inset_0_-2px_4px_rgba(0,0,0,0.1),0_4px_12px_-2px_rgba(0,0,0,0.08)] ${p.iconBg}`}
                >
                  <Icon aria-hidden="true" className="size-6" strokeWidth={2.2} />
                </span>
                <div className="min-w-0">
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white truncate">
                    {p.title}
                  </h3>
                  <p className="mt-0.5 text-xs text-slate-600 dark:text-slate-300 leading-snug line-clamp-2">
                    {p.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </Reveal>
    </section>
  )
}
