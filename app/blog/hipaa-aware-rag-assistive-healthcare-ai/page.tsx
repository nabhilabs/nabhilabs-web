import { ServiceLanding } from "@/components/content/ServiceLanding";
import { pillarMetadata } from "@/lib/pillar-metadata";
import { getPageByPath } from "@/lib/pillar-pages";
import { getServiceLanding } from "@/lib/service-landings";

const path = "/blog/hipaa-aware-rag-assistive-healthcare-ai";
const page = getPageByPath(path)!;
const landing = getServiceLanding(path)!;

export const metadata = pillarMetadata(path);

export default function HipaaAwareRagBlogPage() {
  return <ServiceLanding landing={landing} page={page} />;
}
