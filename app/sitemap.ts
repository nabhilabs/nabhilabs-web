import type { MetadataRoute } from "next";
import { allContentPages, caseStudyIndex } from "@/lib/pillar-pages";

const siteUrl = "https://nabhilabs.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date("2026-08-02");

  return [
    {
      url: `${siteUrl}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...allContentPages.map((page) => ({
      url: `${siteUrl}${page.path}`,
      lastModified: new Date(page.dateModified),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    {
      url: `${siteUrl}${caseStudyIndex.path}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
