import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { SectionContainer } from "@/components/common/SectionContainer"
import { GradientBackdrop } from "@/components/common/GradientBackdrop"
import { CalendlyEmbed } from "@/components/common/CalendlyEmbed"
import { ContactForm } from "./ContactForm"
import { COPY } from "@/content/copy"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the Backstage team. Tell us about your business and we'll come prepared with ideas.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact | Backstage",
    description: "Let's design your backstage. Book a discovery call.",
    url: "/contact",
  },
}

export default function ContactPage() {
  const { contact } = COPY

  return (
    <>
      {/* Hero + Form */}
      <GradientBackdrop variant="marble" as="section">
        <SectionContainer className="pt-32 pb-20">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            {/* Left: copy */}
            <div>
              <Badge variant="gold" className="mb-4">
                Get in touch
              </Badge>
              <h1
                id="contact-heading"
                className="font-heading text-display-lg font-semibold text-charcoal tracking-tight mb-6"
              >
                {contact.headline}
              </h1>
              <p className="text-lg font-sans text-charcoal-500 leading-relaxed mb-8">
                {contact.subheadline}
              </p>
              <a
                href={`mailto:${contact.info.email}`}
                className="text-aegean font-sans font-medium hover:underline text-sm"
              >
                {contact.info.email}
              </a>

              {/* Trust indicators */}
              <div className="mt-10 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 h-5 w-5 flex-shrink-0 rounded-full bg-olive/10 border border-olive/20 flex items-center justify-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-olive" />
                  </div>
                  <p className="text-sm font-sans text-charcoal-400 leading-relaxed">
                    We respond within one business day — often the same afternoon.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 h-5 w-5 flex-shrink-0 rounded-full bg-olive/10 border border-olive/20 flex items-center justify-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-olive" />
                  </div>
                  <p className="text-sm font-sans text-charcoal-400 leading-relaxed">
                    No sales scripts. We listen first, then propose a path forward
                    that actually fits.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 h-5 w-5 flex-shrink-0 rounded-full bg-olive/10 border border-olive/20 flex items-center justify-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-olive" />
                  </div>
                  <p className="text-sm font-sans text-charcoal-400 leading-relaxed">
                    Your information is never shared or sold. We take data
                    privacy seriously.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: form */}
            <div id="quote">
              <ContactForm />
            </div>
          </div>
        </SectionContainer>
      </GradientBackdrop>

      {/* Scheduling */}
      <SectionContainer id="schedule" narrow className="py-20">
        <div className="text-center mb-10">
          <Badge variant="aegean" className="mb-4">
            Schedule
          </Badge>
          <h2 className="font-heading text-display-sm font-semibold text-charcoal tracking-tight mb-3">
            {contact.info.schedulingLabel}
          </h2>
          <p className="text-sm font-sans text-charcoal-400">
            Book a 30-minute discovery call. Come as you are.
          </p>
        </div>
        <CalendlyEmbed height={600} />
      </SectionContainer>
    </>
  )
}
