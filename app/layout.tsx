import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import type { ReactNode } from "react";
import { Header } from "@/components/layout/Header";
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
const siteTitle = "Nabhi - Where understanding becomes technology";
const siteDescription =
  "Nabhi transforms complexity into clarity. Understanding first. Technology that follows.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s - Nabhi",
  },
  description: siteDescription,
  authors: [{ name: "Nabhi Labs", url: siteUrl }],
  creator: "Nabhi Labs",
  publisher: "Nabhi Labs",
  alternates: {
    canonical: siteUrl,
  },
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
    "article:author": "Nabhi Labs",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Nabhi Labs",
  url: siteUrl,
  email: "hello@nabhilabs.com",
  description: siteDescription,
  foundingDate: "2024",
  sameAs: [
    siteUrl,
    "https://www.linkedin.com/company/nabhilabs",
  ],
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "hello@nabhilabs.com",
    contactType: "customer support",
    availableLanguage: ["English"],
  },
};

const authorJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Nabhi Labs",
  url: siteUrl,
  email: "hello@nabhilabs.com",
  jobTitle: "Editorial",
  worksFor: {
    "@type": "Organization",
    name: "Nabhi Labs",
    url: siteUrl,
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
    name: "Nabhi Labs",
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
  mainEntity: [
    {
      "@type": "Question",
      name: "What does Nabhi Labs do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nabhi Labs transforms complexity into clarity by understanding systems first, then building technology that follows-products, AI engineering, and platforms grounded in real human needs.",
      },
    },
    {
      "@type": "Question",
      name: "How do you approach complex problems?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We listen, observe, simplify, and build. We start with deep understanding of the system before writing code or deploying AI, so what we create truly matters.",
      },
    },
    {
      "@type": "Question",
      name: "How can I start a conversation with Nabhi Labs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Reach out at hello@nabhilabs.com or use the Begin form on nabhilabs.com. We usually reply within 24 hours for a thoughtful discussion-not a sales pitch.",
      },
    },
  ],
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${sans.variable} ${display.variable} bg-[#f2f4f0] font-sans text-[#0f1c13]`}
      >        <script
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
          type="application/ld+json"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(authorJsonLd),
          }}
          type="application/ld+json"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(webPageJsonLd),
          }}
          type="application/ld+json"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqJsonLd),
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
        <footer className="relative z-10 border-t border-[#d8e0d5] bg-[#f7f6f1] px-6 py-6 font-mono text-[8px] uppercase tracking-[0.16em] text-[#4a5b4e] md:px-10">
          <div className="mx-auto flex max-w-[95rem] flex-wrap items-center justify-between gap-4">
            <span>
              Nabhi Labs - Understanding before technology
              <span className="sr-only">
                . Authored by Nabhi Labs. Updated August 2026.
              </span>
            </span>
            <span>© 2026 Nabhi Labs · hello@nabhilabs.com</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
