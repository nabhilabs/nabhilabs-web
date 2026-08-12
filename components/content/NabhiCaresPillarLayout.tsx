import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  BookOpen,
  ClipboardCheck,
  FileSearch,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { aeoCitations, type PillarPageContent } from "@/lib/pillar-pages";
import {
  getProductByPath,
  productKeywordsCsv,
} from "@/lib/products";
import { SITE_URL } from "@/lib/site";

type NabhiCaresPillarLayoutProps = {
  page: PillarPageContent;
};

const capabilityCards: Array<{
  title: string;
  copy: string;
  icon: LucideIcon;
  features: string[];
}> = [
  {
    title: "Clinical & ops clarity",
    copy: "Reduce rediscovery across scheduling, documentation, and departmental knowledge—without another disconnected system.",
    icon: Stethoscope,
    features: [
      "Coherent picture of status, policy, and next action",
      "Workflows that connect systems teams already use",
      "Knowledge usable under operational pressure",
    ],
  },
  {
    title: "Assistive retrieval",
    copy: "HIPAA-aware RAG and retrieval scoped to approved corpora—humans stay accountable for clinical judgment.",
    icon: FileSearch,
    features: [
      "Least privilege and permission-aware search",
      "Clear boundaries: assistive vs automated decisions",
      "Auditability built into retrieval paths",
    ],
  },
  {
    title: "Compliance posture",
    copy: "Data classification, retention, and access patterns defined before models—not assumed from marketing copy.",
    icon: ShieldCheck,
    features: [
      "NIST AI RMF & OECD-aligned practices",
      "Scoped agents and retrieval per engagement",
      "Regulatory certification scoped with your stakeholders",
    ],
  },
];

export function NabhiCaresPillarLayout({ page }: NabhiCaresPillarLayoutProps) {
  const product = getProductByPath(page.path);
  const keywordList = product
    ? productKeywordsCsv(product)
    : page.primaryKeyword;

  const [pressureSection, complianceSection] = page.sections;
  const insightColumns = pressureSection?.body ?? [];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: page.title,
    description: page.description,
    url: `${SITE_URL}${page.path}`,
    datePublished: page.datePublished,
    dateModified: page.dateModified,
    inLanguage: "en",
    author: { "@type": "Person", name: "Nabhi Labs Editorial", url: SITE_URL },
    publisher: { "@type": "Organization", name: "Nabhi Labs", url: SITE_URL },
    keywords: keywordList,
  };

  const offeringJsonLd = product
    ? {
        "@context": "https://schema.org",
        "@type": product.schemaType,
        name: product.name,
        description: product.description,
        url: `${SITE_URL}${product.url}`,
        keywords: keywordList,
        provider: { "@type": "Organization", name: "Nabhi Labs", url: SITE_URL },
        brand: { "@type": "Brand", name: "Nabhi Labs" },
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
      }
    : null;

  return (
    <>
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
        type="application/ld+json"
      />
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        type="application/ld+json"
      />
      {offeringJsonLd ? (
        <script
          dangerouslySetInnerHTML={{ __html: JSON.stringify(offeringJsonLd) }}
          type="application/ld+json"
        />
      ) : null}

      {/* 01 — Feature highlight card */}
      <section className="bg-[#f2f4f0] px-6 py-14 md:px-10 md:py-20">
        <div className="mx-auto max-w-[95rem] rounded-3xl border border-[#d8e0d5] bg-white p-6 shadow-[0_12px_48px_rgba(15,28,19,0.06)] md:p-10 lg:p-14">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center">
            <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-2xl border border-[#d8e0d5] bg-[#0e1012] lg:mx-0 lg:max-w-none">
              <Image
                alt="Healthcare systems and care workflows connecting into one clarity layer — Nabhi Cares"
                className="object-contain object-center p-4"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 42vw"
                src="/assets/nabhi_cares_challenge_asset.png"
              />
            </div>

            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#5a7052]">
                [ 01 // The challenge ]
              </p>
              <h2 className="mt-5 font-display text-[clamp(1.9rem,3.4vw,3rem)] font-semibold leading-[1.08] tracking-[-0.04em] text-[#0f1c13]">
                {pressureSection?.heading}
              </h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-[#4a5b4e]">
                {pressureSection?.body[0]}
              </p>
              <Link
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#1a3323] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#2c4f37]"
                href="/contact"
              >
                Book a conversation
                <ArrowUpRight aria-hidden className="size-4" />
              </Link>
            </div>
          </div>

          <div className="mt-12 grid gap-8 border-t border-[#e8ece6] pt-10 md:grid-cols-3 md:gap-10">
            {insightColumns.map((paragraph, index) => (
              <div key={paragraph.slice(0, 40)}>
                <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-[#78966a]">
                  Insight {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-3 text-sm leading-6 text-[#4a5b4e]">
                  {paragraph}
                </p>
              </div>
            ))}
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-[#78966a]">
                Insight 03
              </p>
              <p className="mt-3 text-sm leading-6 text-[#4a5b4e]">
                {complianceSection?.body[0]}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 02 — Capabilities grid */}
      <section className="bg-[#f7f6f1] px-6 py-14 md:px-10 md:py-20">
        <div className="mx-auto max-w-[95rem]">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#5a7052]">
                [ 02 // Capabilities ]
              </p>
              <h2 className="mt-4 max-w-2xl font-display text-[clamp(1.9rem,3.2vw,2.8rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-[#0f1c13]">
                {complianceSection?.heading}
              </h2>
            </div>
            <Link
              className="inline-flex w-fit items-center gap-2 rounded-full border border-[#c8d6c4] bg-white px-5 py-2.5 text-xs font-medium text-[#31543a] transition-colors hover:border-[#78966a]"
              href="/services/rag-engineering"
            >
              RAG engineering
              <ArrowUpRight aria-hidden className="size-3.5" />
            </Link>
          </div>

          <p className="mt-5 max-w-3xl text-sm leading-7 text-[#4a5b4e]">
            {page.lede}
          </p>

          <ul className="mt-10 grid gap-6 lg:grid-cols-3">
            {capabilityCards.map(({ title, copy, icon: Icon, features }) => (
              <li
                className="flex flex-col rounded-2xl border border-[#d8e0d5] bg-white p-6 shadow-[0_8px_30px_rgba(15,28,19,0.04)] md:p-8"
                key={title}
              >
                <span className="grid size-11 place-items-center rounded-full border border-[#e8ece6] bg-[#f2f4f0] text-[#31543a]">
                  <Icon aria-hidden className="size-5" strokeWidth={1.5} />
                </span>
                <h3 className="mt-6 font-display text-xl font-semibold tracking-[-0.03em] text-[#0f1c13]">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#4a5b4e]">{copy}</p>
                <p className="mt-6 font-mono text-[9px] uppercase tracking-[0.12em] text-[#5a7052]">
                  Features & benefits
                </p>
                <ul className="mt-3 space-y-2.5">
                  {features.map((feature) => (
                    <li
                      className="flex gap-2 text-sm leading-6 text-[#4a5b4e]"
                      key={feature}
                    >
                      <span
                        aria-hidden
                        className="mt-2 size-1 shrink-0 rounded-full bg-[#a3e635]"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 03 — Ecosystem */}
      <section className="bg-[#f2f4f0] px-6 py-14 md:px-10 md:py-20">
        <div className="mx-auto max-w-[95rem]">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#5a7052]">
            [ 03 // Ecosystem ]
          </p>
          <h2 className="mt-4 max-w-xl font-display text-[clamp(1.8rem,3vw,2.6rem)] font-semibold leading-[1.08] tracking-[-0.04em] text-[#0f1c13]">
            Healthcare AI that connects to the stack
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-[#4a5b4e]">
            Nabhi Cares ships alongside knowledge platforms, RAG engineering,
            and agentic voice—so care operations gain clarity without another
            silo.
          </p>

          <ul className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {page.related.map((item) => (
              <li key={item.href}>
                <Link
                  className="flex h-full min-h-[5.5rem] items-center justify-center rounded-2xl border border-[#d8e0d5] bg-white px-4 py-6 text-center text-sm font-medium text-[#31543a] shadow-sm transition-[border-color,box-shadow] hover:border-[#78966a] hover:shadow-md"
                  href={item.href}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                className="flex h-full min-h-[5.5rem] items-center justify-center rounded-2xl border border-[#d8e0d5] bg-white px-4 py-6 text-center text-sm font-medium text-[#31543a] shadow-sm transition-[border-color,box-shadow] hover:border-[#78966a] hover:shadow-md"
                href="/products/nabhi-persona"
              >
                Nabhi Persona
              </Link>
            </li>
          </ul>
        </div>
      </section>

      {/* 04 — Split media */}
      <section className="bg-[#f7f6f1] px-6 py-14 md:px-10 md:py-20">
        <div className="mx-auto grid max-w-[95rem] gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#5a7052]">
              [ 04 // Approach ]
            </p>
            <h2 className="mt-4 font-display text-[clamp(1.9rem,3.2vw,2.8rem)] font-semibold leading-[1.08] tracking-[-0.04em] text-[#0f1c13]">
              Assistive by design—not replacing clinical judgment
            </h2>
            <p className="mt-6 text-sm leading-7 text-[#4a5b4e]">
              {pressureSection?.body[1]}
            </p>
            <p className="mt-5 text-sm leading-7 text-[#4a5b4e]">
              {complianceSection?.body[0]}
            </p>
            <Link
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[#31543a] underline-offset-4 hover:underline"
              href="/resources/rag-evaluation-checklist"
            >
              RAG evaluation checklist
              <ClipboardCheck aria-hidden className="size-4" />
            </Link>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-[#d8e0d5] shadow-[0_20px_60px_rgba(15,28,19,0.12)]">
            <Image
              alt="Nabhi Cares — healthcare AI with clarity and trust"
              className="object-cover object-[68%_center]"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              src="/assets/nabhi_cares_wallpaper.png"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-[linear-gradient(135deg,rgba(15,28,19,0.15)_0%,rgba(15,28,19,0.55)_100%)]"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#cde0b8]">
                Theatre replaces
              </p>
              <p className="mt-2 font-display text-4xl font-semibold tracking-[-0.05em] text-white md:text-5xl">
                Care supports
              </p>
              <Link
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#cde0b8] px-5 py-2.5 text-xs font-medium text-[#0f1c13] transition-colors hover:bg-white"
                href="/contact"
              >
                Talk to Nabhi Labs
                <ArrowUpRight aria-hidden className="size-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 05 — Mission + FAQ */}
      <section className="bg-[#f2f4f0] px-6 py-14 md:px-10 md:py-20" id="answers">
        <div className="mx-auto grid max-w-[95rem] gap-12 lg:grid-cols-2 lg:items-stretch">
          <div className="relative min-h-[22rem] overflow-hidden rounded-3xl border border-[#d8e0d5] lg:min-h-[32rem]">
            <Image
              alt="Care team collaboration"
              className="object-cover object-center"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              src="/assets/about_us_wallpaper.png"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,rgba(15,28,19,0.65)_100%)]"
            />
            <div className="absolute inset-x-0 bottom-0 p-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#cde0b8]">
                Care operations deserve clarity
              </p>
              <p className="mt-2 font-display text-2xl font-semibold tracking-[-0.03em] text-white">
                Human accountability stays at the center.
              </p>
            </div>
          </div>

          <div className="flex flex-col">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#5a7052]">
              [ 05 // Answers ]
            </p>
            <h2 className="mt-4 font-display text-[clamp(1.8rem,3vw,2.4rem)] font-semibold tracking-[-0.04em] text-[#0f1c13]">
              Common questions
            </h2>
            <ul className="mt-8 flex flex-1 flex-col gap-5">
              {page.faqs.map((faq) => (
                <li
                  className="flex flex-1 flex-col justify-center rounded-2xl border border-[#d8e0d5] bg-white p-6 shadow-sm"
                  key={faq.question}
                >
                  <h3 className="font-display text-lg font-semibold tracking-[-0.02em] text-[#0f1c13]">
                    {faq.question}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#4a5b4e]">
                    {faq.answer}
                  </p>
                </li>
              ))}
            </ul>
            <Link
              className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-[#1a3323] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#2c4f37]"
              href="/contact"
            >
              Contact Nabhi Labs
              <ArrowUpRight aria-hidden className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer — citations & related */}
      <section className="border-t border-[#d8e0d5] bg-[#ebf0e8] px-6 py-14 md:px-10">
        <div className="mx-auto grid max-w-[95rem] gap-12 md:grid-cols-2">
          <div>
            <h2 className="font-display text-xl font-semibold tracking-[-0.03em] text-[#0f1c13]">
              Citations & further reading
            </h2>
            <ul className="mt-5 space-y-2.5 text-sm text-[#31543a]">
              {aeoCitations.map((citation) => (
                <li key={citation.href}>
                  <a
                    className="inline-flex items-center gap-1.5 underline-offset-4 hover:underline"
                    href={citation.href}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <BookOpen aria-hidden className="size-3.5 shrink-0" />
                    {citation.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-xl font-semibold tracking-[-0.03em] text-[#0f1c13]">
              Related
            </h2>
            <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#31543a]">
              {page.related.map((item) => (
                <li key={item.href}>
                  <Link
                    className="underline-offset-4 hover:underline"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0e1012] text-white">
        <div className="mx-auto max-w-[95rem] px-6 py-16 md:px-10">
          <h2 className="font-display text-[clamp(2rem,4vw,3.4rem)] font-medium tracking-[-0.05em]">
            Start with what feels complex.
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-white/60">
            Email hello@nabhilabs.com or send a note on the contact page. Nabhi Labs usually
            replies within 24 hours for a thoughtful discussion.
          </p>
          <Link
            className="mt-8 inline-flex rounded-full bg-[#a3e635] px-6 py-3 text-sm text-[#0f1c13] transition-opacity hover:opacity-90"
            href="/contact"
          >
            Book a conversation
          </Link>
        </div>
      </section>
    </>
  );
}
