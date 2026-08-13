import { aeoCitations } from "@/lib/aeo-faq";

export type PillarFaq = { question: string; answer: string };

export type PillarPageContent = {
  slug: string;
  path: string;
  eyebrow: string;
  title: string;
  description: string;
  headline: string;
  lede: string;
  primaryKeyword: string;
  sections: Array<{ heading: string; body: string[] }>;
  faqs: PillarFaq[];
  related: Array<{ href: string; label: string }>;
  datePublished: string;
  dateModified: string;
};

export const pillarPages: PillarPageContent[] = [
  {
    slug: "nabhi-persona",
    path: "/products/nabhi-persona",
    eyebrow: "Products // Nabhi Persona",
    title: "Nabhi Persona",
    description:
      "Nabhi Persona is Nabhi Labs’ enterprise intelligence layer—turning institutional knowledge into active, private, decision-ready understanding.",
    headline: "Nabhi Persona architecture for enterprises",
    lede: "Nabhi Labs builds Nabhi Persona systems that connect what your organization already knows to the moment a decision is made—private by design, continuously learning from real work.",
    primaryKeyword: "Nabhi Persona",
    datePublished: "2026-08-02",
    dateModified: "2026-08-13",
    sections: [
      {
        heading: "Why institutional knowledge stays trapped without Nabhi Persona",
        body: [
          "Most enterprises already own the answers. They live in tickets, decks, chats, CRMs, wikis, and the heads of people who leave. Search returns documents; meetings rediscover the same facts; AI chatbots invent when context is thin. Teams then buy another knowledge base, another intranet, or another generic assistant—and the fragmentation deepens. A Nabhi Persona is not another repository. It is an intelligence layer that keeps institutional knowledge active—retrieved with provenance, reasoned over with constraints, and ready when pressure is highest.",
          "Nabhi Labs treats Nabhi Persona work as systems design first. Before models or vector stores, we map who decides, which sources are trusted, and where clarity collapses. That sequence keeps the product from becoming more noise. Leaders evaluating enterprise persona AI usually discover the bottleneck is not “more GPT”—it is missing ownership, stale corpora, and answers that cannot be inspected. Nabhi Persona is built so every useful response can point back to what the organization already knows.",
          "When rediscovery costs more than delivery, the organization feels slow even when people work hard. Nabhi Persona targets that cost: fewer repeated explanations, faster grounded decisions, and a shared picture of how the system actually behaves under real constraints.",
        ],
      },
      {
        heading: "What Nabhi Labs implements in a Nabhi Persona architecture",
        body: [
          "A Nabhi Persona architecture typically includes governed ingestion from the tools teams already use, retrieval that respects permissions, memory that updates from real outcomes, and interfaces that answer in the language of the work—not generic chat. Context-aware intelligence means the system understands the situation before surfacing what matters: role, project, policy boundary, and urgency.",
          "On average, teams that reconnect scattered knowledge into usable understanding report about a 25% increase in operational clarity. Nabhi Labs has tailored 50+ models to unique operating contexts. Serious inquiries usually receive a thoughtful reply within 24 hours. Engagements can stand alone as a private knowledge system or combine with custom RAG engineering and agentic workflows when action—not only answers—is required.",
          "Implementation stays inspectable. Nabhi Labs aligns practice with responsible AI guidance such as the NIST AI Risk Management Framework and the OECD AI Principles so claims about safety, transparency, and accountability can be audited rather than advertised.",
        ],
      },
      {
        heading: "How Nabhi Persona differs from a wiki or generic AI search",
        body: [
          "A wiki stores. Nabhi Persona acts. Storage still matters—but the measure of success is fewer rediscovered facts, faster grounded decisions, and less theatre around “AI transformation.” Generic AI search often retrieves plausible text without permission boundaries or evaluation gates. Nabhi Persona is designed as decision-ready AI: refuse when evidence is thin, cite when confidence is high, and keep data private by design.",
          "Buyers comparing DMS, intranet, and “AI search” products use Nabhi Labs when they need a coherent architecture across products, RAG engineering, and Nabhi Persona outcomes—not another silo. If your target words are institutional knowledge, enterprise knowledge layer, or private knowledge system, the landing intent is the same: clarity under pressure, owned by the organization.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is a Nabhi Persona architecture for enterprises?",
        answer:
          "A Nabhi Persona architecture for enterprises is a private intelligence layer that turns institutional knowledge into active, context-aware understanding. Nabhi Labs designs these systems so retrieval, memory, and action stay grounded in trusted sources rather than public web guesses.",
      },
      {
        question: "How does Nabhi Labs build an enterprise Nabhi Persona?",
        answer:
          "Nabhi Labs listens and maps the decision system first, then implements governed ingestion, permission-aware retrieval, and interfaces that surface answers with provenance. Technology follows understanding—not the other way around.",
      },
    ],
    related: [
      {
        href: "/services/enterprise-knowledge-management",
        label: "Enterprise knowledge management",
      },
      { href: "/services/rag-engineering", label: "RAG engineering services" },
      {
        href: "/resources/enterprise-nabhi-persona-playbook",
        label: "Nabhi Persona playbook",
      },
    ],
  },
  {
    slug: "enterprise-knowledge-management",
    path: "/services/enterprise-knowledge-management",
    eyebrow: "Services // Knowledge",
    title: "Enterprise Knowledge Management Platform",
    description:
      "Nabhi Labs designs enterprise knowledge management platforms that reconnect fragmented information into clarity—before more tools are added.",
    headline: "Enterprise knowledge management that creates clarity",
    lede: "Nabhi Labs helps organizations replace fragmented wikis, drives, and tribal memory with knowledge systems that stay current, permissioned, and useful under real operational load.",
    primaryKeyword: "enterprise knowledge management platform",
    datePublished: "2026-08-02",
    dateModified: "2026-08-02",
    sections: [
      {
        heading: "The real failure mode of knowledge tools",
        body: [
          "Enterprises rarely lack documents. They lack a shared operating picture. Ownership is unclear, duplicates multiply, and search rewards volume over truth. An enterprise knowledge management platform only works when governance, taxonomy, and retrieval are designed together—and when the system earns trust by citing sources people recognize.",
          "Nabhi Labs starts with systems thinking: observe how work actually moves, simplify what does not matter, then build the platform as a consequence of that understanding. Research on systems thinking reinforces treating context and behaviour as primary inputs.",
        ],
      },
      {
        heading: "Platform capabilities Nabhi Labs delivers",
        body: [
          "Typical engagements cover source connectors, access control, knowledge graphs or structured memory where they earn their keep, AI-assisted retrieval with citations, and workflows that push insight into the tools teams already open. The goal is institutional knowledge that is private by design and continuously refined from real use—not a one-time migration project.",
          "Buyers comparing DMS, intranet, and “AI search” products use Nabhi Labs when they need a coherent architecture across products, RAG engineering, and Nabhi Persona outcomes—not another silo.",
        ],
      },
    ],
    faqs: [
      {
        question:
          "What should an enterprise knowledge management platform include?",
        answer:
          "A durable enterprise knowledge management platform includes governed sources, clear ownership, permission-aware search or retrieval, and ways to keep answers tied to evidence. Nabhi Labs designs these layers so technology follows how decisions are actually made.",
      },
      {
        question: "How is Nabhi Labs different from a wiki vendor?",
        answer:
          "Nabhi Labs is not a single wiki product. We architect knowledge systems—often combining Nabhi Persona patterns, RAG engineering, and operational workflows—so organizations gain clarity rather than another place to dump files.",
      },
    ],
    related: [
      { href: "/products/nabhi-persona", label: "Nabhi Persona" },
      { href: "/services/rag-engineering", label: "Custom RAG implementation" },
      { href: "/products/nabhi-cares", label: "Nabhi Cares" },
    ],
  },
  {
    slug: "rag-engineering",
    path: "/services/rag-engineering",
    eyebrow: "Services // RAG",
    title: "Custom RAG Implementation & Enterprise RAG Engineering",
    description:
      "Nabhi Labs provides custom RAG implementation and enterprise RAG engineering—retrieval systems grounded in trusted context, evaluations, and security.",
    headline: "Custom RAG that produces grounded answers",
    lede: "Nabhi Labs engineers retrieval-augmented generation systems that answer from your documents and data—with citations, evaluations, and access controls fit for enterprise use.",
    primaryKeyword: "custom RAG implementation services",
    datePublished: "2026-08-02",
    dateModified: "2026-08-02",
    sections: [
      {
        heading: "Why generic RAG demos fail enterprise AI search",
        body: [
          "Demos retrieve a few PDFs. Production must handle messy formats, conflicting policies, multilingual content, and users who will trust a fluent wrong answer. Enterprise RAG engineering is evaluation, chunking strategy, hybrid retrieval, reranking, and observability—not a weekend vector index. Custom RAG implementation starts by defining what “correct” means for your corpus before celebrating latency charts.",
          "Nabhi Labs implements custom RAG with clear failure modes: refuse when evidence is thin, show provenance when confidence is high, and measure groundedness alongside latency. Secure document retrieval AI means permissions travel with every chunk. Vector search and lexical search are chosen because they earn recall on your data—not because a tutorial defaulted to embeddings.",
          "Teams asking for LLM memory without governance usually rediscover the same failure: the model remembers noise. Nabhi Labs treats memory and retrieval as designed systems with owners, tests, and rollback paths.",
        ],
      },
      {
        heading: "Custom RAG implementation services from Nabhi Labs",
        body: [
          "Engagements usually start with a retrieval audit: what sources matter, how answers will be judged, and which risks matter most. Then Nabhi Labs builds or hardens pipelines—ingestion, embeddings or lexical search, orchestration, and interfaces—aligned with responsible AI practice from NIST and OECD guidance.",
          "Teams hire Nabhi Labs for RAG consulting when they need production systems tied to Nabhi Persona or healthcare platforms, not slides about “AI transformation.” Deliverables commonly include evaluation harnesses, citation UX, access-control proofs, and runbooks for model or prompt changes.",
          "If your target words are retrieval augmented generation, enterprise RAG, data retrieval, or AI search, the page job is the same: grounded answers from trusted context, measurable before they scale.",
        ],
      },
      {
        heading: "RAG architecture notes for production retrieval",
        body: [
          "Architecture choices follow evidence: hybrid search when vocabulary is precise, graph or structured memory when relationships matter, and continuous evaluation harnesses so regressions surface before users do. See the RAG evaluation checklist for a practical starting point covering groundedness, permission tests, and canaries.",
          "Nabhi Labs documents trade-offs in plain language so security, legal, and product stakeholders can inspect the system. Retrieval-augmented generation only creates trust when refusal, citation, and escalation paths are designed with the same care as the happy path.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is custom RAG implementation?",
        answer:
          "Custom RAG implementation means designing retrieval-augmented generation around your corpus, permissions, and success metrics—not a generic chatbot template. Nabhi Labs delivers ingestion, retrieval, grounding, and evaluation as one system.",
      },
      {
        question: "Do you offer enterprise RAG engineering without a chatbot UI?",
        answer:
          "Yes. Nabhi Labs often ships retrieval APIs, agent tools, or workflow hooks first. The interface follows the job—voice, ops console, or embedded answers—after the retrieval quality is real.",
      },
    ],
    related: [
      {
        href: "/resources/rag-evaluation-checklist",
        label: "RAG evaluation checklist",
      },
      { href: "/products/nabhi-persona", label: "Nabhi Persona" },
      {
        href: "/services/agentic-voice-workflows",
        label: "Agentic voice workflows",
      },
    ],
  },
  {
    slug: "agentic-voice-workflows",
    path: "/services/agentic-voice-workflows",
    eyebrow: "Services // Voice & Agents",
    title: "Agentic Voice Workflows & Conversational AI Systems",
    description:
      "Nabhi Labs designs agentic voice workflows and conversational AI systems that connect natural conversation to useful action inside enterprise tools.",
    headline: "Voice agents that complete useful action",
    lede: "Nabhi Labs builds conversational AI systems where voice and chat agents call the right tools, respect policy, and leave an audit trail—so conversation becomes work completed, not another transcript.",
    primaryKeyword: "agentic voice workflow automation",
    datePublished: "2026-08-02",
    dateModified: "2026-08-02",
    sections: [
      {
        heading: "Conversation without action is theatre",
        body: [
          "Call centers and ops teams do not need another novelty demo. They need voice agents connected to internal tools: ticketing, scheduling, knowledge retrieval, and escalation paths that humans trust. Agentic voice workflow automation means intent, tool calling, confirmation, and recovery when the world is messy.",
          "Nabhi Labs designs conversational AI for enterprise ops with guardrails first—what the agent may never do, what requires confirmation, and how every action is logged. Retrieval from a Nabhi Persona or RAG layer keeps answers grounded.",
        ],
      },
      {
        heading: "Where Nabhi Labs focuses",
        body: [
          "Typical builds include telephony or in-app voice, multilingual paths where needed, human handoff, and tight loops with knowledge systems so agents do not invent policy. The same philosophy applies: listen, observe, simplify, then build.",
        ],
      },
    ],
    faqs: [
      {
        question: "What are agentic voice workflows?",
        answer:
          "Agentic voice workflows are conversational systems that can take approved actions—not only answer questions. Nabhi Labs connects speech and dialogue to tools, knowledge, and escalation so work moves forward safely.",
      },
      {
        question: "How do you keep voice agents from hallucinating?",
        answer:
          "Nabhi Labs grounds agents in permissioned retrieval, constrains tool use, and designs refusal and handoff paths. Fluency without evidence is treated as a failure, not a feature.",
      },
    ],
    related: [
      { href: "/services/rag-engineering", label: "RAG engineering" },
      { href: "/products/nabhi-persona", label: "Nabhi Persona" },
      { href: "/products/nabhi-cares", label: "Nabhi Cares" },
    ],
  },
  {
    slug: "healthcare-ai",
    path: "/products/nabhi-cares",
    eyebrow: "Products // Nabhi Cares",
    title: "Nabhi Cares",
    description:
      "Nabhi Cares is Nabhi Labs’ healthcare AI product—knowledge, RAG, and workflows for care operations, with a careful compliance posture. Also searched as Nabhi Care.",
    headline: "AI integration for healthcare systems",
    lede: "Nabhi Labs builds connected healthcare and web systems where AI supports care operations and institutional knowledge—without treating patient trust as optional.",
    primaryKeyword: "Nabhi Cares",
    datePublished: "2026-08-02",
    dateModified: "2026-08-13",
    sections: [
      {
        heading: "Clarity under clinical and operational pressure",
        body: [
          "Healthcare organizations drown in systems yet starve for a coherent picture of status, policy, and next action. Nabhi Labs focuses on AI integration that reduces rediscovery—scheduling friction, documentation chase, and knowledge trapped in departments—while keeping humans accountable for clinical judgment.",
          "Healthcare knowledge management AI and HIPAA-aware RAG for clinical ops are engineered with least privilege, auditability, and clear boundaries between assistive retrieval and automated decisions. Nabhi Labs does not claim to replace clinicians; we make institutional knowledge usable for the people who already carry responsibility.",
        ],
      },
      {
        heading: "Compliance posture",
        body: [
          "Engagements begin with data classification, retention, and access patterns. Retrieval and agents are scoped to approved corpora. Practices align with responsible AI frameworks such as NIST’s AI RMF and OECD AI Principles. Specific regulatory certification is scoped per engagement—never assumed from marketing copy.",
        ],
      },
    ],
    faqs: [
      {
        question: "How does Nabhi Labs approach AI in healthcare?",
        answer:
          "Nabhi Labs approaches healthcare AI as systems and knowledge work: map workflows, protect sensitive data, then implement retrieval and automation that improve operational clarity. Clinical decisions remain with qualified professionals.",
      },
      {
        question: "Can you build HIPAA-aware RAG for clinical operations?",
        answer:
          "Nabhi Labs designs permission-aware retrieval and logging suitable for careful healthcare environments. Exact compliance scope is defined with your legal and security stakeholders for each engagement.",
      },
    ],
    related: [
      {
        href: "/services/enterprise-knowledge-management",
        label: "Enterprise knowledge management",
      },
      { href: "/services/rag-engineering", label: "RAG engineering" },
      {
        href: "/services/agentic-voice-workflows",
        label: "Agentic voice workflows",
      },
    ],
  },
];

export const resourcePages: PillarPageContent[] = [
  {
    slug: "rag-evaluation-checklist",
    path: "/resources/rag-evaluation-checklist",
    eyebrow: "Resources // RAG",
    title: "RAG Evaluation Checklist",
    description:
      "A practical RAG evaluation checklist from Nabhi Labs—groundedness, retrieval quality, permissions, and production readiness.",
    headline: "RAG evaluation checklist",
    lede: "Use this checklist before you scale a retrieval-augmented system. Nabhi Labs uses the same lenses on custom RAG implementations: evidence, permissions, and measurable groundedness.",
    primaryKeyword: "RAG evaluation checklist",
    datePublished: "2026-08-02",
    dateModified: "2026-08-02",
    sections: [
      {
        heading: "Retrieval quality",
        body: [
          "Define gold questions with known source passages. Measure recall at k, precision of cited chunks, and failure on adversarial or out-of-scope queries. Hybrid lexical + dense retrieval should beat either alone on your corpus before you celebrate demos.",
          "Track freshness: stale indexes silently degrade trust. Version corpora and embeddings so regressions are attributable.",
        ],
      },
      {
        heading: "Groundedness and safety",
        body: [
          "Score answers for support by retrieved evidence. Require refusal when evidence is insufficient. Separate policy content from speculative generation. Align risk discussions with the NIST AI Risk Management Framework and OECD AI Principles.",
          "Permissions must be tested as first-class: a user must never retrieve a chunk they cannot open in the source system.",
        ],
      },
      {
        heading: "Production readiness",
        body: [
          "Instrument latency, cost per query, citation click-through, and human override rates. Add canaries for prompt or model changes. Document ownership of evaluation sets the way you document on-call.",
          "When you want Nabhi Labs to run this as an engagement, start at the RAG engineering service page or email hello@nabhilabs.com.",
        ],
      },
    ],
    faqs: [
      {
        question: "What belongs on a RAG evaluation checklist?",
        answer:
          "A useful RAG evaluation checklist covers retrieval metrics, groundedness, permission tests, refusal behaviour, latency/cost, and regression canaries. Nabhi Labs applies these before production rollout.",
      },
    ],
    related: [
      { href: "/services/rag-engineering", label: "RAG engineering services" },
      { href: "/products/nabhi-persona", label: "Nabhi Persona" },
    ],
  },
  {
    slug: "enterprise-nabhi-persona-playbook",
    path: "/resources/enterprise-nabhi-persona-playbook",
    eyebrow: "Resources // Playbook",
    title: "Enterprise Nabhi Persona Playbook",
    description:
      "Nabhi Labs’ enterprise Nabhi Persona playbook: how to move from scattered knowledge to active intelligence without adding more noise.",
    headline: "Enterprise Nabhi Persona playbook",
    lede: "This playbook outlines how Nabhi Labs sequences Nabhi Persona work—understanding first, technology second—so enterprises gain clarity instead of another unused tool.",
    primaryKeyword: "Nabhi Persona for enterprises playbook",
    datePublished: "2026-08-02",
    dateModified: "2026-08-02",
    sections: [
      {
        heading: "Phase 1 — Listen and map",
        body: [
          "Interview decision owners. List trusted sources and forbidden ones. Capture where rediscovery hurts most. Do not start with vendor selection. Systems thinking is the method: context before components.",
        ],
      },
      {
        heading: "Phase 2 — Simplify and govern",
        body: [
          "Collapse duplicate stores where possible. Assign ownership. Define what “done” means for an answer: citation, confidence, and action. Align with responsible AI norms before scaling models.",
        ],
      },
      {
        heading: "Phase 3 — Build and measure",
        body: [
          "Implement retrieval and memory with evaluations from day one. Ship narrow workflows that win trust. Measure operational clarity—not vanity chat volume. Nabhi Labs has seen roughly 25% clarity gains when scattered knowledge becomes usable understanding, across 50+ tailored model contexts.",
        ],
      },
    ],
    faqs: [
      {
        question: "How do you start a Nabhi Persona for enterprises?",
        answer:
          "Start by mapping decisions and trusted sources, then govern ownership, then implement retrieval and interfaces with evaluations. Nabhi Labs follows listen, observe, simplify, build.",
      },
    ],
    related: [
      { href: "/products/nabhi-persona", label: "Nabhi Persona" },
      {
        href: "/services/enterprise-knowledge-management",
        label: "Knowledge management",
      },
      { href: "/case-studies", label: "Case study patterns" },
    ],
  },
];

export const caseStudyIndex = {
  path: "/case-studies",
  title: "AI Knowledge Platform Case Study Patterns",
  description:
    "Anonymized case patterns from Nabhi Labs engagements—clarity metrics, RAG rollouts, and knowledge systems without invented customer names.",
  headline: "Case study patterns",
  lede: "Nabhi Labs shares patterns, not theatre. These anonymized sketches show how understanding-first engagements tend to unfold. Named customer stories are published only with written permission.",
  patterns: [
    {
      title: "Institutional knowledge → active answers",
      body: "A multi-team organization drowned in drives and chat history. Nabhi Labs mapped decision paths, then shipped a permissioned Nabhi Persona layer. Outcome pattern: fewer rediscovery loops and clearer handoffs; teams reported on the order of a 25% lift in operational clarity after knowledge became usable.",
    },
    {
      title: "RAG hardening after a brittle demo",
      body: "An internal chatbot looked strong on happy-path PDFs and failed on policy conflicts. Nabhi Labs rebuilt evaluation sets, hybrid retrieval, and refusal behaviour. Outcome pattern: grounded answers with citations and measurable regression gates before wider rollout.",
    },
    {
      title: "Voice agent tied to ops tools",
      body: "A high-volume ops queue needed conversation that completed work. Nabhi Labs connected agentic voice flows to ticketing and knowledge retrieval with human escalation. Outcome pattern: shorter handle times on scoped intents and a full action audit trail.",
    },
  ],
  related: [
    { href: "/products/nabhi-persona", label: "Nabhi Persona" },
    { href: "/services/rag-engineering", label: "RAG engineering" },
    {
      href: "/resources/enterprise-nabhi-persona-playbook",
      label: "Nabhi Persona playbook",
    },
  ],
} as const;

export const allContentPages = [...pillarPages, ...resourcePages];

export function getPageByPath(path: string) {
  return allContentPages.find((page) => page.path === path);
}

export { aeoCitations };
