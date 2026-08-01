import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://nabhilabs.com/sitemap.xml",
    host: "https://nabhilabs.com",
  };
}
