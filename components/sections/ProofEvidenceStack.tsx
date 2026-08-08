"use client";

import {
  BarChart3,
  Box,
  Clock3,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

type EvidenceRow = {
  index: string;
  label: string;
  copy: string;
  icon: LucideIcon;
  kind: "count" | "links";
  target?: number;
  suffix?: string;
  rest?: string;
};

const evidenceRows: readonly EvidenceRow[] = [
  {
    index: "01",
    label: "Built for context",
    copy: "Purpose-built for different organizational contexts.",
    icon: Box,
    kind: "count",
    target: 50,
    suffix: "+",
    rest: " tailored models",
  },
  {
    index: "02",
    label: "Measured in practice",
    copy: "Measured against the work, not promised in the pitch.",
    icon: BarChart3,
    kind: "count",
    target: 25,
    suffix: "%",
    rest: " average operational clarity",
  },
  {
    index: "03",
    label: "Grounded in standards",
    copy: "Evidence-led practice, not AI theatre.",
    icon: ShieldCheck,
    kind: "links",
  },
  {
    index: "04",
    label: "Response window",
    copy: "Fast enough to move. Thoughtful enough to matter.",
    icon: Clock3,
    kind: "count",
    target: 24,
    suffix: "h",
    rest: " response window",
  },
];

function useReplayCounter(
  target: number,
  enabled: boolean,
  durationMs = 1200,
  replayMs = 5000,
) {
  const [value, setValue] = useState(0);
  const frameRef = useRef<number | null>(null);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (!enabled) {
      setValue(target);
      return;
    }

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setValue(target);
      return;
    }

    const run = () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }
      const start = performance.now();
      setValue(0);

      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / durationMs);
        const eased = 1 - (1 - t) ** 3;
        setValue(Math.round(target * eased));
        if (t < 1) {
          frameRef.current = requestAnimationFrame(tick);
        } else {
          setValue(target);
        }
      };

      frameRef.current = requestAnimationFrame(tick);
    };

    run();
    intervalRef.current = window.setInterval(run, replayMs);

    return () => {
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
      if (intervalRef.current !== null) clearInterval(intervalRef.current);
    };
  }, [target, enabled, durationMs, replayMs]);

  return value;
}

function CountMetric({
  target,
  suffix,
  rest,
  active,
}: {
  target: number;
  suffix: string;
  rest: string;
  active: boolean;
}) {
  const value = useReplayCounter(target, active);
  return (
    <>
      <span className="tabular-nums">
        {value}
        {suffix}
      </span>
      {rest}
    </>
  );
}

export function ProofEvidenceStack() {
  const rootRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setActive(true);
      },
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <aside
      ref={rootRef}
      className="min-w-0 lg:border-l lg:border-[#d8e0d5] lg:pl-8 xl:pl-10"
    >
      <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#5a7052]">
        Why trust Nabhi Labs?
      </p>
      <span className="mt-3 block h-px w-10 bg-[#78966a]" />
      <h3 className="mt-5 font-display text-[1.25rem] font-medium tracking-[-0.03em] text-[#0f1c13] md:text-[1.35rem]">
        We make the evidence visible.
      </h3>

      <ol className="mt-7">
        {evidenceRows.map((row) => {
          const Icon = row.icon;
          return (
            <li
              key={row.index}
              className="grid grid-cols-[2.75rem_1fr] gap-x-3.5 border-t border-[#d8e0d5]/90 py-5 first:border-t-0 first:pt-0 md:gap-x-4 md:py-5"
            >
              <span className="grid size-11 place-items-center rounded-xl border border-[#d8e0d5] bg-white/45 text-[#78966a]">
                <Icon className="size-5" strokeWidth={1.25} />
              </span>
              <div className="min-w-0">
                <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-[#5a7052]">
                  <span className="text-[#78966a]">{row.index}</span>
                  {"  "}
                  {row.label}
                </p>
                <p className="mt-1.5 font-display text-[0.98rem] font-medium tracking-[-0.025em] text-[#0f1c13] md:text-[1.05rem]">
                  {row.kind === "links" ? (
                    <>
                      <a
                        className="underline decoration-[#c8d6c4] underline-offset-[3px] transition-colors hover:decoration-[#78966a]"
                        href="https://www.nist.gov/itl/ai-risk-management-framework"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        NIST AI RMF
                      </a>
                      {" · "}
                      <a
                        className="underline decoration-[#c8d6c4] underline-offset-[3px] transition-colors hover:decoration-[#78966a]"
                        href="https://oecd.ai/en/ai-principles"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        OECD AI Principles
                      </a>
                    </>
                  ) : (
                    <CountMetric
                      active={active}
                      rest={row.rest ?? ""}
                      suffix={row.suffix ?? ""}
                      target={row.target ?? 0}
                    />
                  )}
                </p>
                <p className="mt-1.5 text-[12px] leading-5 text-[#4a5b4e] md:text-[13px] md:leading-6">
                  {row.copy}
                </p>
              </div>
            </li>
          );
        })}
      </ol>
    </aside>
  );
}
