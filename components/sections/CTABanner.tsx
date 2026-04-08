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
      className="relative overflow-hidden bg-charcoal py-24 md:py-36"
      aria-labelledby="cta-heading"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {/* Noise grain */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />
        {/* Gold glow — centered */}
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/[0.07] blur-[100px]" />
        {/* Diagonal line texture */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(18deg, transparent, transparent 60px, #C2A660 60px, #C2A660 61px)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center md:px-8">
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            ease: [0.19, 1, 0.22, 1] as [number, number, number, number],
          }}
        >
          <span className="text-[10px] font-sans font-semibold tracking-[0.2em] uppercase text-gold">
            Ready to start
          </span>

          <h2
            id="cta-heading"
            className="mt-5 font-heading text-4xl font-light text-bone tracking-tight text-balance md:text-5xl lg:text-6xl"
          >
            {finalCta.headline}
          </h2>

          <p className="mx-auto mt-6 max-w-lg text-base font-sans font-light text-bone/55 leading-relaxed">
            {finalCta.description}
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button asChild variant="gold" size="xl" className="group font-sans">
              <Link href={finalCta.primaryCta.href}>
                {finalCta.primaryCta.label}
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </Button>
            <Button asChild variant="outline-white" size="xl" className="font-sans">
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
