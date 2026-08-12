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

export function ContactPageSection() {
  const submitInquiry = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nWhat's on your mind:\n${message}`,
    );

    window.location.href = `mailto:hello@nabhilabs.com?subject=${encodeURIComponent(
      "Contact Nabhi Labs",
    )}&body=${body}`;
  };

  return (
    <section
      aria-labelledby="contact-page-heading"
      className="section-theme-dark relative bg-[#0e1012] pb-16 pt-[4.25rem] text-white md:pb-20"
      id="contact-form"
    >
      <Reveal className="mx-auto max-w-[95rem]">
        <div className="grid gap-12 px-6 py-12 md:px-10 md:py-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <ChapterTag inverse>00 // Contact</ChapterTag>
            <p className="mt-6 font-mono text-[10px] text-white/50">
              What&apos;s next?
            </p>
            <h1
              className="mt-8 max-w-xl font-display text-[clamp(3.6rem,6vw,6.8rem)] font-medium leading-[0.86] tracking-[-0.06em] text-white"
              id="contact-page-heading"
            >
              Start with
              <br />
              what feels
              <br />
              <span className="font-serif font-normal italic text-[#a3e635]">
                complex.
              </span>
            </h1>
            <span className="mt-7 block h-px w-7 bg-[#a3e635]" />
            <p className="mt-6 text-sm leading-7 text-white/55">
              Complexity slows progress.
              <br />
              Clarity changes everything.
            </p>
            <p className="mt-6 max-w-sm text-sm leading-7 text-white/45">
              Tell us what you&apos;re working through. Someone from Nabhi Labs
              usually replies within 24 hours—not a sales pitch, just a
              thoughtful conversation.
            </p>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6 md:p-8">
            <form onSubmit={submitInquiry}>
              <label className="grid grid-cols-[2.5rem_1fr] gap-4">
                <span className="mt-1 grid size-10 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-[#a3e635]">
                  <Mail aria-hidden className="size-4" strokeWidth={1.5} />
                </span>
                <span className="field-line text-white">
                  <span className="font-mono text-[8px] uppercase tracking-[0.14em] text-white/70">
                    Email
                  </span>
                  <input
                    autoComplete="email"
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
                  <UserRound aria-hidden className="size-4" strokeWidth={1.5} />
                </span>
                <span className="field-line text-white">
                  <span className="font-mono text-[8px] uppercase tracking-[0.14em] text-white/70">
                    Name
                  </span>
                  <input
                    autoComplete="name"
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
                  <Lightbulb aria-hidden className="size-4" strokeWidth={1.5} />
                </span>
                <span className="field-line text-white">
                  <span className="font-mono text-[8px] uppercase tracking-[0.14em] text-white/70">
                    What&apos;s on your mind?
                  </span>
                  <textarea
                    className="mt-1 min-h-20 w-full resize-none border-b border-white/15 bg-transparent py-3 text-sm text-white outline-none placeholder:text-white/30"
                    name="message"
                    placeholder="A few lines are enough - we'll take it from there."
                    required
                  />
                </span>
              </label>

              <div className="mt-7 grid gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:grid-cols-[auto_1fr_auto] sm:items-center">
                <span className="grid size-10 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-[#a3e635]">
                  <Sparkles aria-hidden className="size-4" strokeWidth={1.5} />
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
                <ArrowUpRight aria-hidden className="size-4" />
              </button>
            </form>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
