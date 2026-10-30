import type { Project } from "./types"

export const projects: Project[] = [
  {
    slug: "comfort-floors-bathrooms",
    title: "Comfort Floors & Bathrooms",
    tagline: "High-performance international web platform",
    category: "client",
    platform: "Business website",
    client: "Comfort Floors & Bathrooms (via Tech Kshatriyas)",
    location: "Ireland",
    period: "Nov 2024 – Mar 2025",
    liveUrl: "https://comfortfloors.ie/",
    liveLabel: "comfortfloors.ie",
    challenge:
      "An Irish home renovation and flooring business needed a modern digital presence that reflected their premium craftsmanship, loaded instantly for mobile users on cellular data, and drove local customer inquiries.",
    solution: [
      "Architected a bespoke website using Next.js 14 and TypeScript, styled with Tailwind CSS.",
      "Implemented route-level code splitting, asset preloading, dynamic image decoding, and zero-shift layout geometry.",
      "Achieved an audited 92/100 Google PageSpeed Insights score with 0.00 Cumulative Layout Shift.",
      "Built reusable, cohesive Tailwind CSS design component libraries for agile future marketing additions.",
    ],
    outcome:
      "Delivered a lightning-fast, production-stable digital storefront directly serving Irish homeowners and commercial contractors with zero hosting fragility.",
    tech: ["Next.js 14", "TypeScript", "React.js", "Tailwind CSS"],
    accent: "cyan",
    icon: "gauge",
    surface: "web",
    image: "/images/comfortfloors.webp",
    featured: true,
    highlight: { value: "92/100", label: "PageSpeed, 0.00 CLS" },
  },
  {
    slug: "jntua-college-portal",
    title: "JNTUA College of Engineering",
    tagline: "Institutional portal maintenance",
    category: "client",
    platform: "University portal",
    client: "JNTUA College of Engineering",
    location: "Pulivendula, India",
    liveUrl: "https://jntuacep.ac.in/",
    liveLabel: "jntuacep.ac.in",
    challengeLabel: "The Mandate",
    challenge:
      "Maintain the high-traffic institutional university portal serving thousands of active engineering students, faculty, and administrative staff.",
    solution: [
      "Maintained core web architecture, resolving frontend navigation bugs, patching security flaws, updating academic circulars, and tuning page load speeds.",
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
    accent: "amber",
    icon: "graduation",
    surface: "web",
    image: "/images/jntuacep.webp",
    featured: true,
    highlight: { value: "1000s", label: "students, faculty and staff served" },
  },
  {
    slug: "sayed-wedding-invitation",
    title: "Sayed Wedding Invitation",
    tagline: "WebGL interactive digital experience",
    category: "client",
    platform: "Interactive 3D web",
    client: "Sayed family Nikah celebration",
    liveUrl: "https://sayed-wedding-invitation.netlify.app/",
    liveLabel: "sayed-wedding-invitation.netlify.app",
    challengeLabel: "The Challenge",
    challenge:
      "Deliver an elegant, bilingual (English/Telugu) digital invitation distributed to hundreds of wedding guests across mobile devices, with varying network speeds.",
    solution: [
      "Built a 3D interactive invitation using TypeScript, Vite, Three.js, GSAP, and Lenis.",
      "Engineered a zero-JS fallback: with scripting disabled, 1,902 characters of event details render instantly.",
      "Pre-shaped Arabic and Urdu calligraphy at build time with HarfBuzz, eliminating client-side font engine bundle overhead.",
      "Integrated custom per-guest personal links, calendar triggers, and venue GPS directions backed by 61 automated unit tests.",
    ],
    tech: ["TypeScript", "Vite", "Three.js", "GSAP", "Lenis", "HarfBuzz"],
    accent: "fuchsia",
    icon: "sparkles",
    surface: "scene",
    image: "/images/wedding.webp",
    featured: true,
    highlight: { value: "61", label: "automated unit tests" },
  },
  {
    slug: "agnikula-kshatriyas-it-solutions",
    title: "Agnikula Kshatriyas IT Solutions",
    tagline: "Corporate enterprise web platform",
    category: "client",
    platform: "Corporate website",
    client: "Agnikula Kshatriyas IT Solutions",
    liveUrl: "https://agnikulakshatriyasitsolutions.com/",
    liveLabel: "agnikulakshatriyasitsolutions.com",
    challenge:
      "An emerging IT solutions consultancy required a corporate digital identity to showcase their technical offerings, client engagements, and engineering competencies.",
    solution: [
      "Developed a scalable corporate platform using NestJS, TypeScript, and Tailwind CSS.",
      "Engineered clean typography, modern service showcases, responsive mobile viewports, and direct contact acquisition funnels.",
    ],
    tech: ["NestJS", "TypeScript", "Tailwind CSS", "REST APIs"],
    accent: "sky",
    icon: "building",
    surface: "web",
    image: "/images/agnikula.webp",
    highlight: { value: "Live", label: "corporate platform" },
  },
  {
    slug: "supercabs",
    title: "SuperCabs",
    tagline: "Cross-platform mobile cab rental & mobility app",
    category: "client",
    platform: "Mobile app (Flutter)",
    client: "Zyrone Energy (In-house product)",
    location: "Gujarat, India",
    period: "Mar 2025 – Jul 2025",
    repoUrl: "https://github.com/vektorsynapse/SuperCabs",
    challenge:
      "Zyrone Energy required a modern, user-friendly mobile application frontend for a cab rental and mobility service. The client app needed fast onboarding, driver document verification, and reliable real-time push notification delivery across both iOS and Android devices.",
    solution: [
      "Engineered the complete cross-platform mobile frontend with Flutter and Dart, ensuring a responsive and native-feeling Material Design 3 interface.",
      "Built a frictionless 3-step OTP mobile onboarding flow for passengers and drivers.",
      "Designed and implemented driver onboarding pipelines including vehicle details and document photo submission interfaces.",
      "Integrated Firebase Authentication and Firebase Cloud Messaging (FCM) for real-time ride alerts and background push notifications.",
    ],
    outcome:
      "Delivered a production-quality mobile frontend handling passenger booking and driver onboarding workflows smoothly with zero UI latency.",
    tech: [
      "Flutter",
      "Dart",
      "Firebase Auth",
      "FCM",
      "Material Design",
      "RESTful APIs",
    ],
    accent: "violet",
    icon: "car",
    surface: "mobile",
    highlight: { value: "Flutter", label: "mobile client frontend" },
  },
  {
    slug: "medcare-desktop-billing",
    title: "Medcare",
    tagline: "Offline retail pharmacy & clinic desktop billing",
    category: "client",
    platform: "Desktop application",
    client: "Retail pharmacy & clinical counter",
    location: "India",
    deployment: "Signed Windows installer, in active daily commercial use",
    challenge:
      "A busy retail medical counter was relying on handwritten manual billing and paper ledgers. Invoicing was slow, math errors occurred during peak hours, and past customer purchase history was impossible to search. The client refused cloud subscriptions due to unreliable internet connectivity and privacy concerns.",
    solution: [
      "Built Medcare, a zero-cloud-dependency desktop billing application packaged in Electron with a React frontend and Node.js/Express service.",
      "Implemented embedded SQLite local storage for instant item lookups, automated tax calculation, invoice generation, and thermal/laser receipt printing.",
      "Handed over a signed, licensed Windows installer configured specifically for the counter workstation.",
    ],
    outcome:
      "Deployed and in active daily commercial use. Cut customer checkout duration significantly and gave the business owner instantaneous, searchable inventory and transaction logs.",
    tech: ["Electron", "React", "Node.js", "Express", "SQLite", "MongoDB"],
    accent: "rose",
    icon: "stethoscope",
    surface: "desktop",
    highlight: { value: "0", label: "cloud dependencies" },
  },
  /* Hidden per request; can be re-enabled in future
  {
    slug: "irish-operations-workflow",
    title: "Irish Operations Team",
    tagline: "Custom business workflow automation",
    category: "client",
    platform: "Internal web app",
    client: "Irish enterprise team (via Tech Kshatriyas)",
    location: "Ireland",
    period: "Nov 2024 – Mar 2025",
    challenge:
      "An international operations team in Ireland was managing three critical business workflows across disconnected, error-prone spreadsheets, resulting in data desynchronization and missed follow-ups.",
    solution: [
      "Developed and deployed an internal React + Node.js workflow management application.",
      "Built a centralized database model with audited task lifecycles, role-based update permissions, and automated status logging.",
    ],
    outcome:
      "Eliminated spreadsheet dependencies across all three core workflows, establishing single-source-of-truth accuracy for the client’s operations.",
    tech: ["React", "Node.js", "Express", "Tailwind CSS", "REST APIs"],
    accent: "indigo",
    icon: "workflow",
    surface: "dashboard",
    highlight: { value: "3", label: "workflows moved off spreadsheets" },
  },
  */
  {
    slug: "vedika-venue-booking",
    title: "Vedika",
    tagline: "Wedding & event venue booking platform",
    category: "client",
    platform: "Booking marketplace",
    deployment: "Live on Vercel",
    solution: [
      "End-to-end booking marketplace allowing venue operators to list banquet halls and event spaces, and clients to browse, filter by capacity, and request dates.",
    ],
    tech: ["Next.js", "Tailwind CSS", "Vercel"],
    accent: "emerald",
    icon: "calendar",
    surface: "web",
    highlight: { value: "Live", label: "on Vercel" },
  },
  {
    slug: "hydrox",
    title: "Hydrox",
    tagline: "Water delivery & branch logistics system",
    category: "demo",
    platform: "Mobile + logistics",
    repoUrl: "https://github.com/vektorsynapse/Hydrox",
    solution: [],
    features: [
      "Mobile customer ordering",
      "Two-tier branch assignment",
      "Central live delivery tracking",
    ],
    tech: ["Mobile ordering", "Branch logistics", "Live tracking"],
    accent: "sky",
    icon: "droplets",
    surface: "mobile",
    highlight: { value: "2-tier", label: "branch assignment" },
  },
]

export const clientProjects = projects.filter((p) => p.category === "client")
export const demoProjects = projects.filter((p) => p.category === "demo")
export const featuredProjects = projects.filter((p) => p.featured)

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug)
}

export function getAdjacentProjects(slug: string) {
  const i = projects.findIndex((p) => p.slug === slug)
  return {
    prev: projects[(i - 1 + projects.length) % projects.length],
    next: projects[(i + 1) % projects.length],
  }
}
