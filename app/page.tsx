import dynamic from "next/dynamic";
import { HeroSection } from "@/components/sections/HeroSection";

const SectionProgress = dynamic(() =>
  import("@/components/ui/SectionProgress").then((m) => m.SectionProgress),
);

const UnderstandingSection = dynamic(() =>
  import("@/components/sections/UnderstandingSection").then(
    (m) => m.UnderstandingSection,
  ),
);

const SecondBrainSection = dynamic(() =>
  import("@/components/sections/SecondBrainSection").then(
    (m) => m.SecondBrainSection,
  ),
);

const EcosystemSection = dynamic(() =>
  import("@/components/sections/EcosystemSection").then(
    (m) => m.EcosystemSection,
  ),
);

const IntelligenceSection = dynamic(() =>
  import("@/components/sections/IntelligenceSection").then(
    (m) => m.IntelligenceSection,
  ),
);

const ProofSection = dynamic(() =>
  import("@/components/sections/ProofSection").then((m) => m.ProofSection),
);

const WhyNabhiSection = dynamic(() =>
  import("@/components/sections/WhyNabhiSection").then(
    (m) => m.WhyNabhiSection,
  ),
);

const StorySection = dynamic(() =>
  import("@/components/sections/StorySection").then((m) => m.StorySection),
);

const TeamSection = dynamic(() =>
  import("@/components/sections/TeamSection").then((m) => m.TeamSection),
);

const BeginSection = dynamic(() =>
  import("@/components/sections/BeginSection").then((m) => m.BeginSection),
);

export default function HomePage() {
  return (
    <main id="main-content">
      <SectionProgress />
      <HeroSection />
      <UnderstandingSection />
      <SecondBrainSection />
      <EcosystemSection />
      <IntelligenceSection />
      <ProofSection />
      <WhyNabhiSection />
      <StorySection />
      <TeamSection />
      <BeginSection />
    </main>
  );
}
