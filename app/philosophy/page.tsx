import type { Metadata } from "next";
import Link from "next/link";
import { techKeywords } from "@/lib/keyword-strategy";

export const metadata: Metadata = {
  title: "Nabhi Labs Philosophy — Understanding Before Technology",
  description:
    "Nabhi Labs philosophy: simplifying complex tech architectures and moving from complexity to architecture clarity—understanding first.",
  keywords: [
    "Nabhi Labs philosophy",
    ...techKeywords.philosophy,
    "architecture clarity",
    "simplifying complex tech systems",
  ],
  alternates: { canonical: "/philosophy" },
  openGraph: {
    title: "Nabhi Labs Philosophy",
    description:
      "How Nabhi Labs moves from complexity to architecture clarity.",
    url: "/philosophy",
  },
};

export default function PhilosophyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Nabhi Labs Philosophy",
    url: "https://nabhilabs.com/philosophy",
    description:
      "Simplifying complex tech architectures—understanding before technology.",
    keywords: [
      "Nabhi Labs philosophy",
      ...techKeywords.philosophy,
    ].join(", "),
  };

  return (
    <main className="relative" id="main-content">
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        type="application/ld+json"
      />

      <section className="technical-grid border-b border-[#d8e0d5] bg-[#f2f4f0]">
        <div className="mx-auto max-w-[95rem] px-6 pb-16 pt-28 md:px-10 md:pt-32">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#5a7052]">
            [ Philosophy ]
          </p>
          <h1 className="mt-6 max-w-4xl font-display text-[clamp(2.4rem,5vw,4.6rem)] font-medium leading-[0.95] tracking-[-0.05em] text-[#0f1c13]">
            Nabhi Labs philosophy: understanding before technology
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-[#4a5b4e]">
            Moving from complexity to architecture clarity is not a slogan. It
            is the operating sequence behind Nabhi Persona and every Nabhi Labs
            engagement.
          </p>
        </div>
      </section>

      <section className="border-b border-[#d8e0d5] bg-[#f7f6f1]">
        <div className="mx-auto max-w-[95rem] px-6 py-14 md:px-10">
          <h2 className="max-w-3xl font-display text-[clamp(1.8rem,3vw,2.6rem)] font-medium tracking-[-0.04em] text-[#0f1c13]">
            Simplifying complex tech architectures
          </h2>
          <div className="mt-8 max-w-3xl space-y-5 text-sm leading-7 text-[#4a5b4e]">
            <p>
              Organizations rarely lack tools. They lack a shared picture of
              what matters. Nabhi Labs starts by listening and observing how
              work actually moves—then removing what does not matter—before
              proposing models, agents, or platforms. Simplifying complex tech
              architectures means fewer speculative layers and more inspectable
              decisions.
            </p>
            <p>
              Architecture clarity appears when ownership, trusted sources, and
              failure modes are visible. That is why Nabhi Labs sequences
              listen, observe, simplify, build. Technology follows
              understanding; it does not replace it.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-[#d8e0d5] bg-[#f2f4f0]">
        <div className="mx-auto max-w-[95rem] px-6 py-14 md:px-10">
          <h2 className="max-w-3xl font-display text-[clamp(1.8rem,3vw,2.6rem)] font-medium tracking-[-0.04em] text-[#0f1c13]">
            Automating workflows with active intelligence
          </h2>
          <div className="mt-8 max-w-3xl space-y-5 text-sm leading-7 text-[#4a5b4e]">
            <p>
              Active intelligence captures, retrieves, reasons, and acts—inside
              permission boundaries. Nabhi Persona and agentic workflows
              automate only after the system is understood. Automating workflows
              with active intelligence without that order creates fluent chaos.
            </p>
            <p>
              For the technical path—agentic AI for knowledge retrieval and
              multi-agent enterprise workflows—see the engineering deep dive.
              For the product path, explore Nabhi Persona.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-6 text-sm text-[#31543a]">
            <Link
              className="underline-offset-4 hover:underline"
              href="/blog/agentic-ai-multi-agent-workflows"
            >
              Agentic AI deep dive
            </Link>
            <Link
              className="underline-offset-4 hover:underline"
              href="/solutions/nabhi-persona"
            >
              Nabhi Persona
            </Link>
            <Link className="underline-offset-4 hover:underline" href="/about">
              About Nabhi Labs
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
