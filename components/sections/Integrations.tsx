"use client"

import { motion, useReducedMotion } from "framer-motion"
import { SectionContainer } from "@/components/common/SectionContainer"
import { GradientBackdrop } from "@/components/common/GradientBackdrop"
import { Badge } from "@/components/ui/badge"
import { COPY } from "@/content/copy"

export function Integrations() {
  const prefersReducedMotion = useReducedMotion()
  const { integrations } = COPY.home

  return (
    <GradientBackdrop variant="olive" as="section">
      <SectionContainer id="integrations">
        <div className="mb-12 text-center">
          <Badge variant="olive" className="mb-4">
            {integrations.label}
          </Badge>
          <h2 className="font-heading text-4xl font-semibold text-charcoal tracking-tight mb-4 md:text-5xl">
            {integrations.headline}
          </h2>
          <p className="max-w-xl mx-auto text-base font-sans text-charcoal/60 leading-relaxed">
            {integrations.description}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {integrations.items.map((name, index) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.3,
                delay: prefersReducedMotion ? 0 : index * 0.03,
              }}
            >
              <span className="inline-flex items-center rounded-full border border-bone-400 bg-white px-4 py-2 text-sm font-medium font-sans text-charcoal shadow-sm hover:border-olive/40 hover:shadow-md transition-all duration-200 cursor-default">
                {name}
              </span>
            </motion.div>
          ))}
        </div>
      </SectionContainer>
    </GradientBackdrop>
  )
}
