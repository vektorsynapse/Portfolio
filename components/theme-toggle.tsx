"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="btn btn-glass group/theme size-11 shrink-0 transition-all duration-300 hover:rotate-12 active:scale-90"
      aria-label="Toggle light and dark theme"
    >
      <Moon aria-hidden="true" className="size-[18px] transition-transform duration-300 group-hover/theme:scale-110 dark:hidden" />
      <Sun aria-hidden="true" className="hidden size-[18px] transition-transform duration-300 group-hover/theme:scale-110 dark:block" />
    </button>
  )
}
