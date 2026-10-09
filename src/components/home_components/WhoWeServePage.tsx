"use client";

import Link from "next/link";
import {
  ArrowRight,
  Users,
  ShieldCheck,
  HeartHandshake,
  Bell,
  Phone,
  Heart,
  Award,
  Activity,
  CheckCircle2,
} from "lucide-react";
import { useLanguage } from "@/src/context/LanguageContext";

/* Restyled to match Request Care layout:
   soft gray canvas #F4F4F2, pill badges with dot indicators, large light headings,
   rounded bento cards, flat style with 1px borders. */

const wrap = "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8";
const heading =
  "ohh-serif font-light leading-tight tracking-tight text-[#07162C]";
const card = "rounded-3xl border border-[#07162C]/10 bg-white p-6 sm:p-8";

interface CarePathway {
  titleKey: string;
  descKey: string;
  icon: React.ComponentType<{
    className?: string;
    strokeWidth?: number;
    size?: number;
  }>;
  badgeKey?: string;
  isDark?: boolean;
  actionType: "button" | "text" | "cta";
  footerKey: string;
  href: string;
}

const carePathways: CarePathway[] = [
  {
    titleKey: "seniorsTitle",
    descKey: "seniorsDesc",
    icon: Users,
    actionType: "button",
    footerKey: "requestConsultation",
    href: "/who-we-serve/seniors",
  },
  {
    titleKey: "veteransTitle",
    descKey: "veteransDesc",
    icon: ShieldCheck,
    badgeKey: "trustedBadge",
    actionType: "text",
    footerKey: "vaIntegration",
    href: "/services/veteran-care",
  },
  {
    titleKey: "disabilitiesTitle",
    descKey: "disabilitiesDesc",
    icon: HeartHandshake,
    badgeKey: "personalizedBadge",
    actionType: "text",
    footerKey: "customSupport",
    href: "/services/adults-with-disabilities",
  },
  {
    titleKey: "pediatricTitle",
    descKey: "pediatricDesc",
    icon: Bell,
    badgeKey: "comingSoonBadge",
    isDark: true,
    actionType: "cta",
    footerKey: "explorePediatric",
    href: "/services/pediatric-services",
  },
];

export default function WhoWeServePage() {
  const { language } = useLanguage();

  const translations = {
    en: {
      badge: "Specialized In-Home Support",
      heading: "Compassionate care tailored for every stage of life",
      description:
        "Professional, nurse-guided support delivered right to your doorstep. Explore our dedicated care pathways designed to preserve independence, dignity, and peace of mind.",
      seniorsTitle: "Seniors",
      seniorsDesc:
        "Supporting safety, independence, recovery, and quality of life at home through specialized assistance and personalized care routines.",
      veteransTitle: "Veterans",
      veteransDesc:
        "Respectful care and direct links to official VA resources for veterans and eligible families seeking dependable home assistance.",
      disabilitiesTitle: "Adults with Disabilities",
      disabilitiesDesc:
        "Person-centered support that promotes dignity, everyday independence, and tailored assistance structured around unique personal needs.",
      pediatricTitle: "Pediatric Service",
      pediatricDesc:
        "We are expanding our specialized care offerings to support children and young families. Stay connected for updates.",
      trustedBadge: "Trusted",
      personalizedBadge: "Personalized",
      comingSoonBadge: "Coming Soon",
      requestConsultation: "Request consultation",
      vaIntegration: "Official VA Resource Integration",
      customSupport: "Customized Daily Support",
      explorePediatric: "Explore Pediatric Services",
      callBtn: "Call 972-325-1598",
      contactBtn: "Contact our team",
      commitmentTitle: "Our commitment to you",
      commitmentSub: "Dedicated client-first philosophy",
      commitPoints: [
        "Individualized care plans tailored to unique life stages",
        "Direct collaboration with families and physicians",
        "Focus on safety, independence, and dignity at home",
      ],
      pathwayEyebrow: "Our care pathways",
      pathwayHeading: "Four populations we support",
      pathwaySub:
        "Specialized in-home programs built around the unique needs of the people and families we serve across North Texas.",
      detailEyebrow: "How we support each group",
      detailHeading: "Care built around real lives",
      pediatricEyebrow: "Coming soon",
      pediatricHeading: "Pediatric Home Health Services",
      pediatricPoints: [
        "Family-centered care planning",
        "Support for children with complex needs",
        "Coordination with pediatric providers",
      ],
      pediatricBtn: "Stay updated",
      transitionTitle: "Also supporting post-hospital recovery",
      transitionDesc:
        "Across all populations, our teams help patients transition safely from hospital to home — with skilled nursing, therapy coordination, medication education, and close communication with physicians to reduce readmission risk.",
      transitionBtn: "Talk to our team",
    },
    es: {
      badge: "Apoyo Especializado en el Hogar",
      heading: "Cuidado compasivo adaptado a cada etapa de la vida",
      description:
        "Apoyo profesional guiado por enfermeras entregado directamente en su puerta. Explore nuestros caminos de atención dedicados a preservar la independencia, la dignidad y la tranquilidad.",
      seniorsTitle: "Adultos Mayores",
      seniorsDesc:
        "Apoyando la seguridad, independencia, recuperación y calidad de vida en el hogar a través de asistencia especializada y rutinas personalizadas.",
      veteransTitle: "Veteranos",
      veteransDesc:
        "Cuidado respetuoso y enlaces directos a recursos oficiales de VA para veteranos y familias elegibles que buscan asistencia confiable en el hogar.",
      disabilitiesTitle: "Adultos con Discapacidades",
      disabilitiesDesc:
        "Apoyo centrado en la persona que promueve la dignidad, la independencia diaria y asistencia personalizada estructurada según necesidades únicas.",
      pediatricTitle: "Servicio Pediátrico",
      pediatricDesc:
        "Estamos expandiendo nuestras ofertas de cuidado especializado para apoyar a niños y jóvenes familias. Manténgase conectado.",
      trustedBadge: "De Confianza",
      personalizedBadge: "Personalizado",
      comingSoonBadge: "Próximamente",
      requestConsultation: "Solicitar consulta",
      vaIntegration: "Integración de Recursos Oficiales de VA",
      customSupport: "Apoyo Diario Personalizado",
      explorePediatric: "Explorar Servicios Pediátricos",
      callBtn: "Llamar al 972-325-1598",
      contactBtn: "Contactar a nuestro equipo",
      commitmentTitle: "Nuestro compromiso con usted",
      commitmentSub: "Filosofía dedicada a poner al cliente primero",
      commitPoints: [
        "Planes de atención individualizados adaptados a cada etapa de la vida",
        "Colaboración directa con familias y médicos",
        "Enfoque en la seguridad, independencia y dignidad en casa",
      ],
      pathwayEyebrow: "Nuestros caminos de atención",
      pathwayHeading: "Cuatro poblaciones a las que apoyamos",
      pathwaySub:
        "Programas especializados en el hogar construidos en torno a las necesidades únicas de las personas y familias a las que servimos en el norte de Texas.",
      detailEyebrow: "Cómo apoyamos a cada grupo",
      detailHeading: "Cuidado construido en torno a vidas reales",
      pediatricEyebrow: "Próximamente",
      pediatricHeading: "Servicios de Salud en el Hogar Pediátrico",
      pediatricPoints: [
        "Planificación de atención centrada en la familia",
        "Apoyo para niños con necesidades complejas",
        "Coordinación con proveedores pediátricos",
      ],
      pediatricBtn: "Mantenerse actualizado",
      transitionTitle: "También apoyando la recuperación post-hospitalaria",
      transitionDesc:
        "En todas las poblaciones, nuestros equipos ayudan a los pacientes a hacer una transición segura del hospital al hogar — con enfermería especializada, coordinación de terapias y educación sobre medicamentos.",
      transitionBtn: "Hable con nuestro equipo",
    },
  };

  const t = translations[language === "es" ? "es" : "en"];

  const detailSections = [
    {
      icon: Heart,
      eyebrow: language === "es" ? "Envejecer en casa" : "Aging in place",
      title:
        language === "es"
          ? "Adultos Mayores y Seniors (65+)"
          : "Older Adults & Seniors (65+)",
      desc:
        language === "es"
          ? "Diseñado para ayudar a los adultos mayores a mantener su independencia y dignidad en casa. Apoyamos las rutinas diarias, movilidad, monitoreo de condiciones crónicas y gestión de medicamentos."
          : "Designed to help seniors maintain independence and dignity at home. We support daily routines, mobility, chronic condition monitoring, and medication management.",
      meta: [
        language === "es"
          ? "Apoyo certificado por Medicare"
          : "Medicare-certified support",
        "DFW Metroplex",
      ],
      points:
        language === "es"
          ? [
              "Evaluaciones de prevención de caídas y seguridad en el hogar",
              "Asistencia con actividades de la vida diaria (ADLs)",
              "Compañía y compromiso con el bienestar mental",
              "Recordatorios de medicamentos y coordinación con médicos",
            ]
          : [
              "Fall prevention and home safety evaluations",
              "Assistance with activities of daily living (ADLs)",
              "Companionship and mental wellness engagement",
              "Medication reminders and coordination with physicians",
            ],
    },
    {
      icon: Award,
      eyebrow: language === "es" ? "Honrando el servicio" : "Honoring service",
      title:
        language === "es"
          ? "Veteranos y Familias Militares"
          : "Veterans & Military Families",
      desc:
        language === "es"
          ? "Servimos con orgullo a quienes sirvieron a nuestro país. A través de las vías de atención comunitaria de VA, ayudamos a los veteranos a acceder a atención domiciliaria confiable."
          : "We proudly serve those who served our country. Through VA Community Care pathways, we help veterans access reliable in-home care tailored to their needs.",
      meta: [
        "VA Community Care",
        language === "es"
          ? "Apoyo de autorización previa"
          : "Prior auth support",
      ],
      points:
        language === "es"
          ? [
              "Apoyo de autorización para la Red de Atención Comunitaria de VA",
              "Cuidado especializado para condiciones de salud de veteranos",
              "Coordinación de enlace dedicada con trabajadores sociales de VA",
              "Asistencia domiciliaria respetuosa y confiable para familias",
            ]
          : [
              "VA Community Care Network authorization support",
              "Specialized care for veteran health conditions",
              "Dedicated liaison coordination with VA caseworkers",
              "Respectful, dependable home assistance for families",
            ],
    },
    {
      icon: Users,
      eyebrow: language === "es" ? "Vida empoderada" : "Empowered living",
      title:
        language === "es"
          ? "Adultos con Discapacidades"
          : "Adults with Disabilities",
      desc:
        language === "es"
          ? "Apoyamos a adultos con discapacidades físicas o del desarrollo para que puedan vivir con mayor autonomía, dignidad e independencia diaria en casa."
          : "We support adults with physical or developmental disabilities so they can live with greater autonomy, dignity, and everyday independence at home.",
      meta: [
        "Medicaid / STAR+PLUS",
        language === "es" ? "Programas de Texas" : "Texas programs",
      ],
      points:
        language === "es"
          ? [
              "Asistencia de cuidado personal personalizada",
              "Asistencia de movilidad y apoyo de integración comunitaria",
              "Opciones de cuidado de respiro para cuidadores principales",
              "Planes orientados a objetivos basados en preferencias individuales",
            ]
          : [
              "Personalized personal care assistance",
              "Mobility assistance and community integration support",
              "Respite care options for primary caregivers",
              "Goal-oriented plans built around individual preferences",
            ],
    },
  ];

  return (
    <main className="min-h-screen bg-[#F4F4F2] pb-24 pt-14 text-[#07162C] sm:pt-20 lg:pb-28">
      {/* ─── Hero ─────────────────────────────────────────────── */}
      <section className="px-4 sm:px-6 lg:px-8 py-12">
        <div className={wrap}>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#07162C]/10 bg-[#E9EAE5] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#07162C] mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-[#996515] animate-pulse" />
              {t.badge}
            </span>

            <h1 className={`${heading} text-4xl sm:text-5xl lg:text-6xl`}>
              {t.heading}
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#07162C]/70 sm:text-base">
              {t.description}
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="tel:9723251598"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#07162C] bg-[#07162C] px-7 py-3.5 text-sm font-semibold text-[#E4B95A] transition-colors hover:bg-[#0A2140]"
              >
                <Phone size={16} />
                {t.callBtn}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#07162C]/20 bg-white px-7 py-3.5 text-sm font-semibold text-[#07162C] transition-colors hover:border-[#07162C]"
              >
                {t.contactBtn}
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Commitment Strip */}
          <div className="mt-14 rounded-3xl border border-[#07162C]/10 bg-white p-6 sm:p-8">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#07162C] text-[#E4B95A]">
                <ShieldCheck size={18} />
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#07162C]">
                  {t.commitmentTitle}
                </h3>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#996515]">
                  {t.commitmentSub}
                </p>
              </div>
            </div>
            <ul className="grid gap-4 sm:grid-cols-3">
              {t.commitPoints.map((point, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2.5 text-sm text-[#07162C]/80"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#07162C] text-xs font-bold text-[#E4B95A]">
                    ✓
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ─── Pathways ─────────────────────────────────────────── */}
      <section className="py-12">
        <div className={wrap}>
          <div className="mb-10 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#996515]">
              {t.pathwayEyebrow}
            </span>
            <h2 className={`${heading} mt-2 text-3xl sm:text-4xl`}>
              {t.pathwayHeading}
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-sm text-[#07162C]/70">
              {t.pathwaySub}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {carePathways.map((pathway, idx) => {
              const Icon = pathway.icon;
              const titleText = t[pathway.titleKey as keyof typeof t] as string;
              const descText = t[pathway.descKey as keyof typeof t] as string;
              const badgeText = pathway.badgeKey
                ? (t[pathway.badgeKey as keyof typeof t] as string)
                : undefined;
              const footerText = t[
                pathway.footerKey as keyof typeof t
              ] as string;

              return (
                <div
                  key={pathway.titleKey}
                  id={`pathway-${idx}`}
                  className={`group relative flex flex-col justify-between rounded-3xl p-6 transition-all duration-300 ${
                    pathway.isDark
                      ? "border border-[#07162C] bg-[#07162C] text-white"
                      : card
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div
                        className={`flex h-11 w-11 items-center justify-center rounded-2xl ${
                          pathway.isDark
                            ? "bg-white/10 text-[#E4B95A]"
                            : "bg-[#07162C] text-[#E4B95A]"
                        }`}
                      >
                        <Icon size={20} strokeWidth={1.75} />
                      </div>
                      {badgeText ? (
                        <span
                          className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${
                            pathway.isDark
                              ? "bg-[#E4B95A] text-[#07162C]"
                              : "border border-[#07162C]/10 bg-[#E9EAE5] text-[#07162C]"
                          }`}
                        >
                          {badgeText}
                        </span>
                      ) : (
                        <span
                          className={`text-xs font-bold uppercase tracking-widest font-mono ${
                            pathway.isDark
                              ? "text-white/40"
                              : "text-[#07162C]/40"
                          }`}
                        >
                          0{idx + 1}
                        </span>
                      )}
                    </div>

                    <h3
                      className={`ohh-serif text-xl font-medium mb-2 ${
                        pathway.isDark ? "text-white" : "text-[#07162C]"
                      }`}
                    >
                      {titleText}
                    </h3>
                    <p
                      className={`text-sm leading-relaxed ${
                        pathway.isDark ? "text-white/75" : "text-[#07162C]/70"
                      }`}
                    >
                      {descText}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#07162C]/10">
                    {pathway.actionType === "button" ? (
                      <Link
                        href={pathway.href}
                        className="inline-flex w-full items-center justify-between text-sm font-semibold text-[#07162C] transition-colors hover:text-[#996515]"
                      >
                        <span>{footerText}</span>
                        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#07162C] text-[#E4B95A]">
                          <ArrowRight size={14} />
                        </div>
                      </Link>
                    ) : pathway.actionType === "cta" ? (
                      <Link
                        href={pathway.href}
                        className="block w-full rounded-full border border-[#E4B95A] bg-[#E4B95A] px-5 py-3 text-center text-sm font-semibold text-[#07162C] transition-colors hover:bg-[#EDC878]"
                      >
                        {footerText}
                      </Link>
                    ) : (
                      <Link
                        href={pathway.href}
                        className={`inline-flex w-full items-center justify-between text-xs font-bold uppercase tracking-wider ${
                          pathway.isDark ? "text-[#E4B95A]" : "text-[#996515]"
                        }`}
                      >
                        <span>{footerText}</span>
                        <ArrowRight size={14} />
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Detailed Sections ────────────────────────────────── */}
      <section className="py-12">
        <div className={wrap}>
          <div className="mb-10 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#996515]">
              {t.detailEyebrow}
            </span>
            <h2 className={`${heading} mt-2 text-3xl sm:text-4xl`}>
              {t.detailHeading}
            </h2>
          </div>

          <div className="space-y-4">
            {detailSections.map((section, idx) => {
              const Icon = section.icon;
              return (
                <div key={section.title} className={card}>
                  <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-12">
                    <div className="space-y-4 lg:col-span-5">
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#07162C] text-[#E4B95A]">
                          <Icon size={20} />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#996515]">
                          0{idx + 1} · {section.eyebrow}
                        </span>
                      </div>
                      <h3
                        className={`${heading} text-2xl font-medium sm:text-3xl`}
                      >
                        {section.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-[#07162C]/75 sm:text-base">
                        {section.desc}
                      </p>
                      <div className="flex items-center gap-2 pt-1 text-xs font-bold uppercase tracking-wider text-[#07162C]/60">
                        <span>{section.meta[0]}</span>
                        <span className="text-[#996515]">·</span>
                        <span className="text-[#07162C]">
                          {section.meta[1]}
                        </span>
                      </div>
                    </div>

                    <div className="lg:col-span-7">
                      <ul className="grid gap-3 sm:grid-cols-2">
                        {section.points.map((point) => (
                          <li
                            key={point}
                            className="flex items-start gap-3 rounded-2xl border border-[#07162C]/10 bg-[#F4F4F2] p-4 text-sm text-[#07162C]/80"
                          >
                            <CheckCircle2
                              size={16}
                              className="mt-0.5 shrink-0 text-[#996515]"
                            />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Pediatric Coming Soon Banner ─────────────────────── */}
      <section className="py-12">
        <div className={wrap}>
          <div className="relative overflow-hidden rounded-3xl bg-[#07162C] p-8 text-white sm:p-12 lg:p-14">
            <div className="absolute -bottom-12 -right-12 h-64 w-64 rounded-full bg-[#E4B95A]/10 blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl space-y-5">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#E4B95A]">
                <Bell size={13} />
                {t.pediatricEyebrow}
              </span>
              <h2 className={`${heading} text-3xl text-white sm:text-4xl`}>
                {t.pediatricHeading}
              </h2>
              <p className="text-sm leading-relaxed text-white/75 sm:text-base">
                {t.pediatricDesc}
              </p>
              <ul className="grid gap-3 pt-2 sm:grid-cols-3">
                {t.pediatricPoints.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E4B95A] text-xs font-bold text-[#07162C]">
                      ✓
                    </span>
                    <span className="text-white/85">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-[#E4B95A] bg-[#E4B95A] px-6 py-3 text-sm font-semibold text-[#07162C] transition-colors hover:bg-[#EDC878]"
                >
                  {t.pediatricBtn}
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Transition note ────────────────────────────────---- */}
      <section className="py-6">
        <div className={wrap}>
          <div className="flex flex-col gap-6 rounded-3xl border border-[#07162C]/10 bg-white p-6 sm:p-8 lg:flex-row lg:items-center">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#07162C] text-[#E4B95A]">
              <Activity size={22} />
            </div>
            <div className="flex-1 space-y-1">
              <h3 className="ohh-serif text-xl font-medium tracking-tight text-[#07162C]">
                {t.transitionTitle}
              </h3>
              <p className="text-sm leading-relaxed text-[#07162C]/70">
                {t.transitionDesc}
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-[#07162C] transition-colors hover:text-[#996515]"
            >
              {t.transitionBtn}
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}