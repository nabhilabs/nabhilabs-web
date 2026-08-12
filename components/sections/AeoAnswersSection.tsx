"use client";

import Image from "next/image";
import { aeoFaqs } from "@/lib/aeo-faq";
import { ChapterTag } from "@/components/ui/ChapterTag";
import { FaqThread } from "@/components/ui/FaqThread";
import { Reveal } from "@/components/ui/Reveal";

const microLabels = [
  "the work",
  "the method",
  "the product",
  "the proof",
  "the people",
  "the beginning",
] as const;

export function AeoAnswersSection() {
  return (
    <section
      aria-labelledby="aeo-answers-title"
      className="relative z-10 overflow-x-clip overflow-y-visible border-t border-[#d8e0d5] bg-[#f7f6f1]"
      id="answers"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute top-[14%] bottom-[6%] left-1/2 z-0 w-[min(36vw,28rem)] -translate-x-[74%] sm:w-[min(34vw,30rem)] lg:top-[12%] lg:bottom-[4%] lg:w-[min(32vw,32rem)] lg:-translate-x-[70%]"
      >
        <Image
          alt=""
          className="object-contain object-[center_top] mix-blend-multiply opacity-[0.55] sm:opacity-[0.6]"
          fill
          sizes="(max-width: 1024px) 45vw, 32vw"
          src="/assets/questions-section.webp"
          style={{ transform: "scaleX(-1.08) scaleY(1.08)" }}
        />
      </div>

      <Reveal className="relative z-10 mx-auto max-w-[95rem] px-6 pb-12 pt-6 md:px-10 md:pb-16 md:pt-8 lg:pb-20 lg:pt-8">
        <div className="grid gap-16 overflow-visible lg:grid-cols-[minmax(0,0.78fr)_minmax(10rem,0.45fr)_minmax(0,1.35fr)] lg:items-start lg:gap-8 xl:gap-10">
          <div className="relative lg:sticky lg:top-24 lg:self-start">
            <ChapterTag>10 // Answers</ChapterTag>
            <p className="mt-5 font-mono text-[9px] uppercase tracking-[0.16em] text-[#5a7052]">
              A thread of questions
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
          </div>

          {/* Spacer column — keeps room for the middle background image */}
          <div aria-hidden className="hidden lg:block" />

          <div className="relative overflow-visible pt-2 lg:col-span-1 lg:-mr-8 lg:pt-10 xl:-mr-14">
            <FaqThread items={aeoFaqs} microLabels={microLabels} slant />
          </div>
        </div>

        <p className="relative z-10 mt-14 border-t border-[#d8e0d5] pt-6 text-xs leading-6 text-[#4a5b4e]">
          Evidence we cite:{" "}
          <span className="font-medium text-[#0f1c13]">50+</span> models tailored
          to unique contexts · about{" "}
          <span className="font-medium text-[#0f1c13]">25%</span> average increase
          in operational clarity · replies within{" "}
          <span className="font-medium text-[#0f1c13]">24 hours</span>
        </p>
      </Reveal>
    </section>
  );
}
