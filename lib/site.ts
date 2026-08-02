/** Canonical public origin — must match Google Search Console property. */
export const SITE_URL = "https://www.nabhilabs.com";

export function absoluteUrl(path = "/"): string {
  if (!path || path === "/") return `${SITE_URL}/`;
  return path.startsWith("http")
    ? path
    : `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
