"use client";

import dynamic from "next/dynamic";
import { useEffect, useState, type ReactNode } from "react";
import { useLenis } from "@/hooks/use-lenis";

const AmbientLight = dynamic(
  () => import("@/components/ui/AmbientLight").then((m) => m.AmbientLight),
  { ssr: false },
);

type SmoothScrollProviderProps = {
  children: ReactNode;
};

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  useLenis();
  const [showAmbient, setShowAmbient] = useState(false);

  useEffect(() => {
    const enable = () => setShowAmbient(true);
    window.addEventListener("pointermove", enable, { once: true, passive: true });
    const id = window.setTimeout(enable, 4000);
    return () => {
      window.removeEventListener("pointermove", enable);
      window.clearTimeout(id);
    };
  }, []);

  return (
    <>
      {showAmbient ? <AmbientLight /> : null}
      {children}
    </>
  );
}
