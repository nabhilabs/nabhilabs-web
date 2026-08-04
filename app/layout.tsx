import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import type { ReactNode } from "react";
import { Header } from "@/components/layout/Header";
import { brandAlternateNames } from "@/lib/keyword-strategy";
import { sameAsProfiles, socialProfiles } from "@/lib/social";
import { SITE_URL } from "@/lib/site";
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
  { href: "/solutions/nabhi-persona", label: "Nabhi Persona" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
  { href: "/philosophy", label: "Philosophy" },
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
        <footer className="relative z-10 border-t border-[#d8e0d5] bg-[#0f1c13] text-[#cde0b8]">
          <div className="mx-auto grid max-w-[95rem] gap-10 px-6 py-12 md:grid-cols-[1.2fr_1fr] md:px-10 md:py-14 lg:grid-cols-[1.4fr_1fr_1fr]">
            <div>
              <p className="font-display text-2xl font-medium tracking-[-0.04em] text-white md:text-3xl">
                Nabhi Labs
              </p>
              <p className="mt-3 max-w-sm text-base leading-7 text-[#a8bda0]">
                Understanding before technology. We turn organizational
                complexity into clarity—then build what follows.
              </p>
              <a
                className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-[#cde0b8] transition hover:border-[#a3e635]/50 hover:bg-white/10 hover:text-white"
                href="mailto:hello@nabhilabs.com"
              >
                hello@nabhilabs.com
              </a>
            </div>

            <nav aria-label="Solutions and resources">
              <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#78966a]">
                Explore
              </p>
              <ul className="mt-4 grid gap-2.5 sm:grid-cols-2 md:grid-cols-1">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      className="text-sm text-[#cde0b8] transition hover:text-white"
                      href={link.href}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#78966a]">
                Connect
              </p>
              <ul className="mt-4 space-y-2.5">
                <li>
                  <a
                    className="text-sm text-[#cde0b8] transition hover:text-white"
                    href={socialProfiles.linkedin}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    className="text-sm text-[#cde0b8] transition hover:text-white"
                    href={socialProfiles.instagram}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    className="text-sm text-[#cde0b8] transition hover:text-white"
                    href="/#begin"
                  >
                    Begin a conversation
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10">
            <div className="mx-auto flex max-w-[95rem] flex-wrap items-center justify-between gap-3 px-6 py-5 font-mono text-[10px] uppercase tracking-[0.14em] text-[#7a9178] md:px-10">
              <span>
                Understanding before technology
                <span className="sr-only">
                  . Authored by Nabhi Labs. Updated August 2026.
                </span>
              </span>
              <span>© 2026 Nabhi Labs</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
