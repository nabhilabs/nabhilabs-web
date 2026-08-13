import type { Metadata } from "next";
import { AboutBelief } from "@/components/sections/about/AboutBelief";
import { AboutCta } from "@/components/sections/about/AboutCta";
import { AboutHero } from "@/components/sections/about/AboutHero";
import { AboutPrinciples } from "@/components/sections/about/AboutPrinciples";
import { AboutTeamGrid } from "@/components/sections/about/AboutTeamGrid";
import { brandKeywords, primaryKeywords } from "@/lib/keyword-strategy";
import { sameAsProfiles } from "@/lib/social";

export const metadata: Metadata = {
  title: "About Nabhi Labs",
  description:
    "About Nabhi Labs—understanding first, technology that follows. Founded in 2024 by four co-founders building clarity into everyday decisions.",
  keywords: [
    "About Nabhi Labs",
    "About Nabhi",
    "Nabhi Labs",
    "Nabhi technology",
    ...brandKeywords.slice(0, 8),
    ...primaryKeywords,
  ],
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Nabhi Labs",
    description:
      "Nabhi Labs transforms organizational complexity into clarity. Meet the team behind Nabhi Persona and Nabhi Cares.",
    url: "/about",
  },
};

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Nabhi Labs",
    url: "https://www.nabhilabs.com/about",
    description:
      "About Nabhi Labs—understanding becomes technology through Nabhi Persona, RAG engineering, and systems work.",
    mainEntity: {
      "@type": "Organization",
      name: "Nabhi Labs",
      url: "https://www.nabhilabs.com",
      email: "hello@nabhilabs.com",
      foundingDate: "2024",
      sameAs: [...sameAsProfiles],
    },
    keywords: [...brandKeywords, ...primaryKeywords].join(", "),
  };

  return (
    <main className="relative bg-[#f2f4f0]" id="main-content">
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        type="application/ld+json"
      />
      <AboutHero />
      <AboutPrinciples />
      <AboutTeamGrid />
      <AboutBelief />
      <AboutCta />
    </main>
  );
}
