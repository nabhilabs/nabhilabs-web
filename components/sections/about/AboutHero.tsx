import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

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
      className="relative overflow-hidden bg-[#f2f4f0] px-6 pb-16 pt-28 md:px-10 md:pb-24 md:pt-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-20 size-[28rem] rounded-full bg-[radial-gradient(circle,rgba(183,232,74,0.14),transparent_68%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-[-10%] bottom-0 size-[22rem] rounded-full bg-[radial-gradient(circle,rgba(7,27,18,0.05),transparent_70%)]"
      />

      <div className="relative mx-auto grid max-w-[95rem] items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
        <div className="hero-enter">
          <p className="inline-flex items-center gap-2.5 font-mono text-[10px] uppercase tracking-[0.18em] text-[#5a6b5e]">
            <span
              aria-hidden
              className="size-1.5 rounded-full bg-[#B7E84A]"
            />
            00 // About
          </p>

          <h1
            className="mt-6 max-w-xl font-display text-[clamp(2.6rem,5.5vw,4.6rem)] font-medium leading-[0.94] tracking-[-0.05em] text-[#071B12]"
            id="about-hero-title"
          >
            Understanding first.
            <span className="mt-2 block font-serif text-[clamp(2.4rem,5vw,4.2rem)] font-normal italic tracking-[-0.03em] text-[#1a3323]">
              Technology that follows.
            </span>
          </h1>

          <p className="mt-6 max-w-md text-sm leading-7 text-[#4a5b4e] md:text-[15px]">
            Founded in 2024 by four co-founders who shared one frustration:
            organizations drown in information yet starve for understanding.
          </p>

          <ul className="mt-7 flex flex-wrap gap-2">
            {pills.map((pill) => (
              <li
                className="rounded-full border border-[#d5dccf] bg-[#ebf0e8]/80 px-3.5 py-1.5 text-[11px] text-[#31543a]"
                key={pill}
              >
                {pill}
              </li>
            ))}
          </ul>

          <Link
            className="group mt-9 inline-flex items-center gap-2 rounded-full bg-[#071B12] px-6 py-3.5 text-xs font-medium text-white transition-colors hover:bg-[#0f2a1c]"
            href="/contact"
          >
            Book a call
            <ArrowUpRight
              aria-hidden
              className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-lg lg:mx-0 lg:max-w-none">
          <div
            aria-hidden
            className="absolute inset-[4%] rounded-full bg-[#071B12]"
          />
          <div
            aria-hidden
            className="absolute inset-[-4%] rounded-full border border-[#071B12]/15"
          />
          <div
            aria-hidden
            className="absolute inset-[6%] rounded-full border border-[#B7E84A]/25"
          />
          <div className="absolute inset-[12%] overflow-hidden rounded-full border border-[#0f1c13] shadow-[0_24px_60px_rgba(7,27,18,0.28)]">
            <Image
              alt="Nabhi Labs co-founders outdoors — understanding, connection, and a wider perspective"
              className="object-cover object-[50%_28%] transition-transform duration-[1.4s] ease-out"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 42vw"
              src="/assets/about_us_wallpaper.webp"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-[#071B12]/35 via-transparent to-transparent"
            />
          </div>
          <div
            aria-hidden
            className="absolute bottom-[8%] right-[4%] size-3 rounded-full bg-[#B7E84A] shadow-[0_0_20px_rgba(183,232,74,0.55)]"
          />
        </div>
      </div>
    </section>
  );
}
