import Link from "next/link";
import { aeoCitations, type PillarPageContent } from "@/lib/pillar-pages";
import {
  getProductByPath,
  productKeywordsCsv,
} from "@/lib/products";

type PillarPageProps = {
  page: PillarPageContent;
};

export function PillarPage({ page }: PillarPageProps) {
  const product = getProductByPath(page.path);
  const keywordList = product
    ? productKeywordsCsv(product)
    : page.primaryKeyword;

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: page.title,
    description: page.description,
    url: `https://nabhilabs.com${page.path}`,
    datePublished: page.datePublished,
    dateModified: page.dateModified,
    inLanguage: "en",
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
    keywords: keywordList,
  };

  const offeringJsonLd = product
    ? {
        "@context": "https://schema.org",
        "@type": product.schemaType,
        name: product.name,
        description: product.description,
        url: `https://nabhilabs.com${product.url}`,
        keywords: keywordList,
        provider: {
          "@type": "Organization",
          name: "Nabhi Labs",
          url: "https://nabhilabs.com",
        },
        brand: {
          "@type": "Brand",
          name: "Nabhi Labs",
        },
        ...(product.schemaType === "SoftwareApplication"
          ? {
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web",
            }
          : {}),
      }
    : null;

  return (
    <main className="relative" id="main-content">
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

      <section className="technical-grid relative overflow-hidden border-b border-[#d8e0d5] bg-[#f2f4f0]">
        <div className="mx-auto max-w-[95rem] px-6 pb-16 pt-28 md:px-10 md:pb-20 md:pt-32">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#5a7052]">
            [ {page.eyebrow} ]
          </p>
          <p className="mt-4 text-sm font-semibold tracking-[0.2em] text-[#0f1c13]">
            NABHI LABS
          </p>
          <h1 className="mt-6 max-w-4xl font-display text-[clamp(2.4rem,5vw,4.6rem)] font-medium leading-[0.95] tracking-[-0.05em] text-[#0f1c13]">
            {page.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-[#4a5b4e]">
            {page.lede}
          </p>
          {product ? (
            <p className="mt-5 max-w-2xl font-mono text-[10px] leading-5 tracking-[0.04em] text-[#5a7052]">
              Target words: {product.keywords.slice(0, 6).join(" · ")}
            </p>
          ) : null}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              className="rounded-full bg-[#1a3323] px-6 py-3 text-sm text-white transition-colors hover:bg-[#2c4f37]"
              href="/#begin"
            >
              Begin a conversation
            </Link>
            <Link
              className="text-sm text-[#31543a] underline-offset-4 hover:underline"
              href="/"
            >
              Back to home
            </Link>
          </div>
        </div>
      </section>

      {page.sections.map((section) => (
        <section
          className="border-b border-[#d8e0d5] bg-[#f7f6f1]"
          key={section.heading}
        >
          <div className="mx-auto max-w-[95rem] px-6 py-14 md:px-10 md:py-16">
            <h2 className="max-w-3xl font-display text-[clamp(1.8rem,3vw,2.8rem)] font-medium leading-[1.05] tracking-[-0.04em] text-[#0f1c13]">
              {section.heading}
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-sm leading-7 text-[#4a5b4e]">
              {section.body.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="border-b border-[#d8e0d5] bg-[#f2f4f0]" id="answers">
        <div className="mx-auto max-w-[95rem] px-6 py-14 md:px-10 md:py-16">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#5a7052]">
            [ Answers ]
          </p>
          <div className="mt-10 space-y-12">
            {page.faqs.map((faq) => (
              <article key={faq.question}>
                <h2 className="max-w-3xl font-display text-[clamp(1.5rem,2.5vw,2.2rem)] font-medium tracking-[-0.035em] text-[#0f1c13]">
                  {faq.question}
                </h2>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-[#4a5b4e]">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#d8e0d5] bg-[#f7f6f1]">
        <div className="mx-auto max-w-[95rem] px-6 py-14 md:px-10">
          <h2 className="font-display text-2xl tracking-[-0.03em] text-[#0f1c13]">
            Citations & further reading
          </h2>
          <ul className="mt-6 space-y-3 text-sm text-[#31543a]">
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

          <h2 className="mt-14 font-display text-2xl tracking-[-0.03em] text-[#0f1c13]">
            Related
          </h2>
          <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-sm text-[#31543a]">
            {page.related.map((item) => (
              <li key={item.href}>
                <Link className="underline-offset-4 hover:underline" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[#0e1012] text-white">
        <div className="mx-auto max-w-[95rem] px-6 py-16 md:px-10">
          <h2 className="font-display text-[clamp(2rem,4vw,3.4rem)] font-medium tracking-[-0.05em]">
            Start with what feels complex.
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-white/60">
            Email hello@nabhilabs.com or use the Begin form. Nabhi Labs usually
            replies within 24 hours for a thoughtful discussion.
          </p>
          <Link
            className="mt-8 inline-flex rounded-full bg-[#a3e635] px-6 py-3 text-sm text-[#0f1c13] transition-opacity hover:opacity-90"
            href="/#begin"
          >
            Connect with Nabhi Labs
          </Link>
        </div>
      </section>
    </main>
  );
}
