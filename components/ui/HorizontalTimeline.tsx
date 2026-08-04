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

export function HorizontalTimeline({ steps }: HorizontalTimelineProps) {
  return (
    <div className="relative">
      <span
        aria-hidden
        className="pipeline-rail pointer-events-none absolute left-6 right-6 top-[2.15rem] hidden h-0.5 rounded-full sm:block"
      />

      <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-3 sm:overflow-visible sm:pb-0 [&::-webkit-scrollbar]:hidden">
        {steps.map((step, index) => {
          const Icon: LucideIcon = ICONS[step.icon];

          return (
            <article
              className="ui-card relative z-10 w-[78%] shrink-0 snap-center rounded-2xl border border-[#d8e0d5] bg-[#f7f6f1]/80 p-4 sm:w-auto sm:flex-1 sm:shrink"
              key={step.title}
            >
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-full border border-[#d8e0d5] bg-white text-[#5a7052] shadow-[0_0_0_4px_#f7f6f1]">
                  <Icon className="size-4" strokeWidth={1.25} />
                </span>
                {index < steps.length - 1 ? (
                  <span
                    aria-hidden
                    className="hidden h-px flex-1 bg-[#c8d6c4] sm:block lg:hidden"
                  />
                ) : null}
              </div>

              <div className="mt-5">
                <p className="font-mono text-[9px] text-[#78966a]">
                  {step.number} · {step.period}
                </p>
                <h3 className="mt-2 font-display text-base font-medium tracking-[-0.02em] text-[#0f1c13]">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#4a5b4e]">
                  {step.description}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
