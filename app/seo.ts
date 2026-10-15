import type { Metadata } from "next";
import {
  HREFLANG,
  OG_LOCALE,
  isLocale,
  localizePath,
  type Locale,
  DEFAULT_LOCALE,
} from "@/src/i18n/config";
import { PAGES, type PageKey, type PageSeo } from "@/src/seo/pages";

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://one-community-one.vercel.app"
).replace(/\/$/, "");
export const SITE_NAME = "One Community Home Health";
export const OG_IMAGE = "/och.png";

export const SITE_TAGLINE: Record<Locale, string> = {
  en: "Skilled Nursing & In-Home Care",
  es: "Enfermería Especializada y Cuidado en el Hogar",
};

export const SITE_DESCRIPTION: Record<Locale, string> = {
  en: "One Community Home Health delivers skilled nursing, physical therapy, and daily assistance right in the comfort of home.",
  es: "One Community Home Health ofrece enfermería especializada, fisioterapia y asistencia diaria en la comodidad de su hogar.",
};

export const OG_TAGLINE: Record<Locale, string> = {
  en: "Compassionate Skilled Nursing & In-Home Care",
  es: "Enfermería Especializada y Cuidado en el Hogar con Compasión",
};

export const SITE_KEYWORDS: Record<Locale, string[]> = {
  en: [
    "home health care",
    "skilled nursing at home",
    "in-home care",
    "physical therapy at home",
    "occupational therapy",
    "speech therapy",
    "home health aide",
    "One Community Home Health",
  ],
  es: [
    "atención médica a domicilio",
    "enfermería especializada en casa",
    "cuidado en el hogar",
    "fisioterapia en casa",
    "terapia ocupacional",
    "terapia del habla",
    "asistente de salud en el hogar",
    "One Community Home Health",
  ],
};

/** Parses the `[locale]` route param; falls back to English. */
export function toLocale(value: unknown): Locale {
  return isLocale(value) ? value : DEFAULT_LOCALE;
}

/** Absolute URL for a given English-path + locale. */
export function absoluteUrl(path: string, locale: Locale): string {
  const p = localizePath(path, locale);
  return p === "/" ? SITE_URL : `${SITE_URL}${p}`;
}

/** hreflang map for <link rel="alternate">, incl. x-default (= English). */
export function languageAlternates(path: string): Record<string, string> {
  return {
    [HREFLANG.en]: localizePath(path, "en"),
    [HREFLANG.es]: localizePath(path, "es"),
    "x-default": localizePath(path, "en"),
  };
}

type BuildMetadataOptions = {
  locale: Locale;
  title: string;
  description: string;
  /** English path without prefix, e.g. "/services/wound-care". */
  path: string;
  /** Skip the " | One Community Home Health" suffix. */
  absolute?: boolean;
  /** Canonical points to another page (duplicate content). */
  canonicalPath?: string;
  noindex?: boolean;
};

export function buildMetadata({
  locale,
  title,
  description,
  path,
  absolute = false,
  canonicalPath,
  noindex = false,
}: BuildMetadataOptions): Metadata {
  const fullTitle = absolute ? title : `${title} | ${SITE_NAME}`;
  const canonical = localizePath(canonicalPath ?? path, locale);
  const otherLocale: Locale = locale === "es" ? "en" : "es";

  return {
    title: absolute ? { absolute: title } : title,
    description,
    alternates: {
      canonical,
      // A page that canonicalizes elsewhere must not advertise language alternates.
      ...(canonicalPath ? {} : { languages: languageAlternates(path) }),
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonical,
      siteName: SITE_NAME,
      images: [
        {
          url: OG_IMAGE,
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} ${locale === "es" ? "vista previa" : "preview"}`,
        },
      ],
      locale: OG_LOCALE[locale],
      alternateLocale: [OG_LOCALE[otherLocale]],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [OG_IMAGE],
    },
    ...(noindex ? { robots: { index: false, follow: false } } : {}),
  };
}

/** Metadata for a registered page in `src/seo/pages.ts`, in the right language. */
export function buildPageMetadata(key: PageKey, locale: Locale): Metadata {
  const page: PageSeo = PAGES[key];
  const copy = page[locale];
  return buildMetadata({
    locale,
    title: copy.title,
    description: copy.description,
    path: page.path,
    absolute: key === "home" || page.absoluteTitle === true,
    canonicalPath: page.canonicalPath,
    noindex: page.noindex,
  });
}

type LocaleParams = { params: Promise<{ locale: string }> };

/**
 * One-liner for every page:
 *   export const generateMetadata = pageMetadata("contact");
 */
export function pageMetadata(key: PageKey) {
  return async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
    const { locale } = await params;
    return buildPageMetadata(key, toLocale(locale));
  };
}
