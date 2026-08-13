import Link from "next/link";
import { ArrowRight } from "lucide-react";

function ClarityFlowVisual() {
  return (
    <div
      aria-hidden
      className="relative mx-auto aspect-[4/3] w-full max-w-md lg:max-w-none"
    >
      <div className="absolute inset-0 overflow-hidden rounded-2xl border border-white/10 bg-[#0a2218]">
        <svg
          className="absolute inset-0 size-full opacity-90"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
          viewBox="0 0 480 360"
        >
          <defs>
            <linearGradient id="about-flow-a" x1="0" x2="1" y1="0.2" y2="0.8">
              <stop offset="0%" stopColor="#B7E84A" stopOpacity="0" />
              <stop offset="45%" stopColor="#B7E84A" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#B7E84A" stopOpacity="0.05" />
            </linearGradient>
            <linearGradient id="about-flow-b" x1="0" x2="1" y1="0.8" y2="0.2">
              <stop offset="0%" stopColor="#cde0b8" stopOpacity="0" />
              <stop offset="50%" stopColor="#cde0b8" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#B7E84A" stopOpacity="0.1" />
            </linearGradient>
            <radialGradient cx="78%" cy="42%" id="about-flow-glow" r="35%">
              <stop offset="0%" stopColor="#B7E84A" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#B7E84A" stopOpacity="0" />
            </radialGradient>
          </defs>

          <rect fill="url(#about-flow-glow)" height="360" width="480" />

          <g className="about-flow-lines" strokeLinecap="round">
            <path
              d="M20 280 C120 250, 180 180, 260 160 S380 120, 440 140"
              stroke="url(#about-flow-a)"
              strokeWidth="1.25"
            />
            <path
              d="M10 220 C100 210, 160 140, 250 130 S370 90, 460 100"
              stroke="url(#about-flow-b)"
              strokeWidth="1"
            />
            <path
              d="M30 300 C140 270, 200 210, 290 190 S400 150, 470 170"
              stroke="url(#about-flow-a)"
              strokeWidth="0.9"
            />
            <path
              d="M40 160 C130 170, 190 120, 270 110 S390 70, 450 85"
              stroke="url(#about-flow-b)"
              strokeWidth="1.1"
            />
            <path
              d="M0 250 C90 230, 170 200, 240 175 S360 130, 480 155"
              stroke="#B7E84A"
              strokeOpacity="0.25"
              strokeWidth="0.75"
            />
          </g>

          {[
            [90, 240],
            [160, 175],
            [230, 145],
            [300, 125],
            [360, 110],
            [410, 130],
          ].map(([x, y], i) => (
            <circle
              cx={x}
              cy={y}
              fill="#B7E84A"
              key={`${x}-${y}`}
              opacity={0.35 + i * 0.08}
              r={2.2}
            />
          ))}

          <rect
            fill="#0f2a1c"
            fillOpacity="0.55"
            height="56"
            rx="10"
            stroke="#B7E84A"
            strokeOpacity="0.2"
            width="88"
            x="300"
            y="168"
          />
          <rect
            fill="#0f2a1c"
            fillOpacity="0.4"
            height="44"
            rx="10"
            stroke="#cde0b8"
            strokeOpacity="0.18"
            width="72"
            x="250"
            y="210"
          />
          <rect
            fill="#0f2a1c"
            fillOpacity="0.35"
            height="40"
            rx="10"
            stroke="#cde0b8"
            strokeOpacity="0.12"
            width="64"
            x="340"
            y="220"
          />
        </svg>
      </div>
    </div>
  );
}

export function AboutCta() {
  return (
    <section
      aria-labelledby="about-cta-heading"
      className="border-t border-[#d8e0d5] bg-[#f2f4f0] px-6 py-12 md:px-10 md:py-16"
      id="begin"
    >
      <div className="mx-auto max-w-[95rem]">
        <div className="overflow-hidden rounded-[2rem] bg-[#071B12]">
          <div className="relative grid items-center gap-10 px-8 py-12 md:px-12 md:py-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-12 lg:px-14 lg:py-20">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_30%,rgba(183,232,74,0.12),transparent_45%)]"
            />

            <div className="relative">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#B7E84A]">
                04 // Begin
              </p>
              <h2
                className="mt-5 max-w-xl font-display text-[clamp(1.75rem,3.5vw,2.75rem)] font-medium leading-[1.05] tracking-[-0.04em] text-white"
                id="about-cta-heading"
              >
                Ready to elevate how your organization understands?
              </h2>
              <p className="mt-4 max-w-md text-sm leading-7 text-[#cde0b8]/75">
                Start with what feels complex. We’ll listen first—then talk
                about the right product or system.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  className="group inline-flex items-center gap-2 rounded-full bg-[#B7E84A] px-6 py-3.5 text-sm font-medium text-[#071B12] transition-colors hover:bg-[#c5ef63]"
                  href="/products/nabhi-persona"
                >
                  Explore products
                  <ArrowRight
                    aria-hidden
                    className="size-4 transition-transform group-hover:translate-x-0.5"
                  />
                </Link>
                <Link
                  className="group inline-flex items-center gap-2 rounded-full border border-white/25 bg-transparent px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
                  href="/contact"
                >
                  Book a call
                  <ArrowRight
                    aria-hidden
                    className="size-4 transition-transform group-hover:translate-x-0.5"
                  />
                </Link>
              </div>
            </div>

            <ClarityFlowVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
