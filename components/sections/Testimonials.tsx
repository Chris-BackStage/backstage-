"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Quote } from "lucide-react"
import { SectionContainer } from "@/components/common/SectionContainer"
import { COPY } from "@/content/copy"
import { cn } from "@/lib/utils"

export function Testimonials() {
  const prefersReducedMotion = useReducedMotion()
  const { testimonials } = COPY.home

  // Show max 2 on homepage in large editorial format
  const featured = testimonials.items.slice(0, 2)

  return (
    <SectionContainer id="testimonials" className="bg-bone-100">
      {/* Section header */}
      <div className="mb-14 flex flex-col gap-3">
        <span className="text-[10px] font-sans font-semibold tracking-[0.2em] uppercase text-gold">
          {testimonials.label}
        </span>
        <h2 className="font-heading text-3xl font-semibold text-charcoal tracking-tight text-balance md:text-4xl lg:text-5xl">
          {testimonials.headline}
        </h2>
      </div>

      {/* Large editorial testimonials */}
      <div className="grid grid-cols-1 gap-px bg-bone-400 md:grid-cols-2">
        {featured.map((t, index) => (
          <motion.blockquote
            key={index}
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.6,
              delay: prefersReducedMotion ? 0 : index * 0.12,
              ease: [0.19, 1, 0.22, 1] as [number, number, number, number],
            }}
            className={cn(
              "flex flex-col gap-8 bg-white p-10 lg:p-14",
              index === 0 ? "" : "md:border-l border-bone-400"
            )}
          >
            {/* Quote mark */}
            <Quote
              className="h-8 w-8 text-gold/40 flex-shrink-0"
              aria-hidden="true"
            />

            {/* Quote text */}
            <p className="font-heading text-xl font-light text-charcoal leading-relaxed tracking-tight text-balance flex-1 md:text-2xl">
              &ldquo;{t.quote}&rdquo;
            </p>

            {/* Attribution */}
            <footer className="flex items-center gap-4 border-t border-bone-300 pt-6">
              {/* Avatar placeholder */}
              <div
                className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-bone-300 text-xs font-sans font-bold text-charcoal/40"
                aria-hidden="true"
              >
                {t.author.startsWith("[[") ? "?" : t.author.charAt(0)}
              </div>
              <div>
                <cite className="not-italic font-sans text-sm font-semibold text-charcoal">
                  {t.author}
                </cite>
                <p className="text-xs font-sans text-charcoal/50 mt-0.5">
                  {t.role}
                  {t.company && !t.company.startsWith("[[") && (
                    <> · {t.company}</>
                  )}
                </p>
              </div>
            </footer>
          </motion.blockquote>
        ))}
      </div>
    </SectionContainer>
  )
}
