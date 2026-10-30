import { Code, FileText, Star, Users } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { verifiedMetrics } from "@/lib/data/profile"

const items = [
  { ...verifiedMetrics[0], icon: FileText, color: "bg-blue-50 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400" },
  { ...verifiedMetrics[1], icon: Users, color: "bg-indigo-50 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-400" },
  { ...verifiedMetrics[2], icon: Code, color: "bg-teal-50 text-teal-600 dark:bg-teal-500/20 dark:text-teal-400" },
  { ...verifiedMetrics[3], icon: Star, color: "bg-amber-50 text-amber-500 dark:bg-amber-500/20 dark:text-amber-400" },
]

export function MetricsBand() {
  return (
    <section aria-label="Verified results" className="px-4">
      <Reveal className="mx-auto max-w-7xl">
        <div className="glass grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 rounded-3xl p-4">
          {items.map((m) => {
            const Icon = m.icon
            return (
              <div
                key={m.label}
                className="flex items-center gap-3.5 rounded-2xl p-3 transition-colors hover:bg-white/60 dark:hover:bg-white/5"
              >
                <span
                  className={`flex size-12 shrink-0 items-center justify-center rounded-2xl shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.7),inset_0_-2px_4px_rgba(0,0,0,0.1),0_4px_12px_-2px_rgba(0,0,0,0.08)] ${m.color}`}
                >
                  <Icon aria-hidden="true" className="size-5" strokeWidth={2.2} />
                </span>
                <div className="min-w-0">
                  <p className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-none">
                    {m.value}
                  </p>
                  <p className="mt-1 text-xs font-bold text-slate-700 dark:text-slate-300">
                    {m.label}
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
