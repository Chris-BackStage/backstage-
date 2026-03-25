"use client"

import type React from "react"
import { motion, useReducedMotion } from "framer-motion"
import * as Icons from "lucide-react"
import { SectionContainer } from "@/components/common/SectionContainer"
import { Badge } from "@/components/ui/badge"
import { COPY } from "@/content/copy"
import { cn } from "@/lib/utils"

const colorMap = {
  gold: {
    bg: "bg-gold/10",
    border: "border-gold/20",
    icon: "text-gold",
  },
  aegean: {
    bg: "bg-aegean/10",
    border: "border-aegean/20",
    icon: "text-aegean",
  },
  olive: {
    bg: "bg-olive/10",
    border: "border-olive/20",
    icon: "text-olive",
  },
} as const

type ColorKey = keyof typeof colorMap

export function Pillars() {
  const prefersReducedMotion = useReducedMotion()
  const { pillars } = COPY.home

  return (
    <SectionContainer id="pillars">
      <div className="mb-16 text-center">
        <Badge variant="bone" className="mb-4">
          {pillars.label}
        </Badge>
        <h2 className="font-heading text-4xl font-semibold text-charcoal tracking-tight text-balance max-w-2xl mx-auto md:text-5xl">
          {pillars.headline}
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {pillars.items.map((pillar, index) => {
          const IconComponent =
            (Icons as unknown as Record<string, React.ElementType>)[
              pillar.icon
            ] ?? Icons.Zap
          const colors =
            colorMap[(pillar.color as ColorKey) ?? "gold"] ?? colorMap.gold

          return (
            <motion.article
              key={pillar.title}
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: prefersReducedMotion ? 0 : index * 0.08,
                ease: [0.19, 1, 0.22, 1] as [number, number, number, number],
              }}
              whileHover={prefersReducedMotion ? {} : { y: -4 }}
              className="group relative flex flex-col gap-4 rounded-2xl border border-bone-400 bg-white p-7 shadow-sm hover:shadow-md transition-all duration-300 cursor-default"
            >
              <div
                className={cn(
                  "inline-flex h-11 w-11 items-center justify-center rounded-xl border",
                  colors.bg,
                  colors.border
                )}
              >
                <IconComponent
                  className={cn("h-5 w-5", colors.icon)}
                  aria-hidden="true"
                />
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-charcoal">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm font-sans text-charcoal/60 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </motion.article>
          )
        })}
      </div>
    </SectionContainer>
  )
}
