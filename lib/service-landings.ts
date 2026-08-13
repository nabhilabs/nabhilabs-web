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
    splitImage: "/assets/our-approach/understand.webp",
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
    splitImage: "/assets/what-we-build/AI & RAG Engineering.webp",
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
    splitImage: "/assets/what-we-build/Agentic Voice Workflows.webp",
    splitImageAlt: "Agentic voice workflows — conversation connected to action",
    relatedProduct: { href: routes.cares, label: "See Nabhi Cares" },
  },
  {
    path: "/blog/why-enterprise-second-brain-fails-without-governance",
    badge: "Blog — Nabhi Persona",
    highlight: "governance",
    proofLeft: "Understanding before tools",
    proofRight: "Ownership before embeddings",
    asideTitle: "Persona note",
    asideCopy:
      "A second brain without owners and permissions is just another silo. Nabhi Persona starts with governance.",
    gridHeading: "What must exist before memory",
    gridLede:
      "Enterprises searching for a “second brain” usually need a governed intelligence layer—not another place to dump notes.",
    capabilities: [
      {
        title: "Decision owners",
        copy: "Map who decides and what hurts before you pick a model or a vendor.",
        icon: "clipboard",
      },
      {
        title: "Trusted sources",
        copy: "Name approved corpora and forbidden stores. Conflicting policy is design input.",
        icon: "library",
      },
      {
        title: "Permissions",
        copy: "Every chunk inherits access from the source system—no leaked retrieval.",
        icon: "lock",
      },
      {
        title: "Definition of done",
        copy: "What counts as a correct answer: citation, confidence, and when to refuse.",
        icon: "gauge",
      },
      {
        title: "Provenance",
        copy: "Useful responses point back to evidence people recognize.",
        icon: "quote",
      },
      {
        title: "Persona layer",
        copy: "Nabhi Persona sits on that foundation—active intelligence, private by design.",
        icon: "layers",
      },
    ],
    midHeading: "Govern the knowledge. Then make it active.",
    splitLabel: "How we think",
    splitHeading:
      "Storage is not understanding. Governance comes before memory.",
    splitImage: "/assets/our-approach/understand.webp",
    splitImageAlt: "Understanding before technology — Nabhi Labs",
    relatedProduct: { href: routes.persona, label: "Explore Nabhi Persona" },
  },
  {
    path: "/blog/from-scattered-docs-to-decision-ready-knowledge",
    badge: "Blog — Nabhi Persona",
    highlight: "decision-ready",
    proofLeft: "Cite when confident",
    proofRight: "Refuse when evidence is thin",
    asideTitle: "Knowledge note",
    asideCopy:
      "Indexing a drive is not the same as keeping a decision thread under pressure.",
    gridHeading: "From documents to usable understanding",
    gridLede:
      "Nabhi Persona turns institutional knowledge into answers you can inspect—role, project, and policy aware.",
    capabilities: [
      {
        title: "Governed ingestion",
        copy: "Connect tools teams already use—without another migration theatre.",
        icon: "library",
      },
      {
        title: "Permission-aware retrieval",
        copy: "People retrieve only what they could open at the source.",
        icon: "lock",
      },
      {
        title: "Context before answer",
        copy: "Situation first: role, urgency, and policy boundary.",
        icon: "search",
      },
      {
        title: "Decision-ready interfaces",
        copy: "Language of the work—not generic chat that invents.",
        icon: "quote",
      },
      {
        title: "Continuous learning",
        copy: "Memory updates from real outcomes, not a static dump.",
        icon: "refresh",
      },
      {
        title: "RAG when needed",
        copy: "Pair Persona with custom RAG when retrieval must be hardened.",
        icon: "layers",
      },
    ],
    midHeading: "Make institutional knowledge active—not archived.",
    splitLabel: "Architecture",
    splitHeading:
      "A wiki stores. Nabhi Persona keeps the thread when pressure is highest.",
    splitImage: "/assets/nabhi_persona_wallpaper.webp",
    splitImageAlt: "Nabhi Persona — decision-ready institutional knowledge",
    relatedProduct: { href: routes.persona, label: "Explore Nabhi Persona" },
  },
  {
    path: "/blog/healthcare-operations-clarity-nabhi-cares",
    badge: "Blog — Nabhi Cares",
    highlight: "clarity",
    proofLeft: "Assistive by design",
    proofRight: "Humans stay accountable",
    asideTitle: "Cares note",
    asideCopy:
      "Care operations need a coherent picture of status and policy—not another disconnected AI layer.",
    gridHeading: "What care operations actually need",
    gridLede:
      "Nabhi Cares focuses on operational clarity: retrieval, workflows, and compliance posture without replacing clinical judgment.",
    capabilities: [
      {
        title: "Ops clarity",
        copy: "Reduce rediscovery across scheduling, documentation, and departments.",
        icon: "activity",
      },
      {
        title: "Assistive retrieval",
        copy: "Surface approved context. Never claim to substitute clinicians.",
        icon: "hand",
      },
      {
        title: "Compliance posture",
        copy: "Data classification and least privilege before models.",
        icon: "shield",
      },
      {
        title: "Scoped agents",
        copy: "Automation only where boundaries are clear and logged.",
        icon: "workflow",
      },
      {
        title: "Connected stack",
        copy: "Works with knowledge, RAG, and Persona—not another silo.",
        icon: "layers",
      },
      {
        title: "Trust first",
        copy: "Patient trust is a constraint, not an afterthought.",
        icon: "lock",
      },
    ],
    midHeading: "Care operations deserve clarity—not theatre.",
    splitLabel: "Nabhi Cares",
    splitHeading:
      "Map clinical and ops reality before introducing models.",
    splitImage: "/assets/what-we-build/Nabhi Cares.webp",
    splitImageAlt: "Nabhi Cares — healthcare AI for care operations",
    relatedProduct: { href: routes.cares, label: "Explore Nabhi Cares" },
  },
  {
    path: "/blog/hipaa-aware-rag-assistive-healthcare-ai",
    badge: "Blog — Nabhi Cares",
    highlight: "assistive",
    proofLeft: "Least privilege by default",
    proofRight: "Refuse when evidence is thin",
    asideTitle: "Retrieval note",
    asideCopy:
      "HIPAA-aware RAG is permissioned retrieval and logging—not a fluent demo on thin corpora.",
    gridHeading: "What assistive healthcare AI requires",
    gridLede:
      "Nabhi Cares applies the same retrieval discipline as production RAG—scoped to care operations.",
    capabilities: [
      {
        title: "Permissioned chunks",
        copy: "Access travels with every retrieved passage.",
        icon: "lock",
      },
      {
        title: "Auditability",
        copy: "Log who retrieved what. Security can inspect the trail.",
        icon: "list",
      },
      {
        title: "Groundedness",
        copy: "Cite sources. Measure support—not only latency.",
        icon: "gauge",
      },
      {
        title: "Refusal paths",
        copy: "Hand off clinical questions. Do not invent from thin evidence.",
        icon: "shield",
      },
      {
        title: "Scoped corpora",
        copy: "Approved sources only. Classification before embeddings.",
        icon: "library",
      },
      {
        title: "Eval checklist",
        copy: "Start with the public RAG evaluation checklist, then harden.",
        icon: "clipboard",
      },
    ],
    midHeading: "Assistive means evidence—not fluency alone.",
    splitLabel: "Production RAG",
    splitHeading:
      "Same retrieval craft as enterprise RAG—adapted for care operations.",
    splitImage: "/assets/what-we-build/AI & RAG Engineering.webp",
    splitImageAlt: "RAG engineering — grounded retrieval for healthcare ops",
    relatedProduct: { href: routes.cares, label: "Explore Nabhi Cares" },
  },
];

export function getServiceLanding(path: string) {
  return serviceLandings.find((item) => item.path === path);
}
