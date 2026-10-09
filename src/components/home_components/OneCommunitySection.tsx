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

/* Restyled to match Request Care layout:
   soft gray canvas #F4F4F2, pill badges with dot indicators, large light headings,
   rounded bento cards, flat style with 1px borders. */

const wrap = "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8";
const heading =
  "ohh-serif font-bold leading-tight tracking-tight text-[#07162C]";
const card = "rounded-3xl border border-[#07162C]/10 bg-white p-6 sm:p-8";

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
        '"Founder-led clinical leadership and responsive communication gave our family complete peace of mind."',
      networkTitle: "The Family Care Network",
      reviewLabel: "Verified Client Review",
      card1Title: "Decades of Nursing Experience",
      card1Desc:
        "Founder-led clinical leadership backed by more than two decades of nursing experience.",
      card2Title: "A Proven Care Legacy",
      card2Desc:
        "A care legacy serving clients since 2010, now presented under JACOP Healthcare Services, Inc., doing business as One Community Home Health.",
      card3Title: "Individualized Coordination",
      card3Desc:
        "Individualized care closely coordinated with physicians, families, and caregivers.",
      card4Title: "Responsive Communication",
      card4Desc:
        "Responsive communication and dedicated patient/caregiver education every step of the way.",
      missionBadge: "Our Core Mission",
      missionHeading: "A focus on recovery, safety, independence, and dignity.",
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
        '"El liderazgo clínico dirigido por el fundador y la comunicación receptiva le dieron a nuestra familia total tranquilidad."',
      networkTitle: "La Red de Cuidado Familiar",
      reviewLabel: "Reseña de Cliente Verificada",
      card1Title: "Décadas de Experiencia en Enfermería",
      card1Desc:
        "Liderazgo clínico dirigido por el fundador respaldado por más de dos décadas de experiencia en enfermería.",
      card2Title: "Un Legado de Cuidado Comprobado",
      card2Desc:
        "Un legado de atención que atiende a clientes desde 2010, ahora presentado bajo JACOP Healthcare Services, Inc., doing business as One Community Home Health.",
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
    <section className="relative overflow-hidden bg-[#F4F4F2] py-20 text-[#07162C] sm:py-28">
      <div className={`${wrap} relative z-10 space-y-16`}>
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#07162C]/10 bg-[#E9EAE5] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[#07162C]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#996515] animate-pulse" />
            {t.badge}
          </span>
          <h2 className={`${heading} mt-6 text-4xl sm:text-5xl lg:text-6xl`}>
            {t.headingMain} <br className="hidden sm:inline" />
            <span className="text-[#996515]">{t.headingHighlight}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#07162C]/70 sm:text-base">
            {t.description}
          </p>
        </div>

        {/* Bento Grid Layout (Testimonial Card + 4 Benefit Cards) */}
        <div className="grid grid-cols-1 items-stretch gap-4 lg:grid-cols-12">
          {/* Testimonial Bento Card */}
          <div className="flex flex-col justify-between rounded-3xl border border-[#07162C]/10 bg-[#E9EAE5] p-6 sm:p-8 lg:col-span-4">
            <div>
              <div className="mb-4 flex items-center space-x-1 text-[#996515]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="ohh-serif text-lg  leading-relaxed text-[#07162C]">
                {t.quote}
              </p>
            </div>
            <div className="mt-8 flex items-center space-x-3 border-t border-[#07162C]/10 pt-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#07162C] text-xs font-bold text-[#E4B95A]">
                OC
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#07162C]">
                  {t.networkTitle}
                </h4>
                <p className="text-xs text-[#07162C]/60">{t.reviewLabel}</p>
              </div>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-8">
            <div className={card}>
              <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#07162C] text-[#E4B95A]">
                <Award size={20} strokeWidth={1.75} />
              </div>
              <h3 className="ohh-serif text-xl font-medium text-[#07162C]">
                {t.card1Title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#07162C]/70">
                {t.card1Desc}
              </p>
            </div>

            <div className={card}>
              <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#07162C] text-[#E4B95A]">
                <ShieldCheck size={20} strokeWidth={1.75} />
              </div>
              <h3 className="ohh-serif text-xl font-medium text-[#07162C]">
                {t.card2Title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#07162C]/70">
                {t.card2Desc}
              </p>
            </div>

            <div className={card}>
              <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#07162C] text-[#E4B95A]">
                <HeartHandshake size={20} strokeWidth={1.75} />
              </div>
              <h3 className="ohh-serif text-xl font-medium text-[#07162C]">
                {t.card3Title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#07162C]/70">
                {t.card3Desc}
              </p>
            </div>

            <div className={card}>
              <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#07162C] text-[#E4B95A]">
                <MessageCircle size={20} strokeWidth={1.75} />
              </div>
              <h3 className="ohh-serif text-xl font-medium text-[#07162C]">
                {t.card4Title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#07162C]/70">
                {t.card4Desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
