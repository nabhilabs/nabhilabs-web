import { routes } from "@/lib/routes";

export type ServiceCapability = {
  title: string;
  copy: string;
  icon:
    | "library"
    | "shield"
    | "search"
    | "quote"
    | "workflow"
    | "refresh"
    | "clipboard"
    | "layers"
    | "gauge"
    | "lock"
    | "activity"
    | "mic"
    | "hand"
    | "phone"
    | "list";
};

export type ServiceLandingContent = {
  path: string;
  badge: string;
  highlight: string;
  proofLeft: string;
  proofRight: string;
  asideTitle: string;
  asideCopy: string;
  gridHeading: string;
  gridLede: string;
  capabilities: ServiceCapability[];
  midHeading: string;
  splitLabel: string;
  splitHeading: string;
  splitImage: string;
  splitImageAlt: string;
  relatedProduct: { href: string; label: string };
};

export const serviceLandings: ServiceLandingContent[] = [
  {
    path: routes.knowledge,
    badge: "Service — Knowledge systems",
    highlight: "clarity",
    proofLeft: "Understanding before tools",
    proofRight: "Reply within 24 hours",
    asideTitle: "Knowledge service",
    asideCopy:
      "Reconnect wikis, drives, and tribal memory into a picture people can actually use.",
    gridHeading: "What a durable knowledge platform includes",
    gridLede:
      "Governance, taxonomy, and retrieval designed together—so search rewards truth, not volume.",
    capabilities: [
      {
        title: "Governed sources",
        copy: "Connectors to the tools teams already use, with clear owners and forbidden stores named up front.",
        icon: "library",
      },
      {
        title: "Ownership & taxonomy",
        copy: "Duplicates collapse. Every collection has an owner. Answers have a definition of done.",
        icon: "layers",
      },
      {
        title: "Permission-aware search",
        copy: "People retrieve only what they could open in the source system—no leaked chunks.",
        icon: "lock",
      },
      {
        title: "Citations & evidence",
        copy: "Useful answers point back to sources people recognize. Fluency without evidence is a failure.",
        icon: "quote",
      },
      {
        title: "Workflows in place",
        copy: "Insight lands in the tools teams already open—not another destination to remember.",
        icon: "workflow",
      },
      {
        title: "Continuous refinement",
        copy: "The corpus stays current from real use. A one-time migration is not the engagement.",
        icon: "refresh",
      },
    ],
    midHeading: "Start with the knowledge that already exists.",
    splitLabel: "How we work",
    splitHeading:
      "Observe how work actually moves, then build the platform as a consequence.",
    splitImage: "/assets/our-approach/understand.png",
    splitImageAlt: "Understanding before technology — Nabhi Labs approach",
    relatedProduct: { href: routes.persona, label: "See Nabhi Persona" },
  },
  {
    path: routes.rag,
    badge: "Service — RAG engineering",
    highlight: "grounded answers",
    proofLeft: "Evaluations from day one",
    proofRight: "Permissions travel with chunks",
    asideTitle: "Retrieval service",
    asideCopy:
      "Production RAG is evaluation, hybrid search, and refusal—not a weekend vector index.",
    gridHeading: "What custom RAG implementation covers",
    gridLede:
      "Demos retrieve a few PDFs. Production handles messy formats, conflicting policy, and users who will trust a fluent wrong answer.",
    capabilities: [
      {
        title: "Retrieval audit",
        copy: "What sources matter, how answers will be judged, and which risks matter most—before pipelines.",
        icon: "clipboard",
      },
      {
        title: "Hybrid search",
        copy: "Lexical and dense retrieval chosen because they earn recall on your data—not a tutorial default.",
        icon: "search",
      },
      {
        title: "Chunking & reranking",
        copy: "Strategy follows the corpus. Conflicting policies and multilingual content are first-class cases.",
        icon: "layers",
      },
      {
        title: "Groundedness gates",
        copy: "Refuse when evidence is thin. Cite when confidence is high. Measure groundedness alongside latency.",
        icon: "gauge",
      },
      {
        title: "Secure document retrieval",
        copy: "Permissions travel with every chunk. A user never retrieves what they cannot open at the source.",
        icon: "lock",
      },
      {
        title: "Observability & runbooks",
        copy: "Evaluation harnesses, citation UX, and rollback paths for model or prompt changes.",
        icon: "activity",
      },
    ],
    midHeading: "Ship retrieval you can inspect—then scale it.",
    splitLabel: "Production notes",
    splitHeading:
      "Architecture follows evidence. Regressions surface before users do.",
    splitImage: "/assets/what-we-build/AI & RAG Engineering.png",
    splitImageAlt: "RAG engineering — retrieval systems grounded in trusted context",
    relatedProduct: { href: routes.persona, label: "See Nabhi Persona" },
  },
  {
    path: routes.voice,
    badge: "Service — Voice & agents",
    highlight: "useful action",
    proofLeft: "Guardrails before fluency",
    proofRight: "Full action audit trail",
    asideTitle: "Voice service",
    asideCopy:
      "Conversation becomes work completed—ticketing, scheduling, retrieval, and human handoff.",
    gridHeading: "What agentic voice workflows include",
    gridLede:
      "Ops teams do not need another novelty demo. They need agents connected to internal tools, with recovery when the world is messy.",
    capabilities: [
      {
        title: "Intent & tool calling",
        copy: "Dialogue maps to approved actions—confirmation when the stakes are real, not theatre.",
        icon: "workflow",
      },
      {
        title: "Guardrails first",
        copy: "What the agent may never do, what requires a human, and how every action is logged.",
        icon: "shield",
      },
      {
        title: "Knowledge grounding",
        copy: "Retrieval from a Persona or RAG layer keeps answers tied to policy—not invented fluency.",
        icon: "search",
      },
      {
        title: "Human handoff",
        copy: "Escalation paths people trust. Fluency without evidence is treated as a failure.",
        icon: "hand",
      },
      {
        title: "Audit trail",
        copy: "Every tool call leaves a record ops, legal, and security can inspect.",
        icon: "list",
      },
      {
        title: "Voice in the channel",
        copy: "Telephony or in-app voice, multilingual paths where needed, tight loops with knowledge systems.",
        icon: "phone",
      },
    ],
    midHeading: "Connect conversation to the tools work already lives in.",
    splitLabel: "Where we focus",
    splitHeading:
      "Listen, observe, simplify—then build agents that complete work safely.",
    splitImage: "/assets/what-we-build/Agentic Voice Workflows.png",
    splitImageAlt: "Agentic voice workflows — conversation connected to action",
    relatedProduct: { href: routes.cares, label: "See Nabhi Cares" },
  },
];

export function getServiceLanding(path: string) {
  return serviceLandings.find((item) => item.path === path);
}
