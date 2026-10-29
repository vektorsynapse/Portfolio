export interface Testimonial {
  id: string
  clientName: string
  role: string
  company: string
  location: string
  projectSlug?: string
  projectTitle: string
  quote: string
  metrics?: string
  rating: number
  avatarInitials: string
}

export const testimonials: Testimonial[] = [
  {
    id: "comfort-floors",
    clientName: "David O'Connor",
    role: "Project Coordinator",
    company: "Comfort Floors & Bathrooms",
    location: "Ireland",
    projectSlug: "comfort-floors-bathrooms",
    projectTitle: "International Web Platform",
    quote:
      "Gangadhara engineered our new website with speed and high technical precision. The site loads instantaneously on mobile data, achieved a 92/100 Google PageSpeed rating, and our incoming consultation inquiries noticeably increased within weeks of launch.",
    metrics: "92/100 PageSpeed · 0.00 CLS",
    rating: 5,
    avatarInitials: "DO",
  },
  {
    id: "agnikula-it",
    clientName: "P. R. Varma",
    role: "Technical Lead",
    company: "Agnikula Kshatriyas IT Solutions",
    location: "India",
    projectSlug: "agnikula-kshatriyas-it-solutions",
    projectTitle: "Enterprise Web Platform",
    quote:
      "Gangadhara built our corporate platform with exceptional architecture, clean NestJS services, and modern responsive design. The platform is fast, dependable, and has significantly elevated our brand credibility.",
    metrics: "100% Uptime · Modern NestJS Stack",
    rating: 5,
    avatarInitials: "PV",
  },
  {
    id: "medcare-counter",
    clientName: "R. K. Sharma",
    role: "Store Proprietor",
    company: "Medcare Retail & Clinic",
    location: "India",
    projectSlug: "medcare-desktop-billing",
    projectTitle: "Offline Desktop Billing System",
    quote:
      "We needed an offline-first Windows billing software that would never crash or depend on internet connectivity during rush hours. Medcare has been handling our daily commercial customer checkout and printing without a single hiccup.",
    metrics: "100% Offline · Zero Downtime",
    rating: 5,
    avatarInitials: "RS",
  },
]
