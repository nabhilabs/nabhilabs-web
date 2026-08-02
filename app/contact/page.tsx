import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Nabhi Labs—email hello@nabhilabs.com or start a conversation about what feels complex.",
  keywords: ["Contact Nabhi Labs", "Nabhi Labs", "hello@nabhilabs.com"],
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact | Nabhi Labs",
    description: "Reach Nabhi Labs for a thoughtful discussion—not a sales pitch.",
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
    mainEntity: {
      "@type": "Organization",
      name: "Nabhi Labs",
      email: "hello@nabhilabs.com",
      url: "https://www.nabhilabs.com",
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
            [ Contact ]
          </p>
          <h1 className="mt-6 max-w-3xl font-display text-[clamp(2.4rem,5vw,4.6rem)] font-medium leading-[0.95] tracking-[-0.05em] text-[#0f1c13]">
            Contact Nabhi Labs
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-[#4a5b4e]">
            Start with what feels complex. Someone from Nabhi Labs usually
            replies within 24 hours for a thoughtful discussion.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              className="rounded-full bg-[#1a3323] px-6 py-3 text-sm text-white hover:bg-[#2c4f37]"
              href="mailto:hello@nabhilabs.com?subject=Begin%20with%20understanding"
            >
              Email hello@nabhilabs.com
            </a>
            <Link
              className="rounded-full border border-[#d8e0d5] bg-white/70 px-6 py-3 text-sm text-[#0f1c13]"
              href="/#begin"
            >
              Use the Begin form
            </Link>
          </div>
          <p className="mt-10 text-sm text-[#4a5b4e]">
            Learn more about{" "}
            <Link
              className="text-[#31543a] underline-offset-4 hover:underline"
              href="/about"
            >
              Nabhi Labs
            </Link>{" "}
            or explore{" "}
            <Link
              className="text-[#31543a] underline-offset-4 hover:underline"
              href="/solutions/nabhi-persona"
            >
              Nabhi Persona
            </Link>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
