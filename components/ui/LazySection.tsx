"use client";

import {
  useEffect,
  useRef,
  useState,
  type ComponentType,
} from "react";

type LazySectionProps = {
  loader: () => Promise<{ default: ComponentType } | ComponentType>;
  minHeight?: string;
  rootMargin?: string;
};

/**
 * Downloads and mounts a section only when it nears the viewport.
 * Keeps below-fold client JS off first paint / TBT.
 */
export function LazySection({
  loader,
  minHeight = "70vh",
  rootMargin = "480px 0px",
}: LazySectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [Comp, setComp] = useState<ComponentType | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let cancelled = false;

    const mount = async () => {
      const mod = await loader();
      if (cancelled) return;
      const resolved: ComponentType =
        typeof mod === "function"
          ? mod
          : "default" in mod && typeof mod.default === "function"
            ? mod.default
            : (Object.values(mod).find(
                (v) => typeof v === "function",
              ) as ComponentType);
      setComp(() => resolved);
    };

    if (!("IntersectionObserver" in window)) {
      void mount();
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        io.disconnect();
        void mount();
      },
      { rootMargin, threshold: 0.01 },
    );

    io.observe(node);
    return () => {
      cancelled = true;
      io.disconnect();
    };
  }, [loader, rootMargin]);

  return (
    <div ref={ref} style={Comp ? undefined : { minHeight }}>
      {Comp ? <Comp /> : null}
    </div>
  );
}
