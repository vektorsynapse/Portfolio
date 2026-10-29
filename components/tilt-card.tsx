"use client"

import { createContext, useContext } from "react"
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  type MotionValue,
} from "motion/react"
import { cn } from "@/lib/utils"

interface TiltContextValue {
  x: MotionValue<number>
  y: MotionValue<number>
  enabled: boolean
}

const TiltContext = createContext<TiltContextValue | null>(null)

const spring = { stiffness: 140, damping: 18, mass: 0.7 }

interface TiltCardProps {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
  max?: number
}

export function TiltCard({ children, className, style, max = 4 }: TiltCardProps) {
  const reduced = useReducedMotion()
  const enabled = !reduced
  const px = useMotionValue(0.5)
  const py = useMotionValue(0.5)
  const sx = useSpring(px, spring)
  const sy = useSpring(py, spring)
  const rotateY = useTransform(sx, [0, 1], enabled ? [-max, max] : [0, 0])
  const rotateX = useTransform(sy, [0, 1], enabled ? [max, -max] : [0, 0])
  const gx = useTransform(sx, (v) => `${v * 100}%`)
  const gy = useTransform(sy, (v) => `${v * 100}%`)
  const glare = useMotionTemplate`radial-gradient(300px circle at ${gx} ${gy}, rgb(255 255 255 / 0.16), transparent 60%)`

  function onMove(e: React.PointerEvent<HTMLDivElement>) {
    if (e.pointerType !== "mouse" || !enabled) return
    const r = e.currentTarget.getBoundingClientRect()
    px.set((e.clientX - r.left) / r.width)
    py.set((e.clientY - r.top) / r.height)
  }
  function reset() {
    px.set(0.5)
    py.set(0.5)
  }

  return (
    <TiltContext.Provider value={{ x: sx, y: sy, enabled }}>
      <motion.div
        className={cn("group/tilt relative", className)}
        style={{ ...style, rotateX, rotateY, transformPerspective: 1200 }}
        whileHover={enabled ? { y: -4 } : undefined}
        transition={{ type: "spring", stiffness: 220, damping: 20 }}
        onPointerMove={onMove}
        onPointerLeave={reset}
      >
        {children}
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 mix-blend-soft-light transition-opacity duration-300 group-hover/tilt:opacity-100"
          style={{ backgroundImage: glare }}
        />
      </motion.div>
    </TiltContext.Provider>
  )
}

interface TiltLayerProps {
  children: React.ReactNode
  className?: string
  depth?: number
  z?: number
}

/** Child layer that drifts against the pointer for parallax; static outside a TiltCard. */
export function TiltLayer({ children, className, depth = 10, z = 0 }: TiltLayerProps) {
  const ctx = useContext(TiltContext)
  const idle = useMotionValue(0.5)
  const active = ctx?.enabled ?? false
  const x = useTransform(ctx?.x ?? idle, [0, 1], active ? [-depth, depth] : [0, 0])
  const y = useTransform(ctx?.y ?? idle, [0, 1], active ? [-depth, depth] : [0, 0])
  return (
    <motion.div className={className} style={{ x, y, z }}>
      {children}
    </motion.div>
  )
}
