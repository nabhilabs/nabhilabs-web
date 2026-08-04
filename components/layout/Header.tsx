"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { SiteSearch } from "@/components/search/SiteSearch";

const navigation = [
  { label: "Nabhi Persona", href: "/solutions/nabhi-persona" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
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
          ? "border-b border-[#d8e0d5] bg-[#f2f4f0]/96 shadow-[0_10px_30px_rgba(15,28,19,0.08)] backdrop-blur-md"
          : "border-b border-[#d8e0d5]/70 bg-[#f2f4f0]/92 backdrop-blur-sm"
      }`}
    >
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex h-14 max-w-[95rem] items-center justify-between gap-4 px-5 md:h-16 md:px-10"
      >
        <a
          aria-label="Nabhi Labs - home"
          className="group flex items-center gap-2.5"
          href="/"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt=""
            className="size-8 rounded-lg border border-[#d8e0d5] bg-[#0f1c13] object-cover shadow-sm transition-transform duration-300 group-hover:scale-[1.04]"
            height={32}
            src="/favicon.svg"
            width={32}
          />
          <span className="font-display text-[0.95rem] font-semibold tracking-[-0.03em] text-[#0f1c13] md:text-base">
            Nabhi Labs
          </span>
        </a>

        <div className="hidden items-center gap-1 text-[13px] text-[#4a5b4e] md:flex">
          {navigation.slice(0, 3).map((item) => (
            <a
              className="rounded-full px-3.5 py-2 transition-colors duration-300 hover:bg-[#e8eee4] hover:text-[#0f1c13]"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
          <div className="ml-1 flex items-center gap-2">
            <SiteSearch />
            <a
              className="rounded-full bg-[#1a3323] px-5 py-2.5 text-[12px] font-medium text-white transition-colors duration-300 hover:bg-[#2c4f37]"
              href="/contact"
            >
              Contact
            </a>
          </div>
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
          className="border-t border-[#d8e0d5] bg-[#f2f4f0] px-5 pb-5 pt-2 md:hidden"
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
          </div>
        </div>
      ) : null}
    </header>
  );
}
