"use client"

import { motion, useReducedMotion } from "framer-motion"
import { SectionContainer } from "@/components/common/SectionContainer"
import { GradientBackdrop } from "@/components/common/GradientBackdrop"
import { Badge } from "@/components/ui/badge"
import { COPY } from "@/content/copy"

export function HowItWorks() {
  const prefersReducedMotion = useReducedMotion()
  const { howItWorks } = COPY.home

  return (
    <GradientBackdrop variant="aegean" as="section">
      <SectionContainer id="how-it-works">
        <div className="mb-16 text-center">
          <Badge variant="aegean" className="mb-4">
            {howItWorks.label}
          </Badge>
          <h2 className="font-heading text-4xl font-semibold text-charcoal tracking-tight text-balance md:text-5xl">
            {howItWorks.headline}
          </h2>
        </div>

        <div className="relative">
          {/* Connector line — visible only on lg+ between the step circles */}
          <div
            className="absolute top-12 left-[calc(16.67%+3rem)] right-[calc(16.67%+3rem)] h-px bg-aegean/15 hidden lg:block"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
            {howItWorks.steps.map((step, index) => (
              <motion.article
                key={step.number}
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: prefersReducedMotion ? 0 : index * 0.12,
                }}
                className="relative flex flex-col items-start gap-5 lg:items-center lg:text-center"
              >
                {/* Step circle */}
                <div className="relative z-10 flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-full border-2 border-aegean/20 bg-white shadow-md">
                  <span
                    className="font-heading text-3xl font-bold text-aegean tracking-tight"
                    aria-label={`Step ${step.number}`}
                  >
                    {step.number}
                  </span>
                </div>

                {/* Text */}
                <div>
                  <h3 className="font-heading text-xl font-semibold text-charcoal mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm font-sans text-charcoal/60 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </SectionContainer>
    </GradientBackdrop>
  )
}
