import type { ReactNode } from "react";

type BullseyeOrbProps = {
  className?: string;
  /** "light" for sage-on-cream pages, "dark" for dark section pages */
  tone?: "light" | "dark";
  /** Center content — letter or empty for solid orb */
  center?: ReactNode;
  sizeClassName?: string;
};

/**
 * Concentric rings with alternating rotation + expanding pulse core.
 * Core stays visually centered; rings rotate independently.
 */
export function BullseyeOrb({
  className = "",
  tone = "light",
  center,
  sizeClassName = "aspect-square w-full max-w-52",
}: BullseyeOrbProps) {
  const ring =
    tone === "dark" ? "border-[#cde0b8]/12" : "border-[#5a7052]/15";
  const ringMid =
    tone === "dark" ? "border-[#cde0b8]/18" : "border-[#5a7052]/18";
  const core =
    tone === "dark"
      ? "bg-[#cde0b8] text-[#123b28] shadow-[0_0_28px_12px_rgba(205,224,184,0.25)]"
      : "bg-[#78966a] text-white shadow-[0_0_28px_12px_rgba(120,150,106,0.26)]";
  const pulse =
    tone === "dark" ? "bg-[#cde0b8]/35" : "bg-[#78966a]/35";
  const dot = tone === "dark" ? "bg-[#cde0b8]/80" : "bg-[#78966a]";

  return (
    <div className={`relative mx-auto ${sizeClassName} ${className}`}>
      <span
        aria-hidden
        className={`orbit-spin-cw absolute inset-0 rounded-full border ${ring}`}
      />
      <span
        aria-hidden
        className={`orbit-spin-ccw absolute inset-[16%] rounded-full border ${ring}`}
      />
      <span
        aria-hidden
        className={`orbit-spin-cw-fast absolute inset-[32%] rounded-full border ${ringMid}`}
      />
      <span
        aria-hidden
        className={`bullseye-pulse absolute inset-[38%] rounded-full ${pulse}`}
      />
      <span
        className={`absolute inset-[43%] z-10 grid place-items-center rounded-full font-display text-xl font-semibold ${core}`}
      >
        {center ?? null}
      </span>
      <span
        aria-hidden
        className={`absolute left-[10%] top-[29%] size-1 rounded-full ${dot}`}
      />
      <span
        aria-hidden
        className={`absolute bottom-[8%] right-[28%] size-1.5 rounded-full ${dot}`}
      />
    </div>
  );
}
