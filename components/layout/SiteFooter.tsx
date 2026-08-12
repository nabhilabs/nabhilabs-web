import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
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
      <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-[#5a7052]">
        {title}
      </p>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            {link.external ? (
              <a
                className="group inline-flex max-w-full items-center gap-2 text-[13px] leading-5 text-[#31543a] transition-colors hover:text-[#0f1c13]"
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
                className="block text-[13px] leading-5 text-[#31543a] transition-colors hover:text-[#0f1c13]"
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

function FooterCtaVisual() {
  return (
    <div
      aria-hidden
      className="relative mx-auto h-[17rem] w-full max-w-md lg:mx-0 lg:mr-8 lg:h-full lg:max-w-none lg:min-h-[20rem]"
    >
      <div className="absolute right-[8%] top-[10%] z-20 rounded-2xl border border-white/10 bg-white px-4 py-3 shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
        <div className="flex items-center gap-3">
          <span className="grid size-9 place-items-center rounded-xl bg-[#ebf0e8] text-[#31543a]">
            <svg className="size-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M4 16l4-4 4 4 8-8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.12em] text-[#5a7052]">
              Retrieval quality
            </p>
            <p className="font-display text-sm font-semibold text-[#0f1c13]">+38% accuracy</p>
          </div>
        </div>
      </div>

      <div className="absolute right-[34%] top-[4%] z-10 rounded-xl border border-white/10 bg-[#1a3323] px-3 py-2 shadow-lg">
        <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-[#a3e635]">India · Remote</p>
      </div>

      <div className="absolute bottom-[8%] right-[4%] z-30 w-[11.5rem] rotate-[-8deg] overflow-hidden rounded-2xl border border-[#cde0b8]/20 bg-[linear-gradient(145deg,#1a3323_0%,#0f1c13_100%)] p-4 shadow-[0_24px_60px_rgba(0,0,0,0.45)]">
        <div className="flex items-start justify-between">
          <span className="font-display text-sm font-medium text-white">Nabhi Persona</span>
          <span className="grid size-7 place-items-center rounded-lg bg-[#a3e635]/15 font-display text-xs text-[#a3e635]">
            n
          </span>
        </div>
        <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.14em] text-[#cde0b8]/60">
          Enterprise knowledge
        </p>
        <p className="mt-1 font-display text-lg tracking-[-0.03em] text-white">Context-aware</p>
      </div>

      <div className="absolute bottom-[12%] left-[4%] z-20 w-[11rem] overflow-hidden rounded-[1.75rem] border-[5px] border-[#1a3323] bg-[#f7f6f1] shadow-[0_28px_70px_rgba(0,0,0,0.4)]">
        <div className="bg-[#0f1c13] px-3 py-2.5">
          <p className="font-display text-[11px] font-medium text-white">Nabhi Labs</p>
          <p className="text-[9px] text-[#cde0b8]/70">Knowledge dashboard</p>
        </div>
        <div className="space-y-2 p-3">
          <div className="rounded-lg bg-white px-2.5 py-2">
            <p className="text-[9px] text-[#5a7052]">Active workflows</p>
            <p className="font-display text-base font-semibold text-[#0f1c13]">24</p>
          </div>
          <div className="h-10 rounded-lg bg-[linear-gradient(180deg,#ebf0e8_0%,#cde0b8_100%)]">
            <svg className="h-full w-full px-2 py-1" preserveAspectRatio="none" viewBox="0 0 100 30">
              <path
                d="M0 24 L20 18 L35 22 L55 10 L75 14 L100 4"
                fill="none"
                stroke="#31543a"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative z-10 border-t border-[#d8e0d5] bg-[#f7f6f1]">
      <div className="mx-auto max-w-[95rem] px-6 pt-12 md:px-10 md:pt-16">
        <div className="overflow-hidden rounded-[2rem] bg-[#0f1c13]">
          <div className="grid lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
            <div className="flex flex-col justify-center px-8 py-10 md:px-12 md:py-14 lg:py-16">
              <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-[#a3e635]">
                Begin the conversation
              </p>
              <h2 className="mt-4 max-w-lg font-display text-[clamp(1.75rem,3.5vw,2.75rem)] font-medium leading-[1.05] tracking-[-0.04em] text-white">
                Ready to turn complexity into clarity?
              </h2>
              <p className="mt-4 max-w-md text-sm leading-6 text-[#cde0b8]/75">
                Enterprise knowledge, RAG engineering, and agentic workflows—built
                with understanding first. Start with a thoughtful conversation, not a
                sales pitch.
              </p>
              <Link
                className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-[#0f1c13] transition-colors hover:bg-[#ebf0e8]"
                href="/contact"
              >
                Schedule a Conversation
                <ArrowRight aria-hidden className="size-4" />
              </Link>
            </div>

            <div className="relative hidden overflow-hidden lg:block">
              <div
                aria-hidden
                className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(163,230,53,0.12),transparent_55%)]"
              />
              <div className="relative flex h-full items-center justify-end px-8 py-10">
                <FooterCtaVisual />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[95rem] px-6 py-12 md:px-10 md:py-14">
        <div className="max-w-sm">
          <div className="flex items-center gap-3">
            <span className="relative grid size-11 shrink-0 place-items-center overflow-hidden rounded-2xl border border-[#d8e0d5] bg-[#f2f4f0]">
              <Image
                alt=""
                className="object-contain p-2"
                fill
                sizes="44px"
                src="/favicon.svg"
              />
            </span>
            <div>
              <p className="font-display text-lg font-medium tracking-[-0.03em] text-[#0f1c13]">
                Nabhi Labs
              </p>
              <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-[#5a7052]">
                Understanding before technology
              </p>
            </div>
          </div>
          <p className="mt-5 text-sm leading-6 text-[#4a5b4e]">
            Enterprise-grade systems, human-first by design.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-2 md:mt-12 md:grid-cols-4 md:gap-x-10 lg:gap-x-14">
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

      <div className="border-t border-[#d8e0d5]/80 bg-[#f2f4f0]/60">
        <div className="mx-auto flex max-w-[95rem] flex-col gap-3 px-6 py-5 md:flex-row md:items-center md:justify-between md:px-10">
          <span className="flex items-center gap-3 font-mono text-[8px] uppercase tracking-[0.14em] text-[#5a7052]">
            <span className="grid size-6 place-items-center rounded-md border border-[#d8e0d5] bg-[#f7f6f1] font-display text-xs text-[#31543a]">
              n
            </span>
            Understanding before technology
            <span className="sr-only">
              . Authored by Nabhi Labs. Updated August 2026.
            </span>
          </span>
          <p className="text-[11px] text-[#4a5b4e]">
            © 2026 Nabhi Labs · Remote-first from India
          </p>
        </div>
      </div>
    </footer>
  );
}
