import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Writing from Nabhi Labs on Nabhi Persona, Nabhi Cares, second-brain governance, healthcare operations, and RAG.",
  keywords: [
    "Nabhi Labs blog",
    "Nabhi Persona",
    "Nabhi Cares",
    "enterprise second brain",
    "healthcare AI",
  ],
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog | Nabhi Labs",
    description: "Engineering and philosophy notes from Nabhi Labs.",
    url: "/blog",
    siteName: "Nabhi Labs",
  },
};

const posts = [
  {
    href: "/blog/why-enterprise-second-brain-fails-without-governance",
    title: "Why an Enterprise Second Brain Fails Without Governance",
    blurb:
      "Why second-brain tools stall in enterprises—and how Nabhi Persona starts with ownership and evidence.",
  },
  {
    href: "/blog/from-scattered-docs-to-decision-ready-knowledge",
    title: "From Scattered Docs to Decision-Ready Knowledge",
    blurb:
      "How Nabhi Persona turns institutional knowledge into answers you can inspect.",
  },
  {
    href: "/blog/healthcare-operations-clarity-nabhi-cares",
    title: "Healthcare Operations Starve for Clarity",
    blurb:
      "Nabhi Cares on care operations that drown in systems and starve for a coherent picture.",
  },
  {
    href: "/blog/hipaa-aware-rag-assistive-healthcare-ai",
    title: "HIPAA-Aware RAG: What Assistive Actually Means",
    blurb:
      "Permissioned retrieval for healthcare—humans stay accountable for clinical judgment.",
  },
  {
    href: "/blog/how-nabhi-labs-builds-understanding-into-technology",
    title: "How Nabhi Labs Builds Understanding Into Technology",
    blurb:
      "The operating sequence behind Nabhi Persona—listen, observe, simplify, build.",
  },
  {
    href: "/blog/agentic-ai-multi-agent-workflows",
    title: "Agentic AI & Multi-Agent Workflows",
    blurb:
      "How Nabhi Labs designs agentic retrieval and multi-agent enterprise workflows.",
  },
] as const;

export default function BlogIndexPage() {
  return (
    <main className="relative" id="main-content">
      <section className="technical-grid border-b border-[#d8e0d5] bg-[#f2f4f0]">
        <div className="mx-auto max-w-[95rem] px-6 pb-16 pt-28 md:px-10 md:pt-32">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#5a7052]">
            [ Blog ]
          </p>
          <h1 className="mt-6 max-w-4xl font-display text-[clamp(2.4rem,5vw,4.6rem)] font-medium leading-[0.95] tracking-[-0.05em] text-[#0f1c13]">
            Blog from Nabhi Labs
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-[#4a5b4e]">
            Notes on how Nabhi Labs thinks and builds—written to reinforce the
            brand–domain association, not to chase every outsourcing keyword.
          </p>
        </div>
      </section>

      <section className="bg-[#f7f6f1]">
        <div className="mx-auto max-w-[95rem] space-y-10 px-6 py-14 md:px-10">
          {posts.map((post) => (
            <article key={post.href}>
              <h2 className="font-display text-2xl tracking-[-0.03em] text-[#0f1c13]">
                <Link
                  className="underline-offset-4 hover:underline"
                  href={post.href}
                >
                  {post.title}
                </Link>
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-[#4a5b4e]">
                {post.blurb}
              </p>
            </article>
          ))}
          <p className="text-sm text-[#4a5b4e]">
            Visit the{" "}
            <Link
              className="text-[#31543a] underline-offset-4 hover:underline"
              href="/"
            >
              Nabhi Labs
            </Link>{" "}
            homepage or read{" "}
            <Link
              className="text-[#31543a] underline-offset-4 hover:underline"
              href="/about"
            >
              about Nabhi Labs
            </Link>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
