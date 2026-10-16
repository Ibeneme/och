"use client";

import React, { createContext, useCallback, useContext, useMemo, ReactNode } from "react";
import { useRouter } from "next/navigation";
import { type Locale, type SiteLocale, contentLocale, switchLocalePath } from "@/src/i18n/config";

interface LanguageContextType {
  /** Content language ("en" | "es"). Extra languages use "en" for untranslated copy. */
  language: Locale;
  /** The language actually selected in the URL (en, es, de, fr, zh, it, pt). */
  locale: SiteLocale;
  /** Navigates to the same page in another language (/x <-> /es/x <-> /de/x). */
  setLanguage: (lang: SiteLocale) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

/**
 * The language is now derived from the URL (`/es/...` = Spanish) and passed in
 * by the server layout, so Spanish pages are fully server-rendered and
 * crawlable, instead of being flipped on the client from localStorage.
 */
export function LanguageProvider({
  locale,
  children,
}: {
  locale: SiteLocale;
  children: ReactNode;
}) {
  const router = useRouter();

  const setLanguage = useCallback(
    (lang: SiteLocale) => {
      if (lang === locale) return;
      // Read the live URL at click time (keeps this provider fully static).
      const { pathname, search, hash } = window.location;
      router.push(`${switchLocalePath(pathname, lang)}${search}${hash}`);
    },
    [locale, router],
  );

  // Stub kept for backwards compatibility with existing callers.
  const t = useCallback((key: string): string => key, []);

  const value = useMemo(
    () => ({ language: contentLocale(locale), locale, setLanguage, t }),
    [locale, setLanguage, t],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
