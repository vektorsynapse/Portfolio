import { CtaBand } from "@/components/cta-band"
import { Faq } from "@/components/faq"
import { FeaturedWork } from "@/components/featured-work"
import { Hero } from "@/components/hero"
import { HowWeWork } from "@/components/how-we-work"
import { MetricsBand } from "@/components/metrics-band"
import { MoreWork } from "@/components/more-work"
import { Pricing } from "@/components/pricing"
import { ServicesStrip } from "@/components/services-strip"
import { SkillsGrid } from "@/components/skills-grid"
import { Testimonials } from "@/components/testimonials"
import { WhyMe } from "@/components/why-me"
import { profile } from "@/lib/data/profile"

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Vektorsynapse",
  description: "Full-Stack Software Studio building production-grade web, mobile and desktop applications.",
  email: profile.email,
  ...(process.env.NEXT_PUBLIC_SITE_URL ? { url: process.env.NEXT_PUBLIC_SITE_URL } : {}),
}

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      <Hero />
      <ServicesStrip />
      <FeaturedWork />
      <MetricsBand />
      {/* <MoreWork /> Hidden for now; can be re-enabled in the future */}
      <SkillsGrid />
      <WhyMe />
      <Testimonials />
      <Pricing />
      <HowWeWork />
      <Faq />
      <CtaBand />
    </>
  )
}
