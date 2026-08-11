"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { SiteSearch } from "@/components/search/SiteSearch";
import { PillNav } from "@/components/ui/PillNav";

const navigation = [
  { label: "Nabhi Cares", href: "/industries/healthcare-ai" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300 ${
        scrolled
          ? "border-b border-white/40 bg-white/35 shadow-[0_10px_30px_rgba(15,28,19,0.06)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[4.25rem] max-w-7xl items-center px-5 sm:px-8">
        <PillNav
          activeHref={pathname}
          baseColor="rgba(255, 255, 255, 0.55)"
          hoveredPillTextColor="#FFFFFF"
          initialLoadAnimation
          items={[...navigation]}
          logo="/favicon.svg"
          logoAlt="Nabhi Labs"
          mobileEndSlot={<SiteSearch />}
          pillColor="rgba(255, 255, 255, 0.35)"
          pillTextColor="#1A2E26"
          endSlot={
            <div
              className="flex items-center rounded-full border border-white/60 p-1.5 shadow-[0_8px_28px_rgba(15,28,19,0.06)] backdrop-blur-[12px]"
              style={{ background: "rgba(255, 255, 255, 0.55)" }}
            >
              <SiteSearch />
            </div>
          }
        />
      </div>
    </header>
  );
}
