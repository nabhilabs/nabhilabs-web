import type { Metadata } from "next";
import { ContactExploreSection } from "@/components/sections/contact/ContactExploreSection";
import { ContactPageSection } from "@/components/sections/contact/ContactPageSection";
import { ContactReachSection } from "@/components/sections/contact/ContactReachSection";
import { brandKeywords } from "@/lib/keyword-strategy";
import { sameAsProfiles } from "@/lib/social";

export const metadata: Metadata = {
  title: "Contact Nabhi Labs",
  description:
    "Contact Nabhi Labs—send a message about Nabhi Persona, Nabhi Cares, RAG, or agentic systems. We usually reply within 24 hours.",
  keywords: [
    "Contact Nabhi Labs",
    "Nabhi Labs",
    "hello@nabhilabs.com",
    ...brandKeywords.slice(0, 6),
  ],
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact | Nabhi Labs",
    description:
      "Reach Nabhi Labs for a thoughtful discussion—not a sales pitch.",
    url: "/contact",
    siteName: "Nabhi Labs",
  },
};

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Nabhi Labs",
    url: "https://www.nabhilabs.com/contact",
    description:
      "Contact Nabhi Labs about enterprise knowledge, healthcare AI, RAG engineering, and agentic systems.",
    mainEntity: {
      "@type": "Organization",
      name: "Nabhi Labs",
      email: "hello@nabhilabs.com",
      url: "https://www.nabhilabs.com",
      sameAs: [...sameAsProfiles],
    },
  };

  return (
    <main className="relative" id="main-content">
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        type="application/ld+json"
      />
      <ContactPageSection />
      <ContactReachSection />
      <ContactExploreSection />
    </main>
  );
}
