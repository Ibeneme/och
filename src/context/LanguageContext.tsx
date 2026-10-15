"use client";

import React, { createContext, useCallback, useContext, useMemo, ReactNode } from "react";
import { useRouter } from "next/navigation";
import { type Locale, switchLocalePath } from "@/src/i18n/config";

type Language = Locale;

interface LanguageContextType {
  language: Language;
  /** Navigates to the same page in the other language (/x <-> /es/x). */
  setLanguage: (lang: Language) => void;
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
  locale: Language;
  children: ReactNode;
}) {
  const router = useRouter();

  const setLanguage = useCallback(
    (lang: Language) => {
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
    () => ({ language: locale, setLanguage, t }),
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
