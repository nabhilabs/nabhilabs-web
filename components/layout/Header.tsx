import { SiteSearch } from "@/components/search/SiteSearch";

const navigation = [
  { label: "Nabhi Persona", href: "/solutions/nabhi-persona" },
  { label: "About", href: "/about" },
  { label: "Philosophy", href: "/philosophy" },
] as const;

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8"
      >
        <a
          aria-label="Nabhi Labs - home"
          className="text-lg font-semibold tracking-[0.2em] text-[#0f1c13]"
          href="/"
          style={{ fontFamily: "system-ui, -apple-system, Segoe UI, sans-serif" }}
        >
          NABHI LABS
        </a>

        <div className="flex items-center gap-4 text-xs text-[#4a5b4e] sm:gap-7">
          {navigation.map((item) => (
            <a
              className="hidden transition-colors duration-300 hover:text-[#0f1c13] sm:block"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
          <SiteSearch />
          <a
            className="rounded-full bg-[#1a3323] px-5 py-2.5 text-white transition-colors duration-300 hover:bg-[#2c4f37]"
            href="/#begin"
          >
            Connect
          </a>
        </div>
      </nav>
    </header>
  );
}
