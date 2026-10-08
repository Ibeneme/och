import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";
import { LanguageProvider } from "@/src/context/LanguageContext";
import Footer from "@/src/components/Footer";
import Navbar from "@/src/components/Navbar";
import JsonLd from "./JsonLd";
import { buildLocalBusinessJsonLd } from "./local-business";
import { SITE_DESCRIPTION, SITE_NAME, SITE_TAGLINE, SITE_URL } from "./seo";

const parkinsans = localFont({
  src: [
    {
      path: "../public/assets/fonts/parkinsans/Parkinsans-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/parkinsans/Parkinsans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/parkinsans/Parkinsans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/parkinsans/Parkinsans-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/parkinsans/Parkinsans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/parkinsans/Parkinsans-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-parkinsans",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | ${SITE_TAGLINE}`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "home health care",
    "skilled nursing at home",
    "in-home care",
    "physical therapy at home",
    "occupational therapy",
    "speech therapy",
    "home health aide",
    "One Community Home Health",
  ],
  alternates: { canonical: "/" },
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
    description: "Compassionate Skilled Nursing & In-Home Care",
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: "/och.png",
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} Preview`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: "Compassionate Skilled Nursing & In-Home Care",
    images: ["/och.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${parkinsans.variable} h-full antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const stored = localStorage.getItem('preferred_language');
                if (stored === 'es' || stored === 'en') {
                  document.documentElement.lang = stored;
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans overflow-x-hidden">
        <JsonLd data={buildLocalBusinessJsonLd()} />
        <LanguageProvider>
          <Navbar />
          <main className="flex-1 w-full overflow-x-hidden">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
