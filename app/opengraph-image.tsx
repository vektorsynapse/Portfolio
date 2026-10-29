import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "Vektorsynapse | Full-Stack Software Studio"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0c0a24 0%, #1a1540 50%, #0e1a3a 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background blobs */}
        <div
          style={{
            position: "absolute",
            top: -120,
            left: -100,
            width: 480,
            height: 480,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(90,60,242,0.35) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -140,
            right: -80,
            width: 520,
            height: 520,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(34,207,238,0.22) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "40%",
            right: "20%",
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255,79,163,0.18) 0%, transparent 70%)",
          }}
        />

        {/* Top row: logo + availability badge */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* Logo mark */}
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: 16,
                background: "linear-gradient(135deg, #3a4cff, #8a3dff)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 22,
                fontWeight: 800,
                color: "#fff",
                boxShadow: "0 8px 24px rgba(90,60,242,0.5)",
              }}
            >
              VS
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ color: "#fff", fontWeight: 700, fontSize: 18 }}>Vektorsynapse</span>
              <span style={{ color: "rgba(255,255,255,0.55)", fontSize: 13 }}>Full-Stack Software Studio</span>
            </div>
          </div>

          {/* Availability pill */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(52,211,153,0.15)",
              border: "1px solid rgba(52,211,153,0.3)",
              borderRadius: 999,
              padding: "8px 18px",
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#34d399",
              }}
            />
            <span style={{ color: "#34d399", fontSize: 14, fontWeight: 600 }}>Available for new projects</span>
          </div>
        </div>

        {/* Main headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              fontSize: 62,
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: "-1.5px",
              color: "#fff",
            }}
          >
            Building Modern{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #3a4cff, #8a3dff, #d24dd8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Web Experiences
            </span>
            <br />
            for Global Brands
          </div>
          <div style={{ fontSize: 22, color: "rgba(255,255,255,0.6)", maxWidth: 700, lineHeight: 1.5 }}>
            Web · Mobile · Desktop — from architecture to deployment. One engineer, one point of accountability.
          </div>
        </div>

        {/* Bottom stats row */}
        <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
          {[
            { value: "8", label: "Client Projects" },
            { value: "98/100", label: "PageSpeed Score" },
            { value: "6", label: "Real-time Modules" },
            { value: "5", label: "Public Demos" },
          ].map((stat) => (
            <div
              key={stat.label}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 4,
                paddingRight: 32,
                borderRight: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              <span
                style={{
                  fontSize: 30,
                  fontWeight: 800,
                  background: "linear-gradient(90deg, #3a4cff, #8a3dff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {stat.value}
              </span>
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", fontWeight: 500 }}>{stat.label}</span>
            </div>
          ))}
          <div style={{ marginLeft: "auto", display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 4 }}>
            <span style={{ color: "rgba(255,255,255,0.35)", fontSize: 13 }}>Next.js · React · Flutter · NestJS</span>
            <span style={{ color: "rgba(255,255,255,0.35)", fontSize: 13 }}>
              {process.env.NEXT_PUBLIC_SITE_URL ? new URL(process.env.NEXT_PUBLIC_SITE_URL).hostname : "vektorsynapse"}
            </span>
          </div>
        </div>
      </div>
    ),
    { ...size },
  )
}
