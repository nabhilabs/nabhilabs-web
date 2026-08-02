export type Product = {
  id: string;
  name: string;
  url: string;
  description: string;
  keywords: string[];
  schemaType: "SoftwareApplication" | "Service" | "Product";
};

/**
 * Searchable offerings — target words for on-site search and JSON-LD keywords.
 */
export const products: Product[] = [
  {
    id: "prod-nabhi-persona",
    name: "Nabhi Persona",
    url: "/solutions/nabhi-persona",
    description:
      "Enterprise intelligence layer that turns institutional knowledge into active, private, decision-ready understanding.",
    keywords: [
      "nabhi persona",
      "enterprise persona ai",
      "institutional knowledge",
      "knowledge intelligence",
      "private knowledge system",
      "decision ready ai",
      "enterprise knowledge layer",
      "context aware intelligence",
    ],
    schemaType: "SoftwareApplication",
  },
  {
    id: "prod-ekm",
    name: "Enterprise Knowledge Management",
    url: "/solutions/enterprise-knowledge-management",
    description:
      "Knowledge platforms that reconnect fragmented wikis, drives, and tribal memory into usable clarity.",
    keywords: [
      "enterprise knowledge management",
      "knowledge management platform",
      "institutional knowledge base",
      "knowledge base",
      "wiki replacement",
      "document organizer",
      "knowledge graph",
    ],
    schemaType: "SoftwareApplication",
  },
  {
    id: "prod-rag",
    name: "Custom RAG Engineering",
    url: "/services/rag-engineering",
    description:
      "Secure, custom Retrieval-Augmented Generation services for enterprise databases and documents.",
    keywords: [
      "rag",
      "rag engineering",
      "custom rag implementation",
      "ai search",
      "vector search",
      "llm memory",
      "data retrieval",
      "retrieval augmented generation",
      "enterprise rag",
    ],
    schemaType: "Service",
  },
  {
    id: "prod-voice",
    name: "Agentic Voice Workflows",
    url: "/services/agentic-voice-workflows",
    description:
      "Conversational AI systems that connect natural conversation to useful action inside enterprise tools.",
    keywords: [
      "agentic voice",
      "voice workflow",
      "conversational ai",
      "voice agents",
      "enterprise voice ai",
      "tool calling agents",
    ],
    schemaType: "Service",
  },
  {
    id: "prod-healthcare",
    name: "Healthcare AI Integration",
    url: "/industries/healthcare-ai",
    description:
      "AI integration for healthcare systems—knowledge, RAG, and workflows with careful compliance posture.",
    keywords: [
      "healthcare ai",
      "ai for healthcare",
      "clinical knowledge management",
      "hipaa aware rag",
      "hospital operations ai",
    ],
    schemaType: "Service",
  },
  {
    id: "res-rag-checklist",
    name: "RAG Evaluation Checklist",
    url: "/resources/rag-evaluation-checklist",
    description:
      "Practical checklist for groundedness, retrieval quality, permissions, and production readiness.",
    keywords: [
      "rag evaluation",
      "rag checklist",
      "rag groundedness",
      "retrieval metrics",
    ],
    schemaType: "Product",
  },
  {
    id: "res-persona-playbook",
    name: "Enterprise Nabhi Persona Playbook",
    url: "/resources/enterprise-nabhi-persona-playbook",
    description:
      "How Nabhi Labs sequences Nabhi Persona work—understanding first, technology second.",
    keywords: [
      "nabhi persona playbook",
      "enterprise persona playbook",
      "knowledge system playbook",
    ],
    schemaType: "Product",
  },
  {
    id: "res-case-studies",
    name: "Case Study Patterns",
    url: "/case-studies",
    description:
      "Anonymized engagement patterns for knowledge systems, RAG hardening, and voice agents.",
    keywords: [
      "ai case study",
      "rag case study",
      "knowledge platform case study",
    ],
    schemaType: "Product",
  },
];

export function searchProducts(query: string): Product[] {
  const cleanQuery = query.toLowerCase().trim();
  if (!cleanQuery) return [];

  const tokens = cleanQuery.split(/\s+/).filter(Boolean);

  return products.filter((product) => {
    const haystack = [
      product.name,
      product.description,
      ...product.keywords,
    ]
      .join(" ")
      .toLowerCase();

    const matchesText =
      product.name.toLowerCase().includes(cleanQuery) ||
      product.description.toLowerCase().includes(cleanQuery);

    const matchesKeywords = product.keywords.some(
      (keyword) =>
        keyword.toLowerCase().includes(cleanQuery) ||
        cleanQuery.includes(keyword.toLowerCase()) ||
        tokens.every((token) => keyword.toLowerCase().includes(token)),
    );

    const matchesTokens = tokens.every((token) => haystack.includes(token));

    return matchesText || matchesKeywords || matchesTokens;
  });
}

export function getProductByPath(path: string): Product | undefined {
  return products.find((product) => product.url === path);
}

export function productKeywordsCsv(product: Product): string {
  return [product.name, ...product.keywords].join(", ");
}
