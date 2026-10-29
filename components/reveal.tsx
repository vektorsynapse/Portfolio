"use client"

import { motion, useReducedMotion } from "motion/react"

interface RevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  y?: number
  immediate?: boolean
}

export function Reveal({ children, className, delay = 0, y = 20, immediate }: RevealProps) {
  const reduced = useReducedMotion()
  const transition = {
    duration: 0.45,
    ease: [0.16, 1, 0.3, 1] as const,
    delay,
  }
  const from = reduced ? { opacity: 0 } : { opacity: 0, y: Math.min(y, 22) }
  const to = reduced ? { opacity: 1 } : { opacity: 1, y: 0 }

  if (immediate) {
    return (
      <motion.div className={className} initial={from} animate={to} transition={transition}>
        {children}
      </motion.div>
    )
  }
  return (
    <motion.div
      className={className}
      initial={from}
      whileInView={to}
      viewport={{ once: true, margin: "0px 0px -40px 0px" }}
      transition={transition}
    >
      {children}
    </motion.div>
  )
}
