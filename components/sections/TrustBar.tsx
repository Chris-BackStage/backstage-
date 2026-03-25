"use client"

import { motion, useReducedMotion } from "framer-motion"
import { SectionContainer } from "@/components/common/SectionContainer"
import { LogoCloud } from "@/components/common/LogoCloud"
import { COPY } from "@/content/copy"

export function TrustBar() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <SectionContainer className="py-10 border-y border-bone-400 bg-bone-100">
      <motion.div
        initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <LogoCloud
          items={COPY.home.trustBar.logos}
          label={COPY.home.trustBar.label}
        />
      </motion.div>
    </SectionContainer>
  )
}
