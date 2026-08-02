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
      <span className="pointer-events-none absolute left-5 right-5 top-12 hidden h-px bg-[#c8d6c4] sm:block" />

      <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-3 [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-7 sm:overflow-visible sm:pb-0 [&::-webkit-scrollbar]:hidden">
        {steps.map((step) => {
          const Icon: LucideIcon = ICONS[step.icon];

          return (
            <article
              className="relative z-10 w-[78%] shrink-0 snap-center rounded-2xl border border-transparent bg-transparent p-4 sm:w-auto sm:flex-1 sm:shrink"
              key={step.title}
            >
              <span className="grid size-10 place-items-center rounded-full bg-[#edf3e8] text-[#5a7052]">
                <Icon className="size-4" strokeWidth={1.25} />
              </span>

              <span
                aria-hidden
                className="absolute left-[14px] top-[42px] size-3 rounded-full border-4 border-[#edf3e8] bg-[#78966a]"
              />

              <div className="mt-8">
                <p className="font-mono text-[7px] text-[#5a7052]">
                  {step.number}
                </p>
                <h3 className="mt-2 text-xs font-medium text-[#31543a]">
                  {step.title}
                </h3>
                <p className="mt-1 text-[9px] text-[#4a5b4e]">{step.period}</p>
                <p className="mt-3 text-[9px] leading-4 text-[#4a5b4e]">
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
