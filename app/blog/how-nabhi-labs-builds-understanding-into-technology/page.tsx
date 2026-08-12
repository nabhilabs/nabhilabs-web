import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How Nabhi Labs Builds Understanding Into Technology",
  description:
    "How Nabhi Labs turns understanding into Nabhi Persona and production systems—listen, observe, simplify, build.",
  keywords: [
    "Nabhi Labs",
    "Nabhi Labs engineering",
    "Nabhi Labs AI",
    "Nabhi Persona",
  ],
  alternates: {
    canonical: "/blog/how-nabhi-labs-builds-understanding-into-technology",
  },
  openGraph: {
    title: "How Nabhi Labs Builds Understanding Into Technology",
    description:
      "The operating sequence behind Nabhi Labs and Nabhi Persona.",
    url: "/blog/how-nabhi-labs-builds-understanding-into-technology",
    siteName: "Nabhi Labs",
    type: "article",
  },
};

export default function HowNabhiLabsBuildsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How Nabhi Labs Builds Understanding Into Technology",
    description:
      "The operating sequence behind Nabhi Labs and Nabhi Persona.",
    url: "https://www.nabhilabs.com/blog/how-nabhi-labs-builds-understanding-into-technology",
    datePublished: "2026-08-02",
    dateModified: "2026-08-02",
    author: {
      "@type": "Person",
      name: "Nabhi Labs Editorial",
      url: "https://www.nabhilabs.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Nabhi Labs",
      url: "https://www.nabhilabs.com",
    },
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
              [ Blog // Nabhi Labs ]
            </p>
            <h1 className="mt-6 max-w-4xl font-display text-[clamp(2.2rem,4.5vw,3.8rem)] font-medium leading-[0.98] tracking-[-0.05em] text-[#0f1c13]">
              How Nabhi Labs Builds Understanding Into Technology
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-[#4a5b4e]">
              Nabhi Labs does not start with a model. We start with the system
              that already exists—then build Nabhi Persona and supporting
              engineering when clarity demands it.
            </p>
          </div>
        </header>

        <section className="border-b border-[#d8e0d5] bg-[#f7f6f1]">
          <div className="mx-auto max-w-[95rem] px-6 py-14 md:px-10">
            <h2 className="max-w-3xl font-display text-[clamp(1.6rem,2.8vw,2.4rem)] font-medium tracking-[-0.04em] text-[#0f1c13]">
              Listen, observe, simplify, build
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-sm leading-7 text-[#4a5b4e]">
              <p>
                At Nabhi Labs, engineering is a consequence of understanding.
                Listening surfaces who decides and what hurts. Observation shows
                where knowledge fragments. Simplification removes tools and
                rituals that do not earn their keep. Only then does Nabhi Labs
                build—Nabhi Persona, retrieval, or agentic workflows matched to
                the map.
              </p>
              <p>
                That order is how Nabhi Labs stays distinct from generic “AI
                development company” factories. We are not optimizing for every
                Clutch category. We are optimizing for clarity under pressure.
              </p>
            </div>
          </div>
        </section>

        <section className="border-b border-[#d8e0d5] bg-[#f2f4f0]">
          <div className="mx-auto max-w-[95rem] px-6 py-14 md:px-10">
            <h2 className="max-w-3xl font-display text-[clamp(1.6rem,2.8vw,2.4rem)] font-medium tracking-[-0.04em] text-[#0f1c13]">
              What that looks like in practice
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-sm leading-7 text-[#4a5b4e]">
              <p>
                Nabhi Persona turns institutional knowledge into active
                intelligence. RAG engineering grounds answers in permissioned
                evidence. Agentic systems act only after retrieval and policy
                gates. Each layer inherits the same Nabhi Labs philosophy:
                understanding before technology.
              </p>
              <p>
                Read more about{" "}
                <Link
                  className="text-[#31543a] underline-offset-4 hover:underline"
                  href="/products/nabhi-persona"
                >
                  Nabhi Persona
                </Link>
                , the{" "}
                <Link
                  className="text-[#31543a] underline-offset-4 hover:underline"
                  href="/philosophy"
                >
                  Nabhi Labs philosophy
                </Link>
                , or return to the{" "}
                <Link
                  className="text-[#31543a] underline-offset-4 hover:underline"
                  href="/"
                >
                  Nabhi Labs
                </Link>{" "}
                homepage.
              </p>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
