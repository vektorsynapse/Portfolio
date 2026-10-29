"use client"

import { useLayoutEffect, useRef, useState } from "react"

interface ScaledStageProps {
  width: number
  height: number
  children: React.ReactNode
  className?: string
  /** Also shrink the stage so its height fits the viewport (only at or above `minWidth`). */
  fitViewport?: { offset: number; minWidth: number }
}

export function ScaledStage({ width, height, children, className, fitViewport }: ScaledStageProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState<number | null>(null)
  const fitOffset = fitViewport?.offset
  const fitMinWidth = fitViewport?.minWidth

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return
    const update = () => {
      let next = Math.min(1, el.clientWidth / width)
      if (fitOffset !== undefined && fitMinWidth !== undefined && window.innerWidth >= fitMinWidth) {
        next = Math.min(next, Math.max(0.4, (window.innerHeight - fitOffset) / height))
      }
      setScale(next)
    }
    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    window.addEventListener("resize", update)
    return () => {
      ro.disconnect()
      window.removeEventListener("resize", update)
    }
  }, [width, height, fitOffset, fitMinWidth])

  const s = scale ?? 0.6
  return (
    <div ref={ref} className={className}>
      <div className="mx-auto" style={{ width: width * s, height: height * s }}>
        <div
          style={{
            width,
            height,
            transform: `scale(${s})`,
            transformOrigin: "top left",
            opacity: scale === null ? 0 : 1,
            transition: "opacity 0.4s ease",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  )
}
