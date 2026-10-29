import { CtaLink } from "@/components/cta-button"

export default function NotFound() {
  return (
    <section className="px-4 py-32 text-center">
      <p className="eyebrow mb-4">404</p>
      <h1 className="text-balance text-5xl font-extrabold tracking-tight">This page doesn&apos;t exist</h1>
      <p className="mx-auto mt-4 max-w-md text-muted-foreground">The link may be broken or the project may have moved.</p>
      <div className="mt-8 flex justify-center gap-3">
        <CtaLink href="/">Back home</CtaLink>
        <CtaLink href="/work" variant="glass">
          Browse work
        </CtaLink>
      </div>
    </section>
  )
}
