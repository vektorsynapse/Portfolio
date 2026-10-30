import { CtaLink } from "@/components/cta-button"
import { ProjectCard } from "@/components/project-card"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { clientProjects, featuredProjects } from "@/lib/data/projects"

export function FeaturedWork() {
  return (
    <section aria-labelledby="work-title" className="px-4">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Featured projects"
          title={<span id="work-title">Selected Work</span>}
          description="Production deployments for real businesses: cross-platform mobile apps, international web platforms, and offline retail software."
          action={
            <CtaLink href="/work" variant="glass">
              View All {clientProjects.length} Projects
            </CtaLink>
          }
        />
        <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3 items-stretch">
          {featuredProjects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.1} y={40} className="h-full flex flex-col">
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
