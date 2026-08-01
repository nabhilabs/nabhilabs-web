import type { MouseEvent } from "react";

export function applyPointerTilt(
  event: MouseEvent<HTMLElement>,
  strength = 4,
) {
  if (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    return;
  }
  const el = event.currentTarget;
  const rect = el.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  const px = (x / rect.width) * 2 - 1;
  const py = (y / rect.height) * 2 - 1;
  el.style.setProperty("--tilt-x", `${(-py * strength).toFixed(2)}deg`);
  el.style.setProperty("--tilt-y", `${(px * strength).toFixed(2)}deg`);
  el.style.setProperty("--spot-x", `${x}px`);
  el.style.setProperty("--spot-y", `${y}px`);
}

export function clearPointerTilt(event: MouseEvent<HTMLElement>) {
  const el = event.currentTarget;
  el.style.setProperty("--tilt-x", "0deg");
  el.style.setProperty("--tilt-y", "0deg");
}
