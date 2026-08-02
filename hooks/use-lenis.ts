"use client";

import { useEffect } from "react";

/** Lenis + GSAP only after the user scrolls — keeps them off TBT. */
export function useLenis() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let destroyed = false;
    let cleanup: (() => void) | undefined;
    let started = false;

    const start = async () => {
      if (started || destroyed) return;
      started = true;

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

    const onIntent = () => {
      detach();
      void start();
    };

    const detach = () => {
      window.removeEventListener("scroll", onIntent);
      window.removeEventListener("wheel", onIntent);
      window.removeEventListener("touchstart", onIntent);
      window.removeEventListener("keydown", onIntent);
    };

    window.addEventListener("scroll", onIntent, { passive: true, once: true });
    window.addEventListener("wheel", onIntent, { passive: true, once: true });
    window.addEventListener("touchstart", onIntent, {
      passive: true,
      once: true,
    });
    window.addEventListener("keydown", onIntent, { once: true });

    // Fallback so deep-linked anchors still get smooth scroll eventually
    const fallback = window.setTimeout(() => void start(), 8000);

    return () => {
      destroyed = true;
      detach();
      window.clearTimeout(fallback);
      cleanup?.();
    };
  }, []);
}
