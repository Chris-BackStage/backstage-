import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { SectionContainer } from "@/components/common/SectionContainer"
import { GradientBackdrop } from "@/components/common/GradientBackdrop"
import { CTABanner } from "@/components/sections/CTABanner"
import { COPY } from "@/content/copy"

type Props = { params: { slug: string } }

export function generateStaticParams() {
  return COPY.work.caseStudies.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const study = COPY.work.caseStudies.find((s) => s.slug === params.slug)
  if (!study) return { title: "Case Study Not Found" }
  return {
    title: study.title,
    description: study.summary,
    alternates: { canonical: `/work/${study.slug}` },
    openGraph: {
      title: `${study.title} | Backstage`,
      description: study.summary,
      url: `/work/${study.slug}`,
    },
  }
}

export default function CaseStudyPage({ params }: Props) {
  const study = COPY.work.caseStudies.find((s) => s.slug === params.slug)
  if (!study) notFound()

  return (
    <>
      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: process.env.NEXT_PUBLIC_SITE_URL,
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Our Work",
                item: `${process.env.NEXT_PUBLIC_SITE_URL}/work`,
              },
              {
                "@type": "ListItem",
                position: 3,
                name: study.title,
                item: `${process.env.NEXT_PUBLIC_SITE_URL}/work/${study.slug}`,
              },
            ],
          }),
        }}
      />

      {/* Hero */}
      <GradientBackdrop variant="subtle" as="section">
        <SectionContainer className="pt-32 pb-16">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm font-sans text-charcoal-300">
              <li>
                <Link
                  href="/"
                  className="hover:text-charcoal transition-colors"
                >
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link
                  href="/work"
                  className="hover:text-charcoal transition-colors"
                >
                  Our Work
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-charcoal">{study.category}</li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <Badge variant="gold">{study.category}</Badge>
              <span className="text-xs font-sans text-charcoal-300">
                {study.client}
              </span>
            </div>
            <h1 className="font-heading text-display-lg font-semibold text-charcoal tracking-tight mb-6">
              {study.title}
            </h1>
            <p className="text-xl font-sans text-charcoal-500 leading-relaxed">
              {study.summary}
            </p>
          </div>
        </SectionContainer>
      </GradientBackdrop>

      {/* Case study body */}
      <SectionContainer narrow className="py-16">
        {/* Problem */}
        <div className="mb-12">
          <h2 className="font-heading text-2xl font-semibold text-charcoal mb-4">
            The Problem
          </h2>
          <p className="text-base font-sans text-charcoal-500 leading-relaxed">
            {study.problem}
          </p>
        </div>

        <div className="h-px bg-bone-400 mb-12" />

        {/* Constraints */}
        <div className="mb-12">
          <h2 className="font-heading text-2xl font-semibold text-charcoal mb-4">
            Constraints
          </h2>
          <p className="text-base font-sans text-charcoal-500 leading-relaxed">
            {study.constraints}
          </p>
        </div>

        <div className="h-px bg-bone-400 mb-12" />

        {/* Workflow */}
        <div className="mb-12">
          <h2 className="font-heading text-2xl font-semibold text-charcoal mb-4">
            The Workflow
          </h2>
          <p className="text-base font-sans text-charcoal-500 leading-relaxed">
            {study.workflow}
          </p>
        </div>

        <div className="h-px bg-bone-400 mb-12" />

        {/* Tools */}
        <div className="mb-12">
          <h2 className="font-heading text-2xl font-semibold text-charcoal mb-5">
            Tools Used
          </h2>
          <div className="flex flex-wrap gap-2">
            {study.tools.map((tool) => (
              <span
                key={tool}
                className="inline-flex items-center rounded-full border border-bone-400 bg-white px-4 py-2 text-sm font-medium font-sans text-charcoal shadow-elevation-1"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        <div className="h-px bg-bone-400 mb-12" />

        {/* Results */}
        <div className="mb-12">
          <h2 className="font-heading text-2xl font-semibold text-charcoal mb-6">
            Results
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {study.outcome.metrics.map((metric, i) => (
              <div
                key={i}
                className="rounded-xl bg-white border border-bone-400 p-5 text-center shadow-elevation-1"
              >
                <p className="text-xs font-semibold tracking-widest uppercase text-charcoal-300 font-sans mb-2">
                  {metric.label}
                </p>
                {"value" in metric ? (
                  <p className="font-heading text-2xl font-bold text-charcoal">
                    {metric.value}
                  </p>
                ) : (
                  <div className="space-y-1">
                    <p className="text-xs text-charcoal-300 font-sans">
                      Before:{" "}
                      <span className="text-charcoal-500">{metric.before}</span>
                    </p>
                    <p className="text-sm font-bold text-olive font-sans">
                      After: {metric.after}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Quote */}
          <blockquote className="rounded-2xl bg-aegean p-8 text-bone">
            <p className="text-lg font-sans leading-relaxed mb-4 text-bone/90 italic">
              &ldquo;{study.outcome.quote.text}&rdquo;
            </p>
            <footer>
              <p className="text-sm font-semibold font-sans text-bone">
                {study.outcome.quote.author}
              </p>
              <p className="text-xs font-sans text-bone/60">
                {study.outcome.quote.role}
              </p>
            </footer>
          </blockquote>
        </div>
      </SectionContainer>

      {/* Back link */}
      <SectionContainer narrow className="pb-8 text-center">
        <Button asChild variant="outline" size="sm">
          <Link href="/work">← Back to Our Work</Link>
        </Button>
      </SectionContainer>

      <CTABanner />
    </>
  )
}
