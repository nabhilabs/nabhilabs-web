"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useLenis } from "@/hooks/use-lenis";

const AmbientLight = dynamic(
  () => import("@/components/ui/AmbientLight").then((m) => m.AmbientLight),
  { ssr: false },
);

const GrainOverlay = dynamic(
  () => import("@/components/ui/GrainOverlay").then((m) => m.GrainOverlay),
  { ssr: false },
);

/** Lenis + ambient effects — does not wrap page content (avoids hydration delay on LCP). */
export function ClientEnhancements() {
  useLenis();
  const [showEffects, setShowEffects] = useState(false);

  useEffect(() => {
    const enable = () => setShowEffects(true);
    window.addEventListener("pointermove", enable, {
      once: true,
      passive: true,
    });
    window.addEventListener("scroll", enable, { once: true, passive: true });
    const id = window.setTimeout(enable, 5000);
    return () => {
      window.removeEventListener("pointermove", enable);
      window.removeEventListener("scroll", enable);
      window.clearTimeout(id);
    };
  }, []);

  if (!showEffects) return null;

  return (
    <>
      <AmbientLight />
      <GrainOverlay />
    </>
  );
}
