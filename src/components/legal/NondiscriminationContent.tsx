"use client";

import LegalDocument, { Section, Bullets, ExtLink, Pending } from "./LegalDocument";
import { useLanguage } from "@/src/context/LanguageContext";
import { TAGLINES } from "@/src/content/taglines";

const OCR_PORTAL = "https://ocrportal.hhs.gov/ocr/portal/lobby.jsf";
const OCR_FORMS = "https://www.hhs.gov/ocr/complaints/index.html";
const link = "text-[#0B4A8F] underline underline-offset-2 hover:text-[#07162C]";

const COPY = {
  en: {
    title: "Nondiscrimination and Language Assistance",
    updated: "Last updated:",
    contents: "Contents",
    commitmentH: "Our commitment",
    commitment1:
      "One Community Home Health complies with applicable federal and state civil rights laws. We do not exclude people, deny benefits, or treat anyone differently because of race, color, national origin, age, disability, sex, or religion.",
    commitment2:
      "We serve every patient who is eligible for our services and lives in our service area, regardless of who they are, where they come from, or what language they speak.",
    langH: "Free language assistance",
    langIntro: "If English is not your first language, we provide language assistance services free of charge, including:",
    langItems: [
      "Qualified interpreters for conversations with our nurses, therapists, and office staff",
      "Written information in other languages",
    ],
    disH: "Free aids and services for people with disabilities",
    disIntro: "We provide free aids and services to help people with disabilities communicate with us, including:",
    disItems: [
      "Qualified sign language interpreters",
      "Written information in other formats, including large print, audio, and accessible electronic formats",
    ],
    helpH: "How to ask for help",
    help: "Call 972-325-1598, Monday through Friday, 9:00 a.m. to 5:00 p.m., and tell us what you need. Current patients may also use the 24/7 on-call number provided at the start of care. There is never a charge for these services.",
    writeUs: "You can also write to us:",
    coordinator: "Civil Rights Coordinator",
    phone: "Phone:",
    email: "Email:",
    discH: "If you believe we have discriminated against you",
    disc1:
      "You can file a grievance with our Civil Rights Coordinator at the address above, in person, by mail, by phone, or by email. If you need help filing a grievance, our Civil Rights Coordinator is available to help you. We will not retaliate against you for filing a grievance.",
    disc2:
      "You may also file a civil rights complaint with the U.S. Department of Health and Human Services, Office for Civil Rights:",
    ocrOnline: "Online:",
    ocrMail:
      "By mail: U.S. Department of Health and Human Services, 200 Independence Avenue SW, Room 509F, HHH Building, Washington, D.C. 20201",
    ocrPhone: "By phone: 1-800-368-1019 (TDD: 1-800-537-7697)",
    forms: "Complaint forms are available at",
    tagH: "Language assistance in other languages",
  },
  es: {
    title: "No discriminación y asistencia con el idioma",
    updated: "Última actualización:",
    contents: "Contenido",
    commitmentH: "Nuestro compromiso",
    commitment1:
      "One Community Home Health cumple con las leyes de derechos civiles federales y estatales aplicables. No excluimos a las personas, no les negamos beneficios ni las tratamos de manera diferente por motivos de raza, color, origen nacional, edad, discapacidad, sexo o religión.",
    commitment2:
      "Atendemos a todo paciente que sea elegible para nuestros servicios y viva en nuestra área de servicio, sin importar quién sea, de dónde venga ni qué idioma hable.",
    langH: "Asistencia lingüística gratuita",
    langIntro: "Si el inglés no es su idioma principal, le ofrecemos servicios de asistencia lingüística sin costo, que incluyen:",
    langItems: [
      "Intérpretes calificados para las conversaciones con nuestras enfermeras, terapeutas y personal de la oficina",
      "Información escrita en otros idiomas",
    ],
    disH: "Ayudas y servicios gratuitos para personas con discapacidades",
    disIntro: "Ofrecemos ayudas y servicios gratuitos para que las personas con discapacidades se comuniquen con nosotros, que incluyen:",
    disItems: [
      "Intérpretes calificados de lenguaje de señas",
      "Información escrita en otros formatos, incluidos letra grande, audio y formatos electrónicos accesibles",
    ],
    helpH: "Cómo pedir ayuda",
    help: "Llame al 972-325-1598, de lunes a viernes, de 9:00 a. m. a 5:00 p. m., y dígannos qué necesita. Los pacientes actuales también pueden usar el número de guardia 24/7 que se les entrega al comenzar la atención. Estos servicios nunca tienen costo.",
    writeUs: "También puede escribirnos:",
    coordinator: "Coordinador de Derechos Civiles",
    phone: "Teléfono:",
    email: "Correo electrónico:",
    discH: "Si cree que hemos discriminado en su contra",
    disc1:
      "Puede presentar un reclamo ante nuestro Coordinador de Derechos Civiles en la dirección indicada arriba, en persona, por correo, por teléfono o por correo electrónico. Si necesita ayuda para presentar un reclamo, nuestro Coordinador de Derechos Civiles está disponible para ayudarle. No tomaremos represalias contra usted por presentar un reclamo.",
    disc2:
      "También puede presentar una queja de derechos civiles ante el Departamento de Salud y Servicios Humanos de EE. UU., Oficina de Derechos Civiles:",
    ocrOnline: "En línea:",
    ocrMail:
      "Por correo: U.S. Department of Health and Human Services, 200 Independence Avenue SW, Room 509F, HHH Building, Washington, D.C. 20201",
    ocrPhone: "Por teléfono: 1-800-368-1019 (TDD: 1-800-537-7697)",
    forms: "Los formularios de queja están disponibles en",
    tagH: "Asistencia lingüística en otros idiomas",
  },
} as const;

export default function NondiscriminationContent({ lastUpdated }: { lastUpdated: string }) {
  const { language } = useLanguage();
  const L = language === "es" ? "es" : "en";
  const c = COPY[L];

  const spanish = TAGLINES.find((t) => t.lang === "es");
  const others = TAGLINES.filter((t) => t.lang !== "es");

  const ids = {
    commitment: "our-commitment",
    language: "free-language-assistance",
    disability: "free-aids-and-services",
    help: "how-to-ask-for-help",
    discrimination: "if-you-believe-we-discriminated",
    taglines: "language-assistance-taglines",
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
        { id: ids.language, label: c.langH },
        { id: ids.disability, label: c.disH },
        { id: ids.help, label: c.helpH },
        { id: ids.discrimination, label: c.discH },
        { id: ids.taglines, label: c.tagH },
      ]}
    >
      <Section id={ids.commitment} title={c.commitmentH}>
        <p>{c.commitment1}</p>
        <p>{c.commitment2}</p>
      </Section>

      <Section id={ids.language} title={c.langH}>
        <p>{c.langIntro}</p>
        <Bullets items={[...c.langItems]} />
      </Section>

      <Section id={ids.disability} title={c.disH}>
        <p>{c.disIntro}</p>
        <Bullets items={[...c.disItems]} />
      </Section>

      <Section id={ids.help} title={c.helpH}>
        <p>{c.help}</p>
        <p>{c.writeUs}</p>
        <address className="space-y-1 not-italic">
          <p className="font-semibold">{c.coordinator}</p>
          <p>Blessing Obieze, Attorney at Law</p>
          <p>One Community Home Health</p>
          <p>3560 Quannah Drive</p>
          <p>Grand Prairie, TX 75052</p>
          <p>
            {c.phone} <a href="tel:9728487942" className={link}>972-848-7942</a> · {c.email}{" "}
            <a href="mailto:privacy@onechh.com" className={link}>privacy@onechh.com</a>
          </p>
        </address>
      </Section>

      <Section id={ids.discrimination} title={c.discH}>
        <p>{c.disc1}</p>
        <p>{c.disc2}</p>
        <Bullets
          items={[
            <>
              {c.ocrOnline} <ExtLink href={OCR_PORTAL}>{OCR_PORTAL}</ExtLink>
            </>,
            c.ocrMail,
            c.ocrPhone,
          ]}
        />
        <p>
          {c.forms} <ExtLink href={OCR_FORMS}>{OCR_FORMS}</ExtLink>.
        </p>
      </Section>

      <Section id={ids.taglines} title={c.tagH}>
        {TAGLINES.length === 0 && (
          <Pending what="HHS official taglines for the Texas top-15 languages (src/content/taglines.ts)" />
        )}
  
        {others.length > 0 && (
          <div className="grid gap-4 sm:grid-cols-2">
            {TAGLINES.map((t) =>
              t.text ? (
                <p key={t.lang} lang={t.lang} className="rounded-lg border border-[#CBD5E1] p-4 text-base leading-relaxed">
                  {t.text}
                </p>
              ) : null,
            )}
          </div>
        )}
      </Section>
    </LegalDocument>
  );
}
