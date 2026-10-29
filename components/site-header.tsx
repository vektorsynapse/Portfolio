"use client"

import { AnimatePresence, motion, type Variants } from "motion/react"
import { ArrowRight, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { CtaLink } from "@/components/cta-button"
import { ThemeToggle } from "@/components/theme-toggle"
import { navLinks, profile } from "@/lib/data/profile"
import { cn } from "@/lib/utils"

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/"
  if (href.includes("#")) return false
  return pathname.startsWith(href)
}

export function Brand() {
  return (
    <Link href="/" className="group flex items-center gap-2.5 transition-opacity hover:opacity-95" aria-label="Vektorsynapse, home">
      <div className="relative size-10 shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-3deg]">
        <Image
          src="/images/vs-logo.png"
          alt="Vektorsynapse logo mark"
          width={40}
          height={40}
          priority
          className="size-full object-contain drop-shadow-[0_2px_8px_rgba(70,40,160,0.35)] dark:drop-shadow-[0_2px_8px_rgba(139,92,246,0.3)]"
        />
      </div>
      <span className="leading-tight">
        <span className="flex items-center text-[15.5px] font-extrabold tracking-tight text-slate-900 transition-colors group-hover:text-primary dark:text-white">
          <span>Vektor</span>
          <span className="bg-gradient-to-r from-violet-600 via-indigo-600 to-fuchsia-600 dark:from-violet-400 dark:to-fuchsia-400 bg-clip-text text-transparent">synapse</span>
        </span>
        <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
          Software Studio
        </span>
      </span>
    </Link>
  )
}

const paperRollVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.18,
      ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 280,
      damping: 22,
      staggerChildren: 0.03,
      delayChildren: 0.04,
    },
  },
}

const paperItemVariants: Variants = {
  hidden: { opacity: 0, y: -6 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 320, damping: 24 },
  },
}

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const isHome = pathname === "/"

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const isPast = window.scrollY > 20
          setScrolled((prev) => (prev !== isPast ? isPast : prev))
          ticking = false
        })
        ticking = true
      }
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const isGlassy = !isHome || scrolled || open

  return (
    <header
      className={cn(
        "z-50 px-4 transition-all duration-300",
        isHome ? "fixed top-0 inset-x-0" : "sticky top-0",
        isGlassy ? "py-2.5 sm:py-3" : "pt-4 pb-2",
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between gap-4 transition-all duration-300",
          isGlassy
            ? "glass rounded-full px-4 sm:px-6 py-2 sm:py-2.5 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.08),inset_0_1.5px_1px_rgba(255,255,255,0.85),inset_0_-2px_4px_rgba(0,0,0,0.05)] dark:shadow-[0_12px_36px_-5px_rgba(0,0,0,0.45),inset_0_1.5px_1px_rgba(255,255,255,0.2),inset_0_-2px_6px_rgba(0,0,0,0.35)]"
            : "bg-transparent px-0 py-0",
        )}
      >
        <Brand />

        <nav aria-label="Primary" className="glass hidden rounded-full p-1.5 md:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((l) => {
              const active = isActive(pathname, l.href)
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "relative block rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 lg:px-5",
                      !active && "hover:bg-foreground/[0.06] hover:text-foreground text-foreground/75 active:scale-95",
                    )}
                  >
                    {active && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-[#3a4cff] to-[#7b3cff] shadow-[0_2px_8px_rgba(123,60,255,0.4),inset_0_1px_1px_rgba(255,255,255,0.5)]"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className={cn("relative z-10 transition-colors duration-200", active ? "text-white" : "")}>
                      {l.label}
                    </span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/contact"
            className="group/btn hidden sm:inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#6366f1] via-[#a855f7] to-[#f43f5e] px-5 py-2.5 text-xs font-bold text-white shadow-[0_3px_12px_-2px_rgba(244,63,94,0.35),inset_0_1.5px_1px_rgba(255,255,255,0.65),inset_0_-2.5px_5px_rgba(0,0,0,0.18)] transition-all duration-200 hover:scale-[1.03] hover:shadow-[0_6px_20px_-2px_rgba(244,63,94,0.45),inset_0_1.5px_1.5px_rgba(255,255,255,0.8),inset_0_-2.5px_6px_rgba(0,0,0,0.22)] active:scale-[0.97]"
          >
            <span>Let&apos;s Work Together</span>
            <ArrowRight className="size-3.5 transition-transform duration-200 group-hover/btn:translate-x-1" />
          </Link>
          <button
            type="button"
            className="btn btn-glass size-11 md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X aria-hidden="true" className="size-5" /> : <Menu aria-hidden="true" className="size-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            aria-label="Mobile"
            variants={paperRollVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="glass relative mx-auto mt-2 max-w-7xl overflow-hidden rounded-3xl p-3 shadow-[0_12px_36px_rgba(0,0,0,0.12),inset_0_1.5px_1px_rgba(255,255,255,0.8),inset_0_-2px_4px_rgba(0,0,0,0.05)] dark:shadow-[0_16px_40px_rgba(0,0,0,0.5),inset_0_1.5px_1px_rgba(255,255,255,0.2),inset_0_-2px_6px_rgba(0,0,0,0.35)] md:hidden"
          >
            {/* Curled paper top edge reflection */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-6 top-0 h-[2px] rounded-full bg-gradient-to-r from-transparent via-brand-violet/70 to-transparent"
            />
            <motion.ul className="flex flex-col">
              {navLinks.map((l) => (
                <motion.li key={l.href} variants={paperItemVariants}>
                  <Link
                    href={l.href}
                    aria-current={isActive(pathname, l.href) ? "page" : undefined}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "block rounded-2xl px-4 py-2.5 text-base font-semibold transition-colors",
                      isActive(pathname, l.href) ? "bg-primary/10 text-primary" : "hover:bg-primary/5",
                    )}
                  >
                    {l.label}
                  </Link>
                </motion.li>
              ))}
              <motion.li variants={paperItemVariants} className="p-2 sm:hidden">
                <CtaLink href="/contact" className="w-full">
                  Let&apos;s Work Together
                </CtaLink>
              </motion.li>
            </motion.ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
