import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import type { ReactNode } from "react";
import { Header } from "@/components/layout/Header";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";
import { AmbientLight } from "@/components/ui/AmbientLight";
import { GrainOverlay } from "@/components/ui/GrainOverlay";
import "./globals.css";

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

const siteUrl = "https://nabhilabs.com";
const siteTitle = "Nabhi — Where understanding becomes technology";
const siteDescription =
  "Nabhi transforms complexity into clarity. Understanding first. Technology that follows.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s — Nabhi",
  },
  description: siteDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Nabhi Labs",
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/assets/hero-landing-day.png",
        width: 1600,
        height: 900,
        alt: "Nabhi Labs — understanding becomes technology",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/assets/hero-landing-day.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Nabhi Labs",
  url: siteUrl,
  email: "hello@nabhilabs.com",
  description: siteDescription,
  sameAs: [siteUrl],
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

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
        <a
          className="sr-only z-[100] bg-stone-50 px-4 py-3 text-stone-950 focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
          href="#main-content"
        >
          Skip to content
        </a>
        <SmoothScrollProvider>
          <AmbientLight />
          <Header />
          {children}
          <footer className="relative z-10 border-t border-[#d8e0d5] bg-[#f7f6f1] px-6 py-6 font-mono text-[8px] uppercase tracking-[0.16em] text-[#4a5b4e] md:px-10">
            <div className="mx-auto flex max-w-[95rem] flex-wrap items-center justify-between gap-4">
              <span>Nabhi Labs — Understanding before technology</span>
              <span>© 2026 Nabhi Labs · hello@nabhilabs.com</span>
            </div>
          </footer>
          <GrainOverlay />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
