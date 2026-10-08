import type { Metadata } from "next";

export const SITE_URL = "https://one-community-one.vercel.app";
export const SITE_NAME = "One Community Home Health";
export const SITE_TAGLINE = "Skilled Nursing & In-Home Care";
export const SITE_DESCRIPTION =
  "One Community Home Health delivers skilled nursing, physical therapy, and daily assistance right in the comfort of home.";
export const OG_IMAGE = "/och.png";

type BuildMetadataOptions = {
  title: string;
  description: string;
  path: string;
  absolute?: boolean;
};

export function buildMetadata({
  title,
  description,
  path,
  absolute = false,
}: BuildMetadataOptions): Metadata {
  const fullTitle = absolute ? title : `${title} | ${SITE_NAME}`;

  return {
    title: absolute ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName: SITE_NAME,
      images: [
        {
          url: OG_IMAGE,
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} preview`,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [OG_IMAGE],
    },
  };
}
