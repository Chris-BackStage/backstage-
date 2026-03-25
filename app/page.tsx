import type { Metadata } from "next"
import { Hero } from "@/components/sections/Hero"
import { TrustBar } from "@/components/sections/TrustBar"
import { Pillars } from "@/components/sections/Pillars"
import { HowItWorks } from "@/components/sections/HowItWorks"
import { FeaturesGrid } from "@/components/sections/FeaturesGrid"
import { Integrations } from "@/components/sections/Integrations"
import { Testimonials } from "@/components/sections/Testimonials"
import { PricingPreview } from "@/components/sections/PricingPreview"
import { HomeFAQ } from "@/components/sections/HomeFAQ"
import { CTABanner } from "@/components/sections/CTABanner"

export const metadata: Metadata = {
  title: "Backstage — Automation Working Quietly Backstage",
  description:
    "Backstage designs, builds, and runs the workflows behind your business—from websites and media to lead finding, follow-ups, and everyday email.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Backstage — AI Automation for Ambitious Businesses",
    description:
      "Websites, media automation, lead gen, email workflows, and custom integrations—built end-to-end by Backstage.",
    url: "/",
    type: "website",
  },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Pillars />
      <HowItWorks />
      <FeaturesGrid />
      <Integrations />
      <Testimonials />
      <PricingPreview />
      <HomeFAQ />
      <CTABanner />
    </>
  )
}
