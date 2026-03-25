"use client"

import type React from "react"
import { motion, useReducedMotion } from "framer-motion"
import * as Icons from "lucide-react"
import { SectionContainer } from "@/components/common/SectionContainer"
import { Badge } from "@/components/ui/badge"
import { COPY } from "@/content/copy"

export function FeaturesGrid() {
  const prefersReducedMotion = useReducedMotion()
  const { features } = COPY.home

  return (
    <SectionContainer id="features">
      <div className="mb-16 flex flex-col items-center text-center">
        <Badge variant="olive" className="mb-4">
          {features.label}
        </Badge>
        <h2 className="font-heading text-4xl font-semibold text-charcoal tracking-tight text-balance max-w-2xl md:text-5xl">
          {features.headline}
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {features.items.map((feature, index) => {
          const IconComponent =
            (Icons as unknown as Record<string, React.ElementType>)[
              feature.icon
            ] ?? Icons.Zap

          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: prefersReducedMotion ? 0 : (index % 3) * 0.08,
              }}
              className="group flex items-start gap-4 rounded-xl border border-bone-400 bg-white p-6 hover:border-aegean/30 hover:shadow-md transition-all duration-200"
            >
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-aegean/10 border border-aegean/20">
                <IconComponent
                  className="h-5 w-5 text-aegean"
                  aria-hidden="true"
                />
              </div>
              <div>
                <h3 className="font-sans font-semibold text-charcoal text-sm mb-1.5">
                  {feature.title}
                </h3>
                <p className="text-sm font-sans text-charcoal/60 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          )
        })}
      </div>
    </SectionContainer>
  )
}
