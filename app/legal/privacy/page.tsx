import type { Metadata } from "next"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { SectionContainer } from "@/components/common/SectionContainer"
import { GradientBackdrop } from "@/components/common/GradientBackdrop"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Backstage collects, uses, and protects your personal information.",
  alternates: { canonical: "/legal/privacy" },
  openGraph: {
    title: "Privacy Policy | Backstage",
    description: "How we handle your data — plainly explained.",
    url: "/legal/privacy",
  },
}

const LAST_UPDATED = "March 24, 2026"

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero */}
      <GradientBackdrop variant="subtle" as="section">
        <SectionContainer className="pt-32 pb-16">
          <div className="max-w-3xl">
            <Badge variant="bone" className="mb-4">
              Legal
            </Badge>
            <h1 className="font-heading text-display-lg font-semibold text-charcoal tracking-tight mb-4">
              Privacy Policy
            </h1>
            <p className="text-sm font-sans text-charcoal-300">
              Last updated: {LAST_UPDATED}
            </p>
          </div>
        </SectionContainer>
      </GradientBackdrop>

      {/* Body */}
      <SectionContainer narrow className="py-16">
        {/* Intro */}
        <div className="mb-10 rounded-xl border border-bone-400 bg-bone-100 px-6 py-5">
          <p className="text-sm font-sans text-charcoal-500 leading-relaxed">
            Backstage (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;)
            is committed to protecting your personal information and your right to
            privacy. This Privacy Policy explains what information we collect, why
            we collect it, and how we use, share, and protect it. Please read this
            policy carefully. If you disagree with its terms, please discontinue
            use of our website and services.
          </p>
        </div>

        <div className="prose-legal space-y-12">
          {/* Section 1 */}
          <section aria-labelledby="section-collect">
            <h2
              id="section-collect"
              className="font-heading text-xl font-semibold text-charcoal mb-4 pb-2 border-b border-bone-400"
            >
              1. Data We Collect
            </h2>
            <div className="space-y-4 text-sm font-sans text-charcoal-500 leading-relaxed">
              <p>
                We collect information you provide directly, information we gather
                automatically when you use our services, and — in limited cases —
                information from third-party sources.
              </p>
              <h3 className="font-sans font-semibold text-charcoal text-sm">
                Information you provide
              </h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-charcoal">Contact information:</strong>{" "}
                  Your name, email address, company name, and any details you
                  submit via our contact or quote request forms.
                </li>
                <li>
                  <strong className="text-charcoal">Project information:</strong>{" "}
                  Descriptions of your business needs, budget ranges, timelines,
                  and other details relevant to scoping a project with us.
                </li>
                <li>
                  <strong className="text-charcoal">Communications:</strong> Any
                  messages, emails, or other correspondence you send us.
                </li>
                <li>
                  <strong className="text-charcoal">Scheduling data:</strong> If
                  you book a call through our scheduling provider, they may
                  collect your name, email, timezone, and calendar availability.
                </li>
              </ul>
              <h3 className="font-sans font-semibold text-charcoal text-sm">
                Information collected automatically
              </h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-charcoal">Usage data:</strong> Pages
                  visited, time spent on pages, referral source, browser type,
                  operating system, and IP address (anonymised where legally
                  required).
                </li>
                <li>
                  <strong className="text-charcoal">Cookies and similar
                  technologies:</strong> We use first-party cookies for session
                  management and, with your consent, third-party cookies for
                  analytics. See Section 3 for more detail.
                </li>
                <li>
                  <strong className="text-charcoal">Log data:</strong> Server
                  logs that record requests made to our infrastructure, including
                  timestamps, URLs, response codes, and referring URLs.
                </li>
              </ul>
            </div>
          </section>

          {/* Section 2 */}
          <section aria-labelledby="section-use">
            <h2
              id="section-use"
              className="font-heading text-xl font-semibold text-charcoal mb-4 pb-2 border-b border-bone-400"
            >
              2. How We Use Your Information
            </h2>
            <div className="space-y-4 text-sm font-sans text-charcoal-500 leading-relaxed">
              <p>
                We use the information we collect for the following purposes, each
                grounded in a lawful basis under applicable data protection law:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-charcoal">To respond to
                  enquiries:</strong> We use your contact information to reply to
                  questions, fulfil quote requests, and schedule discovery calls.
                  Lawful basis: contract performance or legitimate interest.
                </li>
                <li>
                  <strong className="text-charcoal">To deliver services:</strong>{" "}
                  Project information is used to scope, manage, and deliver the
                  automation work you have engaged us for. Lawful basis: contract
                  performance.
                </li>
                <li>
                  <strong className="text-charcoal">To improve our
                  website:</strong> Aggregated analytics data helps us understand
                  how visitors use our site so we can improve content and user
                  experience. Lawful basis: legitimate interest.
                </li>
                <li>
                  <strong className="text-charcoal">To send service
                  communications:</strong> We may email you with updates directly
                  related to your project or enquiry. Lawful basis: contract
                  performance or legitimate interest.
                </li>
                <li>
                  <strong className="text-charcoal">To send marketing
                  communications:</strong> Only with your explicit consent, we may
                  share relevant updates, case studies, or newsletters. You can
                  withdraw consent at any time.
                </li>
                <li>
                  <strong className="text-charcoal">To comply with legal
                  obligations:</strong> We may process data to comply with
                  applicable laws, regulations, or court orders. Lawful basis:
                  legal obligation.
                </li>
              </ul>
              <p>
                We do not use your personal data for automated decision-making
                that produces legal or similarly significant effects without
                human review.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section aria-labelledby="section-cookies">
            <h2
              id="section-cookies"
              className="font-heading text-xl font-semibold text-charcoal mb-4 pb-2 border-b border-bone-400"
            >
              3. Cookies
            </h2>
            <div className="space-y-4 text-sm font-sans text-charcoal-500 leading-relaxed">
              <p>
                Cookies are small text files stored on your device. We use cookies
                to ensure the website functions correctly and — with your consent —
                to gather analytics data that helps us improve our service.
              </p>
              <div className="rounded-xl border border-bone-400 overflow-hidden">
                <table className="w-full text-xs font-sans">
                  <thead>
                    <tr className="bg-bone-100">
                      <th className="px-4 py-3 text-left font-semibold text-charcoal">
                        Cookie type
                      </th>
                      <th className="px-4 py-3 text-left font-semibold text-charcoal">
                        Purpose
                      </th>
                      <th className="px-4 py-3 text-left font-semibold text-charcoal">
                        Consent required?
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-bone-400">
                      <td className="px-4 py-3 text-charcoal-500">Strictly necessary</td>
                      <td className="px-4 py-3 text-charcoal-500">Session management, security tokens</td>
                      <td className="px-4 py-3 text-charcoal-500">No</td>
                    </tr>
                    <tr className="border-t border-bone-400 bg-bone-50">
                      <td className="px-4 py-3 text-charcoal-500">Analytics</td>
                      <td className="px-4 py-3 text-charcoal-500">Anonymous usage statistics (e.g., page views)</td>
                      <td className="px-4 py-3 text-charcoal-500">Yes</td>
                    </tr>
                    <tr className="border-t border-bone-400">
                      <td className="px-4 py-3 text-charcoal-500">Marketing</td>
                      <td className="px-4 py-3 text-charcoal-500">Retargeting, conversion tracking</td>
                      <td className="px-4 py-3 text-charcoal-500">Yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                You may withdraw consent or change your cookie preferences at any
                time via the cookie settings panel accessible in the site footer.
                Most browsers also allow you to refuse or delete cookies through
                their settings. Note that disabling certain cookies may affect
                website functionality.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section aria-labelledby="section-third-party">
            <h2
              id="section-third-party"
              className="font-heading text-xl font-semibold text-charcoal mb-4 pb-2 border-b border-bone-400"
            >
              4. Third-Party Services
            </h2>
            <div className="space-y-4 text-sm font-sans text-charcoal-500 leading-relaxed">
              <p>
                We work with carefully selected third-party providers to help
                operate our website and business. Each provider is bound by a data
                processing agreement and handles your data only as instructed by
                us.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-charcoal">Hosting &amp; infrastructure:</strong>{" "}
                  Our website is hosted on Vercel. Server logs and static assets
                  may be stored on their infrastructure. Vercel&apos;s privacy
                  policy applies to their processing.
                </li>
                <li>
                  <strong className="text-charcoal">Analytics:</strong> We use an
                  analytics provider (such as Plausible or Google Analytics) to
                  understand traffic patterns. Where applicable, IP addresses are
                  anonymised before storage.
                </li>
                <li>
                  <strong className="text-charcoal">Scheduling:</strong> If you
                  book a call, you interact with a scheduling platform (such as
                  Calendly). That platform&apos;s own privacy policy governs any
                  data you submit there.
                </li>
                <li>
                  <strong className="text-charcoal">Email delivery:</strong> We
                  use a transactional email provider to send confirmation and
                  project emails. Message metadata may be retained for deliverability
                  purposes.
                </li>
                <li>
                  <strong className="text-charcoal">Payment processing:</strong>{" "}
                  Payments are handled by a PCI-DSS compliant processor. We do not
                  store payment card details on our servers.
                </li>
              </ul>
              <p>
                We do not sell, rent, or trade your personal information to any
                third party for marketing purposes.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section aria-labelledby="section-retention">
            <h2
              id="section-retention"
              className="font-heading text-xl font-semibold text-charcoal mb-4 pb-2 border-b border-bone-400"
            >
              5. Data Retention
            </h2>
            <div className="space-y-4 text-sm font-sans text-charcoal-500 leading-relaxed">
              <p>
                We retain personal data only for as long as necessary to fulfil the
                purposes outlined in this policy or as required by law.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-charcoal">Enquiry and lead data:</strong>{" "}
                  Retained for up to 2 years from the date of last contact or
                  project completion, whichever is later, to facilitate future
                  project discussions and comply with tax record requirements.
                </li>
                <li>
                  <strong className="text-charcoal">Client project records:</strong>{" "}
                  Retained for 7 years following project completion to comply with
                  applicable accounting and contractual obligations.
                </li>
                <li>
                  <strong className="text-charcoal">Analytics data:</strong>{" "}
                  Aggregated analytics data is retained indefinitely; any data
                  that could be used to identify an individual is anonymised or
                  deleted within 26 months.
                </li>
                <li>
                  <strong className="text-charcoal">Marketing consent records:</strong>{" "}
                  Retained until you withdraw consent, plus a reasonable period
                  for compliance documentation.
                </li>
              </ul>
              <p>
                When data is no longer needed it is securely deleted or permanently
                anonymised.
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section aria-labelledby="section-rights">
            <h2
              id="section-rights"
              className="font-heading text-xl font-semibold text-charcoal mb-4 pb-2 border-b border-bone-400"
            >
              6. Your Rights
            </h2>
            <div className="space-y-4 text-sm font-sans text-charcoal-500 leading-relaxed">
              <p>
                Depending on your jurisdiction, you may have the following rights
                with respect to your personal data:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-charcoal">Right of access:</strong> You
                  may request a copy of the personal data we hold about you.
                </li>
                <li>
                  <strong className="text-charcoal">Right to rectification:</strong>{" "}
                  You may request that we correct inaccurate or incomplete data.
                </li>
                <li>
                  <strong className="text-charcoal">Right to erasure:</strong> You
                  may request that we delete your personal data where there is no
                  compelling reason for us to continue processing it.
                </li>
                <li>
                  <strong className="text-charcoal">Right to restrict
                  processing:</strong> You may request that we limit the way we
                  use your data in certain circumstances.
                </li>
                <li>
                  <strong className="text-charcoal">Right to data
                  portability:</strong> Where applicable, you may request your
                  data in a structured, machine-readable format.
                </li>
                <li>
                  <strong className="text-charcoal">Right to object:</strong> You
                  may object to processing based on legitimate interests or for
                  direct marketing purposes at any time.
                </li>
                <li>
                  <strong className="text-charcoal">Rights related to automated
                  decision-making:</strong> You may request human review of any
                  automated decision that significantly affects you.
                </li>
              </ul>
              <p>
                To exercise any of these rights, please contact us at the email
                address below. We will respond within 30 days. We may need to
                verify your identity before fulfilling a request. You also have the
                right to lodge a complaint with your local data protection
                supervisory authority.
              </p>
            </div>
          </section>

          {/* Section 7 */}
          <section aria-labelledby="section-contact">
            <h2
              id="section-contact"
              className="font-heading text-xl font-semibold text-charcoal mb-4 pb-2 border-b border-bone-400"
            >
              7. Contact
            </h2>
            <div className="space-y-4 text-sm font-sans text-charcoal-500 leading-relaxed">
              <p>
                For any questions, concerns, or requests relating to this Privacy
                Policy or our handling of your personal data, please contact us:
              </p>
              <div className="rounded-xl border border-bone-400 bg-white p-5 space-y-1">
                <p className="font-semibold text-charcoal font-sans">Backstage</p>
                <p>
                  Email:{" "}
                  <a
                    href="mailto:privacy@backstage.studio"
                    className="text-aegean hover:underline"
                  >
                    privacy@backstage.studio
                  </a>
                </p>
              </div>
              <p>
                We may update this Privacy Policy from time to time to reflect
                changes in our practices, technology, or legal requirements. When
                we make material changes, we will update the &ldquo;Last
                updated&rdquo; date at the top of this page. Continued use of our
                website after any change constitutes acceptance of the updated
                policy.
              </p>
            </div>
          </section>
        </div>

        {/* Footer nav */}
        <div className="mt-16 pt-8 border-t border-bone-400 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
          <p className="text-xs font-sans text-charcoal-300">
            Last updated: {LAST_UPDATED}
          </p>
          <Link
            href="/legal/terms"
            className="text-sm font-sans font-medium text-aegean hover:underline"
          >
            Terms of Service →
          </Link>
        </div>
      </SectionContainer>
    </>
  )
}
