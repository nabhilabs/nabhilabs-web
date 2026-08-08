"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { ShinyText } from "@/components/ui/ShinyText";

const PAIRS = [
  ["complexity", "clarity"],
  ["noise", "understanding"],
  ["chaos", "coherence"],
  ["data", "insight"],
  ["friction", "flow"],
  ["fragments", "wholeness"],
] as const;

function FlipWord({
  word,
  tone = "from",
}: {
  word: string;
  tone?: "from" | "to";
}) {
  const isAccent = tone === "to";

  return (
    <span className="relative inline-flex align-baseline [perspective:640px]">
      <AnimatePresence initial={false} mode="popLayout">
        <motion.span
          animate={{ rotateX: 0, opacity: 1 }}
          className="inline-block origin-center will-change-transform"
          exit={{ rotateX: -90, opacity: 0 }}
          initial={{ rotateX: 90, opacity: 0 }}
          key={word}
          layout="size"
          style={{ transformStyle: "preserve-3d", backfaceVisibility: "hidden" }}
          transition={{
            rotateX: { type: "spring", stiffness: 280, damping: 26, mass: 0.7 },
            opacity: { duration: 0.2 },
            layout: { type: "spring", stiffness: 320, damping: 30 },
          }}
        >
          <ShinyText
            className={isAccent ? "font-semibold" : undefined}
            color={isAccent ? "#31543a" : "#1e293b"}
            delay={0.35}
            direction="left"
            shineColor={isAccent ? "#f7fbf4" : "#e8f2e0"}
            speed={2.4}
            spread={110}
            text={word}
          />
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

/**
 * "Where _____ becomes _____." — content-sized flip words with ShinyText.
 */
export function HeroRotatingTagline() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduce.matches) return;

    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % PAIRS.length);
    }, 2800);
    return () => window.clearInterval(id);
  }, []);

  const [from, to] = PAIRS[index];

  return (
    <h2 className="mt-5 max-w-4xl font-display text-[clamp(1.55rem,2.8vw,2.35rem)] font-medium leading-[1.35] tracking-[-0.03em] text-[#334155]">
      <span className="inline">Where </span>
      <FlipWord tone="from" word={from} />
      <span className="inline"> becomes </span>
      <FlipWord tone="to" word={to} />
      <span aria-hidden>.</span>
      <span className="sr-only">
        Where complexity becomes clarity, and related transformations.
      </span>
    </h2>
  );
}
