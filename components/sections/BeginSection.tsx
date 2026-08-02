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
    <section
      className="section-theme-dark relative z-10 bg-[#0e1012] text-white transition-colors duration-700"
      id="begin"
    >
      <Reveal className="mx-auto max-w-[95rem]">
        <div className="grid gap-12 px-6 py-12 md:px-10 md:py-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative min-h-[34rem] lg:sticky lg:top-24 lg:self-start lg:min-h-0">
            <ChapterTag inverse>10 // Begin</ChapterTag>
            <p className="mt-6 font-mono text-[10px] text-white/50">
              What&apos;s next?
            </p>
            <h2 className="mt-8 max-w-xl font-display text-[clamp(3.6rem,6vw,6.8rem)] font-medium leading-[0.86] tracking-[-0.06em] text-white">
              Start with
              <br />
              what feels
              <br />
              <span className="font-serif font-normal italic text-[#a3e635]">
                complex.
              </span>
            </h2>
            <span className="mt-7 block h-px w-7 bg-[#a3e635]" />
            <p className="mt-6 text-sm leading-7 text-white/55">
              Complexity slows progress.
              <br />
              Clarity changes everything.
            </p>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6 md:p-8">
            <form onSubmit={submitInquiry}>
              <label className="grid grid-cols-[2.5rem_1fr] gap-4">
                <span className="mt-1 grid size-10 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-[#a3e635]">
                  <Mail className="size-4" strokeWidth={1.5} />
                </span>
                <span className="field-line text-white">
                  <span className="font-mono text-[8px] uppercase tracking-[0.14em] text-white/70">
                    Email
                  </span>
                  <input
                    className="mt-1 w-full border-b border-white/15 bg-transparent py-3 text-sm text-white outline-none placeholder:text-white/30"
                    name="email"
                    placeholder="you@company.com"
                    required
                    type="email"
                  />
                </span>
              </label>

              <label className="mt-6 grid grid-cols-[2.5rem_1fr] gap-4">
                <span className="mt-1 grid size-10 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-[#a3e635]">
                  <UserRound className="size-4" strokeWidth={1.5} />
                </span>
                <span className="field-line text-white">
                  <span className="font-mono text-[8px] uppercase tracking-[0.14em] text-white/70">
                    Name
                  </span>
                  <input
                    className="mt-1 w-full border-b border-white/15 bg-transparent py-3 text-sm text-white outline-none placeholder:text-white/30"
                    name="name"
                    placeholder="Your name"
                    required
                    type="text"
                  />
                </span>
              </label>

              <label className="mt-6 grid grid-cols-[2.5rem_1fr] gap-4">
                <span className="mt-1 grid size-10 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-[#a3e635]">
                  <Lightbulb className="size-4" strokeWidth={1.5} />
                </span>
                <span className="field-line text-white">
                  <span className="font-mono text-[8px] uppercase tracking-[0.14em] text-white/70">
                    What&apos;s on your mind?
                  </span>
                  <textarea
                    className="mt-1 min-h-20 w-full resize-none border-b border-white/15 bg-transparent py-3 text-sm text-white outline-none placeholder:text-white/30"
                    name="complexity"
                    placeholder="A few lines are enough - we'll take it from there."
                    required
                  />
                </span>
              </label>

              <div className="mt-7 grid gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:grid-cols-[auto_1fr_auto] sm:items-center">
                <span className="grid size-10 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-[#a3e635]">
                  <Sparkles className="size-4" strokeWidth={1.5} />
                </span>
                <div>
                  <p className="text-[10px] font-medium text-white">
                    Thoughtful conversations. Real clarity.
                  </p>
                  <p className="mt-1 text-[9px] leading-4 text-white/45">
                    We read every message. Someone from our team will reach out
                    personally.
                  </p>
                </div>
                <p className="text-[9px] leading-4 text-white/45">
                  We usually reply
                  <br />
                  within 24 hours.
                </p>
              </div>

              <button
                className="mt-6 flex w-full items-center justify-center gap-3 rounded-full bg-[#a3e635] px-8 py-4 text-xs font-medium text-[#0e1012] transition-colors hover:bg-[#bef264]"
                type="submit"
              >
                Schedule a Conversation
                <ArrowUpRight aria-hidden="true" className="size-4" />
              </button>
            </form>
          </div>
        </div>

        <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 px-6 py-5 font-mono text-[8px] uppercase tracking-[0.16em] text-white/40 md:px-10">
          <span className="flex items-center gap-3">
            <span className="grid size-6 place-items-center rounded-md border border-white/15 font-display text-xs text-[#a3e635]">
              n
            </span>
            Nabhi Labs - Understanding before technology
          </span>
          <span>● &nbsp; © 2026 Nabhi Labs</span>
        </footer>
      </Reveal>
    </section>
  );
}
