import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "./seo";

/**
 * Single source of truth for LocalBusiness structured data (B14).
 * Fill the TODO values below. Empty values are omitted from the JSON-LD
 * (never publish guessed NAP data) and logged as warnings at build time.
 */
export const BUSINESS = {
  legalName: "JACOP Healthcare Services, Inc.",
  dba: SITE_NAME,
  telephone: "", // TODO E.164, e.g. "+1-555-555-5555"
  faxNumber: "", // TODO
  address: {
    streetAddress: "", // TODO
    addressLocality: "", // TODO
    addressRegion: "", // TODO (2-letter state)
    postalCode: "", // TODO
    addressCountry: "US",
  },
  // TODO confirm; days use schema.org names, times are 24h "HH:MM"
  hours: [
    {
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "",
      closes: "",
    },
  ],
  // TODO the eight counties from A4, e.g. "Harris County"
  counties: [] as string[],
  state: "", // TODO state name or abbreviation for AdministrativeArea.containedInPlace
  medicalSpecialty: [
    "Nursing",
    "Geriatric",
    "Pediatric",
    "PhysicalMedicineRehabilitation",
  ],
};

// schema.org has no "HomeHealthcareService" type; MedicalBusiness is the
// closest valid LocalBusiness subtype. Change here if that ever changes.
const BUSINESS_TYPE = "MedicalBusiness";
const MAIN_ID = `${SITE_URL}/#localbusiness`;

const county = (name: string) => ({
  "@type": "AdministrativeArea",
  name,
  ...(BUSINESS.state
    ? { containedInPlace: { "@type": "State", name: BUSINESS.state } }
    : {}),
});

function compact<T extends Record<string, unknown>>(obj: T): Partial<T> {
  return Object.fromEntries(
    Object.entries(obj).filter(([, v]) => {
      if (v == null || v === "") return false;
      if (Array.isArray(v) && v.length === 0) return false;
      return true;
    }),
  ) as Partial<T>;
}

function buildAddress() {
  const a = BUSINESS.address;
  if (!a.streetAddress || !a.addressLocality) return undefined;
  return { "@type": "PostalAddress", ...compact(a) };
}

function buildHours() {
  const spec = BUSINESS.hours
    .filter((h) => h.opens && h.closes)
    .map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    }));
  return spec.length ? spec : undefined;
}

function warnMissing() {
  const missing: string[] = [];
  if (!BUSINESS.telephone) missing.push("telephone");
  if (!BUSINESS.faxNumber) missing.push("faxNumber");
  if (!buildAddress()) missing.push("address");
  if (!buildHours()) missing.push("hours");
  if (BUSINESS.counties.length === 0) missing.push("counties");
  if (missing.length && process.env.NODE_ENV === "production") {
    console.warn(
      `[local-business] JSON-LD omitting empty fields: ${missing.join(", ")}`,
    );
  }
}

/** Site-wide entity: areaServed = all counties. Rendered in the root layout. */
export function buildLocalBusinessJsonLd() {
  warnMissing();
  return compact({
    "@context": "https://schema.org",
    "@type": BUSINESS_TYPE,
    "@id": MAIN_ID,
    name: BUSINESS.dba,
    legalName: BUSINESS.legalName,
    alternateName: BUSINESS.legalName,
    url: SITE_URL,
    logo: `${SITE_URL}/och.png`,
    image: `${SITE_URL}/och.png`,
    description: SITE_DESCRIPTION,
    telephone: BUSINESS.telephone,
    faxNumber: BUSINESS.faxNumber,
    address: buildAddress(),
    openingHoursSpecification: buildHours(),
    areaServed: BUSINESS.counties.map(county),
    medicalSpecialty: BUSINESS.medicalSpecialty.map(
      (s) => `https://schema.org/${s}`,
    ),
  });
}

/**
 * Scoped entity for a city landing page: same business, areaServed = that city.
 * Usage on a city page:
 *   <JsonLd data={buildCityLocalBusinessJsonLd({ city: "Katy", path: "/locations/katy" })} />
 */
export function buildCityLocalBusinessJsonLd({
  city,
  path,
  county: countyName,
}: {
  city: string;
  path: string;
  county?: string;
}) {
  return compact({
    ...buildLocalBusinessJsonLd(),
    "@id": `${SITE_URL}${path}#localbusiness`,
    url: `${SITE_URL}${path}`,
    parentOrganization: { "@id": MAIN_ID },
    areaServed: [
      {
        "@type": "City",
        name: city,
        ...(countyName ? { containedInPlace: county(countyName) } : {}),
      },
    ],
  });
}
