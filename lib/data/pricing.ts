export interface PricingFeature {
  text: string
  included: boolean
}

export interface PricingTier {
  name: string
  tagline: string
  timeline: string
  badge?: string
  priceFrom: string
  priceSuffix: string
  description: string
  features: PricingFeature[]
  cta: string
  ctaHref: string
  accent: string
  accentRgb: string
  popular?: boolean
}

export const pricingTiers: PricingTier[] = [
  {
    name: "Landing Page",
    tagline: "Single responsive page & quick launch",
    timeline: "2 – 4 days turnaround",
    priceFrom: "₹3,999",
    priceSuffix: "/ starting quote",
    description:
      "A fast, responsive single-page website with your provided content and contact form. Perfect for launching quickly.",
    accent: "#22cfee",
    accentRgb: "34 207 238",
    cta: "Start landing page",
    ctaHref: "/contact",
    features: [
      { text: "1 responsive landing page (React / Next.js / Tailwind)", included: true },
      { text: "Provided content & image integration", included: true },
      { text: "Contact inquiry form & email notifications", included: true },
      { text: "Mobile-responsive & basic Google SEO setup", included: true },
      { text: "Live cloud deployment (Vercel / Netlify)", included: true },
      { text: "2 rounds of design revisions included", included: true },
      { text: "Bug fixes & minor tweaks: ₹500 – ₹1,500 add-on", included: true },
      { text: "Multi-page navigation (Home, About, Services)", included: false },
      { text: "Custom database or user login authentication", included: false },
    ],
  },
  {
    name: "Business Website",
    tagline: "Around 4–5 pages for companies & services",
    timeline: "1 – 2 weeks turnaround",
    badge: "Most popular",
    priceFrom: "₹8,999 – ₹15,000",
    priceSuffix: "/ project scope",
    popular: true,
    description:
      "Complete multi-page presence designed to present your offerings cleanly, build credibility, and convert visitors into inquiries.",
    accent: "#8a3dff",
    accentRgb: "138 61 255",
    cta: "Build business website",
    ctaHref: "/contact",
    features: [
      { text: "4–5 custom responsive pages (Home, Services, About, Contact)", included: true },
      { text: "Fast loading performance (90+ Google PageSpeed score)", included: true },
      { text: "Contact form & Google Maps location embed", included: true },
      { text: "On-page SEO, meta tags & OpenGraph social preview cards", included: true },
      { text: "Custom domain connection & SSL configuration", included: true },
      { text: "3 rounds of design reviews & regular progress updates", included: true },
      { text: "14 days post-handover bug-fix warranty", included: true },
      { text: "User login/registration & member dashboard", included: false },
      { text: "Ongoing content updates (available as monthly retainer)", included: false },
    ],
  },
  {
    name: "Full-Stack MVP",
    tagline: "Custom web app with login, database & APIs",
    timeline: "3 – 5 weeks turnaround",
    priceFrom: "₹18,000 – ₹30,000+",
    priceSuffix: "/ custom quote",
    description:
      "A tightly scoped, production-ready product: interactive UI, backend REST APIs, database, user authentication, and live deployment.",
    accent: "#ff4fa3",
    accentRgb: "255 79 163",
    cta: "Get custom quote",
    ctaHref: "/contact",
    features: [
      { text: "Custom React/Next.js frontend + Node.js backend REST API", included: true },
      { text: "Database setup (MongoDB, PostgreSQL, or Firebase)", included: true },
      { text: "User authentication (JWT, Phone OTP, or Session)", included: true },
      { text: "Tightly limited, clearly agreed core user workflows", included: true },
      { text: "Cloud deployment (Vercel / Render) with live database", included: true },
      { text: "100% source code ownership & GitHub repo handover", included: true },
      { text: "Milestone-based billing (40% advance, 30% demo, 30% launch)", included: true },
      { text: "Payment gateways, complex analytics, or multi-role apps (quoted extra)", included: false },
      { text: "Ongoing server & app maintenance (billed separately)", included: false },
    ],
  },
]
