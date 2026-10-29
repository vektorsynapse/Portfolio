"use client"

import { AnimatePresence, motion } from "motion/react"
import { ChevronDown, MessageCircle } from "lucide-react"
import { useState } from "react"
import { CtaLink } from "@/components/cta-button"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { faqCategories, faqs, type FaqItem } from "@/lib/data/faq"
import { cn } from "@/lib/utils"

function FaqAccordionItem({
  item,
  index,
  isOpen,
  onToggle,
}: {
  item: FaqItem
  index: number
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <Reveal delay={(index % 4) * 0.05}>
      <div
        className={cn(
          "glass group/faq overflow-hidden rounded-2xl transition-all duration-200 hover:border-primary/30",
          isOpen ? "shadow-md border-primary/40" : "hover:shadow-sm",
        )}
      >
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          className="flex w-full cursor-pointer items-start gap-4 px-6 py-5 text-left transition-colors duration-200 hover:bg-foreground/[0.02]"
        >
          {/* Number badge */}
          <span
            aria-hidden="true"
            className={cn(
              "mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full font-mono text-[11px] font-bold transition-all duration-200",
              isOpen
                ? "bg-gradient-to-br from-[#3a4cff] to-[#8a3dff] text-white shadow-xs"
                : "bg-foreground/8 text-muted-foreground group-hover/faq:bg-primary/10 group-hover/faq:text-primary",
            )}
          >
            {String(index + 1).padStart(2, "0")}
          </span>

          <span className="flex-1 text-[15px] font-semibold leading-snug transition-colors duration-200 group-hover/faq:text-primary">
            {item.q}
          </span>

          <motion.span
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            aria-hidden="true"
            className={cn(
              "mt-0.5 shrink-0 transition-transform duration-200 group-hover/faq:scale-110",
              isOpen ? "text-primary" : "text-muted-foreground group-hover/faq:text-primary",
            )}
          >
            <ChevronDown className="size-5" />
          </motion.span>
        </button>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key="answer"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
            >
              <p className="px-6 pb-6 pl-16 text-sm leading-relaxed text-muted-foreground">
                {item.a}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Reveal>
  )
}

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const [activeCategory, setActiveCategory] = useState<string>("all")

  const filtered =
    activeCategory === "all" ? faqs : faqs.filter((f) => f.category === activeCategory)

  function toggle(i: number) {
    setOpenIndex((prev) => (prev === i ? null : i))
  }

  return (
    <section id="faq" aria-labelledby="faq-title" className="scroll-mt-28 px-4 pt-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="FAQ"
          title={
            <>
              Questions clients{" "}
              <span className="text-gradient">always ask</span>
            </>
          }
          description="Everything you need to know before starting a project. If something isn't covered here, just ask."
          action={
            <CtaLink href="/contact" variant="glass">
              Ask me directly
            </CtaLink>
          }
        />

        {/* Category filter pills */}
        <Reveal className="mt-10 flex flex-wrap gap-2">
          {faqCategories.map((cat) => (
            <button
              key={cat.key}
              type="button"
              onClick={() => {
                setActiveCategory(cat.key)
                setOpenIndex(null)
              }}
              className={cn(
                "cursor-pointer rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 active:scale-95",
                activeCategory === cat.key
                  ? "bg-gradient-to-r from-[#3a4cff] to-[#8a3dff] text-white shadow-sm shadow-purple-500/25 scale-[1.02]"
                  : "glass text-muted-foreground hover:text-foreground hover:border-primary/40 hover:bg-white/90 dark:hover:bg-white/10 hover:scale-[1.02]",
              )}
            >
              {cat.label}
            </button>
          ))}
        </Reveal>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {/* Left column */}
          <div className="space-y-4">
            {filtered
              .filter((_, i) => i % 2 === 0)
              .map((item, displayIdx) => {
                // Map back to the global index for open state
                const globalIdx = filtered.indexOf(item)
                return (
                  <FaqAccordionItem
                    key={item.q}
                    item={item}
                    index={displayIdx * 2}
                    isOpen={openIndex === globalIdx}
                    onToggle={() => toggle(globalIdx)}
                  />
                )
              })}
          </div>

          {/* Right column */}
          <div className="space-y-4">
            {filtered
              .filter((_, i) => i % 2 !== 0)
              .map((item, displayIdx) => {
                const globalIdx = filtered.indexOf(item)
                return (
                  <FaqAccordionItem
                    key={item.q}
                    item={item}
                    index={displayIdx * 2 + 1}
                    isOpen={openIndex === globalIdx}
                    onToggle={() => toggle(globalIdx)}
                  />
                )
              })}
          </div>
        </div>

        {/* Bottom CTA strip */}
        <Reveal className="mt-10">
          <div className="glass flex flex-col items-center gap-5 rounded-3xl p-8 text-center sm:flex-row sm:text-left">
            <span
              aria-hidden="true"
              className="flex size-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#3a4cff] to-[#8a3dff] text-white shadow-lg"
            >
              <MessageCircle className="size-5" />
            </span>
            <div className="flex-1">
              <p className="font-bold">Still have a question?</p>
              <p className="mt-0.5 text-sm text-muted-foreground">
                Send me a message and I&apos;ll get back to you within 24 hours — usually much sooner.
              </p>
            </div>
            <CtaLink href="/contact" arrow={false}>
              Get in touch
            </CtaLink>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
