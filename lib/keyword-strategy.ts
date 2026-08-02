/**
 * Branded + tech keyword map for Nabhi Labs.
 * Product name is Nabhi Persona (not "Second Brain").
 * Fuzzy/misspell entries help on-site search and schema alternateName signals.
 */

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
    ],
    page: "/solutions/nabhi-persona",
  },
  {
    intent: "Technical Architecture",
    keywords: [
      "agentic AI workflows",
      "multi-agent workflows in enterprise systems",
      "LangChain context retrieval frameworks",
    ],
    page: "/blog/agentic-ai-multi-agent-workflows",
    also: "/services/agentic-voice-workflows",
  },
  {
    intent: "Philosophical",
    keywords: [
      "simplifying complex tech systems",
      "architecture clarity",
      "Nabhi Labs philosophy",
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
] as const;
