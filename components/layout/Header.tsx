"use client";

import { usePathname } from "next/navigation";
import { SiteSearch } from "@/components/search/SiteSearch";
import { PillNav } from "@/components/ui/PillNav";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Persona", href: "/solutions/nabhi-persona" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
      <div className="pointer-events-auto mx-auto flex max-w-[95rem] items-start justify-between gap-4 px-4 pt-4 md:px-8 md:pt-5">
        <PillNav
          activeHref={pathname || "/"}
          baseColor="#1a3323"
          hoveredPillTextColor="#cde0b8"
          initialLoadAnimation
          items={navItems}
          logo="/favicon.svg"
          logoAlt="Nabhi Labs"
          pillColor="#f2f4f0"
          pillTextColor="#1a3323"
        />
        <div className="hidden shrink-0 pt-0.5 md:block">
          <div className="rounded-full border border-[#d8e0d5]/80 bg-white/80 p-1.5 shadow-sm backdrop-blur-md">
            <SiteSearch />
          </div>
        </div>
      </div>
    </header>
  );
}
