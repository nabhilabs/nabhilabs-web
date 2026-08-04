import type { Metadata } from "next";
import { getProductByPath } from "@/lib/products";
import { getPageByPath } from "@/lib/pillar-pages";
import {
  clusterKeywordsFor,
  primaryKeywords,
} from "@/lib/keyword-strategy";

export function pillarMetadata(path: string): Metadata {
  const page = getPageByPath(path);
  if (!page) {
    return {};
  }

  const product = getProductByPath(path);
  const baseKeywords = product ? product.keywords : [page.primaryKeyword];
  const relatedSecondaries = clusterKeywordsFor(page.primaryKeyword, 12);
  const keywords = Array.from(
    new Set(
      [...baseKeywords, ...primaryKeywords, ...relatedSecondaries].map((k) =>
        k.trim(),
      ),
    ),
  );

  return {
    title: page.title,
    description: page.description,
    keywords,
    alternates: { canonical: path },
    openGraph: {
      title: page.title,
      description: page.description,
      url: path,
    },
    other: {
      keywords: keywords.join(", "),
    },
  };
}
