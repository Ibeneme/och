/**
 * i18n routing rules (single source of truth)
 *
 *   English (default) -> no prefix        /contact
 *   Spanish           -> always /es       /es/contact
 *
 * Slugs are identical in both languages; only the `/es` prefix differs.
 * `proxy.ts` rewrites un-prefixed URLs to the internal `/en/...` tree, and the
 * whole site lives under `app/[locale]/`.
 */
export const LOCALES = ["en", "es"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "en";

/** Spanish URL prefix (no trailing slash). */
export const ES_PREFIX = "/es";

export function isLocale(value: unknown): value is Locale {
  return typeof value === "string" && (LOCALES as readonly string[]).includes(value);
}

/** hreflang / og:locale values (site serves a US audience). */
export const HREFLANG: Record<Locale, string> = { en: "en-US", es: "es-US" };
export const OG_LOCALE: Record<Locale, string> = { en: "en_US", es: "es_US" };

/** "/en/x" | "/es/x" | "/x"  ->  "/x"   ("/es" -> "/") */
export function stripLocale(pathname: string): string {
  const match = pathname.match(/^\/(en|es)(\/.*)?$/);
  if (!match) return pathname || "/";
  return match[2] || "/";
}

/** Path (no origin) for a given locale. "/" + "es" -> "/es" */
export function localizePath(path: string, locale: Locale): string {
  const clean = stripLocale(path.startsWith("/") ? path : `/${path}`);
  if (locale === "es") return clean === "/" ? ES_PREFIX : `${ES_PREFIX}${clean}`;
  return clean;
}

/**
 * Localizes an href used in <Link>. Leaves external URLs, mailto/tel and
 * pure #hash / ?query links untouched; keeps any #hash or ?query suffix.
 */
export function localizeHref(href: string, locale: Locale): string {
  if (!href.startsWith("/") || href.startsWith("//")) return href;
  const idx = href.search(/[?#]/);
  const path = idx === -1 ? href : href.slice(0, idx);
  const suffix = idx === -1 ? "" : href.slice(idx);
  return `${localizePath(path, locale)}${suffix}`;
}

/** Same page in the other language, used by the language switcher. */
export function switchLocalePath(pathname: string, target: Locale): string {
  return localizePath(stripLocale(pathname), target);
}
