import { Reveal } from "@/components/reveal"
import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  eyebrow: string
  title: React.ReactNode
  description?: string
  action?: React.ReactNode
  className?: string
  as?: "h1" | "h2"
}

export function SectionHeading({ eyebrow, title, description, action, className, as: Tag = "h2" }: SectionHeadingProps) {
  return (
    <Reveal className={cn("flex flex-wrap items-end justify-between gap-6", className)}>
      <div className="max-w-2xl">
        <p className="eyebrow mb-4">{eyebrow}</p>
        <Tag className="text-balance text-4xl font-extrabold tracking-tight md:text-5xl">{title}</Tag>
        {description && <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">{description}</p>}
      </div>
      {action}
    </Reveal>
  )
}
