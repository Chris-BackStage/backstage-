"use client"

import type React from "react"
import { motion, useReducedMotion } from "framer-motion"
import Link from "next/link"
import * as Icons from "lucide-react"
import { ArrowUpRight } from "lucide-react"
import { SectionContainer } from "@/components/common/SectionContainer"
import { COPY } from "@/content/copy"
import { cn } from "@/lib/utils"

const colorMap = {
  gold: {
    label: "text-gold",
    border: "hover:border-gold/30",
    icon: "bg-gold/10 border-gold/20 text-gold",
    link: "text-gold hover:text-gold-300",
  },
  aegean: {
    label: "text-aegean-400",
    border: "hover:border-aegean/30",
    icon: "bg-aegean/10 border-aegean/20 text-aegean-400",
    link: "text-aegean-400 hover:text-aegean-300",
  },
  olive: {
    label: "text-olive-400",
    border: "hover:border-olive/30",
    icon: "bg-olive/10 border-olive/20 text-olive-400",
    link: "text-olive-400 hover:text-olive-300",
  },
} as const

type ColorKey = keyof typeof colorMap

export function Pillars() {
  const prefersReducedMotion = useReducedMotion()
  const { services } = COPY.home

  return (
    <SectionContainer id="services" className="bg-charcoal">
      {/* Section header */}
      <div className="mb-14 flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <span className="text-[10px] font-sans font-semibold tracking-[0.2em] uppercase text-gold">
            {services.label}
          </span>
          <h2 className="mt-3 font-heading text-3xl font-light text-bone tracking-tight text-balance max-w-lg md:text-4xl lg:text-5xl">
            {services.headline}
          </h2>
        </div>
        <Link
          href="/services"
          className="group inline-flex items-center gap-1.5 text-sm font-sans font-medium text-bone/40 hover:text-bone transition-colors duration-200 flex-shrink-0"
        >
          All services
          <ArrowUpRight
            className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
        </Link>
      </div>

      {/* 2×2 bento grid */}
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {services.items.map((service, index) => {
          const IconComponent =
            (Icons as unknown as Record<string, React.ElementType>)[service.icon] ??
            Icons.Monitor
          const colors = colorMap[(service.color as ColorKey) ?? "aegean"]

          return (
            <div key={service.slug} style={{ perspective: "1000px" }}>
              <motion.article
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                whileHover={prefersReducedMotion ? {} : {
                  rotateX: -3,
                  rotateY: index % 2 === 0 ? 3 : -3,
                  scale: 1.02,
                  z: 30,
                }}
                transition={{
                  default: {
                    duration: 0.6,
                    delay: prefersReducedMotion ? 0 : index * 0.07,
                    ease: [0.19, 1, 0.22, 1] as [number, number, number, number],
                  },
                  rotateX: { type: "spring", stiffness: 300, damping: 25 },
                  rotateY: { type: "spring", stiffness: 300, damping: 25 },
                  scale: { type: "spring", stiffness: 300, damping: 25 },
                }}
                className={cn(
                  "group relative flex flex-col gap-6 rounded-xl bg-charcoal/95 p-8 md:p-10",
                  "border border-bone/[0.07]",
                  "shadow-[0_2px_20px_rgba(0,0,0,0.4)]",
                  "cursor-default"
                )}
                style={{ transformStyle: "preserve-3d", willChange: "transform" }}
              >
                {/* Hover glow overlay */}
                <motion.div
                  className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(ellipse at 50% 0%, rgba(194,166,96,0.08) 0%, transparent 70%)`,
                    boxShadow: "inset 0 1px 0 rgba(194,166,96,0.15)",
                  }}
                />

                {/* Number + icon row */}
                <div className="flex items-center justify-between" style={{ transform: "translateZ(8px)" }}>
                  <div
                    className={cn(
                      "inline-flex h-10 w-10 items-center justify-center rounded-xl border",
                      colors.icon
                    )}
                  >
                    <IconComponent className="h-4.5 w-4.5" aria-hidden="true" />
                  </div>
                  <span className="font-heading text-5xl font-light text-bone/[0.06] tracking-tight select-none">
                    0{index + 1}
                  </span>
                </div>

                {/* Label */}
                <span
                  className={cn(
                    "text-[10px] font-sans font-semibold tracking-[0.2em] uppercase",
                    colors.label
                  )}
                  style={{ transform: "translateZ(6px)" }}
                >
                  {service.label}
                </span>

                {/* Title */}
                <h3
                  className="font-heading text-xl font-light text-bone leading-snug tracking-tight md:text-2xl"
                  style={{ transform: "translateZ(10px)" }}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm font-sans text-bone/50 leading-relaxed flex-1">
                  {service.description}
                </p>

                {/* Link */}
                <Link
                  href={service.link.href}
                  className={cn(
                    "inline-flex items-center gap-1.5 text-xs font-sans font-semibold tracking-wide transition-colors duration-200",
                    colors.link
                  )}
                  style={{ transform: "translateZ(8px)" }}
                >
                  {service.link.label}
                  <ArrowUpRight
                    className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </Link>
              </motion.article>
            </div>
          )
        })}
      </div>
    </SectionContainer>
  )
}
