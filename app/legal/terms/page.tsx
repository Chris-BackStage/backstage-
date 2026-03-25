import type { Metadata } from "next"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { SectionContainer } from "@/components/common/SectionContainer"
import { GradientBackdrop } from "@/components/common/GradientBackdrop"

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms that govern your use of Backstage services and website.",
  alternates: { canonical: "/legal/terms" },
  openGraph: {
    title: "Terms of Service | Backstage",
    description: "The rules of engagement — clearly laid out.",
    url: "/legal/terms",
  },
}

const LAST_UPDATED = "March 24, 2026"

export default function TermsOfServicePage() {
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
              Terms of Service
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
            These Terms of Service (&ldquo;Terms&rdquo;) constitute a legally
            binding agreement between you (&ldquo;Client,&rdquo; &ldquo;you,&rdquo;
            or &ldquo;your&rdquo;) and Backstage (&ldquo;we,&rdquo; &ldquo;us,&rdquo;
            or &ldquo;our&rdquo;) governing your access to and use of the
            backstage.studio website and any services we provide. Please read
            these Terms carefully before using our services. By accessing our
            website or engaging our services, you confirm that you have read,
            understood, and agree to be bound by these Terms.
          </p>
        </div>

        <div className="space-y-12">
          {/* Section 1 */}
          <section aria-labelledby="terms-acceptance">
            <h2
              id="terms-acceptance"
              className="font-heading text-xl font-semibold text-charcoal mb-4 pb-2 border-b border-bone-400"
            >
              1. Acceptance of Terms
            </h2>
            <div className="space-y-4 text-sm font-sans text-charcoal-500 leading-relaxed">
              <p>
                By accessing backstage.studio, submitting an enquiry, engaging
                our services, or entering into a separate project agreement with
                us, you accept these Terms in full. If you are entering into these
                Terms on behalf of a company or other legal entity, you represent
                that you have the authority to bind that entity to these Terms, in
                which case &ldquo;you&rdquo; refers to that entity.
              </p>
              <p>
                If you do not agree to any part of these Terms, you must not use
                our website or services. We reserve the right to modify these
                Terms at any time. We will notify you of material changes by
                updating the &ldquo;Last updated&rdquo; date above. Your
                continued use of our website or services after any change
                constitutes your acceptance of the updated Terms.
              </p>
              <p>
                These Terms apply to website visitors and to Clients who engage
                Backstage for paid services. Where we enter into a separate
                statement of work, master services agreement, or project proposal
                (collectively, &ldquo;Project Agreement&rdquo;), those documents
                form part of the agreement between us and will prevail over these
                Terms in the event of any conflict.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section aria-labelledby="terms-services">
            <h2
              id="terms-services"
              className="font-heading text-xl font-semibold text-charcoal mb-4 pb-2 border-b border-bone-400"
            >
              2. Services
            </h2>
            <div className="space-y-4 text-sm font-sans text-charcoal-500 leading-relaxed">
              <p>
                Backstage provides AI-powered automation and digital operations
                services, including but not limited to website and funnel
                development, content and media automation, lead generation
                systems, email marketing infrastructure, and custom workflow
                engineering. The specific scope, deliverables, timeline, and fees
                for any engagement are set out in the relevant Project Agreement.
              </p>
              <p>
                We reserve the right to:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Modify, suspend, or discontinue any service at any time with
                  reasonable notice.
                </li>
                <li>
                  Decline to provide services or enter into a Project Agreement
                  at our sole discretion, including where a project conflicts with
                  our values or legal obligations.
                </li>
                <li>
                  Engage subcontractors or specialists to assist with delivery,
                  subject to appropriate confidentiality obligations.
                </li>
              </ul>
              <p>
                Unless otherwise agreed in writing, all services are provided on
                a project basis. We do not guarantee specific business outcomes
                (such as revenue, leads, or traffic) as a result of our work,
                though we make every effort to build systems aligned with the
                outcomes you have described to us.
              </p>
              <h3 className="font-sans font-semibold text-charcoal text-sm mt-4">
                Payment
              </h3>
              <p>
                Fees are due per the payment schedule set out in your Project
                Agreement. Where no schedule is specified, invoices are payable
                within 14 days of the invoice date. Late payments accrue interest
                at 1.5% per month (or the maximum rate permitted by law, if
                lower). We reserve the right to suspend work on any project
                where payment is overdue by more than 14 days, without liability
                to you.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section aria-labelledby="terms-ip">
            <h2
              id="terms-ip"
              className="font-heading text-xl font-semibold text-charcoal mb-4 pb-2 border-b border-bone-400"
            >
              3. Intellectual Property
            </h2>
            <div className="space-y-4 text-sm font-sans text-charcoal-500 leading-relaxed">
              <h3 className="font-sans font-semibold text-charcoal text-sm">
                Our IP
              </h3>
              <p>
                All content on the backstage.studio website — including text,
                graphics, logos, icons, images, audio clips, digital downloads,
                and software — is the property of Backstage or its content
                suppliers and is protected by applicable intellectual property
                laws. You may not reproduce, distribute, modify, or create
                derivative works of any website content without our prior written
                consent.
              </p>
              <h3 className="font-sans font-semibold text-charcoal text-sm mt-4">
                Deliverables
              </h3>
              <p>
                Upon receipt of full payment for a project, we assign to you all
                rights, title, and interest in the custom deliverables created
                specifically for you under that project (&ldquo;Custom
                Deliverables&rdquo;), including any applicable copyrights, subject
                to the exceptions below.
              </p>
              <p>
                Backstage retains ownership of:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Pre-existing proprietary tools, templates, frameworks,
                  libraries, and methodologies we bring to a project
                  (&ldquo;Background IP&rdquo;).
                </li>
                <li>
                  General-purpose code, components, or automation patterns not
                  created exclusively for your project.
                </li>
              </ul>
              <p>
                We grant you a non-exclusive, perpetual, royalty-free licence to
                use Background IP to the extent it is incorporated into your
                Custom Deliverables. Neither party may use the other&apos;s
                trademarks, trade names, or branding without prior written
                consent.
              </p>
              <h3 className="font-sans font-semibold text-charcoal text-sm mt-4">
                Client materials
              </h3>
              <p>
                You grant us a limited licence to use materials, data, and content
                you provide solely for the purpose of delivering the agreed
                services. You represent and warrant that you own or have the right
                to provide all such materials and that they do not infringe any
                third-party rights.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section aria-labelledby="terms-conduct">
            <h2
              id="terms-conduct"
              className="font-heading text-xl font-semibold text-charcoal mb-4 pb-2 border-b border-bone-400"
            >
              4. User Conduct
            </h2>
            <div className="space-y-4 text-sm font-sans text-charcoal-500 leading-relaxed">
              <p>
                You agree to use our website and services only for lawful purposes
                and in a manner that does not infringe the rights of others. You
                must not:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Use our website in any way that violates applicable local,
                  national, or international law or regulation.
                </li>
                <li>
                  Transmit any unsolicited or unauthorised advertising or
                  promotional material (spam).
                </li>
                <li>
                  Knowingly transmit data, send or upload material that contains
                  viruses, Trojan horses, worms, or any other malicious or
                  technologically harmful code.
                </li>
                <li>
                  Attempt to gain unauthorised access to any part of our website,
                  servers, databases, or systems connected to the website.
                </li>
                <li>
                  Scrape, crawl, or extract data from our website using automated
                  means without our prior written consent.
                </li>
                <li>
                  Submit false, misleading, or fraudulent information in any form
                  or communication with us.
                </li>
                <li>
                  Engage us to build systems intended to deceive, defraud, or
                  harm end users, including but not limited to phishing
                  infrastructure, deceptive dark patterns, or spam systems.
                </li>
              </ul>
              <p>
                We reserve the right to terminate or refuse services to any client
                whose use of our services, in our reasonable opinion, violates
                these conduct standards or brings reputational harm to Backstage.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section aria-labelledby="terms-liability">
            <h2
              id="terms-liability"
              className="font-heading text-xl font-semibold text-charcoal mb-4 pb-2 border-b border-bone-400"
            >
              5. Limitation of Liability
            </h2>
            <div className="space-y-4 text-sm font-sans text-charcoal-500 leading-relaxed">
              <p>
                To the fullest extent permitted by applicable law, Backstage and
                its directors, employees, contractors, and agents will not be
                liable for any:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Indirect, incidental, special, consequential, or punitive
                  damages arising out of or in connection with these Terms or our
                  services.
                </li>
                <li>
                  Loss of profits, revenue, data, goodwill, or business
                  opportunities, even if we have been advised of the possibility
                  of such damages.
                </li>
                <li>
                  Damages arising from third-party services, APIs, platforms, or
                  tools integrated into your deliverables (including outages,
                  policy changes, or deprecations by those providers).
                </li>
              </ul>
              <p>
                Our total aggregate liability to you for any claim arising out of
                or relating to these Terms or a Project Agreement, regardless of
                the form of action, shall not exceed the total fees paid by you to
                us under the relevant Project Agreement in the three months
                preceding the event giving rise to the claim.
              </p>
              <p>
                Nothing in these Terms limits liability for death or personal
                injury caused by our negligence, for fraud or fraudulent
                misrepresentation, or for any other liability that cannot be
                lawfully excluded or limited.
              </p>
              <p>
                Our website and publicly available content are provided &ldquo;as
                is&rdquo; without warranties of any kind, express or implied,
                including warranties of merchantability, fitness for a particular
                purpose, or non-infringement. We do not warrant that the website
                will be uninterrupted, error-free, or free of viruses or other
                harmful components.
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section aria-labelledby="terms-indemnification">
            <h2
              id="terms-indemnification"
              className="font-heading text-xl font-semibold text-charcoal mb-4 pb-2 border-b border-bone-400"
            >
              6. Indemnification
            </h2>
            <div className="space-y-4 text-sm font-sans text-charcoal-500 leading-relaxed">
              <p>
                You agree to defend, indemnify, and hold harmless Backstage, its
                affiliates, and their respective officers, directors, employees,
                and agents from and against any claims, liabilities, damages,
                losses, costs, and expenses (including reasonable legal fees)
                arising out of or in connection with:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Your use of our website or services.</li>
                <li>
                  Your breach of any provision of these Terms or a Project
                  Agreement.
                </li>
                <li>
                  Your violation of any applicable law or regulation.
                </li>
                <li>
                  Any claim that materials you provided to us infringe or
                  misappropriate the intellectual property or other rights of a
                  third party.
                </li>
                <li>
                  The deployment or use of any system or automation we built on
                  your instruction that results in harm to third parties.
                </li>
              </ul>
            </div>
          </section>

          {/* Section 7 */}
          <section aria-labelledby="terms-governing-law">
            <h2
              id="terms-governing-law"
              className="font-heading text-xl font-semibold text-charcoal mb-4 pb-2 border-b border-bone-400"
            >
              7. Governing Law and Disputes
            </h2>
            <div className="space-y-4 text-sm font-sans text-charcoal-500 leading-relaxed">
              <p>
                These Terms and any dispute or claim arising out of or in
                connection with them (including non-contractual disputes or
                claims) shall be governed by and construed in accordance with the
                laws of the jurisdiction in which Backstage is registered, without
                regard to its conflict of law provisions.
              </p>
              <p>
                Before resorting to formal legal proceedings, we ask that you
                contact us first. Most issues can be resolved through good-faith
                negotiation, and we commit to responding promptly to any concern
                you raise. If we cannot resolve a dispute within 30 days of your
                written notice, either party may pursue their available legal
                remedies.
              </p>
              <p>
                Any formal legal proceedings shall be subject to the exclusive
                jurisdiction of the courts located in our registered jurisdiction,
                and you consent to the personal jurisdiction of such courts.
              </p>
            </div>
          </section>

          {/* Section 8 */}
          <section aria-labelledby="terms-changes">
            <h2
              id="terms-changes"
              className="font-heading text-xl font-semibold text-charcoal mb-4 pb-2 border-b border-bone-400"
            >
              8. Changes to Terms
            </h2>
            <div className="space-y-4 text-sm font-sans text-charcoal-500 leading-relaxed">
              <p>
                We may revise these Terms at any time by updating this page. We
                will indicate the date of the most recent update at the top of
                this document. We encourage you to review these Terms periodically.
              </p>
              <p>
                For material changes — those that significantly affect your rights
                or obligations — we will make reasonable efforts to provide more
                prominent notice, such as an in-site notice or, where we hold
                your email address, a direct notification. Continued use of our
                website or services after the effective date of revised Terms
                constitutes your acceptance of those changes.
              </p>
              <p>
                Changes to Terms do not affect the terms of any Project Agreement
                already executed before the date of the change, unless both parties
                agree in writing to amend that agreement.
              </p>
            </div>
          </section>

          {/* Section 9 */}
          <section aria-labelledby="terms-contact">
            <h2
              id="terms-contact"
              className="font-heading text-xl font-semibold text-charcoal mb-4 pb-2 border-b border-bone-400"
            >
              9. Contact
            </h2>
            <div className="space-y-4 text-sm font-sans text-charcoal-500 leading-relaxed">
              <p>
                If you have any questions about these Terms, wish to report a
                concern, or need to serve formal legal notice, please contact us:
              </p>
              <div className="rounded-xl border border-bone-400 bg-white p-5 space-y-1">
                <p className="font-semibold text-charcoal font-sans">Backstage</p>
                <p>
                  Email:{" "}
                  <a
                    href="mailto:legal@backstage.studio"
                    className="text-aegean hover:underline"
                  >
                    legal@backstage.studio
                  </a>
                </p>
              </div>
              <p>
                If any provision of these Terms is found to be invalid or
                unenforceable by a court of competent jurisdiction, the remaining
                provisions shall continue in full force and effect. Our failure to
                enforce any right or provision of these Terms shall not be deemed
                a waiver of such right or provision. These Terms, together with
                any applicable Project Agreement, constitute the entire agreement
                between you and Backstage with respect to the subject matter
                herein.
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
            href="/legal/privacy"
            className="text-sm font-sans font-medium text-aegean hover:underline"
          >
            Privacy Policy →
          </Link>
        </div>
      </SectionContainer>
    </>
  )
}
