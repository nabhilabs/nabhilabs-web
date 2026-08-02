import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import type { ReactNode } from "react";
import { Header } from "@/components/layout/Header";
import { brandAlternateNames } from "@/lib/keyword-strategy";
import "./globals.css";

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "optional",
  preload: false,
  adjustFontFallback: true,
});

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "optional",
  preload: false,
  adjustFontFallback: true,
});

const siteUrl = "https://nabhilabs.com";
const siteTitle =
  "Nabhi Labs — Understanding Becomes Technology | Nabhi Persona";
const siteDescription =
  "Nabhi Labs transforms complexity into clarity. Nabhi Persona, RAG engineering, and agentic workflows—understanding first, technology that follows.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Nabhi Labs",
  },
  description: siteDescription,
  keywords: [
    "Nabhi Labs",
    "Nabhi Persona",
    "Nabhi technology",
    "Nabhi Labs philosophy",
    "institutional knowledge AI",
    "agentic AI workflows",
  ],
  authors: [{ name: "Nabhi Labs Editorial", url: siteUrl }],
  creator: "Nabhi Labs",
  publisher: "Nabhi Labs",
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Nabhi Labs",
    title: siteTitle,
    description: siteDescription,
    locale: "en_US",
    images: [
      {
        url: "/assets/hero-landing-day.webp",
        width: 1600,
        height: 900,
        alt: "Nabhi Labs - understanding becomes technology",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/assets/hero-landing-day.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "article:author": "Nabhi Labs Editorial",
    author: "Nabhi Labs Editorial",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: "Nabhi Labs",
  legalName: "Nabhi Labs",
  alternateName: [...brandAlternateNames],
  url: siteUrl,
  logo: `${siteUrl}/nabhi-logo.svg`,
  image: `${siteUrl}/assets/hero-landing-day.webp`,
  email: "hello@nabhilabs.com",
  description: siteDescription,
  slogan: "Understanding before technology",
  foundingDate: "2024",
  sameAs: [
    siteUrl,
    "https://www.linkedin.com/company/nabhilabs",
  ],
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
    addressRegion: "India",
  },
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "hello@nabhilabs.com",
    contactType: "customer support",
    availableLanguage: ["English"],
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  name: "Nabhi Labs",
  alternateName: ["Nabhi", "Nabhilabs", "Nabi Labs", "Navi Labs"],
  url: siteUrl,
  description: siteDescription,
  publisher: { "@id": `${siteUrl}/#organization` },
  inLanguage: "en",
};

const authorJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Nabhi Labs Editorial",
  url: siteUrl,
  email: "hello@nabhilabs.com",
  jobTitle: "Editorial",
  description:
    "Editorial voice of Nabhi Labs—documenting how understanding becomes technology across products, AI engineering, and systems work.",
  sameAs: [
    siteUrl,
    "https://www.linkedin.com/company/nabhilabs",
  ],
  worksFor: {
    "@type": "Organization",
    name: "Nabhi Labs",
    url: siteUrl,
  },
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/philosophy", label: "Philosophy" },
  { href: "/solutions/nabhi-persona", label: "Nabhi Persona" },
  { href: "/services/rag-engineering", label: "RAG Engineering" },
  { href: "/blog/agentic-ai-multi-agent-workflows", label: "Agentic AI Blog" },
  { href: "/case-studies", label: "Case Studies" },
] as const;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${sans.variable} ${display.variable} bg-[#f2f4f0] font-sans text-[#0f1c13]`}
      >
        <script
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
          type="application/ld+json"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd),
          }}
          type="application/ld+json"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(authorJsonLd),
          }}
          type="application/ld+json"
        />
        <a
          className="sr-only z-[100] bg-stone-50 px-4 py-3 text-stone-950 focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
          href="#main-content"
        >
          Skip to content
        </a>
        <Header />
        {children}
        <footer className="relative z-10 border-t border-[#d8e0d5] bg-[#f7f6f1] px-6 py-8 font-mono text-[8px] uppercase tracking-[0.16em] text-[#4a5b4e] md:px-10">
          <div className="mx-auto flex max-w-[95rem] flex-col gap-6">
            <nav
              aria-label="Solutions and resources"
              className="flex flex-wrap gap-x-6 gap-y-2 normal-case tracking-normal"
            >
              {footerLinks.map((link) => (
                <a
                  className="text-[11px] text-[#31543a] underline-offset-4 hover:underline"
                  href={link.href}
                  key={link.href}
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <span>
                Nabhi Labs - Understanding before technology
                <span className="sr-only">
                  . Authored by Nabhi Labs. Updated August 2026.
                </span>
              </span>
              <span>© 2026 Nabhi Labs · hello@nabhilabs.com</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
