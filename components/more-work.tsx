import { ProjectCard } from "@/components/project-card"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { demoProjects } from "@/lib/data/projects"

export function MoreWork() {
  return (
    <section aria-labelledby="demos-title" className="px-4 pt-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Demos & repositories"
          title={<span id="demos-title">Inspect the code yourself</span>}
          description="Public mobile repositories that demonstrate real-time Flutter, Firebase and cloud synchronization architectures."
        />
        <div className="mt-12 grid gap-8 sm:grid-cols-2 max-w-5xl">
          {demoProjects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.08} y={36}>
              <ProjectCard project={p} size="compact" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
