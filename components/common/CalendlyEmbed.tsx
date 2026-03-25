"use client"

import { useEffect } from "react"
import { cn } from "@/lib/utils"

interface CalendlyEmbedProps {
  url?: string
  className?: string
  height?: number
}

export function CalendlyEmbed({
  url,
  className,
  height = 700,
}: CalendlyEmbedProps) {
  const calendlyUrl = url ?? process.env.NEXT_PUBLIC_CALENDLY_URL

  useEffect(() => {
    if (!calendlyUrl) return
    const script = document.createElement("script")
    script.src = "https://assets.calendly.com/assets/external/widget.js"
    script.async = true
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [calendlyUrl])

  if (!calendlyUrl || calendlyUrl.includes("[[")) {
    return (
      <div
        className={cn(
          "flex items-center justify-center rounded-2xl border-2 border-dashed border-bone-400 bg-bone-100",
          className
        )}
        style={{ height }}
      >
        <div className="text-center p-8">
          <p className="text-sm font-semibold text-charcoal-300 font-sans mb-2">Scheduling Embed</p>
          <p className="text-xs text-charcoal-300 font-sans">
            Set <code className="bg-bone-300 px-1 rounded">NEXT_PUBLIC_CALENDLY_URL</code> in .env.local
          </p>
        </div>
      </div>
    )
  }

  return (
    <div
      className={cn("calendly-inline-widget w-full rounded-2xl overflow-hidden", className)}
      data-url={calendlyUrl}
      style={{ minWidth: "320px", height }}
    />
  )
}
