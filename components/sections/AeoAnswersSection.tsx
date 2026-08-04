import { ArrowUpRight, ChevronDown } from "lucide-react";
import { aeoCitations, aeoFaqs } from "@/lib/aeo-faq";
import { ChapterTag } from "@/components/ui/ChapterTag";
import { Reveal } from "@/components/ui/Reveal";

export function AeoAnswersSection() {
  return (
    <section
      aria-labelledby="aeo-answers-title"
      className="relative z-10 border-t border-[#d8e0d5] bg-[#f7f6f1]"
      id="answers"
    >
      <Reveal className="mx-auto max-w-[95rem] px-6 py-12 md:px-10 md:py-16 lg:py-20">
        <div className="grid gap-14 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <ChapterTag>11 // Answers</ChapterTag>
            <p className="mt-6 font-mono text-[10px] text-[#5a7052]">
              What do people ask Nabhi Labs?
            </p>
            <h2
              className="mt-8 max-w-md font-display text-[clamp(3.2rem,5.5vw,5.6rem)] font-medium leading-[0.88] tracking-[-0.055em] text-[#0f1c13]"
              id="aeo-answers-title"
            >
              Direct answers,
              <br />
              no theatre
              <span className="text-[#78966a]">.</span>
            </h2>
            <span className="mt-7 block h-px w-8 bg-[#78966a]" />
            <p className="mt-6 max-w-sm text-sm leading-7 text-[#4a5b4e]">
              Standalone answers for humans and answer engines—aligned with how
              Nabhi Labs works: understanding before technology.
            </p>

            <blockquote className="mt-10 max-w-sm border-l border-[#78966a]/40 pl-4 font-serif text-base leading-7 text-[#31543a]">
              “Why is there so much information, yet so little understanding?”
              <footer className="mt-3 font-sans font-mono text-[9px] uppercase tracking-[0.14em] text-[#5a7052]">
                — Co-founders, Nabhi Labs
              </footer>
            </blockquote>

            <div className="mt-10">
              <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-[#5a7052]">
                Primary sources
              </p>
              <ul className="mt-4 space-y-3">
                {aeoCitations.map((cite) => (
                  <li key={cite.href}>
                    <a
                      className="group inline-flex items-center gap-2 text-xs text-[#4a5b4e] transition-colors hover:text-[#0f1c13]"
                      href={cite.href}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span className="underline decoration-[#c8d6c4] underline-offset-4 group-hover:decoration-[#78966a]">
                        {cite.label}
                      </span>
                      <ArrowUpRight
                        aria-hidden="true"
                        className="size-3 opacity-40 transition-opacity group-hover:opacity-80"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-[#d8e0d5]">
            {aeoFaqs.map((item, index) => (
              <details
                className="group border-b border-[#d8e0d5] open:bg-[#f2f4f0]/60"
                key={item.question}
                open={index === 0}
              >
                <summary className="flex cursor-pointer list-none items-start gap-5 py-6 outline-none transition-colors marker:content-none [&::-webkit-details-marker]:hidden hover:text-[#0f1c13] focus-visible:bg-[#eef1eb]">
                  <span className="mt-1 w-8 shrink-0 font-mono text-[10px] tabular-nums text-[#78966a]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="min-w-0 flex-1 font-display text-xl font-medium leading-snug tracking-[-0.03em] text-[#0f1c13] md:text-2xl">
                    {item.question}
                  </span>
                  <ChevronDown
                    aria-hidden="true"
                    className="mt-1.5 size-4 shrink-0 text-[#78966a] transition-transform duration-300 group-open:rotate-180"
                  />
                </summary>
                <div className="pb-7 pl-[3.25rem] pr-9 md:pl-[3.25rem]">
                  <p className="max-w-2xl text-sm leading-7 text-[#4a5b4e]">
                    {item.answer}
                  </p>
                </div>
              </details>
            ))}

            <p className="mt-8 text-xs leading-6 text-[#4a5b4e]">
              Evidence we cite:{" "}
              <span className="font-medium text-[#0f1c13]">50+</span> models
              tailored to unique contexts · about{" "}
              <span className="font-medium text-[#0f1c13]">25%</span> average
              increase in operational clarity · replies within{" "}
              <span className="font-medium text-[#0f1c13]">24 hours</span>
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
