"use client";

import { useEffect, useState, type RefObject } from "react";

type ScrollStoryOptions = {
  /** Viewport ratio for container top when unlock begins. Lower = later. Default 0.85 */
  startAt?: number;
  /** Viewport ratio for container top when unlock finishes. Default 0.28 */
  endAt?: number;
  /** Extra travel in viewport-heights so short grids don't unlock all at once */
  stretchVH?: number;
  /** Linear step pacing (better for equal grids). Default ease-in */
  linear?: boolean;
};

/**
 * Scroll-driven story steps: as the container crosses the viewport,
 * steps unlock 0 → n-1. Returns the latest unlocked index (-1 before entry).
 * Returns -2 for prefers-reduced-motion (treat every step as fully active).
 */
export function useScrollStory(
  containerRef: RefObject<HTMLElement | null>,
  itemCount: number,
  options: ScrollStoryOptions = {},
) {
  const {
    startAt = 0.85,
    endAt = 0.28,
    stretchVH = 0,
    linear = false,
  } = options;
  const [active, setActive] = useState(-1);

  useEffect(() => {
    const root = containerRef.current;
    if (!root || itemCount === 0) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setActive(-2);
      return;
    }

    let raf = 0;
    let last = -1;

    const measure = () => {
      const rect = root.getBoundingClientRect();
      const viewH = window.innerHeight;
      const start = viewH * startAt;
      const end = viewH * endAt;

      // Not yet in play — keep dormant
      if (rect.top > start) {
        if (last !== -1) {
          last = -1;
          setActive(-1);
        }
        return;
      }

      // Past the section — keep fully unlocked
      if (rect.bottom < viewH * 0.12) {
        const full = itemCount - 1;
        if (last !== full) {
          last = full;
          setActive(full);
        }
        return;
      }

      const span = Math.max(start - end + viewH * stretchVH, viewH * 0.45);
      const t = Math.min(1, Math.max(0, (start - rect.top) / span));
      const paced = linear ? t : 1 - (1 - t) * (1 - t);
      const next = Math.min(
        itemCount - 1,
        Math.max(0, Math.floor(paced * itemCount)),
      );

      if (next !== last) {
        last = next;
        setActive(next);
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
  }, [containerRef, itemCount, startAt, endAt, stretchVH, linear]);

  return active;
}
