import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { TiltCard } from "@/components/tilt-card"
import { whyWorkWithMe } from "@/lib/data/profile"

export function WhyMe() {
  return (
    <section aria-labelledby="why-title" className="px-4">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Why work with us" title={<span id="why-title">One accountable studio</span>} />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {whyWorkWithMe.map((w, i) => (
            <Reveal key={w.title} delay={(i % 2) * 0.08}>
              <div className="h-full">
                <TiltCard max={3} className="glass flex h-full gap-5 rounded-[2rem] p-7">
                  <span className="text-gradient font-mono text-4xl font-extrabold leading-none">0{i + 1}</span>
                  <div>
                    <h3 className="text-xl font-bold">{w.title}</h3>
                    <p className="mt-2 leading-relaxed text-muted-foreground">{w.body}</p>
                  </div>
                </TiltCard>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
