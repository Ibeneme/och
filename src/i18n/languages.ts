/**
 * Language switches (edit this file, or set the env var, to turn languages on).
 *
 *   ENABLE_EXTRA_LANGUAGES = false  -> site is English + Spanish only (default).
 *   ENABLE_EXTRA_LANGUAGES = true   -> every language flagged `true` below is
 *                                      routable (/de, /fr, /zh, /it, /pt) and
 *                                      appears in the language picker.
 *
 * Env override (no code change): NEXT_PUBLIC_ENABLE_EXTRA_LANGUAGES=true
 *
 * Pages without a translation yet fall back to English text (see
 * src/i18n/messages.ts for what is translated today).
 */
export const ENABLE_EXTRA_LANGUAGES: boolean =
  process.env.NEXT_PUBLIC_ENABLE_EXTRA_LANGUAGES
    ? process.env.NEXT_PUBLIC_ENABLE_EXTRA_LANGUAGES === "true"
    : false;

export const EXTRA_LANGUAGE_SWITCHES = {
  de: true, // German
  fr: true, // French
  zh: true, // Mandarin Chinese (Simplified)
  it: true, // Italian
  pt: true, // Portuguese
} as const;

export type ExtraLocale = keyof typeof EXTRA_LANGUAGE_SWITCHES;

export const ALL_EXTRA_LOCALES = Object.keys(EXTRA_LANGUAGE_SWITCHES) as ExtraLocale[];

export const ENABLED_EXTRA_LOCALES: ExtraLocale[] = ENABLE_EXTRA_LANGUAGES
  ? ALL_EXTRA_LOCALES.filter((l) => EXTRA_LANGUAGE_SWITCHES[l])
  : [];

/** Picker metadata for every language the site can show. */
export const LANGUAGE_META = {
  en: { name: "English", short: "EN", flag: "🇺🇸", htmlLang: "en", og: "en_US" },
  es: { name: "Español", short: "ES", flag: "🇪🇸", htmlLang: "es", og: "es_US" },
  de: { name: "Deutsch", short: "DE", flag: "🇩🇪", htmlLang: "de", og: "de_DE" },
  fr: { name: "Français", short: "FR", flag: "🇫🇷", htmlLang: "fr", og: "fr_FR" },
  zh: { name: "中文（普通话）", short: "中文", flag: "🇨🇳", htmlLang: "zh-Hans", og: "zh_CN" },
  it: { name: "Italiano", short: "IT", flag: "🇮🇹", htmlLang: "it", og: "it_IT" },
  pt: { name: "Português", short: "PT", flag: "🇧🇷", htmlLang: "pt", og: "pt_BR" },
} as const;
