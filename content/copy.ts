// content/copy.ts
// CONTRACT: Single source of truth for all marketing copy.
// Agent: COPYWRITING AGENT v1 | Updated: 2026-03-24

export const COPY = {
  brand: {
    name: "Backstage",
    tagline: "Automation working quietly backstage.",
    description:
      "Backstage designs, builds, and runs the workflows behind your business—from websites and media to lead finding, follow-ups, and everyday email.",
    shortDescription: "Your AI-powered operations team.",
  },

  nav: {
    links: [
      { label: "Services", href: "/services" },
      { label: "Our Work", href: "/work" },
      { label: "About", href: "/about" },
      { label: "Creators", href: "/creators" },
    ],
    cta: { label: "Contact Sales", href: "/contact" },
  },

  home: {
    hero: {
      headline: "Automation working quietly backstage.",
      subheadline:
        "Backstage designs, builds, and runs the workflows behind your business—from websites and media to lead finding, follow-ups, and everyday email.",
      primaryCta: { label: "Contact Sales", href: "/contact" },
      secondaryCta: { label: "Get a Quote", href: "/contact#quote" },
      trustLine: "Trusted by ambitious teams building smarter operations.",
    },

    trustBar: {
      label: "Integrated with the tools you already use",
      logos: [
        { name: "HubSpot", placeholder: true },
        { name: "Salesforce", placeholder: true },
        { name: "Zapier", placeholder: true },
        { name: "Make", placeholder: true },
        { name: "Slack", placeholder: true },
        { name: "Notion", placeholder: true },
        { name: "Google Workspace", placeholder: true },
        { name: "Airtable", placeholder: true },
      ],
    },

    pillars: {
      label: "What we do",
      headline: "Four ways Backstage moves your business forward.",
      items: [
        {
          icon: "Zap",
          title: "Launch faster.",
          description:
            "We build production-grade websites and AI-powered tools that go live in weeks, not months. No agency bottlenecks. Just clean, performant products.",
          color: "gold",
        },
        {
          icon: "Target",
          title: "Never miss a lead.",
          description:
            "Automated prospecting, qualification, and follow-up sequences that route the right leads to the right person at the right time—around the clock.",
          color: "aegean",
        },
        {
          icon: "Radio",
          title: "Market on autopilot.",
          description:
            "Content calendars, social publishing, email campaigns, and ad reporting all orchestrated without manual effort. Your brand, in motion.",
          color: "olive",
        },
        {
          icon: "BarChart3",
          title: "Scale ops, not headcount.",
          description:
            "Custom workflow automation that handles the repetitive work—data entry, reporting, approvals, notifications—so your team focuses on decisions.",
          color: "gold",
        },
      ],
    },

    howItWorks: {
      label: "The process",
      headline: "Three steps from idea to running system.",
      steps: [
        {
          number: "01",
          title: "Discover",
          description:
            "We map your current operations, identify friction points, and define the workflows that will deliver the most immediate value.",
        },
        {
          number: "02",
          title: "Orchestrate",
          description:
            "We design and build the automation stack—connecting your tools, writing the logic, and creating the interfaces your team will actually use.",
        },
        {
          number: "03",
          title: "Run",
          description:
            "Your systems go live. We monitor, tune, and expand as your needs evolve. You get a backstage crew that never clocks out.",
        },
      ],
    },

    features: {
      label: "Capabilities",
      headline: "Everything your operations need. Nothing you don't.",
      items: [
        {
          icon: "Globe",
          title: "Website & AI Builder",
          description: "Fast, beautiful websites with built-in AI tools and automations.",
        },
        {
          icon: "Megaphone",
          title: "Media Automation",
          description: "Schedule, publish, and report across every channel without lifting a finger.",
        },
        {
          icon: "UserSearch",
          title: "Lead Intelligence",
          description: "Find, score, and route leads from any source into your CRM automatically.",
        },
        {
          icon: "Mail",
          title: "Email Automation",
          description: "Drip sequences, transactional email, and newsletters—designed and deployed.",
        },
        {
          icon: "GitBranch",
          title: "Custom Workflows",
          description: "Connect any tool, trigger any action, and automate any process in your stack.",
        },
        {
          icon: "ShieldCheck",
          title: "Reliable Infrastructure",
          description: "Built on enterprise-grade platforms. Uptime SLAs, audit logs, and monitoring included.",
        },
      ],
    },

    integrations: {
      label: "Integrations",
      headline: "Plugs into what you already use.",
      description:
        "Backstage builds on the tools your team trusts. We handle the wiring so your stack works as one unified system.",
      items: [
        "HubSpot", "Salesforce", "Zapier", "Make", "n8n",
        "Slack", "Notion", "Airtable", "Google Workspace",
        "Stripe", "Shopify", "Webflow", "OpenAI", "Anthropic",
        "Mailchimp", "ActiveCampaign", "Calendly", "Twilio",
      ],
    },

    testimonials: {
      label: "Client stories",
      headline: "Built for the teams that run on results.",
      items: [
        {
          quote:
            "Backstage cut our lead response time from 4 hours to under 3 minutes. The pipeline practically runs itself now.",
          author: "[[CLIENT NAME]]",
          role: "Head of Growth",
          company: "[[COMPANY NAME]]",
          avatar: null,
        },
        {
          quote:
            "They built our entire content operation in 6 weeks. We went from ad-hoc posting to a fully automated media machine.",
          author: "[[CLIENT NAME]]",
          role: "Marketing Director",
          company: "[[COMPANY NAME]]",
          avatar: null,
        },
        {
          quote:
            "The website they delivered performed out of the box—99 Lighthouse, mobile-perfect, and it sells while we sleep.",
          author: "[[CLIENT NAME]]",
          role: "Founder & CEO",
          company: "[[COMPANY NAME]]",
          avatar: null,
        },
      ],
    },

    pricing: {
      label: "Pricing",
      headline: "Transparent pricing for every stage.",
      description:
        "Fixed-scope projects and retainers available. Every engagement starts with a discovery call.",
      tiers: [
        {
          name: "Starter",
          price: "[[PLACEHOLDER]]",
          period: "project",
          description: "One focused automation or a single-page website.",
          features: [
            "1 core workflow or landing page",
            "Integration with up to 3 tools",
            "2 rounds of revisions",
            "30-day post-launch support",
          ],
          cta: { label: "Get a Quote", href: "/contact#quote" },
          featured: false,
        },
        {
          name: "Growth",
          price: "[[PLACEHOLDER]]",
          period: "project",
          description: "Multi-channel automation stack for scaling teams.",
          features: [
            "Full website + up to 4 automations",
            "Unlimited tool integrations",
            "Lead gen + email sequences",
            "Analytics dashboard setup",
            "60-day post-launch support",
          ],
          cta: { label: "Contact Sales", href: "/contact" },
          featured: true,
        },
        {
          name: "Enterprise",
          price: "Custom",
          period: "retainer",
          description: "Ongoing operations partner for complex orgs.",
          features: [
            "Unlimited workflows & websites",
            "Dedicated Backstage team",
            "SLA-backed uptime monitoring",
            "Monthly strategy sessions",
            "Priority support",
          ],
          cta: { label: "Contact Sales", href: "/contact" },
          featured: false,
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
            "We partner with growth-stage startups, SMBs, and enterprise teams who need reliable automation without building an in-house ops team. If your business runs on digital workflows, we can improve them.",
        },
        {
          question: "How long does a typical project take?",
          answer:
            "A focused automation project typically takes 2–4 weeks. A full website with integrated workflows runs 4–8 weeks. We'll scope your specific project during the discovery call.",
        },
        {
          question: "Do we need to have our tools already picked?",
          answer:
            "No. Part of our discovery process is recommending the right stack for your goals and budget. If you already have tools, we work within your existing ecosystem.",
        },
        {
          question: "What happens after launch?",
          answer:
            "Every project includes post-launch support. We monitor your automations, fix edge cases, and document everything so your team is never dependent on us for day-to-day operations.",
        },
        {
          question: "Can we start small and expand?",
          answer:
            "Absolutely. Most clients start with one workflow or a single website and expand into a full operations stack over time. Our systems are designed to grow with you.",
        },
        {
          question: "How is Backstage different from a traditional agency?",
          answer:
            "We don't just design and hand off. We build systems that run autonomously and stay accountable to outcomes, not deliverables. Think of us as an embedded ops partner, not a vendor.",
        },
      ],
    },

    finalCta: {
      headline: "Let's design your backstage.",
      description:
        "Book a discovery call and we'll map out exactly what your operations need to scale with confidence.",
      primaryCta: { label: "Contact Sales", href: "/contact" },
      secondaryCta: { label: "Get a Quote", href: "/contact#quote" },
    },
  },

  services: {
    headline: "Services built around outcomes.",
    description:
      "We build, integrate, and run the operational systems that keep your business moving. Each service is scoped to your goals and delivered end-to-end.",
    items: [
      {
        slug: "websites-ai-builder",
        title: "Websites & AI Builder",
        shortTitle: "Websites",
        icon: "Globe",
        tagline: "Fast, high-converting websites with AI built in.",
        description:
          "We design and develop production-grade marketing websites, landing pages, and web applications. Every build includes SEO optimization, performance tuning, and optional AI-powered features—chatbots, recommendation engines, and dynamic personalization.",
        outcomes: [
          "Launch in weeks, not months",
          "Lighthouse 90+ across all categories",
          "AI-powered features that convert",
          "CMS or headless—your choice",
        ],
        whatYouGet: [
          "Custom design system aligned to your brand",
          "Next.js or Webflow development",
          "On-page SEO and structured data",
          "Speed optimizations and CDN setup",
          "Analytics and conversion tracking",
          "30–60 day post-launch support",
        ],
        integrations: ["Webflow", "Next.js", "Vercel", "Cloudflare", "OpenAI", "Anthropic"],
        color: "aegean",
      },
      {
        slug: "media-marketing-automations",
        title: "Media Marketing Automations",
        shortTitle: "Media",
        icon: "Megaphone",
        tagline: "Your content machine, built and running on autopilot.",
        description:
          "We build and run automated content pipelines that publish, schedule, and report across every channel. From social media calendars to email newsletters and paid ad reporting, your marketing runs without manual overhead.",
        outcomes: [
          "Consistent presence across every channel",
          "Hours saved every week per team member",
          "Performance data surfaced automatically",
          "Content repurposing at scale",
        ],
        whatYouGet: [
          "Social scheduling pipeline (LinkedIn, X, Instagram)",
          "Newsletter template and automation setup",
          "AI-assisted content drafting workflow",
          "Cross-channel analytics dashboard",
          "Ad performance reporting automation",
          "Content calendar system in Notion/Airtable",
        ],
        integrations: ["Buffer", "Hootsuite", "Mailchimp", "ActiveCampaign", "Meta Ads", "Google Ads"],
        color: "olive",
      },
      {
        slug: "lead-finding-follow-ups",
        title: "Lead Finding & Follow-ups",
        shortTitle: "Lead Gen",
        icon: "UserSearch",
        tagline: "Find, qualify, and follow up—without lifting a finger.",
        description:
          "We build automated prospecting and follow-up systems that identify your ideal customers, enrich their data, score them, and route qualified leads into your pipeline with personalized outreach sequences—all while you focus on closing.",
        outcomes: [
          "Lead response time under 5 minutes",
          "Qualified pipeline without manual prospecting",
          "Personalized outreach at scale",
          "Zero leads falling through the cracks",
        ],
        whatYouGet: [
          "ICP definition and targeting strategy",
          "Lead sourcing automation (LinkedIn, databases)",
          "Data enrichment pipeline",
          "Lead scoring model and CRM routing",
          "Personalized email sequence setup",
          "Follow-up trigger automation",
        ],
        integrations: ["HubSpot", "Salesforce", "Apollo", "Clay", "Instantly", "Lemlist"],
        color: "gold",
      },
      {
        slug: "email-automations",
        title: "Email Automations",
        shortTitle: "Email",
        icon: "Mail",
        tagline: "Email that works while you sleep.",
        description:
          "We design, write, and deploy email automation systems—from onboarding sequences and drip campaigns to transactional triggers and re-engagement flows. Every sequence is built for deliverability, personalization, and measurable conversion.",
        outcomes: [
          "Higher open and click rates",
          "Automated nurture without manual sends",
          "Deliverability optimized from day one",
          "Revenue-attributed email reporting",
        ],
        whatYouGet: [
          "Email strategy and sequence map",
          "Template design (on-brand, responsive)",
          "Automation logic and trigger setup",
          "List segmentation and tagging system",
          "A/B testing framework",
          "Deliverability audit and SPF/DKIM/DMARC setup",
        ],
        integrations: ["Mailchimp", "Klaviyo", "ActiveCampaign", "Drip", "Resend", "SendGrid"],
        color: "aegean",
      },
      {
        slug: "integrations-custom-workflows",
        title: "Integrations & Custom Workflows",
        shortTitle: "Workflows",
        icon: "GitBranch",
        tagline: "Make every tool in your stack talk to every other.",
        description:
          "We design and build custom workflow automations that connect your entire software stack—eliminating manual data entry, automating approvals, syncing records, and triggering actions across tools the moment they're needed.",
        outcomes: [
          "Zero data silos between tools",
          "Hours saved on manual work every week",
          "Real-time data flowing where it's needed",
          "Scalable workflows that grow with you",
        ],
        whatYouGet: [
          "Full ops audit and workflow mapping",
          "Custom integration architecture",
          "Zapier / Make / n8n build and deployment",
          "API and webhook custom development",
          "Error handling and monitoring setup",
          "Documentation and team training",
        ],
        integrations: ["Zapier", "Make", "n8n", "HubSpot", "Slack", "Notion", "Airtable", "Google Workspace"],
        color: "olive",
      },
    ],
  },

  about: {
    headline: "Craft meets clarity.",
    subheadline:
      "We believe the best operations are the ones no one notices—running quietly, reliably, invisibly backstage.",
    mission:
      "Backstage exists to give ambitious businesses the operational infrastructure of a Fortune 500 without the headcount. We build systems that move with you: automating the routine, amplifying the strategic, and freeing your team to do their best work.",
    approach: {
      headline: "How we work.",
      description:
        "Every engagement starts with understanding—your tools, your team, your goals. We don't sell packages. We design solutions. And we stay accountable to outcomes, not invoices.",
      principles: [
        {
          title: "Human taste, autonomous systems.",
          description:
            "Every automation we build is designed with care. We obsess over logic, edge cases, and the moments where automation meets human judgment.",
        },
        {
          title: "Built to last, not to impress.",
          description:
            "We prioritize reliable, documented systems over flashy demos. Your operations should work on a Tuesday when no one is watching.",
        },
        {
          title: "Transparent by default.",
          description:
            "You see everything we build, why we built it, and how to maintain it. There are no black boxes at Backstage.",
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
        description: "We take pride in the details—code quality, workflow logic, copy, and design.",
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
    headline: "Built by people who automate everything.",
    subheadline:
      "Backstage was founded by operators who got tired of building the same manual processes over and over. We automated our own work first—then started doing it for others.",
    founders: [
      {
        name: "[[FOUNDER NAME]]",
        role: "Co-Founder & CEO",
        bio: "[[FOUNDER BIO — background, why they built Backstage, what they bring to the table.]]",
        tools: ["n8n", "Make", "OpenAI", "Vercel", "HubSpot"],
        favoriteAutomation: "A lead routing system that cut response time from 4 hours to 4 minutes.",
        image: null,
        linkedin: "[[LINKEDIN_URL]]",
        twitter: "[[TWITTER_URL]]",
      },
      {
        name: "[[FOUNDER NAME]]",
        role: "Co-Founder & CTO",
        bio: "[[FOUNDER BIO — background, why they built Backstage, what they bring to the table.]]",
        tools: ["Next.js", "TypeScript", "Anthropic API", "Zapier", "Airtable"],
        favoriteAutomation: "An AI-assisted content pipeline that publishes 30 pieces a month from a single brief.",
        image: null,
        linkedin: "[[LINKEDIN_URL]]",
        twitter: "[[TWITTER_URL]]",
      },
    ],
    workbench: {
      headline: "The workbench.",
      description:
        "A look at the tools, systems, and workflows we use to run Backstage every day. Everything we build for clients, we've tested on ourselves first.",
      tools: [
        { name: "n8n", category: "Automation", description: "Our primary workflow orchestration tool." },
        { name: "Make", category: "Automation", description: "Rapid prototyping and client-facing flows." },
        { name: "Next.js", category: "Development", description: "Every website we build, including this one." },
        { name: "Vercel", category: "Infrastructure", description: "Zero-config deployments and edge functions." },
        { name: "Airtable", category: "Data", description: "Client project tracking and content calendars." },
        { name: "Notion", category: "Docs", description: "Internal wiki, SOPs, and client handoff docs." },
        { name: "OpenAI / Anthropic", category: "AI", description: "LLMs powering our AI-assisted workflows." },
        { name: "Resend", category: "Email", description: "Reliable transactional and marketing email." },
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
      "A selection of systems we've built, workflows we've orchestrated, and results we've delivered for clients across industries.",
    caseStudies: [
      {
        slug: "lead-automation-saas",
        title: "[[CLIENT/PROJECT NAME]]",
        category: "Lead Automation",
        client: "[[CLIENT — e.g., B2B SaaS Startup]]",
        image: null,
        summary: "Cut lead response time from 4 hours to under 3 minutes through an end-to-end automation stack.",
        problem:
          "[[DESCRIBE THE CLIENT PROBLEM — what was breaking, what was slow, what was costing money or leads]]",
        constraints: "[[KEY CONSTRAINTS — timeline, existing tools, budget]]",
        workflow:
          "[[DESCRIBE THE WORKFLOW BUILT — step by step what we automated, integrated, and deployed]]",
        tools: ["HubSpot", "Clay", "Instantly", "Zapier", "Slack"],
        outcome: {
          metrics: [
            { label: "Lead response time", before: "4 hours", after: "< 3 minutes" },
            { label: "Monthly qualified leads", before: "[[N]]", after: "[[N+X]]" },
            { label: "Hours saved per week", value: "[[N]] hours" },
          ],
          quote: {
            text: "[[CLIENT TESTIMONIAL QUOTE]]",
            author: "[[NAME]]",
            role: "[[TITLE]], [[COMPANY]]",
          },
        },
      },
      {
        slug: "content-machine-agency",
        title: "[[CLIENT/PROJECT NAME]]",
        category: "Media Automation",
        client: "[[CLIENT — e.g., Digital Marketing Agency]]",
        image: null,
        summary: "Built an automated content pipeline publishing 30+ pieces per month across 4 channels from a single content brief.",
        problem: "[[DESCRIBE THE CLIENT PROBLEM]]",
        constraints: "[[KEY CONSTRAINTS]]",
        workflow: "[[DESCRIBE THE WORKFLOW BUILT]]",
        tools: ["Make", "Notion", "Buffer", "Mailchimp", "OpenAI"],
        outcome: {
          metrics: [
            { label: "Content pieces per month", before: "6", after: "30+" },
            { label: "Hours saved per week", value: "12 hours" },
            { label: "Newsletter open rate", value: "[[N]]%" },
          ],
          quote: {
            text: "[[CLIENT TESTIMONIAL QUOTE]]",
            author: "[[NAME]]",
            role: "[[TITLE]], [[COMPANY]]",
          },
        },
      },
      {
        slug: "ecommerce-website",
        title: "[[CLIENT/PROJECT NAME]]",
        category: "Website & AI Builder",
        client: "[[CLIENT — e.g., DTC E-commerce Brand]]",
        image: null,
        summary: "Designed and launched a high-performance marketing site achieving 97 Lighthouse with AI-powered product recommendations.",
        problem: "[[DESCRIBE THE CLIENT PROBLEM]]",
        constraints: "[[KEY CONSTRAINTS]]",
        workflow: "[[DESCRIBE THE BUILD AND INTEGRATION]]",
        tools: ["Next.js", "Vercel", "Shopify", "Anthropic", "Resend"],
        outcome: {
          metrics: [
            { label: "Lighthouse Performance", value: "97" },
            { label: "Page load time", value: "< 1.2s" },
            { label: "Conversion rate lift", value: "+[[N]]%" },
          ],
          quote: {
            text: "[[CLIENT TESTIMONIAL QUOTE]]",
            author: "[[NAME]]",
            role: "[[TITLE]], [[COMPANY]]",
          },
        },
      },
    ],
  },

  contact: {
    headline: "Let's design your backstage.",
    subheadline:
      "Tell us about your business and where automation can help most. We'll come prepared with ideas.",
    form: {
      fields: {
        name: { label: "Full name", placeholder: "Your name" },
        email: { label: "Work email", placeholder: "you@company.com" },
        company: { label: "Company", placeholder: "Your company name" },
        useCase: {
          label: "What do you need automated?",
          placeholder: "e.g. Lead follow-ups, content publishing, onboarding flows...",
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
      submitLabel: "Send enquiry",
      successMessage: "We've received your enquiry and will be in touch within one business day.",
      errorMessage: "Something went wrong. Please try again or email us directly.",
    },
    info: {
      email: "hello@backstage.build",
      schedulingLabel: "Prefer to book a call directly?",
      schedulingCta: "Schedule a 30-min discovery call",
      schedulingUrl: "[[CALENDLY_OR_CAL_URL]]",
    },
    compliance:
      "By submitting this form you agree to our Privacy Policy. We never share your data with third parties.",
  },

  footer: {
    tagline: "Automation working quietly backstage.",
    columns: [
      {
        heading: "Solutions",
        links: [
          { label: "Websites & AI Builder", href: "/services/websites-ai-builder" },
          { label: "Media Automation", href: "/services/media-marketing-automations" },
          { label: "Lead Automation", href: "/services/lead-finding-follow-ups" },
          { label: "Email Automations", href: "/services/email-automations" },
          { label: "Custom Workflows", href: "/services/integrations-custom-workflows" },
        ],
      },
      {
        heading: "Company",
        links: [
          { label: "About Us", href: "/about" },
          { label: "The Creators", href: "/creators" },
          { label: "Our Work", href: "/work" },
          { label: "Contact", href: "/contact" },
        ],
      },
      {
        heading: "Resources",
        links: [
          { label: "Get a Quote", href: "/contact#quote" },
          { label: "Privacy Policy", href: "/legal/privacy" },
          { label: "Terms of Service", href: "/legal/terms" },
        ],
      },
    ],
    social: [
      { platform: "LinkedIn", href: "[[LINKEDIN_URL]]", icon: "Linkedin" },
      { platform: "X (Twitter)", href: "[[TWITTER_URL]]", icon: "Twitter" },
      { platform: "GitHub", href: "[[GITHUB_URL]]", icon: "Github" },
    ],
    legal: "© 2026 Backstage. All rights reserved.",
  },

  legal: {
    privacy: {
      title: "Privacy Policy",
      lastUpdated: "March 24, 2026",
      intro:
        "Backstage ('we', 'our', 'us') is committed to protecting your personal information. This policy explains what data we collect, how we use it, and your rights.",
    },
    terms: {
      title: "Terms of Service",
      lastUpdated: "March 24, 2026",
      intro:
        "These Terms of Service govern your use of the Backstage website and services. By accessing or using our services, you agree to these terms.",
    },
  },
} as const;

export type CopyType = typeof COPY;
