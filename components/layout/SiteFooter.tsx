import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { InstagramIcon, LinkedInIcon } from "@/components/ui/SocialIcons";
import { socialProfiles } from "@/lib/social";

const footerGroups = [
  {
    title: "Company",
    links: [
      { href: "/about", label: "About Nabhi Labs" },
      { href: "/philosophy", label: "Philosophy" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Products",
    links: [
      { href: "/products/nabhi-persona", label: "Nabhi Persona" },
      { href: "/products/nabhi-cares", label: "Nabhi Cares" },
    ],
  },
  {
    title: "Services",
    links: [
      { href: "/services", label: "All services" },
      { href: "/services/enterprise-knowledge-management", label: "Knowledge management" },
      { href: "/services/rag-engineering", label: "RAG engineering" },
      { href: "/services/agentic-voice-workflows", label: "Agentic voice" },
    ],
  },
] as const;

const connectLinks = [
  { href: "/blog", label: "Blog", external: false as const },
  {
    href: "mailto:hello@nabhilabs.com",
    label: "hello@nabhilabs.com",
    external: false as const,
  },
  {
    href: socialProfiles.linkedin,
    label: "LinkedIn",
    external: true as const,
    icon: LinkedInIcon,
  },
  {
    href: socialProfiles.instagram,
    label: "Instagram",
    external: true as const,
    icon: InstagramIcon,
  },
] as const;

function FooterLinkColumn({
  title,
  links,
}: {
  title: string;
  links: ReadonlyArray<{
    href: string;
    label: string;
    external?: boolean;
    icon?: typeof LinkedInIcon;
  }>;
}) {
  return (
    <nav aria-label={title} className="min-w-0">
      <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-[#7a9a72]">
        {title}
      </p>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            {link.external ? (
              <a
                className="group inline-flex max-w-full items-center gap-2 text-[13px] leading-5 text-[#cde0b8]/85 transition-colors hover:text-white"
                href={link.href}
                rel="noopener noreferrer"
                target="_blank"
              >
                {link.icon ? <link.icon className="size-3.5 shrink-0" /> : null}
                <span>{link.label}</span>
                <ArrowUpRight
                  aria-hidden
                  className="size-3 shrink-0 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                />
              </a>
            ) : (
              <Link
                className="block text-[13px] leading-5 text-[#cde0b8]/85 transition-colors hover:text-white"
                href={link.href}
              >
                {link.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative z-10 bg-[#071B12] text-[#cde0b8]">
      <div className="mx-auto max-w-[95rem] px-6 py-12 md:px-10 md:py-16">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <span className="relative grid size-11 shrink-0 place-items-center overflow-hidden rounded-2xl border border-white/10 bg-[#0f2a1c]">
                <Image
                  alt=""
                  className="object-contain p-2"
                  fill
                  sizes="44px"
                  src="/favicon.svg"
                />
              </span>
              <div>
                <p className="font-display text-lg font-medium tracking-[-0.03em] text-white">
                  Nabhi Labs
                </p>
                <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-[#B7E84A]/90">
                  Understanding before technology.
                </p>
              </div>
            </div>
            <p className="mt-5 text-sm leading-6 text-[#cde0b8]/75">
              Enterprise-grade systems, human-first by design.
            </p>
            <p className="mt-3 font-mono text-[9px] uppercase tracking-[0.14em] text-[#7a9a72]">
              India · Remote
            </p>
          </div>

          <div className="grid flex-1 grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-2 md:grid-cols-4 md:gap-x-10 lg:max-w-3xl lg:gap-x-12">
            {footerGroups.map((group) => (
              <FooterLinkColumn
                key={group.title}
                links={group.links}
                title={group.title}
              />
            ))}
            <FooterLinkColumn links={connectLinks} title="Connect" />
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-[#0a2218]">
        <div className="mx-auto flex max-w-[95rem] flex-col gap-3 px-6 py-5 md:flex-row md:items-center md:justify-between md:px-10">
          <span className="flex items-center gap-3 font-mono text-[8px] uppercase tracking-[0.14em] text-[#7a9a72]">
            <span className="grid size-6 place-items-center rounded-md border border-white/10 bg-[#071B12] font-display text-xs text-[#B7E84A]">
              n
            </span>
            Understanding before technology
            <span className="sr-only">
              . Authored by Nabhi Labs. Updated August 2026.
            </span>
          </span>
          <p className="text-[11px] text-[#cde0b8]/65">
            © 2026 Nabhi Labs · Remote-first from India
          </p>
        </div>
      </div>
    </footer>
  );
}
