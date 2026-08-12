"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { ChapterTag } from "@/components/ui/ChapterTag";

const quotes = [
  {
    body: "Understanding should feel clear, not overwhelming. We focus on how organizations actually decide—then build technology that follows.",
    name: "Nabhi Labs",
    title: "Founding principle",
  },
  {
    body: "Organizations drown in information yet starve for understanding. That frustration became our company spine in 2024—and still guides every engagement.",
    name: "Nabhi Labs",
    title: "Origin story",
  },
] as const;

export function AboutTestimonial() {
  const [index, setIndex] = useState(0);
  const quote = quotes[index]!;

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }
    const id = window.setInterval(
      () => setIndex((i) => (i + 1) % quotes.length),
      7000,
    );
    return () => window.clearInterval(id);
  }, []);

  return (
    <section
      aria-labelledby="about-testimonial-heading"
      className="bg-[#f7f6f1] px-6 py-16 md:px-10 md:py-24"
      id="testimonials"
    >
      <div className="mx-auto max-w-[95rem]">
        <div className="relative overflow-hidden rounded-2xl border border-[#1a3323]/50 bg-[#0f1c13] px-8 py-14 md:px-14 md:py-20">
          <div
            aria-hidden
            className="about-tech-grid-dark pointer-events-none absolute inset-0 opacity-30"
          />
          <div className="relative mx-auto max-w-3xl text-center">
            <ChapterTag inverse>03 // Belief</ChapterTag>
            <h2 className="sr-only" id="about-testimonial-heading">
              What we believe
            </h2>
            <blockquote className="mt-8 font-display text-[clamp(1.5rem,3.2vw,2.35rem)] font-medium italic leading-[1.25] tracking-[-0.03em] text-white">
              “{quote.body}”
            </blockquote>
            <div className="mt-8">
              <p className="text-sm font-medium text-[#cde0b8]">{quote.name}</p>
              <p className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.12em] text-[#78966a]">
                {quote.title}
              </p>
            </div>
            <div className="mt-10 flex justify-center gap-3">
              <button
                aria-label="Previous quote"
                className="grid size-11 place-items-center rounded-full border border-[#cde0b8]/25 bg-white/5 text-white transition-colors hover:bg-white/10"
                onClick={() =>
                  setIndex((i) => (i - 1 + quotes.length) % quotes.length)
                }
                type="button"
              >
                <ArrowLeft aria-hidden className="size-4" />
              </button>
              <button
                aria-label="Next quote"
                className="grid size-11 place-items-center rounded-full border border-[#cde0b8]/25 bg-white/5 text-white transition-colors hover:bg-white/10"
                onClick={() => setIndex((i) => (i + 1) % quotes.length)}
                type="button"
              >
                <ArrowRight aria-hidden className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
