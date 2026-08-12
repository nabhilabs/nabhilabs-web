import { ServiceLanding } from "@/components/content/ServiceLanding";
import { pillarMetadata } from "@/lib/pillar-metadata";
import { getPageByPath } from "@/lib/pillar-pages";
import { routes } from "@/lib/routes";
import { getServiceLanding } from "@/lib/service-landings";

const path = routes.knowledge;
const page = getPageByPath(path)!;
const landing = getServiceLanding(path)!;

export const metadata = pillarMetadata(path);

export default function EnterpriseKnowledgePage() {
  return <ServiceLanding landing={landing} page={page} />;
}
