import Link from "next/link";
import { ArrowUpRight, Heart, Sparkles, Workflow } from "lucide-react";
import { ChapterTag } from "@/components/ui/ChapterTag";
import { InstagramIcon, LinkedInIcon } from "@/components/ui/SocialIcons";
import { socialProfiles } from "@/lib/social";

const explore = [
  {
    title: "Nabhi Persona",
    copy: "Enterprise knowledge that adapts to how your organization decides.",
    href: "/products/nabhi-persona",
    icon: Sparkles,
  },
  {
    title: "Nabhi Cares",
    copy: "Healthcare AI workflows built around clinical context.",
    href: "/products/nabhi-cares",
    icon: Heart,
  },
  {
    title: "Services",
    copy: "RAG engineering, agentic voice, and knowledge systems.",
    href: "/services",
    icon: Workflow,
  },
] as const;

export function ContactExploreSection() {
  return (
    <section
      aria-labelledby="contact-explore-heading"
      className="border-t border-[#d8e0d5] bg-[#f7f6f1] px-6 py-16 md:px-10 md:py-24"
    >
      <div className="mx-auto max-w-[95rem]">
        <div className="overflow-hidden rounded-3xl border border-[#1a3323]/30 bg-[#0f1c13]">
          <div className="flex flex-col items-center gap-8 px-6 py-10 md:flex-row md:justify-between md:px-10 md:py-12">
            <div className="flex items-center gap-5 text-center md:text-left">
              <span className="grid size-14 shrink-0 place-items-center rounded-2xl border border-[#cde0b8]/25 bg-[#1a3323] font-display text-2xl text-[#a3e635]">
                n
              </span>
              <div>
                <ChapterTag inverse>02 // Explore</ChapterTag>
                <p
                  className="mt-3 font-display text-xl font-medium tracking-[-0.03em] text-white md:text-2xl"
                  id="contact-explore-heading"
                >
                  Explore Nabhi Labs before you write
                </p>
                <p className="mt-1 text-sm text-[#cde0b8]/70">
                  Products, services, and how we work—then start the conversation.
                </p>
              </div>
            </div>

            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Link
                className="inline-flex items-center justify-center rounded-full border border-[#cde0b8]/35 px-6 py-3 text-xs font-medium text-white transition-colors hover:bg-white/10"
                href="/services"
              >
                View services
              </Link>
              <Link
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#a3e635] px-6 py-3 text-xs font-medium text-[#0f1c13] transition-colors hover:bg-[#cde0b8]"
                href="/about"
              >
                About Nabhi Labs
                <ArrowUpRight aria-hidden className="size-3.5" />
              </Link>
            </div>
          </div>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-3">
          {explore.map(({ title, copy, href, icon: Icon }) => (
            <li key={title}>
              <Link
                className="group flex h-full flex-col rounded-2xl border border-[#d8e0d5] bg-[#f2f4f0] p-5 transition-colors hover:border-[#78966a]/50 hover:bg-[#ebf0e8]"
                href={href}
              >
                <span className="grid size-10 place-items-center rounded-xl bg-[#0f1c13] text-[#cde0b8]">
                  <Icon aria-hidden className="size-4" strokeWidth={1.75} />
                </span>
                <h3 className="mt-4 font-display text-base font-semibold tracking-[-0.02em] text-[#0f1c13]">
                  {title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-[#4a5b4e]">
                  {copy}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-[#31543a]">
                  Learn more
                  <ArrowUpRight
                    aria-hidden
                    className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-12 overflow-hidden rounded-3xl border border-[#d8e0d5] bg-[#f2f4f0]">
          <div className="grid gap-8 p-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:p-10">
            <div>
              <ChapterTag>03 // Connect</ChapterTag>
              <p className="mt-3 font-display text-xl font-medium tracking-[-0.03em] text-[#0f1c13] md:text-2xl">
                Stay close to how we build
              </p>
              <p className="mt-2 max-w-lg text-sm leading-6 text-[#4a5b4e]">
                Product updates, field notes, and the thinking behind Nabhi Labs—on
                the channels where we share our work in the open.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
              <a
                className="group inline-flex items-center justify-center gap-2.5 rounded-2xl border border-[#d8e0d5] bg-white px-5 py-3.5 text-sm font-medium text-[#1a3323] transition-colors hover:border-[#78966a] hover:bg-[#ebf0e8]"
                href={socialProfiles.linkedin}
                rel="noopener noreferrer"
                target="_blank"
              >
                <LinkedInIcon className="size-4" />
                LinkedIn
                <ArrowUpRight
                  aria-hidden
                  className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
              <a
                className="group inline-flex items-center justify-center gap-2.5 rounded-2xl border border-[#d8e0d5] bg-white px-5 py-3.5 text-sm font-medium text-[#1a3323] transition-colors hover:border-[#78966a] hover:bg-[#ebf0e8]"
                href={socialProfiles.instagram}
                rel="noopener noreferrer"
                target="_blank"
              >
                <InstagramIcon className="size-4" />
                Instagram
                <ArrowUpRight
                  aria-hidden
                  className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
