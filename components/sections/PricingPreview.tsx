"use client"

import { motion, useReducedMotion } from "framer-motion"
import { SectionContainer } from "@/components/common/SectionContainer"
import { GradientBackdrop } from "@/components/common/GradientBackdrop"
import { PricingTable } from "@/components/common/PricingTable"
import { Badge } from "@/components/ui/badge"
import { COPY } from "@/content/copy"

export function PricingPreview() {
  const prefersReducedMotion = useReducedMotion()
  const { pricing } = COPY.home

  return (
    <GradientBackdrop variant="subtle" as="section">
      <SectionContainer id="pricing">
        <div className="mb-16 text-center">
          <Badge variant="bone" className="mb-4">
            {pricing.label}
          </Badge>
          <h2 className="font-heading text-4xl font-semibold text-charcoal tracking-tight mb-4 md:text-5xl">
            {pricing.headline}
          </h2>
          <p className="max-w-xl mx-auto text-base font-sans text-charcoal/60 leading-relaxed">
            {pricing.description}
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <PricingTable tiers={[...COPY.home.pricing.tiers]} />
        </motion.div>
      </SectionContainer>
    </GradientBackdrop>
  )
}
