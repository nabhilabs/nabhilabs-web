import type { Metadata } from "next";
import Link from "next/link";
import { techKeywords } from "@/lib/keyword-strategy";

export const metadata: Metadata = {
  title:
    "Agentic AI & Multi-Agent Workflows for Enterprise Knowledge Retrieval",
  description:
    "How Nabhi Labs designs agentic AI for knowledge retrieval, multi-agent workflows in enterprise systems, and LangChain-style context retrieval—with evaluations and guardrails.",
  keywords: [
    ...techKeywords.architecture,
    "agentic AI for knowledge retrieval",
    "multi-agent workflows",
    "LangChain context retrieval",
    "Nabhi Labs",
  ],
  alternates: { canonical: "/blog/agentic-ai-multi-agent-workflows" },
  openGraph: {
    title: "Agentic AI & Multi-Agent Workflows — Nabhi Labs",
    description:
      "Technical deep dive: agentic retrieval, multi-agent enterprise workflows, and grounded context frameworks.",
    url: "/blog/agentic-ai-multi-agent-workflows",
    type: "article",
  },
};

export default function AgenticAiBlogPost() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline:
      "Agentic AI and multi-agent workflows for enterprise knowledge retrieval",
    description:
      "Architecture notes from Nabhi Labs on agentic retrieval, multi-agent systems, and context frameworks.",
    url: "https://nabhilabs.com/blog/agentic-ai-multi-agent-workflows",
    datePublished: "2026-08-02",
    dateModified: "2026-08-02",
    author: {
      "@type": "Person",
      name: "Nabhi Labs Editorial",
      url: "https://nabhilabs.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Nabhi Labs",
      url: "https://nabhilabs.com",
    },
    keywords: techKeywords.architecture.join(", "),
  };

  return (
    <main className="relative" id="main-content">
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        type="application/ld+json"
      />

      <article>
        <header className="technical-grid border-b border-[#d8e0d5] bg-[#f2f4f0]">
          <div className="mx-auto max-w-[95rem] px-6 pb-16 pt-28 md:px-10 md:pt-32">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#5a7052]">
              [ Blog // Engineering ]
            </p>
            <h1 className="mt-6 max-w-4xl font-display text-[clamp(2.2rem,4.5vw,4rem)] font-medium leading-[0.98] tracking-[-0.05em] text-[#0f1c13]">
              Agentic AI for knowledge retrieval and multi-agent workflows in
              enterprise systems
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-[#4a5b4e]">
              A Nabhi Labs deep dive for teams evaluating agentic AI workflows,
              LangChain-style context retrieval frameworks, and production
              guardrails—not demo scripts.
            </p>
            <p className="mt-4 font-mono text-[10px] text-[#5a7052]">
              Updated August 2026 · Nabhi Labs Editorial
            </p>
          </div>
        </header>

        <section className="border-b border-[#d8e0d5] bg-[#f7f6f1]">
          <div className="mx-auto max-w-[95rem] px-6 py-14 md:px-10">
            <h2 className="max-w-3xl font-display text-[clamp(1.6rem,2.8vw,2.4rem)] font-medium tracking-[-0.04em] text-[#0f1c13]">
              Why agentic AI for knowledge retrieval needs a system, not a
              single prompt
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-sm leading-7 text-[#4a5b4e]">
              <p>
                Agentic AI for knowledge retrieval fails when one model is asked
                to search, decide, and act without boundaries. Enterprise
                corpora are messy: conflicting policies, permissioned sources,
                and questions that should refuse rather than invent. Nabhi Labs
                designs agents as roles in a workflow—retrieve, verify, propose,
                escalate—so each step is inspectable.
              </p>
              <p>
                Context-aware enterprise intelligence depends on retrieval
                quality before tool use. If the wrong chunk is retrieved, a
                fluent agent amplifies the error. That is why Nabhi Persona and
                custom RAG engineering sit under agentic layers: memory and
                evidence first, action second.
              </p>
              <p>
                Teams comparing frameworks often start with LangChain context
                retrieval patterns—chains, retrievers, and tool binders. Those
                primitives are useful. Production still requires evaluation
                harnesses, citation UX, and access control that travels with
                every chunk. Nabhi Labs uses framework patterns when they earn
                clarity; we do not treat any library as the architecture.
              </p>
            </div>
          </div>
        </section>

        <section className="border-b border-[#d8e0d5] bg-[#f2f4f0]">
          <div className="mx-auto max-w-[95rem] px-6 py-14 md:px-10">
            <h2 className="max-w-3xl font-display text-[clamp(1.6rem,2.8vw,2.4rem)] font-medium tracking-[-0.04em] text-[#0f1c13]">
              Multi-agent workflows in enterprise systems
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-sm leading-7 text-[#4a5b4e]">
              <p>
                Multi-agent workflows in enterprise systems work when
                responsibilities are narrow. A retriever agent fetches
                evidence. A critic agent checks groundedness. A planner agent
                proposes tool calls. A human or policy gate confirms irreversible
                actions. Without that split, “multi-agent” becomes parallel
                hallucination.
              </p>
              <p>
                Nabhi Labs maps agents to real org roles—ops, knowledge owners,
                compliance—so escalation paths match how the business already
                decides. Logging every tool call creates an audit trail suitable
                for security review. Latency and cost are measured per agent
                hop, not only end-to-end vanity metrics.
              </p>
              <p>
                For voice and conversational surfaces, the same pattern applies:
                agentic voice workflows call tools only after retrieval and
                confirmation rules fire. See the{" "}
                <Link
                  className="text-[#31543a] underline-offset-4 hover:underline"
                  href="/services/agentic-voice-workflows"
                >
                  agentic voice workflows
                </Link>{" "}
                service page for product intent, and{" "}
                <Link
                  className="text-[#31543a] underline-offset-4 hover:underline"
                  href="/services/rag-engineering"
                >
                  RAG engineering
                </Link>{" "}
                for the retrieval substrate.
              </p>
            </div>
          </div>
        </section>

        <section className="border-b border-[#d8e0d5] bg-[#f7f6f1]">
          <div className="mx-auto max-w-[95rem] px-6 py-14 md:px-10">
            <h2 className="max-w-3xl font-display text-[clamp(1.6rem,2.8vw,2.4rem)] font-medium tracking-[-0.04em] text-[#0f1c13]">
              LangChain context retrieval frameworks—and what Nabhi Labs
              actually ships
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-sm leading-7 text-[#4a5b4e]">
              <p>
                LangChain context retrieval frameworks popularized composable
                retrievers, document loaders, and agent executors. They are a
                useful reference vocabulary for enterprise buyers. Nabhi Labs
                engagements may use LangChain, LlamaIndex, or custom
                orchestration—chosen after the retrieval audit, not before.
              </p>
              <p>
                What we always ship regardless of stack: gold-question
                evaluation sets, permission tests, refusal behaviour, citation
                surfaces, and canaries for prompt or model changes. The{" "}
                <Link
                  className="text-[#31543a] underline-offset-4 hover:underline"
                  href="/resources/rag-evaluation-checklist"
                >
                  RAG evaluation checklist
                </Link>{" "}
                is the public starting point; production harnesses go further
                with regression gates tied to release.
              </p>
              <p>
                If your search intent is “agentic AI workflows” or “multi-agent
                workflows in enterprise systems,” the next step is not another
                framework shootout. It is a map of decisions, sources, and
                failure modes—then an architecture that Nabhi Persona and
                retrieval can support under load.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#0e1012] text-white">
          <div className="mx-auto max-w-[95rem] px-6 py-16 md:px-10">
            <h2 className="font-display text-[clamp(1.8rem,3vw,2.8rem)] font-medium tracking-[-0.04em]">
              Build the workflow with Nabhi Labs
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-white/60">
              Start with what feels complex. We will listen first, then talk
              agents, retrieval, and interfaces.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                className="rounded-full bg-[#a3e635] px-6 py-3 text-sm text-[#0f1c13]"
                href="/#begin"
              >
                Begin a conversation
              </Link>
              <Link
                className="rounded-full border border-white/20 px-6 py-3 text-sm text-white"
                href="/solutions/nabhi-persona"
              >
                Explore Nabhi Persona
              </Link>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
