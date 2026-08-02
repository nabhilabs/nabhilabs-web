import type { Metadata } from "next";
import { DeferredBelowFold } from "@/components/sections/DeferredBelowFold";
import { HeroSection } from "@/components/sections/HeroSection";
import { aeoFaqs } from "@/lib/aeo-faq";

const siteUrl = "https://nabhilabs.com";
const siteTitle = "Nabhi - Where understanding becomes technology";
const siteDescription =
  "Nabhi transforms complexity into clarity. Understanding first. Technology that follows.";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
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
  isPartOf: {
    "@type": "WebSite",
    name: "Nabhi Labs",
    url: siteUrl,
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
