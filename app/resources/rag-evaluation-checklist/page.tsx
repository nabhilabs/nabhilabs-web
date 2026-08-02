import { PillarPage } from "@/components/content/PillarPage";
import { pillarMetadata } from "@/lib/pillar-metadata";
import { getPageByPath } from "@/lib/pillar-pages";

const path = "/resources/rag-evaluation-checklist";
const page = getPageByPath(path)!;

export const metadata = pillarMetadata(path);

export default function RagChecklistPage() {
  return <PillarPage page={page} />;
}
