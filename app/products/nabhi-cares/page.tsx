import { NabhiCaresPillarLayout } from "@/components/content/NabhiCaresPillarLayout";
import { NabhiCaresSection } from "@/components/sections/NabhiCaresSection";
import { pillarMetadata } from "@/lib/pillar-metadata";
import { getPageByPath } from "@/lib/pillar-pages";
import { routes } from "@/lib/routes";

const path = routes.cares;
const page = getPageByPath(path)!;

export const metadata = pillarMetadata(path);

export default function NabhiCaresProductPage() {
  return (
    <main className="relative" id="main-content">
      <NabhiCaresSection asPageHero chapterTag="Product // Nabhi Cares" />
      <NabhiCaresPillarLayout page={page} />
    </main>
  );
}
