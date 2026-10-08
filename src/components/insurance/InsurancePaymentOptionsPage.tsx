"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/src/context/LanguageContext";
import { Phone, Check, ArrowRight } from "lucide-react";
import { siteConfig } from "@/src/constants/siteConfig";

const VERIFY_PHONE = { label: "(972) 848-9174", href: "tel:9728489174" };
const HERO_IMAGE = "/images/services/ot_a.svg";

type Program = { name: string; who: string; detail?: string; plans?: string[] };

const copy = {
  en: {
    title: "Insurance and payment options",
    intro: `${siteConfig.name} works with Medicare, Texas Medicaid, the VA, and private payment. Our team verifies your coverage and handles authorizations before care begins, so you don't have to figure this out on your own.`,
    call: "Call",
    contact: "Contact our team",
    handleTitle: "What we handle for you",
    handle: [
      "We check your insurance eligibility directly.",
      "Prior authorizations are handled before care begins.",
      "Not sure what you have? Call us and we'll check for you.",
    ],
    glanceTitle: "Four ways to pay for care",
    glance: [
      {
        id: "medicare",
        name: "Medicare",
        line: "Parts A and B, for skilled home health",
      },
      {
        id: "medicaid",
        name: "Texas Medicaid",
        line: "STAR+PLUS, STAR, STAR Kids, CHIP",
      },
      { id: "veterans", name: "Veterans", line: "VA Community Care" },
      {
        id: "private-pay",
        name: "Private pay",
        line: "Self-funded arrangements",
      },
    ],
    medicare: {
      title: "Medicare-certified home health",
      body: "We are a Medicare-certified home health agency. Medicare covers skilled care at home: nursing, physical therapy, occupational therapy, speech therapy, medical social services, and home health aide visits ordered as part of your plan of care.",
      callout:
        "You need both Medicare Part A and Part B. We are not able to accept Part A alone or Part B alone.",
      note: "Coverage is subject to eligibility and documented medical necessity, and your physician must order the services.",
    },
    medicaid: {
      title: "Texas Medicaid managed care and traditional programs",
      body: "We are licensed for all four Texas Medicaid managed care programs (STAR+PLUS, STAR, STAR Kids, and CHIP) as well as the traditional state programs. Whether we can serve you depends on your program, your plan, and your county, so the fastest way to find out is to call us and read the front of your card.",
      plansHeading: "Texas Medicaid health plans we accept",
      programs: [
        {
          name: "STAR+PLUS",
          who: "Adults 65 and older, and adults with disabilities",
          detail:
            "Covers long-term services and supports at home. Through it we provide personal attendant services, home health, and Community First Choice. Your plan's service coordinator authorizes the hours.",
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
            "Covers in-home attendant care, private duty nursing, and respite for children with disabilities and complex medical needs.",
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
      ] as Program[],
      traditionalTitle: "Traditional Texas Medicaid",
      traditional:
        "We also serve members under the HHSC-administered programs, including Primary Home Care and Community Attendant Services: attendant care for people who need help with daily activities and who are not enrolled in managed care.",
      notSure: "Not sure which program or plan you're in? Call",
      notSureEnd:
        "and read us what's on the front of your card. We will tell you in one call whether we can serve you.",
    },
    va: {
      title: "VA Community Care",
      body: "We serve veterans with authorized home care through VA Community Care. A VA referral and authorization must be in place before services begin. Call us and we can help you understand what's needed.",
    },
    pay: {
      title: "Private payment arrangements",
      body: "If you don't have coverage, or you want services beyond what your plan authorizes, we offer private payment arrangements. Rates and availability are discussed during your consultation.",
    },
    footer: [
      "Coverage and authorization vary by plan, product, eligibility, service, and location.",
      "Acceptance of a plan does not guarantee coverage of a specific service. We verify benefits and obtain authorization before care begins.",
    ],
  },
  es: {
    title: "Opciones de seguro y pago",
    intro: `${siteConfig.name} trabaja con Medicare, Medicaid de Texas, el VA y pago privado. Nuestro equipo verifica su cobertura y gestiona las autorizaciones antes de comenzar la atención, para que usted no tenga que resolverlo por su cuenta.`,
    call: "Llamar",
    contact: "Contacte a nuestro equipo",
    handleTitle: "Lo que gestionamos por usted",
    handle: [
      "Verificamos directamente su elegibilidad de seguro.",
      "Gestionamos las autorizaciones previas antes de comenzar la atención.",
      "¿No sabe qué cobertura tiene? Llámenos y la revisamos por usted.",
    ],
    glanceTitle: "Cuatro formas de pagar la atención",
    glance: [
      {
        id: "medicare",
        name: "Medicare",
        line: "Partes A y B, para salud en el hogar especializada",
      },
      {
        id: "medicaid",
        name: "Medicaid de Texas",
        line: "STAR+PLUS, STAR, STAR Kids, CHIP",
      },
      { id: "veterans", name: "Veteranos", line: "VA Community Care" },
      {
        id: "private-pay",
        name: "Pago privado",
        line: "Arreglos de pago propio",
      },
    ],
    medicare: {
      title: "Salud en el hogar certificada por Medicare",
      body: "Somos una agencia de salud en el hogar certificada por Medicare. Medicare cubre la atención especializada en el hogar: enfermería, terapia física, terapia ocupacional, terapia del habla, servicios sociales médicos y visitas de auxiliares de salud en el hogar indicadas en su plan de atención.",
      callout:
        "Necesita tanto la Parte A como la Parte B de Medicare. No podemos aceptar solo la Parte A ni solo la Parte B.",
      note: "La cobertura depende de la elegibilidad y de la necesidad médica documentada, y su médico debe ordenar los servicios.",
    },
    medicaid: {
      title:
        "Atención administrada y programas tradicionales de Medicaid de Texas",
      body: "Tenemos licencia para los cuatro programas de atención administrada de Medicaid de Texas (STAR+PLUS, STAR, STAR Kids y CHIP) y para los programas estatales tradicionales. Que podamos atenderle depende de su programa, su plan y su condado, así que lo más rápido es llamarnos y leernos el frente de su tarjeta.",
      plansHeading: "Planes de salud de Medicaid de Texas que aceptamos",
      programs: [
        {
          name: "STAR+PLUS",
          who: "Adultos de 65 años o más y adultos con discapacidades",
          detail:
            "Cubre servicios y apoyos a largo plazo en el hogar. A través de él ofrecemos servicios de asistente personal, salud en el hogar y Community First Choice. El coordinador de servicios de su plan autoriza las horas.",
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
            "Cubre atención de asistente en el hogar, enfermería de turno privado y cuidado de relevo para niños con discapacidades y necesidades médicas complejas.",
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
      ] as Program[],
      traditionalTitle: "Medicaid tradicional de Texas",
      traditional:
        "También atendemos a miembros de los programas administrados por HHSC, incluidos Primary Home Care y Community Attendant Services: atención de asistente para personas que necesitan ayuda con las actividades diarias y que no están inscritas en atención administrada.",
      notSure: "¿No sabe en qué programa o plan está? Llame al",
      notSureEnd:
        "y léanos lo que dice el frente de su tarjeta. En una sola llamada le diremos si podemos atenderle.",
    },
    va: {
      title: "VA Community Care",
      body: "Atendemos a veteranos con atención domiciliaria autorizada a través de VA Community Care. Debe existir una remisión y autorización del VA antes de comenzar los servicios. Llámenos y le ayudamos a entender qué se necesita.",
    },
    pay: {
      title: "Arreglos de pago privado",
      body: "Si no tiene cobertura, o desea servicios adicionales a los que autoriza su plan, ofrecemos arreglos de pago privado. Las tarifas y la disponibilidad se hablan durante su consulta.",
    },
    footer: [
      "La cobertura y la autorización varían según el plan, el producto, la elegibilidad, el servicio y la ubicación.",
      "Aceptar un plan no garantiza la cobertura de un servicio específico. Verificamos los beneficios y obtenemos la autorización antes de comenzar la atención.",
    ],
  },
};

/* Clean layout: soft gray page, pill labels with a number chip, large light
   centered headings, rounded bento cards. navy #07162C, gold #E4B95A,
   gold-d #996515 (small text on light), card #E9EAE5, gold-tint #F6EBD2.
   Flat: 1px borders only, fully rounded buttons, no shadows, no hover
   effects, no transitions. Focus rings are kept for keyboard users. */
const CONTAINER = "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8";
const FOCUS_GOLD =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E4B95A]";
const FOCUS_NAVY =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#07162C]";
const HEADING =
  "ohh-serif font-light leading-tight tracking-tight text-[#07162C]";
const BTN =
  "inline-flex items-center justify-center gap-2 rounded-full border px-7 py-3.5 text-sm font-semibold";
const BTN_GOLD = `${BTN} border-[#E4B95A] bg-[#E4B95A] text-[#07162C] ${FOCUS_GOLD}`;
const BTN_GOLD_OUTLINE = `${BTN} border-[#E4B95A]/60 text-[#E4B95A] ${FOCUS_GOLD}`;
const BTN_NAVY = `${BTN} border-[#07162C] bg-[#07162C] text-[#E4B95A] ${FOCUS_NAVY}`;
const CARD = "rounded-3xl border border-[#07162C]/10 bg-[#E9EAE5]";
const PHONE_LINK = `font-semibold text-[#E4B95A] underline decoration-[#E4B95A]/60 underline-offset-4 ${FOCUS_GOLD}`;
const PHONE_LINK_ON_GOLD = `font-semibold text-[#07162C] underline decoration-[#07162C]/60 underline-offset-4 ${FOCUS_NAVY}`;

function Pill({ n, label }: { n?: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[#07162C]/10 bg-[#E9EAE5] py-1.5 pl-1.5 pr-4 text-xs font-medium text-[#07162C]">
      {n ? (
        <span
          aria-hidden="true"
          className="flex h-6 w-6 items-center justify-center rounded-full bg-[#07162C] text-[10px] font-semibold text-[#E4B95A]"
        >
          {n}
        </span>
      ) : (
        <span
          aria-hidden="true"
          className="ml-2.5 h-1.5 w-1.5 rounded-full bg-[#996515]"
        />
      )}
      {label}
    </span>
  );
}

function SectionHead({
  n,
  label,
  title,
  body,
}: {
  n: string;
  label: string;
  title: string;
  body?: string;
}) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <Pill n={n} label={label} />
      <h2 className={`${HEADING} mt-5 text-3xl sm:text-4xl lg:text-5xl`}>
        {title}
      </h2>
      {body && (
        <p className="mx-auto mt-4 max-w-2xl text-base text-[#07162C]/70">
          {body}
        </p>
      )}
    </div>
  );
}

export default function InsurancePaymentOptionsPage() {
  const { language } = useLanguage();
  const t = copy[language === "es" ? "es" : "en"];

  return (
    <main className="bg-[#F4F4F2] text-base leading-relaxed text-[#07162C]/80">
      {/* ===== Header: centered ===== */}
      <section className="px-4 pb-10 pt-14 text-center sm:px-6 lg:pb-14 lg:pt-20">
        <div className="mx-auto max-w-3xl">
          <Pill label={siteConfig.name} />
          <h1 className={`${HEADING} mt-6 text-4xl sm:text-5xl lg:text-6xl`}>
            {t.title}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base text-[#07162C]/70 sm:text-lg">
            {t.intro}
          </p>
        </div>
      </section>

      {/* ===== Bento: image card + four jump cards ===== */}
      <section aria-labelledby="glance" className="pb-16 lg:pb-24">
        <div className={CONTAINER}>
          <h2 id="glance" className="sr-only">
            {t.glanceTitle}
          </h2>
          <div className="grid gap-4 lg:grid-cols-12">
            {/* Large card: ot_a.svg background under a solid navy overlay */}
            <div className="relative overflow-hidden rounded-3xl bg-[#07162C] text-white lg:col-span-5 lg:row-span-1">
              <img
                src={HERO_IMAGE}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div
                className="absolute inset-0 bg-[#07162C]/85"
                aria-hidden="true"
              />
              <div className="relative flex h-full flex-col justify-between gap-8 p-7 sm:p-9">
                <div>
                  <h3 className="ohh-serif text-2xl font-light text-[#E4B95A]">
                    {t.handleTitle}
                  </h3>
                  <ul className="mt-5 space-y-4">
                    {t.handle.map((line, i) => (
                      <li key={i} className="flex gap-3">
                        <Check
                          size={18}
                          className="mt-0.5 shrink-0 text-[#E4B95A]"
                          aria-hidden="true"
                        />
                        <span>
                          {line}
                          {i === 2 && (
                            <>
                              {" "}
                              <a
                                href={VERIFY_PHONE.href}
                                className={PHONE_LINK}
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
                <div className="flex flex-col gap-3 sm:flex-row">
                  <a
                    href={`tel:${siteConfig.contact.phoneTel}`}
                    className={BTN_GOLD}
                  >
                    <Phone size={16} aria-hidden="true" />
                    {t.call} {siteConfig.contact.phone}
                  </a>
                  <Link href="/contact" className={BTN_GOLD_OUTLINE}>
                    {t.contact}
                  </Link>
                </div>
              </div>
            </div>

            {/* Four payer cards, each a jump link */}
            <ol className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
              {t.glance.map((g, i) => (
                <li key={g.id}>
                  <a
                    href={`#${g.id}`}
                    className={`flex h-full min-h-[190px] flex-col justify-between p-6 ${CARD} ${FOCUS_NAVY}`}
                  >
                    <span className="flex items-start justify-between">
                      <span
                        aria-hidden="true"
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-[#07162C] text-xs font-semibold text-[#E4B95A]"
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        aria-hidden="true"
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-[#07162C]/20 text-[#07162C]"
                      >
                        <ArrowRight size={16} />
                      </span>
                    </span>
                    <span>
                      <span className="ohh-serif block text-2xl font-normal text-[#07162C]">
                        {g.name}
                      </span>
                      <span className="mt-1 block text-sm text-[#07162C]/70">
                        {g.line}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ===== Medicare ===== */}
      <section
        id="medicare"
        className="scroll-mt-20 border-t border-[#07162C]/10 py-16 lg:py-24"
      >
        <div className={CONTAINER}>
          <SectionHead
            n="01"
            label={t.glance[0].name}
            title={t.medicare.title}
            body={t.medicare.body}
          />
          <div className="grid gap-4 md:grid-cols-12">
            <div className="rounded-3xl bg-[#07162C] p-7 sm:p-10 md:col-span-7">
              <p className="ohh-serif text-2xl font-light leading-snug text-[#E4B95A] sm:text-3xl">
                {t.medicare.callout}
              </p>
            </div>
            <div className={`flex items-end p-7 sm:p-8 md:col-span-5 ${CARD}`}>
              <p className="text-sm text-[#07162C]/75">{t.medicare.note}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Texas Medicaid ===== */}
      <section
        id="medicaid"
        className="scroll-mt-20 border-t border-[#07162C]/10 py-16 lg:py-24"
      >
        <div className={CONTAINER}>
          <SectionHead
            n="02"
            label={t.glance[1].name}
            title={t.medicaid.title}
            body={t.medicaid.body}
          />

          <h3 className="mb-4 text-center text-sm font-semibold text-[#996515]">
            {t.medicaid.plansHeading}
          </h3>

          <div className="grid gap-4 md:grid-cols-2">
            {t.medicaid.programs.map((p) => (
              <article
                key={p.name}
                className={`flex flex-col p-6 sm:p-8 ${CARD}`}
              >
                <h4 className="ohh-serif text-2xl font-normal text-[#07162C]">
                  {p.name}
                </h4>
                <p className="mt-1 text-sm font-semibold text-[#996515]">
                  {p.who}
                </p>
                {p.detail && (
                  <p className="mt-4 text-[0.97rem] text-[#07162C]/75">
                    {p.detail}
                  </p>
                )}
                {p.plans && (
                  <ul className="mt-auto flex flex-wrap gap-2 border-t border-[#07162C]/10 pt-5">
                    {p.plans.map((plan) => (
                      <li
                        key={plan}
                        className="rounded-full border border-[#07162C]/20 bg-white px-4 py-1.5 text-sm font-medium text-[#07162C]"
                      >
                        {plan}
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>

          <div className={`mt-4 grid gap-4 p-6 sm:p-8 lg:grid-cols-12 ${CARD}`}>
            <h4 className="ohh-serif text-2xl font-normal text-[#07162C] lg:col-span-4">
              {t.medicaid.traditionalTitle}
            </h4>
            <p className="max-w-[70ch] text-[#07162C]/75 lg:col-span-8">
              {t.medicaid.traditional}
            </p>
          </div>

          <div className="mt-4 flex flex-col items-center gap-6 rounded-3xl bg-[#E4B95A] px-6 py-10 text-center text-[#07162C] sm:px-12">
            <p className="ohh-serif max-w-[52ch] text-xl font-normal leading-snug sm:text-2xl">
              {t.medicaid.notSure}{" "}
              <a href={VERIFY_PHONE.href} className={PHONE_LINK_ON_GOLD}>
                {VERIFY_PHONE.label}
              </a>{" "}
              {t.medicaid.notSureEnd}
            </p>
            <a href={VERIFY_PHONE.href} className={BTN_NAVY}>
              <Phone size={16} aria-hidden="true" />
              {t.call} {VERIFY_PHONE.label}
            </a>
          </div>
        </div>
      </section>

      {/* ===== Veterans + Private pay ===== */}
      <section className="border-t border-[#07162C]/10 py-16 lg:py-24">
        <div className={CONTAINER}>
          <div className="grid gap-4 md:grid-cols-2">
            <section
              id="veterans"
              className={`scroll-mt-20 p-7 sm:p-10 ${CARD}`}
            >
              <Pill n="03" label={t.glance[2].name} />
              <h2 className={`${HEADING} mt-6 text-3xl`}>{t.va.title}</h2>
              <p className="mt-4 max-w-[48ch] text-[#07162C]/75">{t.va.body}</p>
            </section>
            <section
              id="private-pay"
              className={`scroll-mt-20 p-7 sm:p-10 ${CARD}`}
            >
              <Pill n="04" label={t.glance[3].name} />
              <h2 className={`${HEADING} mt-6 text-3xl`}>{t.pay.title}</h2>
              <p className="mt-4 max-w-[48ch] text-[#07162C]/75">
                {t.pay.body}
              </p>
            </section>
          </div>

          <div className="mx-auto mt-12 max-w-[70ch] space-y-2 text-center text-sm text-[#07162C]/60">
            {t.footer.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
