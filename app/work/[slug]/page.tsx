import { ArrowLeft, ArrowRight, CheckCircle2, ExternalLink } from "lucide-react"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { CtaBand } from "@/components/cta-band"
import { CtaLink } from "@/components/cta-button"
import { GithubIcon } from "@/components/brand-icons"
import { ProjectArt, accentStyle } from "@/components/project-art"
import { Reveal } from "@/components/reveal"
import { TiltCard } from "@/components/tilt-card"
import { getAdjacentProjects, getProject, projects } from "@/lib/data/projects"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://vektorsynapse.netlify.app"

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) return {}
  const description = `${project.tagline}. ${project.solution[0] ?? project.features?.join(", ") ?? ""}`.slice(0, 160)
  return {
    title: `${project.title} | Case Study`,
    description,
    alternates: {
      canonical: `/work/${slug}`,
    },
    openGraph: {
      title: `${project.title} Case Study | Vektorsynapse`,
      description,
      url: `/work/${slug}`,
      type: "article",
      images: project.image ? [{ url: project.image, alt: project.title }] : [{ url: "/og-image.png" }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} Case Study | Vektorsynapse`,
      description,
      images: project.image ? [project.image] : ["/og-image.png"],
    },
  }
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()
  const { prev, next } = getAdjacentProjects(slug)

  const meta = [
    { label: "Client", value: project.client },
    { label: "Location", value: project.location },
    { label: "Period", value: project.period },
    { label: "Deployment", value: project.deployment },
    { label: "Platform", value: project.platform },
  ].filter((m): m is { label: string; value: string } => Boolean(m.value))

  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${siteUrl}/work/${slug}#case-study`,
    url: `${siteUrl}/work/${slug}`,
    name: project.title,
    headline: project.tagline,
    description: `${project.tagline}. ${project.solution[0] ?? ""}`,
    image: project.image ? `${siteUrl}${project.image}` : `${siteUrl}/og-image.png`,
    creator: {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Vektorsynapse",
      url: siteUrl,
    },
    ...(project.location ? { locationCreated: { "@type": "Place", name: project.location } } : {}),
    keywords: project.tech.join(", "),
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Work",
        item: `${siteUrl}/work`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: project.title,
        item: `${siteUrl}/work/${slug}`,
      },
    ],
  }

  return (
    <article style={accentStyle(project.accent)} className="px-4 pt-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="mx-auto max-w-7xl">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm font-semibold text-muted-foreground">
          <Link href="/work" className="group/back inline-flex items-center gap-1.5 transition-colors duration-200 hover:text-foreground">
            <ArrowLeft aria-hidden="true" className="size-4 transition-transform duration-200 group-hover/back:-translate-x-1" />
            <span>Work</span>
          </Link>
          <span aria-hidden="true" className="opacity-40">/</span>
          <span aria-current="page" className="text-foreground truncate max-w-[200px] sm:max-w-none">{project.title}</span>
        </nav>

        <header className="mt-8 grid items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
          <Reveal immediate>
            <p className="eyebrow mb-4">{project.category === "client" ? "Client case study" : "Demo & repository"}</p>
            <h1 className="text-balance text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">{project.title}</h1>
            <p className="mt-4 text-xl text-muted-foreground">{project.tagline}</p>
            <p className="mt-6 flex items-baseline gap-3">
              <span className="text-gradient text-4xl font-extrabold">{project.highlight.value}</span>
              <span className="text-muted-foreground">{project.highlight.label}</span>
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {project.liveUrl && (
                <CtaLink href={project.liveUrl} arrow={false} icon={<ExternalLink aria-hidden="true" className="size-4" />}>
                  {project.liveLabel ? `Visit ${project.liveLabel}` : "Live site"}
                </CtaLink>
              )}
              {project.repoUrl && (
                <CtaLink href={project.repoUrl} variant="glass" arrow={false} icon={<GithubIcon className="size-4" />}>
                  View on GitHub
                </CtaLink>
              )}
            </div>
          </Reveal>
          <Reveal immediate delay={0.12}>
            <TiltCard max={6} className="acc-tint rounded-[2.5rem] ring-1 ring-white/60 dark:ring-white/10">
              {project.image ? (
                <div className="relative h-72 overflow-hidden rounded-[2.5rem] md:h-80">
                  <Image
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    priority={true}
                    className="size-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent pointer-events-none" />
                </div>
              ) : (
                <ProjectArt surface={project.surface} icon={project.icon} className="h-72 rounded-[2.5rem] md:h-80" />
              )}
            </TiltCard>
          </Reveal>
        </header>

        {meta.length > 0 && (
          <Reveal className="glass mt-14 rounded-[2rem] p-6">
            <dl className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {meta.map((m) => (
                <div key={m.label}>
                  <dt className="eyebrow !text-[0.65rem] !text-muted-foreground">{m.label}</dt>
                  <dd className="mt-1.5 font-semibold">{m.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        )}

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-6">
            {project.challenge && (
              <Reveal className="glass rounded-[2rem] p-8">
                <h2 className="eyebrow mb-4">{project.challengeLabel ?? "The Business Problem"}</h2>
                <p className="text-lg leading-relaxed">{project.challenge}</p>
              </Reveal>
            )}
            {project.solution.length > 0 && (
              <Reveal className="glass rounded-[2rem] p-8">
                <h2 className="eyebrow mb-5">{project.solution.length === 1 ? "The Solution" : "The Solution & Engineering"}</h2>
                <ul className="space-y-4">
                  {project.solution.map((s) => (
                    <li key={s} className="flex gap-3 leading-relaxed">
                      <CheckCircle2 aria-hidden="true" className="mt-1 size-5 shrink-0 text-[var(--acc-b)]" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            )}
            {project.features && (
              <Reveal className="glass rounded-[2rem] p-8">
                <h2 className="eyebrow mb-5">What it does</h2>
                <ul className="grid gap-4 sm:grid-cols-2">
                  {project.features.map((f) => (
                    <li key={f} className="flex gap-3 leading-relaxed">
                      <CheckCircle2 aria-hidden="true" className="mt-1 size-5 shrink-0 text-[var(--acc-b)]" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            )}
            {project.outcome && (
              <Reveal className="acc-bg rounded-[2rem] p-8 text-white shadow-lg shadow-purple-500/20">
                <h2 className="eyebrow mb-4 !text-white/80">The Outcome</h2>
                <p className="text-xl font-semibold leading-relaxed">{project.outcome}</p>
              </Reveal>
            )}
          </div>

          <Reveal className="glass h-fit rounded-[2rem] p-8 lg:sticky lg:top-28">
            <h2 className="eyebrow mb-5">Tech stack</h2>
            <ul className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <li key={t} className="chip">
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <nav aria-label="More projects" className="mt-14 grid gap-4 sm:grid-cols-2">
          <Link href={`/work/${prev.slug}`} className="glass group rounded-[2rem] p-6 transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md">
            <p className="eyebrow !text-[0.65rem] !text-muted-foreground">Previous</p>
            <p className="mt-2 flex items-center gap-3 text-lg font-bold">
              <ArrowLeft aria-hidden="true" className="size-5 transition-transform duration-200 group-hover:-translate-x-1" />
              {prev.title}
            </p>
          </Link>
          <Link href={`/work/${next.slug}`} className="glass group rounded-[2rem] p-6 text-right transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md">
            <p className="eyebrow !text-[0.65rem] !text-muted-foreground">Next</p>
            <p className="mt-2 flex items-center justify-end gap-3 text-lg font-bold">
              {next.title}
              <ArrowRight aria-hidden="true" className="size-5 transition-transform duration-200 group-hover:translate-x-1" />
            </p>
          </Link>
        </nav>
      </div>
      <CtaBand />
    </article>
  )
}
