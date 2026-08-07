"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { SiteSearch } from "@/components/search/SiteSearch";

const navigation = [
  { label: "Nabhi Persona", href: "/solutions/nabhi-persona" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300 ${
        scrolled || menuOpen
          ? "border-b border-[#d8e0d5]/90 bg-[#f2f4f0]/92 shadow-[0_10px_30px_rgba(15,28,19,0.07)] backdrop-blur-xl"
          : "border-b border-[#d8e0d5]/50 bg-[#f2f4f0]/75 backdrop-blur-md"
      }`}
    >
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex h-[4.25rem] max-w-7xl items-center justify-between gap-4 px-5 sm:px-8"
      >
        <a
          aria-label="Nabhi Labs - home"
          className="inline-flex items-center gap-2.5 rounded-full border border-[#d8e0d5]/80 bg-white/70 px-3.5 py-2 text-[#0f1c13] shadow-[0_1px_0_rgba(255,255,255,0.8)] transition-colors hover:border-[#a3e635]/60 hover:bg-white"
          href="/"
        >
          <span className="grid size-6 place-items-center rounded-full bg-[#1a3323] font-display text-[10px] font-semibold text-[#cde0b8]">
            n
          </span>
          <span
            className="text-sm font-semibold tracking-[-0.02em] sm:text-[15px]"
            style={{
              fontFamily: "system-ui, -apple-system, Segoe UI, sans-serif",
            }}
          >
            Nabhi Labs
          </span>
        </a>

        <div className="hidden items-center gap-1 rounded-full border border-[#d8e0d5]/80 bg-white/65 p-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.75)] md:flex">
          {navigation.map((item) => (
            <a
              className="rounded-full px-4 py-2 text-xs text-[#4a5b4e] transition-colors duration-300 hover:bg-[#edf3e8] hover:text-[#0f1c13]"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
          <span className="mx-1 h-5 w-px bg-[#d8e0d5]" />
          <div className="px-1">
            <SiteSearch />
          </div>
          <a
            className="rounded-full bg-[#1a3323] px-5 py-2.5 text-xs font-medium text-white transition-colors duration-300 hover:bg-[#2c4f37]"
            href="/contact"
          >
            Contact
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <SiteSearch />
          <button
            aria-controls="mobile-nav"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="grid size-10 place-items-center rounded-full border border-[#d8e0d5] bg-white/80 text-[#31543a] transition-colors hover:border-[#a3e635] hover:bg-[#cde0b8]/40"
            onClick={() => setMenuOpen((open) => !open)}
            type="button"
          >
            {menuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </nav>

      {menuOpen ? (
        <div
          className="border-t border-[#d8e0d5] bg-[#f2f4f0]/98 px-5 pb-6 pt-2 backdrop-blur-xl md:hidden"
          id="mobile-nav"
        >
          <div className="flex flex-col gap-1">
            {navigation.map((item) => (
              <a
                className="rounded-xl px-3 py-3 text-sm text-[#31543a] transition-colors hover:bg-[#e8eee4] hover:text-[#0f1c13]"
                href={item.href}
                key={item.href}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              className="mt-2 inline-flex items-center justify-center rounded-full bg-[#1a3323] px-5 py-3 text-sm text-white transition-colors hover:bg-[#2c4f37]"
              href="/contact"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
