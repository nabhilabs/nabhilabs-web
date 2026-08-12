/** Canonical public paths — products vs services. */
export const routes = {
  home: "/",
  about: "/about",
  contact: "/contact",
  services: "/services",
  philosophy: "/philosophy",
  blog: "/blog",
  caseStudies: "/case-studies",
  persona: "/products/nabhi-persona",
  cares: "/products/nabhi-cares",
  knowledge: "/services/enterprise-knowledge-management",
  rag: "/services/rag-engineering",
  voice: "/services/agentic-voice-workflows",
  ragChecklist: "/resources/rag-evaluation-checklist",
  personaPlaybook: "/resources/enterprise-nabhi-persona-playbook",
} as const;

export type AppRoute = (typeof routes)[keyof typeof routes];
