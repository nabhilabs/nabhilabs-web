import type { Metadata } from "next";
import { Instrument_Serif, Manrope, Outfit } from "next/font/google";
import type { ReactNode } from "react";
import { Header } from "@/components/layout/Header";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { brandAlternateNames } from "@/lib/keyword-strategy";
import { sameAsProfiles } from "@/lib/social";
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
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "SoftwareApplication",
        name: "Nabhi Cares",
        alternateName: ["Nabhi Care"],
        url: `${siteUrl}/products/nabhi-cares`,
        applicationCategory: "HealthApplication",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "SoftwareApplication",
        name: "Nabhi Persona",
        url: `${siteUrl}/products/nabhi-persona`,
        applicationCategory: "BusinessApplication",
      },
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
        <SiteFooter />
      </body>
    </html>
  );
}
