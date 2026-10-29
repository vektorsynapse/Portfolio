import type { Metadata } from "next"
import { CtaBand } from "@/components/cta-band"
import { ProjectCard } from "@/components/project-card"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { clientProjects, demoProjects } from "@/lib/data/projects"

export const metadata: Metadata = {
  title: "Work",
  description:
    "Client case studies and production repositories: cross-platform mobile apps, high-performance business websites, and offline desktop software.",
}

export default function WorkPage() {
  return (
    <>
      <section className="px-4 pt-14" aria-labelledby="client-title">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            as="h1"
            eyebrow="Portfolio"
            title={
              <>
                Client work that <span className="text-gradient">shipped</span>
              </>
            }
            description="Production engagements across India and Ireland, each with the business challenge, the build, and the measurable outcome."
          />
          <h2 id="client-title" className="sr-only">
            Client case studies
          </h2>
          <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3 items-stretch">
            {clientProjects.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 0.08} y={36} className="h-full flex flex-col">
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Demos & repositories section hidden for now; can be re-enabled in future
      <section className="px-4 pt-28" aria-labelledby="demos-heading">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Demos & repositories"
            title={<span id="demos-heading">Public builds you can inspect</span>}
            description="Open repositories demonstrating Flutter mobile applications, Firebase real-time integration, and multi-tier logistics."
          />
          <div className="mt-14 grid gap-8 sm:grid-cols-2 max-w-5xl">
            {demoProjects.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 0.08} y={36}>
                <ProjectCard project={p} size="compact" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      */}
      <CtaBand />
    </>
  )
}
