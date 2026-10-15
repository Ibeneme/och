import JsonLd from "@/app/JsonLd";
import { buildCityLocalBusinessJsonLd } from "@/app/local-business";
import { toLocale } from "@/app/seo";
import {
  cityNameFromSlug,
  cityPagePath,
  countyOfCity,
  type CitySlug,
} from "@/src/constants/serviceArea";
import CityPage from "./CityPage";

/**
 * Server wrapper for a city landing page: emits the city-scoped LocalBusiness
 * JSON-LD (areaServed = this city only) next to the page body.
 */
export default async function CityRoute({
  slug,
  params,
}: {
  slug: CitySlug;
  params: Promise<{ locale: string }>;
}) {
  const locale = toLocale((await params).locale);
  const city = cityNameFromSlug(slug);
  const county = `${countyOfCity(city).name} County`;

  return (
    <>
      <JsonLd
        data={buildCityLocalBusinessJsonLd({
          city,
          county,
          path: cityPagePath(slug),
          locale,
        })}
      />
      <CityPage slug={slug} />
    </>
  );
}
