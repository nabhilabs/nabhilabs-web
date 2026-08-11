import { PillarPage } from "@/components/content/PillarPage";
import { NabhiPersonaSection } from "@/components/sections/NabhiPersonaSection";
import { pillarMetadata } from "@/lib/pillar-metadata";
import { getPageByPath } from "@/lib/pillar-pages";

const path = "/solutions/nabhi-persona";
const page = getPageByPath(path)!;

export const metadata = pillarMetadata(path);

export default function NabhiPersonaSolutionPage() {
  return (
    <main className="relative" id="main-content">
      <NabhiPersonaSection
        asPageHero
        chapterTag="Product // Nabhi Persona · Coming soon"
      />
      <PillarPage embedded hideHero page={page} />
    </main>
  );
}
