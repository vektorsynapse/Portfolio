import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

export type CtaVariant = "primary" | "glass"
type CtaSize = "md" | "lg"

export function ctaClass(variant: CtaVariant = "primary", size: CtaSize = "md", extra?: string) {
  return cn(
    "btn group/cta",
    variant === "primary" ? "btn-primary" : "btn-glass",
    size === "lg" ? "h-14 px-8 text-base" : "h-11 px-6 text-sm",
    extra,
  )
}

interface CtaLinkProps {
  href: string
  children: React.ReactNode
  variant?: CtaVariant
  size?: CtaSize
  icon?: React.ReactNode
  arrow?: boolean
  className?: string
  external?: boolean
}

export function CtaLink({
  href,
  children,
  variant = "primary",
  size = "md",
  icon,
  arrow = true,
  className,
  external,
}: CtaLinkProps) {
  const isExternal = external ?? /^(https?:|mailto:|tel:)/.test(href)
  const content = (
    <>
      {icon}
      <span>{children}</span>
      {arrow && (
        <ArrowRight
          aria-hidden="true"
          className="size-4 transition-transform duration-200 group-hover/cta:translate-x-1 motion-reduce:transform-none"
        />
      )}
    </>
  )
  if (isExternal) {
    const web = href.startsWith("http")
    return (
      <a
        href={href}
        className={ctaClass(variant, size, className)}
        {...(web ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {content}
        {web && <span className="sr-only"> (opens in a new tab)</span>}
      </a>
    )
  }
  return (
    <Link href={href} className={ctaClass(variant, size, className)}>
      {content}
    </Link>
  )
}
