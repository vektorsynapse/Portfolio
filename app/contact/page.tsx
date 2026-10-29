import { Clock, Globe2, Mail, MapPin } from "lucide-react"
import type { Metadata } from "next"
import { GithubIcon } from "@/components/brand-icons"
import { ContactForm } from "@/components/contact-form"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { profile } from "@/lib/data/profile"

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a project with Vektorsynapse: web apps, mobile apps, desktop software and technical consulting.",
}

const channels = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  ...(profile.github
    ? [{ icon: GithubIcon, label: "GitHub", value: "github.com/vektorsynapse", href: profile.github }]
    : []),
]

export default function ContactPage() {
  return (
    <section className="px-4 pt-14">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          as="h1"
          eyebrow="Contact"
          title={
            <>
              Tell us what you&apos;re <span className="text-gradient">building</span>
            </>
          }
          description="Share a few details and we will reply with next steps, a rough approach and the questions that matter."
        />
        <div className="mt-14 grid gap-8 lg:grid-cols-[1.3fr_1fr]">
          <Reveal>
            <ContactForm />
          </Reveal>
          <Reveal delay={0.1} className="space-y-4">
            <ul className="space-y-3">
              {channels.map(({ icon: I, label, value, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="glass flex items-center gap-4 rounded-3xl p-4 transition-transform hover:-translate-y-1"
                  >
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#3a4cff] to-[#8a3dff] text-white shadow-lg">
                      <I aria-hidden="true" className="size-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="eyebrow block !text-[0.62rem] !text-muted-foreground">{label}</span>
                      <span className="block break-all font-semibold">{value}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <div className="glass space-y-3 rounded-3xl p-5 text-sm text-muted-foreground">
              <p className="flex gap-3">
                <MapPin aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-brand-violet" />
                {profile.location}
              </p>
              <p className="flex gap-3">
                <Globe2 aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-brand-violet" />
                {profile.timezones}
              </p>
              <p className="flex gap-3">
                <Clock aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-brand-violet" />
                {profile.availability}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
