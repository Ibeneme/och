/**
 * Service area (A4): single source of truth for the eight counties, their
 * cities, which cities have a landing page, and the homepage featured set.
 *
 * The eight counties map to the two Texas Medicaid managed-care service areas
 * we operate in (Dallas SA: Collin, Dallas, Ellis, Kaufman, Rockwall; Tarrant SA:
 * Denton, Johnson, Tarrant). Do NOT add counties without asking the client.
 */

export const SERVICE_AREA_PATH = "/service-area";
export const CITY_BASE_PATH = "/home-health-care";

export type County = {
  key: string;
  name: string; // "Tarrant"
  mcoArea: "dallas" | "tarrant";
  cities: string[];
};

export const COUNTIES: County[] = [
  {
    key: "tarrant",
    name: "Tarrant",
    mcoArea: "tarrant",
    cities: [
      "Fort Worth", "Arlington", "Mansfield", "Grapevine", "Euless", "Bedford",
      "Hurst", "North Richland Hills", "Keller", "Southlake", "Colleyville",
      "Haltom City", "Watauga", "Saginaw", "Benbrook", "Crowley", "Forest Hill",
      "White Settlement", "Azle",
    ],
  },
  {
    key: "dallas",
    name: "Dallas",
    mcoArea: "dallas",
    cities: [
      "Dallas", "Irving", "Grand Prairie", "Garland", "Mesquite", "Richardson",
      "Carrollton", "DeSoto", "Duncanville", "Cedar Hill", "Lancaster", "Rowlett",
      "Balch Springs", "Farmers Branch", "Coppell", "Addison", "Sachse",
      "Seagoville", "Glenn Heights",
    ],
  },
  {
    key: "collin",
    name: "Collin",
    mcoArea: "dallas",
    cities: [
      "Plano", "Frisco", "McKinney", "Allen", "Wylie", "Murphy", "Prosper",
      "Celina", "Princeton", "Anna", "Melissa", "Fairview",
    ],
  },
  {
    key: "denton",
    name: "Denton",
    mcoArea: "tarrant",
    cities: [
      "Denton", "Lewisville", "Flower Mound", "The Colony", "Little Elm",
      "Corinth", "Highland Village", "Roanoke", "Trophy Club", "Argyle",
      "Aubrey", "Sanger",
    ],
  },
  {
    key: "ellis",
    name: "Ellis",
    mcoArea: "dallas",
    cities: ["Waxahachie", "Ennis", "Midlothian", "Red Oak", "Ferris", "Palmer"],
  },
  {
    key: "johnson",
    name: "Johnson",
    mcoArea: "tarrant",
    cities: ["Cleburne", "Burleson", "Joshua", "Alvarado", "Keene", "Godley"],
  },
  {
    key: "kaufman",
    name: "Kaufman",
    mcoArea: "dallas",
    cities: ["Terrell", "Forney", "Kaufman", "Crandall"],
  },
  {
    key: "rockwall",
    name: "Rockwall",
    mcoArea: "dallas",
    cities: ["Rockwall", "Heath", "Fate", "Royse City"],
  },
];

/** "Fort Worth" -> "fort-worth", "DeSoto" -> "desoto" */
export const citySlug = (name: string) =>
  name.toLowerCase().replace(/\s+/g, "-");

/** The twelve cities that have a landing page (build order from the request). */
export const CITY_PAGE_SLUGS = [
  "grand-prairie",
  "arlington",
  "fort-worth",
  "irving",
  "dallas",
  "mansfield",
  "desoto",
  "duncanville",
  "cedar-hill",
  "garland",
  "mesquite",
  "plano",
] as const;
export type CitySlug = (typeof CITY_PAGE_SLUGS)[number];

const ALL_CITIES = COUNTIES.flatMap((c) =>
  c.cities.map((name) => ({ name, county: c })),
);

/** Display name for a slug, taken from the county lists (keeps "DeSoto" casing). */
export function cityNameFromSlug(slug: CitySlug): string {
  const hit = ALL_CITIES.find((c) => citySlug(c.name) === slug);
  if (!hit) throw new Error(`Unknown city slug: ${slug}`);
  return hit.name;
}

export function countyOfCity(name: string): County {
  const hit = ALL_CITIES.find((c) => c.name === name);
  if (!hit) throw new Error(`City not in a service-area county: ${name}`);
  return hit.county;
}

export const cityPagePath = (slug: string) => `${CITY_BASE_PATH}/${slug}`;

/** Path for a city name if it has a landing page, else null (render plain text). */
export function cityPageHref(name: string): string | null {
  const slug = citySlug(name);
  return (CITY_PAGE_SLUGS as readonly string[]).includes(slug)
    ? cityPagePath(slug)
    : null;
}

/** Homepage featured set, in display order. */
export const FEATURED_CITIES = [
  "Grand Prairie",
  "Arlington",
  "Fort Worth",
  "Irving",
  "Dallas",
  "Mansfield",
  "DeSoto",
  "Duncanville",
] as const;

export const COUNTY_COUNT = COUNTIES.length; // 8
