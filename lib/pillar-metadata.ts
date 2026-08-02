import type { Metadata } from "next";
import { getProductByPath, productKeywordsCsv } from "@/lib/products";
import { getPageByPath } from "@/lib/pillar-pages";

export function pillarMetadata(path: string): Metadata {
  const page = getPageByPath(path);
  if (!page) {
    return {};
  }

  const product = getProductByPath(path);
  const keywords = product
    ? product.keywords
    : [page.primaryKeyword];

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
      keywords: product ? productKeywordsCsv(product) : page.primaryKeyword,
    },
  };
}
