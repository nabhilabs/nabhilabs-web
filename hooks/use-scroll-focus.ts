"use client";

import { useEffect, useState, type RefObject } from "react";

type ScrollFocusOptions = {
  /** `nearest` = closest item to viewport center; `progress` = map section scroll to index */
  mode?: "nearest" | "progress";
};

/**
 * Returns the focused child index.
 * -1 when prefers-reduced-motion (caller should treat all as active).
 */
export function useScrollFocus(
  containerRef: RefObject<HTMLElement | null>,
  itemCount: number,
  options: ScrollFocusOptions = {},
) {
  const { mode = "nearest" } = options;
  const [active, setActive] = useState(0);

  useEffect(() => {
    const root = containerRef.current;
    if (!root || itemCount === 0) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setActive(-1);
      return;
    }

    const items = Array.from(root.children) as HTMLElement[];
    if (items.length === 0) return;

    let raf = 0;
    let locked = -1;

    const measure = () => {
      if (mode === "progress") {
        const rect = root.getBoundingClientRect();
        const viewH = window.innerHeight;
        // Advance as the block crosses the middle third of the viewport
        const start = viewH * 0.72;
        const end = viewH * 0.28;
        const span = Math.max(rect.height + (start - end), 1);
        const t = Math.min(1, Math.max(0, (start - rect.top) / span));
        const raw = t * itemCount;
        const candidate = Math.min(
          itemCount - 1,
          Math.max(0, Math.floor(raw)),
        );

        let next = candidate;
        if (locked >= 0) {
          if (candidate > locked && raw >= locked + 0.7) next = candidate;
          else if (candidate < locked && raw < locked + 0.3) next = candidate;
          else next = locked;
        }

        if (next !== locked) {
          locked = next;
          setActive(next);
        }
        return;
      }

      const focusX = window.innerWidth * 0.5;
      const focusY = window.innerHeight * 0.5;
      let best = 0;
      let bestDist = Infinity;

      for (let i = 0; i < items.length; i += 1) {
        const rect = items[i].getBoundingClientRect();
        if (rect.bottom < 0 || rect.top > window.innerHeight) continue;
        const midX = rect.left + rect.width * 0.5;
        const midY = rect.top + rect.height * 0.5;
        const dist = Math.hypot(midX - focusX, midY - focusY);
        if (dist < bestDist) {
          bestDist = dist;
          best = i;
        }
      }

      // Hysteresis: only switch when the new winner is clearly closer
      if (locked < 0) {
        locked = best;
        setActive(best);
        return;
      }

      if (best === locked) return;

      const lockedRect = items[locked]?.getBoundingClientRect();
      if (!lockedRect) {
        locked = best;
        setActive(best);
        return;
      }

      const lockedDist = Math.hypot(
        lockedRect.left + lockedRect.width * 0.5 - focusX,
        lockedRect.top + lockedRect.height * 0.5 - focusY,
      );

      if (bestDist < lockedDist - 48) {
        locked = best;
        setActive(best);
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [containerRef, itemCount, mode]);

  return active;
}
