import { ArrowUpRight, ChevronDown } from "lucide-react";
import { aeoCitations, aeoFaqs } from "@/lib/aeo-faq";
import { ChapterTag } from "@/components/ui/ChapterTag";
import { Reveal } from "@/components/ui/Reveal";

export function AeoAnswersSection() {
  return (
    <section
      aria-labelledby="aeo-answers-title"
      className="relative z-10 border-t border-[#d8e0d5] bg-[#f2f4f0]"
      id="answers"
    >
      <Reveal className="mx-auto max-w-[95rem] px-6 py-10 md:px-10 md:py-14">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <ChapterTag>10 // Answers</ChapterTag>
            <h2
              className="mt-5 font-display text-[clamp(2.8rem,5vw,4.8rem)] font-medium leading-[0.92] tracking-[-0.055em] text-[#0f1c13]"
              id="aeo-answers-title"
            >
              Direct answers,
              <br />
              no theatre
              <span className="text-[#78966a]">.</span>
            </h2>
            <p className="mt-4 max-w-xl section-copy text-[#4a5b4e]">
              Standalone answers for humans and answer engines—aligned with how
              Nabhi Labs works: understanding before technology.
            </p>
          </div>
          <blockquote className="max-w-sm rounded-2xl border border-[#d8e0d5] bg-white/60 px-5 py-4 font-serif text-base leading-7 text-[#31543a]">
            “Why is there so much information, yet so little understanding?”
            <footer className="mt-2 font-sans font-mono text-[9px] uppercase tracking-[0.14em] text-[#5a7052]">
              — Co-founders, Nabhi Labs
            </footer>
          </blockquote>
        </div>

        <div className="overflow-hidden rounded-[28px] border border-[#d8e0d5] bg-white/70">
          {aeoFaqs.map((item, index) => (
            <details
              className="group border-b border-[#d8e0d5] last:border-b-0 open:bg-[#f7f6f1]/80"
              key={item.question}
              open={index === 0}
            >
              <summary className="flex cursor-pointer list-none items-start gap-4 px-5 py-5 outline-none transition-colors marker:content-none hover:bg-[#f7f6f1] [&::-webkit-details-marker]:hidden md:gap-5 md:px-7">
                <span className="mt-1 w-8 shrink-0 font-mono text-[11px] tabular-nums text-[#78966a]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="min-w-0 flex-1 font-display text-lg font-medium leading-snug tracking-[-0.03em] text-[#0f1c13] md:text-xl">
                  {item.question}
                </span>
                <ChevronDown
                  aria-hidden="true"
                  className="mt-1.5 size-4 shrink-0 text-[#78966a] transition-transform duration-300 group-open:rotate-180"
                />
              </summary>
              <div className="px-5 pb-6 pl-[3.75rem] pr-7 md:px-7 md:pl-[4.25rem]">
                <p className="max-w-3xl text-base leading-7 text-[#4a5b4e]">
                  {item.answer}
                </p>
              </div>
            </details>
          ))}
        </div>

        <div className="mt-6 grid gap-4 rounded-[24px] border border-[#d8e0d5] bg-white/55 p-5 md:grid-cols-[0.9fr_1.1fr] md:items-center md:p-6">
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#5a7052]">
              Primary sources
            </p>
            <p className="mt-2 text-sm leading-6 text-[#4a5b4e]">
              Evidence we cite:{" "}
              <span className="font-medium text-[#0f1c13]">50+</span> models ·{" "}
              <span className="font-medium text-[#0f1c13]">25%</span> clarity
              lift · replies within{" "}
              <span className="font-medium text-[#0f1c13]">24 hours</span>
            </p>
          </div>
          <ul className="flex flex-wrap gap-2">
            {aeoCitations.map((cite) => (
              <li key={cite.href}>
                <a
                  className="ui-card inline-flex items-center gap-2 rounded-full border border-[#d8e0d5] bg-[#f7f6f1] px-3.5 py-2 text-xs text-[#31543a] hover:text-[#0f1c13]"
                  href={cite.href}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {cite.label}
                  <ArrowUpRight aria-hidden="true" className="size-3 opacity-50" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
