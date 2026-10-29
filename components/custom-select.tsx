"use client"

import { Check, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "motion/react"
import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface Option {
  label: string
  value: string
}

interface CustomSelectProps {
  id?: string
  name: string
  label?: string
  placeholder?: string
  options: readonly string[] | string[] | Option[]
  defaultValue?: string
  value?: string
  onChange?: (val: string) => void
  error?: string
  className?: string
}

export function CustomSelect({
  id,
  name,
  placeholder = "Choose an option",
  options,
  defaultValue = "",
  value: controlledValue,
  onChange,
  error,
  className,
}: CustomSelectProps) {
  const normalizedOptions: Option[] = options.map((opt) =>
    typeof opt === "string" ? { label: opt, value: opt } : opt,
  )

  const [internalValue, setInternalValue] = useState<string>(
    controlledValue ?? defaultValue ?? "",
  )
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const selectedValue = controlledValue !== undefined ? controlledValue : internalValue
  const selectedOption = normalizedOptions.find((opt) => opt.value === selectedValue)

  // Sync internal state if controlledValue changes
  useEffect(() => {
    if (controlledValue !== undefined) {
      setInternalValue(controlledValue)
    }
  }, [controlledValue])

  // Click outside listener
  useEffect(() => {
    function handleClickOutside(event: MouseEvent | TouchEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside)
      document.addEventListener("touchstart", handleClickOutside)
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("touchstart", handleClickOutside)
    }
  }, [open])

  function handleSelect(val: string) {
    if (controlledValue === undefined) {
      setInternalValue(val)
    }
    onChange?.(val)
    setOpen(false)
  }

  return (
    <div ref={containerRef} className={cn("relative w-full", className)}>
      {/* Hidden input to pass value seamlessly through native FormData */}
      <input type="hidden" id={id} name={name} value={selectedValue} />

      {/* Custom Trigger Button */}
      <button
        type="button"
        role="combobox"
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-controls={`${name}-options`}
        onClick={() => setOpen((prev) => !prev)}
        className={cn(
          "flex w-full cursor-pointer items-center justify-between rounded-2xl border border-input bg-white/70 px-4 py-3 text-left text-base shadow-inner outline-none transition-all duration-200 dark:bg-white/5",
          "focus:border-ring focus:ring-4 focus:ring-ring/20",
          open && "border-ring ring-4 ring-ring/20 shadow-lg",
          error && "border-destructive ring-destructive/20",
        )}
      >
        <span className={cn("truncate", !selectedOption && "text-muted-foreground/70")}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.22, ease: "easeInOut" }}
          aria-hidden="true"
          className="ml-2 shrink-0 text-muted-foreground"
        >
          <ChevronDown className="size-5" />
        </motion.span>
      </button>

      {/* Floating Options Menu - Opaque with proper z-index and controlled height */}
      <AnimatePresence>
        {open && (
          <motion.div
            id={`${name}-options`}
            role="listbox"
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 360, damping: 28 }}
            className="absolute inset-x-0 top-[calc(100%+0.5rem)] z-50 max-h-52 overflow-y-auto rounded-2xl p-1.5 bg-white dark:bg-[#15113d] border border-slate-200 dark:border-white/20 shadow-2xl [scrollbar-width:thin] [scrollbar-color:rgba(140,120,240,0.4)_transparent]"
          >
            <ul className="space-y-0.5">
              {normalizedOptions.map((opt) => {
                const isSelected = opt.value === selectedValue
                return (
                  <li
                    key={opt.value}
                    role="option"
                    aria-selected={isSelected}
                    onClick={() => handleSelect(opt.value)}
                    className={cn(
                      "flex cursor-pointer items-center justify-between rounded-xl px-3.5 py-2 text-sm font-semibold transition-all duration-150",
                      isSelected
                        ? "bg-gradient-to-r from-[#3a4cff] to-[#8a3dff] text-white shadow-md font-bold"
                        : "text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/10 hover:text-slate-950 dark:hover:text-white",
                    )}
                  >
                    <span>{opt.label}</span>
                    {isSelected && <Check aria-hidden="true" className="size-4 shrink-0 stroke-[2.5]" />}
                  </li>
                )
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
