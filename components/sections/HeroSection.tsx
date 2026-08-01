"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative z-10 min-h-[100svh] overflow-hidden"
      id="top"
    >
      <Image
        alt=""
        className="object-cover object-center"
        fill
        priority
        quality={92}
        sizes="100vw"
        src="/assets/hero-landing-day.png"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(242,244,240,0.56)_0%,rgba(242,244,240,0.28)_48%,rgba(242,244,240,0.04)_76%)]" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-[95rem] items-center px-6 pb-10 pt-24 md:px-12 lg:px-20">
        <motion.div
          className="w-full max-w-[44rem]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-flex rounded-full border border-white/70 bg-white/65 px-4 py-2 font-mono text-[10px] tracking-[0.12em] text-[#31543a] shadow-sm backdrop-blur-md">
            + &nbsp; Understanding → Intelligence → Impact
          </span>

          <h1
            className="mt-7 max-w-[42rem] text-balance font-display text-[clamp(3.4rem,6.4vw,6.8rem)] font-medium leading-[0.9] tracking-[-0.065em] text-[#0f1c13]"
            id="hero-title"
          >
            Where complexity becomes{" "}
            <span className="relative inline-block px-[0.04em]">
              <span
                aria-hidden="true"
                className="absolute -left-px -right-px bottom-[0.06em] h-[calc(0.56em+2px)] rounded-[0.14em] bg-[#cde0b8]"
              />
              <span className="relative">clarity</span>
            </span>
            .
          </h1>

          <p className="mt-6 max-w-md text-base font-light leading-7 text-[#314238] md:text-lg">
            Before code, before AI, before design — comes understanding.
          </p>

          <div className="mt-7 grid max-w-[36rem] gap-3 sm:grid-cols-2">
            <motion.article
              className="flex min-h-52 flex-col justify-between rounded-3xl border border-white/60 bg-white/40 p-5 shadow-[0_18px_50px_rgba(26,51,35,0.12)] backdrop-blur-md"
              transition={{ type: "spring", stiffness: 120, damping: 15 }}
              whileHover={{ y: -5 }}
            >
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#5a7052]">
                  01 // Perspective
                </p>
                <h2 className="mt-3 font-display text-xl font-medium tracking-[-0.03em] text-[#0f1c13]">
                  Carrying Complexity?
                </h2>
                <p className="mt-2 text-xs leading-5 text-[#4a5b4e]">
                  Too many tools? Too much noise? Let&apos;s unpack what is
                  actually happening in your system.
                </p>
              </div>
              <MagneticButton
                as="a"
                className="mt-4 w-fit rounded-full bg-[#1a3323] px-4 py-2.5 text-[10px] font-medium text-white transition-colors hover:bg-[#2c4f37]"
                href="#understanding"
                threshold={40}
              >
                Unpack the Problem →
              </MagneticButton>
            </motion.article>

            <motion.article
              className="flex min-h-52 flex-col justify-between rounded-3xl border border-white/60 bg-white/40 p-5 shadow-[0_18px_50px_rgba(26,51,35,0.12)] backdrop-blur-md"
              transition={{ type: "spring", stiffness: 120, damping: 15 }}
              whileHover={{ y: -5 }}
            >
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#5a7052]">
                  02 // Conversation
                </p>
                <h2 className="mt-3 font-display text-xl font-medium tracking-[-0.03em] text-[#0f1c13]">
                  Start with Understanding
                </h2>
                <p className="mt-2 text-xs leading-5 text-[#4a5b4e]">
                  No sales pitches. Just a thoughtful discussion about your
                  architecture and goals.
                </p>
              </div>
              <a
                className="mt-4 w-fit rounded-full border border-[#c8d6c4] bg-white/80 px-4 py-2.5 text-[10px] font-semibold text-[#0f1c13] transition-colors hover:bg-white"
                href="#begin"
              >
                Schedule a Call →
              </a>
            </motion.article>
          </div>

          <div className="mt-5 flex max-w-[42rem] flex-wrap items-center gap-x-4 gap-y-2 rounded-3xl border border-white/70 bg-white/60 px-5 py-3 font-mono text-[9px] tracking-[0.04em] text-[#314238] shadow-sm backdrop-blur-md sm:rounded-full">
            <span>Trusted by thinkers and builders worldwide</span>
            <span aria-hidden="true" className="hidden text-[#5a7052]/45 sm:block">
              |
            </span>
            <span>Enterprise-grade. Human-first.</span>
            <span aria-hidden="true" className="hidden text-[#5a7052]/45 sm:block">
              |
            </span>
            <span>Built for depth. Designed for clarity.</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
