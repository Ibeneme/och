/** Drop into the site footer, above the legal links (C5 placement). */
export default function LanguageAssistanceLine() {
  return (
    <p className="text-sm font-medium">
      <span lang="en">Free language assistance available</span> ·{" "}
      <span lang="es">Asistencia lingüística gratuita disponible</span> ·{" "}
      <a href="tel:9723251598" className="underline">972-325-1598</a>
    </p>
  );
}
