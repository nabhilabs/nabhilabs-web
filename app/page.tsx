import { BeginSection } from "@/components/sections/BeginSection";
import { EcosystemSection } from "@/components/sections/EcosystemSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { IntelligenceSection } from "@/components/sections/IntelligenceSection";
import { ProofSection } from "@/components/sections/ProofSection";
import { SecondBrainSection } from "@/components/sections/SecondBrainSection";
import { StorySection } from "@/components/sections/StorySection";
import { TeamSection } from "@/components/sections/TeamSection";
import { UnderstandingSection } from "@/components/sections/UnderstandingSection";
import { WhyNabhiSection } from "@/components/sections/WhyNabhiSection";

export default function HomePage() {
  return (
    <main id="main-content">
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
