import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "Backstage — Automation Working Quietly Backstage"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#F6F4EF",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          padding: "80px",
          position: "relative",
        }}
      >
        {/* Accent line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 6,
            background: "linear-gradient(90deg, #0A5AA1, #2E7D6D, #C2A660)",
          }}
        />
        {/* Brand mark */}
        <div
          style={{
            position: "absolute",
            top: 60,
            left: 80,
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <span
            style={{
              fontFamily: "serif",
              fontSize: 28,
              fontWeight: 600,
              color: "#0F1317",
              letterSpacing: "-0.02em",
            }}
          >
            Backstage
          </span>
          <div
            style={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: "#C2A660",
            }}
          />
        </div>

        <div>
          <p
            style={{
              fontSize: 18,
              color: "#4A5568",
              fontFamily: "sans-serif",
              marginBottom: 16,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            AI Automation
          </p>
          <h1
            style={{
              fontFamily: "serif",
              fontSize: 72,
              fontWeight: 700,
              color: "#0F1317",
              lineHeight: 1.05,
              letterSpacing: "-0.04em",
              maxWidth: 800,
            }}
          >
            Automation working quietly backstage.
          </h1>
          <p
            style={{
              fontSize: 22,
              color: "#4A5568",
              fontFamily: "sans-serif",
              marginTop: 20,
              maxWidth: 700,
              lineHeight: 1.5,
            }}
          >
            Websites · Media · Leads · Email · Workflows
          </p>
        </div>
      </div>
    ),
    { ...size }
  )
}
