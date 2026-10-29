"use client"

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "motion/react"
import { Activity, ArrowUpRight, BarChart3, Plus, Stethoscope } from "lucide-react"
import { DashboardMock } from "@/components/dashboard-mock"
import { ScaledStage } from "@/components/scaled-stage"

const spring = { stiffness: 70, damping: 16, mass: 0.8 }

const lidLayers = Array.from({ length: 12 }, (_, i) => i + 1)
const deckLayers = Array.from({ length: 9 }, (_, i) => i + 1)

interface FloatingPanelProps {
  className: string
  tilt: string
  z: number
  depth: number
  mx: MotionValue<number>
  my: MotionValue<number>
  delay?: number
  slow?: boolean
  children: React.ReactNode
}

function FloatingPanel({ className, tilt, z, depth, mx, my, delay = 0, slow, children }: FloatingPanelProps) {
  const x = useSpring(useTransform(mx, [-1, 1], [-depth, depth]), spring)
  const y = useSpring(useTransform(my, [-1, 1], [-depth * 0.6, depth * 0.6]), spring)
  return (
    <motion.div
      className={`absolute ${className}`}
      style={{ x, y, z, transformStyle: "preserve-3d" }}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 120, damping: 16, delay }}
    >
      <div className={`h-full rounded-[inherit] [transform-style:preserve-3d] ${slow ? "animate-float-slow" : "animate-float"}`}>
        <div className="relative h-full w-full rounded-[inherit]" style={{ transform: tilt, transformStyle: "preserve-3d" }}>
          {/* Layered Glass Depth Shadows */}
          <div
            aria-hidden="true"
            className="absolute inset-x-4 -bottom-3 top-6 rounded-[inherit] bg-gradient-to-b from-white/60 to-[#d4cdf8]/70 shadow-[0_25px_35px_-10px_rgba(79,70,229,0.35),inset_0_1px_0_rgba(255,255,255,0.8)] dark:from-white/10 dark:to-white/5"
            style={{ transform: "translateZ(-20px)" }}
          />
          <div
            aria-hidden="true"
            className="absolute inset-x-2 -bottom-1.5 top-3 rounded-[inherit] bg-gradient-to-b from-white/80 to-[#e0daff]/80 shadow-[0_15px_22px_-8px_rgba(79,70,229,0.25),inset_0_1px_0_rgba(255,255,255,0.9)] dark:from-white/15 dark:to-white/5"
            style={{ transform: "translateZ(-10px)" }}
          />
          <div className="relative h-full w-full rounded-[inherit] border border-white/90 bg-white/85 backdrop-blur-xl shadow-[0_20px_40px_-15px_rgba(30,20,100,0.25),inset_0_1.5px_0_rgba(255,255,255,1)] dark:border-white/15 dark:bg-white/10 overflow-hidden">
            {children}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function LaptopScene() {
  const reduced = useReducedMotion()
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const range = reduced ? 0 : 1
  const rotateY = useSpring(useTransform(mx, [-1, 1], [-5 * range, 5 * range]), spring)
  const rotateX = useSpring(useTransform(my, [-1, 1], [3 * range, -3 * range]), spring)
  const shadowX = useSpring(useTransform(mx, [-1, 1], [15 * range, -15 * range]), spring)
  const { scrollY } = useScroll()
  const scrollLift = useTransform(scrollY, [0, 600], [0, reduced ? 0 : -28])

  function onMove(e: React.PointerEvent<HTMLDivElement>) {
    if (e.pointerType !== "mouse" || reduced) return
    const r = e.currentTarget.getBoundingClientRect()
    mx.set(((e.clientX - r.left) / r.width) * 2 - 1)
    my.set(((e.clientY - r.top) / r.height) * 2 - 1)
  }

  function reset() {
    mx.set(0)
    my.set(0)
  }

  return (
    <div
      onPointerMove={onMove}
      onPointerLeave={reset}
      role="img"
      aria-label="3D futuristic laptop on an illuminated circular stage showing the MediCare dashboard, with interactive healthcare floating cards and patient growth metrics."
    >
      <ScaledStage width={860} height={560} className="w-full" fitViewport={{ offset: 100, minWidth: 1024 }}>
        <motion.div
          className="relative size-full"
          style={{ y: scrollLift, rotateX, rotateY, transformPerspective: 1800, transformStyle: "preserve-3d" }}
        >
          {/* ========================================================= */}
          {/* 1. ILLUMINATED 3D CIRCULAR PODIUM STAGE (Exact Target Match) */}
          {/* ========================================================= */}

          {/* Deep Ambient Floor Drop Shadow */}
          <div
            className="absolute left-[15px] top-[275px] h-[310px] w-[830px] rounded-[50%] bg-[#3b0764]/30 blur-3xl pointer-events-none"
            style={{ transform: "rotateX(66deg) translateZ(-65px)" }}
          />

          {/* Pedestal Cylinder Side Thickness */}
          <div
            className="absolute left-[20px] top-[255px] h-[320px] w-[820px] rounded-[50%] bg-gradient-to-b from-[#cbd5e1] via-[#94a3b8] to-[#475569]/60 shadow-[0_35px_65px_rgba(20,10,60,0.35)]"
            style={{ transform: "rotateX(66deg) translateZ(-35px)" }}
          />

          {/* Top Circular Podium Disc with Glowing Cyan Neon Rim */}
          <div
            className="absolute left-[20px] top-[230px] h-[320px] w-[820px] rounded-[50%]"
            style={{ transform: "rotateX(66deg) translateZ(0px)", transformStyle: "preserve-3d" }}
          >
            {/* Outer Radiant Cyan Neon Rim Line */}
            <div className="absolute inset-0 rounded-[50%] border-[4px] border-[#22d3ee] shadow-[0_0_40px_14px_rgba(34,211,238,0.9),inset_0_0_28px_rgba(34,211,238,0.65)]" />
            <div className="absolute inset-[3px] rounded-[50%] border border-white" />

            {/* Glossy Reflective Stage Surface */}
            <div className="absolute inset-0 rounded-[50%] bg-gradient-to-b from-white/95 via-[#f8faff]/90 to-[#e0e7ff]/80 shadow-[inset_0_2px_24px_rgba(255,255,255,0.98)] dark:from-white/20 dark:via-[#1e1b4b]/40 dark:to-[#0f172a]/80" />

            {/* Specular White Stage Reflection */}
            <div className="absolute inset-x-20 top-6 h-40 rounded-[50%] bg-gradient-to-b from-white/95 via-white/50 to-transparent blur-xs" />
          </div>

          {/* Deep Ambient Shadow Under Laptop Base on Stage */}
          <motion.div
            className="absolute left-[175px] top-[370px] h-24 w-[490px] rounded-[50%] bg-[#1e1b4b]/50 blur-2xl pointer-events-none"
            style={{ x: shadowX, transform: "translateZ(10px)" }}
          />
          <motion.div
            className="absolute left-[220px] top-[390px] h-10 w-[400px] rounded-[50%] bg-[#020617]/75 blur-xl pointer-events-none"
            style={{ x: shadowX, transform: "translateZ(15px)" }}
          />

          {/* ========================================================= */}
          {/* 2. THE 3D LAPTOP (Isometric Tilt with MediCare SaaS Screen) */}
          {/* ========================================================= */}
          <motion.div
            className="absolute left-[185px] top-[20px] h-[450px] w-[500px]"
            style={{ transformStyle: "preserve-3d", transform: "rotateY(-15deg) rotateX(6deg) rotateZ(0.5deg)" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 70, damping: 16 }}
          >
            {/* Laptop Screen Lid */}
            <div className="absolute left-0 top-0 h-[330px] w-[500px]" style={{ transformStyle: "preserve-3d" }}>
              {lidLayers.map((i) => (
                <div
                  key={i}
                  aria-hidden="true"
                  className="absolute inset-0 rounded-[20px]"
                  style={{
                    transform: `translateZ(${-i * 1.5}px)`,
                    background: `color-mix(in oklab, #f8faff ${100 - i * 7}%, #7d76d0)`,
                  }}
                />
              ))}
              <div className="absolute inset-0 rounded-[20px] bg-gradient-to-b from-[#1e1b4b] via-[#0f172a] to-[#020617] p-[9px] shadow-[0_45px_85px_-20px_rgba(15,23,42,0.7),inset_0_2px_0_rgba(255,255,255,0.4),inset_0_0_0_1.5px_rgba(255,255,255,0.15)]">
                {/* Top Camera Dot */}
                <span
                  aria-hidden="true"
                  className="absolute left-1/2 top-[4px] size-1.5 -translate-x-1/2 rounded-full bg-[#020617] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2),0_0_4px_rgba(56,189,248,0.6)]"
                />
                {/* MediCare SaaS Dashboard Screen Content */}
                <div className="relative size-full overflow-hidden rounded-[12px] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.08)] bg-white">
                  <DashboardMock />
                  {/* Glass Specular Sheen */}
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,transparent_42%,rgba(255,255,255,0.24)_48%,rgba(255,255,255,0.06)_54%,transparent_60%)]" />
                </div>
              </div>
            </div>

            {/* Laptop Metallic Hinge */}
            <div
              aria-hidden="true"
              className="absolute left-[16px] top-[322px] h-[13px] w-[468px] rounded-full bg-gradient-to-b from-[#e2e8f0] via-[#94a3b8] to-[#64748b] shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_6px_10px_-4px_rgba(15,23,42,0.5)]"
            />

            {/* Laptop Keyboard Deck (Matching Width of Lid, Resting on Stage) */}
            <div
              className="absolute left-0 top-[326px] h-[210px] w-[500px] origin-top rounded-b-[24px] rounded-t-md"
              style={{ transform: "rotateX(74deg)", transformStyle: "preserve-3d" }}
            >
              {deckLayers.map((i) => (
                <div
                  key={i}
                  aria-hidden="true"
                  className="absolute inset-0 rounded-b-[24px] rounded-t-md"
                  style={{
                    transform: `translateZ(${-i * 1.4}px)`,
                    background: `color-mix(in oklab, #f1f5f9 ${100 - i * 9}%, #94a3b8)`,
                  }}
                />
              ))}
              <div className="absolute inset-0 rounded-b-[24px] rounded-t-md bg-gradient-to-b from-[#f8fafc] via-[#e2e8f0] to-[#cbd5e1] shadow-[0_32px_55px_-18px_rgba(15,23,42,0.5),inset_0_1.5px_0_#fff,inset_0_-3px_0_rgba(255,255,255,0.6)]">
                {/* Speaker Grilles */}
                <div className="absolute inset-x-6 top-3 flex h-3 justify-between" aria-hidden="true">
                  <div className="h-full w-20 rounded-full bg-[repeating-linear-gradient(90deg,rgba(71,85,105,0.25)_0_2px,transparent_2px_6px)]" />
                  <div className="h-full w-20 rounded-full bg-[repeating-linear-gradient(90deg,rgba(71,85,105,0.25)_0_2px,transparent_2px_6px)]" />
                </div>
                {/* Keyboard Recess & Keys */}
                <div className="absolute inset-x-6 top-7 h-[92px] rounded-lg bg-[#334155]/10 p-2 shadow-[inset_0_2px_4px_rgba(15,23,42,0.25)]">
                  <div className="key-grid size-full rounded opacity-90" />
                </div>
                {/* Trackpad */}
                <div className="absolute left-1/2 top-[134px] h-[48px] w-[125px] -translate-x-1/2 rounded-xl bg-gradient-to-b from-white/90 to-white/50 shadow-[inset_0_2px_4px_rgba(15,23,42,0.15),0_1px_0_#fff]" />
                {/* Front Lip Cutout */}
                <div className="absolute bottom-0 left-1/2 h-2 w-20 -translate-x-1/2 rounded-t-lg bg-[#94a3b8]/70 shadow-[inset_0_2px_3px_rgba(15,23,42,0.3)]" />
              </div>
            </div>
          </motion.div>

          {/* ========================================================= */}
          {/* 3. SLEEK 3D WHITE WIRELESS MOUSE (Resting on Stage Right)  */}
          {/* ========================================================= */}
          <div
            className="absolute left-[595px] top-[325px] h-[55px] w-[80px] z-30 pointer-events-none"
            style={{ transform: "rotateX(52deg) rotateZ(-10deg) translateZ(20px)" }}
          >
            {/* Mouse Shadow on Stage */}
            <div className="absolute inset-0 translate-y-3 rounded-full bg-slate-900/40 blur-md" />
            {/* Mouse White Ergonomic Body */}
            <div className="relative size-full rounded-[45%] bg-gradient-to-b from-[#ffffff] via-[#f1f5f9] to-[#cbd5e1] border border-slate-300 shadow-[inset_0_2px_4px_#fff,inset_0_-3px_6px_rgba(100,116,139,0.35),0_10px_20px_rgba(15,23,42,0.25)]">
              {/* Center Scroll Seam & Wheel */}
              <div className="absolute left-1/2 top-2 h-4 w-[1.5px] -translate-x-1/2 bg-slate-400" />
              <div className="absolute left-1/2 top-2.5 h-3 w-1.5 -translate-x-1/2 rounded-full bg-slate-300 shadow-xs" />
              <div className="absolute inset-x-3 top-1 h-3 rounded-t-full bg-gradient-to-b from-white to-transparent opacity-90" />
            </div>
          </div>

          {/* ========================================================= */}
          {/* 4. THREE FLOATING 3D GLASS CARDS (Exact Target Alignment) */}
          {/* ========================================================= */}

          {/* CARD 1: Top-Left Floating Card - MediCare App Preview */}
          <FloatingPanel
            className="left-[10px] top-[15px] h-[178px] w-[205px] rounded-[2.2rem]"
            tilt="rotate(-7deg) rotateY(12deg)"
            z={140}
            depth={18}
            mx={mx}
            my={my}
            delay={0.2}
          >
            <div className="relative flex h-full flex-col justify-between p-5 bg-gradient-to-br from-white/95 via-white/85 to-[#f8faff]/80 dark:from-white/15 dark:to-white/5">
              {/* Top Row: Heartbeat Icon + Arrow Button */}
              <div className="flex items-center justify-between">
                <span className="flex size-14 items-center justify-center rounded-2xl bg-gradient-to-tr from-[#3b82f6] via-[#6366f1] to-[#8b5cf6] text-white shadow-[0_8px_20px_-4px_rgba(59,130,246,0.6),inset_0_1px_1px_rgba(255,255,255,0.7)]">
                  <Activity className="size-7" strokeWidth={2.5} />
                </span>
                <span className="flex size-8 items-center justify-center rounded-full bg-white shadow-sm text-[#3b82f6] transition-transform hover:scale-110">
                  <ArrowUpRight className="size-4" strokeWidth={2.5} />
                </span>
              </div>
              {/* Title & Subtitle */}
              <div>
                <p className="text-[17px] font-extrabold tracking-tight text-[#0f172a] dark:text-white">
                  MediCare
                </p>
                <p className="mt-0.5 text-[11px] font-semibold text-[#64748b] dark:text-[#94a3b8]">
                  Healthcare Management System
                </p>
              </div>
            </div>
          </FloatingPanel>

          {/* CARD 2: Bottom-Left Card (Hovering in front of Laptop) - +32% Patient Growth */}
          <FloatingPanel
            className="left-[50px] top-[255px] h-[86px] w-[185px] rounded-[1.6rem]"
            tilt="rotate(-4deg) rotateY(10deg)"
            z={220}
            depth={22}
            mx={mx}
            my={my}
            delay={0.35}
            slow
          >
            <div className="flex h-full items-center gap-3 px-4 py-2.5 bg-gradient-to-br from-white/95 to-[#f1f5f9]/85 dark:from-white/20 dark:to-white/5 backdrop-blur-md">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-tr from-[#3b82f6] to-[#8b5cf6] text-white shadow-md">
                <BarChart3 className="size-5" />
              </span>
              <div className="min-w-0">
                <div className="flex items-baseline gap-1">
                  <span className="text-xl font-extrabold tracking-tight text-[#0f172a] dark:text-white">
                    +32%
                  </span>
                </div>
                <p className="text-[10px] font-semibold text-[#64748b] dark:text-[#94a3b8]">
                  Patient Growth
                </p>
                {/* Mini Purple Sparkline Curve */}
                <svg viewBox="0 0 60 12" className="mt-0.5 h-2 w-14 text-[#8b5cf6]">
                  <path
                    d="M 2 10 Q 15 2 28 8 T 58 3"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          </FloatingPanel>

          {/* CARD 3: Right Standing Vertical Tablet - Modern Healthcare Platform */}
          <FloatingPanel
            className="left-[685px] top-[115px] h-[210px] w-[165px] rounded-[2.2rem]"
            tilt="rotate(5deg) rotateY(-12deg)"
            z={160}
            depth={20}
            mx={mx}
            my={my}
            delay={0.45}
            slow
          >
            <div className="flex h-full flex-col justify-between p-5 bg-gradient-to-b from-white/95 via-white/85 to-[#f8faff]/90 dark:from-white/15 dark:to-white/5">
              {/* Top Stethoscope Icon */}
              <span className="flex size-13 items-center justify-center rounded-2xl bg-gradient-to-tr from-[#06b6d4] via-[#3b82f6] to-[#6366f1] text-white shadow-[0_8px_22px_-4px_rgba(6,182,212,0.6),inset_0_1px_1px_rgba(255,255,255,0.7)]">
                <Stethoscope className="size-6.5" strokeWidth={2.2} />
              </span>

              {/* Title */}
              <div>
                <p className="text-[14px] font-extrabold leading-snug text-[#0f172a] dark:text-white">
                  Modern Healthcare Platform
                </p>
              </div>

              {/* Overlapping User Avatars + Plus Button */}
              <div className="flex items-center">
                <div className="flex -space-x-2">
                  <span className="inline-flex size-7 items-center justify-center rounded-full bg-[#3b82f6] font-bold text-[9px] text-white ring-2 ring-white">
                    SJ
                  </span>
                  <span className="inline-flex size-7 items-center justify-center rounded-full bg-[#8b5cf6] font-bold text-[9px] text-white ring-2 ring-white">
                    MB
                  </span>
                  <span className="inline-flex size-7 items-center justify-center rounded-full bg-[#10b981] font-bold text-[9px] text-white ring-2 ring-white">
                    ED
                  </span>
                </div>
                <span className="ml-1.5 flex size-6 items-center justify-center rounded-full bg-[#f1f5f9] text-[#64748b] hover:bg-slate-200 shadow-xs">
                  <Plus className="size-3" strokeWidth={3} />
                </span>
              </div>
            </div>
          </FloatingPanel>
        </motion.div>
      </ScaledStage>
    </div>
  )
}
