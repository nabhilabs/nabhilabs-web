import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  ArrowUpRight,
  ClipboardList,
  Gauge,
  HandHelping,
  Layers3,
  Library,
  ListChecks,
  Lock,
  Phone,
  Quote,
  RefreshCw,
  Search,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { aeoCitations, type PillarPageContent } from "@/lib/pillar-pages";
import {
  getProductByPath,
  productKeywordsCsv,
} from "@/lib/products";
import { routes } from "@/lib/routes";
import type {
  ServiceCapability,
  ServiceLandingContent,
} from "@/lib/service-landings";
import { SITE_URL } from "@/lib/site";

const icons: Record<ServiceCapability["icon"], LucideIcon> = {
  library: Library,
  shield: ShieldCheck,
  search: Search,
  quote: Quote,
  workflow: Workflow,
  refresh: RefreshCw,
  clipboard: ClipboardList,
  layers: Layers3,
  gauge: Gauge,
  lock: Lock,
  activity: Activity,
  mic: Phone,
  hand: HandHelping,
  phone: Phone,
  list: ListChecks,
};

const offeringStrip = [
  { href: routes.persona, label: "Nabhi Persona" },
  { href: routes.cares, label: "Nabhi Cares" },
  { href: routes.knowledge, label: "Knowledge" },
  { href: routes.rag, label: "RAG" },
  { href: routes.voice, label: "Voice" },
] as const;

type ServiceLandingProps = {
  page: PillarPageContent;
  landing: ServiceLandingContent;
};

export function ServiceLanding({ page, landing }: ServiceLandingProps) {
  const product = getProductByPath(page.path);
  const keywordList = product
    ? productKeywordsCsv(product)
    : page.primaryKeyword;
  const splitCopy = page.sections[0]?.body[0] ?? page.lede;
  const headlineParts = splitHeadline(page.headline, landing.highlight);

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
    author: {
      "@type": "Person",
      name: "Nabhi Labs Editorial",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Nabhi Labs",
      url: SITE_URL,
    },
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
        provider: {
          "@type": "Organization",
          name: "Nabhi Labs",
          url: SITE_URL,
        },
        brand: { "@type": "Brand", name: "Nabhi Labs" },
      }
    : null;

  return (
    <main className="relative bg-[#0e1012]" id="main-content">
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

      <section
        aria-labelledby="service-hero-title"
        className="relative overflow-hidden px-6 pb-16 pt-28 md:px-10 md:pb-24 md:pt-32"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(26,51,35,0.55)_0%,transparent_55%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-24 h-64 opacity-40 [background-image:radial-gradient(rgba(205,224,184,0.12)_1px,transparent_1px)] [background-size:28px_28px]"
        />

        <div className="relative mx-auto max-w-4xl text-center">
          <p className="inline-flex rounded-full border border-[#cde0b8]/25 bg-white/5 px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-[#cde0b8]">
            {landing.badge}
          </p>
          <h1
            className="mt-8 font-display text-[clamp(2.4rem,6vw,4.6rem)] font-medium leading-[0.95] tracking-[-0.05em] text-white"
            id="service-hero-title"
          >
            {headlineParts.before}
            {headlineParts.match ? (
              <span className="bg-[linear-gradient(90deg,#cde0b8_0%,#a3e635_100%)] bg-clip-text text-transparent">
                {headlineParts.match}
              </span>
            ) : null}
            {headlineParts.after}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/60 md:text-base">
            {page.lede}
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-xs font-medium text-[#0f1c13] transition-colors hover:bg-[#cde0b8]"
              href={routes.contact}
            >
              Book a conversation
              <ArrowUpRight aria-hidden className="size-3.5" />
            </Link>
            <Link
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-xs font-medium text-white transition-colors hover:bg-white/10"
              href="#capabilities"
            >
              See how it works
            </Link>
          </div>
        </div>

        <div className="relative mx-auto mt-14 flex max-w-[95rem] flex-wrap items-end justify-between gap-6">
          <p className="text-left text-xs leading-5 text-white/45">
            {landing.proofLeft}
            <span className="mt-1 block text-white/70">{landing.proofRight}</span>
          </p>
          <aside className="max-w-xs rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-left">
            <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#cde0b8]">
              {landing.asideTitle}
            </p>
            <p className="mt-2 text-xs leading-5 text-white/60">
              {landing.asideCopy}
            </p>
          </aside>
        </div>
      </section>

      <section
        aria-label="Nabhi Labs offerings"
        className="border-y border-white/10 px-6 py-8 md:px-10"
      >
        <ul className="mx-auto flex max-w-[95rem] flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {offeringStrip.map((item, index) => (
            <li className="flex items-center gap-8" key={item.href}>
              {index > 0 ? (
                <span aria-hidden className="text-white/25">
                  +
                </span>
              ) : null}
              <Link
                className={`font-mono text-[10px] uppercase tracking-[0.16em] transition-colors ${
                  item.href === page.path
                    ? "text-[#a3e635]"
                    : "text-white/50 hover:text-white"
                }`}
                href={item.href}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section
        aria-labelledby="service-capabilities-heading"
        className="bg-[#f2f4f0] px-6 py-16 md:px-10 md:py-24"
        id="capabilities"
      >
        <div className="mx-auto max-w-[95rem] text-center">
          <h2
            className="font-display text-[clamp(1.8rem,3.4vw,2.8rem)] font-medium tracking-[-0.04em] text-[#0f1c13]"
            id="service-capabilities-heading"
          >
            {landing.gridHeading}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[#4a5b4e]">
            {landing.gridLede}
          </p>
        </div>
        <ul className="mx-auto mt-12 grid max-w-[95rem] gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {landing.capabilities.map((capability) => {
            const Icon = icons[capability.icon];
            return (
              <li
                className="rounded-2xl border border-[#d8e0d5] bg-[#f7f6f1] p-6"
                key={capability.title}
              >
                <span className="grid size-10 place-items-center rounded-xl bg-[#0f1c13] text-[#cde0b8]">
                  <Icon aria-hidden className="size-4" strokeWidth={1.75} />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold tracking-[-0.02em] text-[#0f1c13]">
                  {capability.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#4a5b4e]">
                  {capability.copy}
                </p>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="technical-grid bg-[#0e1012] px-6 py-16 text-center md:px-10 md:py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-[clamp(1.8rem,3.4vw,2.8rem)] font-medium leading-[1.05] tracking-[-0.04em] text-white">
            {landing.midHeading}
          </h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              className="inline-flex items-center gap-2 rounded-full bg-[#a3e635] px-6 py-3 text-xs font-medium text-[#0f1c13] transition-colors hover:bg-[#cde0b8]"
              href={routes.contact}
            >
              Talk to Nabhi Labs
              <ArrowUpRight aria-hidden className="size-3.5" />
            </Link>
            <Link
              className="inline-flex items-center rounded-full border border-white/20 px-6 py-3 text-xs font-medium text-white transition-colors hover:bg-white/10"
              href={landing.relatedProduct.href}
            >
              {landing.relatedProduct.label}
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f6f1] px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-[95rem] overflow-hidden rounded-2xl border border-[#d8e0d5] bg-[#0f1c13] lg:grid-cols-2">
          <div className="flex flex-col justify-end p-8 md:p-12">
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#cde0b8]">
              {landing.splitLabel}
            </p>
            <h2 className="mt-4 font-display text-[clamp(1.6rem,3vw,2.4rem)] font-medium leading-[1.08] tracking-[-0.04em] text-white">
              {landing.splitHeading}
            </h2>
            <p className="mt-4 max-w-md text-sm leading-7 text-white/65">
              {splitCopy}
            </p>
            <Link
              className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-[#a3e635] px-6 py-3 text-xs font-medium text-[#0f1c13] transition-colors hover:bg-[#cde0b8]"
              href={routes.contact}
            >
              Book a conversation
              <ArrowUpRight aria-hidden className="size-3.5" />
            </Link>
          </div>
          <div className="relative min-h-[16rem] lg:min-h-[22rem]">
            <Image
              alt={landing.splitImageAlt}
              className="object-cover object-center"
              fill
              loading="lazy"
              sizes="(max-width: 1024px) 100vw, 50vw"
              src={assetSrc(landing.splitImage)}
            />
          </div>
        </div>
      </section>

      <section
        aria-labelledby="service-faq-heading"
        className="border-t border-[#d8e0d5] bg-[#f2f4f0] px-6 py-16 md:px-10 md:py-24"
        id="answers"
      >
        <div className="mx-auto max-w-[95rem]">
          <h2
            className="font-display text-[clamp(1.6rem,3vw,2.4rem)] font-medium tracking-[-0.04em] text-[#0f1c13]"
            id="service-faq-heading"
          >
            Common questions
          </h2>
          <ul className="mt-10 grid gap-5 lg:grid-cols-2">
            {page.faqs.map((faq) => (
              <li
                className="rounded-2xl border border-[#d8e0d5] bg-[#f7f6f1] p-6"
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
        </div>
      </section>

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
                    className="underline-offset-4 hover:underline"
                    href={citation.href}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
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
    </main>
  );
}

function splitHeadline(headline: string, highlight: string) {
  const index = headline.toLowerCase().indexOf(highlight.toLowerCase());
  if (index === -1) {
    return { before: headline, match: "", after: "" };
  }
  return {
    before: headline.slice(0, index),
    match: headline.slice(index, index + highlight.length),
    after: headline.slice(index + highlight.length),
  };
}

function assetSrc(path: string) {
  const slash = path.lastIndexOf("/");
  const dir = path.slice(0, slash + 1);
  const file = path.slice(slash + 1);
  return `${dir}${encodeURIComponent(file)}`;
}
