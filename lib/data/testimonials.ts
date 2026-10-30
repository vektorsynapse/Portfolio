export interface Testimonial {
  id: string
  clientName?: string
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
    role: "Project Coordinator",
    company: "Comfort Floors & Bathrooms",
    location: "Ireland",
    projectSlug: "comfort-floors-bathrooms",
    projectTitle: "International Web Platform",
    quote:
      "We needed a modern website that would load instantly for customers browsing on mobile data. Vektorsynapse delivered ahead of schedule, and we saw a noticeable increase in consultation inquiries right after launch.",
    metrics: "92/100 Google PageSpeed · 0.00 CLS",
    rating: 5,
    avatarInitials: "CF",
  },
  {
    id: "jntua-portal",
    role: "Institutional Portal Team",
    company: "JNTUA College of Engineering",
    location: "India",
    projectSlug: "jntua-college-portal",
    projectTitle: "University Portal Maintenance",
    quote:
      "Maintaining an academic portal serving thousands of engineering students and faculty requires reliable technical execution. Critical circulars, student notifications, and portal updates were delivered with zero downtime.",
    metrics: "1000s of Active Users · Zero Downtime",
    rating: 5,
    avatarInitials: "JN",
  },
  {
    id: "medcare-counter",
    role: "Store Proprietor",
    company: "Medcare Retail & Clinic",
    location: "India",
    projectSlug: "medcare-desktop-billing",
    projectTitle: "Offline Desktop Billing System",
    quote:
      "Our pharmacy counter gets crowded during peak rush hours, so we couldn't risk cloud systems crashing or needing active internet. The billing software is fast, completely offline, and handles our daily checkout and printing without a single hiccup.",
    metrics: "100% Offline-First · Zero Downtime",
    rating: 5,
    avatarInitials: "MC",
  },
]
