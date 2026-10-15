import type { MetadataRoute } from "next";
import { LOCALES } from "@/src/i18n/config";
import { PAGES } from "@/src/seo/pages";
import { LEGAL_LAST_UPDATED } from "@/src/constants/legalDates";
import { taglinesPendingCount } from "@/src/content/taglines";
import { a11yPendingCount } from "@/src/content/accessibility";
import { absoluteUrl, languageAlternates, SITE_URL } from "./seo";

// Legal pages 404 in production until finished, so keep them out of the sitemap too.
const gatedReady: Record<string, boolean> = {
  nondiscrimination:
    !!LEGAL_LAST_UPDATED.nondiscrimination && taglinesPendingCount() === 0,
  accessibility: !!LEGAL_LAST_UPDATED.accessibility && a11yPendingCount() === 0,
};

/**
 * One entry per language per page (/x and /es/x), each carrying hreflang
 * alternates so Google links the two versions together.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const page of Object.values(PAGES)) {
    const p = page as import("@/src/seo/pages").PageSeo;
    if (p.noindex || p.canonicalPath) continue;
    if (p.gated && !gatedReady[p.gated]) continue;

    const alt = languageAlternates(p.path);
    const languages = Object.fromEntries(
      Object.entries(alt).map(([lang, path]) => [
        lang,
        path === "/" ? SITE_URL : `${SITE_URL}${path}`,
      ]),
    );

    for (const locale of LOCALES) {
      entries.push({
        url: absoluteUrl(p.path, locale),
        lastModified,
        changeFrequency: "monthly",
        priority: p.priority,
        alternates: { languages },
      });
    }
  }
  return entries;
}
