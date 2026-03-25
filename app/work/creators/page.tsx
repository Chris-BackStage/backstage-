import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { SectionContainer } from "@/components/common/SectionContainer"
import { GradientBackdrop } from "@/components/common/GradientBackdrop"
import { BioCard } from "@/components/common/BioCard"
import { CTABanner } from "@/components/sections/CTABanner"
import { COPY } from "@/content/copy"

export const metadata: Metadata = {
  title: "The Creators",
  description:
    "Meet the people who built Backstage — operators turned automation architects.",
  alternates: { canonical: "/creators" },
  openGraph: {
    title: "The Creators | Backstage",
    description: "The founders and team behind Backstage.",
    url: "/creators",
  },
}

export default function CreatorsPage() {
  const { creators } = COPY

  return (
    <>
      {/* Hero */}
      <GradientBackdrop variant="marble" as="section">
        <SectionContainer className="pt-32 pb-20">
          <div className="max-w-2xl">
            <Badge variant="gold" className="mb-4">
              The team
            </Badge>
            <h1 className="font-heading text-display-xl font-semibold text-charcoal tracking-tight mb-6">
              {creators.headline}
            </h1>
            <p className="text-lg font-sans text-charcoal-500 leading-relaxed">
              {creators.subheadline}
            </p>
          </div>
        </SectionContainer>
      </GradientBackdrop>

      {/* Founders */}
      <SectionContainer id="founders" className="py-20">
        <div className="mb-12">
          <Badge variant="aegean" className="mb-4">
            Founders
          </Badge>
          <h2 className="font-heading text-display-md font-semibold text-charcoal tracking-tight">
            The people behind the systems.
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {creators.founders.map((founder) => (
            <BioCard
              key={founder.name}
              name={founder.name}
              role={founder.role}
              bio={founder.bio}
              tools={[...founder.tools]}
              favoriteAutomation={founder.favoriteAutomation}
              image={founder.image}
              linkedin={founder.linkedin}
              twitter={founder.twitter}
            />
          ))}
        </div>
      </SectionContainer>

      {/* Timeline */}
      <GradientBackdrop variant="subtle" as="section">
        <SectionContainer narrow id="timeline" className="py-20">
          <div className="mb-10">
            <Badge variant="bone" className="mb-4">
              Journey
            </Badge>
            <h2 className="font-heading text-display-md font-semibold text-charcoal tracking-tight">
              How we got here.
            </h2>
          </div>
          <ol className="relative border-l border-bone-400 space-y-8 pl-8">
            {creators.timeline.map((entry, index) => (
              <li key={index} className="relative">
                <span className="absolute -left-[29px] flex h-4 w-4 items-center justify-center rounded-full border-2 border-gold bg-bone">
                  <span
                    className="h-1.5 w-1.5 rounded-full bg-gold"
                    aria-hidden="true"
                  />
                </span>
                <time className="text-xs font-semibold tracking-widest uppercase text-charcoal-300 font-sans mb-1 block">
                  {entry.year}
                </time>
                <p className="text-base font-sans text-charcoal leading-relaxed">
                  {entry.milestone}
                </p>
              </li>
            ))}
          </ol>
        </SectionContainer>
      </GradientBackdrop>

      {/* Workbench */}
      <SectionContainer id="workbench" className="py-20">
        <div className="mb-12">
          <Badge variant="olive" className="mb-4">
            Workbench
          </Badge>
          <h2 className="font-heading text-display-md font-semibold text-charcoal tracking-tight mb-3">
            {creators.workbench.headline}
          </h2>
          <p className="max-w-xl text-base font-sans text-charcoal-500 leading-relaxed">
            {creators.workbench.description}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {creators.workbench.tools.map((tool) => (
            <div
              key={tool.name}
              className="rounded-xl border border-bone-400 bg-white p-5 shadow-elevation-1"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-sans font-semibold text-charcoal text-sm">
                  {tool.name}
                </h3>
                <span className="text-xs font-medium font-sans text-charcoal-300 bg-bone-200 px-2 py-0.5 rounded-full">
                  {tool.category}
                </span>
              </div>
              <p className="text-xs font-sans text-charcoal-400 leading-relaxed">
                {tool.description}
              </p>
            </div>
          ))}
        </div>
      </SectionContainer>

      <CTABanner />
    </>
  )
}
