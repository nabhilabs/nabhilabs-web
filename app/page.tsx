import { HeroSection } from "@/components/sections/HeroSection";
import { HomeBelowFold } from "@/components/sections/HomeBelowFold";
import { UnderstandingSection } from "@/components/sections/UnderstandingSection";

export default function HomePage() {
  return (
    <main id="main-content">
      <HeroSection />
      <UnderstandingSection />
      <HomeBelowFold />
    </main>
  );
}
