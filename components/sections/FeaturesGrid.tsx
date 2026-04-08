"use client"

import { motion, useReducedMotion } from "framer-motion"
import { SectionContainer } from "@/components/common/SectionContainer"
import { COPY } from "@/content/copy"
import { cn } from "@/lib/utils"

export function FeaturesGrid() {
  const prefersReducedMotion = useReducedMotion()
  const { differentiators } = COPY.home

  return (
    <section
      id="why-backstage"
      className="relative overflow-hidden bg-charcoal"
      aria-label="Why Backstage"
    >
      {/* Top marquee ticker — inverted direction */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <div className="absolute -left-40 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-gold/[0.04] blur-[80px]" />
        <div className="absolute -right-40 top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-aegean/[0.05] blur-[80px]" />
      </div>

      {/* Dividing grid lines */}
      <div className="relative z-10">
        <div className="mx-auto max-w-screen-lg px-6 pb-2 pt-12 md:px-8 lg:px-12 lg:pt-16">
          <span className="text-[10px] font-sans font-semibold tracking-[0.2em] uppercase text-gold">
            {differentiators.label}
          </span>
        </div>

        <div className="mx-auto max-w-screen-lg">
          {/* Three columns separated by 1px bone/10 lines */}
          <div className="grid grid-cols-1 divide-y divide-bone/[0.08] md:grid-cols-3 md:divide-x md:divide-y-0">
            {differentiators.items.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.6,
                  delay: prefersReducedMotion ? 0 : index * 0.1,
                  ease: [0.19, 1, 0.22, 1] as [number, number, number, number],
                }}
                className="flex flex-col gap-5 px-6 py-12 md:px-10 lg:py-16 lg:px-12"
              >
                <span
                  className={cn(
                    "text-[10px] font-sans font-semibold tracking-[0.2em] uppercase",
                    index === 0
                      ? "text-gold"
                      : index === 1
                      ? "text-aegean-400"
                      : "text-olive-400"
                  )}
                >
                  {item.label}
                </span>
                <h3 className="font-heading text-2xl font-light text-bone leading-snug tracking-tight md:text-3xl">
                  {item.title}
                </h3>
                <p className="text-sm font-sans text-bone/50 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
