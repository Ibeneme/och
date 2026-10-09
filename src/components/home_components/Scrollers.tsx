"use client";

import React from "react";
import {
  ShieldCheck,
  Award,
  FileCheck,
  WalletCards,
  Check,
  Phone,
} from "lucide-react";
import { useLanguage } from "@/src/context/LanguageContext";

const MAIN_PHONE = { label: "(972) 325-1598", href: "tel:9723251598" };
const VERIFY_PHONE = { label: "(972) 848-9174", href: "tel:9728489174" };

const copy = {
  en: {
    badge: "Coverage & Payment Options",
    heading: "Coverage and payment options",
    intro:
      "We work with Medicare, Texas Medicaid, the VA, and private payment. Our team verifies your coverage and handles authorizations before care begins, so you don't have to figure it out on your own.",
    verifyTitle: "What we handle for you",
    verify: [
      "We check your insurance eligibility directly.",
      "Prior authorizations are handled before care begins.",
      "Not sure what you have? Call and we'll check for you.",
    ],
    call: "Call",
    contact: "Contact our team",
    contactHref: "/contact",
    medicare: {
      title: "Medicare",
      lead: "Medicare-certified home health",
      body: "Medicare covers skilled care at home: nursing, physical, occupational, and speech therapy, medical social services, and home health aide visits ordered as part of your plan of care.",
      note: "You need both Medicare Part A and Part B. We can't accept Part A alone or Part B alone. Coverage depends on eligibility and documented medical necessity, and your physician must order the services.",
    },
    medicaid: {
      title: "Texas Medicaid",
      lead: "Managed care and traditional programs",
      body: "We're licensed for all four Texas Medicaid managed care programs and the traditional state programs. Whether we can serve you depends on your program, plan, and county. The fastest way to find out is to call us and read the front of your card.",
      plansLabel: "Plans we accept",
      programs: [
        {
          name: "STAR+PLUS",
          who: "Adults 65 and older, and adults with disabilities",
          detail:
            "Covers long-term services and supports at home: personal attendant services, home health, and Community First Choice. Your plan's service coordinator authorizes the hours.",
          plans: [
            "Molina Healthcare of Texas",
            "Superior HealthPlan",
            "UnitedHealthcare Community Plan",
          ],
        },
        {
          name: "STAR",
          who: "Children, families, and pregnant women",
          plans: [
            "Aetna Better Health of Texas",
            "Molina Healthcare of Texas",
            "Wellpoint Texas",
          ],
        },
        {
          name: "STAR Kids",
          who: "Children and young adults 20 and under with disabilities",
          detail:
            "Covers in-home attendant care, private duty nursing, and respite for children with complex medical needs.",
          plans: ["Aetna Better Health of Texas", "Wellpoint Texas"],
        },
        {
          name: "CHIP and CHIP Perinate",
          who: "Children's health coverage",
          plans: [
            "Aetna Better Health of Texas",
            "Molina Healthcare of Texas",
            "Wellpoint Texas",
          ],
        },
      ],
      traditionalName: "Traditional Texas Medicaid",
      traditional:
        "We also serve members of HHSC-administered programs, including Primary Home Care and Community Attendant Services: attendant care for people who need help with daily activities and aren't in managed care.",
      notSure: "Not sure which program or plan you're in? Call",
      notSureEnd:
        "and read us what's on the front of your card. We'll tell you in one call whether we can serve you.",
    },
    va: {
      title: "VA Community Care",
      lead: "For veterans",
      body: "We serve veterans with authorized home care through VA Community Care. A VA referral and authorization must be in place before services begin. Call us and we'll help you understand what's needed.",
    },
    pay: {
      title: "Private pay",
      lead: "Private payment arrangements",
      body: "If you don't have coverage, or want services beyond what your plan authorizes, we offer private payment arrangements. Rates and availability are discussed during your consultation.",
    },
    footer:
      "Coverage and authorization vary by plan, product, eligibility, service, and location. Acceptance of a plan doesn't guarantee coverage of a specific service. We verify benefits and obtain authorization before care begins.",
  },
  es: {
    badge: "Opciones de Cobertura y Pago",
    heading: "Opciones de cobertura y pago",
    intro:
      "Trabajamos con Medicare, Medicaid de Texas, el VA y pago privado. Nuestro equipo verifica su cobertura y gestiona las autorizaciones antes de que comience la atención, para que no tenga que resolverlo por su cuenta.",
    verifyTitle: "Lo que gestionamos por usted",
    verify: [
      "Verificamos directamente su elegibilidad de seguro.",
      "Gestionamos las autorizaciones previas antes de comenzar la atención.",
      "¿No está seguro de qué cobertura tiene? Llame y la revisamos por usted.",
    ],
    call: "Llamar",
    contact: "Contacte a nuestro equipo",
    contactHref: "/contact",
    medicare: {
      title: "Medicare",
      lead: "Salud en el hogar certificada por Medicare",
      body: "Medicare cubre la atención especializada en el hogar: enfermería, terapia física, ocupacional y del habla, servicios sociales médicos y visitas de auxiliares de salud en el hogar indicadas en su plan de atención.",
      note: "Necesita tanto la Parte A como la Parte B de Medicare. No podemos aceptar solo la Parte A ni solo la Parte B. La cobertura depende de la elegibilidad y de la necesidad médica documentada, y su médico debe ordenar los servicios.",
    },
    medicaid: {
      title: "Medicaid de Texas",
      lead: "Atención administrada y programas tradicionales",
      body: "Tenemos licencia para los cuatro programas de atención administrada de Medicaid de Texas y para los programas estatales tradicionales. Que podamos atenderle depende de su programa, su plan y su condado. Lo más rápido es llamarnos y leernos el frente de su tarjeta.",
      plansLabel: "Planes que aceptamos",
      programs: [
        {
          name: "STAR+PLUS",
          who: "Adultos de 65 años o más y adultos con discapacidades",
          detail:
            "Cubre servicios y apoyos a largo plazo en el hogar: servicios de asistente personal, salud en el hogar y Community First Choice. El coordinador de servicios de su plan autoriza las horas.",
          plans: [
            "Molina Healthcare of Texas",
            "Superior HealthPlan",
            "UnitedHealthcare Community Plan",
          ],
        },
        {
          name: "STAR",
          who: "Niños, familias y mujeres embarazadas",
          plans: [
            "Aetna Better Health of Texas",
            "Molina Healthcare of Texas",
            "Wellpoint Texas",
          ],
        },
        {
          name: "STAR Kids",
          who: "Niños y jóvenes de hasta 20 años con discapacidades",
          detail:
            "Cubre atención de asistente en el hogar, enfermería de turno privado y cuidado de relevo para niños con necesidades médicas complejas.",
          plans: ["Aetna Better Health of Texas", "Wellpoint Texas"],
        },
        {
          name: "CHIP y CHIP Perinatal",
          who: "Cobertura de salud para niños",
          plans: [
            "Aetna Better Health of Texas",
            "Molina Healthcare of Texas",
            "Wellpoint Texas",
          ],
        },
      ],
      traditionalName: "Medicaid tradicional de Texas",
      traditional:
        "También atendemos a miembros de los programas administrados por HHSC, incluidos Primary Home Care y Community Attendant Services: atención de asistente para personas que necesitan ayuda con las actividades diarias y no están en atención administrada.",
      notSure: "¿No sabe en qué programa o plan está? Llame al",
      notSureEnd:
        "y léanos lo que dice el frente de su tarjeta. En una sola llamada le diremos si podemos atenderle.",
    },
    va: {
      title: "VA Community Care",
      lead: "Para veteranos",
      body: "Atendemos a veteranos con atención domiciliaria autorizada a través de VA Community Care. Debe existir una remisión y autorización del VA antes de comenzar los servicios. Llámenos y le ayudamos a entender qué se necesita.",
    },
    pay: {
      title: "Pago privado",
      lead: "Arreglos de pago privado",
      body: "Si no tiene cobertura, o desea servicios adicionales a los que autoriza su plan, ofrecemos arreglos de pago privado. Las tarifas y la disponibilidad se hablan durante su consulta.",
    },
    footer:
      "La cobertura y la autorización varían según el plan, el producto, la elegibilidad, el servicio y la ubicación. Aceptar un plan no garantiza la cobertura de un servicio específico. Verificamos los beneficios y obtenemos la autorización antes de comenzar la atención.",
  },
} as const;

const wrap = "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8";
const heading =
  "ohh-serif font-bold leading-tight tracking-tight text-[#07162C]";
const card = "rounded-3xl border border-[#07162C]/10 bg-white p-6 sm:p-8";
const chip =
  "inline-block rounded-full border border-[#07162C]/10 bg-[#E9EAE5] px-3 py-1 text-xs font-semibold text-[#07162C]";

function PanelHead({
  icon: Icon,
  title,
  lead,
}: {
  icon: React.ElementType;
  title: string;
  lead: string;
}) {
  return (
    <div className="flex items-start gap-4 mb-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#07162C] text-[#E4B95A]">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>
      <div>
        <h3 className="ohh-serif text-2xl font-medium leading-tight text-[#07162C]">
          {title}
        </h3>
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#996515] mt-1">
          {lead}
        </p>
      </div>
    </div>
  );
}

export default function Scrollers(): React.JSX.Element {
  const { language } = useLanguage();
  const t = copy[language === "es" ? "es" : "en"];

  return (
    <section className="w-full bg-[#F4F4F2] py-20 md:py-28 text-[#07162C]">
      <div className={`${wrap} grid gap-12 lg:grid-cols-12`}>
        {/* Left: intro + what we handle */}
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#07162C]/10 bg-[#E9EAE5] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#07162C] mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-[#996515] animate-pulse " />
              {t.badge}
            </span>
            <h2 className={`${heading} mb-5 text-3xl sm:text-4xl lg:text-5xl`}>
              {t.heading}
            </h2>
            <p className="mb-8 max-w-prose text-sm leading-relaxed text-[#07162C]/75 md:text-base">
              {t.intro}
            </p>

            <div className="mb-8 rounded-3xl border border-[#07162C]/10 bg-white p-6 sm:p-8">
              <h3 className="ohh-serif text-xl font-medium text-[#07162C] mb-4">
                {t.verifyTitle}
              </h3>
              <ul className="space-y-3">
                {t.verify.map((line, i) => (
                  <li key={i} className="flex gap-3 text-[#07162C]/80">
                    <Check
                      className="mt-1 h-4 w-4 shrink-0 text-[#996515]"
                      aria-hidden="true"
                    />
                    <span className="text-sm leading-relaxed">
                      {line}
                      {i === 2 && (
                        <>
                          {" "}
                          <a
                            href={VERIFY_PHONE.href}
                            className="font-bold text-[#07162C] underline underline-offset-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#07162C]"
                          >
                            {VERIFY_PHONE.label}
                          </a>
                        </>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={MAIN_PHONE.href}
                className="inline-flex items-center gap-2 rounded-full border border-[#07162C] bg-[#07162C] px-6 py-3.5 text-sm font-semibold text-[#E4B95A] transition-colors hover:bg-[#0A2140] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#07162C]"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                {t.call} {MAIN_PHONE.label}
              </a>
              <a
                href={t.contactHref}
                className="inline-flex items-center rounded-full border border-[#07162C]/20 bg-white px-6 py-3.5 text-sm font-semibold text-[#07162C] hover:border-[#07162C] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#07162C]"
              >
                {t.contact}
              </a>
            </div>
          </div>
        </div>

        {/* Right: payer panels */}
        <div className="space-y-4 lg:col-span-8">
          {/* Medicare */}
          <article className={card}>
            <PanelHead
              icon={ShieldCheck}
              title={t.medicare.title}
              lead={t.medicare.lead}
            />
            <p className="mb-4 text-sm sm:text-base leading-relaxed text-[#07162C]/75">
              {t.medicare.body}
            </p>
            <p className="rounded-2xl border-l-2 border-[#996515] bg-[#E9EAE5] p-4 text-xs sm:text-sm leading-relaxed text-[#07162C]/80">
              {t.medicare.note}
            </p>
          </article>

          {/* Texas Medicaid */}
          <article className={card}>
            <PanelHead
              icon={Award}
              title={t.medicaid.title}
              lead={t.medicaid.lead}
            />
            <p className="mb-6 text-sm sm:text-base leading-relaxed text-[#07162C]/75">
              {t.medicaid.body}
            </p>

            <div className="divide-y divide-[#07162C]/10 border-y border-[#07162C]/10">
              {t.medicaid.programs.map((p) => (
                <div key={p.name} className="py-5">
                  <div className="mb-1 flex flex-wrap items-baseline gap-x-3">
                    <h4 className="ohh-serif text-lg font-medium text-[#07162C]">
                      {p.name}
                    </h4>
                    <span className="text-xs text-[#07162C]/60">{p.who}</span>
                  </div>
                  {"detail" in p && p.detail && (
                    <p className="mb-3 text-xs sm:text-sm leading-relaxed text-[#07162C]/70">
                      {p.detail}
                    </p>
                  )}
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.14em] text-[#996515]">
                    {t.medicaid.plansLabel}
                  </p>
                  <ul className="flex flex-wrap gap-2">
                    {p.plans.map((plan) => (
                      <li key={plan} className={chip}>
                        {plan}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <div className="py-5">
                <h4 className="ohh-serif mb-1 text-lg font-medium text-[#07162C]">
                  {t.medicaid.traditionalName}
                </h4>
                <p className="text-xs sm:text-sm leading-relaxed text-[#07162C]/70">
                  {t.medicaid.traditional}
                </p>
              </div>
            </div>

            <p className="mt-5 text-xs sm:text-sm leading-relaxed text-[#07162C]/75">
              {t.medicaid.notSure}{" "}
              <a
                href={VERIFY_PHONE.href}
                className="font-bold text-[#07162C] underline underline-offset-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#07162C]"
              >
                {VERIFY_PHONE.label}
              </a>{" "}
              {t.medicaid.notSureEnd}
            </p>
          </article>

          {/* VA + Private pay side by side */}
          <div className="grid gap-4 md:grid-cols-2">
            <article className={card}>
              <PanelHead icon={FileCheck} title={t.va.title} lead={t.va.lead} />
              <p className="text-sm sm:text-base leading-relaxed text-[#07162C]/75">
                {t.va.body}
              </p>
            </article>
            <article className={card}>
              <PanelHead
                icon={WalletCards}
                title={t.pay.title}
                lead={t.pay.lead}
              />
              <p className="text-sm sm:text-base leading-relaxed text-[#07162C]/75">
                {t.pay.body}
              </p>
            </article>
          </div>

          <p className="max-w-prose text-xs sm:text-sm leading-relaxed text-[#07162C]/60 pt-2">
            {t.footer}
          </p>
        </div>
      </div>
    </section>
  );
}
