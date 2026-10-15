/**
 * C4: these lists contain ONLY what is verifiably true of the site today.
 * Do not add claims such as "meets minimum contrast ratios" or "fully
 * navigable by keyboard" until a Lighthouse/axe run plus a manual keyboard and
 * screen-reader pass back them up; record the results (tool, version, date,
 * pages tested) alongside the change.
 *
 * While any list is null the page 404s in production (see src/lib/legalGate.ts).
 */
export const A11Y_DONE: { en: string[] | null; es: string[] | null } = {
  en: [
    "A \"Skip to main content\" link is the first focusable item on every page, so keyboard and screen reader users can bypass the navigation menu",
    "Every page declares its language (English or Spanish), and the full site is available in both",
    "Pages use landmark regions (header, navigation, main, footer), and each page has its own descriptive title",
    "Animations and smooth scrolling are reduced or turned off for visitors whose device is set to reduce motion",
  ],
  es: [
    "Un enlace \"Saltar al contenido principal\" es el primer elemento enfocable de cada página, para que las personas que usan teclado o lector de pantalla puedan omitir el menú de navegación",
    "Cada página declara su idioma (inglés o español), y todo el sitio está disponible en ambos",
    "Las páginas usan regiones de referencia (encabezado, navegación, contenido principal y pie de página), y cada página tiene su propio título descriptivo",
    "Las animaciones y el desplazamiento suave se reducen o se desactivan para los visitantes cuyo dispositivo está configurado para reducir el movimiento",
  ],
};

export const A11Y_LIMITS: { en: string[] | null; es: string[] | null } = {
  en: [
    "We have not yet completed a full audit of the site with automated tools (such as Lighthouse and axe) and manual keyboard and screen reader testing, so we cannot yet confirm that every page meets WCAG 2.1 Level AA",
    "Background videos on the home page and page headers play automatically and do not yet have a pause control",
    "The patient request and referral forms are provided by a third party (JotForm) and embedded in our pages; we do not control their accessibility",
  ],
  es: [
    "Aún no hemos completado una auditoría completa del sitio con herramientas automatizadas (como Lighthouse y axe) y pruebas manuales con teclado y lector de pantalla, por lo que todavía no podemos confirmar que cada página cumpla con WCAG 2.1 nivel AA",
    "Los videos de fondo de la página de inicio y de los encabezados de página se reproducen automáticamente y todavía no tienen un control para pausarlos",
    "Los formularios de solicitud de atención y de referidos los proporciona un tercero (JotForm) y están incrustados en nuestras páginas; no controlamos su accesibilidad",
  ],
};

export const a11yPendingCount = () =>
  [A11Y_DONE.en, A11Y_DONE.es, A11Y_LIMITS.en, A11Y_LIMITS.es].filter((v) => v === null).length;
