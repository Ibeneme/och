"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/src/context/LanguageContext";
import {
  Phone,
  Check,
  ArrowRight,
  HeartPulse,
  Users,
  Flag,
  Wallet,
  Info,
} from "lucide-react";
import { siteConfig } from "@/src/constants/siteConfig";

/*
  Design notes
  - Finer layout: compact hero, hairline dividers, smaller icon badges, tighter rhythm.
  - Deep spruce hero with a marigold call button (the one thing we want people to do).
  - Medicaid programs are one ruled list (name + who it's for on the left, details and
    plans on the right), so people can scan for their own program.
*/

const VERIFY_PHONE = { label: "(972) 848-9174", href: "tel:9728489174" };

type Program = { name: string; who: string; detail?: string; plans?: string[] };

const copy = {
  en: {
    title: "Insurance and payment options",
    intro: `${siteConfig.name} works with Medicare, Texas Medicaid, the VA, and private payment. Our team verifies your coverage and handles authorizations before care begins, so you don't have to figure this out on your own.`,
    call: "Call",
    contact: "Contact our team",
    onPage: "On this page",
    handleTitle: "What we handle for you",
    handle: [
      "We check your insurance eligibility directly.",
      "Prior authorizations are handled before care begins.",
      "Not sure what you have? Call us and we'll check for you.",
    ],
    medicare: {
      id: "medicare",
      nav: "Medicare",
      title: "Medicare-certified home health",
      body: "We are a Medicare-certified home health agency. Medicare covers skilled care at home: nursing, physical therapy, occupational therapy, speech therapy, medical social services, and home health aide visits ordered as part of your plan of care.",
      callout:
        "You need both Medicare Part A and Part B. We are not able to accept Part A alone or Part B alone.",
      note: "Coverage is subject to eligibility and documented medical necessity, and your physician must order the services.",
    },
    medicaid: {
      id: "medicaid",
      nav: "Texas Medicaid",
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
        {
          name: "Traditional Texas Medicaid",
          who: "Not enrolled in managed care",
          detail:
            "We also serve members under the HHSC-administered programs, including Primary Home Care and Community Attendant Services: attendant care for people who need help with daily activities.",
        },
      ] as Program[],
      notSure: "Not sure which program or plan you're in? Call",
      notSureEnd:
        "and read us what's on the front of your card. We will tell you in one call whether we can serve you.",
    },
    va: {
      id: "veterans",
      nav: "Veterans",
      title: "VA Community Care",
      body: "We serve veterans with authorized home care through VA Community Care. A VA referral and authorization must be in place before services begin. Call us and we can help you understand what's needed.",
    },
    pay: {
      id: "private-pay",
      nav: "Private pay",
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
    onPage: "En esta página",
    handleTitle: "Lo que gestionamos por usted",
    handle: [
      "Verificamos directamente su elegibilidad de seguro.",
      "Gestionamos las autorizaciones previas antes de comenzar la atención.",
      "¿No sabe qué cobertura tiene? Llámenos y la revisamos por usted.",
    ],
    medicare: {
      id: "medicare",
      nav: "Medicare",
      title: "Salud en el hogar certificada por Medicare",
      body: "Somos una agencia de salud en el hogar certificada por Medicare. Medicare cubre la atención especializada en el hogar: enfermería, terapia física, terapia ocupacional, terapia del habla, servicios sociales médicos y visitas de auxiliares de salud en el hogar indicadas en su plan de atención.",
      callout:
        "Necesita tanto la Parte A como la Parte B de Medicare. No podemos aceptar solo la Parte A ni solo la Parte B.",
      note: "La cobertura depende de la elegibilidad y de la necesidad médica documentada, y su médico debe ordenar los servicios.",
    },
    medicaid: {
      id: "medicaid",
      nav: "Medicaid de Texas",
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
        {
          name: "Medicaid tradicional de Texas",
          who: "No inscritos en atención administrada",
          detail:
            "También atendemos a miembros de los programas administrados por HHSC, incluidos Primary Home Care y Community Attendant Services: atención de asistente para personas que necesitan ayuda con las actividades diarias.",
        },
      ] as Program[],
      notSure: "¿No sabe en qué programa o plan está? Llame al",
      notSureEnd:
        "y léanos lo que dice el frente de su tarjeta. En una sola llamada le diremos si podemos atenderle.",
    },
    va: {
      id: "veterans",
      nav: "Veteranos",
      title: "VA Community Care",
      body: "Atendemos a veteranos con atención domiciliaria autorizada a través de VA Community Care. Debe existir una remisión y autorización del VA antes de comenzar los servicios. Llámenos y le ayudamos a entender qué se necesita.",
    },
    pay: {
      id: "private-pay",
      nav: "Pago privado",
      title: "Arreglos de pago privado",
      body: "Si no tiene cobertura, o desea servicios adicionales a los que autoriza su plan, ofrecemos arreglos de pago privado. Las tarifas y la disponibilidad se hablan durante su consulta.",
    },
    footer: [
      "La cobertura y la autorización varían según el plan, el producto, la elegibilidad, el servicio y la ubicación.",
      "Aceptar un plan no garantiza la cobertura de un servicio específico. Verificamos los beneficios y obtenemos la autorización antes de comenzar la atención.",
    ],
  },
};

/* ---------- shared style tokens ---------- */
const HEADING = "text-[#17302F]";
const FOCUS =
  "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#F2B544]/70";
const LINK_PHONE = `font-medium text-[#0E5A5A] underline underline-offset-4 hover:text-[#0A4545] ${FOCUS} rounded-sm`;
const SECTION =
  "scroll-mt-8 border-t border-[#DDE6E3] py-10 first:border-t-0 first:pt-0";

function IconBadge({ children }: { children: React.ReactNode }) {
  return (
    <div
      aria-hidden="true"
      className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E4EFED] text-[#0E5A5A] sm:flex"
    >
      {children}
    </div>
  );
}

export default function InsurancePaymentOptionsPage() {
  const { language } = useLanguage();
  const t = copy[language === "es" ? "es" : "en"];
  const nav = [t.medicare, t.medicaid, t.va, t.pay];

  return (
    <main className="bg-[#F6F8F7] text-base leading-relaxed text-[#2B4240] antialiased">
      {/* ===== Hero ===== */}
      <section className="bg-[#0E3F3F] text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-10 sm:px-8 lg:grid-cols-[1.4fr_0.6fr] lg:gap-14 lg:py-14">
          <div>
            <h1 className="text-3xl font-semibold leading-[1.15] tracking-tight sm:text-4xl">
              {t.title}
            </h1>
            <p className="mt-4 max-w-[60ch] text-[#D7E8E5]">{t.intro}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={`tel:${siteConfig.contact.phoneTel}`}
                className={`inline-flex items-center gap-2 rounded-full bg-[#F2B544] px-5 py-3 text-base font-semibold text-[#17302F] transition-colors hover:bg-[#F7C766] ${FOCUS}`}
              >
                <Phone size={18} aria-hidden="true" />
                {t.call} {siteConfig.contact.phone}
              </a>
              <Link
                href="/contact"
                className={`inline-flex items-center gap-2 rounded-full border border-white/40 px-5 py-3 text-base font-semibold text-white transition-colors hover:border-white hover:bg-white/10 ${FOCUS}`}
              >
                {t.contact}
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="mx-auto w-full max-w-[16rem] lg:max-w-none">
            <div className="rounded-2xl bg-[#E4EFED] p-4">
              <img
                src="/images/services/ot_a.svg"
                alt="Insurance verification and care consultation"
                className="mx-auto h-auto w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== Mobile jump links (full width bar under hero) ===== */}
      <nav
        aria-label={t.onPage}
        className="border-b border-[#DDE6E3] bg-white lg:hidden"
      >
        <ul className="mx-auto flex max-w-6xl gap-2 overflow-x-auto px-5 py-3 sm:px-8">
          {nav.map((s) => (
            <li key={s.id} className="shrink-0">
              <a
                href={`#${s.id}`}
                className={`block rounded-full border border-[#B9CCC8] px-3.5 py-1.5 text-sm font-medium text-[#0E5A5A] transition-colors hover:bg-[#E4EFED] ${FOCUS}`}
              >
                {s.nav}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* ===== Body ===== */}
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-10 sm:px-8 lg:grid-cols-[14.5rem_1fr] lg:gap-14 lg:py-14">
        <aside>
          <div className="space-y-6 lg:sticky lg:top-8">
            {/* Desktop Nav */}
            <nav aria-label={t.onPage} className="hidden lg:block">
              <p className={`${HEADING} mb-2 text-base font-semibold`}>
                {t.onPage}
              </p>
              <ul className="border-l border-[#D3DEDB]">
                {nav.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className={`-ml-px block border-l border-transparent py-1.5 pl-4 text-[0.95rem] font-medium text-[#4A5F5D] transition-colors hover:border-[#0E5A5A] hover:text-[#0E5A5A] ${FOCUS}`}
                    >
                      {s.nav}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* What we handle */}
            <div className="rounded-2xl border border-[#D3DEDB] bg-white p-5">
              <h2 className={`${HEADING} text-base font-semibold leading-snug`}>
                {t.handleTitle}
              </h2>
              <ul className="mt-3 space-y-3 text-[0.95rem]">
                {t.handle.map((line, i) => (
                  <li key={i} className="flex gap-2.5">
                    <span
                      aria-hidden="true"
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E4EFED] text-[#0E5A5A]"
                    >
                      <Check size={12} strokeWidth={3} />
                    </span>
                    <span className="leading-snug">
                      {line}
                      {i === 2 && (
                        <>
                          {" "}
                          <a href={VERIFY_PHONE.href} className={LINK_PHONE}>
                            {VERIFY_PHONE.label}
                          </a>
                        </>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>

        <div className="min-w-0">
          {/* Medicare */}
          <section id={t.medicare.id} className={SECTION}>
            <div className="flex gap-4">
              <IconBadge>
                <HeartPulse size={20} />
              </IconBadge>
              <div className="min-w-0 max-w-[68ch]">
                <h2
                  className={`${HEADING} text-xl font-semibold leading-tight sm:text-2xl`}
                >
                  {t.medicare.title}
                </h2>
                <p className="mt-3">{t.medicare.body}</p>
                <p className="mt-5 flex gap-3 rounded-xl border-l-4 border-[#D9972B] bg-[#FFF1CF] p-4 font-medium leading-snug text-[#4A3100]">
                  <Info
                    size={20}
                    className="mt-0.5 shrink-0"
                    aria-hidden="true"
                  />
                  <span>{t.medicare.callout}</span>
                </p>
                <p className="mt-4 text-sm text-[#4A5F5D]">{t.medicare.note}</p>
              </div>
            </div>
          </section>

          {/* Texas Medicaid */}
          <section id={t.medicaid.id} className={SECTION}>
            <div className="flex gap-4">
              <IconBadge>
                <Users size={20} />
              </IconBadge>
              <div className="min-w-0 flex-1">
                <h2
                  className={`${HEADING} max-w-[30ch] text-xl font-semibold leading-tight sm:text-2xl`}
                >
                  {t.medicaid.title}
                </h2>
                <p className="mt-3 max-w-[68ch]">{t.medicaid.body}</p>

                <h3 className={`${HEADING} mb-3 mt-8 text-base font-semibold`}>
                  {t.medicaid.plansHeading}
                </h3>
                <div className="divide-y divide-[#DDE6E3] overflow-hidden rounded-2xl border border-[#D3DEDB] bg-white">
                  {t.medicaid.programs.map((p) => (
                    <div
                      key={p.name}
                      className="grid gap-3 px-5 py-5 md:grid-cols-[12rem_1fr] md:gap-8"
                    >
                      <div>
                        <h4
                          className={`${HEADING} text-lg font-semibold leading-tight`}
                        >
                          {p.name}
                        </h4>
                        <p className="mt-1 text-sm leading-snug text-[#4A5F5D]">
                          {p.who}
                        </p>
                      </div>
                      <div>
                        {p.detail && (
                          <p className="max-w-[62ch] text-[0.95rem]">
                            {p.detail}
                          </p>
                        )}
                        {p.plans && (
                          <ul
                            className={`flex flex-wrap gap-1.5 ${
                              p.detail ? "mt-3" : ""
                            }`}
                          >
                            {p.plans.map((plan) => (
                              <li
                                key={plan}
                                className="rounded-full bg-[#E4EFED] px-3 py-1 text-sm font-medium text-[#0E4A4A]"
                              >
                                {plan}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <p className="mt-5 max-w-[68ch] rounded-xl bg-[#E4EFED] p-4 text-[0.95rem]">
                  {t.medicaid.notSure}{" "}
                  <a href={VERIFY_PHONE.href} className={LINK_PHONE}>
                    {VERIFY_PHONE.label}
                  </a>{" "}
                  {t.medicaid.notSureEnd}
                </p>
              </div>
            </div>
          </section>

          {/* Veterans */}
          <section id={t.va.id} className={SECTION}>
            <div className="flex gap-4">
              <IconBadge>
                <Flag size={20} />
              </IconBadge>
              <div className="min-w-0 max-w-[68ch]">
                <h2
                  className={`${HEADING} text-xl font-semibold leading-tight sm:text-2xl`}
                >
                  {t.va.title}
                </h2>
                <p className="mt-3">{t.va.body}</p>
              </div>
            </div>
          </section>

          {/* Private pay */}
          <section id={t.pay.id} className={SECTION}>
            <div className="flex gap-4">
              <IconBadge>
                <Wallet size={20} />
              </IconBadge>
              <div className="min-w-0 max-w-[68ch]">
                <h2
                  className={`${HEADING} text-xl font-semibold leading-tight sm:text-2xl`}
                >
                  {t.pay.title}
                </h2>
                <p className="mt-3">{t.pay.body}</p>
              </div>
            </div>
          </section>

          <div className="space-y-1.5 border-t border-[#DDE6E3] pt-6 text-sm text-[#4A5F5D]">
            {t.footer.map((line) => (
              <p key={line} className="max-w-[72ch]">
                {line}
              </p>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
