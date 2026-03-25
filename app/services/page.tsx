import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import * as Icons from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { SectionContainer } from "@/components/common/SectionContainer"
import { GradientBackdrop } from "@/components/common/GradientBackdrop"
import { CTABanner } from "@/components/sections/CTABanner"
import { COPY } from "@/content/copy"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Services",
  description: "AI-powered automation services: websites, media, lead gen, email, and custom workflows.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services | Backstage",
    description: "Five tracks of automation built around your outcomes.",
    url: "/services",
  },
}

const colorStyles: Record<
  string,
  { badge: "aegean" | "olive" | "gold" | "bone"; bg: string; icon: string }
> = {
  aegean: {
    badge: "aegean",
    bg: "bg-aegean/10 border-aegean/20",
    icon: "text-aegean",
  },
  olive: {
    badge: "olive",
    bg: "bg-olive/10 border-olive/20",
    icon: "text-olive",
  },
  gold: {
    badge: "gold",
    bg: "bg-gold/10 border-gold/20",
    icon: "text-gold-500",
  },
}

export default function ServicesPage() {
  const { services } = COPY

  return (
    <>
      {/* Page hero */}
      <GradientBackdrop variant="marble" as="section">
        <SectionContainer className="pt-32 pb-20">
          <div className="max-w-2xl">
            <Badge variant="bone" className="mb-4">
              What we build
            </Badge>
            <h1 className="font-heading text-display-xl font-semibold text-charcoal tracking-tight mb-6">
              {services.headline}
            </h1>
            <p className="text-lg font-sans text-charcoal-500 leading-relaxed mb-8">
              {services.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild variant="primary" size="lg">
                <Link href="/contact">Contact Sales</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact#quote">Get a Quote</Link>
              </Button>
            </div>
          </div>
        </SectionContainer>
      </GradientBackdrop>

      {/* Service grid */}
      <SectionContainer className="py-20">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.items.map((service) => {
            const IconComponent =
              (Icons as Record<string, React.ElementType>)[service.icon] ??
              Icons.Zap
            const styles = colorStyles[service.color] ?? colorStyles.aegean

            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group flex flex-col rounded-2xl border border-bone-400 bg-white p-8 shadow-elevation-1 hover:shadow-elevation-3 hover:-translate-y-1 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aegean"
              >
                <div
                  className={cn(
                    "inline-flex h-12 w-12 items-center justify-center rounded-xl border mb-5",
                    styles.bg
                  )}
                >
                  <IconComponent
                    className={cn("h-6 w-6", styles.icon)}
                    aria-hidden="true"
                  />
                </div>

                <Badge
                  variant={styles.badge}
                  className="mb-3 self-start text-xs"
                >
                  {service.shortTitle}
                </Badge>

                <h2 className="font-heading text-xl font-semibold text-charcoal mb-2 group-hover:text-aegean transition-colors duration-200">
                  {service.title}
                </h2>

                <p className="text-sm font-sans text-charcoal-400 leading-relaxed mb-5 flex-1">
                  {service.tagline}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.outcomes.slice(0, 2).map((o) => (
                    <li
                      key={o}
                      className="flex items-center gap-2 text-xs font-sans text-charcoal-500"
                    >
                      <span
                        className="h-1 w-1 rounded-full bg-gold flex-shrink-0"
                        aria-hidden="true"
                      />
                      {o}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-1.5 text-sm font-semibold text-aegean font-sans mt-auto">
                  Learn more
                  <ArrowUpRight
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </div>
              </Link>
            )
          })}
        </div>
      </SectionContainer>

      <CTABanner />
    </>
  )
}
