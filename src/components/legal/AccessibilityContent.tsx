"use client";

import LegalDocument, { Section, Bullets, Pending } from "./LegalDocument";
import { useLanguage } from "@/src/context/LanguageContext";
import { A11Y_DONE, A11Y_LIMITS } from "@/src/content/accessibility";

const COPY = {
  en: {
    title: "Accessibility Statement",
    updated: "Last updated:",
    contents: "Contents",
    commitmentH: "Our commitment",
    commitment:
      "One Community Home Health serves older adults, veterans, and adults with disabilities. We want our website to work for every person who needs it, including people who use screen readers, keyboard navigation, screen magnification, or voice control.",
    standardH: "Standard we are working toward",
    standard:
      "We are working to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA. We review the site periodically and address issues as we find them.",
    doneH: "What we have done",
    limitsH: "Known limitations",
    feedbackH: "We want to hear from you",
    feedback:
      "If you have trouble using any part of this website, or need information from it in another format, please tell us. We will provide the information you need by phone, by mail, or in another format you can use.",
    call: "Call",
    callRest: ", Monday through Friday, 9:00 a.m. to 5:00 p.m.",
    emailLabel: "Email",
    mailLabel: "Mail:",
    respond: "We aim to respond within three business days.",
    thirdH: "Third-party content",
    third:
      "Some content on our site is provided by third parties, such as embedded maps. We do not control the accessibility of that content, but we will help you get the same information another way \u2014 just call us.",
  },
  es: {
    title: "Declaración de accesibilidad",
    updated: "Última actualización:",
    contents: "Contenido",
    commitmentH: "Nuestro compromiso",
    commitment:
      "One Community Home Health atiende a adultos mayores, veteranos y adultos con discapacidades. Queremos que nuestro sitio web funcione para todas las personas que lo necesiten, incluidas las que usan lectores de pantalla, navegación con teclado, ampliación de pantalla o control por voz.",
    standardH: "Norma que estamos procurando cumplir",
    standard:
      "Estamos trabajando para cumplir con las Pautas de Accesibilidad para el Contenido Web (WCAG) 2.1, nivel AA. Revisamos el sitio periódicamente y corregimos los problemas a medida que los encontramos.",
    doneH: "Lo que hemos hecho",
    limitsH: "Limitaciones conocidas",
    feedbackH: "Queremos saber de usted",
    feedback:
      "Si tiene dificultades para usar cualquier parte de este sitio web, o necesita la información en otro formato, avísenos. Le daremos la información que necesite por teléfono, por correo postal o en otro formato que pueda usar.",
    call: "Llame al",
    callRest: ", de lunes a viernes, de 9:00 a. m. a 5:00 p. m.",
    emailLabel: "Correo electrónico:",
    mailLabel: "Correo postal:",
    respond: "Procuramos responder en un plazo de tres días hábiles.",
    thirdH: "Contenido de terceros",
    third:
      "Parte del contenido de nuestro sitio lo proporcionan terceros, como los mapas incrustados. No controlamos la accesibilidad de ese contenido, pero le ayudaremos a obtener la misma información de otra manera: simplemente llámenos.",
  },
} as const;

const link = "text-[#0B4A8F] underline underline-offset-2 hover:text-[#07162C]";

export default function AccessibilityContent({ lastUpdated }: { lastUpdated: string }) {
  const { language } = useLanguage();
  const L = language === "es" ? "es" : "en";
  const c = COPY[L];
  const done = A11Y_DONE[L];
  const limits = A11Y_LIMITS[L];

  const ids = {
    commitment: "our-commitment",
    standard: "standard",
    done: "what-we-have-done",
    limits: "known-limitations",
    feedback: "contact-us-about-accessibility",
    third: "third-party-content",
  };

  return (
    <LegalDocument
      title={c.title}
      lang={L}
      lastUpdated={lastUpdated}
      lastUpdatedLabel={c.updated}
      contentsLabel={c.contents}
      toc={[
        { id: ids.commitment, label: c.commitmentH },
        { id: ids.standard, label: c.standardH },
        { id: ids.done, label: c.doneH },
        { id: ids.limits, label: c.limitsH },
        { id: ids.feedback, label: c.feedbackH },
        { id: ids.third, label: c.thirdH },
      ]}
    >
      <Section id={ids.commitment} title={c.commitmentH}>
        <p>{c.commitment}</p>
      </Section>
      <Section id={ids.standard} title={c.standardH}>
        <p>{c.standard}</p>
      </Section>
      <Section id={ids.done} title={c.doneH}>
        {done ? <Bullets items={done} /> : <Pending what="B15 fixes actually completed (src/content/accessibility.ts)" />}
      </Section>
      <Section id={ids.limits} title={c.limitsH}>
        {limits ? <Bullets items={limits} /> : <Pending what="Known limitations with target dates (src/content/accessibility.ts)" />}
      </Section>
      <Section id={ids.feedback} title={c.feedbackH}>
        <p>{c.feedback}</p>
        <address className="space-y-1 not-italic">
          <p>
            {c.call} <a href="tel:9723251598" className={link}>972-325-1598</a>
            {c.callRest}
          </p>
          <p>
            {c.emailLabel} <a href="mailto:privacy@onechh.com" className={link}>privacy@onechh.com</a>
          </p>
          <p>{c.mailLabel} 3560 Quannah Drive, Grand Prairie, TX 75052</p>
        </address>
        <p>{c.respond}</p>
      </Section>
      <Section id={ids.third} title={c.thirdH}>
        <p>{c.third}</p>
      </Section>
    </LegalDocument>
  );
}
