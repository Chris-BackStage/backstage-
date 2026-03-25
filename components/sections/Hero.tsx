"use client"

import { motion, useReducedMotion } from "framer-motion"
import Link from "next/link"
import { ArrowDown, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { COPY } from "@/content/copy"
import { cn } from "@/lib/utils"

export function Hero() {
  const prefersReducedMotion = useReducedMotion()

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.12,
        delayChildren: prefersReducedMotion ? 0 : 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.19, 1, 0.22, 1] as [number, number, number, number] },
    },
  }

  const { hero } = COPY.home

  return (
    <section
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-bone pt-20"
      aria-labelledby="hero-heading"
    >
      {/* Marble backdrop */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-bone-200 via-bone-100 to-bone-300 opacity-60" />
        {/* Gold vein lines */}
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.06]"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern
              id="marble-grid"
              width="80"
              height="80"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 80 0 L 0 80"
                stroke="#C2A660"
                strokeWidth="0.5"
                fill="none"
              />
              <path
                d="M 0 0 L 80 80"
                stroke="#C2A660"
                strokeWidth="0.3"
                fill="none"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#marble-grid)" />
        </svg>
        {/* Aegean orb */}
        <div className="absolute -right-40 top-1/4 h-[600px] w-[600px] rounded-full bg-aegean/5 blur-3xl" />
        <div className="absolute -left-20 bottom-1/4 h-[400px] w-[400px] rounded-full bg-olive/5 blur-3xl" />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 mx-auto max-w-4xl px-6 text-center md:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <Badge variant="gold" className="mb-6 text-xs">
            <Zap className="h-3 w-3" aria-hidden="true" />
            AI-powered operations
          </Badge>
        </motion.div>

        <motion.h1
          id="hero-heading"
          variants={itemVariants}
          className={cn(
            "font-heading text-5xl font-semibold leading-[1.08] tracking-tight text-charcoal text-balance",
            "sm:text-6xl md:text-7xl lg:text-[5.5rem]"
          )}
        >
          Automation working{" "}
          <span className="relative">
            <span className="text-gold">quietly</span>
          </span>{" "}
          backstage.
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mx-auto mt-6 max-w-2xl text-lg font-sans text-charcoal/60 leading-relaxed text-balance md:text-xl"
        >
          {hero.subheadline}
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <Button asChild variant="primary" size="xl">
            <Link href={hero.primaryCta.href}>{hero.primaryCta.label}</Link>
          </Button>
          <Button asChild variant="outline" size="xl">
            <Link href={hero.secondaryCta.href}>{hero.secondaryCta.label}</Link>
          </Button>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="mt-8 text-xs font-semibold tracking-widest uppercase text-charcoal/40 font-sans"
        >
          {hero.trustLine}
        </motion.p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: prefersReducedMotion ? 0 : 1.2, duration: 0.5 }}
        aria-hidden="true"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] font-semibold tracking-widest uppercase text-charcoal/40 font-sans">
            Scroll
          </span>
          <motion.div
            animate={prefersReducedMotion ? {} : { y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          >
            <ArrowDown className="h-4 w-4 text-charcoal/40" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
