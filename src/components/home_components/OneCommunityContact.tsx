"use client";

import {
  MapPin,
  Phone,
  Printer,
  Mail,
  Clock,
  Building2,
  UserCheck,
  ArrowRight,
} from "lucide-react";
import { useLanguage } from "@/src/context/LanguageContext";

/* Restyled to match Request Care layout (maintaining dark background):
   pill badge chips, large light serif headings, rounded bento cards,
   and flat 1px borders with gold accents. */

const wrap = "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8";
const heading = "ohh-serif font-bold leading-tight tracking-tight text-white";

const SERVICE_AREAS = [
  "Grand Prairie",
  "Arlington",
  "Fort Worth",
  "Irving",
  "Dallas",
  "Mansfield",
  "DeSoto",
  "Duncanville",
];

export default function OneCommunityContact() {
  const { language } = useLanguage();

  const translations = {
    en: {
      badge: "One Community Home Health",
      heading: "Reach a real person.",
      description:
        "Our intake team answers referrals, scheduling questions, and general inquiries directly — every call is picked up by staff who know the DFW service area.",
      callLabel: "Call intake",
      faxLabel: "Fax a referral",
      emailLabel: "Email us",
      officeTitle: "Office & Administration",
      officeSubtitle:
        "JACOP Healthcare Services, Inc., doing business as One Community Home Health",
      officeLocation: "Office location",
      adminHours: "Administrative hours",
      hoursText: "Mon–Fri, 9:00 AM – 5:00 PM",
      appointmentOnly: "Office visits by appointment only",
      communitiesServed: "Communities we serve",
      teamTitle: "Join our care team",
      teamDesc:
        "Licensed CNAs, nurses, and therapists are invited to join our rolling talent network for home health placements across the metroplex.",
      applyBtn: "Apply as a CNA",
    },
    es: {
      badge: "One Community Home Health",
      heading: "Comuníquese con una persona real.",
      description:
        "Nuestro equipo de admisión responde directamente a referencias, preguntas de programación y consultas generales; cada llamada es atendida por personal que conoce el área de servicio de DFW.",
      callLabel: "Llamar a admisión",
      faxLabel: "Enviar referencia por fax",
      emailLabel: "Envíenos un correo electrónico",
      officeTitle: "Oficina y Administración",
      officeSubtitle:
        "JACOP Healthcare Services, Inc., doing business as One Community Home Health",
      officeLocation: "Ubicación de la oficina",
      adminHours: "Horario administrativo",
      hoursText: "Lun–Vie, 9:00 AM – 5:00 PM",
      appointmentOnly: "Visitas a la oficina solo con cita previa",
      communitiesServed: "Comunidades a las que servimos",
      teamTitle: "Únase a nuestro equipo de atención",
      teamDesc:
        "Se invita a enfermeros, terapeutas y auxiliares de enfermería certificados (CNA) a unirse a nuestra red de talento para ubicaciones de salud en el hogar en todo el área metropolitana.",
      applyBtn: "Aplicar como CNA",
    },
  };

  const t = translations[language as "en" | "es"] || translations.en;

  return (
    <section className="relative overflow-hidden bg-[#07162C] py-20 text-white lg:py-28">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(228,185,90,0.06), transparent 60%)",
        }}
      />

      <div className={`${wrap} relative z-10 space-y-12`}>
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#E4B95A]">
            <span className="h-2 w-2 rounded-full bg-[#E4B95A] animate-pulse" />
            {t.badge}
          </span>
          <h1 className={`${heading} text-4xl sm:text-5xl lg:text-6xl`}>
            {t.heading}
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
            {t.description}
          </p>
        </div>

        {/* Contact Bento Row */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <a
            href="tel:9723251598"
            className="group flex flex-col justify-between rounded-3xl border border-white/15 bg-white/5 p-7 transition-colors hover:border-[#E4B95A]"
          >
            <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#E4B95A]/15 text-[#E4B95A]">
              <Phone size={20} />
            </div>
            <div>
              <div className="mb-1 text-xs font-bold uppercase tracking-wider text-white/50">
                {t.callLabel}
              </div>
              <div className="font-mono text-xl font-bold text-white group-hover:text-[#E4B95A] transition-colors">
                972-325-1598
              </div>
            </div>
          </a>

          <div className="flex flex-col justify-between rounded-3xl border border-white/15 bg-white/5 p-7">
            <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#E4B95A]/15 text-[#E4B95A]">
              <Printer size={20} />
            </div>
            <div>
              <div className="mb-1 text-xs font-bold uppercase tracking-wider text-white/50">
                {t.faxLabel}
              </div>
              <div className="font-mono text-xl font-bold text-white">
                972-674-2923
              </div>
            </div>
          </div>

          <a
            href="mailto:info@onechh.com"
            className="group flex flex-col justify-between rounded-3xl border border-white/15 bg-white/5 p-7 transition-colors hover:border-[#E4B95A]"
          >
            <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#E4B95A]/15 text-[#E4B95A]">
              <Mail size={20} />
            </div>
            <div>
              <div className="mb-1 text-xs font-bold uppercase tracking-wider text-white/50">
                {t.emailLabel}
              </div>
              <div className="truncate text-xl font-bold text-white group-hover:text-[#E4B95A] transition-colors">
                info@onechh.com
              </div>
            </div>
          </a>
        </div>

        {/* Office & Careers Bento Grid */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <div className="rounded-3xl border border-white/15 bg-white/5 p-8 sm:p-10 space-y-8 lg:col-span-2">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="ohh-serif text-2xl font-light text-white">
                  {t.officeTitle}
                </h2>
                <p className="mt-1 text-xs text-white/60">{t.officeSubtitle}</p>
              </div>
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#E4B95A]/15 text-[#E4B95A]">
                <Building2 size={20} />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E4B95A]/10 text-[#E4B95A]">
                  <MapPin size={18} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">
                    {t.officeLocation}
                  </h3>
                  <a
                    href="https://maps.google.com/?q=3560+Quannah+Drive,+Grand+Prairie,+TX+75052"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1.5 block text-sm leading-relaxed text-white/75 hover:text-[#E4B95A] transition-colors"
                  >
                    3560 Quannah Drive
                    <br />
                    Grand Prairie, TX 75052
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E4B95A]/10 text-[#E4B95A]">
                  <Clock size={18} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">
                    {t.adminHours}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/75">
                    {t.hoursText}
                  </p>
                  <p className="mt-1.5 text-xs font-semibold text-[#E4B95A]">
                    {t.appointmentOnly}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-white/50">
                {t.communitiesServed}
              </h3>
              <div className="flex flex-wrap gap-2">
                {SERVICE_AREAS.map((city) => (
                  <span
                    key={city}
                    className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-semibold text-white"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-3xl border border-white/15 bg-white/5 p-8">
            <div>
              <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#E4B95A]/15 text-[#E4B95A]">
                <UserCheck size={20} />
              </div>
              <h3 className="ohh-serif text-2xl font-light text-white">
                {t.teamTitle}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/75">
                {t.teamDesc}
              </p>
            </div>

            <a
              href="/careers"
              className="group mt-8 flex w-full items-center justify-between rounded-full border border-[#E4B95A] bg-[#E4B95A] px-6 py-3.5 text-sm font-bold text-[#07162C] transition-colors hover:bg-[#EDC878]"
            >
              <span>{t.applyBtn}</span>
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
