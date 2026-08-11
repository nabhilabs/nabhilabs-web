"use client";

import {
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import { Minus, Plus } from "lucide-react";

export type FaqThreadItem = {
  question: string;
  answer: string;
};

type FaqThreadProps = {
  items: readonly FaqThreadItem[];
  microLabels?: readonly string[];
  slant?: boolean;
};

/** Exact circle centers from public/assets/Frame 65.svg */
const THREAD_NODES = [
  { x: 61.5, y: 42.5 },
  { x: 230.5, y: 184.5 },
  { x: 131.5, y: 345.5 },
  { x: 265.5, y: 576.5 },
  { x: 130.5, y: 722.5 },
  { x: 323.5, y: 871.5 },
] as const;

/** Exact path from public/assets/Frame 65.svg */
const THREAD_PATH =
  "M60.4974 44.5C31.1303 73.0438 38.9945 93 55.9973 109.5C73.0002 126 162 115.5 200.997 136C239.994 156.5 230.997 186.5 230.997 186.5C226.027 208.147 217.221 220.464 158.497 244C86.748 260.761 69.3294 271.081 60.4974 290.5C55.2976 311.863 76.9155 323.901 132.997 345.5C169.567 364.773 176.204 375.44 181.497 394.5C187.49 424.93 170.647 445.157 153.497 489C147.403 520.121 159.625 526.557 181.497 538C224.992 552.358 243.997 560.53 265.497 575C287.736 604.229 289.342 619.106 244.497 639C244.497 639 191.994 653.5 99.4973 665C7.00019 676.5 65.5002 717 99.4973 719C133.494 721 132.997 724.5 132.997 724.5C168.689 730.213 181.494 724.5 214.997 752.5C248.5 780.5 214.997 809.5 214.997 837.5C214.997 865.5 272 896.5 320.497 871.5";

const NODE_PROGRESS = [0, 0.16, 0.3, 0.48, 0.64, 0.82] as const;

/** Gap from node center → question (≈26px after scale(0.5)) */
const NODE_TEXT_GAP = 52;

const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";
const VB_W = 393;
const VB_H = 936;

export function FaqThread({ items, microLabels = [] }: FaqThreadProps) {
  const pathRef = useRef<SVGPathElement>(null);
  const [open, setOpen] = useState<number | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);
  const [drawn, setDrawn] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [pathLength, setPathLength] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const reactId = useId();

  const count = Math.min(items.length, THREAD_NODES.length);
  const reading = open !== null;

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const onChange = () => setReduceMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;
    setPathLength(path.getTotalLength());
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setDrawn(true);
      },
      { threshold: 0.18 },
    );
    io.observe(root);
    return () => io.disconnect();
  }, []);

  const hoverActive = reading ? null : hovered;
  const activeProgress =
    hoverActive !== null
      ? NODE_PROGRESS[Math.min(hoverActive, NODE_PROGRESS.length - 1)]
      : 0;

  return (
    <div className="relative w-full overflow-visible" ref={rootRef}>
      {/*
        Layout slot ≈ half of Frame 65 aspect (after scale 0.5).
        Inner box uses the exact 393×936 ratio so % positions = SVG coords.
      */}
      <div
        className="relative w-full overflow-visible"
        style={{ paddingBottom: `${((VB_H / VB_W) * 100) / 2}%` }}
      >
        <div
          className="absolute left-1/2 top-0 w-full"
          style={{
            aspectRatio: `${VB_W} / ${VB_H}`,
            transform: "translate(-68%, 3%) scale(0.5)",
            transformOrigin: "top center",
          }}
        >
        <svg
          aria-hidden
          className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
          fill="none"
          preserveAspectRatio="xMinYMin meet"
          viewBox={`0 0 ${VB_W} ${VB_H}`}
          style={{
            opacity: reading ? 0 : 1,
            transition: `opacity 0.55s ${EASE}`,
          }}
        >
          <path
            d={THREAD_PATH}
            ref={pathRef}
            stroke="#405233"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            style={
              reduceMotion
                ? { transition: `opacity 0.55s ${EASE}` }
                : {
                    strokeDasharray: pathLength || 1,
                    strokeDashoffset: drawn ? 0 : pathLength || 1,
                    transition: `stroke-dashoffset 2s ${EASE}, opacity 0.55s ${EASE}`,
                  }
            }
          />
          {hoverActive !== null && pathLength > 0 ? (
            <path
              d={THREAD_PATH}
              stroke="#31543a"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeOpacity={0.95}
              strokeWidth={2}
              style={{
                strokeDasharray: pathLength,
                strokeDashoffset: pathLength * (1 - activeProgress),
                transition: `stroke-dashoffset 0.45s ${EASE}`,
              }}
            />
          ) : null}
          {THREAD_NODES.slice(0, count).map((node, index) => (
            <circle
              cx={node.x}
              cy={node.y}
              fill={
                hoverActive === index || open === index
                  ? "#405233"
                  : "transparent"
              }
              key={`svg-node-${index}`}
              r={6.5}
              stroke="#405233"
              strokeWidth={hoverActive === index || open === index ? 0 : 1}
              style={{
                opacity: reading
                  ? open === index
                    ? 0
                    : 0
                  : drawn || reduceMotion
                    ? 1
                    : 0,
                transition: `opacity 0.55s ${EASE}, fill 0.35s ${EASE}`,
                transitionDelay:
                  !reading && drawn && !reduceMotion
                    ? `${120 + index * 150}ms`
                    : "0ms",
              }}
            />
          ))}
        </svg>

        {items.slice(0, count).map((item, index) => {
          const node = THREAD_NODES[index];
          const isOpen = open === index;
          const isHovered = hoverActive === index;
          const isActive = isOpen || isHovered;
          const number = String(index + 1).padStart(2, "0");
          const label = microLabels[index];
          const panelId = `${reactId}-answer-${index}`;
          const dimmed = reading && !isOpen;
          const itemDelay = dimmed
            ? `${index * 35}ms`
            : reading && isOpen
              ? "120ms"
              : `${index * 30}ms`;
          const leftPct = (node.x / VB_W) * 100;
          const topPct = (node.y / VB_H) * 100;

          return (
            <div
              className="absolute z-10"
              key={item.question}
              onMouseEnter={() => !reading && setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              style={{
                left: `${leftPct}%`,
                top: `${topPct}%`,
                width: "max-content",
                maxWidth: "none",
                opacity: dimmed ? 0 : 1,
                transform: dimmed ? "translateY(6px)" : "translateY(0)",
                pointerEvents: dimmed ? "none" : "auto",
                zIndex: isOpen ? 30 : 10,
                transitionProperty: "opacity, transform",
                transitionDuration: "0.55s, 0.55s",
                transitionTimingFunction: `${EASE}, ${EASE}`,
                transitionDelay: `${itemDelay}, ${itemDelay}`,
              }}
            >
              {/* Hit target centered on the Frame 65 node */}
              <span
                aria-hidden
                className="absolute left-0 top-0 size-[13px] rounded-full"
                style={{
                  backgroundColor: isActive ? "#405233" : "transparent",
                  border: isActive
                    ? "none"
                    : "1px solid rgba(64, 82, 51, 0.55)",
                  boxShadow: isActive
                    ? "0 0 0 4px rgba(64, 82, 51, 0.14)"
                    : "none",
                  transform: `translate(-50%, -50%) scale(${isActive ? 1.25 : 1})`,
                  opacity: reading ? (isOpen ? 1 : 0) : 0,
                  transitionProperty:
                    "transform, background-color, opacity, box-shadow",
                  transitionDuration: "0.45s, 0.35s, 0.55s, 0.45s",
                  transitionTimingFunction: `${EASE}, ${EASE}, ${EASE}, ${EASE}`,
                }}
              />

              {/* In-flow stack so open answers get real height (absolute + 1fr collapses) */}
              <div
                className="relative"
                style={{
                  paddingLeft: NODE_TEXT_GAP,
                  // Optical align question midline to the node
                  transform: "translateY(-1.35rem)",
                }}
              >
                <button
                  aria-controls={panelId}
                  aria-expanded={isOpen}
                  className="group flex w-max max-w-none items-start gap-3 text-left outline-none focus-visible:ring-2 focus-visible:ring-[#78966a]/45 focus-visible:ring-offset-4 focus-visible:ring-offset-[#f7f6f1]"
                  onClick={() =>
                    setOpen((current) => (current === index ? null : index))
                  }
                  type="button"
                >
                  <span
                    className="mt-0.5 w-10 shrink-0 font-mono text-[22px] font-medium tabular-nums tracking-[0.12em] md:text-[24px]"
                    style={{
                      color: isActive ? "#0f1c13" : "#5a7052",
                      transition: `color 0.35s ${EASE}`,
                    }}
                  >
                    {number}
                  </span>

                  <span className="shrink-0">
                    <span
                      className="block whitespace-nowrap font-serif text-[2.35rem] font-normal leading-[1.15] tracking-[-0.01em] sm:text-[2.55rem] md:text-[2.85rem]"
                      style={{
                        color: isActive ? "#0f1c13" : "rgba(26, 42, 31, 0.92)",
                        transition: `color 0.35s ${EASE}`,
                      }}
                    >
                      {item.question}
                    </span>
                    {label ? (
                      <span
                        className="mt-1.5 block font-serif text-lg italic tracking-[0.01em] text-[#78966a]"
                        style={{
                          opacity: isHovered || isOpen ? 1 : 0,
                          transition: `opacity 0.35s ${EASE}`,
                        }}
                      >
                        {label}
                      </span>
                    ) : null}
                  </span>

                  <span
                    className="mt-2 grid size-8 shrink-0 place-items-center text-[#5a7052]"
                    style={{
                      opacity: isHovered || isOpen ? 1 : 0.7,
                      transition: `opacity 0.35s ${EASE}`,
                    }}
                  >
                    {isOpen ? (
                      <Minus
                        aria-hidden
                        className="size-5"
                        strokeWidth={1.75}
                      />
                    ) : (
                      <Plus
                        aria-hidden
                        className="size-5"
                        strokeWidth={1.75}
                      />
                    )}
                  </span>
                </button>

                <div
                  className="grid"
                  id={panelId}
                  style={{
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                    opacity: isOpen ? 1 : 0,
                    transition: `grid-template-rows 0.55s ${EASE}, opacity 0.45s ${EASE}`,
                  }}
                >
                  <div className="min-h-0 overflow-hidden">
                    <p
                      className="max-w-2xl pt-3 pl-10 font-sans text-[1.65rem] font-normal leading-[1.65] tracking-[0.01em] text-[#4a5b4e] md:text-[1.75rem] md:leading-[1.65]"
                      style={{
                        transform: isOpen ? "translateY(0)" : "translateY(8px)",
                        transition: `transform 0.55s ${EASE}`,
                      }}
                    >
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        </div>
      </div>
    </div>
  );
}
