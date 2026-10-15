"use client";

import NextLink from "next/link";
import type { ComponentProps } from "react";
import { useLanguage } from "@/src/context/LanguageContext";
import { localizeHref, localizePath } from "@/src/i18n/config";

/**
 * Drop-in replacement for `next/link` that keeps the visitor in their language:
 * internal links get the `/es` prefix when the page is Spanish.
 */
export default function Link({ href, ...props }: ComponentProps<typeof NextLink>) {
  const { language } = useLanguage();

  let localized: typeof href = href;
  if (typeof href === "string") {
    localized = localizeHref(href, language);
  } else if (href && typeof href.pathname === "string") {
    localized = { ...href, pathname: localizePath(href.pathname, language) };
  }

  return <NextLink href={localized} {...props} />;
}
