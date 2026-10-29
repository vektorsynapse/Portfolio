"use client"

import { useEffect, useRef } from "react"

export function StudioBackground() {
  const containerRef = useRef<HTMLDivElement>(null)
  const layerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    const layer = layerRef.current
    if (!container || !layer) return

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    let winHeight = window.innerHeight
    let docHeight = document.documentElement.scrollHeight
    let maxScroll = Math.max(docHeight - winHeight, 1)

    // Background is visible across the entire website including hero from the top
    container.style.opacity = "1"

    const updateMeasurements = () => {
      winHeight = window.innerHeight
      docHeight = document.documentElement.scrollHeight
      maxScroll = Math.max(docHeight - winHeight, 1)
      render()
    }

    let ticking = false

    const render = () => {
      const scrollY = window.scrollY

      if (!prefersReducedMotion) {
        const progress = Math.min(Math.max(scrollY / maxScroll, 0), 1)
        const maxTravel = Math.min(winHeight * 0.3, 260)
        const translateY = -(progress * maxTravel)
        layer.style.transform = `translate3d(0, ${translateY.toFixed(1)}px, 0)`
      }

      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(render)
        ticking = true
      }
    }

    render()

    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", updateMeasurements, { passive: true })

    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", updateMeasurements)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none transition-opacity duration-500 ease-out"
      style={{
        opacity: 1,
        contain: "strict",
      }}
    >
      <div
        ref={layerRef}
        className="absolute inset-x-0 -top-6 will-change-transform"
        style={{
          height: "calc(100vh + 300px)",
          transform: "translate3d(0, 0, 0)",
        }}
      >
        {/* Light theme page background - subtle blur for clean readability */}
        <div
          className="absolute -inset-6 bg-cover bg-top bg-no-repeat transition-opacity duration-500 blur-[8px] scale-[1.03] dark:opacity-0"
          style={{ backgroundImage: "url('/bg-light.png')" }}
        />

        {/* Dark theme page background - subtle blur for clean readability */}
        <div
          className="absolute -inset-6 bg-cover bg-top bg-no-repeat opacity-0 transition-opacity duration-500 blur-[8px] scale-[1.03] dark:opacity-100"
          style={{ backgroundImage: "url('/bg-dark.png')" }}
        />
      </div>
    </div>
  )
}
