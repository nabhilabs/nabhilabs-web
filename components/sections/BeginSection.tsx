"use client";

import type { FormEvent } from "react";
import {
  ArrowUpRight,
  Lightbulb,
  Mail,
  Sparkles,
  UserRound,
} from "lucide-react";
import { ChapterTag } from "@/components/ui/ChapterTag";
import { Reveal } from "@/components/ui/Reveal";

export function BeginSection() {
  const submitInquiry = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const complexity = String(data.get("complexity") ?? "");
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nWhat feels complex:\n${complexity}`,
    );

    window.location.href = `mailto:hello@nabhilabs.com?subject=${encodeURIComponent(
      "Begin with understanding",
    )}&body=${body}`;
  };

  return (
    <section className="relative z-10 bg-[#f7f6f1]" id="begin">
      <Reveal className="mx-auto max-w-[95rem]">
        <div className="grid gap-12 px-6 py-12 md:px-10 md:py-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative min-h-[34rem]">
            <ChapterTag>10 // Begin</ChapterTag>
            <p className="mt-6 font-mono text-[10px] text-[#4a5b4e]">
              What&apos;s next?
            </p>
            <h2 className="mt-8 max-w-xl font-display text-[clamp(3.6rem,6vw,6.8rem)] font-medium leading-[0.86] tracking-[-0.06em] text-[#0f1c13]">
              Start with
              <br />
              what feels
              <br />
              <span className="font-serif font-normal italic text-[#78966a]">
                complex.
              </span>
            </h2>
            <span className="mt-7 block h-px w-7 bg-[#78966a]" />
            <p className="mt-6 text-sm leading-7 text-[#4a5b4e]">
              Complexity slows progress.
              <br />
              Clarity changes everything.
              <br />
              <strong className="font-medium text-[#0f1c13]">
                Let&apos;s build what matters.
              </strong>
            </p>

            <div className="absolute inset-x-0 bottom-0 hidden h-44 overflow-hidden lg:block">
              <svg
                aria-hidden="true"
                className="absolute inset-0 h-full w-full"
                preserveAspectRatio="none"
                viewBox="0 0 600 180"
              >
                {Array.from({ length: 12 }, (_, index) => (
                  <path
                    d={`M -30 ${95 + index * 6} C 110 ${20 + index * 4}, 190 ${160 - index * 3}, 310 ${90 + index * 2} S 490 ${40 + index * 5}, 650 ${95 + index * 4}`}
                    fill="none"
                    key={index}
                    stroke={`rgba(120,150,106,${0.08 + index * 0.008})`}
                    strokeWidth="1"
                  />
                ))}
              </svg>
              <span className="absolute left-1/2 top-1/2 size-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#cde0b8]/25 blur-xl" />
              <span className="absolute left-1/2 top-1/2 grid size-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-[#5a8a48] font-display text-lg font-semibold text-white shadow-[0_0_25px_9px_rgba(120,150,106,0.25)]">
                n
              </span>
              <span className="absolute left-[18%] top-[55%] size-1.5 rounded-full bg-[#78966a]" />
              <span className="absolute right-[15%] top-[35%] size-1.5 rounded-full bg-[#78966a]" />
            </div>
          </div>

          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#5a7052]">
              What feels complex in your world right now?
            </p>
            <p className="mt-4 font-serif text-2xl text-[#0f1c13] md:text-3xl">
              Tell us where{" "}
              <span className="italic text-[#78966a]">clarity</span> is missing.
            </p>

            <form
              className="mt-7 rounded-[24px] border border-[#d8e0d5] bg-white/25 p-5 md:p-7"
              onSubmit={submitInquiry}
            >
              <label className="grid grid-cols-[2.5rem_1fr] gap-4">
                <span className="mt-1 grid size-10 place-items-center rounded-full bg-[#edf3e8] text-[#5a7052]">
                  <Mail className="size-4" strokeWidth={1.5} />
                </span>
                <span>
                  <span className="font-mono text-[8px] uppercase tracking-[0.14em] text-[#0f1c13]">
                    Email
                  </span>
                  <input
                    className="mt-1 w-full border-b border-[#c8d6c4] bg-transparent py-3 text-sm text-[#0f1c13] outline-none transition-colors placeholder:text-[#4a5b4e]/35 focus:border-[#5a7052]"
                    name="email"
                    placeholder="you@company.com"
                    required
                    suppressHydrationWarning
                    type="email"
                  />
                </span>
              </label>

              <label className="mt-6 grid grid-cols-[2.5rem_1fr] gap-4">
                <span className="mt-1 grid size-10 place-items-center rounded-full bg-[#edf3e8] text-[#5a7052]">
                  <UserRound className="size-4" strokeWidth={1.5} />
                </span>
                <span>
                  <span className="font-mono text-[8px] uppercase tracking-[0.14em] text-[#0f1c13]">
                    Name
                  </span>
                  <input
                    className="mt-1 w-full border-b border-[#c8d6c4] bg-transparent py-3 text-sm text-[#0f1c13] outline-none transition-colors placeholder:text-[#4a5b4e]/35 focus:border-[#5a7052]"
                    name="name"
                    placeholder="Your name"
                    required
                    suppressHydrationWarning
                    type="text"
                  />
                </span>
              </label>

              <label className="mt-6 grid grid-cols-[2.5rem_1fr] gap-4">
                <span className="mt-1 grid size-10 place-items-center rounded-full bg-[#edf3e8] text-[#5a7052]">
                  <Lightbulb className="size-4" strokeWidth={1.5} />
                </span>
                <span>
                  <span className="font-mono text-[8px] uppercase tracking-[0.14em] text-[#0f1c13]">
                    What&apos;s on your mind?
                  </span>
                  <textarea
                    className="mt-1 min-h-20 w-full resize-none border-b border-[#c8d6c4] bg-transparent py-3 text-sm text-[#0f1c13] outline-none transition-colors placeholder:text-[#4a5b4e]/35 focus:border-[#5a7052]"
                    name="complexity"
                    placeholder="A few lines are enough — we’ll take it from there."
                    required
                  />
                </span>
              </label>

              <div className="mt-7 grid gap-4 rounded-2xl bg-white/50 p-4 sm:grid-cols-[auto_1fr_auto] sm:items-center">
                <span className="grid size-10 place-items-center rounded-full bg-[#edf3e8] text-[#5a7052]">
                  <Sparkles className="size-4" strokeWidth={1.5} />
                </span>
                <div>
                  <p className="text-[10px] font-medium text-[#0f1c13]">
                    Thoughtful conversations. Real clarity.
                  </p>
                  <p className="mt-1 text-[9px] leading-4 text-[#4a5b4e]">
                    We read every message. Someone from our team will reach out
                    personally.
                  </p>
                </div>
                <p className="text-[9px] leading-4 text-[#4a5b4e]">
                  We usually reply
                  <br />
                  within 24 hours.
                </p>
              </div>

              <button
                className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#1a3323] px-8 py-4 text-xs font-medium text-white transition-colors hover:bg-[#2c4f37]"
                suppressHydrationWarning
                type="submit"
              >
                Schedule a Conversation
                <ArrowUpRight aria-hidden="true" className="size-4" />
              </button>
            </form>
          </div>
        </div>

        <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-[#d8e0d5] px-6 py-5 font-mono text-[8px] uppercase tracking-[0.16em] text-[#4a5b4e] md:px-10">
          <span className="flex items-center gap-3">
            <span className="grid size-6 place-items-center rounded-md border border-[#d8e0d5] font-display text-xs text-[#31543a]">
              n
            </span>
            Nabhi Labs — Understanding before technology
          </span>
          <span>● &nbsp; © 2026 Nabhi Labs</span>
        </footer>
      </Reveal>
    </section>
  );
}
