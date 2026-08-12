/**
 * Branded + tech keyword map for Nabhi Labs.
 * Full cluster bank lives in `lib/keyword-bank.json` (built from nabhilabsKeysWord.txt).
 * Product name is Nabhi Persona; "Second Brain" is retained as a capture/legacy term.
 */

import keywordBank from "@/lib/keyword-bank.json";

export const brandKeywords = [
  "Nabhi Labs",
  "Nabhi Labs technology",
  "Nabhi technology",
  "Nabhi Labs philosophy",
  "Nabhi Persona",
  "Nabhi Labs AI",
  "Nabhi AI capabilities",
  "About Nabhi Labs",
  "About Nabhi",
  // Fuzzy / misspell capture (on-site + alternateName — not public H1 spam)
  "Nabi Labs",
  "Nabi Labs tech",
  "Navi Labs",
  "Navi Labs understanding",
  "Nabhi Lab",
  "Nabhilabs",
] as const;

export const techKeywords = {
  enterprise: [
    "private enterprise Nabhi Persona",
    "institutional knowledge AI",
    "context-aware enterprise intelligence",
    "enterprise knowledge management",
  ],
  architecture: [
    "agentic AI for knowledge retrieval",
    "multi-agent workflows in enterprise systems",
    "LangChain context retrieval frameworks",
    "agentic AI workflows",
  ],
  philosophy: [
    "simplifying complex tech architectures",
    "moving from complexity to architecture clarity",
    "automating workflows with active intelligence",
    "understanding before technology",
  ],
} as const;

/**
 * Primary SEO keywords provided by the business (30).
 * Used for page meta keywords / schema keyword fields (not as visible H1 spam).
 */
export const primaryKeywords = [
  "Nabhi Labs",
  "Artificial Intelligence",
  "Software Development",
  "Hospital Management System",
  "Second Brain",
  "AI Agents",
  "Product Development",
  "Website Development",
  "Mobile App Development",
  "Enterprise Software",
  "Digital Transformation",
  "Cloud Computing",
  "Data Analytics",
  "Knowledge Management",
  "Research & Innovation",
  "Healthcare",
  "Technology Services",
  "Technology Company",
  "Business Automation",
  "Productivity",
  "Cyber Security",
  "Patient Management",
  "Doctor Management",
  "Pharmacy Management",
  "Laboratory Management",
  "Hospital Administration",
  "Appointment Management",
  "AI Knowledge",
  "Software Engineering",
  "Startup Technology",
] as const;

/** Parsed clusters + flat keyword list from nabhilabsKeysWord.txt */
export const keywordClusters = keywordBank.clusters;
export const allBankKeywords = keywordBank.allKeywords as string[];

/** Map each cluster primary → canonical on-site page. */
export const clusterPageMap: Record<string, string> = {
  "NABHI Labs": "/",
  "Nabhi Labs": "/",
  "Artificial Intelligence": "/",
  "Hospital Management System": "/products/nabhi-cares",
  "NABHI Persona": "/products/nabhi-persona",
  "Nabhi Persona": "/products/nabhi-persona",
  "Second Brain": "/products/nabhi-persona",
  "Knowledge Management": "/services/enterprise-knowledge-management",
  "AI Agents": "/services/agentic-voice-workflows",
  "Patient Management": "/products/nabhi-cares",
  "Doctor Management": "/products/nabhi-cares",
  "Pharmacy Management": "/products/nabhi-cares",
  "Laboratory Management": "/products/nabhi-cares",
  "Hospital Administration": "/products/nabhi-cares",
  "Appointment Management": "/products/nabhi-cares",
  "Healthcare": "/products/nabhi-cares",
  "Software Engineering": "/services",
  "Software Development": "/services",
  "Product Development": "/services",
  "Website Development": "/services",
  "Mobile App Development": "/services",
  "Startup Technology": "/services",
  "Enterprise Software": "/services",
  "Technology Services": "/services",
  "Technology Company": "/about",
  "Business Automation": "/services",
  "Digital Transformation": "/services",
  "Cloud Computing": "/services",
  "Data Analytics": "/services",
  "Research & Innovation": "/philosophy",
  "Productivity": "/products/nabhi-persona",
  "Cyber Security": "/services",
  "AI Knowledge": "/products/nabhi-persona",
};

export function getClusterByPrimary(primary: string) {
  const needle = primary.toLowerCase();
  return keywordClusters.find(
    (cluster) =>
      cluster.primary.toLowerCase() === needle ||
      cluster.name.toLowerCase() === needle,
  );
}

/** Secondary keywords for a primary cluster (capped for meta / product tags). */
export function clusterKeywordsFor(
  primary: string,
  limit = 24,
): string[] {
  const cluster = getClusterByPrimary(primary);
  if (!cluster) return [];
  return cluster.keywords
    .filter((kw) => kw.toLowerCase() !== primary.toLowerCase())
    .slice(0, limit);
}

/** Resolve a search phrase to a site path via the keyword bank. */
export function resolveKeywordPath(query: string): string | undefined {
  const clean = query.toLowerCase().trim();
  if (!clean) return undefined;

  for (const [primary, page] of Object.entries(clusterPageMap)) {
    if (primary.toLowerCase() === clean) return page;
  }

  for (const cluster of keywordClusters) {
    const hit = cluster.keywords.some((kw) => {
      const k = kw.toLowerCase();
      return k === clean || k.includes(clean) || clean.includes(k);
    });
    if (hit) {
      return (
        clusterPageMap[cluster.primary] ||
        clusterPageMap[cluster.name] ||
        "/"
      );
    }
  }

  return undefined;
}

export const keywordPageMap = [
  {
    intent: "Navigational",
    keywords: ["Nabhi Labs", "About Nabhi", "Nabhi Persona", "Nabi Labs tech"],
    page: "/",
    also: "/about",
  },
  {
    intent: "Enterprise Solutions",
    keywords: [
      "private enterprise Nabhi Persona",
      "institutional knowledge AI",
      "context-aware enterprise intelligence",
      "Second Brain",
      "AI Knowledge",
    ],
    page: "/products/nabhi-persona",
  },
  {
    intent: "Healthcare / HMS",
    keywords: [
      "Hospital Management System",
      "Patient Management",
      "Doctor Management",
      "Pharmacy Management",
      "Laboratory Management",
      "Hospital Administration",
      "Appointment Management",
      "Healthcare",
    ],
    page: "/products/nabhi-cares",
  },
  {
    intent: "Technical Architecture",
    keywords: [
      "agentic AI workflows",
      "multi-agent workflows in enterprise systems",
      "LangChain context retrieval frameworks",
      "AI Agents",
    ],
    page: "/blog/agentic-ai-multi-agent-workflows",
    also: "/services/agentic-voice-workflows",
  },
  {
    intent: "Services",
    keywords: [
      "Software Development",
      "Software Engineering",
      "Product Development",
      "Website Development",
      "Mobile App Development",
      "Startup Technology",
      "Enterprise Software",
    ],
    page: "/services",
  },
  {
    intent: "Philosophical",
    keywords: [
      "simplifying complex tech systems",
      "architecture clarity",
      "Nabhi Labs philosophy",
      "Research & Innovation",
    ],
    page: "/philosophy",
  },
] as const;

/** Brand alternate names for Organization schema (misspell / fuzzy defence). */
export const brandAlternateNames = [
  "Nabhi",
  "Nabhilabs",
  "Nabi Labs",
  "Navi Labs",
  "Nabhi Lab",
  "NABHI",
  "NABHI Labs",
  "NABHI Studio",
  "Nabhi Studio",
  "NABHI Technologies",
] as const;
