"use client"

import { motion, useReducedMotion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { COPY } from "@/content/copy"

export function CTABanner() {
  const prefersReducedMotion = useReducedMotion()
  const { finalCta } = COPY.home

  return (
    <section
      className="relative overflow-hidden bg-charcoal py-24 md:py-32"
      aria-labelledby="cta-heading"
    >
      {/* Background texture and orbs */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal to-[#1a2028]" />
        {/* Diagonal stripe texture */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(18deg, transparent, transparent 40px, #C2A660 40px, #C2A660 41px)",
          }}
        />
        {/* Colour orbs */}
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-aegean/20 blur-3xl" />
        <div className="absolute -left-40 -bottom-40 h-[500px] w-[500px] rounded-full bg-olive/15 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center md:px-8">
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            ease: [0.19, 1, 0.22, 1] as [number, number, number, number],
          }}
        >
          <p className="mb-4 text-xs font-semibold tracking-widest uppercase text-gold font-sans">
            Ready to start
          </p>

          <h2
            id="cta-heading"
            className="font-heading text-4xl font-semibold text-bone tracking-tight text-balance mb-6 md:text-5xl lg:text-6xl"
          >
            {finalCta.headline}
          </h2>

          <p className="text-base font-sans text-bone/70 leading-relaxed mb-10 max-w-lg mx-auto">
            {finalCta.description}
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button asChild variant="gold" size="xl" className="group">
              <Link href={finalCta.primaryCta.href}>
                {finalCta.primaryCta.label}
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </Button>
            <Button asChild variant="outline" size="xl">
              <Link href={finalCta.secondaryCta.href}>
                {finalCta.secondaryCta.label}
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
