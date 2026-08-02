import { PillarPage } from "@/components/content/PillarPage";
import { pillarMetadata } from "@/lib/pillar-metadata";
import { getPageByPath } from "@/lib/pillar-pages";

const path = "/solutions/enterprise-knowledge-management";
const page = getPageByPath(path)!;

export const metadata = pillarMetadata(path);

export default function EnterpriseKnowledgePage() {
  return <PillarPage page={page} />;
}
