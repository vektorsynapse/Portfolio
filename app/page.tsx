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
import { faqs } from "@/lib/data/faq"
import { profile } from "@/lib/data/profile"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://vektorsynapse.netlify.app"

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": `${siteUrl}/#organization`,
      name: "Vektorsynapse",
      alternateName: "Vektorsynapse Software Studio",
      url: siteUrl,
      logo: `${siteUrl}/images/vs-logo.png`,
      image: `${siteUrl}/og-image.png`,
      description: "Full-Stack Software Studio building production-grade web, mobile and desktop applications.",
      email: profile.email,
      priceRange: "$$",
      areaServed: ["Global", "Ireland", "United States", "United Kingdom", "India"],
      availableLanguage: ["English"],
      sameAs: profile.github ? [profile.github] : [],
      knowsAbout: [
        "Full-Stack Web Development",
        "Next.js",
        "React",
        "TypeScript",
        "Node.js",
        "NestJS",
        "Flutter Mobile Development",
        "Desktop Software Engineering",
        "API Architecture",
        "High-Performance Web Applications",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Software Development Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Business Websites",
              description: "Modern, responsive and SEO friendly websites with 90+ PageSpeed scores",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Web Applications",
              description: "Custom scalable web applications with advanced features and type-safe APIs",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "API & Integrations",
              description: "Third-party API integrations, microservices and secure backend systems",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Performance & Growth",
              description: "Speed optimization, code audits, maintenance and feature scaling",
            },
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Vektorsynapse",
      description: "Full-Stack Software Studio building production-grade web, mobile and desktop software.",
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
      inLanguage: "en-US",
    },
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#faq`,
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: f.a,
        },
      })),
    },
  ],
}

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Hero />
      <div className="flex flex-col gap-14 md:gap-18 pt-10 md:pt-12">
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
      </div>
    </>
  )
}
