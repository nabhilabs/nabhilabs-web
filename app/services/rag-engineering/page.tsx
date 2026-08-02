import { PillarPage } from "@/components/content/PillarPage";
import { pillarMetadata } from "@/lib/pillar-metadata";
import { getPageByPath } from "@/lib/pillar-pages";

const path = "/services/rag-engineering";
const page = getPageByPath(path)!;

export const metadata = pillarMetadata(path);

export default function RagEngineeringPage() {
  return <PillarPage page={page} />;
}
