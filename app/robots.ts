import type { MetadataRoute } from "next"

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://vektorsynapse.netlify.app"

export default function robots(): MetadataRoute.Robots {
  const cleanBase = baseUrl.replace(/\/$/, "")
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "Google-Extended",
          "PerplexityBot",
          "ClaudeBot",
          "Amazonbot",
          "Applebot",
        ],
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: `${cleanBase}/sitemap.xml`,
    host: cleanBase,
  }
}
