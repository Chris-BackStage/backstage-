import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import * as Icons from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { SectionContainer } from "@/components/common/SectionContainer"
import { GradientBackdrop } from "@/components/common/GradientBackdrop"
import { FeatureList } from "@/components/common/FeatureList"
import { CTABanner } from "@/components/sections/CTABanner"
import { COPY } from "@/content/copy"
import { cn } from "@/lib/utils"

type Props = { params: { slug: string } }

export function generateStaticParams() {
  return COPY.services.items.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = COPY.services.items.find((s) => s.slug === params.slug)
  if (!service) return { title: "Service Not Found" }
  return {
    title: service.title,
    description: service.tagline,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.title} | Backstage`,
      description: service.tagline,
      url: `/services/${service.slug}`,
    },
  }
}

const colorStyles: Record<
  string,
  { badge: "aegean" | "olive" | "gold" | "bone"; gradient: string; icon: string }
> = {
  aegean: {
    badge: "aegean",
    gradient: "from-aegean-50 to-bone-200",
    icon: "text-aegean",
  },
  olive: {
    badge: "olive",
    gradient: "from-olive-50 to-bone-200",
    icon: "text-olive",
  },
  gold: {
    badge: "gold",
    gradient: "from-gold-50 to-bone-200",
    icon: "text-gold-500",
  },
}

export default function ServiceDetailPage({ params }: Props) {
  const service = COPY.services.items.find((s) => s.slug === params.slug)
  if (!service) notFound()

  const IconComponent =
    (Icons as Record<string, React.ElementType>)[service.icon] ?? Icons.Zap
  const styles = colorStyles[service.color] ?? colorStyles.aegean

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
                name: "Services",
                item: `${process.env.NEXT_PUBLIC_SITE_URL}/services`,
              },
              {
                "@type": "ListItem",
                position: 3,
                name: service.title,
                item: `${process.env.NEXT_PUBLIC_SITE_URL}/services/${service.slug}`,
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
                  href="/services"
                  className="hover:text-charcoal transition-colors"
                >
                  Services
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-charcoal">{service.shortTitle}</li>
            </ol>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-start lg:gap-16">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={cn(
                    "flex h-14 w-14 items-center justify-center rounded-2xl border bg-gradient-to-br",
                    styles.gradient
                  )}
                >
                  <IconComponent
                    className={cn("h-7 w-7", styles.icon)}
                    aria-hidden="true"
                  />
                </div>
                <Badge variant={styles.badge}>{service.shortTitle}</Badge>
              </div>

              <h1 className="font-heading text-display-lg font-semibold text-charcoal tracking-tight mb-4">
                {service.title}
              </h1>

              <p className="text-xl font-sans text-gold font-medium mb-6">
                {service.tagline}
              </p>

              <p className="text-base font-sans text-charcoal-500 leading-relaxed max-w-2xl">
                {service.description}
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Button asChild variant="primary" size="lg">
                  <Link href="/contact">Contact Sales</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/contact#quote">Get a Quote</Link>
                </Button>
              </div>
            </div>
          </div>
        </SectionContainer>
      </GradientBackdrop>

      {/* Outcomes + What you get */}
      <SectionContainer className="py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Outcomes */}
          <div>
            <h2 className="font-heading text-2xl font-semibold text-charcoal mb-6">
              What you can expect
            </h2>
            <FeatureList items={service.outcomes} iconColor="olive" />
          </div>

          {/* What you get */}
          <div>
            <h2 className="font-heading text-2xl font-semibold text-charcoal mb-6">
              What you get
            </h2>
            <FeatureList items={service.whatYouGet} iconColor="aegean" />
          </div>
        </div>

        {/* Integrations */}
        <div className="mt-16 rounded-2xl bg-bone-100 border border-bone-400 p-8">
          <h2 className="font-heading text-xl font-semibold text-charcoal mb-5">
            Integrations
          </h2>
          <div className="flex flex-wrap gap-2">
            {service.integrations.map((name) => (
              <span
                key={name}
                className="inline-flex items-center rounded-full border border-bone-400 bg-white px-4 py-1.5 text-sm font-medium font-sans text-charcoal shadow-elevation-1"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </SectionContainer>

      <CTABanner />
    </>
  )
}
