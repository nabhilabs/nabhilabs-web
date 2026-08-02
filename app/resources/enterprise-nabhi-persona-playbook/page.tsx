import { PillarPage } from "@/components/content/PillarPage";
import { pillarMetadata } from "@/lib/pillar-metadata";
import { getPageByPath } from "@/lib/pillar-pages";

const path = "/resources/enterprise-nabhi-persona-playbook";
const page = getPageByPath(path)!;

export const metadata = pillarMetadata(path);

export default function NabhiPersonaPlaybookPage() {
  return <PillarPage page={page} />;
}
