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
      "nabhi labs",
      "nabhi persona architecture",
      "private enterprise nabhi persona",
      "institutional knowledge ai",
      "context-aware enterprise intelligence",
      "context aware intelligence",
      "enterprise persona ai",
      "institutional knowledge",
      "knowledge intelligence",
      "private knowledge system",
      "decision ready ai",
      "enterprise knowledge layer",
      // Legacy / competing-term capture → Nabhi Persona
      "nabhi second brain",
      "private enterprise second brain",
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
      "agentic ai workflows",
      "multi-agent workflows",
      "agentic ai for knowledge retrieval",
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
  {
    id: "page-about",
    name: "About Nabhi Labs",
    url: "/about",
    description:
      "About Nabhi Labs—the company behind Nabhi Persona. Understanding first.",
    keywords: [
      "about nabhi labs",
      "about nabhi",
      "nabhi labs",
      "nabhi technology",
      "nabi labs",
      "nabi labs tech",
      "navi labs",
      "nabhilabs",
    ],
    schemaType: "Product",
  },
  {
    id: "page-philosophy",
    name: "Nabhi Labs Philosophy",
    url: "/philosophy",
    description:
      "Simplifying complex tech architectures—moving from complexity to architecture clarity.",
    keywords: [
      "nabhi labs philosophy",
      "simplifying complex tech architectures",
      "architecture clarity",
      "understanding before technology",
      "automating workflows with active intelligence",
    ],
    schemaType: "Product",
  },
  {
    id: "blog-agentic",
    name: "Agentic AI & Multi-Agent Workflows",
    url: "/blog/agentic-ai-multi-agent-workflows",
    description:
      "Deep dive: agentic AI for knowledge retrieval, multi-agent enterprise workflows, LangChain context patterns.",
    keywords: [
      "agentic ai for knowledge retrieval",
      "multi-agent workflows in enterprise systems",
      "langchain context retrieval frameworks",
      "agentic ai workflows",
      "langchain",
    ],
    schemaType: "Product",
  },
  {
    id: "page-services",
    name: "Services from Nabhi Labs",
    url: "/services",
    description:
      "Nabhi Labs services hub—Nabhi Persona, RAG, voice, healthcare AI.",
    keywords: ["nabhi labs services", "nabhi labs", "services"],
    schemaType: "Product",
  },
  {
    id: "page-contact",
    name: "Contact Nabhi Labs",
    url: "/contact",
    description: "Contact Nabhi Labs at hello@nabhilabs.com.",
    keywords: ["contact nabhi labs", "nabhi labs email", "hello@nabhilabs.com"],
    schemaType: "Product",
  },
  {
    id: "page-blog",
    name: "Blog from Nabhi Labs",
    url: "/blog",
    description: "Blog index for Nabhi Labs engineering and philosophy notes.",
    keywords: ["nabhi labs blog", "nabhi labs engineering", "nabhi labs ai"],
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
