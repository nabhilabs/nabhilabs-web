import type { Metadata } from "next";
import { Instrument_Serif, Manrope, Outfit } from "next/font/google";
import type { ReactNode } from "react";
import { Header } from "@/components/layout/Header";
import { brandAlternateNames } from "@/lib/keyword-strategy";
import { sameAsProfiles, socialProfiles } from "@/lib/social";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

/** Humanist body — soft terminals, approachable reading. */
const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "optional",
  preload: false,
  adjustFontFallback: true,
});

/** Soft display sans — rounded, calm tech; less rigid than geometric grotesks. */
const display = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

/** Editorial serif — elegant contrast where Outfit reads too boxy. */
const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
  preload: false,
  adjustFontFallback: true,
});

const siteUrl = SITE_URL;
const siteTitle = "Nabhi Labs | Understanding Becomes Technology";
const siteDescription =
  "Nabhi Labs builds Nabhi Persona, RAG engineering, and agentic workflows so organizations move from complexity to clarity—understanding first, technology that follows.";

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
    "Hospital Management System",
    "Artificial Intelligence",
    "Software Development",
    "Knowledge Management",
    "AI Agents",
    "Second Brain",
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
        alt: "Nabhi Labs",
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
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
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
  alternateName: ["NabhiLabs", ...brandAlternateNames],
  url: siteUrl,
  logo: {
    "@type": "ImageObject",
    url: `${siteUrl}/nabhi-logo.svg`,
    contentUrl: `${siteUrl}/nabhi-logo.svg`,
  },
  image: `${siteUrl}/assets/hero-landing-day.webp`,
  email: "hello@nabhilabs.com",
  description: siteDescription,
  slogan: "Understanding before technology",
  foundingDate: "2024-06-01",
  sameAs: [...sameAsProfiles],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Basar",
    postalCode: "504107",
    addressCountry: "IN",
    addressRegion: "India",
  },
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      email: "hello@nabhilabs.com",
      contactType: "sales",
      availableLanguage: ["English"],
    },
    {
      "@type": "ContactPoint",
      email: "hello@nabhilabs.com",
      contactType: "customer support",
      availableLanguage: ["English"],
    },
  ],
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
  sameAs: [...sameAsProfiles],
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
  { href: "/about", label: "About Nabhi Labs" },
  { href: "/services", label: "Services" },
  { href: "/industries/healthcare-ai", label: "Nabhi Cares" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
  { href: "/philosophy", label: "Philosophy" },
] as const;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${sans.variable} ${display.variable} ${serif.variable} bg-[#f2f4f0] font-sans text-[#0f1c13]`}
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
        <footer className="relative z-10 border-t border-[#d8e0d5] bg-[#f7f6f1]">
          <div className="mx-auto grid max-w-[95rem] gap-8 px-6 py-10 md:px-10 md:py-12 lg:grid-cols-[1.1fr_1fr] lg:items-end">
            <div>
              <p className="font-display text-lg font-medium tracking-[-0.03em] text-[#0f1c13]">
                Nabhi Labs
              </p>
              <p className="mt-2 max-w-sm text-xs leading-5 text-[#4a5b4e]">
                Understanding before technology. Enterprise-grade systems,
                human-first by design.
              </p>
            </div>
            <nav
              aria-label="Solutions and resources"
              className="grid grid-cols-2 gap-x-6 gap-y-2.5 sm:grid-cols-3 lg:justify-items-start"
            >
              {footerLinks.map((link) => (
                <a
                  className="text-[12px] text-[#31543a] transition-colors hover:text-[#0f1c13]"
                  href={link.href}
                  key={link.href}
                >
                  {link.label}
                </a>
              ))}
              <a
                className="text-[12px] text-[#31543a] transition-colors hover:text-[#0f1c13]"
                href={socialProfiles.linkedin}
                rel="noopener noreferrer"
                target="_blank"
              >
                LinkedIn
              </a>
              <a
                className="text-[12px] text-[#31543a] transition-colors hover:text-[#0f1c13]"
                href={socialProfiles.instagram}
                rel="noopener noreferrer"
                target="_blank"
              >
                Instagram
              </a>
            </nav>
          </div>
          <div className="border-t border-[#d8e0d5]/80">
            <div className="mx-auto flex max-w-[95rem] flex-col gap-2 px-6 py-5 font-mono text-[8px] uppercase tracking-[0.14em] text-[#5a7052] sm:flex-row sm:items-center sm:justify-between md:px-10">
              <span>
                Understanding before technology
                <span className="sr-only">
                  . Authored by Nabhi Labs. Updated August 2026.
                </span>
              </span>
              <span className="normal-case tracking-normal text-[#4a5b4e]">
                © 2026 Nabhi Labs ·{" "}
                <a
                  className="transition-colors hover:text-[#0f1c13]"
                  href="mailto:hello@nabhilabs.com"
                >
                  hello@nabhilabs.com
                </a>
              </span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
