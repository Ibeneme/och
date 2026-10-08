
"use client"

import { siteConfig } from "@/src/constants/siteConfig";
import Link from "next/link";
import { Phone, ArrowRight, Check } from "lucide-react";
import { useLanguage } from "@/src/context/LanguageContext";

/* Design tokens: navy + gold. Flat surfaces, 1px borders, no shadows, no gradients.
   navy       #07162C  hero, headings, buttons on light surfaces
   navy-panel #0D2342  card on navy
   gold       #E4B95A  accents and buttons on navy, CTA band
   gold-deep  #C89B3C  borders and rules on light surfaces
   gold-text  #8A6A12  gold text on white (AA contrast)
   gold-tint  #FBF6E6  quiet gold background
   line       #E6E9F0  dividers on white                               */

const PHONE = siteConfig.contact.phone;
const PHONE_HREF = `tel:${siteConfig.contact.phoneTel}`;

const container = "mx-auto w-full max-w-6xl px-4 sm:px-8";

const btnBase =
  "inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-center text-sm font-semibold transition-colors sm:w-auto sm:px-7 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

/* On navy */
const btnGold = `${btnBase} bg-[#E4B95A] text-[#07162C] hover:bg-[#F0CB78] focus-visible:outline-[#E4B95A]`;
const btnGhost = `${btnBase} border border-white/30 text-white hover:border-[#E4B95A] hover:text-[#E4B95A] focus-visible:outline-[#E4B95A]`;
/* On gold */
const btnNavy = `${btnBase} bg-[#07162C] text-white hover:bg-[#143A66] focus-visible:outline-[#07162C]`;
const btnNavyOutline = `${btnBase} border border-[#07162C] text-[#07162C] hover:bg-[#07162C] hover:text-white focus-visible:outline-[#07162C]`;

export default function GetPaidToCarePage() {
  const { language } = useLanguage();
  const isSpanish = language === "es";
  const t = (en: string, es: string) => (isSpanish ? es : en);

  const weHandle = [
    t("Hiring paperwork", "Papeleo de contratación"),
    t("Training", "Capacitación"),
    t("Payroll", "Nómina"),
    t(
      "The state's visit-tracking requirements",
      "Requisitos de seguimiento de visitas del estado"
    ),
  ];

  const whoCanBePaid = [
    t("Adult children", "Hijos adultos"),
    t("Siblings", "Hermanos"),
    t("Grandchildren", "Nietos"),
    t("Nieces and nephews", "Sobrinas y sobrinos"),
    t("In-laws", "Familiares políticos"),
    t("Friends", "Amigos"),
    t("Neighbors", "Vecinos"),
    t("Members of your community", "Miembros de su comunidad"),
  ];

  const requirements = [
    t("18 years or older", "Mayor de 18 años"),
    t(
      "Passes a criminal history and registry background check",
      "Pasa una verificación de antecedentes penales y de registros"
    ),
    t(
      "Completes training for the person's specific needs",
      "Completa la capacitación para las necesidades específicas del paciente"
    ),
    t(
      "Records each visit through the state's Electronic Visit Verification (EVV) system",
      "Registra cada visita a través del sistema de Verificación Electrónica de Visitas (EVV) del estado"
    ),
  ];

  return (
    <main className="ohh-sans min-h-screen overflow-x-hidden bg-white text-[#07162C]">
      {/* ===== Hero (navy) ===== */}
      <section className="border-b-4 border-[#E4B95A] bg-[#07162C] text-white">
        <div
          className={`${container} grid items-center gap-10 py-14 sm:py-16 lg:grid-cols-12 lg:gap-16 lg:py-24`}
        >
          <div className="min-w-0 space-y-6 sm:space-y-7 lg:col-span-7">
            <p className="text-sm font-semibold text-[#E4B95A]">
              {t(
                "Family caregiver program",
                "Programa de cuidadores familiares"
              )}
            </p>
            <h1 className="text-balance break-words text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
              {t(
                "Get paid to care for someone you love",
                "Gane dinero por cuidar a alguien que ama"
              )}
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
              {t(
                `If you are already caring for a family member or friend, ${siteConfig.legalName} may be able to pay you for it.`,
                `Si ya cuida a un familiar o amigo, ${siteConfig.legalName} puede pagarle por ello.`
              )}
            </p>
            <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:flex-wrap">
              <a href={PHONE_HREF} className={btnGold}>
                <Phone size={17} aria-hidden className="shrink-0" />
                {t(`Call ${PHONE}`, `Llamar al ${PHONE}`)}
              </a>
              <Link href="/contact" className={btnGhost}>
                {t("Request assessment", "Solicitar evaluación")}
                <ArrowRight size={16} aria-hidden className="shrink-0" />
              </Link>
            </div>
          </div>

          <aside className="min-w-0 rounded-2xl border border-[#E4B95A]/30 bg-[#0D2342] p-6 sm:p-8 lg:col-span-5">
            <h2 className="text-xl font-semibold text-white">
              {t("We handle the paperwork", "Nosotros manejamos el papeleo")}
            </h2>
            <ul className="mt-5 divide-y divide-white/10 border-y border-white/10">
              {weHandle.map((w) => (
                <li
                  key={w}
                  className="flex items-center gap-3 py-3 text-sm font-medium text-white/90"
                >
                  <Check
                    size={16}
                    className="shrink-0 text-[#E4B95A]"
                    aria-hidden
                  />
                  <span className="min-w-0 break-words">{w}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm leading-relaxed text-white/70">
              {t(
                "The caregiver becomes our employee. The family keeps the person they trust.",
                "El cuidador se convierte en nuestro empleado. La familia conserva a la persona en la que confía."
              )}
            </p>
          </aside>
        </div>
      </section>

      {/* ===== Narrative ===== */}
      <section className="border-b border-[#E6E9F0]">
        <div className={`${container} py-14 sm:py-16 lg:py-24`}>
          <div className="max-w-3xl space-y-6">
            <p className="break-words border-l-4 border-[#E4B95A] pl-5 text-xl font-medium leading-snug tracking-tight sm:pl-6 sm:text-2xl lg:text-3xl">
              {t(
                "Most people don't know this is an option. A daughter who drives over every morning, a nephew who handles the shopping and the showers, a neighbor who has been checking in for years: that person can often be hired, trained, and paid as the official attendant.",
                "La mayoría de la gente no sabe que esto es una opción. Una hija que pasa conduciendo todas las mañanas, un sobrino que se encarga de las compras y las duchas, un vecino que ha estado pendiente durante años: esa persona a menudo puede ser contratada, capacitada y pagada como el asistente oficial."
              )}
            </p>
            <p className="text-base leading-relaxed text-[#07162C]/70 sm:text-lg">
              {t(
                "We have been doing this for over a decade. The caregiver becomes our employee. We handle the hiring paperwork, the training, the payroll, and the state's visit-tracking requirements. The family keeps the person they trust.",
                "Llevamos más de una década haciendo esto. El cuidador se convierte en nuestro empleado. Nosotros manejamos el papeleo de contratación, la capacitación, la nómina y los requisitos de seguimiento de visitas del estado. La familia conserva a la persona en la que confía."
              )}
            </p>
          </div>
        </div>
      </section>

      {/* ===== Who can be paid + what it takes ===== */}
      <section className="border-b border-[#E6E9F0]">
        <div
          className={`${container} grid gap-12 py-14 sm:py-16 lg:grid-cols-2 lg:gap-16 lg:py-24`}
        >
          <div className="min-w-0 space-y-6">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                {t("Who can be paid", "Quién puede recibir un pago")}
              </h2>
              <span
                aria-hidden="true"
                className="mt-3 block h-1 w-10 rounded-full bg-[#E4B95A]"
              />
            </div>
            <ul className="flex flex-wrap gap-2">
              {whoCanBePaid.map((w) => (
                <li
                  key={w}
                  className="rounded-full border border-[#C89B3C]/60 bg-[#FBF6E6] px-4 py-1.5 text-sm font-medium text-[#07162C]"
                >
                  {w}
                </li>
              ))}
            </ul>
            <p className="rounded-2xl border-l-4 border-[#E4B95A] bg-[#FBF6E6] p-5 text-sm leading-relaxed text-[#07162C]/80">
              {t(
                "Some restrictions apply depending on which program the person is enrolled in. We will tell you exactly where you stand before anyone gets their hopes up.",
                "Nota: Se aplican algunas restricciones según el programa en el que esté inscrito el paciente. Le diremos exactamente dónde se encuentra antes de crear falsas expectativas."
              )}
            </p>
          </div>

          <div className="min-w-0 space-y-6">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                {t("What it takes", "Lo que se requiere")}
              </h2>
              <span
                aria-hidden="true"
                className="mt-3 block h-1 w-10 rounded-full bg-[#E4B95A]"
              />
            </div>
            <ul className="divide-y divide-[#E6E9F0] border-y border-[#E6E9F0]">
              {requirements.map((r) => (
                <li
                  key={r}
                  className="flex items-start gap-3 py-4 text-[15px] leading-relaxed"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#07162C] text-[#E4B95A]">
                    <Check size={14} aria-hidden />
                  </span>
                  <span className="min-w-0 break-words">{r}</span>
                </li>
              ))}
            </ul>
            <p className="text-[15px] font-semibold text-[#07162C]">
              {t(
                "We walk you through all of it.",
                "Nosotros le guiamos en todo el proceso."
              )}
            </p>
          </div>
        </div>
      </section>

      {/* ===== Call to action (gold band) ===== */}
      <section className="bg-[#E4B95A] text-[#07162C]">
        <div
          className={`${container} flex flex-col items-start justify-between gap-8 py-14 sm:py-16 md:flex-row md:items-center lg:py-20`}
        >
          <div className="min-w-0 max-w-2xl space-y-3">
            <h2 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
              {t(
                "Find out if this is available to you",
                "Averigüe si esto está disponible para usted"
              )}
            </h2>
            <p className="text-base leading-relaxed text-[#07162C]/85 sm:text-lg">
              {t("Call ", "Llame al ")}
              <a
                href={PHONE_HREF}
                className="whitespace-nowrap font-semibold text-[#07162C] underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#07162C]"
              >
                {PHONE}
              </a>
              .
              {t(
                " We will look at the program the person is enrolled in and tell you honestly whether this works for your family.",
                " Revisaremos el programa en el que está inscrito el paciente y le diremos honestamente si esto funciona para su familia."
              )}
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap md:w-auto md:shrink-0">
            <a href={PHONE_HREF} className={btnNavy}>
              <Phone size={16} aria-hidden className="shrink-0" />
              {t(`Call ${PHONE}`, `Llamar al ${PHONE}`)}
            </a>
            <Link href="/contact" className={btnNavyOutline}>
              {t("Contact us", "Contáctenos")}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
