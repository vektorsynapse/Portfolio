import { Mail } from "lucide-react"
import Link from "next/link"
import { GithubIcon } from "@/components/brand-icons"
import { Brand } from "@/components/site-header"
import { navLinks, profile } from "@/lib/data/profile"

export function SiteFooter() {
  return (
    <footer className="relative z-10 px-4 pb-8 pt-24">
      <div className="glass relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] p-8 md:p-12">
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-24 -right-16 size-72 rounded-full bg-brand-violet/25 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute -left-16 -top-24 size-64 rounded-full bg-brand-cyan/20 blur-3xl" />
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1.2fr]">
          <div className="space-y-5">
            <Brand />
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              {profile.philosophy}
            </p>
          </div>

          <nav aria-label="Footer">
            <h2 className="eyebrow mb-4">Explore</h2>
            <ul className="space-y-2.5 text-sm font-medium">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="inline-block text-muted-foreground transition-all duration-200 hover:text-primary hover:translate-x-1">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="eyebrow mb-4">Get in touch</h2>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <Mail aria-hidden="true" className="size-4 text-brand-violet shrink-0" />
                <a href={`mailto:${profile.email}`} className="break-all hover:underline hover:text-primary transition-colors">
                  {profile.email}
                </a>
              </li>
              {profile.github && (
                <li className="flex items-center gap-3">
                  <GithubIcon aria-hidden="true" className="size-4 text-brand-violet shrink-0" />
                  <a href={profile.github} target="_blank" rel="noreferrer" className="break-all hover:underline hover:text-primary transition-colors">
                    GitHub / vektorsynapse
                  </a>
                </li>
              )}
            </ul>
            <p className="mt-4 text-xs text-muted-foreground leading-relaxed">
              Available for end-to-end projects, MVP builds, and technical consulting.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Vektorsynapse. All rights reserved.</p>
          <p>Built with Next.js, TypeScript, Tailwind CSS and Motion.</p>
        </div>
      </div>
    </footer>
  )
}
