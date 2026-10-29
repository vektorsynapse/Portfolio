import { Bell, CalendarDays, Home, Search, Settings, User, Wallet } from "lucide-react"
import { Icon } from "@/components/icon-map"
import { TiltLayer } from "@/components/tilt-card"
import type { AccentKey, ArtSurface, IconKey } from "@/lib/data/types"
import { cn } from "@/lib/utils"

export const accents: Record<AccentKey, { a: string; b: string }> = {
  violet: { a: "#8b5cf6", b: "#5b3df5" },
  rose: { a: "#ff7aa8", b: "#f43f7a" },
  cyan: { a: "#22d3ee", b: "#3b82f6" },
  indigo: { a: "#6366f1", b: "#3b4bff" },
  emerald: { a: "#34d399", b: "#0ea5a4" },
  amber: { a: "#fbbf24", b: "#f97316" },
  fuchsia: { a: "#e879f9", b: "#a21caf" },
  sky: { a: "#38bdf8", b: "#2563eb" },
}

export function accentStyle(accent: AccentKey) {
  return { "--acc-a": accents[accent].a, "--acc-b": accents[accent].b } as React.CSSProperties
}

const line = "h-1.5 rounded-full bg-foreground/10"
const tilt = "[transform:rotateX(7deg)_rotateY(-12deg)]"

function Win({ className, children, url = true }: { className?: string; children: React.ReactNode; url?: boolean }) {
  return (
    <div className={cn("slab-win flex flex-col overflow-hidden rounded-xl", className)}>
      <div className="flex shrink-0 items-center gap-1.5 border-b border-foreground/[0.06] bg-foreground/[0.03] px-2 py-1.5">
        <span className="size-1.5 rounded-full bg-rose-400" />
        <span className="size-1.5 rounded-full bg-amber-400" />
        <span className="size-1.5 rounded-full bg-emerald-400" />
        {url && <span className="mx-auto h-2.5 w-[48%] rounded-full bg-foreground/[0.07] shadow-[inset_0_1px_1px_rgb(0_0_0/0.08)]" />}
      </div>
      {children}
    </div>
  )
}

function Phone({ className, variant = "home" }: { className?: string; variant?: "home" | "map" }) {
  return (
    <div className={cn("slab-phone flex flex-col rounded-[1.5rem] p-1.5", className)}>
      <div className="relative flex h-full flex-col gap-1.5 overflow-hidden rounded-[1.15rem] bg-white p-2 text-[#1a1745] dark:bg-[#231e58] dark:text-white">
        <div className="mx-auto h-1 w-8 shrink-0 rounded-full bg-foreground/20" />
        <div className="flex items-center justify-between">
          <span className="h-1.5 w-8 rounded-full bg-foreground/30" />
          <Bell className="size-2.5 opacity-60" />
        </div>
        {variant === "map" ? (
          <div className="relative h-[42%] shrink-0 overflow-hidden rounded-lg bg-[linear-gradient(135deg,color-mix(in_oklab,var(--acc-a)_25%,white),color-mix(in_oklab,var(--acc-b)_28%,white))]">
            <svg viewBox="0 0 100 60" className="size-full" aria-hidden="true">
              <path d="M-5 45 C 20 40, 30 20, 55 28 S 85 10, 105 14" fill="none" stroke="white" strokeWidth="5" strokeLinecap="round" opacity="0.9" />
              <path d="M-5 45 C 20 40, 30 20, 55 28 S 85 10, 105 14" fill="none" stroke="var(--acc-b)" strokeWidth="1.6" strokeDasharray="3 3" />
              <circle cx="55" cy="28" r="5" fill="var(--acc-b)" stroke="white" strokeWidth="2" />
            </svg>
          </div>
        ) : (
          <div className="acc-bg relative h-[34%] shrink-0 overflow-hidden rounded-lg">
            <div className="absolute -right-3 -top-3 size-12 rounded-full bg-white/25" />
            <div className="absolute bottom-1.5 left-2 h-1.5 w-1/2 rounded-full bg-white/80" />
            <div className="absolute bottom-4 left-2 h-1 w-1/3 rounded-full bg-white/50" />
          </div>
        )}
        {[0, 1, 2].map((i) => (
          <div key={i} className="flex items-center gap-1.5 rounded-lg bg-foreground/[0.05] p-1.5">
            <span className="acc-bg size-4 shrink-0 rounded-md" />
            <div className="min-w-0 flex-1 space-y-1">
              <div className={cn(line, "w-4/5")} />
              <div className={cn(line, "h-1 w-1/2")} />
            </div>
          </div>
        ))}
        <div className="mt-auto flex items-center justify-around rounded-full bg-foreground/[0.06] py-1.5">
          <Home className="size-2.5 text-[var(--acc-b)]" />
          <Search className="size-2.5 opacity-50" />
          <CalendarDays className="size-2.5 opacity-50" />
          <User className="size-2.5 opacity-50" />
        </div>
      </div>
    </div>
  )
}

function Kpi({ i }: { i: number }) {
  return (
    <div className="tile rounded-lg bg-white p-1.5 dark:bg-white/10">
      <div className="flex items-center justify-between">
        <span className={cn(line, "h-1 w-1/2")} />
        <span className="acc-bg size-2.5 rounded" />
      </div>
      <div className="mt-1.5 text-[11px] font-extrabold leading-none text-[var(--acc-b)]">{["24", "128", "9.4"][i]}</div>
    </div>
  )
}

function AreaChart() {
  return (
    <svg viewBox="0 0 120 50" className="size-full" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id="area" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="var(--acc-a)" stopOpacity="0.55" />
          <stop offset="1" stopColor="var(--acc-a)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d="M0 40 C 15 36, 22 18, 40 24 S 70 40, 85 16 S 108 10, 120 6 L120 50 L0 50Z" fill="url(#area)" />
      <path d="M0 40 C 15 36, 22 18, 40 24 S 70 40, 85 16 S 108 10, 120 6" fill="none" stroke="var(--acc-b)" strokeWidth="2" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
    </svg>
  )
}

function Mock({ surface }: { surface: ArtSurface }) {
  switch (surface) {
    case "mobile":
      return (
        <div className="flex size-full items-end justify-center gap-3 pt-5 [perspective:900px]">
          <Phone className="h-[86%] w-[31%] [transform:rotateY(16deg)_rotateZ(-6deg)]" variant="map" />
          <Phone className="h-[100%] w-[33%] [transform:translateY(-6%)_rotateY(-8deg)_rotateZ(3deg)]" />
        </div>
      )
    case "desktop":
      return (
        <div className="relative flex size-full items-center justify-center [perspective:1000px]">
          <Win url={false} className={cn("h-[82%] w-[84%]", tilt)}>
            <div className="flex min-h-0 flex-1">
              <div className="flex w-[22%] flex-col gap-1.5 border-r border-foreground/[0.06] bg-foreground/[0.03] p-2">
                <div className="acc-bg h-4 rounded-md" />
                {[Wallet, User, Settings].map((I, i) => (
                  <div key={i} className="flex items-center gap-1">
                    <I className="size-2.5 opacity-50" />
                    <div className={cn(line, "flex-1")} />
                  </div>
                ))}
              </div>
              <div className="flex min-w-0 flex-1 flex-col gap-1.5 p-2">
                <div className="flex items-center justify-between">
                  <div className={cn(line, "w-1/3 bg-foreground/30")} />
                  <div className="acc-bg h-3 w-10 rounded-full" />
                </div>
                {[0, 1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center gap-2 rounded-md bg-foreground/[0.05] px-1.5 py-1">
                    <span className="size-2.5 shrink-0 rounded-full acc-bg" />
                    <div className={cn(line, "flex-1")} />
                    <span className={cn("h-2 w-7 rounded-full", i % 2 ? "bg-emerald-400/70" : "bg-amber-400/70")} />
                  </div>
                ))}
              </div>
            </div>
          </Win>
          <div className="slab-win absolute bottom-[10%] right-[6%] w-[26%] rounded-lg p-2 [transform:rotateX(4deg)_rotateY(-6deg)]">
            <div className={cn(line, "w-2/3 bg-foreground/30")} />
            <div className={cn(line, "mt-1.5 w-full")} />
            <div className="acc-bg mt-2 h-3 rounded-full" />
          </div>
        </div>
      )
    case "dashboard":
      return (
        <div className="flex size-full items-center justify-center [perspective:1000px]">
          <Win url={false} className={cn("h-[84%] w-[86%]", tilt)}>
            <div className="flex min-h-0 flex-1 flex-col gap-1.5 p-2">
              <div className="grid grid-cols-3 gap-1.5">
                {[0, 1, 2].map((i) => (
                  <Kpi key={i} i={i} />
                ))}
              </div>
              <div className="grid min-h-0 flex-1 grid-cols-[1.6fr_1fr] gap-1.5">
                <div className="tile overflow-hidden rounded-lg bg-white p-1.5 dark:bg-white/10">
                  <AreaChart />
                </div>
                <div className="tile flex items-end gap-1 rounded-lg bg-white p-1.5 dark:bg-white/10">
                  {[45, 70, 55, 90, 62].map((h, i) => (
                    <div key={i} className="acc-bg flex-1 rounded-t" style={{ height: `${h}%` }} />
                  ))}
                </div>
              </div>
            </div>
          </Win>
        </div>
      )
    case "network":
      return (
        <div className="flex size-full items-center justify-center [perspective:1000px]">
          <Win url={false} className={cn("h-[84%] w-[86%]", tilt)}>
            <div className="grid min-h-0 flex-1 grid-cols-[1.5fr_1fr] gap-1.5 p-2">
              <div className="tile relative overflow-hidden rounded-lg bg-white dark:bg-white/10">
                <svg viewBox="0 0 160 100" className="size-full" aria-hidden="true">
                  <defs>
                    <linearGradient id="net" x1="0" x2="1">
                      <stop offset="0" stopColor="var(--acc-a)" />
                      <stop offset="1" stopColor="var(--acc-b)" />
                    </linearGradient>
                  </defs>
                  <g stroke="url(#net)" strokeWidth="1.6" opacity="0.7" fill="none">
                    <path d="M25 50 L60 20 L105 34 L140 18 M60 20 L66 74 L110 78 L140 52 M105 34 L110 78 M25 50 L66 74" />
                  </g>
                  {[
                    [25, 50],
                    [60, 20],
                    [105, 34],
                    [140, 18],
                    [66, 74],
                    [110, 78],
                    [140, 52],
                  ].map(([x, y], i) => (
                    <circle key={i} cx={x} cy={y} r="6" fill="url(#net)" stroke="white" strokeWidth="2" />
                  ))}
                </svg>
              </div>
              <div className="flex flex-col gap-1.5">
                <div className="tile min-h-0 flex-1 overflow-hidden rounded-lg bg-white p-1 dark:bg-white/10">
                  <AreaChart />
                </div>
                <div className="tile flex flex-1 flex-col justify-center gap-1 rounded-lg bg-white p-1.5 dark:bg-white/10">
                  {[80, 55, 35].map((w, i) => (
                    <div key={i} className="h-1.5 rounded-full bg-foreground/10">
                      <div className="acc-bg h-full rounded-full" style={{ width: `${w}%` }} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Win>
        </div>
      )
    case "scene":
      return (
        <div className="relative flex size-full items-center justify-center [perspective:900px]">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="glass absolute flex h-[66%] w-[40%] flex-col items-center justify-center gap-2 rounded-3xl"
              style={{
                transform: `translateX(${(i - 1) * 26}%) rotateY(${-10 + i * 7}deg) rotateZ(${-3 + i * 3}deg)`,
              }}
            >
              <div className="acc-bg flex size-1/3 items-center justify-center rounded-full font-serif text-sm font-bold text-white shadow-[inset_0_1px_1px_rgb(255_255_255/0.4),0_4px_8px_-3px_var(--acc-b)]">
                {i === 1 ? "&" : "♥"}
              </div>
              <div className={cn(line, "w-1/2")} />
              <div className={cn(line, "h-1 w-1/3")} />
            </div>
          ))}
        </div>
      )
    case "ml":
      return (
        <div className="flex size-full items-center justify-center [perspective:1000px]">
          <Win url={false} className={cn("h-[84%] w-[84%]", tilt)}>
            <div className="grid min-h-0 flex-1 grid-cols-[1.7fr_1fr] gap-1.5 p-2">
              <div className="tile rounded-lg bg-white p-1.5 dark:bg-white/10">
                <svg viewBox="0 0 160 100" className="size-full" aria-hidden="true">
                  <line x1="14" y1="88" x2="146" y2="10" stroke="var(--acc-b)" strokeWidth="2" strokeDasharray="4 3" />
                  {[
                    [30, 70],
                    [45, 55],
                    [60, 75],
                    [35, 85],
                    [75, 62],
                    [50, 35],
                    [100, 25],
                    [115, 40],
                    [125, 22],
                    [95, 50],
                    [130, 55],
                  ].map(([x, y], i) => (
                    <circle key={i} cx={x} cy={y} r="4.5" fill={i < 6 ? "var(--acc-a)" : "var(--acc-b)"} opacity="0.9" />
                  ))}
                </svg>
              </div>
              <div className="flex flex-col gap-1.5">
                <div className="tile flex-1 rounded-lg bg-white p-1.5 dark:bg-white/10">
                  <div className="text-[11px] font-extrabold leading-none text-[var(--acc-b)]">0.94</div>
                  <div className={cn(line, "mt-1.5 h-1 w-2/3")} />
                </div>
                <div className="tile flex flex-1 items-end gap-1 rounded-lg bg-white p-1.5 dark:bg-white/10">
                  {[60, 85, 45].map((h, i) => (
                    <div key={i} className="acc-bg flex-1 rounded-t" style={{ height: `${h}%` }} />
                  ))}
                </div>
              </div>
            </div>
          </Win>
        </div>
      )
    default:
      return (
        <div className="relative flex size-full items-center justify-center [perspective:1000px]">
          <Win className={cn("absolute left-[8%] top-[10%] h-[62%] w-[56%] opacity-90 [transform:rotateX(7deg)_rotateY(-12deg)]")}>
            <div className="acc-bg m-2 h-1/3 rounded-md opacity-60" />
          </Win>
          <Win className={cn("h-[82%] w-[80%] translate-x-[6%] translate-y-[4%]", tilt)}>
            <div className="flex min-h-0 flex-1 flex-col gap-2 p-2.5">
              <div className="flex items-center gap-2">
                <span className="acc-bg size-3.5 rounded-md" />
                <div className="ml-auto flex gap-1.5">
                  <div className={cn(line, "w-5")} />
                  <div className={cn(line, "w-5")} />
                  <div className={cn(line, "w-5")} />
                </div>
              </div>
              <div className="grid grid-cols-[1.3fr_1fr] items-center gap-2">
                <div className="space-y-1.5">
                  <div className={cn(line, "h-2 w-full bg-foreground/35")} />
                  <div className={cn(line, "h-2 w-4/5 bg-foreground/35")} />
                  <div className={cn(line, "w-2/3")} />
                  <div className="acc-bg mt-1 h-3 w-12 rounded-full shadow-[inset_0_1px_1px_rgb(255_255_255/0.5)]" />
                </div>
                <div className="acc-bg relative h-14 overflow-hidden rounded-lg">
                  <div className="absolute -right-2 -top-2 size-8 rounded-full bg-white/30" />
                  <div className="absolute bottom-0 left-2 h-6 w-8 rounded-t-md bg-white/40" />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-1.5">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="tile rounded-md bg-white p-1.5 dark:bg-white/10">
                    <span className="acc-bg block size-2.5 rounded" />
                    <div className={cn(line, "mt-1.5 h-1 w-3/4")} />
                  </div>
                ))}
              </div>
            </div>
          </Win>
        </div>
      )
  }
}

interface ProjectArtProps {
  surface: ArtSurface
  icon: IconKey
  className?: string
}

export function ProjectArt({ surface, icon, className }: ProjectArtProps) {
  return (
    <div className={cn("relative overflow-hidden", className)} aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(90%_80%_at_20%_0%,rgb(255_255_255/0.35),transparent_60%)]" />
      <div className="acc-bg absolute -right-10 -top-10 size-40 rounded-full opacity-40 blur-3xl" />
      <div className="acc-bg absolute -bottom-12 -left-10 size-36 rounded-full opacity-25 blur-3xl" />
      <TiltLayer depth={9} className="absolute inset-0 p-4 pb-0">
        <Mock surface={surface} />
      </TiltLayer>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-[rgb(30_20_100/0.22)] to-transparent" />
      <TiltLayer depth={14} className="absolute left-4 top-4">
        <div className="orb flex size-14 items-center justify-center rounded-2xl">
          <Icon name={icon} className="size-7" />
        </div>
      </TiltLayer>
    </div>
  )
}
