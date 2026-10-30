import type { Metadata, Viewport } from "next"
import { Geist_Mono, Plus_Jakarta_Sans } from "next/font/google"
import { Providers } from "@/components/providers"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { StudioBackground } from "@/components/studio-background"
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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://vektorsynapse.netlify.app"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
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
    "custom web applications",
    "Vektorsynapse",
  ],
  authors: [{ name: "Vektorsynapse", url: siteUrl }],
  creator: "Vektorsynapse",
  publisher: "Vektorsynapse",
  formatDetection: {
    email: true,
    telephone: false,
  },
  openGraph: {
    title: "Vektorsynapse | Full-Stack Software Studio",
    description:
      "Production-grade web, mobile and desktop software, from architecture to deployment, with a single point of technical accountability.",
    url: siteUrl,
    type: "website",
    locale: "en_US",
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
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: { icon: "/images/vs-logo.png", apple: "/images/vs-logo.png" },
  manifest: "/manifest.webmanifest",
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
    other: {
      "msvalidate.01": "D60D60EA5ECF55C1652F5842C4244018",
    },
  },
  category: "technology",
  classification: "Software Studio & Engineering Consulting",
  other: {
    "geo.region": "Global",
    "geo.placename": "Remote Worldwide",
    "distribution": "global",
    "rating": "general",
    "referrer": "origin-when-cross-origin",
  },
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
          <SiteHeader />
          <main id="main" className="relative z-10">{children}</main>
          <SiteFooter />
        </Providers>
      </body>
    </html>
  )
}
