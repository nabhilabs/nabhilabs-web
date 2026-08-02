"use client";

import { useEffect } from "react";

export function useLenis() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let destroyed = false;
    let cleanup: (() => void) | undefined;
    let idleId: number | undefined;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    const start = async () => {
      const [{ default: Lenis }, { default: gsap }, { ScrollTrigger }] =
        await Promise.all([
          import("lenis"),
          import("gsap"),
          import("gsap/ScrollTrigger"),
        ]);

      if (destroyed) return;

      gsap.registerPlugin(ScrollTrigger);

      const lenis = new Lenis({
        anchors: true,
        duration: 1.15,
        smoothWheel: true,
        touchMultiplier: 1.2,
      });
      const updateScrollTrigger = () => ScrollTrigger.update();
      const updateLenis = (time: number) => lenis.raf(time * 1000);

      lenis.on("scroll", updateScrollTrigger);
      gsap.ticker.add(updateLenis);
      gsap.ticker.lagSmoothing(0);

      cleanup = () => {
        lenis.off("scroll", updateScrollTrigger);
        gsap.ticker.remove(updateLenis);
        lenis.destroy();
      };
    };

    if ("requestIdleCallback" in window) {
      idleId = window.requestIdleCallback(() => void start(), { timeout: 2000 });
    } else {
      timeoutId = setTimeout(() => void start(), 1200);
    }

    return () => {
      destroyed = true;
      if (idleId !== undefined && "cancelIdleCallback" in window) {
        window.cancelIdleCallback(idleId);
      }
      if (timeoutId !== undefined) clearTimeout(timeoutId);
      cleanup?.();
    };
  }, []);
}
