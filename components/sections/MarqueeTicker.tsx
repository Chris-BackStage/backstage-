"use client"

import { useReducedMotion } from "framer-motion"
import { cn } from "@/lib/utils"
import { COPY } from "@/content/copy"

interface MarqueeTickerProps {
  variant?: "dark" | "light"
  speed?: "normal" | "slow"
  className?: string
}

export function MarqueeTicker({
  variant = "dark",
  speed = "normal",
  className,
}: MarqueeTickerProps) {
  const prefersReducedMotion = useReducedMotion()

  const items = COPY.home.marquee.items
  // Duplicate for seamless loop
  const allItems = [...items, ...items]

  const isDark = variant === "dark"

  return (
    <div
      className={cn(
        "relative overflow-hidden",
        isDark
          ? "border-t border-bone/10 bg-charcoal"
          : "border-t border-bone-400 bg-bone-100",
        className
      )}
      aria-hidden="true"
    >
      {/* Left fade */}
      <div
        className={cn(
          "pointer-events-none absolute left-0 top-0 z-10 h-full w-24",
          isDark
            ? "bg-gradient-to-r from-charcoal to-transparent"
            : "bg-gradient-to-r from-bone-100 to-transparent"
        )}
      />
      {/* Right fade */}
      <div
        className={cn(
          "pointer-events-none absolute right-0 top-0 z-10 h-full w-24",
          isDark
            ? "bg-gradient-to-l from-charcoal to-transparent"
            : "bg-gradient-to-l from-bone-100 to-transparent"
        )}
      />

      <div
        className={cn(
          "flex whitespace-nowrap",
          prefersReducedMotion
            ? "justify-center"
            : speed === "slow"
            ? "animate-marquee-slow"
            : "animate-marquee"
        )}
      >
        {allItems.map((item, i) => (
          <span
            key={i}
            className={cn(
              "inline-flex items-center gap-5 px-8 py-4 text-xs font-sans font-semibold tracking-[0.2em] uppercase",
              isDark ? "text-bone/30" : "text-charcoal/30"
            )}
          >
            {item}
            <span
              className={cn(
                "inline-block h-1 w-1 rounded-full flex-shrink-0",
                isDark ? "bg-gold/50" : "bg-gold/40"
              )}
            />
          </span>
        ))}
      </div>
    </div>
  )
}
