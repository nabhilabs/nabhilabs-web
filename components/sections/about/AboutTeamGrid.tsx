import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ChapterTag } from "@/components/ui/ChapterTag";

const members = [
  {
    name: "Surya Raj",
    role: "Co-founder",
    focus: "Agentic systems",
    image: "/assets/surya.png",
  },
  {
    name: "Pavan Kumar",
    role: "Co-founder",
    focus: "RAG engineering",
    image: "/assets/pavan.png",
  },
  {
    name: "Tharun Parsa",
    role: "Co-founder",
    focus: "Healthcare AI",
    image: "/assets/tharun.png",
  },
  {
    name: "Sai Manjith",
    role: "Co-founder",
    focus: "Platform",
    image: "/assets/manjith.png",
  },
] as const;

export function AboutTeamGrid() {
  return (
    <section
      aria-labelledby="about-team-heading"
      className="border-b border-[#d8e0d5] px-6 py-16 md:px-10 md:py-24"
      id="team"
    >
      <div className="mx-auto max-w-[95rem]">
        <div className="max-w-2xl">
          <ChapterTag>02 // Core_Team</ChapterTag>
          <h2
            className="mt-6 font-display text-[clamp(1.75rem,3.2vw,2.75rem)] font-medium leading-[1.05] tracking-[-0.04em] text-[#0f1c13]"
            id="about-team-heading"
          >
            People building clarity into your everyday decisions
          </h2>
          <p className="mt-4 max-w-lg text-sm leading-6 text-[#4a5b4e]">
            Four co-founders building Nabhi Persona, Nabhi Cares, and the
            systems that turn understanding into technology.
          </p>
        </div>

        <ul className="mt-10 grid grid-cols-2 gap-4 sm:gap-5 lg:mt-12 lg:grid-cols-4 lg:gap-5">
          {members.map((member) => (
            <li key={member.name}>
              <article className="group relative aspect-[3/4] overflow-hidden rounded-2xl border border-[#d8e0d5] sm:aspect-[4/5]">
                <Image
                  alt={`${member.name}, ${member.role} at Nabhi Labs`}
                  className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                  height={500}
                  loading="lazy"
                  sizes="(max-width: 640px) 45vw, (max-width: 1024px) 22vw, 20vw"
                  src={member.image}
                  width={400}
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-[#0f1c13]/90 via-[#0f1c13]/20 to-transparent"
                />
                <Link
                  aria-label={`Contact about ${member.name}`}
                  className="absolute right-2 top-2 grid size-8 place-items-center rounded-lg border border-[#cde0b8]/30 bg-[#0f1c13]/80 text-[#cde0b8] backdrop-blur-sm transition-colors hover:bg-[#1a3323] sm:right-3 sm:top-3 sm:size-9"
                  href="/contact"
                >
                  <ArrowUpRight aria-hidden className="size-3.5 sm:size-4" />
                </Link>
                <div className="absolute inset-x-0 bottom-0 p-3 text-white sm:p-4">
                  <p className="font-mono text-[8px] uppercase tracking-[0.14em] text-[#cde0b8] sm:text-[9px]">
                    {member.role}
                  </p>
                  <h3 className="mt-0.5 font-display text-sm font-semibold tracking-[-0.02em] sm:mt-1 sm:text-lg">
                    {member.name}
                  </h3>
                  <p className="mt-0.5 hidden text-xs text-white/70 sm:block">
                    {member.focus}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
