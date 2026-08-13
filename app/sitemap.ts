import type { MetadataRoute } from "next";
import { allContentPages, caseStudyIndex } from "@/lib/pillar-pages";
import { SITE_URL } from "@/lib/site";

const siteUrl = SITE_URL;
const now = new Date("2026-08-13");

const extraPages = [
  "/about",
  "/services",
  "/contact",
  "/philosophy",
  "/blog",
  "/blog/agentic-ai-multi-agent-workflows",
  "/blog/how-nabhi-labs-builds-understanding-into-technology",
  "/llms.txt",
  "/llm.txt",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...extraPages.map((path) => ({
      url: `${siteUrl}${path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority:
        path === "/about" || path === "/services" || path === "/contact"
          ? 0.9
          : 0.75,
    })),
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
