"use client";

import dynamic from "next/dynamic";
import type { ReactNode } from "react";
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

  return (
    <>
      <AmbientLight />
      {children}
    </>
  );
}
