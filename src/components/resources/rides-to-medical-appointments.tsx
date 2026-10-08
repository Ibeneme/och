"use client";

import Link from "next/link";
import {
  Phone,
  ArrowRight,
  ShieldCheck,
  Printer,
  ExternalLink,
} from "lucide-react";
import { useLanguage } from "@/src/context/LanguageContext";
import { siteConfig } from "@/src/constants/siteConfig";
import transportData from "@/src/locales/resources/transportation-data.json";

/* Design tokens: navy + gold. Fonts come from the root CSS; font-mono is used
   sparingly (last-verified date, phone numbers).
   navy #07162C  hero, headings, table headers
   gold #E4B95A  accents on navy
   gold-deep #C89B3C  rules and markers on white
   gold-text #8A6A12  gold text on white (AA contrast)
   gold-tint #FBF6E6  callouts
   paper #F6F8FC  quiet background
   line #E6E9F0  borders                                              */

const container = "mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8";

/* Section prose: styles the plain h2/h3/p/ul/ol/a that live directly in a section */
const sectionCls =
  "scroll-mt-32 border-t border-[#E6E9F0] pt-10 sm:pt-12 " +
  "[&>h2]:text-balance [&>h2]:break-words [&>h2]:text-2xl [&>h2]:font-semibold [&>h2]:leading-tight [&>h2]:tracking-tight [&>h2]:text-[#07162C] sm:[&>h2]:text-3xl " +
  "[&>h2]:after:mt-3 [&>h2]:after:block [&>h2]:after:h-1 [&>h2]:after:w-10 [&>h2]:after:rounded-full [&>h2]:after:bg-[#E4B95A] [&>h2]:after:content-[''] " +
  "[&>h3]:mt-8 [&>h3]:break-words [&>h3]:text-lg [&>h3]:font-semibold [&>h3]:leading-snug [&>h3]:text-[#07162C] sm:[&>h3]:text-xl " +
  "[&>p]:mt-4 [&>p]:break-words [&>p]:leading-relaxed " +
  "[&>ul]:mt-4 [&>ul]:list-disc [&>ul]:space-y-2 [&>ul]:pl-6 [&>ol]:mt-4 [&>ol]:list-decimal [&>ol]:space-y-2 [&>ol]:pl-6 " +
  "[&_li::marker]:text-[#C89B3C] [&_li]:break-words [&_li]:pl-1 [&_li]:leading-relaxed " +
  "[&_a]:font-medium [&_a]:text-[#07162C] [&_a]:underline [&_a]:decoration-[#C89B3C] [&_a]:decoration-2 [&_a]:underline-offset-4 hover:[&_a]:bg-[#E4B95A]/25";

const callout =
  "mt-6 break-words rounded-xl border-l-4 border-[#E4B95A] bg-[#FBF6E6] p-5 leading-relaxed [&>span]:font-semibold [&>span]:text-[#07162C]";

/* Responsive table: stacked cards on phones, a real table from md up */
const tblWrap =
  "mt-6 md:overflow-hidden md:rounded-xl md:border md:border-[#E6E9F0]";
const tbl = "block w-full border-collapse text-left md:table";
const thead = "hidden bg-[#07162C] md:table-header-group";
const th = "px-5 py-3 text-sm font-semibold text-white";
const tbody = "block space-y-3 md:table-row-group md:space-y-0";
const tr =
  "block rounded-xl border border-[#E6E9F0] p-4 md:table-row md:rounded-none md:border-0 md:border-b md:p-0 md:last:border-b-0 md:even:bg-[#F6F8FC]";
const td =
  "block break-words py-1 leading-relaxed md:table-cell md:px-5 md:py-4 md:align-top";
const tdFirst = `${td} font-semibold text-[#07162C]`;

export default function RidesResourcePage() {
  const { language } = useLanguage();
  const lang = language === "es" ? "es" : "en";

  const handlePrint = () => {
    window.print();
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-[15px] text-[#1E2B4A] sm:text-base">
      <style jsx global>{`
        @media print {
          header,
          footer,
          nav,
          button,
          .no-print {
            display: none !important;
          }
          body {
            background: white !important;
            color: black !important;
          }
          main {
            padding: 0 !important;
          }
          .print-container {
            max-width: 100% !important;
            box-shadow: none !important;
            border: none !important;
          }
        }
      `}</style>

      {/* ===== Hero ===== */}
      <section className="border-b-4 border-[#E4B95A] bg-[#07162C] text-white print:border-0 print:bg-white print:text-black">
        <div className={`${container} py-10 sm:py-14`}>
          <div className="no-print flex flex-wrap items-center justify-between gap-3">
            <Link
              href="/resources"
              className="text-sm font-semibold text-[#E4B95A] underline decoration-[#E4B95A]/50 underline-offset-4 hover:decoration-[#E4B95A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E4B95A]"
            >
              {lang === "es" ? "Volver a Recursos" : "Back to Resources"}
            </Link>
            <button
              onClick={handlePrint}
              className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/30 px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-[#E4B95A] hover:bg-[#E4B95A] hover:text-[#07162C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E4B95A]"
            >
              <Printer size={14} />
              <span>{lang === "es" ? "Imprimir Guía" : "Print Guide"}</span>
            </button>
          </div>

          <div className="mt-8 sm:mt-10">
            <h1 className="max-w-3xl text-balance break-words text-3xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl print:text-black">
              {lang === "es"
                ? "Cómo obtener transporte para citas médicas en Texas"
                : "How to get a ride to your medical appointments"}
            </h1>
            <p className="mt-4 font-mono text-sm text-[#E4B95A] print:text-black">
              {lang === "es" ? "Última verificación:" : "Last verified:"}{" "}
              {transportData.lastVerified}
            </p>
          </div>
        </div>
      </section>

      <div className={`${container} space-y-10 py-10 sm:space-y-12 sm:py-14`}>
        {/* Disclaimer */}
        <div className="break-words rounded-xl border-l-4 border-[#E4B95A] bg-[#FBF6E6] p-5 font-medium leading-relaxed text-[#07162C]">
          <p>
            {lang === "es"
              ? "One Community Home Health no proporciona transporte. Creamos esta página porque nuestros pacientes nos consultan al respecto todas las semanas. Todo lo indicado a continuación es un programa administrado por terceros. Use los números telefónicos para comunicarse directamente con ellos."
              : "One Community Home Health does not provide transportation. We put this page together because our patients ask us about it every week. Everything below is a program run by someone else. Use the phone numbers to reach them directly."}
          </p>
        </div>

        <div className="break-words text-lg leading-relaxed sm:text-xl">
          <p>
            {lang === "es"
              ? "Perder citas médicas por no poder trasladarse es una de las razones más comunes por las que las personas terminan en el hospital. En Texas, hay más ayuda disponible de la que muchas familias imaginan, y en varios programas, un familiar o amigo puede recibir un pago por conducir."
              : "Missing appointments because you cannot get there is one of the most common reasons people end up in the hospital. In Texas, there is more help available than most families know about — and in several programs, a family member or friend can be paid to do the driving."}
          </p>
        </div>

        {/* Table of contents */}
        <div className="no-print rounded-2xl border border-[#E6E9F0] bg-[#F6F8FC] p-5 sm:p-7 [&_a]:block [&_a]:rounded-md [&_a]:px-2 [&_a]:py-1.5 [&_a]:text-[15px] [&_a]:font-medium [&_a]:text-[#07162C] hover:[&_a]:bg-[#E4B95A]/25">
          <h2 className="text-xl font-semibold text-[#07162C]">
            {lang === "es" ? "Contenido de la Guía" : "Table of Contents"}
          </h2>
          <ul className="mt-4 grid gap-x-8 gap-y-0.5 sm:grid-cols-2">
            <li>
              <a href="#start-here">
                1.{" "}
                {lang === "es"
                  ? "Empiece aquí: ¿cuál aplica para usted?"
                  : "Start here: which one applies to you?"}
              </a>
            </li>
            <li>
              <a href="#medicaid-plans">
                2.{" "}
                {lang === "es"
                  ? "Si tiene un plan de salud de Medicaid en Texas"
                  : "If you have a Texas Medicaid health plan"}
              </a>
            </li>
            <li>
              <a href="#mtp">
                3.{" "}
                {lang === "es"
                  ? "Si tiene Medicaid en Texas sin plan de salud"
                  : "If you have Texas Medicaid but no health plan"}
              </a>
            </li>
            <li>
              <a href="#coverage">
                4.{" "}
                {lang === "es"
                  ? "Qué cubre realmente el beneficio de transporte"
                  : "What the Medicaid ride benefit actually covers"}
              </a>
            </li>
            <li>
              <a href="#itp">
                5.{" "}
                {lang === "es"
                  ? "Un familiar o amigo puede recibir pagos por conducir"
                  : "A family member or friend can be paid to drive you"}
              </a>
            </li>
            <li>
              <a href="#scheduling">
                6.{" "}
                {lang === "es"
                  ? "Con cuánta anticipación debe llamar"
                  : "How far ahead do I have to call?"}
              </a>
            </li>
            <li>
              <a href="#veterans">
                7.{" "}
                {lang === "es"
                  ? "Si usted es veterano"
                  : "If you are a veteran"}
              </a>
            </li>
            <li>
              <a href="#other">
                8.{" "}
                {lang === "es"
                  ? "Si ninguno de estos le cubre"
                  : "If none of these cover you"}
              </a>
            </li>
          </ul>
        </div>

        <section id="start-here" className={sectionCls}>
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
              <tbody className={tbody}>
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
              ? "Si no está seguro de cuál tiene, mire el frente de su tarjeta de seguro. Si aparece el nombre y logotipo de un plan de salud (Superior, Molina, Wellpoint, UnitedHealthcare, Aetna), usted está en atenciónmanaged care y debe llamar al plan."
              : "If you are not sure which you have, look at the front of your insurance card. If there is a health plan's name and logo on it — Superior, Molina, Wellpoint, UnitedHealthcare, Aetna — you are in managed care and you call the plan."}
          </p>
        </section>

        <section id="medicaid-plans" className={sectionCls}>
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

          <div>
            <div className={`${tblWrap} hidden md:block`}>
              <table className={`${tbl} md:table`}>
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
                <tbody className={tbody}>
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

            <div className="mt-6 grid gap-3 sm:grid-cols-2 md:hidden">
              {transportData.plans.map((plan) => (
                <div
                  key={plan.id}
                  className="rounded-xl border border-[#E6E9F0] p-4"
                >
                  <div className="break-words font-semibold text-[#07162C]">
                    {plan.name}
                  </div>
                  <div className="mt-1 font-mono">
                    <a href={`tel:${plan.bookingNumber}`}>
                      {plan.bookingNumberDisplay}
                    </a>
                  </div>
                </div>
              ))}
            </div>
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
          <p>
            {lang === "es"
              ? "El número al dorso de su tarjeta de miembro siempre es el correcto. Si un número aquí no funciona, use su tarjeta."
              : "The number on the back of your member card is always right. If a number here does not work, use your card."}
          </p>
          <p>
            {lang === "es"
              ? "¿Ya reservó y el transporte no se ha presentado? Los miembros de Superior llaman al 1-855-932-2319. Todos los demás, llamen al mismo número con el que reservaron y pregunten por '¿Dónde está mi vehículo?' ('Where's my ride')."
              : "Already booked and the ride has not shown up? Superior members call 1-855-932-2319. Everyone else, call the same number you booked with and ask for 'Where's my ride.'"}
          </p>
        </section>

        <section id="mtp" className={sectionCls}>
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
              ? "que deletrea 1-877-MED-TRIP. TDD 1-800-735-2989. Lunes a viernes, de 8:00 a.m. a 5:00 p.m. Centro. El personal habla inglés y español, y hay otros idiomas disponibles a través de una línea de idiomas."
              : "that spells 1-877-MED-TRIP. TDD 1-800-735-2989. Monday through Friday, 8:00 a.m. to 5:00 p.m. Central. Staff speak English and Spanish, and other languages are available through a language line."}
          </p>
          <p>
            {lang === "es"
              ? "MTP también atiende el Programa de Servicios para Niños con Necesidades Especiales de Cuidado de Salud y el programa de Transporte para Pacientes Indigentes con Cáncer."
              : "MTP also serves the Children with Special Health Care Needs Services Program and the Transportation for Indigent Cancer Patients program."}
          </p>
        </section>

        <section id="coverage" className={sectionCls}>
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
                ? "Viajes en avión, para atención médica lejos de casa"
                : "Air travel, for care far from home"}
            </li>
            <li>
              {lang === "es"
                ? "Reembolso de millaje a alguien que lo lleve (consulte la siguiente sección, esta es la que la mayoría pasa por alto)"
                : "Mileage paid to someone who drives you — see the next section, this is the one most people miss"}
            </li>
            <li>
              {lang === "es"
                ? "Un asistente puede viajar con usted cuando lo necesite, sin costo alguno"
                : "An attendant can ride with you when you need one, at no cost"}
            </li>
          </ul>
          <p>
            {lang === "es"
              ? "Para miembros de 20 años o menos, el beneficio también cubre comidas durante viajes de larga distancia a $25 por día para el miembro y $25 por día para un asistente aprobado, alojamiento para pasar la noche y, en algunos casos, dinero adelantado antes del viaje. Estos tres no están disponibles para adultos."
              : "For members 20 and younger, the benefit also covers meals during long-distance travel at $25 per day for the member and $25 per day for an approved attendant, lodging for an overnight stay, and in some cases money advanced before the trip. These three are not available to adults."}
          </p>
          <p>
            {lang === "es"
              ? "No cubierto: ambulancias. Si es una emergencia, llame al 911."
              : "Not covered: ambulances. If it is an emergency, call 911."}
          </p>
          <div className={callout}>
            <span>
              {lang === "es"
                ? "Un requisito a tener en cuenta:"
                : "One requirement to know about:"}
            </span>{" "}
            {lang === "es"
              ? "Estos programas son para personas que no tienen otra forma de llegar. Se le pedirá que confirme eso cuando llame. Es una parte normal del registro, no una prueba."
              : "These programs are for people who have no other way to get there. You will be asked to confirm that when you call. It is a normal part of the intake, not a test."}
          </div>
        </section>

        <section id="itp" className={sectionCls}>
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
              ? "Medicaid de Texas reembolsará el millaje a una persona que lo lleve en su propio automóvil al médico, dentista o farmacia. El programa llama a esa persona Participante de Transporte Individual (ITP). El ITP puede ser:"
              : "Texas Medicaid will reimburse mileage to a person who drives you in their own car to the doctor, the dentist, or the drug store. The program calls that person an Individual Transportation Participant, or ITP. The ITP can be:"}
          </p>
          <ul>
            <li>
              {lang === "es"
                ? "Usted mismo conduciendo"
                : "You, driving yourself"}
            </li>
            <li>
              {lang === "es"
                ? "Su hijo adulto, nieto, hermano u otro pariente"
                : "Your adult child, grandchild, sibling, or another relative"}
            </li>
            <li>
              {lang === "es" ? "Un amigo o vecino" : "A friend or a neighbor"}
            </li>
            <li>
              {lang === "es"
                ? "La persona legalmente responsable de usted"
                : "The person legally responsible for you"}
            </li>
          </ul>
          <h3>{lang === "es" ? "Cómo funciona:" : "How it works."}</h3>
          <p>
            {lang === "es"
              ? "Llame a la línea de transporte de su plan de salud o a MTP al 1-877-633-8747 y diga que desea utilizar un participante de transporte individual. Iniciarán el registro. Los documentos llegan por correo: una solicitud y un formulario de depósito directo. Una vez que el conductor esté registrado, usted recibe un formulario de registro de servicio por cada viaje aprobado. La oficina del médico o la farmacia lo firma, el conductor lo firma y se devuelve."
              : "Call your health plan's ride line, or MTP at 1-877-633-8747, and say you want to use an individual transportation participant. They will start the registration. Paperwork comes in the mail — an application and a direct-deposit form. Once the driver is registered, you get a service record form for each approved trip. The doctor's office or pharmacy signs it, the driver signs it, and it goes back in."}
          </p>
          <p>
            {lang === "es"
              ? "Dos cosas que suelen causar tropiezos:"
              : "Two things that trip people up:"}
          </p>
          <ul>
            <li>
              {lang === "es"
                ? "Regístrese antes del viaje, no después. El viaje debe estar autorizado por adelantado."
                : "Register before the trip, not after. The ride has to be authorized in advance."}
            </li>
            <li>
              {lang === "es"
                ? "A través de MTP, el registro de servicio firmado (Formulario H3017) debe enviarse por correo dentro de los 95 días posteriores al viaje. Los formularios tarde no reciben pago."
                : "Through MTP, the signed service record (Form H3017) must be mailed in within 95 days of the ride. Late forms do not get paid."}
            </li>
          </ul>
          <p>
            {lang === "es"
              ? "Si su plan de salud lo maneja en lugar de MTP, solicíteles su paquete ITP (Superior, por ejemplo, tiene su propia solicitud y formularios de reclamo)."
              : "If your health plan handles it instead of MTP, ask them for their ITP packet — Superior, for example, has its own application and claim forms."}
          </p>
          <div className={callout}>
            <span>
              {lang === "es"
                ? "Un beneficio relacionado que vale la pena consultar."
                : "A related benefit worth asking about."}
            </span>{" "}
            {lang === "es"
              ? "Si alguien ya le está ayudando en casa (baño, vestimenta, comidas, ir al baño), Medicaid de Texas también puede pagarle por ello como cuidador contratado. "
              : "If someone is already helping you at home — bathing, dressing, meals, getting to the bathroom — Texas Medicaid may be able to pay them for that too, as a hired caregiver. "}
            <Link href="/resources">
              {lang === "es" ? "Lea cómo funciona." : "Read how that works."}
            </Link>
          </div>
        </section>

        <section id="scheduling" className={sectionCls}>
          <h2>
            {lang === "es"
              ? "Con cuánta anticipación debe llamar"
              : "How far ahead do I have to call?"}
          </h2>
          <p>
            {lang === "es"
              ? "Al menos dos días hábiles antes de la cita. Días hábiles significa de lunes a viernes; una cita el lunes generalmente debe reservarse antes del miércoles anterior. Al menos cinco días hábiles si viaja fuera de su condado o a larga distancia. Puede llamar con menos aviso en tres situaciones:"
              : "At least two business days before the appointment. Business days means Monday through Friday — a Monday appointment usually needs to be booked by the Wednesday before. At least five business days if you are traveling out of your county or a long distance. You can call with less notice in three situations:"}
          </p>
          <ol>
            <li>
              {lang === "es"
                ? "Está siendo dado de alta de un hospital o instalación y necesita regresar a casa"
                : "You are being discharged from a hospital or facility and need to get home"}
            </li>
            <li>
              {lang === "es"
                ? "Necesita ir a la farmacia por medicamentos o suministros médicos aprobados"
                : "You need to get to the pharmacy for medication or approved medical supplies"}
            </li>
            <li>
              {lang === "es"
                ? "Tiene una condición urgente (no una emergencia, pero lo suficientemente grave o dolorosa como para requerir tratamiento dentro de las 24 horas)"
                : "You have an urgent condition — not an emergency, but severe or painful enough that it needs treatment within 24 hours"}
            </li>
          </ol>
          <h3>
            {lang === "es"
              ? "Tenga esto listo cuando llame:"
              : "Have this ready when you call:"}
          </h3>
          <ul>
            <li>
              {lang === "es"
                ? "Su número de Medicaid o de identificación de miembro y su fecha de nacimiento"
                : "Your Medicaid or member ID number, and your date of birth"}
            </li>
            <li>
              {lang === "es"
                ? "El nombre del médico, dirección completa y número de teléfono"
                : "The doctor's name, full address, and phone number"}
            </li>
            <li>
              {lang === "es"
                ? "La fecha y hora de la cita, y el motivo de su visita"
                : "The date and time of the appointment, and why you are going"}
            </li>
            <li>
              {lang === "es"
                ? "Si necesita elevador para silla de ruedas o si alguien viajará con usted"
                : "Whether you need a wheelchair lift, or someone riding with you"}
            </li>
            <li>
              {lang === "es"
                ? "Un número de teléfono donde puedan comunicarse con usted"
                : "A phone number where they can reach you"}
            </li>
          </ul>
          <p>
            {lang === "es"
              ? "El día del viaje: Esté listo mucho antes de su hora de recogida (planee estar listo al menos 90 minutos antes de la cita) y espere llegar temprano. Si su transporte se atrasa más de 15 minutos, llame a la línea de transporte."
              : "On the day: Be ready well before your pickup time — plan on being ready at least 90 minutes before the appointment, and expect to arrive early. If your ride is more than 15 minutes late, call the ride line."}
          </p>
          <p>
            {lang === "es"
              ? "Si el pasajero es menor de 18 años: Los niños de 14 años o menos deben viajar con un padre, tutor o un adulto autorizado por escrito. Las edades de 15 a 17 años deben estar acompañadas o tener permiso por escrito archivado para viajar solos."
              : "If the rider is under 18: Children 14 and under must have a parent, guardian, or an adult the parent has authorized in writing riding with them. Ages 15 through 17 must either be accompanied or have written permission on file to travel alone."}
          </p>
        </section>

        <section id="veterans" className={sectionCls}>
          <h2>
            {lang === "es" ? "Si usted es veterano" : "If you are a veteran"}
          </h2>
          <p>
            {lang === "es"
              ? "Existen dos programas separados de VA y usted podría calificar para ambos."
              : "Two separate VA programs, and you may qualify for both."}
          </p>

          <h3>
            {lang === "es"
              ? "Viajes gratuitos — el Programa de Transporte de Veteranos (VTP)"
              : "Free rides — the Veterans Transportation Program (VTP)"}
          </h3>
          <p>
            {lang === "es"
              ? "VTP ofrece viajes gratuitos hacia y desde citas médicas de VA. Para calificar, debe estar inscrito en el sistema de salud de VA y la cita debe ser en una instalación de VA o con un proveedor comunitario autorizado por VA."
              : "VTP provides free rides to and from VA health appointments. To qualify you must be enrolled in VA health care and the appointment must be at a VA facility or with a VA-authorized community provider."}
          </p>
          <p>
            {lang === "es" ? "Para solicitar un viaje:" : "To request a ride:"}
          </p>
          <ul>
            <li>
              {lang === "es"
                ? "En línea a través de VetRide en va.gov (inicie sesión con ID.me o Login.gov, ingrese su código postal y siga las instrucciones)."
                : "Online through VetRide at va.gov — sign in with ID.me or Login.gov, enter your ZIP code, and follow the prompts."}
            </li>
            <li>
              {lang === "es"
                ? "O llame a su instalación de VA y solicite hablar con el representante de VTP (directorio en va.gov/resources/veterans-transportation-program-representatives)."
                : "Or call your facility and ask for the VTP representative (directory at va.gov/resources/veterans-transportation-program-representatives)."}
            </li>
          </ul>

          <h3>
            {lang === "es"
              ? "Reembolso de millaje — Viajes para Beneficiarios (Beneficiary Travel)"
              : "Mileage back in your pocket — Beneficiary Travel"}
          </h3>
          <p>
            {lang === "es"
              ? "Si conduce usted mismo o alguien lo lleva, VA puede reembolsarle el millaje, estacionamiento y peajes si viaja para recibir atención de VA y se cumple al menos una de estas condiciones:"
              : "If you drive yourself or someone drives you, VA may reimburse mileage, parking, and tolls. You may qualify if you are traveling for VA care and at least one of these is true:"}
          </p>
          <ul>
            <li>
              {lang === "es"
                ? "Tiene una calificación de discapacidad de VA del 30% o más"
                : "You have a VA disability rating of 30% or higher"}
            </li>
            <li>
              {lang === "es"
                ? "Está recibiendo tratamiento por una condición relacionada con el servicio, sin importar su calificación"
                : "You are being treated for a service-connected condition, whatever your rating"}
            </li>
            <li>
              {lang === "es"
                ? "Recibe una pensión de VA, o sus ingresos están por debajo de la tasa máxima de pensión anual de VA"
                : "You receive a VA pension, or your income is below the maximum annual VA pension rate"}
            </li>
            <li>
              {lang === "es"
                ? "No puede costear el viaje según las pautas de VA"
                : "You cannot afford the travel under VA's guidelines"}
            </li>
            <li>
              {lang === "es"
                ? "Va a un examen de reclamo de VA programado, recibe un perro de servicio o viaja para un trasplante aprobado por VA"
                : "You are going to a scheduled VA claim exam, getting a service dog, or traveling for VA-approved transplant care"}
            </li>
          </ul>
          <p>
            {lang === "es"
              ? "El millaje, estacionamiento y peajes no requieren aprobación previa. Autobús, taxi, viajes compartidos, tren, avión, comidas y alojamiento sí necesitan aprobación previa de su instalación de VA."
              : "Mileage, parking, and tolls need no advance approval. Bus, taxi, rideshare, rail, air travel, meals, and lodging do need approval from your VA facility first."}
          </p>
        </section>

        <section id="other" className={sectionCls}>
          <h2>
            {lang === "es"
              ? "Si ninguno de estos le cubre"
              : "If none of these cover you"}
          </h2>
          <p>
            {lang === "es"
              ? "Original Medicare no paga por viajes rutinarios a citas. Cubre transporte en ambulancia cuando es médicamente necesario, pero no un viaje para un chequeo."
              : "Original Medicare does not pay for routine rides to appointments. It covers ambulance transport when it is medically necessary, but not a ride to a checkup."}
          </p>
          <p>
            {lang === "es"
              ? "Medicare Advantage es diferente. Muchos planes Advantage incluyen un beneficio de transporte (a menudo un número fijo de viajes de ida por año). Verifique la Evidencia de Cobertura de su plan o llame al número en su tarjeta y pregunte específicamente por 'transporte no de emergencia'."
              : "Medicare Advantage is different. Many Advantage plans include a transportation benefit — often a set number of one-way trips per year. It will be in your plan's Evidence of Coverage, or call the number on your card and ask specifically about 'non-emergency transportation.'"}
          </p>
          <h3>
            {lang === "es"
              ? "Otros lugares donde preguntar:"
              : "Other places to ask:"}
          </h3>
          <ul>
            <li>
              {lang === "es"
                ? "El servicio de paratránsito de su ciudad. Ofrece servicio puerta a puerta para pasajeros que no pueden usar el autobús regular. Requiere solicitud previa."
                : "Your city's paratransit service. Door-to-door service for riders who cannot use the regular bus. Requires an application."}
            </li>
            <li>
              {lang === "es"
                ? "Su Agencia del Área para Envejecimiento (Area Agency on Aging). Cada condado tiene una y la asistencia de transporte es uno de sus enfoques."
                : "Your Area Agency on Aging. Every county has one, and transportation assistance is one of the things they help with."}
            </li>
            <li>
              {lang === "es"
                ? "2-1-1 Texas. Marque 211 desde cualquier teléfono para obtener la lista local de recursos disponibles."
                : "2-1-1 Texas. Dial 211 from any phone for local listings."}
            </li>
            <li>
              {lang === "es"
                ? "Su iglesia, centro para personas mayores u organización cívica. Los programas de conductores voluntarios son comunes y rara vez se publicitan en línea."
                : "Your church, senior center, or civic organization. Volunteer driver programs are common and rarely advertised online."}
            </li>
          </ul>
        </section>

        {/* Call to action */}
        <div className="no-print rounded-2xl bg-[#07162C] p-6 text-white sm:p-10">
          <h3 className="text-balance break-words text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl">
            {lang === "es"
              ? "Podemos ayudarle a resolver esto"
              : "We can help you sort this out"}
          </h3>
          <p className="mt-4 max-w-2xl leading-relaxed text-white/75">
            {lang === "es"
              ? "Si usted es paciente de One Community o está pensando en serlo, nuestra oficina puede ayudarle a averiguar cuál de estas opciones aplica y qué solicitar. No conducimos pacientes, pero hacemos estas llamadas con las familias todo el tiempo."
              : "If you are a One Community patient, or thinking about becoming one, our office can help you figure out which of these applies and what to ask for. We do not drive patients — but we make these calls with families all the time."}
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={`tel:${siteConfig.contact.phoneTel}`}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#E4B95A] px-6 py-3.5 text-center text-sm font-semibold text-[#07162C] transition-colors hover:bg-[#F0CB78] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E4B95A] sm:w-auto"
            >
              <Phone size={16} className="shrink-0" />
              <span>Call {siteConfig.contact.phone}</span>
            </a>
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-3.5 text-center text-sm font-semibold text-white transition-colors hover:border-[#E4B95A] hover:text-[#E4B95A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E4B95A] sm:w-auto"
            >
              <span>
                {lang === "es" ? "Solicitar atención" : "Request care"}
              </span>
              <ArrowRight size={16} className="shrink-0" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
