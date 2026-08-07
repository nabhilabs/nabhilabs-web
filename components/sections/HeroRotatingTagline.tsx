"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const PAIRS = [
  { from: "complexity", to: "clarity" },
  { from: "noise", to: "signal" },
  { from: "chaos", to: "order" },
  { from: "confusion", to: "insight" },
  { from: "fragmentation", to: "connection" },
  { from: "data", to: "understanding" },
] as const;

function SpinWord({ text }: { text: string }) {
  return (
    <motion.span
      animate={{ y: 0 }}
      className="inline-flex"
      exit={{ y: "-120%" }}
      initial={{ y: "100%" }}
      key={text}
      transition={{ type: "spring", damping: 30, stiffness: 400 }}
    >
      {Array.from(text).map((char, i) => (
        <motion.span
          animate={{ y: 0, opacity: 1 }}
          className="inline-block"
          exit={{ y: "-120%", opacity: 0 }}
          initial={{ y: "100%", opacity: 0 }}
          key={`${text}-${i}-${char}`}
          transition={{
            type: "spring",
            damping: 30,
            stiffness: 400,
            delay: (text.length - 1 - i) * 0.025,
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
}

/** Synced “Where X becomes Y” rotator for the hero. */
export function HeroRotatingTagline() {
  const [index, setIndex] = useState(0);
  const pair = PAIRS[index] ?? PAIRS[0];

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((current) => (current + 1) % PAIRS.length);
    }, 2800);
    return () => clearInterval(id);
  }, []);

  return (
    <h2 className="mt-6 flex max-w-4xl flex-wrap items-baseline gap-x-2.5 gap-y-2 font-display text-[clamp(1.55rem,3.4vw,2.75rem)] font-medium leading-[1.15] tracking-[-0.035em] text-[#0f1c13]">
      <span>Where</span>
      <span
        aria-live="polite"
        className="inline-flex overflow-hidden rounded-[0.18em] bg-[#cde0b8] px-2 py-0.5 text-[#0f1c13] sm:px-2.5"
      >
        <span className="sr-only">{pair.from}</span>
        <AnimatePresence mode="wait">
          <SpinWord text={pair.from} />
        </AnimatePresence>
      </span>
      <span>becomes</span>
      <span className="inline-flex overflow-hidden rounded-[0.18em] bg-white/75 px-2 py-0.5 text-[#31543a] sm:px-2.5">
        <span className="sr-only">{pair.to}</span>
        <AnimatePresence mode="wait">
          <SpinWord text={pair.to} />
        </AnimatePresence>
      </span>
      <span>.</span>
    </h2>
  );
}
