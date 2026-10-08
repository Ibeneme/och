"use client";

import {
  Phone,
  Calendar,
  Star,
  ShieldCheck,
  HeartHandshake,
  Award,
  MessageCircle,
} from "lucide-react";
import { useLanguage } from "@/src/context/LanguageContext";

export default function OneCommunitySection() {
  const { language } = useLanguage();

  const translations = {
    en: {
      badge: "Trusted Home Health Excellence Since 2010",
      headingMain: "Why Families Choose",
      headingHighlight: "One Community",
      description:
        "Care that feels like home. Talk with our team about your needs, coverage, and next steps.",
      quote:
        "\"Founder-led clinical leadership and responsive communication gave our family complete peace of mind.\"",
      networkTitle: "The Family Care Network",
      reviewLabel: "Verified Client Review",
      card1Title: "Decades of Nursing Experience",
      card1Desc:
        "Founder-led clinical leadership backed by more than two decades of nursing experience.",
      card2Title: "A Proven Care Legacy",
      card2Desc:
        "A care legacy serving clients since 2010, now presented under the One Community Home Health DBA.",
      card3Title: "Individualized Coordination",
      card3Desc:
        "Individualized care closely coordinated with physicians, families, and caregivers.",
      card4Title: "Responsive Communication",
      card4Desc:
        "Responsive communication and dedicated patient/caregiver education every step of the way.",
      missionBadge: "Our Core Mission",
      missionHeading:
        "A focus on recovery, safety, independence, and dignity.",
      missionDesc:
        "Care that feels like home. Talk with our team about your needs, coverage, and next steps.",
      callButton: "Call 972-325-1598",
      consultationButton: "Request Free Consultation",
      alertMsg: "Opening free consultation request...",
    },
    es: {
      badge: "Excelencia en Salud en el Hogar de Confianza Desde 2010",
      headingMain: "Por Qué las Familias Eligen",
      headingHighlight: "One Community",
      description:
        "Cuidado que se siente como en casa. Hable con nuestro equipo sobre sus necesidades, cobertura y próximos pasos.",
      quote:
        "\"El liderazgo clínico dirigido por el fundador y la comunicación receptiva le dieron a nuestra familia total tranquilidad.\"",
      networkTitle: "La Red de Cuidado Familiar",
      reviewLabel: "Reseña de Cliente Verificada",
      card1Title: "Décadas de Experiencia en Enfermería",
      card1Desc:
        "Liderazgo clínico dirigido por el fundador respaldado por más de dos décadas de experiencia en enfermería.",
      card2Title: "Un Legado de Cuidado Comprobado",
      card2Desc:
        "Un legado de atención que atiende a clientes desde 2010, ahora presentado bajo el nombre comercial One Community Home Health.",
      card3Title: "Coordinación Individualizada",
      card3Desc:
        "Cuidado individualizado estrechamente coordinado con médicos, familias y cuidadores.",
      card4Title: "Comunicación Receptiva",
      card4Desc:
        "Comunicación receptiva y educación dedicada para pacientes y cuidadores en cada paso del camino.",
      missionBadge: "Nuestra Misión Principal",
      missionHeading:
        "Un enfoque en la recuperación, la seguridad, la independencia y la dignidad.",
      missionDesc:
        "Cuidado que se siente como en casa. Hable con nuestro equipo sobre sus necesidades, cobertura y próximos pasos.",
      callButton: "Llamar al 972-325-1598",
      consultationButton: "Solicitar Consulta Gratuita",
      alertMsg: "Abriendo solicitud de consulta gratuita...",
    },
  };

  const t = translations[language as "en" | "es"] || translations.en;

  return (
    <section className="relative min-h-screen bg-[#F3F1EC] text-slate-900 py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-semibold tracking-[0.18em] uppercase bg-white border border-amber-200 text-amber-700 mb-7">
            <span>✨</span> {t.badge}
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.1]">
            {t.headingMain} <br className="hidden sm:inline" />
            <span className="text-amber-700">{t.headingHighlight}</span>
          </h1>
          <p className="text-base sm:text-[17px] text-slate-500 leading-relaxed max-w-2xl mx-auto">
            {t.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16 sm:mb-20">
          <div className="lg:col-span-4 flex justify-center lg:justify-start">
            <div className="relative bg-white p-7 rounded-[22px] border border-amber-100 max-w-sm transform -rotate-2 hover:rotate-0 transition-transform duration-300">
              <div className="flex items-center space-x-1 text-amber-400 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-slate-700 text-sm italic mb-5 leading-relaxed">
                {t.quote}
              </p>
              <div className="flex items-center space-x-3 pt-3 border-t border-amber-50">
                <div className="w-10 h-10 rounded-full bg-amber-50 text-amber-700 font-bold flex items-center justify-center text-sm border border-amber-100">
                  OC
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900">
                    {t.networkTitle}
                  </h4>
                  <p className="text-xs text-slate-400">{t.reviewLabel}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            <div className="rounded-[22px] bg-white border border-amber-100 p-6 sm:p-7 flex flex-col justify-between hover:border-amber-300 transition-colors duration-300">
              <div>
                <div className="w-11 h-11 rounded-full bg-amber-50 border border-amber-100 text-amber-700 flex items-center justify-center mb-5">
                  <Award className="w-5 h-5" strokeWidth={1.75} />
                </div>
                <h3 className="text-xl font-medium text-slate-900 mb-2.5 tracking-tight">
                  {t.card1Title}
                </h3>
                <p className="text-slate-500 text-[14px] leading-relaxed">
                  {t.card1Desc}
                </p>
              </div>
            </div>

            <div className="rounded-[22px] bg-white border border-amber-100 p-6 sm:p-7 flex flex-col justify-between hover:border-amber-300 transition-colors duration-300">
              <div>
                <div className="w-11 h-11 rounded-full bg-amber-50 border border-amber-100 text-amber-700 flex items-center justify-center mb-5">
                  <ShieldCheck className="w-5 h-5" strokeWidth={1.75} />
                </div>
                <h3 className="text-xl font-medium text-slate-900 mb-2.5 tracking-tight">
                  {t.card2Title}
                </h3>
                <p className="text-slate-500 text-[14px] leading-relaxed">
                  {t.card2Desc}
                </p>
              </div>
            </div>

            <div className="rounded-[22px] bg-white border border-amber-100 p-6 sm:p-7 flex flex-col justify-between hover:border-amber-300 transition-colors duration-300">
              <div>
                <div className="w-11 h-11 rounded-full bg-amber-50 border border-amber-100 text-amber-700 flex items-center justify-center mb-5">
                  <HeartHandshake className="w-5 h-5" strokeWidth={1.75} />
                </div>
                <h3 className="text-xl font-medium text-slate-900 mb-2.5 tracking-tight">
                  {t.card3Title}
                </h3>
                <p className="text-slate-500 text-[14px] leading-relaxed">
                  {t.card3Desc}
                </p>
              </div>
            </div>

            <div className="rounded-[22px] bg-white border border-amber-100 p-6 sm:p-7 flex flex-col justify-between hover:border-amber-300 transition-colors duration-300">
              <div>
                <div className="w-11 h-11 rounded-full bg-amber-50 border border-amber-100 text-amber-700 flex items-center justify-center mb-5">
                  <MessageCircle className="w-5 h-5" strokeWidth={1.75} />
                </div>
                <h3 className="text-xl font-medium text-slate-900 mb-2.5 tracking-tight">
                  {t.card4Title}
                </h3>
                <p className="text-slate-500 text-[14px] leading-relaxed">
                  {t.card4Desc}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-[28px] bg-[#0F172A] text-white p-8 sm:p-12 relative overflow-hidden">
          <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-xl text-center lg:text-left">
              <span className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-[11px] font-bold tracking-widest uppercase bg-amber-400/20 text-amber-200 border border-yellow-400/30 mb-4">
                {t.missionBadge}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3 text-white">
                {t.missionHeading}
              </h3>
              <p className="text-slate-300 text-[15px] leading-relaxed">
                {t.missionDesc}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
              <a
                href="tel:9723251598"
                className="w-full sm:w-auto bg-yellow-400 text-slate-950 font-semibold px-7 py-4 rounded-full text-[14px] transition-colors inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                <Phone className="w-4 h-4" />
                {t.callButton}
              </a>
              <button
                onClick={() => alert(t.alertMsg)}
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-semibold px-7 py-4 rounded-full text-[14px] transition-colors inline-flex items-center justify-center gap-2 border border-white/20 backdrop-blur-sm cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                {t.consultationButton}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}