"use client";

import Link from "@/src/components/LocaleLink";
import { ArrowRight, Building2, CheckCircle2, Clock, MapPin, Phone } from "lucide-react";
import { useLanguage } from "@/src/context/LanguageContext";
import { siteConfig } from "@/src/constants/siteConfig";
import {
  SERVICE_AREA_PATH,
  cityNameFromSlug,
  cityPageHref,
  countyOfCity,
  type CitySlug,
} from "@/src/constants/serviceArea";
import { CITY_CONTENT } from "@/src/content/cityPages";
import { PAGES, type PageKey } from "@/src/seo/pages";
import insurance from "@/src/locales/insurance/insurance-payment.json";
import ZipConfirmation from "./ZipConfirmation";
import RequestCareEmbed from "@/src/components/RequestCareEmbed";

const wrap = "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8";
const heading = "ohh-serif font-light leading-tight tracking-tight text-[#07162C]";
const card = "rounded-3xl border border-[#07162C]/10 bg-white p-6 sm:p-8";
const eyebrow = "text-xs font-bold uppercase tracking-[0.18em] text-[#996515]";

/** Every service page, labelled from the SEO registry so titles stay in sync. */
const SERVICE_KEYS: PageKey[] = [
  "skilledNursing", "physicalTherapy", "occupationalTherapy", "speechTherapy",
  "homeHealthAide", "medicalSocial", "woundCare", "postSurgical",
  "chronicDisease", "medicationManagement", "fallPrevention", "pediatric",
  "adultsWithDisabilities", "veteranCare", "companionCare", "respiteCare",
  "dailyLifestyle", "personalAttendant", "getPaidToCare",
];

const INSURANCE_KEYS = [
  "medicare", "medicaid", "molina", "superior", "wellpoint", "aetna", "va", "private",
] as const;

type Dict = Record<string, { en: string; es: string }>;
const ins = insurance as unknown as Dict;

const COPY = {
  en: {
    badge: (c: string) => `${c} County · Service area`,
    h1: (c: string) => `Home Health Care in ${c}, Texas`,
    request: "Request care",
    refer: "Refer a patient",
    driveTitle: "From our Grand Prairie office",
    drive: (a: number, b: number) =>
      `About ${a}–${b} minutes by car, depending on traffic`,
    nearbyTitle: "Nearby communities we also serve",
    hospitalsTitle: (c: string) => `Hospitals in and around ${c}`,
    hospitalsNote:
      "Listed for local context. Wherever you or your family member was treated, we coordinate with the discharge team and your physician.",
    servicesTag: "Services",
    servicesTitle: (c: string) => `Services available in ${c}`,
    servicesDesc:
      "Skilled clinical care and in-home support, ordered by your physician or arranged by your family.",
    insuranceTag: "Coverage",
    insuranceTitle: "Insurance and payment",
    insuranceDesc:
      "We work with Medicare, Texas Medicaid, several managed-care plans, VA Community Care, and private pay. Coverage depends on your plan and eligibility, so we verify benefits before care begins.",
    insuranceLink: "See insurance & payment options",
    ctaTitle: (c: string) => `Ready to start care in ${c}?`,
    ctaDesc:
      "Tell us about your situation and our intake team will follow up, or send a referral if you are a physician, hospital, or care partner.",
    backTitle: "See every community we serve",
    backLink: "All 8 counties we serve",
  },
  es: {
    badge: (c: string) => `Condado de ${c} · Área de servicio`,
    h1: (c: string) => `Atención médica en el hogar en ${c}, Texas`,
    request: "Solicitar atención",
    refer: "Referir a un paciente",
    driveTitle: "Desde nuestra oficina de Grand Prairie",
    drive: (a: number, b: number) =>
      `Aproximadamente ${a}–${b} minutos en auto, según el tráfico`,
    nearbyTitle: "Comunidades cercanas que también atendemos",
    hospitalsTitle: (c: string) => `Hospitales en ${c} y sus alrededores`,
    hospitalsNote:
      "Se mencionan como contexto local. Sin importar dónde lo hayan atendido a usted o a su familiar, coordinamos con el equipo de alta y con su médico.",
    servicesTag: "Servicios",
    servicesTitle: (c: string) => `Servicios disponibles en ${c}`,
    servicesDesc:
      "Atención clínica especializada y apoyo en el hogar, ordenados por su médico o gestionados por su familia.",
    insuranceTag: "Cobertura",
    insuranceTitle: "Seguros y formas de pago",
    insuranceDesc:
      "Trabajamos con Medicare, Medicaid de Texas, varios planes de atención administrada, VA Community Care y pago privado. La cobertura depende de su plan y elegibilidad, por lo que verificamos los beneficios antes de iniciar la atención.",
    insuranceLink: "Ver seguros y opciones de pago",
    ctaTitle: (c: string) => `¿Listo para comenzar la atención en ${c}?`,
    ctaDesc:
      "Cuéntenos su situación y nuestro equipo de admisión se comunicará con usted, o envíe un referido si es médico, hospital o socio de atención.",
    backTitle: "Vea todas las comunidades que atendemos",
    backLink: "Los 8 condados que atendemos",
  },
} as const;

export default function CityPage({ slug }: { slug: CitySlug }) {
  const { language } = useLanguage();
  const lang = language === "es" ? "es" : "en";
  const t = COPY[lang];
  const { phone, phoneTel } = siteConfig.contact;

  const city = cityNameFromSlug(slug);
  const county = countyOfCity(city);
  const data = CITY_CONTENT[slug];
  const copy = data[lang];

  return (
    <div className="bg-[#F4F4F2] pb-24 pt-14 text-[#07162C] sm:pt-20 lg:pb-28">
      {/* Hero */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className={wrap}>
          <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="space-y-6 lg:col-span-7">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#07162C]/10 bg-[#E9EAE5] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#07162C]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#996515]" />
                {t.badge(county.name)}
              </span>
              <h1 className={`${heading} text-4xl sm:text-5xl lg:text-6xl`}>{t.h1(city)}</h1>
              <p className="max-w-2xl text-base leading-relaxed text-[#07162C]/80 sm:text-lg">
                {copy.p1}
              </p>
              <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:flex-wrap">
                <Link
                  href="/request-care"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#07162C] bg-[#07162C] px-7 py-3.5 text-sm font-semibold text-[#E4B95A] transition-colors hover:bg-[#0A2140]"
                >
                  <span>{t.request}</span>
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
                <Link
                  href="/referrals"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#07162C]/20 bg-white px-7 py-3.5 text-sm font-semibold text-[#07162C] transition-colors hover:border-[#07162C]"
                >
                  <span>{t.refer}</span>
                </Link>
                <a
                  href={`tel:${phoneTel}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#07162C]/20 bg-white px-7 py-3.5 text-sm font-semibold text-[#07162C] transition-colors hover:border-[#07162C]"
                >
                  <Phone size={16} aria-hidden="true" />
                  <span>{phone}</span>
                </a>
              </div>
              <ZipConfirmation />
            </div>

            <aside className={`${card} space-y-6 lg:col-span-5`}>
              <div className="flex items-start gap-3">
                <Clock size={18} className="mt-0.5 shrink-0 text-[#996515]" aria-hidden="true" />
                <div>
                  <h2 className="text-sm font-bold">{t.driveTitle}</h2>
                  <p className="mt-1 text-sm text-[#07162C]/75">
                    {t.drive(data.driveMin[0], data.driveMin[1])}
                  </p>
                  <p className="mt-1 text-xs text-[#07162C]/55">{siteConfig.address.full}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-[#996515]" aria-hidden="true" />
                <div>
                  <h2 className="text-sm font-bold">{t.nearbyTitle}</h2>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {data.neighbors.map((n) => {
                      const href = cityPageHref(n);
                      return (
                        <li key={n}>
                          {href ? (
                            <Link
                              href={href}
                              className="inline-flex rounded-full border border-[#07162C] bg-[#07162C] px-3 py-1 text-xs font-semibold text-[#E4B95A] hover:bg-[#0A2140]"
                            >
                              {n}
                            </Link>
                          ) : (
                            <span className="inline-flex rounded-full border border-[#07162C]/10 bg-[#F4F4F2] px-3 py-1 text-xs font-semibold text-[#07162C]/80">
                              {n}
                            </span>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Local detail */}
      <section className="py-10">
        <div className={wrap}>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="space-y-5 text-sm leading-relaxed text-[#07162C]/80 sm:text-base lg:col-span-7">
              <p>{copy.p2}</p>
              <p>{copy.p3}</p>
            </div>
            <div className={`${card} lg:col-span-5`}>
              <div className="mb-4 flex items-center gap-3">
                <Building2 size={18} className="text-[#996515]" aria-hidden="true" />
                <h2 className="text-sm font-bold">{t.hospitalsTitle(city)}</h2>
              </div>
              <ul className="space-y-2 text-sm text-[#07162C]/80">
                {data.hospitals.map((h) => (
                  <li key={h} className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[#996515]" aria-hidden="true" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs leading-relaxed text-[#07162C]/55">{t.hospitalsNote}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-10">
        <div className={wrap}>
          <div className="mb-8 max-w-3xl space-y-3">
            <span className={eyebrow}>{t.servicesTag}</span>
            <h2 className={`${heading} text-3xl sm:text-4xl`}>{t.servicesTitle(city)}</h2>
            <p className="text-sm text-[#07162C]/70 sm:text-base">{t.servicesDesc}</p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICE_KEYS.map((key) => (
              <li key={key}>
                <Link
                  href={PAGES[key].path}
                  className="group flex h-full items-center justify-between gap-3 rounded-2xl border border-[#07162C]/10 bg-white p-4 text-sm font-semibold transition-colors hover:border-[#07162C]"
                >
                  <span>{PAGES[key][lang].title}</span>
                  <ArrowRight
                    size={16}
                    className="shrink-0 text-[#996515] transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Insurance */}
      <section className="py-10">
        <div className={wrap}>
          <div className={`${card} grid gap-8 lg:grid-cols-12`}>
            <div className="space-y-3 lg:col-span-5">
              <span className={eyebrow}>{t.insuranceTag}</span>
              <h2 className={`${heading} text-3xl`}>{t.insuranceTitle}</h2>
              <p className="text-sm leading-relaxed text-[#07162C]/75">{t.insuranceDesc}</p>
              <Link
                href="/insurance-payment-options"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#07162C] underline decoration-[#E4B95A] underline-offset-4"
              >
                {t.insuranceLink}
                <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>
            <ul className="grid content-start gap-2 sm:grid-cols-2 lg:col-span-7">
              {INSURANCE_KEYS.map((k) => (
                <li
                  key={k}
                  className="rounded-2xl border border-[#07162C]/10 bg-[#F4F4F2] p-3 text-sm"
                >
                  <span className="block font-semibold">{ins[`ins.${k}.title`][lang]}</span>
                  <span className="block text-xs text-[#07162C]/60">
                    {ins[`ins.${k}.badge`][lang]}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA + back link */}
      <section className="py-10">
        <div className={wrap}>
          <div className="rounded-3xl bg-[#07162C] p-8 text-white sm:p-12">
            <h2 className="ohh-serif text-2xl font-light leading-snug sm:text-3xl">
              {t.ctaTitle(city)}
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/75">{t.ctaDesc}</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/request-care"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#E4B95A] bg-[#E4B95A] px-7 py-3.5 text-sm font-bold text-[#07162C] transition-colors hover:bg-[#EDC878]"
              >
                <span>{t.request}</span>
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link
                href="/referrals"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-[#E4B95A]"
              >
                {t.refer}
              </Link>
            </div>
            <div className="mt-6">
              <ZipConfirmation tone="dark" />
            </div>
            <div className="mt-8 border-t border-white/15 pt-6 text-sm text-white/70">
              <span>{t.backTitle}: </span>
              <Link
                href={SERVICE_AREA_PATH}
                className="font-semibold text-[#E4B95A] underline underline-offset-4"
              >
                {t.backLink} →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Request Care form (E4) */}
      <section id="request-care-form" className="px-4 pb-16 pt-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-3xl border border-[#07162C]/10 bg-white p-6 sm:p-10">
          <RequestCareEmbed sourcePage={`/home-health-care/${slug}`} />
        </div>
      </section>
    </div>
  );
}
