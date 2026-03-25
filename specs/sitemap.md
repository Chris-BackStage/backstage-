# Backstage — Sitemap & Page Specification
**Version:** 1.0.0 | **Date:** 2026-03-24 | **Agent:** SITEMAP AGENT v1

---

## 1. Full URL Structure

```
backstage.build/
├── (root)
│   └── /                           Home
├── services/
│   ├── /services                   Services index
│   ├── /services/websites-ai-builder
│   ├── /services/media-marketing-automations
│   ├── /services/lead-finding-follow-ups
│   ├── /services/email-automations
│   └── /services/integrations-custom-workflows
├── work/
│   ├── /work                       Work / case studies index
│   ├── /work/lead-automation-saas
│   ├── /work/content-machine-agency
│   └── /work/ecommerce-website
├── /about
├── /creators
├── /contact
└── legal/
    ├── /legal/privacy
    └── /legal/terms
```

---

## 2. Page-by-Page Specification

### 2.1 Home `/`

**Priority:** 1.0 | **Change frequency:** weekly

**Meta title:** `Backstage — AI Automation for Ambitious Teams`
**Meta description:** `Backstage designs, builds, and runs the workflows behind your business. Websites, lead automation, content pipelines, and custom integrations.`

**Sections (in order):**

| # | Section | Component | Notes |
|---|---|---|---|
| 1 | Hero | `<Hero />` | Full viewport, headline + subheadline + dual CTAs + trust line |
| 2 | Trust Bar | `<TrustBar />` | Integration logos, muted, de-emphasized visually |
| 3 | Pillars | `<PillarGrid />` | 4-up value props: Launch / Leads / Media / Ops |
| 4 | How It Works | `<ProcessSteps />` | 3-step numbered: Discover / Orchestrate / Run |
| 5 | Features | `<FeatureGrid />` | 6-up capability grid with Lucide icons |
| 6 | Integrations | `<IntegrationCloud />` | 18-tool pill cloud |
| 7 | Testimonials | `<TestimonialRow />` | 3 client quotes |
| 8 | Pricing | `<PricingTable />` | 3 tiers: Starter / Growth (featured) / Enterprise |
| 9 | FAQ | `<FAQAccordion />` | 6 items, accordion expand |
| 10 | Final CTA | `<FinalCTA />` | Full-width, dual CTAs |

**Structured data:** Organization, FAQPage, BreadcrumbList

**Internal links out:**
- `/contact` (primary CTA × 3)
- `/contact#quote` (secondary CTA × 3)
- `/services` (pillars section)
- `/services/[slug]` × 5 (features section)
- `/work` (testimonials section)

---

### 2.2 Services Index `/services`

**Priority:** 0.9 | **Change frequency:** monthly

**Meta title:** `Services | Backstage`
**Meta description:** `AI automation services for ambitious teams—websites, lead generation, content pipelines, email systems, and custom workflow integrations.`

**Sections:**

| # | Section | Component | Notes |
|---|---|---|---|
| 1 | Page Hero | `<PageHero />` | Headline, description, no full-viewport |
| 2 | Service Cards | `<ServiceCardGrid />` | 5 cards, icon + tagline + outcomes preview + CTA |
| 3 | Process Teaser | `<ProcessTeaser />` | 3-step summary linking to how it works |
| 4 | Final CTA | `<FinalCTA />` | Dual CTAs |

**Structured data:** BreadcrumbList, ItemList (services)

**Internal links out:**
- `/services/[slug]` × 5
- `/contact`
- `/contact#quote`

---

### 2.3 Service: Websites & AI Builder `/services/websites-ai-builder`

**Priority:** 0.85 | **Change frequency:** monthly

**Meta title:** `Websites & AI Builder | Backstage`
**Meta description:** `Production-grade marketing websites and AI-powered web apps built in weeks. Lighthouse 90+, CMS or headless, conversion-optimized from day one.`

**Sections:**

| # | Section | Notes |
|---|---|---|
| 1 | Service Hero | Tagline: "Fast, high-converting websites with AI built in." Aegean blue accent. |
| 2 | Outcomes | 4 outcome bullets |
| 3 | What You Get | 6 deliverable line items |
| 4 | Integrations | Webflow, Next.js, Vercel, Cloudflare, OpenAI, Anthropic |
| 5 | Case Study Teaser | `/work/ecommerce-website` |
| 6 | Final CTA | Dual CTAs |

---

### 2.4 Service: Media Marketing Automations `/services/media-marketing-automations`

**Priority:** 0.85 | **Change frequency:** monthly

**Meta title:** `Media Marketing Automations | Backstage`
**Meta description:** `Automated content pipelines that publish across every channel without manual effort. Social, email, ads, and analytics—all on autopilot.`

**Sections:** Same structure as 2.3. Case study teaser → `/work/content-machine-agency`. Olive green accent.

---

### 2.5 Service: Lead Finding & Follow-ups `/services/lead-finding-follow-ups`

**Priority:** 0.85 | **Change frequency:** monthly

**Meta title:** `Lead Finding & Follow-ups | Backstage`
**Meta description:** `Automated prospecting, qualification, and follow-up sequences that route the right leads at the right time. Lead response under 5 minutes.`

**Sections:** Same structure as 2.3. Case study teaser → `/work/lead-automation-saas`. Soft gold accent.

---

### 2.6 Service: Email Automations `/services/email-automations`

**Priority:** 0.85 | **Change frequency:** monthly

**Meta title:** `Email Automations | Backstage`
**Meta description:** `Drip sequences, transactional triggers, and newsletters designed for deliverability and conversion. Email that works while you sleep.`

**Sections:** Same structure as 2.3. No specific case study yet. Aegean blue accent.

---

### 2.7 Service: Integrations & Custom Workflows `/services/integrations-custom-workflows`

**Priority:** 0.85 | **Change frequency:** monthly

**Meta title:** `Integrations & Custom Workflows | Backstage`
**Meta description:** `Connect every tool in your stack. Custom Zapier, Make, and n8n workflows that eliminate data silos and automate every manual process.`

**Sections:** Same structure as 2.3. No specific case study yet. Olive green accent.

---

### 2.8 Work Index `/work`

**Priority:** 0.8 | **Change frequency:** monthly

**Meta title:** `Our Work | Backstage`
**Meta description:** `Case studies from Backstage—lead automation, content pipelines, and high-performance websites built for real businesses.`

**Sections:**

| # | Section | Notes |
|---|---|---|
| 1 | Page Hero | Headline + description |
| 2 | Case Study Grid | 3 cards (category, client, summary, metrics preview) |
| 3 | CTA | "Start your project" → `/contact` |

**Structured data:** BreadcrumbList, ItemList

---

### 2.9 Case Study: Lead Automation SaaS `/work/lead-automation-saas`

**Priority:** 0.75 | **Change frequency:** yearly

**Meta title:** `Lead Automation Case Study | Backstage`
**Meta description:** `How Backstage cut a SaaS startup's lead response time from 4 hours to under 3 minutes with an end-to-end automation stack.`

**Sections:** Problem → Constraints → Workflow → Tools → Outcome metrics → Client quote → Next case study

---

### 2.10 Case Study: Content Machine `/work/content-machine-agency`

**Priority:** 0.75 | **Change frequency:** yearly

**Meta title:** `Content Machine Case Study | Backstage`
**Meta description:** `How Backstage built an automated content pipeline publishing 30+ pieces per month across 4 channels from a single content brief.`

**Sections:** Same structure as 2.9.

---

### 2.11 Case Study: E-commerce Website `/work/ecommerce-website`

**Priority:** 0.75 | **Change frequency:** yearly

**Meta title:** `E-commerce Website Case Study | Backstage`
**Meta description:** `How Backstage designed and launched a 97 Lighthouse marketing site with AI-powered product recommendations for a DTC brand.`

**Sections:** Same structure as 2.9.

---

### 2.12 About `/about`

**Priority:** 0.7 | **Change frequency:** quarterly

**Meta title:** `About | Backstage`
**Meta description:** `Backstage exists to give ambitious businesses Fortune 500 operational infrastructure without the headcount. Craft meets clarity.`

**Sections:**

| # | Section | Notes |
|---|---|---|
| 1 | Brand Statement Hero | "Craft meets clarity." |
| 2 | Mission | Single-paragraph mission statement |
| 3 | How We Work | 3 principles with descriptions |
| 4 | Values | 4-item icon/title/description grid |
| 5 | CTA | Link to `/contact` and `/creators` |

**Structured data:** Organization, BreadcrumbList

---

### 2.13 Creators `/creators`

**Priority:** 0.7 | **Change frequency:** quarterly

**Meta title:** `The Creators | Backstage`
**Meta description:** `Meet the operators behind Backstage. Built by people who automate everything—including their own work.`

**Sections:**

| # | Section | Notes |
|---|---|---|
| 1 | Intro Hero | Headline + subheadline |
| 2 | Founder Cards | 2 cards: photo, bio, tools, favorite automation |
| 3 | The Workbench | 8-tool grid with categories and descriptions |
| 4 | Company Timeline | 3 milestones |
| 5 | CTA | Dual CTAs |

**Structured data:** Person (× 2), BreadcrumbList

---

### 2.14 Contact `/contact`

**Priority:** 0.95 | **Change frequency:** monthly

**Meta title:** `Contact Sales | Backstage`
**Meta description:** `Book a discovery call or send an enquiry. Tell us where automation can help most—we'll come prepared with ideas.`

**Sections:**

| # | Section | Notes |
|---|---|---|
| 1 | Contact Hero | Headline + subheadline |
| 2 | Contact Form | 6 fields + submit |
| 3 | Contact Sidebar | Email + scheduling CTA |
| 4 | Compliance Line | Privacy policy reference |

**Structured data:** BreadcrumbList

**Notes:** This page must not be `noindex`. It is a primary conversion page.

---

### 2.15 Privacy Policy `/legal/privacy`

**Priority:** 0.3 | **Change frequency:** yearly

**Meta title:** `Privacy Policy | Backstage`
**Meta description:** `Backstage's privacy policy — what data we collect, how we use it, and your rights.`

**Notes:** Optional `noindex`. Plain prose layout. Last updated: March 24, 2026.

---

### 2.16 Terms of Service `/legal/terms`

**Priority:** 0.3 | **Change frequency:** yearly

**Meta title:** `Terms of Service | Backstage`
**Meta description:** `Terms governing your use of the Backstage website and services.`

**Notes:** Optional `noindex`. Plain prose layout. Last updated: March 24, 2026.

---

## 3. XML Sitemap Priority Summary

| URL | Priority | Changefreq |
|---|---|---|
| `/` | 1.0 | weekly |
| `/contact` | 0.95 | monthly |
| `/services` | 0.9 | monthly |
| `/services/websites-ai-builder` | 0.85 | monthly |
| `/services/media-marketing-automations` | 0.85 | monthly |
| `/services/lead-finding-follow-ups` | 0.85 | monthly |
| `/services/email-automations` | 0.85 | monthly |
| `/services/integrations-custom-workflows` | 0.85 | monthly |
| `/work` | 0.8 | monthly |
| `/work/lead-automation-saas` | 0.75 | yearly |
| `/work/content-machine-agency` | 0.75 | yearly |
| `/work/ecommerce-website` | 0.75 | yearly |
| `/about` | 0.7 | quarterly |
| `/creators` | 0.7 | quarterly |
| `/legal/privacy` | 0.3 | yearly |
| `/legal/terms` | 0.3 | yearly |

---

## 4. Internal Linking Strategy

### 4.1 Principles

- Every page must have at least one outbound internal link to `/contact` or `/contact#quote`
- Service pages cross-link to the most relevant case study in `/work`
- Case studies link back to the corresponding service page
- The home page links to all 5 service pages (via the features section)
- About and Creators pages cross-link to each other
- Footer provides global access to all top-level pages

### 4.2 Conversion Path Priority

```
Organic / Paid → Home → Services → Case Study → Contact
Organic / Paid → Home → Contact (direct CTA)
Organic → Service Page → Contact
Organic → Case Study → Service → Contact
```

### 4.3 Anchor Text Rules

- Navigation links: Use exact label from `nav.json`
- In-body links: Use descriptive, benefit-led text. Avoid "click here" or "learn more" as the only anchor text.
- CTA links: Always use "Contact Sales" or "Get a Quote" — never variations

---

## 5. robots.txt Guidance

```
User-agent: *
Allow: /

Sitemap: https://backstage.build/sitemap.xml
```

Only disallow `/api/*` routes (form submission endpoints). No other restrictions.

---

## 6. Next.js Implementation Notes

- Use `app/sitemap.ts` to generate the XML sitemap dynamically
- Use `generateMetadata()` on every page and layout
- Use `generateStaticParams()` for `/services/[slug]` and `/work/[slug]`
- Canonical URLs: set via `alternates.canonical` in each page's metadata
- Open Graph images: generate via `app/opengraph-image.tsx` at root and override per page

---

*This sitemap spec is maintained alongside `content/copy.ts` and `specs/brief.md` as core project infrastructure.*
