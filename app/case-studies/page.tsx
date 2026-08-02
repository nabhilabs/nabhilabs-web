import type { Metadata } from "next";
import Link from "next/link";
import { caseStudyIndex } from "@/lib/pillar-pages";
import { getProductByPath, productKeywordsCsv } from "@/lib/products";

const product = getProductByPath(caseStudyIndex.path);

export const metadata: Metadata = {
  title: caseStudyIndex.title,
  description: caseStudyIndex.description,
  keywords: product?.keywords,
  alternates: { canonical: caseStudyIndex.path },
  openGraph: {
    title: caseStudyIndex.title,
    description: caseStudyIndex.description,
    url: caseStudyIndex.path,
  },
};

export default function CaseStudiesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: caseStudyIndex.title,
    description: caseStudyIndex.description,
    url: `https://nabhilabs.com${caseStudyIndex.path}`,
    dateModified: "2026-08-02",
    keywords: product ? productKeywordsCsv(product) : undefined,
    author: {
      "@type": "Person",
      name: "Nabhi Labs Editorial",
      url: "https://nabhilabs.com",
    },
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
            [ Proof // Patterns ]
          </p>
          <p className="mt-4 text-sm font-semibold tracking-[0.2em] text-[#0f1c13]">
            NABHI LABS
          </p>
          <h1 className="mt-6 max-w-4xl font-display text-[clamp(2.4rem,5vw,4.6rem)] font-medium leading-[0.95] tracking-[-0.05em] text-[#0f1c13]">
            {caseStudyIndex.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-[#4a5b4e]">
            {caseStudyIndex.lede}
          </p>
        </div>
      </section>

      {caseStudyIndex.patterns.map((pattern) => (
        <section
          className="border-b border-[#d8e0d5] bg-[#f7f6f1]"
          key={pattern.title}
        >
          <div className="mx-auto max-w-[95rem] px-6 py-14 md:px-10">
            <h2 className="max-w-3xl font-display text-[clamp(1.8rem,3vw,2.6rem)] font-medium tracking-[-0.04em] text-[#0f1c13]">
              {pattern.title}
            </h2>
            <p className="mt-6 max-w-3xl text-sm leading-7 text-[#4a5b4e]">
              {pattern.body}
            </p>
          </div>
        </section>
      ))}

      <section className="bg-[#f2f4f0]">
        <div className="mx-auto max-w-[95rem] px-6 py-14 md:px-10">
          <h2 className="font-display text-2xl tracking-[-0.03em] text-[#0f1c13]">
            Related
          </h2>
          <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-sm text-[#31543a]">
            {caseStudyIndex.related.map((item) => (
              <li key={item.href}>
                <Link className="underline-offset-4 hover:underline" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            className="mt-10 inline-flex rounded-full bg-[#1a3323] px-6 py-3 text-sm text-white hover:bg-[#2c4f37]"
            href="/#begin"
          >
            Discuss your system
          </Link>
        </div>
      </section>
    </main>
  );
}
