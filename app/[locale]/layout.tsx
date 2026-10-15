import type { Metadata } from "next";
import localFont from "next/font/local";

import "../globals.css";
import { LanguageProvider } from "@/src/context/LanguageContext";
import Footer from "@/src/components/Footer";
import Navbar from "@/src/components/Navbar";
import { notFound } from "next/navigation";
import JsonLd from "../JsonLd";
import { buildLocalBusinessJsonLd } from "../local-business";
import {
  OG_TAGLINE,
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
} from "../seo";
import { LOCALES, OG_LOCALE, isLocale } from "@/src/i18n/config";

const parkinsans = localFont({
  src: [
    {
      path: "../../public/assets/fonts/parkinsans/Parkinsans-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/parkinsans/Parkinsans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/parkinsans/Parkinsans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/parkinsans/Parkinsans-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/parkinsans/Parkinsans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/parkinsans/Parkinsans-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-parkinsans",
});

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

/**
 * Site-wide defaults, per language. Pages override title/description/canonical/
 * hreflang through `pageMetadata()` in app/seo.ts.
 * (No canonical here on purpose: it would leak onto pages that forget their own.)
 */
export async function generateMetadata({
  params,
}: Pick<LayoutProps, "params">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const other = locale === "es" ? "en" : "es";

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: `${SITE_NAME} | ${SITE_TAGLINE[locale]}`,
      template: `%s | ${SITE_NAME}`,
    },
    description: SITE_DESCRIPTION[locale],
    applicationName: SITE_NAME,
    keywords: SITE_KEYWORDS[locale],
    icons: {
      icon: [{ url: "/och.png", type: "image/png" }],
      shortcut: "/och.png",
      apple: "/och.png",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      title: SITE_NAME,
      description: OG_TAGLINE[locale],
      siteName: SITE_NAME,
      images: [
        {
          url: "/och.png",
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} ${locale === "es" ? "vista previa" : "preview"}`,
        },
      ],
      locale: OG_LOCALE[locale],
      alternateLocale: [OG_LOCALE[other]],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: SITE_NAME,
      description: OG_TAGLINE[locale],
      images: ["/och.png"],
    },
  };
}

export default async function RootLayout({ children, params }: LayoutProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <html lang={locale} className={`${parkinsans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans overflow-x-hidden">
        <JsonLd data={buildLocalBusinessJsonLd(locale)} />
        <LanguageProvider locale={locale}>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-[#07162C] focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#E4B95A]"
          >
            {locale === "es" ? "Saltar al contenido principal" : "Skip to main content"}
          </a>
          <Navbar />
          <main id="main-content" tabIndex={-1} className="flex-1 w-full overflow-x-hidden focus:outline-none">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
