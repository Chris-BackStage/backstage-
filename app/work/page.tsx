import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { SectionContainer } from "@/components/common/SectionContainer"
import { GradientBackdrop } from "@/components/common/GradientBackdrop"
import { CaseStudyCard } from "@/components/common/CaseStudyCard"
import { CTABanner } from "@/components/sections/CTABanner"
import { COPY } from "@/content/copy"

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Case studies, portfolio projects, and results from Backstage automation engagements.",
  alternates: { canonical: "/work" },
  openGraph: {
    title: "Our Work | Backstage",
    description: "Real systems, real results.",
    url: "/work",
  },
}

export default function WorkPage() {
  const { work } = COPY

  return (
    <>
      {/* Hero */}
      <GradientBackdrop variant="marble" as="section">
        <SectionContainer className="pt-32 pb-20">
          <div className="max-w-2xl">
            <Badge variant="gold" className="mb-4">
              Portfolio
            </Badge>
            <h1 className="font-heading text-display-xl font-semibold text-charcoal tracking-tight mb-6">
              {work.headline}
            </h1>
            <p className="text-lg font-sans text-charcoal-500 leading-relaxed">
              {work.description}
            </p>
          </div>
        </SectionContainer>
      </GradientBackdrop>

      {/* Case study grid */}
      <SectionContainer className="py-20">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 max-w-[56rem] mx-auto">
          {work.caseStudies.map((study) => (
            <CaseStudyCard
              key={study.slug}
              slug={study.slug}
              title={study.title}
              category={study.category}
              client={study.client}
              summary={study.summary}
              image={study.image}
            />
          ))}
        </div>
      </SectionContainer>

      <CTABanner />
    </>
  )
}
