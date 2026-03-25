import type { MetadataRoute } from "next"

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://backstage.build"

const serviceSlugs = [
  "websites-ai-builder",
  "media-marketing-automations",
  "lead-finding-follow-ups",
  "email-automations",
  "integrations-custom-workflows",
]

const workSlugs = [
  "lead-automation-saas",
  "content-machine-agency",
  "ecommerce-website",
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/creators`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/work`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/legal/privacy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/legal/terms`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ]

  const serviceRoutes: MetadataRoute.Sitemap = serviceSlugs.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  const workRoutes: MetadataRoute.Sitemap = workSlugs.map((slug) => ({
    url: `${baseUrl}/work/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  return [...staticRoutes, ...serviceRoutes, ...workRoutes]
}
