"use client";

import { useCallback, useEffect, useState, type ComponentType } from "react";
import { ClientEnhancements } from "@/components/providers/client-enhancements";
import { LazySection } from "@/components/ui/LazySection";

/**
 * Below-fold homepage sections — JS chunks load only as each nears the viewport.
 */
export function HomeBelowFold() {
  const [Progress, setProgress] = useState<ComponentType | null>(null);

  useEffect(() => {
    let cancelled = false;
    const load = () => {
      void import("@/components/ui/SectionProgress").then((m) => {
        if (!cancelled) setProgress(() => m.SectionProgress);
      });
    };

    const onScroll = () => {
      window.removeEventListener("scroll", onScroll);
      load();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    let idleId: number | undefined;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    if ("requestIdleCallback" in window) {
      idleId = window.requestIdleCallback(load, { timeout: 3500 });
    } else {
      timeoutId = setTimeout(load, 2500);
    }

    return () => {
      cancelled = true;
      window.removeEventListener("scroll", onScroll);
      if (idleId !== undefined && "cancelIdleCallback" in window) {
        window.cancelIdleCallback(idleId);
      }
      if (timeoutId !== undefined) clearTimeout(timeoutId);
    };
  }, []);

  const loadUnderstanding = useCallback(
    () =>
      import("@/components/sections/UnderstandingSection").then(
        (m) => m.UnderstandingSection,
      ),
    [],
  );
  const loadSecondBrain = useCallback(
    () =>
      import("@/components/sections/SecondBrainSection").then(
        (m) => m.SecondBrainSection,
      ),
    [],
  );
  const loadEcosystem = useCallback(
    () =>
      import("@/components/sections/EcosystemSection").then(
        (m) => m.EcosystemSection,
      ),
    [],
  );
  const loadIntelligence = useCallback(
    () =>
      import("@/components/sections/IntelligenceSection").then(
        (m) => m.IntelligenceSection,
      ),
    [],
  );
  const loadProof = useCallback(
    () =>
      import("@/components/sections/ProofSection").then((m) => m.ProofSection),
    [],
  );
  const loadWhy = useCallback(
    () =>
      import("@/components/sections/WhyNabhiSection").then(
        (m) => m.WhyNabhiSection,
      ),
    [],
  );
  const loadStory = useCallback(
    () =>
      import("@/components/sections/StorySection").then((m) => m.StorySection),
    [],
  );
  const loadTeam = useCallback(
    () =>
      import("@/components/sections/TeamSection").then((m) => m.TeamSection),
    [],
  );
  const loadBegin = useCallback(
    () =>
      import("@/components/sections/BeginSection").then((m) => m.BeginSection),
    [],
  );
  const loadAnswers = useCallback(
    () =>
      import("@/components/sections/AeoAnswersSection").then(
        (m) => m.AeoAnswersSection,
      ),
    [],
  );

  return (
    <>
      <ClientEnhancements />
      {Progress ? <Progress /> : null}
      <LazySection loader={loadUnderstanding} />
      <LazySection loader={loadSecondBrain} />
      <LazySection loader={loadEcosystem} />
      <LazySection loader={loadIntelligence} />
      <LazySection loader={loadProof} />
      <LazySection loader={loadWhy} />
      <LazySection loader={loadStory} />
      <LazySection loader={loadTeam} />
      <LazySection loader={loadAnswers} />
      <LazySection loader={loadBegin} minHeight="80vh" />
    </>
  );
}
