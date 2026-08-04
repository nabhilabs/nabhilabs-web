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
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow] duration-300 ${
        scrolled || menuOpen
          ? "border-b border-[#d8e0d5] bg-[#f2f4f0]/95 shadow-[0_8px_24px_rgba(15,28,19,0.06)] backdrop-blur-md"
          : "border-b border-transparent bg-[#f2f4f0]/80 backdrop-blur-sm"
      }`}
    >
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8"
      >
        <a
          aria-label="Nabhi Labs - home"
          className="text-base font-semibold tracking-[-0.02em] text-[#0f1c13] sm:text-lg"
          href="/"
          style={{ fontFamily: "system-ui, -apple-system, Segoe UI, sans-serif" }}
        >
          Nabhi Labs
        </a>

        <div className="hidden items-center gap-7 text-xs text-[#4a5b4e] md:flex">
          {navigation.map((item) => (
            <a
              className="transition-colors duration-300 hover:text-[#0f1c13]"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
          <SiteSearch />
          <a
            className="rounded-full bg-[#1a3323] px-5 py-2.5 text-white transition-colors duration-300 hover:bg-[#2c4f37]"
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
            className="grid size-10 place-items-center rounded-full border border-[#d8e0d5] bg-white/70 text-[#31543a] transition-colors hover:border-[#a3e635] hover:bg-[#cde0b8]/40"
            onClick={() => setMenuOpen((open) => !open)}
            type="button"
          >
            {menuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </nav>

      {menuOpen ? (
        <div
          className="border-t border-[#d8e0d5] bg-[#f2f4f0] px-5 pb-6 pt-2 md:hidden"
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
