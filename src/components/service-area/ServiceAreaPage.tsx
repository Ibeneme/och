"use client";

import Link from "@/src/components/LocaleLink";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import { useLanguage } from "@/src/context/LanguageContext";
import { siteConfig } from "@/src/constants/siteConfig";
import { COUNTIES, COUNTY_COUNT, cityPageHref } from "@/src/constants/serviceArea";
import ZipConfirmation from "./ZipConfirmation";

const wrap = "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8";
const heading = "ohh-serif font-light leading-tight tracking-tight text-[#07162C]";
const card = "rounded-3xl border border-[#07162C]/10 bg-white p-6 sm:p-8";

const COPY = {
  en: {
    badge: "Service area",
    h1: "Home Health Care Across the Dallas–Fort Worth Metroplex",
    intro:
      "One Community Home Health serves patients across eight North Texas counties. Our nurses, therapists, and aides travel to you — at home, in an assisted living community, or wherever you are recovering.",
    county: (n: string) => `${n} County`,
    citiesCount: (n: number) => `${n} cities`,
    linkedNote: "Cities with a dedicated page are linked.",
    medicaid:
      "These eight counties line up with the two Texas Medicaid managed-care service areas we operate in: the Dallas service area (Collin, Dallas, Ellis, Kaufman, and Rockwall) and the Tarrant service area (Denton, Johnson, and Tarrant).",
    closeLead: "Don't see your city?",
    closeRest:
      "— we serve the full DFW Metroplex and can confirm your address in one call.",
    callPrefix: "Call",
    request: "Request care",
    refer: "Refer a patient",
    office: "Our office",
    visitNote: "By appointment only",
  },
  es: {
    badge: "Área de servicio",
    h1: "Atención médica en el hogar en todo el Metroplex de Dallas–Fort Worth",
    intro:
      "One Community Home Health atiende a pacientes en ocho condados del norte de Texas. Nuestras enfermeras, terapeutas y asistentes van a donde usted está: en casa, en una comunidad de vida asistida o dondequiera que se esté recuperando.",
    county: (n: string) => `Condado de ${n}`,
    citiesCount: (n: number) => `${n} ciudades`,
    linkedNote: "Las ciudades con página propia tienen enlace.",
    medicaid:
      "Estos ocho condados coinciden con las dos áreas de servicio de atención administrada de Medicaid de Texas en las que operamos: el área de Dallas (Collin, Dallas, Ellis, Kaufman y Rockwall) y el área de Tarrant (Denton, Johnson y Tarrant).",
    closeLead: "¿No ve su ciudad?",
    closeRest:
      "— atendemos todo el Metroplex de DFW y podemos confirmar su dirección en una sola llamada.",
    callPrefix: "Llame al",
    request: "Solicitar atención",
    refer: "Referir a un paciente",
    office: "Nuestra oficina",
    visitNote: "Solo con cita previa",
  },
} as const;

export default function ServiceAreaPage() {
  const { language } = useLanguage();
  const lang = language === "es" ? "es" : "en";
  const t = COPY[lang];
  const { phone, phoneTel } = siteConfig.contact;

  return (
    <div className="bg-[#F4F4F2] pb-24 pt-14 text-[#07162C] sm:pt-20 lg:pb-28">
      {/* Hero */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className={wrap}>
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#07162C]/10 bg-[#E9EAE5] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#07162C]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#996515]" />
              {t.badge}
            </span>
            <h1 className={`${heading} text-4xl sm:text-5xl lg:text-6xl`}>{t.h1}</h1>
            <p className="max-w-2xl text-base leading-relaxed text-[#07162C]/75 sm:text-lg">
              {t.intro}
            </p>
            <ZipConfirmation />
          </div>
        </div>
      </section>

      {/* Counties */}
      <section className="py-8">
        <div className={wrap}>
          <p className="mb-8 text-xs font-semibold uppercase tracking-[0.14em] text-[#07162C]/55">
            {COUNTY_COUNT} {lang === "es" ? "condados" : "counties"} · {t.linkedNote}
          </p>
          <div className="grid gap-5 md:grid-cols-2">
            {COUNTIES.map((county) => (
              <section
                key={county.key}
                aria-labelledby={`county-${county.key}`}
                className={card}
              >
                <div className="mb-4 flex items-baseline justify-between gap-3">
                  <h2 id={`county-${county.key}`} className={`${heading} text-2xl sm:text-3xl`}>
                    {t.county(county.name)}
                  </h2>
                  <span className="shrink-0 text-xs font-semibold text-[#996515]">
                    {t.citiesCount(county.cities.length)}
                  </span>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {county.cities.map((city) => {
                    const href = cityPageHref(city);
                    return (
                      <li key={city}>
                        {href ? (
                          <Link
                            href={href}
                            className="inline-flex items-center rounded-full border border-[#07162C] bg-[#07162C] px-3.5 py-1.5 text-xs font-semibold text-[#E4B95A] transition-colors hover:bg-[#0A2140] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#996515]"
                          >
                            {city}
                          </Link>
                        ) : (
                          <span className="inline-flex items-center rounded-full border border-[#07162C]/10 bg-[#F4F4F2] px-3.5 py-1.5 text-xs font-semibold text-[#07162C]/80">
                            {city}
                          </span>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </section>
            ))}
          </div>

          <p className="mt-8 max-w-3xl text-sm leading-relaxed text-[#07162C]/65">
            {t.medicaid}
          </p>
        </div>
      </section>

      {/* Close */}
      <section className="py-12">
        <div className={wrap}>
          <div className="rounded-3xl bg-[#07162C] p-8 text-white sm:p-12">
            <p className="ohh-serif max-w-3xl text-2xl font-light leading-snug sm:text-3xl">
              {t.closeLead}{" "}
              <a
                href={`tel:${phoneTel}`}
                className="whitespace-nowrap text-[#E4B95A] underline decoration-[#E4B95A]/50 underline-offset-4"
              >
                {t.callPrefix} {phone}
              </a>{" "}
              {t.closeRest}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/request-care"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#E4B95A] bg-[#E4B95A] px-7 py-3.5 text-sm font-bold text-[#07162C] transition-colors hover:bg-[#EDC878]"
              >
                <span>{t.request}</span>
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link
                href="/referrals"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-[#E4B95A]"
              >
                <span>{t.refer}</span>
              </Link>
              <a
                href={`tel:${phoneTel}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-[#E4B95A]"
              >
                <Phone size={16} aria-hidden="true" />
                <span>{phone}</span>
              </a>
            </div>

            <div className="mt-8 flex items-start gap-3 text-sm text-white/65">
              <MapPin size={16} className="mt-0.5 shrink-0 text-[#E4B95A]" aria-hidden="true" />
              <p>
                {t.office}: {siteConfig.address.full} · {siteConfig.address.note[lang]}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
