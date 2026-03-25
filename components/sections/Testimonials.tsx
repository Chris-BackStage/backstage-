"use client"

import { motion, useReducedMotion } from "framer-motion"
import { SectionContainer } from "@/components/common/SectionContainer"
import { TestimonialCard } from "@/components/common/TestimonialCard"
import { Badge } from "@/components/ui/badge"
import { COPY } from "@/content/copy"

export function Testimonials() {
  const prefersReducedMotion = useReducedMotion()
  const { testimonials } = COPY.home

  return (
    <SectionContainer id="testimonials">
      <div className="mb-16 text-center">
        <Badge variant="gold" className="mb-4">
          {testimonials.label}
        </Badge>
        <h2 className="font-heading text-4xl font-semibold text-charcoal tracking-tight text-balance md:text-5xl">
          {testimonials.headline}
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {testimonials.items.map((t, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: prefersReducedMotion ? 0 : index * 0.1,
            }}
            className="h-full"
          >
            <TestimonialCard
              quote={t.quote}
              author={t.author}
              role={t.role}
              company={t.company}
              avatar={t.avatar}
              className="h-full"
            />
          </motion.div>
        ))}
      </div>
    </SectionContainer>
  )
}
