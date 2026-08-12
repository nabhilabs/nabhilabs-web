import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ChapterTag } from "@/components/ui/ChapterTag";

const pills = [
  "Understanding-first",
  "Systems thinking",
  "Nabhi Persona",
  "Nabhi Cares",
  "Clarity",
] as const;

export function AboutHero() {
  return (
    <section
      aria-labelledby="about-hero-title"
      className="technical-grid border-b border-[#d8e0d5] px-6 pb-16 pt-28 md:px-10 md:pb-24 md:pt-32"
    >
      <div className="mx-auto grid max-w-[95rem] items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <ChapterTag>00 // About</ChapterTag>
          <h1
            className="mt-6 max-w-xl font-display text-[clamp(2.4rem,5vw,4.2rem)] font-medium leading-[0.95] tracking-[-0.05em] text-[#0f1c13]"
            id="about-hero-title"
          >
            Understanding first.
            <span className="mt-2 block text-[#31543a]">
              Technology that follows.
            </span>
          </h1>

          <ul className="mt-8 flex flex-wrap gap-2.5">
            {pills.map((pill) => (
              <li
                className="inline-flex items-center gap-2 rounded-full border border-[#d8e0d5] bg-[#ebf0e8] px-3.5 py-2 text-xs text-[#1a3323]"
                key={pill}
              >
                <span
                  aria-hidden
                  className="size-1.5 rounded-full bg-[#a3e635]"
                />
                {pill}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="relative aspect-[5/4] overflow-hidden rounded-2xl border border-[#d8e0d5] shadow-[0_12px_40px_rgba(15,28,19,0.08)]">
            <Image
              alt="Nabhi Labs co-founders outdoors on a grassy hill under a bright sky"
              className="object-cover object-[50%_35%]"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 48vw"
              src="/assets/about_us_wallpaper.webp"
            />
          </div>
          <p className="mt-6 max-w-md text-sm leading-7 text-[#4a5b4e]">
            Founded in 2024 by four co-founders who shared one frustration:
            organizations drown in information yet starve for understanding.
          </p>
          <Link
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#1a3323] px-6 py-3 text-xs font-medium text-white transition-colors hover:bg-[#2c4f37]"
            href="/contact"
          >
            Book a call
            <ArrowUpRight aria-hidden className="size-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
