"use client"

import { motion, useReducedMotion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MarqueeTicker } from "@/components/sections/MarqueeTicker"
import { COPY } from "@/content/copy"
import { cn } from "@/lib/utils"

export function Hero() {
  const prefersReducedMotion = useReducedMotion()

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.1,
        delayChildren: prefersReducedMotion ? 0 : 0.05,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        ease: [0.19, 1, 0.22, 1] as [number, number, number, number],
      },
    },
  }

  const { hero } = COPY.home

  return (
    <section
      className="relative flex min-h-screen flex-col overflow-hidden bg-charcoal"
      aria-labelledby="hero-heading"
    >
      {/* ── Background ── */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {/* Noise grain */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />
        {/* Gold ambient glow — upper right */}
        <div className="absolute -right-32 top-0 h-[700px] w-[700px] rounded-full bg-gold/[0.07] blur-[120px]" />
        {/* Subtle aegean glow — lower left */}
        <div className="absolute -left-32 bottom-24 h-[500px] w-[500px] rounded-full bg-aegean/[0.06] blur-[100px]" />
        {/* Faint grid — very subtle */}
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.025]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="grid" width="64" height="64" patternUnits="userSpaceOnUse">
              <path d="M 64 0 L 0 0 0 64" fill="none" stroke="#F6F4EF" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pt-28 pb-20 md:px-8 md:pt-36 md:pb-24">
        <motion.div
          className="mx-auto max-w-5xl text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Eyebrow */}
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2.5 text-[10px] font-sans font-semibold tracking-[0.25em] uppercase text-gold">
              <span
                className="inline-block h-px w-8 bg-gold/60"
                aria-hidden="true"
              />
              {hero.eyebrow}
              <span
                className="inline-block h-px w-8 bg-gold/60"
                aria-hidden="true"
              />
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            id="hero-heading"
            variants={itemVariants}
            className={cn(
              "font-heading font-light text-bone tracking-tight text-balance mt-8",
              "text-[2.75rem] leading-[1.05]",
              "sm:text-6xl",
              "md:text-7xl",
              "lg:text-[5.5rem] lg:leading-[1.03]"
            )}
          >
            The team behind the{" "}
            <br className="hidden sm:block" />
            brands you{" "}
            <span className="text-gradient-gold italic">can&rsquo;t ignore.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="mx-auto mt-7 max-w-2xl text-base font-sans font-light text-bone/55 leading-relaxed text-balance md:text-lg"
          >
            {hero.subheadline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <Button asChild variant="gold" size="xl" className="group font-sans">
              <Link href={hero.primaryCta.href}>
                {hero.primaryCta.label}
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </Button>
            <Button asChild variant="outline-white" size="xl" className="font-sans">
              <Link href={hero.secondaryCta.href}>
                {hero.secondaryCta.label}
              </Link>
            </Button>
          </motion.div>

          {/* Micro trust line */}
          <motion.p
            variants={itemVariants}
            className="mt-8 text-[10px] font-sans font-semibold tracking-[0.2em] uppercase text-bone/20"
          >
            Websites · Media · Branding · Strategy
          </motion.p>
        </motion.div>
      </div>

      {/* ── Marquee — anchored at bottom of hero ── */}
      <MarqueeTicker variant="dark" className="mt-auto" />
    </section>
  )
}
