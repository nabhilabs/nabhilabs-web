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

export const metadata: Metadata = {
  title: {
    default: "Nabhi — Where understanding becomes technology",
    template: "%s — Nabhi",
  },
  description:
    "Nabhi transforms complexity into clarity. Understanding first. Technology that follows.",
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
          <GrainOverlay />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
