import type { Metadata } from "next"
import Link from "next/link"
import * as Icons from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { SectionContainer } from "@/components/common/SectionContainer"
import { GradientBackdrop } from "@/components/common/GradientBackdrop"
import { CTABanner } from "@/components/sections/CTABanner"
import { COPY } from "@/content/copy"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "We pair human taste with autonomous systems. The result: dependable operations that feel effortless.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Us | Backstage",
    description: "Craft meets clarity. The story behind Backstage.",
    url: "/about",
  },
}

export default function AboutPage() {
  const { about } = COPY

  return (
    <>
      {/* Hero */}
      <GradientBackdrop variant="marble" as="section">
        <SectionContainer className="pt-32 pb-20">
          <div className="max-w-3xl">
            <Badge variant="gold" className="mb-4">
              Our story
            </Badge>
            <h1 className="font-heading text-display-xl font-semibold text-charcoal tracking-tight mb-6">
              {about.headline}
            </h1>
            <p className="text-xl font-sans text-charcoal-500 leading-relaxed mb-6 font-medium italic">
              &ldquo;{about.subheadline}&rdquo;
            </p>
            <p className="text-base font-sans text-charcoal-500 leading-relaxed max-w-2xl">
              {about.mission}
            </p>
          </div>
        </SectionContainer>
      </GradientBackdrop>

      {/* Approach */}
      <SectionContainer id="approach" className="py-20">
        <div className="mb-14 max-w-2xl">
          <Badge variant="aegean" className="mb-4">
            Approach
          </Badge>
          <h2 className="font-heading text-display-md font-semibold text-charcoal tracking-tight mb-4">
            {about.approach.headline}
          </h2>
          <p className="text-base font-sans text-charcoal-500 leading-relaxed">
            {about.approach.description}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {about.approach.principles.map((principle, index) => (
            <article
              key={index}
              className="rounded-2xl border border-bone-400 bg-white p-8 shadow-elevation-1"
            >
              <div className="mb-4 h-8 w-8 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center">
                <span className="text-sm font-bold text-gold font-heading">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="font-heading text-lg font-semibold text-charcoal mb-3">
                {principle.title}
              </h3>
              <p className="text-sm font-sans text-charcoal-400 leading-relaxed">
                {principle.description}
              </p>
            </article>
          ))}
        </div>
      </SectionContainer>

      {/* Values */}
      <GradientBackdrop variant="subtle" as="section">
        <SectionContainer id="values" className="py-20">
          <div className="mb-14 text-center">
            <Badge variant="olive" className="mb-4">
              Values
            </Badge>
            <h2 className="font-heading text-display-md font-semibold text-charcoal tracking-tight">
              What we stand for.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {about.values.map((value) => {
              const IconComponent =
                (Icons as Record<string, React.ElementType>)[value.icon] ??
                Icons.Star
              return (
                <div
                  key={value.title}
                  className="flex flex-col items-start gap-4 rounded-2xl border border-bone-400 bg-white p-7 shadow-elevation-1"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-olive/10 border border-olive/20">
                    <IconComponent
                      className="h-5 w-5 text-olive"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-charcoal mb-2">
                      {value.title}
                    </h3>
                    <p className="text-sm font-sans text-charcoal-400 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </SectionContainer>
      </GradientBackdrop>

      {/* Link to creators */}
      <SectionContainer narrow className="py-16 text-center">
        <p className="text-base font-sans text-charcoal-400 mb-4">
          Curious who&apos;s behind Backstage?
        </p>
        <Button asChild variant="outline" size="lg">
          <Link href="/creators">Meet the creators →</Link>
        </Button>
      </SectionContainer>

      <CTABanner />
    </>
  )
}
