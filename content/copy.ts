// content/copy.ts
// CONTRACT: Single source of truth for all marketing copy.
// Repositioned: Creative digital studio — websites, media, branding, strategy

export const COPY = {
  brand: {
    name: "Backstage",
    tagline: "The team behind the brands you can't ignore.",
    description:
      "Backstage is a creative digital studio that builds websites, media systems, brand identities, and creative strategies for brands that refuse to blend in.",
    shortDescription: "Premium creative studio.",
  },

  nav: {
    links: [
      { label: "Services", href: "/services" },
      { label: "Our Work", href: "/work" },
      { label: "About", href: "/about" },
    ],
    cta: { label: "Start a Project", href: "/contact" },
  },

  home: {
    hero: {
      eyebrow: "Creative Digital Studio",
      headline: "The team behind the brands you can't ignore.",
      subheadline:
        "We design and build websites, media systems, brand identities, and creative strategies for brands that refuse to blend in.",
      primaryCta: { label: "See Our Work", href: "/work" },
      secondaryCta: { label: "Start a Project", href: "/contact" },
    },

    marquee: {
      items: [
        "Website Creation",
        "Media Marketing",
        "Digital Branding",
        "Creative Strategy",
        "Website Creation",
        "Media Marketing",
        "Digital Branding",
        "Creative Strategy",
      ],
    },

    services: {
      label: "What We Build",
      headline: "Four disciplines. One studio. Every brand need covered.",
      items: [
        {
          slug: "website-creation",
          icon: "Monitor",
          color: "aegean",
          label: "Website Creation",
          title: "Websites that perform as well as they look.",
          description:
            "Production-grade marketing sites, landing pages, and web applications — designed with intent, built for performance, and optimized to convert.",
          link: { label: "Website Creation →", href: "/services/website-creation" },
        },
        {
          slug: "media-marketing",
          icon: "Megaphone",
          color: "olive",
          label: "Media Marketing",
          title: "Your content engine, built and running.",
          description:
            "We build automated content pipelines that publish, schedule, and report across every channel — so your brand stays in motion without the manual overhead.",
          link: { label: "Media Marketing →", href: "/services/media-marketing" },
        },
        {
          slug: "digital-branding",
          icon: "Layers",
          color: "gold",
          label: "Digital Branding",
          title: "Identity systems that set you apart.",
          description:
            "Brand strategy, visual identity, design systems, and positioning work that gives your business a look, feel, and voice impossible to mistake for anyone else.",
          link: { label: "Digital Branding →", href: "/services/digital-branding" },
        },
        {
          slug: "creative-strategy",
          icon: "Compass",
          color: "aegean",
          label: "Creative Strategy",
          title: "Direction you can build a brand on.",
          description:
            "We map your market, define your positioning, and create the strategic blueprint that gives every creative decision — from copy to design — a clear purpose.",
          link: { label: "Creative Strategy →", href: "/services/creative-strategy" },
        },
      ],
    },

    howItWorks: {
      label: "The Process",
      headline: "Three steps from brief to brand.",
      steps: [
        {
          number: "01",
          title: "Discover",
          description:
            "We learn your business, your audience, and the space you want to own. Deep listening, sharp questions, and a clear picture of where you need to be.",
        },
        {
          number: "02",
          title: "Create",
          description:
            "We design and build with precision — websites, brand systems, content strategies, creative campaigns — every element crafted with purpose and care.",
        },
        {
          number: "03",
          title: "Launch",
          description:
            "We ship it, refine it, and make it last. No handoff-and-disappear. We stay accountable to results and ensure your brand works hard even when you're not watching.",
        },
      ],
    },

    differentiators: {
      label: "Why Backstage",
      items: [
        {
          label: "Creative + Technical",
          title: "Both sides of the equation.",
          description:
            "Most studios are designers who hire developers or developers who dabble in design. We don't split the two. Every project gets craft and code in equal measure.",
        },
        {
          label: "Built for impact",
          title: "Outcomes, not deliverables.",
          description:
            "We're not a vendor who hands over files and disappears. We stay accountable to what the work actually does — traffic, conversions, attention, growth.",
        },
        {
          label: "Fast and intentional",
          title: "Speed without cutting corners.",
          description:
            "We move fast because we're disciplined, not reckless. Weeks, not months. Every decision is deliberate — no bloat, no committees, no wasted motion.",
        },
      ],
    },

    testimonials: {
      label: "Client stories",
      headline: "Results built on trust.",
      items: [
        {
          quote:
            "Backstage didn't just build our website — they rebuilt how we show up online. The new site changed how prospects perceive us before we even say a word.",
          author: "[[CLIENT NAME]]",
          role: "Founder & CEO",
          company: "[[COMPANY NAME]]",
          avatar: null,
        },
        {
          quote:
            "They went from zero context to a fully realized brand system in three weeks. The quality was something I'd expect from a studio charging three times as much.",
          author: "[[CLIENT NAME]]",
          role: "Marketing Director",
          company: "[[COMPANY NAME]]",
          avatar: null,
        },
        {
          quote:
            "Our content used to be sporadic and inconsistent. Backstage built a system that keeps us visible and on-brand every single week — without manual work.",
          author: "[[CLIENT NAME]]",
          role: "Head of Growth",
          company: "[[COMPANY NAME]]",
          avatar: null,
        },
      ],
    },

    faq: {
      label: "FAQ",
      headline: "Common questions, straight answers.",
      items: [
        {
          question: "What kinds of businesses does Backstage work with?",
          answer:
            "We work with growth-stage startups, established SMBs, and entrepreneurial brands that take their digital presence seriously. If you want your brand to be impossible to overlook, we're the right fit.",
        },
        {
          question: "How long does a typical project take?",
          answer:
            "A focused website project runs 3–6 weeks. A full brand identity system takes 4–8 weeks. Strategy engagements vary by scope. We'll give you a clear timeline during our first conversation.",
        },
        {
          question: "Do you only do one thing at a time?",
          answer:
            "Not at all. Many clients come to us for a website and expand into branding or media systems once they see how we work. We design each service to integrate with the others.",
        },
        {
          question: "What does 'creative strategy' actually mean in practice?",
          answer:
            "It means we help you define your positioning, messaging, and creative direction before we touch design or code. Strategy informs everything — so the work isn't just beautiful, it's accurate.",
        },
        {
          question: "What happens after launch?",
          answer:
            "Every project includes a post-launch period where we monitor, tune, and fix edge cases. We document everything so your team isn't dependent on us — but we're available when you need to grow.",
        },
        {
          question: "How is Backstage different from a traditional agency?",
          answer:
            "We're smaller, faster, and more invested in your outcomes. No account managers in the middle, no handoffs between departments. The people who think up your strategy are the same ones who build it.",
        },
      ],
    },

    finalCta: {
      headline: "Ready to build something impossible to ignore?",
      description:
        "Let's talk about your brand, your goals, and what it takes to make you the obvious choice in your market.",
      primaryCta: { label: "Start a Project", href: "/contact" },
      secondaryCta: { label: "See Our Work", href: "/work" },
    },
  },

  services: {
    headline: "Four disciplines. Infinite impact.",
    description:
      "We design, build, and grow the digital presence of brands that refuse to blend in. Every service is scoped to your goals and delivered end-to-end.",
    items: [
      {
        slug: "website-creation",
        title: "Website Creation",
        shortTitle: "Websites",
        icon: "Monitor",
        tagline: "Websites that perform as well as they look.",
        description:
          "We design and develop production-grade marketing sites, landing pages, and web applications. Every build starts with strategy and ends with a site that's fast, beautiful, and optimized to convert — not just to impress.",
        outcomes: [
          "Launch in 3–6 weeks, not months",
          "Lighthouse 90+ across all categories",
          "Designed to convert, not just to look good",
          "Optimized for search from day one",
        ],
        whatYouGet: [
          "Custom design system aligned to your brand",
          "Next.js or Webflow development",
          "On-page SEO and structured data",
          "Performance optimization and CDN setup",
          "Analytics and conversion tracking",
          "30–60 day post-launch support",
        ],
        integrations: ["Next.js", "Webflow", "Vercel", "Cloudflare", "Framer", "Shopify"],
        color: "aegean",
      },
      {
        slug: "media-marketing",
        title: "Media Marketing",
        shortTitle: "Media",
        icon: "Megaphone",
        tagline: "Your content engine, built and running on autopilot.",
        description:
          "We build and run automated content pipelines that publish, schedule, and report across every channel. From social media calendars to email newsletters and ad performance tracking — your marketing runs consistently without manual overhead.",
        outcomes: [
          "Consistent brand presence across every channel",
          "Hours saved weekly on content ops",
          "Performance data surfaced automatically",
          "Content that compounds over time",
        ],
        whatYouGet: [
          "Content strategy and editorial calendar",
          "Social scheduling pipeline (LinkedIn, X, Instagram)",
          "Newsletter template and automation setup",
          "AI-assisted content drafting workflow",
          "Cross-channel analytics dashboard",
          "Monthly content performance review",
        ],
        integrations: ["Buffer", "Beehiiv", "Mailchimp", "Meta Ads", "Google Ads", "Notion"],
        color: "olive",
      },
      {
        slug: "digital-branding",
        title: "Digital Branding",
        shortTitle: "Branding",
        icon: "Layers",
        tagline: "Identity systems that set you apart.",
        description:
          "We build brand identities that are as strategic as they are beautiful — starting with positioning, moving through visual identity, and ending with a complete design system your team can actually use. Your brand should be impossible to mistake for anyone else.",
        outcomes: [
          "A brand identity with a clear strategic foundation",
          "Visual system ready for every digital touchpoint",
          "Consistent look and feel across all channels",
          "Internal team buy-in and practical design guidelines",
        ],
        whatYouGet: [
          "Brand strategy and positioning document",
          "Logo and visual identity design",
          "Color system, typography, and iconography",
          "Digital design system (Figma-ready)",
          "Brand voice and messaging guidelines",
          "Application across key digital touchpoints",
        ],
        integrations: ["Figma", "Adobe", "Framer", "Webflow", "Canva Pro", "Notion"],
        color: "gold",
      },
      {
        slug: "creative-strategy",
        title: "Creative Strategy",
        shortTitle: "Strategy",
        icon: "Compass",
        tagline: "Direction you can build a brand on.",
        description:
          "Before we design anything or write a single line of code, we get the strategy right. We map your market, define your positioning, and create the strategic blueprint that makes every creative decision — from copy to campaign — land with intention.",
        outcomes: [
          "A clear, ownable market position",
          "Messaging that resonates with your real audience",
          "Creative direction your whole team can execute",
          "A strategic foundation that scales with your brand",
        ],
        whatYouGet: [
          "Competitive landscape audit",
          "Brand positioning and differentiation framework",
          "Audience definition and persona development",
          "Core messaging and value proposition",
          "Creative brief and campaign direction",
          "Quarterly strategy refresh sessions",
        ],
        integrations: ["Notion", "Miro", "Figma", "Airtable", "Google Workspace", "Slack"],
        color: "aegean",
      },
    ],
  },

  about: {
    headline: "Craft meets clarity.",
    subheadline:
      "We believe the best creative work is invisible in the best possible way — it feels so right that no one questions it.",
    mission:
      "Backstage exists to give ambitious brands access to the kind of creative and strategic firepower that used to require a full in-house team or a legacy agency with a five-month timeline. We move faster, think sharper, and stay accountable to outcomes — not invoices.",
    approach: {
      headline: "How we work.",
      description:
        "Every engagement starts with real understanding — your market, your audience, your goals. We don't sell packages. We design solutions. And we stay accountable to what the work actually does.",
      principles: [
        {
          title: "Strategic before aesthetic.",
          description:
            "Beautiful work that's strategically wrong is expensive failure. We start every project by understanding what needs to be true — then make it look like it could be nothing else.",
        },
        {
          title: "Built to last, not to impress.",
          description:
            "We prioritize durable creative systems over one-time deliverables. Your brand should work on a Tuesday when no one is watching and you're not refreshing analytics.",
        },
        {
          title: "Transparent by default.",
          description:
            "You see everything we build, why we built it, and how to maintain it. No black boxes, no opaque processes, no dependency games.",
        },
      ],
    },
    values: [
      {
        icon: "Columns",
        title: "Clarity",
        description: "We communicate directly. No jargon, no hedging, no surprises.",
      },
      {
        icon: "Hammer",
        title: "Craft",
        description: "We take pride in the details — code quality, design precision, copy, and strategy.",
      },
      {
        icon: "Shield",
        title: "Reliability",
        description: "We build things that work. And when they don't, we fix them.",
      },
      {
        icon: "Expand",
        title: "Scale",
        description: "We design for where you're going, not just where you are today.",
      },
    ],
  },

  creators: {
    headline: "Built by people who care about craft.",
    subheadline:
      "Backstage was founded by designers and builders who got tired of watching great brands settle for average creative work. We started doing it ourselves first.",
    founders: [
      {
        name: "[[FOUNDER NAME]]",
        role: "Co-Founder & Creative Director",
        bio: "[[FOUNDER BIO — background, why they built Backstage, what they bring to the table.]]",
        tools: ["Figma", "Framer", "Next.js", "Webflow", "Notion"],
        favoriteAutomation: "A brand system so thorough the client's in-house team never needs us for day-to-day decisions.",
        image: null,
        linkedin: "[[LINKEDIN_URL]]",
        twitter: "[[TWITTER_URL]]",
      },
      {
        name: "[[FOUNDER NAME]]",
        role: "Co-Founder & Head of Strategy",
        bio: "[[FOUNDER BIO — background, why they built Backstage, what they bring to the table.]]",
        tools: ["Miro", "Notion", "Airtable", "Figma", "Google Analytics"],
        favoriteAutomation: "A positioning framework that made a client's sales team close 40% faster — because prospects already understood the value.",
        image: null,
        linkedin: "[[LINKEDIN_URL]]",
        twitter: "[[TWITTER_URL]]",
      },
    ],
    workbench: {
      headline: "The workbench.",
      description:
        "A look at the tools, platforms, and workflows we use to run Backstage and deliver client work. Everything we recommend, we've tested on ourselves first.",
      tools: [
        { name: "Figma", category: "Design", description: "Our primary design and prototyping environment." },
        { name: "Framer", category: "Web", description: "Rapid, motion-rich website builds for the right projects." },
        { name: "Next.js", category: "Development", description: "Every performance-critical website we build, including this one." },
        { name: "Vercel", category: "Infrastructure", description: "Zero-config deployments and edge performance." },
        { name: "Notion", category: "Docs", description: "Internal wiki, SOPs, and client handoff documentation." },
        { name: "Airtable", category: "Data", description: "Project tracking, content calendars, and client assets." },
        { name: "Beehiiv", category: "Email", description: "Newsletter infrastructure for clients who want to own their audience." },
        { name: "Miro", category: "Strategy", description: "Workshops, positioning exercises, and visual strategy mapping." },
      ],
    },
    timeline: [
      { year: "[[YEAR]]", milestone: "[[MILESTONE — founding, first client, key launch]]" },
      { year: "[[YEAR]]", milestone: "[[MILESTONE]]" },
      { year: "[[YEAR]]", milestone: "[[MILESTONE]]" },
    ],
  },

  work: {
    headline: "Work that speaks for itself.",
    description:
      "A selection of websites, brand systems, media campaigns, and strategies we've built for brands across industries.",
    caseStudies: [
      {
        slug: "dr-smoke-tobacco-vapor",
        title: "Dr. Smoke Tobacco & Vapor",
        category: "Website Creation",
        client: "Local Retail · Smoke & Vape Shop",
        image: "/work/dr-smoke.png",
        summary:
          "Built a production-grade website for Spring Hill's top-rated smoke shop — age-gated, fully SEO-optimized, and designed with a dark luxury aesthetic that has zero competition in the local market.",
        problem:
          "Dr. Smoke had no real web presence beyond a basic Google Business placeholder. Competitors had nothing premium — a clear opportunity to own the market online with a site that matched the quality of the in-store experience.",
        constraints: "Strict FDA tobacco compliance requirements, mandatory age verification gate, two-location business logic, and a tight turnaround.",
        workflow:
          "Researched FDA compliance requirements, competitor landscape, and customer reviews. Designed a dark luxury visual system with crimson accents. Built with Next.js, full age-gate, product catalog, hours, and location pages. Deployed to Vercel with SEO structured data.",
        tools: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
        outcome: {
          metrics: [
            { label: "Lighthouse Performance", value: "99" },
            { label: "Market position", value: "Only premium smoke shop site in Spring Hill" },
            { label: "FDA compliance", value: "Full age-gate + required disclaimers" },
          ],
        },
      },
      {
        slug: "mao-mao-ai",
        title: "Mao Mao AI",
        category: "Website Creation",
        client: "SaaS · AI Study Platform",
        image: "/work/mao-mao-ai.png",
        summary:
          "Designed and built a full-stack AI-powered study platform from scratch — math solver, writing humanizer, coin-based billing, and Stripe subscriptions — taken from zero to deploy-ready.",
        problem:
          "Students needed a single AI tool that could solve complex math step-by-step and rewrite AI-generated essays to sound authentically human — without juggling five different apps or paying for tools that only do one thing.",
        constraints: "Full-stack complexity: server-side billing integrity, Stripe webhook idempotency, Supabase RLS, Claude API token accounting, and zero TypeScript errors as a hard requirement.",
        workflow:
          "Architected the coin economy and billing rules first. Built auth, paywall middleware, and protected routes. Implemented the math solver and writing humanizer features with per-feature Claude API prompts. Integrated Stripe subscriptions with monthly coin resets. Hardened for production with full type safety.",
        tools: ["Next.js", "TypeScript", "Supabase", "Stripe", "Claude API", "Tailwind CSS", "Vercel"],
        outcome: {
          metrics: [
            { label: "Features shipped", value: "Math Solver · Writing Humanizer · Style Engine · Coin Economy" },
            { label: "TypeScript errors at launch", value: "0" },
            { label: "Status", value: "Deploy-ready" },
          ],
        },
      },
    ],
  },

  contact: {
    headline: "Let's build something worth talking about.",
    subheadline:
      "Tell us about your brand and what you're trying to achieve. We'll come prepared with a point of view.",
    form: {
      fields: {
        name: { label: "Full name", placeholder: "Your name" },
        email: { label: "Email", placeholder: "you@company.com" },
        company: { label: "Company", placeholder: "Your company name" },
        useCase: {
          label: "What are you working on?",
          placeholder: "e.g. New website, brand refresh, content strategy, all of the above...",
        },
        budget: {
          label: "Estimated budget",
          options: [
            { value: "under-5k", label: "Under $5,000" },
            { value: "5k-15k", label: "$5,000 – $15,000" },
            { value: "15k-50k", label: "$15,000 – $50,000" },
            { value: "50k-plus", label: "$50,000+" },
            { value: "unsure", label: "Not sure yet" },
          ],
        },
        timeline: {
          label: "Ideal start date",
          options: [
            { value: "asap", label: "As soon as possible" },
            { value: "1-month", label: "Within 1 month" },
            { value: "1-3-months", label: "1–3 months" },
            { value: "exploring", label: "Just exploring" },
          ],
        },
      },
      submitLabel: "Send message",
      successMessage: "We've received your message and will be in touch within one business day.",
      errorMessage: "Something went wrong. Please try again or email us directly.",
    },
    info: {
      email: "backstagemediacreation@gmail.com",
      schedulingLabel: "Prefer to book a call directly?",
      schedulingCta: "Schedule a 30-min discovery call",
      schedulingUrl: "[[CALENDLY_OR_CAL_URL]]",
    },
    compliance:
      "By submitting this form you agree to our Privacy Policy. We never share your data with third parties.",
  },

  footer: {
    tagline: "The team behind the brands you can't ignore.",
    columns: [
      {
        heading: "Services",
        links: [
          { label: "Website Creation", href: "/services/website-creation" },
          { label: "Media Marketing", href: "/services/media-marketing" },
          { label: "Digital Branding", href: "/services/digital-branding" },
          { label: "Creative Strategy", href: "/services/creative-strategy" },
        ],
      },
      {
        heading: "Company",
        links: [
          { label: "About Us", href: "/about" },
          { label: "Our Work", href: "/work" },
          { label: "Contact", href: "/contact" },
        ],
      },
      {
        heading: "Resources",
        links: [
          { label: "Start a Project", href: "/contact" },
          { label: "Privacy Policy", href: "/legal/privacy" },
          { label: "Terms of Service", href: "/legal/terms" },
        ],
      },
    ],
    social: [
      { platform: "LinkedIn", href: "[[LINKEDIN_URL]]", icon: "Linkedin" },
      { platform: "X (Twitter)", href: "[[TWITTER_URL]]", icon: "Twitter" },
      { platform: "Instagram", href: "[[INSTAGRAM_URL]]", icon: "Instagram" },
    ],
    legal: "© 2026 Backstage. All rights reserved.",
  },

  legal: {
    privacy: {
      title: "Privacy Policy",
      lastUpdated: "April 2026",
      intro:
        "Backstage ('we', 'our', 'us') is committed to protecting your personal information. This policy explains what data we collect, how we use it, and your rights.",
    },
    terms: {
      title: "Terms of Service",
      lastUpdated: "April 2026",
      intro:
        "These Terms of Service govern your use of the Backstage website and services. By accessing or using our services, you agree to these terms.",
    },
  },
} as const

export type CopyType = typeof COPY
