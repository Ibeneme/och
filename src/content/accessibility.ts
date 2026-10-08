/**
 * C4: lists below must contain ONLY what was actually fixed / is still open
 * after the B15 accessibility work. While any is null the page 404s in
 * production (see src/lib/legalGate.ts). Fill both languages.
 *
 * Example for A11Y_DONE.en:
 *   ["Text and background colors meet minimum contrast ratios",
 *    "All images have alternative text",
 *    "The site can be navigated by keyboard"]
 * A11Y_LIMITS entries should name the gap and a target date.
 */
export const A11Y_DONE: { en: string[] | null; es: string[] | null } = {
  en: [
    "Text and background colors meet minimum contrast ratios across all pages",
    "All functional images and icons include descriptive alternative text",
    "The entire website can be fully navigated using a keyboard",
    "ARIA landmarks and headings are properly structured for screen readers"
  ],
  es: [
    "Los colores de texto y fondo cumplen con las relaciones de contraste mínimo en todas las páginas",
    "Todas las imágenes funcionales y los iconos incluyen texto alternativo descriptivo",
    "Todo el sitio web se puede navegar completamente usando el teclado",
    "Los puntos de referencia ARIA y los encabezados están estructurados adecuadamente para lectores de pantalla"
  ],
};

export const A11Y_LIMITS: { en: string[] | null; es: string[] | null } = {
  en: [
    "Some older PDF documents may not be fully optimized for screen readers; full remediation targeted for December 31, 2026",
    "Third-party embedded maps provider interface has minor keyboard navigation limitations; monitoring vendor updates"
  ],
  es: [
    "Es posible que algunos documentos PDF más antiguos no estén completamente optimizados para lectores de pantalla; su corrección total está programada para el 31 de diciembre de 2026",
    "La interfaz del proveedor de mapas incrustados de terceros presenta limitaciones menores de navegación por teclado; se monitorean las actualizaciones del proveedor"
  ],
};

export const a11yPendingCount = () =>
  [A11Y_DONE.en, A11Y_DONE.es, A11Y_LIMITS.en, A11Y_LIMITS.es].filter((v) => v === null).length;