"use client";

import { useCallback } from "react";
import { ClientEnhancements } from "@/components/providers/client-enhancements";
import { LazySection } from "@/components/ui/LazySection";

/**
 * Below-fold homepage sections — JS chunks load only as each nears the viewport.
 */
export function HomeBelowFold() {
  const loadUnderstanding = useCallback(
    () =>
      import("@/components/sections/UnderstandingSection").then(
        (m) => m.UnderstandingSection,
      ),
    [],
  );
  const loadNabhiPersona = useCallback(
    () =>
      import("@/components/sections/NabhiPersonaSection").then(
        (m) => m.NabhiPersonaSection,
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
      <LazySection loader={loadUnderstanding} />
      <LazySection loader={loadNabhiPersona} />
      <LazySection loader={loadEcosystem} />
      <LazySection loader={loadIntelligence} />
      <LazySection loader={loadProof} minHeight="30vh" />
      <LazySection loader={loadWhy} />
      <LazySection loader={loadStory} />
      <LazySection loader={loadTeam} />
      <LazySection loader={loadAnswers} />
      <LazySection loader={loadBegin} minHeight="80vh" />
    </>
  );
}
