import type { Metadata } from "next";
import { PillarPage } from "@/components/content/PillarPage";
import { getPageByPath } from "@/lib/pillar-pages";

const path = "/services/agentic-voice-workflows";
const page = getPageByPath(path)!;

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: path },
  openGraph: {
    title: page.title,
    description: page.description,
    url: path,
  },
};

export default function AgenticVoicePage() {
  return <PillarPage page={page} />;
}
