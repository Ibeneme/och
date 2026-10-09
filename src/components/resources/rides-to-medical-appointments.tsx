"use client";

import Link from "next/link";
import { Phone, ArrowRight, Printer } from "lucide-react";
import { useLanguage } from "@/src/context/LanguageContext";
import { siteConfig } from "@/src/constants/siteConfig";
import transportData from "@/src/locales/resources/transportation-data.json";

/* Restyled to match Request Care layout:
   soft gray canvas #F4F4F2, pill badges with number chips, large light headings,
   rounded bento cards, flat style with 1px borders. */

const container = "mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8";
const heading =
  "ohh-serif font-light leading-tight tracking-tight text-[#07162C]";
const card = "rounded-3xl border border-[#07162C]/10 bg-white p-6 sm:p-10";
const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#07162C]";

function Pill({ n, label }: { n?: string | number; label: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[#07162C]/10 bg-[#E9EAE5] py-1.5 pl-1.5 pr-4 text-xs font-medium text-[#07162C]">
      {n !== undefined ? (
        <span
          aria-hidden
          className="flex h-6 w-6 items-center justify-center rounded-full bg-[#07162C] text-[10px] font-semibold text-[#E4B95A]"
        >
          {n}
        </span>
      ) : (
        <span
          aria-hidden
          className="ml-2.5 h-1.5 w-1.5 rounded-full bg-[#996515]"
        />
      )}
      {label}
    </span>
  );
}

const sectionCls =
  "scroll-mt-24 rounded-3xl border border-[#07162C]/10 bg-white p-6 sm:p-10 space-y-5 " +
  "[&>h2]:ohh-serif [&>h2]:font-light [&>h2]:text-2xl [&>h2]:leading-tight [&>h2]:text-[#07162C] sm:[&>h2]:text-3xl " +
  "[&>h3]:mt-6 [&>h3]:ohh-serif [&>h3]:text-xl [&>h3]:font-medium [&>h3]:text-[#07162C] " +
  "[&>p]:text-[#07162C]/80 [&>p]:leading-relaxed " +
  "[&>ul]:list-disc [&>ul]:space-y-2 [&>ul]:pl-6 [&>ul]:text-[#07162C]/80 [&>ol]:list-decimal [&>ol]:space-y-2 [&>ol]:pl-6 [&>ol]:text-[#07162C]/80 " +
  "[&_li::marker]:text-[#996515] [&_li]:leading-relaxed " +
  "[&_a]:font-semibold [&_a]:text-[#07162C] [&_a]:underline [&_a]:decoration-[#E4B95A] [&_a]:decoration-2 [&_a]:underline-offset-4";

const callout =
  "rounded-2xl border border-[#E4B95A] bg-[#F6EBD2] p-5 text-sm text-[#07162C] leading-relaxed [&>span]:font-semibold";

const tblWrap = "overflow-hidden rounded-2xl border border-[#07162C]/10";
const tbl = "w-full border-collapse text-left";
const thead = "bg-[#07162C]";
const th =
  "px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-[#E4B95A]";
const tr = "border-b border-[#07162C]/10 last:border-b-0 even:bg-[#F4F4F2]";
const td = "px-5 py-4 text-sm text-[#07162C]/80";
const tdFirst = "px-5 py-4 text-sm font-semibold text-[#07162C]";

export default function RidesResourcePage() {
  const { language } = useLanguage();
  const lang = language === "es" ? "es" : "en";

  const handlePrint = () => {
    window.print();
  };

  const toc = [
    {
      id: "start-here",
      label:
        lang === "es"
          ? "Empiece aquí: ¿cuál aplica para usted?"
          : "Start here: which one applies to you?",
    },
    {
      id: "medicaid-plans",
      label:
        lang === "es"
          ? "Si tiene un plan de salud de Medicaid en Texas"
          : "If you have a Texas Medicaid health plan",
    },
    {
      id: "mtp",
      label:
        lang === "es"
          ? "Si tiene Medicaid en Texas sin plan de salud"
          : "If you have Texas Medicaid but no health plan",
    },
    {
      id: "coverage",
      label:
        lang === "es"
          ? "Qué cubre realmente el beneficio de transporte"
          : "What the Medicaid ride benefit actually covers",
    },
    {
      id: "itp",
      label:
        lang === "es"
          ? "Un familiar o amigo puede recibir pagos por conducir"
          : "A family member or friend can be paid to drive you",
    },
    {
      id: "scheduling",
      label:
        lang === "es"
          ? "Con cuánta anticipación debe llamar"
          : "How far ahead do I have to call?",
    },
    {
      id: "veterans",
      label: lang === "es" ? "Si usted es veterano" : "If you are a veteran",
    },
    {
      id: "other",
      label:
        lang === "es"
          ? "Si ninguno de estos le cubre"
          : "If none of these cover you",
    },
  ];

  return (
    <main className="min-h-screen bg-[#F4F4F2] text-base leading-relaxed text-[#07162C]/80">
      <style jsx global>{`
        @media print {
          header,
          footer,
          nav,
          button,
          .no-print {
            display: none !important;
          }
          body,
          main {
            background: white !important;
            color: black !important;
            padding: 0 !important;
          }
        }
      `}</style>

      {/* ===== Header: centered ===== */}
      <section className="px-4 pb-10 pt-14 text-center sm:px-6 lg:pb-14 lg:pt-20">
        <div className="mx-auto max-w-3xl">
          <div className="no-print mb-6 flex items-center justify-between">
            <Link
              href="/resources"
              className="text-xs font-semibold text-[#996515] underline decoration-[#E4B95A] underline-offset-4"
            >
              {lang === "es" ? "Volver a Recursos" : "Back to Resources"}
            </Link>
            <button
              onClick={handlePrint}
              className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-[#07162C]/20 bg-white px-4 py-1.5 text-xs font-semibold text-[#07162C]"
            >
              <Printer size={14} aria-hidden />
              <span>{lang === "es" ? "Imprimir Guía" : "Print Guide"}</span>
            </button>
          </div>

          <Pill
            label={
              lang === "es" ? "Guía de Transporte" : "Transportation Guide"
            }
          />
          <h1 className={`${heading} mt-6 text-4xl sm:text-5xl lg:text-6xl`}>
            {lang === "es"
              ? "Cómo obtener transporte para citas médicas en Texas"
              : "How to get a ride to your medical appointments"}
          </h1>
          <p className="mx-auto mt-5 inline-block font-mono text-xs font-semibold text-[#996515]">
            {lang === "es" ? "Última verificación:" : "Last verified:"}{" "}
            {transportData.lastVerified}
          </p>
        </div>
      </section>

      <div className={`${container} space-y-6 pb-20 sm:space-y-8 lg:pb-24`}>
        {/* Disclaimer */}
        <div className="rounded-3xl border border-[#E4B95A] bg-[#F6EBD2] p-6 text-sm font-medium text-[#07162C] leading-relaxed">
          <p>
            {lang === "es"
              ? "One Community Home Health no proporciona transporte. Creamos esta página porque nuestros pacientes nos consultan al respecto todas las semanas. Todo lo indicado a continuación es un programa administrado por terceros. Use los números telefónicos para comunicarse directamente con ellos."
              : "One Community Home Health does not provide transportation. We put this page together because our patients ask us about it every week. Everything below is a program run by someone else. Use the phone numbers to reach them directly."}
          </p>
        </div>

        <div className={`p-6 sm:p-8 text-lg ${card}`}>
          <p className="text-[#07162C]/90">
            {lang === "es"
              ? "Perder citas médicas por no poder trasladarse es una de las razones más comunes por las que las personas terminan en el hospital. En Texas, hay más ayuda disponible de la que muchas familias imaginan, y en varios programas, un familiar o amigo puede recibir un pago por conducir."
              : "Missing appointments because you cannot get there is one of the most common reasons people end up in the hospital. In Texas, there is more help available than most families know about — and in several programs, a family member or friend can be paid to do the driving."}
          </p>
        </div>

        {/* Table of contents */}
        <nav
          aria-label={
            lang === "es" ? "Contenido de la Guía" : "Table of Contents"
          }
          className={`no-print p-6 sm:p-8 ${card}`}
        >
          <h2 className="ohh-serif text-xl font-medium text-[#07162C]">
            {lang === "es" ? "Contenido de la Guía" : "Table of Contents"}
          </h2>
          <ol className="mt-5 grid gap-3 sm:grid-cols-2">
            {toc.map((item, i) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="flex h-full items-start gap-3 rounded-2xl border border-[#07162C]/10 bg-[#F4F4F2] p-4 text-sm font-semibold leading-snug text-[#07162C] transition-colors hover:border-[#07162C]"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#07162C] font-mono text-[10px] font-semibold text-[#E4B95A]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="min-w-0 break-words pt-0.5">
                    {item.label}
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <section id="start-here" className={sectionCls}>
          <Pill n="01" label="Overview" />
          <h2>
            {lang === "es"
              ? "Empiece aquí: ¿cuál aplica para usted?"
              : "Start here: which one applies to you?"}
          </h2>
          <div className={tblWrap}>
            <table className={tbl}>
              <thead className={thead}>
                <tr>
                  <th className={th}>
                    {lang === "es" ? "Si usted tiene..." : "If you have..."}
                  </th>
                  <th className={th}>{lang === "es" ? "Llame a" : "Call"}</th>
                </tr>
              </thead>
              <tbody>
                <tr className={tr}>
                  <td className={tdFirst}>
                    {lang === "es"
                      ? "Una tarjeta de plan de salud de Medicaid (STAR+PLUS, STAR, STAR Kids, STAR Health)"
                      : "A Medicaid health plan card (STAR+PLUS, STAR, STAR Kids, STAR Health)"}
                  </td>
                  <td className={td}>
                    {lang === "es"
                      ? "La línea de transporte de su plan — ver tabla abajo"
                      : "Your health plan's ride line — see the table below"}
                  </td>
                </tr>
                <tr className={tr}>
                  <td className={tdFirst}>
                    {lang === "es"
                      ? "Medicaid de Texas sin tarjeta de plan de salud"
                      : "Texas Medicaid with no health plan card"}
                  </td>
                  <td className={td}>
                    <a href={`tel:${transportData.mtp.phone}`}>
                      {transportData.mtp.phoneDisplay}
                    </a>{" "}
                    (
                    {lang === "es"
                      ? "Programa de Transporte Médico del Estado"
                      : "Medical Transportation Program"}
                    )
                  </td>
                </tr>
                <tr className={tr}>
                  <td className={tdFirst}>
                    {lang === "es"
                      ? "Atención médica de VA y la cita es en una instalación de VA"
                      : "VA health care and the appointment is at a VA facility"}
                  </td>
                  <td className={td}>
                    {lang === "es"
                      ? "Programa de Transporte de Veteranos — ver abajo"
                      : "The Veterans Transportation Program — see below"}
                  </td>
                </tr>
                <tr className={tr}>
                  <td className={tdFirst}>
                    {lang === "es"
                      ? "Solo Medicare, o sin cobertura"
                      : "Medicare only, or no coverage"}
                  </td>
                  <td className={td}>
                    {lang === "es"
                      ? "Ver 'Si ninguno de estos le cubre' abajo"
                      : "See 'If none of these cover you' below"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            {lang === "es"
              ? "Si no está seguro de cuál tiene, mire el frente de su tarjeta de seguro. Si aparece el nombre y logotipo de un plan de salud (Superior, Molina, Wellpoint, UnitedHealthcare, Aetna), usted está en atención administrada (managed care) y debe llamar al plan."
              : "If you are not sure which you have, look at the front of your insurance card. If there is a health plan's name and logo on it — Superior, Molina, Wellpoint, UnitedHealthcare, Aetna — you are in managed care and you call the plan."}
          </p>
        </section>

        <section id="medicaid-plans" className={sectionCls}>
          <Pill n="02" label="Medicaid Plans" />
          <h2>
            {lang === "es"
              ? "Si tiene un plan de salud de Medicaid en Texas"
              : "If you have a Texas Medicaid health plan"}
          </h2>
          <p>
            {lang === "es"
              ? "Los viajes a atención médica cubiertos son un beneficio de su plan sin copago. El beneficio se llama Transporte Médico No de Emergencia (NEMT)."
              : "Rides to covered medical care are a benefit of your plan. There is no copay. The benefit is called Nonemergency Medical Transportation, or NEMT."}
          </p>

          <h3>
            {lang === "es"
              ? "Llame a su plan para reservar:"
              : "Call your plan to book:"}
          </h3>

          <div className={tblWrap}>
            <table className={tbl}>
              <thead className={thead}>
                <tr>
                  <th className={th}>
                    {lang === "es" ? "Plan de Salud" : "Health plan"}
                  </th>
                  <th className={th}>
                    {lang === "es"
                      ? "Teléfono para reservar"
                      : "Call to book a ride"}
                  </th>
                </tr>
              </thead>
              <tbody>
                {transportData.plans.map((plan) => (
                  <tr key={plan.id} className={tr}>
                    <td className={tdFirst}>{plan.name}</td>
                    <td className={`${td} font-mono`}>
                      <a href={`tel:${plan.bookingNumber}`}>
                        {plan.bookingNumberDisplay}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p>
            {lang === "es"
              ? "TTY: marque 711 para cualquiera de estos, excepto Wellpoint — su línea TTY es 1-855-823-8587."
              : "TTY: dial 711 for any of these, except Wellpoint — Wellpoint's TTY line is 1-855-823-8587."}
          </p>
          <p>
            {lang === "es"
              ? "Cuándo llamar. Superior y UnitedHealthcare toman llamadas de lunes a viernes, de 8:00 a.m. a 5:00 p.m. Los demás varían y algunos atienden las 24 horas. Si se comunica con una grabación, intente nuevamente la siguiente mañana hábil."
              : "When to call. Superior and UnitedHealthcare take booking calls Monday through Friday, 8:00 a.m. to 5:00 p.m. The others vary and some are open around the clock. If you reach a recording, try again the next business morning."}
          </p>
        </section>

        <section id="mtp" className={sectionCls}>
          <Pill n="03" label="MTP" />
          <h2>
            {lang === "es"
              ? "Si tiene Medicaid en Texas sin plan de salud"
              : "If you have Texas Medicaid but no health plan"}
          </h2>
          <p>
            {lang === "es"
              ? "Usted es atendido por el Programa de Transporte Médico (MTP) del estado."
              : "You are served by the state's Medical Transportation Program (MTP)."}
          </p>
          <p>
            {lang === "es" ? "Llame al" : "Call"}{" "}
            <a href={`tel:${transportData.mtp.phone}`}>
              {transportData.mtp.phoneDisplay}
            </a>{" "}
            —{" "}
            {lang === "es"
              ? "que deletrea 1-877-MED-TRIP. TDD 1-800-735-2989. Lunes a viernes, de 8:00 a.m. a 5:00 p.m. Centro."
              : "that spells 1-877-MED-TRIP. TDD 1-800-735-2989. Monday through Friday, 8:00 a.m. to 5:00 p.m. Central."}
          </p>
        </section>

        <section id="coverage" className={sectionCls}>
          <Pill n="04" label="Benefits Coverage" />
          <h2>
            {lang === "es"
              ? "Qué cubre realmente el beneficio de transporte"
              : "What the Medicaid ride benefit actually covers"}
          </h2>
          <p>
            {lang === "es"
              ? "Ya sea que utilice un plan de salud o a través de MTP, el beneficio generalmente incluye:"
              : "Whether you go through a health plan or through MTP, the benefit generally includes:"}
          </p>
          <ul>
            <li>
              {lang === "es"
                ? "Un viaje hasta la puerta y de regreso: un automóvil, una camioneta para sillas de ruedas o lo que sus necesidades requieran"
                : "A ride to the door and back — a car, a wheelchair van, or whatever your needs require"}
            </li>
            <li>
              {lang === "es"
                ? "Pases de autobús o tren, cuando el transporte público funciona para el viaje"
                : "Bus or rail passes, where public transit works for the trip"}
            </li>
            <li>
              {lang === "es"
                ? "Reembolso de millaje a alguien que lo lleve (consulte la siguiente sección)"
                : "Mileage paid to someone who drives you — see the next section"}
            </li>
          </ul>
          <div className={callout}>
            <span>
              {lang === "es"
                ? "Un requisito a tener en cuenta:"
                : "One requirement to know about:"}
            </span>{" "}
            {lang === "es"
              ? "Estos programas son para personas que no tienen otra forma de llegar. Se le pedirá que confirme eso cuando llame."
              : "These programs are for people who have no other way to get there. You will be asked to confirm that when you call."}
          </div>
        </section>

        <section id="itp" className={sectionCls}>
          <Pill n="05" label="Driver Reimbursement" />
          <h2>
            {lang === "es"
              ? "Un familiar o amigo puede recibir pagos por conducir"
              : "A family member or friend can be paid to drive you"}
          </h2>
          <p>
            {lang === "es"
              ? "Esta es la parte que casi nadie conoce y, para muchas de nuestras familias, es la mejor respuesta."
              : "This is the part almost nobody knows about, and for a lot of our families it is the best answer."}
          </p>
          <p>
            {lang === "es"
              ? "Medicaid de Texas reembolsará el millaje a una persona que lo lleve en su propio automóvil al médico, dentista o farmacia. El programa llama a esa persona Participante de Transporte Individual (ITP)."
              : "Texas Medicaid will reimburse mileage to a person who drives you in their own car to the doctor, the dentist, or the drug store as an Individual Transportation Participant (ITP)."}
          </p>
        </section>

        <section id="scheduling" className={sectionCls}>
          <Pill n="06" label="Scheduling" />
          <h2>
            {lang === "es"
              ? "Con cuánta anticipación debe llamar"
              : "How far ahead do I have to call?"}
          </h2>
          <p>
            {lang === "es"
              ? "Al menos dos días hábiles antes de la cita. Días hábiles significa de lunes a viernes; una cita el lunes generalmente debe reservarse antes del miércoles anterior."
              : "At least two business days before the appointment. Business days means Monday through Friday — a Monday appointment usually needs to be booked by the Wednesday before."}
          </p>
        </section>

        <section id="veterans" className={sectionCls}>
          <Pill n="07" label="Veterans" />
          <h2>
            {lang === "es" ? "Si usted es veterano" : "If you are a veteran"}
          </h2>
          <p>
            {lang === "es"
              ? "Existen dos programas separados de VA y usted podría calificar para ambos (VTP y Reembolso de Millaje por Beneficiary Travel)."
              : "Two separate VA programs exist — VTP for free rides and Beneficiary Travel for mileage reimbursement."}
          </p>
        </section>

        <section id="other" className={sectionCls}>
          <Pill n="08" label="Alternative Options" />
          <h2>
            {lang === "es"
              ? "Si ninguno de estos le cubre"
              : "If none of these cover you"}
          </h2>
          <p>
            {lang === "es"
              ? "Considere paratránsito municipal, su Agencia del Área para Envejecimiento local, o marque 2-1-1 Texas para recursos comunitarios."
              : "Consider city paratransit, your local Area Agency on Aging, or dialing 2-1-1 Texas for available local resources."}
          </p>
        </section>

        {/* Call to action */}
        <div className="no-print rounded-3xl bg-[#07162C] p-7 text-white sm:p-10">
          <h3 className="ohh-serif text-2xl font-light leading-tight tracking-tight text-[#E4B95A] sm:text-3xl">
            {lang === "es"
              ? "Podemos ayudarle a resolver esto"
              : "We can help you sort this out"}
          </h3>
          <p className="mt-4 max-w-2xl leading-relaxed text-white/75">
            {lang === "es"
              ? "Si usted es paciente de One Community o está pensando en serlo, nuestra oficina puede ayudarle a averiguar cuál de estas opciones aplica y qué solicitar."
              : "If you are a One Community patient, or thinking about becoming one, our office can help you figure out which of these applies and what to ask for."}
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href={`tel:${siteConfig.contact.phoneTel}`}
              className={`inline-flex items-center justify-center gap-2 rounded-full border border-[#E4B95A] bg-[#E4B95A] px-7 py-3.5 text-sm font-semibold text-[#07162C] ${focusRing}`}
            >
              <Phone size={16} aria-hidden />
              <span>
                {lang === "es" ? "Llamar" : "Call"} {siteConfig.contact.phone}
              </span>
            </a>
            <Link
              href="/contact"
              className={`inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white ${focusRing}`}
            >
              <span>
                {lang === "es" ? "Solicitar atención" : "Request care"}
              </span>
              <ArrowRight size={16} aria-hidden />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
