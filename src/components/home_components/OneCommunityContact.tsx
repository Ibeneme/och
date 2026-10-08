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
      officeSubtitle: "A DBA of JACOP Healthcare Services, Inc.",
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
      officeSubtitle: "Un nombre comercial de JACOP Healthcare Services, Inc.",
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
    <section className="relative bg-[#0F172A] text-slate-100 py-20 lg:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(250,204,21,0.08), transparent 60%)",
        }}
      />

      <div className="max-w-6xl mx-auto space-y-16 relative z-10">
        <div className="space-y-5 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-yellow-400/10 text-yellow-400 text-xs font-bold uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
            {t.badge}
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight">
            {t.heading}
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed font-medium max-w-2xl">
            {t.description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <a
            href="tel:9723251598"
            className="group flex flex-col justify-between p-7 rounded-3xl bg-white/[0.04] hover:bg-white/[0.07] transition-all"
          >
            <div className="w-11 h-11 rounded-2xl bg-yellow-400/15 text-yellow-400 flex items-center justify-center mb-8">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                {t.callLabel}
              </div>
              <div className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                972-325-1598
              </div>
            </div>
          </a>

          <div className="flex flex-col justify-between p-7 rounded-3xl bg-white/[0.04]">
            <div className="w-11 h-11 rounded-2xl bg-yellow-400/15 text-yellow-400 flex items-center justify-center mb-8">
              <Printer className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                {t.faxLabel}
              </div>
              <div className="text-xl font-bold text-white">972-674-2923</div>
            </div>
          </div>

          <a
            href="mailto:info@onechh.com"
            className="group flex flex-col justify-between p-7 rounded-3xl bg-white/[0.04] hover:bg-white/[0.07] transition-all"
          >
            <div className="w-11 h-11 rounded-2xl bg-yellow-400/15 text-yellow-400 flex items-center justify-center mb-8">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                {t.emailLabel}
              </div>
              <div className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors truncate">
                info@onechh.com
              </div>
            </div>
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div className="lg:col-span-2 rounded-3xl bg-white/[0.04] p-8 sm:p-10 space-y-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold text-white tracking-tight">
                  {t.officeTitle}
                </h2>
                <p className="text-sm text-slate-400 mt-1.5 font-medium">
                  {t.officeSubtitle}
                </p>
              </div>
              <div className="w-11 h-11 rounded-2xl bg-yellow-400/15 text-yellow-400 flex items-center justify-center shrink-0">
                <Building2 className="w-5 h-5" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-yellow-400/10 text-yellow-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-200">
                    {t.officeLocation}
                  </h3>
                  <a
                    href="https://maps.google.com/?q=3560+Quannah+Drive,+Grand+Prairie,+TX+75052"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-slate-400 mt-1.5 leading-relaxed block hover:text-yellow-400 transition-colors font-medium"
                  >
                    3560 Quannah Drive
                    <br />
                    Grand Prairie, TX 75052
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-yellow-400/10 text-yellow-400 flex items-center justify-center shrink-0">
                  <Clock className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-200">
                    {t.adminHours}
                  </h3>
                  <p className="text-sm text-slate-400 mt-1.5 leading-relaxed font-medium">
                    {t.hoursText}
                  </p>
                  <p className="text-xs text-yellow-400 font-bold mt-1.5">
                    {t.appointmentOnly}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <h3 className="text-sm font-bold text-slate-200 mb-4">
                {t.communitiesServed}
              </h3>
              <div className="flex flex-wrap gap-2">
                {SERVICE_AREAS.map((city) => (
                  <span
                    key={city}
                    className="text-xs font-bold text-slate-300 bg-white/[0.06] rounded-full px-3.5 py-1.5"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-white/[0.04] p-8 flex flex-col justify-between space-y-8">
            <div>
              <div className="w-11 h-11 rounded-2xl bg-yellow-400/15 text-yellow-400 flex items-center justify-center mb-6">
                <UserCheck className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                {t.teamTitle}
              </h3>
              <p className="text-slate-400 text-sm mt-3 leading-relaxed font-medium">
                {t.teamDesc}
              </p>
            </div>

            <a
              href="/careers"
              className="w-full py-4 px-5 rounded-full bg-yellow-400 hover:bg-yellow-300 text-[#0F172A] text-sm font-extrabold flex items-center justify-between transition-all group"
            >
              <span>{t.applyBtn}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}