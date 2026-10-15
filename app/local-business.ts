import { SITE_DESCRIPTION, SITE_NAME, SITE_URL, absoluteUrl } from "./seo";
import { siteConfig } from "@/src/constants/siteConfig";
import { COUNTIES } from "@/src/constants/serviceArea";
import { localizePath, type Locale } from "@/src/i18n/config";

/**
 * Single source of truth for LocalBusiness structured data (B14).
 * Fill the TODO values below. Empty values are omitted from the JSON-LD
 * (never publish guessed NAP data) and logged as warnings at build time.
 */
export const BUSINESS = {
  legalName: "JACOP Healthcare Services, Inc.",
  dba: SITE_NAME,
  // Pulled from src/constants/siteConfig.ts so there is one place to edit.
  telephone: `+1-${siteConfig.contact.phoneTel.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3")}`,
  faxNumber: `+1-${siteConfig.contact.fax}`,
  email: siteConfig.contact.email,
  address: {
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.address.city,
    addressRegion: siteConfig.address.state,
    postalCode: siteConfig.address.zip,
    addressCountry: "US",
  },
  // Mon-Fri 9:00 AM - 5:00 PM (matches siteConfig.hours). Times are 24h "HH:MM".
  hours: [
    {
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
  ],
  // The eight counties from A4 (single list: src/constants/serviceArea.ts).
  counties: COUNTIES.map((c) => `${c.name} County`),
  state: "Texas", // state name for AdministrativeArea.containedInPlace
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

let warned = false;
function warnMissing() {
  if (warned) return;
  warned = true;
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
export function buildLocalBusinessJsonLd(locale: Locale = "en") {
  warnMissing();
  return compact({
    "@context": "https://schema.org",
    "@type": BUSINESS_TYPE,
    "@id": MAIN_ID,
    name: BUSINESS.dba,
    legalName: BUSINESS.legalName,
    alternateName: BUSINESS.legalName,
    url: absoluteUrl("/", locale),
    inLanguage: locale === "es" ? "es-US" : "en-US",
    knowsLanguage: ["en", "es"],
    logo: `${SITE_URL}/och.png`,
    image: `${SITE_URL}/och.png`,
    description: SITE_DESCRIPTION[locale],
    telephone: BUSINESS.telephone,
    faxNumber: BUSINESS.faxNumber,
    email: BUSINESS.email,
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
 *   <JsonLd data={buildCityLocalBusinessJsonLd({ city: "Katy", path: "/locations/katy", locale })} />
 */
export function buildCityLocalBusinessJsonLd({
  city,
  path,
  county: countyName,
  locale = "en",
}: {
  city: string;
  path: string;
  county?: string;
  locale?: Locale;
}) {
  const localized = localizePath(path, locale);
  return compact({
    ...buildLocalBusinessJsonLd(locale),
    "@id": `${SITE_URL}${localized}#localbusiness`,
    url: `${SITE_URL}${localized}`,
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
