import {
  Box,
  Lightbulb,
  MessageSquare,
  Target,
  type LucideIcon,
} from "lucide-react";

const ICONS = {
  MessageSquare,
  Lightbulb,
  Box,
  Target,
} as const;

export type TimelineIconName = keyof typeof ICONS;

export type TimelineStep = {
  number: string;
  title: string;
  period: string;
  description: string;
  icon: TimelineIconName;
};

type HorizontalTimelineProps = {
  steps: readonly TimelineStep[];
};

function StepCard({
  step,
  isLast,
}: {
  step: TimelineStep;
  isLast: boolean;
}) {
  const Icon: LucideIcon = ICONS[step.icon];

  return (
    <article className="relative z-10">
      <span
        className={`grid size-10 place-items-center rounded-full ${
          isLast
            ? "bg-[#78966a] text-white shadow-[0_0_12px_4px_rgba(120,150,106,0.25)]"
            : "bg-[#edf3e8] text-[#5a7052]"
        }`}
      >
        <Icon className="size-4" strokeWidth={1.25} />
      </span>

      <span
        aria-hidden
        className={`absolute left-[14px] top-[42px] size-3 rounded-full border-4 border-[#edf3e8] ${
          isLast ? "bg-[#31543a]" : "bg-[#78966a]"
        }`}
      />

      <div className="mt-8">
        <p className="font-mono text-[7px] text-[#5a7052]">{step.number}</p>
        <h3 className="mt-2 text-xs font-medium text-[#31543a]">{step.title}</h3>
        <p className="mt-1 text-[9px] text-[#4a5b4e]">{step.period}</p>
        <p className="mt-3 text-[9px] leading-4 text-[#4a5b4e]">
          {step.description}
        </p>
      </div>
    </article>
  );
}

/**
 * Horizontal milestone timeline with pipeline flow between nodes.
 * Connector runs from first node center to last node center only.
 */
export function HorizontalTimeline({ steps }: HorizontalTimelineProps) {
  const last = steps.length - 1;
  const colPct = 100 / steps.length;

  return (
    <div className="relative">
      {/* Desktop pipeline track — terminates at last node */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-12 hidden h-px overflow-hidden sm:block"
        style={{
          left: `calc(${colPct / 2}%)`,
          width: `calc(${colPct * last}%)`,
        }}
      >
        <span className="absolute inset-0 bg-[#c8d6c4]" />
        <span className="pipeline-flow absolute inset-y-0 left-0 h-full w-full" />
      </div>

      {/* Mobile: horizontal snap scroll */}
      <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-3 [-ms-overflow-style:none] [scrollbar-width:none] sm:hidden [&::-webkit-scrollbar]:hidden">
        {steps.map((step, index) => (
          <div
            className="w-[78%] shrink-0 snap-center p-4"
            key={`m-${step.title}`}
          >
            <StepCard isLast={index === last} step={step} />
          </div>
        ))}
      </div>

      {/* Desktop: equal columns */}
      <div
        className="relative hidden gap-7 sm:grid"
        style={{
          gridTemplateColumns: `repeat(${steps.length}, minmax(0, 1fr))`,
        }}
      >
        {steps.map((step, index) => (
          <StepCard isLast={index === last} key={step.title} step={step} />
        ))}
      </div>
    </div>
  );
}
