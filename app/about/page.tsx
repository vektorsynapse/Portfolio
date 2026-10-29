import { CheckCircle2 } from "lucide-react"
import type { Metadata } from "next"
import { CtaBand } from "@/components/cta-band"
import { CtaLink } from "@/components/cta-button"
import { Icon } from "@/components/icon-map"
import { accentStyle } from "@/components/project-art"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { SkillsGrid } from "@/components/skills-grid"
import { profile, workingPrinciples } from "@/lib/data/profile"
import { services } from "@/lib/data/services"

export const metadata: Metadata = {
  title: "About",
  description:
    "Vektorsynapse is a full-stack software studio: services, working principles, and technical capabilities.",
}

export default function AboutPage() {
  return (
    <>
      <section className="px-4 pt-14">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            as="h1"
            eyebrow="About"
            title={
              <>
                Simple on the surface, <span className="text-gradient">engineered deeply</span> underneath
              </>
            }
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-[1.3fr_1fr]">
            <Reveal className="glass rounded-[2.25rem] p-8 md:p-10">
              <p className="eyebrow mb-4">{profile.role}</p>
              <p className="text-lg leading-relaxed">{profile.intro}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <CtaLink href="/contact">Start a project</CtaLink>
              </div>
            </Reveal>
            <Reveal delay={0.1} className="glass rounded-[2.25rem] p-8">
              <h2 className="eyebrow mb-5">Track record</h2>
              <ul className="space-y-4">
                {profile.trackRecord.map((t) => (
                  <li key={t} className="flex gap-3 text-sm leading-relaxed">
                    <CheckCircle2 aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-brand-violet" />
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="px-4 pt-28" aria-labelledby="services-detail">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Services" title={<span id="services-detail">What we deliver</span>} />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={(i % 2) * 0.08}>
                <article style={accentStyle(s.accent)} className="glass h-full rounded-[2rem] p-7">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="acc-bg acc-shadow flex size-12 items-center justify-center rounded-2xl text-white">
                      <Icon name={s.icon} className="size-5" />
                    </span>
                    <h3 className="text-xl font-bold">{s.title}</h3>
                  </div>
                  <ul className="space-y-2.5 text-sm leading-relaxed text-muted-foreground">
                    {s.points.map((p) => (
                      <li key={p} className="flex gap-2.5">
                        <span aria-hidden="true" className="acc-bg mt-2 size-1.5 shrink-0 rounded-full" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pt-28" aria-labelledby="principles-title">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Working principles" title={<span id="principles-title">How we work</span>} />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {workingPrinciples.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <article className="glass h-full rounded-[2rem] p-7">
                  <p className="text-gradient font-mono text-3xl font-extrabold">0{i + 1}</p>
                  <h3 className="mt-3 text-xl font-bold">{p.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{p.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SkillsGrid />
      <CtaBand />
    </>
  )
}
