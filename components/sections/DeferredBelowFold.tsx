"use client";

import { useEffect, useState, type ComponentType } from "react";

/**
 * Below-fold JS stays off the network until the user scrolls or 5s pass,
 * so LCP can finish without competing chunk downloads.
 */
export function DeferredBelowFold() {
  const [Comp, setComp] = useState<ComponentType | null>(null);

  useEffect(() => {
    let cancelled = false;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    const load = () => {
      window.removeEventListener("scroll", load);
      window.removeEventListener("pointerdown", load);
      if (timeoutId !== undefined) clearTimeout(timeoutId);
      void import("@/components/sections/HomeBelowFold").then((m) => {
        if (!cancelled) setComp(() => m.HomeBelowFold);
      });
    };

    window.addEventListener("scroll", load, { passive: true, once: true });
    window.addEventListener("pointerdown", load, { passive: true, once: true });
    timeoutId = setTimeout(load, 5000);

    return () => {
      cancelled = true;
      window.removeEventListener("scroll", load);
      window.removeEventListener("pointerdown", load);
      if (timeoutId !== undefined) clearTimeout(timeoutId);
    };
  }, []);

  if (!Comp) {
    return <div aria-hidden="true" style={{ minHeight: "80vh" }} />;
  }

  return <Comp />;
}
