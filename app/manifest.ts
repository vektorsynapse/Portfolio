import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Vektorsynapse Software Studio",
    short_name: "Vektorsynapse",
    description: "Production-grade web, mobile and desktop software studio.",
    start_url: "/",
    display: "standalone",
    background_color: "#0c0a24",
    theme_color: "#0c0a24",
    icons: [
      {
        src: "/images/vs-logo.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/images/vs-logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  }
}
