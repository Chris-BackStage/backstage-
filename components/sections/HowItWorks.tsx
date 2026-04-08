"use client"

import { motion, useReducedMotion } from "framer-motion"
import { SectionContainer } from "@/components/common/SectionContainer"
import { COPY } from "@/content/copy"

export function HowItWorks() {
  const prefersReducedMotion = useReducedMotion()
  const { howItWorks } = COPY.home

  return (
    <SectionContainer id="process" className="bg-bone">
      {/* Section header */}
      <div className="mb-16 max-w-2xl">
        <span className="text-[10px] font-sans font-semibold tracking-[0.2em] uppercase text-gold">
          {howItWorks.label}
        </span>
        <h2 className="mt-3 font-heading text-3xl font-semibold text-charcoal tracking-tight text-balance md:text-4xl lg:text-5xl">
          {howItWorks.headline}
        </h2>
      </div>

      {/* Steps — editorial numbered layout */}
      <div className="relative">
        {/* Connector line */}
        <div
          className="absolute top-10 left-[calc(16.67%+2.5rem)] right-[calc(16.67%+2.5rem)] h-px bg-bone-400 hidden lg:block"
          aria-hidden="true"
        />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-0">
          {howItWorks.steps.map((step, index) => (
            <motion.article
              key={step.number}
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.6,
                delay: prefersReducedMotion ? 0 : index * 0.12,
                ease: [0.19, 1, 0.22, 1] as [number, number, number, number],
              }}
              className="group relative flex flex-col gap-6 lg:px-10 lg:first:pl-0 lg:last:pr-0"
            >
              {/* Step number circle */}
              <div className="relative z-10 flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full border-2 border-bone-400 bg-bone shadow-elevation-2 transition-all duration-300 group-hover:shadow-gold-glow group-hover:border-gold/40 group-hover:scale-110">
                <span
                  className="font-heading text-2xl font-semibold text-charcoal tracking-tight"
                  aria-label={`Step ${step.number}`}
                >
                  {step.number}
                </span>
              </div>

              {/* Separator line — mobile only */}
              {index < howItWorks.steps.length - 1 && (
                <div
                  className="absolute left-10 top-20 h-12 w-px bg-bone-400 lg:hidden"
                  aria-hidden="true"
                />
              )}

              {/* Text */}
              <div>
                <h3 className="font-heading text-xl font-semibold text-charcoal tracking-tight mb-3">
                  {step.title}
                </h3>
                <p className="text-sm font-sans text-charcoal/55 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </SectionContainer>
  )
}
