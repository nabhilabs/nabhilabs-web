import type { Metadata } from "next";
import Link from "next/link";
import { brandKeywords } from "@/lib/keyword-strategy";

export const metadata: Metadata = {
  title: "About Nabhi Labs",
  description:
    "About Nabhi Labs—the company behind Nabhi Persona. Understanding first. Technology that follows. Founded in 2024.",
  keywords: [
    "About Nabhi Labs",
    "About Nabhi",
    "Nabhi Labs",
    "Nabhi technology",
    ...brandKeywords.slice(0, 8),
  ],
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Nabhi Labs",
    description:
      "Nabhi Labs transforms organizational complexity into clarity. Meet the company behind Nabhi Persona.",
    url: "/about",
  },
};

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Nabhi Labs",
    url: "https://nabhilabs.com/about",
    description:
      "About Nabhi Labs—understanding becomes technology through Nabhi Persona, RAG engineering, and systems work.",
    mainEntity: {
      "@type": "Organization",
      name: "Nabhi Labs",
      url: "https://nabhilabs.com",
      email: "hello@nabhilabs.com",
      foundingDate: "2024",
      sameAs: ["https://www.linkedin.com/company/nabhilabs"],
    },
    keywords: brandKeywords.join(", "),
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
            [ About // Nabhi Labs ]
          </p>
          <h1 className="mt-6 max-w-4xl font-display text-[clamp(2.4rem,5vw,4.6rem)] font-medium leading-[0.95] tracking-[-0.05em] text-[#0f1c13]">
            About Nabhi Labs
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-[#4a5b4e]">
            Nabhi Labs is a technology company founded in 2024. We transform
            organizational complexity into clarity—understanding first,
            technology that follows. Our signature creation is Nabhi Persona.
          </p>
        </div>
      </section>

      <section className="border-b border-[#d8e0d5] bg-[#f7f6f1]">
        <div className="mx-auto max-w-[95rem] px-6 py-14 md:px-10">
          <h2 className="max-w-3xl font-display text-[clamp(1.8rem,3vw,2.6rem)] font-medium tracking-[-0.04em] text-[#0f1c13]">
            What Nabhi Labs builds
          </h2>
          <div className="mt-8 max-w-3xl space-y-5 text-sm leading-7 text-[#4a5b4e]">
            <p>
              Nabhi Labs designs products, AI engineering systems, and knowledge
              platforms grounded in real human needs. Teams come to Nabhi when
              tools multiply, context fragments, and decisions lose their
              thread. We reconnect information, behaviour, and architecture so
              technology becomes a consequence of understanding—not a substitute
              for it.
            </p>
            <p>
              Nabhi Persona is the flagship: an intelligence layer that turns
              institutional knowledge into active, private, decision-ready
              understanding. Alongside it, Nabhi Labs delivers custom RAG
              engineering, agentic voice workflows, and healthcare AI
              integration when the system requires them.
            </p>
            <p>
              If you searched for Nabhi Labs, Nabhi technology, Nabhi AI
              capabilities, or even a near-miss spelling of our name—you are in
              the right place. We are Nabhi Labs, not an unrelated biotech
              institute or generic “second brain” consumer app.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-[#d8e0d5] bg-[#f2f4f0]">
        <div className="mx-auto max-w-[95rem] px-6 py-14 md:px-10">
          <h2 className="font-display text-[clamp(1.8rem,3vw,2.6rem)] font-medium tracking-[-0.04em] text-[#0f1c13]">
            Nabhi Labs philosophy
          </h2>
          <p className="mt-6 max-w-3xl text-sm leading-7 text-[#4a5b4e]">
            Listen, observe, simplify, then build. That sequence is the Nabhi
            Labs philosophy—and the spine of every engagement. Read the full
            philosophy page for how we move from complexity to architecture
            clarity.
          </p>
          <div className="mt-8 flex flex-wrap gap-6 text-sm text-[#31543a]">
            <Link className="underline-offset-4 hover:underline" href="/philosophy">
              Philosophy
            </Link>
            <Link
              className="underline-offset-4 hover:underline"
              href="/solutions/nabhi-persona"
            >
              Nabhi Persona
            </Link>
            <Link className="underline-offset-4 hover:underline" href="/#begin">
              Begin a conversation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
