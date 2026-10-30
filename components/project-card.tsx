import { ArrowRight, ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ProjectArt, accentStyle } from "@/components/project-art"
import { TiltCard } from "@/components/tilt-card"
import type { Project } from "@/lib/data/types"
import { cn } from "@/lib/utils"

export function ProjectCard({
  project,
  size = "featured",
  className,
}: {
  project: Project
  size?: "featured" | "compact"
  className?: string
}) {
  const featured = size === "featured"
  return (
    <TiltCard
      max={4}
      style={accentStyle(project.accent)}
      className={cn(
        "glass group/card relative flex h-full flex-col overflow-hidden rounded-[2rem] transition-all duration-300",
        className,
      )}
    >
      {project.image ? (
        <div className={cn("relative overflow-hidden bg-foreground/5 shrink-0", featured ? "h-56" : "h-44")}>
          <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-top transition-transform duration-500 group-hover/card:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent pointer-events-none" />
        </div>
      ) : (
        <div className={cn("relative overflow-hidden shrink-0", featured ? "h-56" : "h-44")}>
          <ProjectArt
            surface={project.surface}
            icon={project.icon}
            className="size-full"
          />
        </div>
      )}

      <div className="relative flex flex-1 flex-col justify-between p-6">
        <div>
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <p className="eyebrow mb-2 !text-[0.62rem] !tracking-[0.22em] !text-muted-foreground">{project.platform}</p>
              <h3 className="text-balance text-xl font-extrabold leading-tight transition-colors duration-200 group-hover/card:text-primary">
                <Link href={`/work/${project.slug}`}>
                  <span className="absolute inset-0 z-10 rounded-[2rem]" aria-hidden="true" />
                  {project.title}
                </Link>
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">{project.tagline}</p>
            </div>
            <span
              aria-hidden="true"
              className="puff-white flex size-10 shrink-0 items-center justify-center rounded-full text-[#3b2fd0] transition-all duration-300 group-hover/card:translate-x-1 group-hover/card:scale-105 dark:text-[#3b2fd0]"
            >
              <ArrowRight className="size-4.5 transition-transform duration-200 group-hover/card:translate-x-0.5" />
            </span>
          </div>

          {featured && (
            <p className="mt-4 flex items-baseline gap-2 text-sm">
              <span className="text-gradient text-2xl font-extrabold">{project.highlight.value}</span>
              <span className="text-muted-foreground">{project.highlight.label}</span>
            </p>
          )}
        </div>

        <div className="mt-5 relative z-20">
          <ul className="flex flex-wrap gap-2">
            {project.tech.slice(0, featured ? 4 : 3).map((t) => (
              <li key={t} className="chip !px-3 !py-1 !text-xs">
                {t}
              </li>
            ))}
            {project.tech.length > (featured ? 4 : 3) && (
              <li className="chip !px-3 !py-1 !text-xs">+{project.tech.length - (featured ? 4 : 3)}</li>
            )}
          </ul>
          {!featured && (project.liveUrl || project.repoUrl) && (
            <p className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary">
              {project.liveUrl ? "Live demo" : "Public repository"}
              <ArrowUpRight aria-hidden="true" className="size-3.5" />
            </p>
          )}
        </div>
      </div>
    </TiltCard>
  )
}
