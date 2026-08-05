import type { ReactNode } from "react";

type PipelineStep = {
  title: string;
  copy: string;
  icon?: ReactNode;
};

type PipelineFlowProps = {
  steps: readonly PipelineStep[];
  /** Visual theme for connecting line + nodes */
  tone?: "light" | "dark";
  className?: string;
};

/**
 * Horizontal stage pipeline with a continuous left→right flow animation.
 * The connector terminates at the last node (no overflow past the final stage).
 */
export function PipelineFlow({
  steps,
  tone = "light",
  className = "",
}: PipelineFlowProps) {
  const track = tone === "dark" ? "bg-[#cde0b8]/15" : "bg-[#c8d6c4]";
  const nodeIdle =
    tone === "dark"
      ? "border-[#cde0b8]/25 bg-[#0d2d1e] text-[#cde0b8]"
      : "border-[#aebcac] bg-[#f7f6f1] text-[#31543a]";
  const nodeActive =
    tone === "dark"
      ? "border-[#cde0b8] bg-[#cde0b8] text-[#123b28] shadow-[0_0_12px_4px_rgba(205,224,184,0.25)]"
      : "border-[#78966a] bg-[#78966a] text-white shadow-[0_0_12px_4px_rgba(120,150,106,0.25)]";
  const titleColor = tone === "dark" ? "text-[#cde0b8]" : "text-[#5a7052]";
  const copyColor = tone === "dark" ? "text-white/45" : "text-[#4a5b4e]";
  const last = steps.length - 1;
  const colPct = 100 / steps.length;

  return (
    <div className={`relative ${className}`}>
      {/* Line from first node center to last node center only */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-5 hidden h-px overflow-hidden sm:block"
        style={{
          left: `calc(${colPct / 2}% - 0px)`,
          width: `calc(${colPct * last}%)`,
        }}
      >
        <span className={`absolute inset-0 ${track}`} />
        <span
          className={`absolute inset-y-0 left-0 h-full w-full ${
            tone === "dark" ? "pipeline-flow-dark" : "pipeline-flow"
          }`}
        />
      </div>

      <div
        className="relative grid gap-6"
        style={{
          gridTemplateColumns: `repeat(${steps.length}, minmax(0, 1fr))`,
        }}
      >
        {steps.map((step, index) => {
          const isLast = index === last;
          return (
            <div className="relative z-10 flex flex-col items-start" key={step.title}>
              {step.icon ? (
                <span
                  className={`grid size-10 place-items-center rounded-full border ${
                    isLast ? nodeActive : nodeIdle
                  }`}
                >
                  {step.icon}
                </span>
              ) : (
                <span
                  className={`mt-3 block size-4 rounded-full border ${
                    isLast ? nodeActive : nodeIdle
                  }`}
                />
              )}
              <p
                className={`mt-4 font-mono text-[8px] uppercase tracking-[0.12em] ${titleColor}`}
              >
                {step.title}
              </p>
              <p
                className={`mt-2 max-w-[8.5rem] text-[10px] leading-4 ${copyColor}`}
              >
                {step.copy}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
