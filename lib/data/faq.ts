export interface FaqItem {
  q: string
  a: string
  category: "process" | "pricing" | "technical" | "working"
}

export const faqs: FaqItem[] = [
  // Process
  {
    category: "process",
    q: "How do we get started?",
    a: "Just send me a message through the contact page or WhatsApp with a brief description of what you need. I'll reply within 24 hours with a few clarifying questions, then we schedule a free 30-minute discovery call. After that, you get a written proposal with scope, timeline, and fixed price — no obligation.",
  },
  {
    category: "process",
    q: "How long does a typical project take?",
    a: "It depends on scope. A business website takes 2–4 weeks. A full-stack web or mobile app typically runs 6–12 weeks. Desktop software varies by complexity. I'll give you a precise timeline in the proposal — and I stick to it by building in structured milestones rather than one long development stretch.",
  },
  {
    category: "process",
    q: "Will I be able to see progress during the build?",
    a: "Yes — always. I work in short sprints with weekly demos and async Loom/video updates. You see working software at each milestone, not a big reveal at the end. You can give feedback early, before anything is locked in.",
  },
  {
    category: "process",
    q: "What happens after launch?",
    a: "You get full handover: production deployment, environment configs, documentation, and a recorded walkthrough of the codebase. I offer an optional retainer for ongoing bug fixes, feature additions, and performance monitoring. Most clients take a short retainer for the first month at minimum.",
  },
  // Pricing
  {
    category: "pricing",
    q: "How do you charge — fixed price or hourly?",
    a: "Fixed price per milestone for all project work. You know exactly what you're paying before I write a single line of code. No surprise invoices. Hourly rates only apply for open-ended retainer or consulting engagements where the scope can't be defined upfront.",
  },
  {
    category: "pricing",
    q: "What is your payment structure?",
    a: "Typically split into milestones: a deposit to begin (usually 30–40%), then payments tied to each delivered milestone, and the final payment on launch. This keeps both sides accountable and means you're never paying for work you haven't seen.",
  },
  {
    category: "pricing",
    q: "Do you work with international clients and handle foreign payments?",
    a: "Yes — I work with clients in India, Ireland, and globally. I accept payments via bank transfer, Wise, PayPal, and Razorpay. Invoices can be issued in INR, EUR, or USD. Time-zone overlap is manageable across IST, GMT, and EST.",
  },
  // Technical
  {
    category: "technical",
    q: "What tech stack do you use?",
    a: "My primary stack is Next.js / React for web frontends, Node.js / NestJS for backends, and Flutter / Dart for mobile. For desktop I use Electron or Tauri. Database choice depends on the project — PostgreSQL, MongoDB, SQLite, or Firebase. I'll always recommend the stack that fits your actual needs, not the one that's trendy.",
  },
  {
    category: "technical",
    q: "Who owns the code after the project?",
    a: "You do — 100%. All source code, assets, and intellectual property transfer to you on final payment. I don't retain any licensing rights. The code is yours to deploy, modify, sell, or hand to another developer.",
  },
  {
    category: "technical",
    q: "Can you work with an existing codebase or team?",
    a: "Yes. I can join an existing project, audit and refactor legacy code, build a specific feature, or collaborate alongside your in-house team. I'm comfortable picking up any well-structured codebase and contributing without disrupting the existing architecture.",
  },
  // Working style
  {
    category: "working",
    q: "How do we communicate during the project?",
    a: "Primarily async — I send structured written and video updates so you're never blocked waiting for a scheduled call. For real-time discussions we use WhatsApp, Google Meet, or Zoom. I respond to messages within a few hours during IST business hours and check in daily when a project is active.",
  },
  {
    category: "working",
    q: "Do you take on small projects or just large ones?",
    a: "Both. I take on everything from a single landing page to multi-platform full-stack systems. The minimum engagement is typically a clearly scoped deliverable with at least a week of focused work. If your need is smaller than that, I'm happy to point you in the right direction.",
  },
]

export const faqCategories = [
  { key: "all", label: "All questions" },
  { key: "process", label: "Process" },
  { key: "pricing", label: "Pricing" },
  { key: "technical", label: "Technical" },
  { key: "working", label: "Working style" },
] as const
