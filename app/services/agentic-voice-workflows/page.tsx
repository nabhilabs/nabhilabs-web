import { PillarPage } from "@/components/content/PillarPage";
import { pillarMetadata } from "@/lib/pillar-metadata";
import { getPageByPath } from "@/lib/pillar-pages";

const path = "/services/agentic-voice-workflows";
const page = getPageByPath(path)!;

export const metadata = pillarMetadata(path);

export default function AgenticVoicePage() {
  return <PillarPage page={page} />;
}
