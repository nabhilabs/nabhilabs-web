"use client";

import type { ReactNode } from "react";
import { useLenis } from "@/hooks/use-lenis";

type SmoothScrollProviderProps = {
  children: ReactNode;
};

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  useLenis();

  return children;
}
