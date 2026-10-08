/**
 * "Last updated" dates shown directly under each legal page's <h1>.
 * Set each to the date the page ACTUALLY goes live (not the date of the
 * change request), e.g. "October 15, 2026". Update again on every revision.
 * A production build fails until the date is filled in.
 */
export const LEGAL_LAST_UPDATED = {
  npp: "September 27, 2026",
  privacy: "September 24, 2026",
  terms: "September 24, 2026",
  accessibility: "September 27, 2026",
  nondiscrimination: "September 29, 2026",
};

export const NPP_PATH = "/notice-of-privacy-practices";
export const NPP_PDF_PATH = "/documents/notice-of-privacy-practices.pdf";
export const LEGAL_LINKS = [
  { href: NPP_PATH, en: "Notice of Privacy Practices", es: "Aviso de Prácticas de Privacidad" },
  { href: "/privacy-policy", en: "Privacy Policy", es: "Política de privacidad" },
  { href: "/terms-of-service", en: "Terms of Service", es: "Términos de servicio" },
  { href: "/accessibility", en: "Accessibility", es: "Accesibilidad" },
  { href: "/nondiscrimination", en: "Nondiscrimination and Language Assistance", es: "No discriminación y asistencia con el idioma" },
];