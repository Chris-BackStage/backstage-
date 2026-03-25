"use client"

import { motion, useReducedMotion } from "framer-motion"
import Link from "next/link"
import { SectionContainer } from "@/components/common/SectionContainer"
import { FAQAccordion } from "@/components/common/FAQAccordion"
import { Badge } from "@/components/ui/badge"
import { COPY } from "@/content/copy"

export function HomeFAQ() {
  const prefersReducedMotion = useReducedMotion()
  const { faq } = COPY.home

  return (
    <SectionContainer id="faq" narrow>
      <div className="mb-12 text-center">
        <Badge variant="bone" className="mb-4">
          {faq.label}
        </Badge>
        <h2 className="font-heading text-4xl font-semibold text-charcoal tracking-tight md:text-5xl">
          {faq.headline}
        </h2>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <FAQAccordion items={[...COPY.home.faq.items]} />
      </motion.div>

      {/* More questions prompt */}
      <p className="mt-10 text-center text-sm font-sans text-charcoal/50">
        Still have questions?{" "}
        <Link
          href="/contact"
          className="font-semibold text-aegean underline-offset-4 hover:underline transition-colors"
        >
          Contact our team
        </Link>
      </p>

      {/* JSON-LD FAQ structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faq.items.map(
              (item: { question: string; answer: string }) => ({
                "@type": "Question",
                name: item.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: item.answer,
                },
              })
            ),
          }),
        }}
      />
    </SectionContainer>
  )
}
