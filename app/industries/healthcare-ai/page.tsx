import { PillarPage } from "@/components/content/PillarPage";
import { NabhiCaresSection } from "@/components/sections/NabhiCaresSection";
import { pillarMetadata } from "@/lib/pillar-metadata";
import { getPageByPath } from "@/lib/pillar-pages";

const path = "/industries/healthcare-ai";
const page = getPageByPath(path)!;

export const metadata = pillarMetadata(path);

export default function HealthcareAiPage() {
  return (
    <main className="relative" id="main-content">
      <NabhiCaresSection asPageHero chapterTag="Product // Nabhi Cares" />
      <PillarPage embedded hideHero page={page} />
    </main>
  );
}
