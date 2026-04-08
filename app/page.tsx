import type { Metadata } from "next"
import { Hero } from "@/components/sections/Hero"
import { Pillars } from "@/components/sections/Pillars"
import { HowItWorks } from "@/components/sections/HowItWorks"
import { FeaturesGrid } from "@/components/sections/FeaturesGrid"
import { CTABanner } from "@/components/sections/CTABanner"

export const metadata: Metadata = {
  title: "Backstage — The Team Behind the Brands You Can't Ignore",
  description:
    "Backstage is a premium creative digital studio. We design and build websites, media systems, brand identities, and creative strategies for brands that refuse to blend in.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Backstage — Creative Digital Studio",
    description:
      "Websites, media marketing, digital branding, and creative strategy — built end-to-end by Backstage.",
    url: "/",
    type: "website",
  },
}

export default function HomePage() {
  return (
    <>
      {/* Dark hero with marquee ticker */}
      <Hero />
      {/* 4-service bento grid (dark) */}
      <Pillars />
      {/* 3-step process (light) */}
      <HowItWorks />
      {/* Why Backstage — 3-column dark differentiators */}
      <FeaturesGrid />
      {/* Final CTA (dark) */}
      <CTABanner />
    </>
  )
}
