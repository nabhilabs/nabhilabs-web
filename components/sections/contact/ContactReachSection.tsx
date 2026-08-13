import Link from "next/link";
import {
  Clock3,
  Globe2,
  Mail,
  MessageCircle,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ContactWorldMap } from "@/components/sections/contact/ContactWorldMap";
import { ChapterTag } from "@/components/ui/ChapterTag";

const reachCards: Array<{
  title: string;
  value: string;
  href?: string;
  icon: LucideIcon;
}> = [
  {
    title: "Email Nabhi Labs",
    value: "hello@nabhilabs.com",
    href: "mailto:hello@nabhilabs.com",
    icon: Mail,
  },
  {
    title: "Product questions",
    value: "Persona, Cares & services",
    href: "/services",
    icon: MessageCircle,
  },
  {
    title: "Engagements",
    value: "Remote-first · Hyderabad",
    icon: Globe2,
  },
  {
    title: "Response time",
    value: "Within 24 hours",
    icon: Clock3,
  },
];

export function ContactReachSection() {
  return (
    <section
      aria-labelledby="contact-reach-heading"
      className="relative -mt-6 rounded-t-[2.5rem] bg-[#f2f4f0] px-6 pb-16 pt-14 md:px-10 md:pb-24 md:pt-20"
    >
      <div className="mx-auto max-w-[95rem] text-center">
        <ChapterTag>01 // Reach_Us</ChapterTag>
        <h2
          className="mx-auto mt-6 max-w-2xl font-display text-[clamp(1.75rem,3.5vw,2.75rem)] font-medium tracking-[-0.04em] text-[#0f1c13]"
          id="contact-reach-heading"
        >
          Directly reach Nabhi Labs
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#4a5b4e]">
          Remote engagements across time zones. We work with teams globally—
          understanding first, then the right product or system.
        </p>

        <div className="relative mx-auto mt-12 max-w-4xl">
          <ContactWorldMap />
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {reachCards.map(({ title, value, href, icon: Icon }) => (
            <li key={title}>
              {href ? (
                <Link
                  className="group flex h-full flex-col rounded-2xl border border-[#d8e0d5] bg-white p-5 text-left shadow-[0_8px_24px_rgba(15,28,19,0.04)] transition-colors hover:border-[#78966a]/50 hover:bg-[#f7f6f1]"
                  href={href}
                >
                  <span className="grid size-10 place-items-center rounded-xl border border-[#e8ece6] bg-[#f2f4f0] text-[#31543a] transition-colors group-hover:bg-[#ebf0e8]">
                    <Icon aria-hidden className="size-4" strokeWidth={1.75} />
                  </span>
                  <p className="mt-4 font-mono text-[9px] uppercase tracking-[0.14em] text-[#5a7052]">
                    {title}
                  </p>
                  <p className="mt-2 font-display text-base font-semibold tracking-[-0.02em] text-[#0f1c13]">
                    {value}
                  </p>
                </Link>
              ) : (
                <div className="flex h-full flex-col rounded-2xl border border-[#d8e0d5] bg-white p-5 text-left shadow-[0_8px_24px_rgba(15,28,19,0.04)]">
                  <span className="grid size-10 place-items-center rounded-xl border border-[#e8ece6] bg-[#f2f4f0] text-[#31543a]">
                    <Icon aria-hidden className="size-4" strokeWidth={1.75} />
                  </span>
                  <p className="mt-4 font-mono text-[9px] uppercase tracking-[0.14em] text-[#5a7052]">
                    {title}
                  </p>
                  <p className="mt-2 font-display text-base font-semibold tracking-[-0.02em] text-[#0f1c13]">
                    {value}
                  </p>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
