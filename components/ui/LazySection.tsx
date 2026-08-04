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
  /** Wait for scroll or idle before observing (keeps first paint free). */
  deferUntilIdle?: boolean;
};

export function LazySection({
  loader,
  minHeight = "70vh",
  rootMargin = "120px 0px",
  deferUntilIdle = true,
}: LazySectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [Comp, setComp] = useState<ComponentType | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let cancelled = false;
    let io: IntersectionObserver | undefined;
    let idleId: number | undefined;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

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

    const observe = () => {
      if (!("IntersectionObserver" in window)) {
        void mount();
        return;
      }

      io = new IntersectionObserver(
        (entries) => {
          if (!entries.some((e) => e.isIntersecting)) return;
          io?.disconnect();
          void mount();
        },
        { rootMargin, threshold: 0.01 },
      );
      io.observe(node);
    };

    const onScroll = () => {
      window.removeEventListener("scroll", onScroll);
      if (idleId !== undefined && "cancelIdleCallback" in window) {
        window.cancelIdleCallback(idleId);
      }
      if (timeoutId !== undefined) clearTimeout(timeoutId);
      observe();
    };

    if (!deferUntilIdle) {
      observe();
      return () => {
        cancelled = true;
        io?.disconnect();
      };
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    if ("requestIdleCallback" in window) {
      idleId = window.requestIdleCallback(observe, { timeout: 4000 });
    } else {
      timeoutId = setTimeout(observe, 2800);
    }

    return () => {
      cancelled = true;
      window.removeEventListener("scroll", onScroll);
      io?.disconnect();
      if (idleId !== undefined && "cancelIdleCallback" in window) {
        window.cancelIdleCallback(idleId);
      }
      if (timeoutId !== undefined) clearTimeout(timeoutId);
    };
  }, [deferUntilIdle, loader, rootMargin]);

  return (
    <div ref={ref} style={Comp ? undefined : { minHeight }}>
      {Comp ? <Comp /> : null}
    </div>
  );
}
