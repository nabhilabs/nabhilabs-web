import { NabhiPersonaPillarLayout } from "@/components/content/NabhiPersonaPillarLayout";
import { NabhiPersonaSection } from "@/components/sections/NabhiPersonaSection";
import { pillarMetadata } from "@/lib/pillar-metadata";
import { getPageByPath } from "@/lib/pillar-pages";
import { routes } from "@/lib/routes";

const path = routes.persona;
const page = getPageByPath(path)!;

export const metadata = pillarMetadata(path);

export default function NabhiPersonaProductPage() {
  return (
    <main className="relative" id="main-content">
      <NabhiPersonaSection
        asPageHero
        chapterTag="Product // Nabhi Persona · Coming soon"
      />
      <NabhiPersonaPillarLayout page={page} />
    </main>
  );
}
