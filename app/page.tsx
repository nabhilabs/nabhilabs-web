import type { Metadata } from "next";
import { DeferredBelowFold } from "@/components/sections/DeferredBelowFold";
import { HeroSection } from "@/components/sections/HeroSection";
import { aeoFaqs } from "@/lib/aeo-faq";
import { brandKeywords } from "@/lib/keyword-strategy";
import { SITE_URL } from "@/lib/site";

const siteUrl = SITE_URL;
const siteTitle = "Nabhi Labs | Understanding Becomes Technology";
const siteDescription =
  "Nabhi Labs builds Nabhi Persona, RAG engineering, and agentic workflows so organizations move from complexity to clarity—understanding first, technology that follows.";

export const metadata: Metadata = {
  title: {
    absolute: siteTitle,
  },
  description: siteDescription,
  keywords: [...brandKeywords],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "/",
    siteName: "Nabhi Labs",
  },
};

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: siteTitle,
  description: siteDescription,
  url: siteUrl,
  datePublished: "2024-06-01",
  dateModified: "2026-08-02",
  inLanguage: "en",
  keywords: brandKeywords.join(", "),
  isPartOf: {
    "@type": "WebSite",
    name: "Nabhi Labs",
    url: siteUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  },
  author: {
    "@type": "Person",
    name: "Nabhi Labs Editorial",
    url: siteUrl,
  },
  publisher: {
    "@type": "Organization",
    name: "Nabhi Labs",
    url: siteUrl,
  },
  about: {
    "@type": "Organization",
    name: "Nabhi Labs",
    url: siteUrl,
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: aeoFaqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function HomePage() {
  return (
    <main id="main-content">
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
        type="application/ld+json"
      />
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        type="application/ld+json"
      />
      <HeroSection />
      <DeferredBelowFold />
    </main>
  );
}
