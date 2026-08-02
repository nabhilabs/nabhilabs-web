import { PillarPage } from "@/components/content/PillarPage";
import { pillarMetadata } from "@/lib/pillar-metadata";
import { getPageByPath } from "@/lib/pillar-pages";

const path = "/industries/healthcare-ai";
const page = getPageByPath(path)!;

export const metadata = pillarMetadata(path);

export default function HealthcareAiPage() {
  return <PillarPage page={page} />;
}
