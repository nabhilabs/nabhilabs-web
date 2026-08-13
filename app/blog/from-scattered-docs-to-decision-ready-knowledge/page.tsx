import { ServiceLanding } from "@/components/content/ServiceLanding";
import { pillarMetadata } from "@/lib/pillar-metadata";
import { getPageByPath } from "@/lib/pillar-pages";
import { getServiceLanding } from "@/lib/service-landings";

const path = "/blog/from-scattered-docs-to-decision-ready-knowledge";
const page = getPageByPath(path)!;
const landing = getServiceLanding(path)!;

export const metadata = pillarMetadata(path);

export default function DecisionReadyKnowledgeBlogPage() {
  return <ServiceLanding landing={landing} page={page} />;
}
