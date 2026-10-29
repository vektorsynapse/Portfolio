import { Analytics } from "@vercel/analytics/next"
import type { Metadata, Viewport } from "next"
import { Geist_Mono, Plus_Jakarta_Sans } from "next/font/google"
import { Providers } from "@/components/providers"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { StudioBackground } from "@/components/studio-background"
import { WhatsAppButton } from "@/components/whatsapp-button"
import "./globals.css"

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
})
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://vektorsynapse.vercel.app"),
  title: {
    default: "Vektorsynapse | Full-Stack Software Studio",
    template: "%s | Vektorsynapse",
  },
  description:
    "Vektorsynapse is a full-stack software studio building production-grade web, mobile and desktop applications with Next.js, React, Node.js, NestJS and Flutter.",
  keywords: [
    "software studio",
    "full-stack development",
    "Next.js developer",
    "React developer",
    "Flutter developer",
    "NestJS",
    "technical consulting",
    "Vektorsynapse",
  ],
  authors: [{ name: "Vektorsynapse" }],
  openGraph: {
    title: "Vektorsynapse | Full-Stack Software Studio",
    description:
      "Production-grade web, mobile and desktop software, from architecture to deployment, with a single point of technical accountability.",
    url: "https://vektorsynapse.vercel.app",
    type: "website",
    siteName: "Vektorsynapse",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vektorsynapse | Full-Stack Software Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vektorsynapse | Full-Stack Software Studio",
    description:
      "Production-grade web, mobile and desktop software, from architecture to deployment, with a single point of technical accountability.",
    images: ["/og-image.png"],
  },
  icons: { icon: "/images/vs-logo.png", apple: "/images/vs-logo.png" },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f3f0ff" },
    { media: "(prefers-color-scheme: dark)", color: "#0c0a24" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${jakarta.variable} ${geistMono.variable}`}>
      <body suppressHydrationWarning>
        <Providers>
          <StudioBackground />
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
          >
            Skip to content
          </a>
          <SiteHeader />
          <main id="main" className="relative z-10">{children}</main>
          <SiteFooter />
          <WhatsAppButton />
        </Providers>
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
