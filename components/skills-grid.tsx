import { Icon } from "@/components/icon-map"
import { accentStyle } from "@/components/project-art"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { TiltCard } from "@/components/tilt-card"
import { skillGroups } from "@/lib/data/services"

export function SkillsGrid() {
  return (
    <section aria-labelledby="skills-title" className="px-4">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Technical skills"
          title={<span id="skills-title">The full stack, end to end</span>}
          description="Eight domains, one engineer, so every layer of your product integrates cleanly."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {skillGroups.map((g, i) => (
            <Reveal key={g.domain} delay={(i % 4) * 0.07}>
              <TiltCard
                max={3}
                style={accentStyle(g.accent)}
                className="glass relative h-full overflow-hidden rounded-[2rem] p-6"
              >
                <div
                  aria-hidden="true"
                  className="acc-bg pointer-events-none absolute -right-10 -top-12 size-36 rounded-full opacity-15 blur-2xl"
                />
                <div className="relative mb-4 flex items-center gap-3">
                  <span className="orb flex size-11 items-center justify-center rounded-2xl">
                    <Icon name={g.icon} className="size-5" />
                  </span>
                  <h3 className="text-lg font-bold">{g.domain}</h3>
                </div>
                <ul className="flex flex-wrap gap-1.5">
                  {g.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full bg-foreground/[0.05] border border-foreground/[0.06] px-2.5 py-1 text-xs font-medium text-foreground/80"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
