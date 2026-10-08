"use client";

import Link from "next/link";
import {
  ShieldCheck,
  Phone,
  ArrowRight,
  Heart,
  Award,
  Users,
  Activity,
  CheckCircle2,
  Bell,
  HeartHandshake,
} from "lucide-react";
import { useLanguage } from "@/src/context/LanguageContext";

export default function WhoWeServePage() {
  const { language } = useLanguage();

  const pathways = [
    {
      title: language === "es" ? "Adultos Mayores" : "Seniors",
      desc:
        language === "es"
          ? "Apoyando la seguridad, independencia, recuperación y calidad de vida en el hogar a través de asistencia especializada y rutinas personalizadas."
          : "Supporting safety, independence, recovery, and quality of life at home through specialized assistance and personalized care routines.",
      footer: language === "es" ? "Solicitar consulta" : "Request consultation",
      tag: language === "es" ? "Activo" : "Active",
      icon: Users,
    },
    {
      title: language === "es" ? "Veteranos" : "Veterans",
      desc:
        language === "es"
          ? "Cuidado respetuoso y enlaces directos a recursos oficiales de VA para veteranos y familias elegibles que buscan asistencia confiable."
          : "Respectful care and direct links to official VA resources for veterans and eligible families seeking dependable home assistance.",
      footer:
        language === "es"
          ? "Integración oficial de recursos VA"
          : "Official VA resource integration",
      tag: language === "es" ? "De Confianza" : "Trusted",
      icon: ShieldCheck,
    },
    {
      title:
        language === "es"
          ? "Adultos con Discapacidades"
          : "Adults with Disabilities",
      desc:
        language === "es"
          ? "Apoyo centrado en la persona que promueve la dignidad, la independencia diaria y asistencia personalizada estructurada según necesidades únicas."
          : "Person-centered support that promotes dignity, everyday independence, and tailored assistance structured around unique personal needs.",
      footer:
        language === "es"
          ? "Apoyo diario personalizado"
          : "Customized daily support",
      tag: language === "es" ? "Personalizado" : "Personalized",
      icon: HeartHandshake,
    },
    {
      title: language === "es" ? "Servicio Pediátrico" : "Pediatric Service",
      desc:
        language === "es"
          ? "Estamos expandiendo nuestras ofertas de cuidado especializado para apoyar a niños y jóvenes familias. Manténgase conectado."
          : "We are expanding our specialized care offerings to support children and young families. Stay connected for updates.",
      footer: language === "es" ? "Próximamente" : "Coming soon",
      tag: language === "es" ? "Próximamente" : "Coming soon",
      icon: Bell,
      comingSoon: true,
    },
  ];

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

  const t = {
    en: {
      badge: "Specialized in-home support",
      titlePre: "Who We",
      titleHighlight: "Serve",
      subtitle:
        "One Community Home Health delivers compassionate, personalized care designed for every stage of life across the Dallas-Fort Worth Metroplex.",
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
      pediatricDesc:
        "We are expanding our specialized care offerings to support children and young families. Our future pediatric program will focus on safe, family-centered care delivered in the comfort of home.",
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
      badge: "Apoyo especializado en el hogar",
      titlePre: "A Quién",
      titleHighlight: "Servimos",
      subtitle:
        "One Community Health ofrece atención compasiva y personalizada diseñada para cada etapa de la vida en todo el Metroplex de Dallas-Fort Worth.",
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
      pediatricDesc:
        "Estamos expandiendo nuestras ofertas de cuidado especializado para apoyar a niños y familias jóvenes. Nuestro futuro programa pediátrico se centrará en la atención segura centrada en la familia.",
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
  }[language];

  return (
    <main className="min-h-screen bg-[#F7F8FA] text-[#3A4657]">
      {/* ─── Hero ─────────────────────────────────────────────── */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#E8DFC8] bg-[#FBF8F2] px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-[#996515]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#E4B95A]" />
              {t.badge}
            </div>

            <h1 className="ohh-serif text-4xl font-semibold leading-[1.08] tracking-tight text-[#07162C] sm:text-5xl lg:text-6xl">
              {t.titlePre}{" "}
              <span className="text-[#C89B3C]">{t.titleHighlight}</span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#5B6B7C] sm:text-lg">
              {t.subtitle}
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="tel:9723251598"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#07162C] px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#0A2140]"
              >
                <Phone size={16} />
                {t.callBtn}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#E8DFC8] bg-white px-7 py-3.5 text-sm font-semibold text-[#07162C] transition-colors hover:border-[#C89B3C]"
              >
                {t.contactBtn}
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Commitment strip */}
          <div className="mt-14 rounded-[1.75rem] border border-[#E8DFC8] bg-[#FBF8F2] p-6 sm:p-8">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#07162C] text-[#E4B95A]">
                <ShieldCheck size={18} />
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#07162C]">
                  {t.commitmentTitle}
                </h3>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#996515]">
                  {t.commitmentSub}
                </p>
              </div>
            </div>
            <ul className="grid gap-4 sm:grid-cols-3">
              {t.commitPoints.map((point, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2.5 text-sm text-[#3A4657]"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E4B95A] text-xs font-bold text-[#07162C]">
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
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#996515]">
              {t.pathwayEyebrow}
            </p>
            <h2 className="ohh-serif text-3xl font-semibold tracking-tight text-[#07162C] sm:text-4xl">
              {t.pathwayHeading}
            </h2>
            <p className="mt-3 text-base text-[#5B6B7C] sm:text-lg">
              {t.pathwaySub}
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {pathways.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className={`flex flex-col justify-between rounded-[1.5rem] border p-6 transition-all ${
                    item.comingSoon
                      ? "border-[#07162C] bg-[#07162C] text-white"
                      : "border-[#E8DFC8] bg-white hover:border-[#C89B3C]"
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div
                        className={`flex h-11 w-11 items-center justify-center rounded-2xl ${
                          item.comingSoon
                            ? "bg-white/10 text-[#E4B95A]"
                            : "bg-[#FBF8F2] text-[#07162C]"
                        }`}
                      >
                        <Icon size={20} />
                      </div>
                      <span
                        className={`rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest ${
                          item.comingSoon
                            ? "bg-white/10 text-[#E4B95A]"
                            : "bg-[#FBF8F2] text-[#996515]"
                        }`}
                      >
                        {item.tag}
                      </span>
                    </div>
                    <h3
                      className={`ohh-serif text-lg font-semibold tracking-tight ${
                        item.comingSoon ? "text-white" : "text-[#07162C]"
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p
                      className={`text-sm leading-relaxed ${
                        item.comingSoon ? "text-white/70" : "text-[#5B6B7C]"
                      }`}
                    >
                      {item.desc}
                    </p>
                  </div>
                  <div
                    className={`mt-6 flex items-center justify-between border-t pt-4 text-xs font-bold uppercase tracking-wider ${
                      item.comingSoon
                        ? "border-white/10 text-[#E4B95A]"
                        : "border-[#E8DFC8] text-[#07162C]"
                    }`}
                  >
                    <span>{item.footer}</span>
                    {!item.comingSoon && (
                      <span className="text-[#C89B3C]">→</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Detailed Sections ────────────────────────────────── */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 max-w-2xl">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#996515]">
              {t.detailEyebrow}
            </p>
            <h2 className="ohh-serif text-3xl font-semibold tracking-tight text-[#07162C] sm:text-4xl">
              {t.detailHeading}
            </h2>
          </div>

          <div className="space-y-6">
            {detailSections.map((section, idx) => {
              const Icon = section.icon;
              return (
                <div
                  key={section.title}
                  className="rounded-[1.75rem] border border-[#E8DFC8] bg-[#F7F8FA] p-6 sm:p-8 lg:p-10"
                >
                  <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-12">
                    <div className="space-y-4 lg:col-span-5">
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#07162C] text-[#E4B95A]">
                          <Icon size={20} />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#996515]">
                          0{idx + 1} · {section.eyebrow}
                        </span>
                      </div>
                      <h3 className="ohh-serif text-2xl font-semibold leading-snug tracking-tight text-[#07162C] lg:text-[1.7rem]">
                        {section.title}
                      </h3>
                      <p className="text-[15px] leading-relaxed text-[#5B6B7C]">
                        {section.desc}
                      </p>
                      <div className="flex items-center gap-2 pt-1 text-xs font-bold uppercase tracking-wider text-[#5B6B7C]">
                        <span>{section.meta[0]}</span>
                        <span className="text-[#C89B3C]">·</span>
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
                            className="flex items-start gap-3 rounded-2xl border border-[#E8DFC8] bg-white p-4 text-sm text-[#3A4657]"
                          >
                            <CheckCircle2
                              size={16}
                              className="mt-0.5 shrink-0 text-[#C89B3C]"
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

      {/* ─── Pediatric Coming Soon ────────────────────────────── */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[1.75rem] bg-[#07162C] p-8 text-white sm:p-12 lg:p-14">
            <div className="max-w-2xl space-y-5">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-[#E4B95A]">
                <Bell size={13} />
                {t.pediatricEyebrow}
              </span>
              <h2 className="ohh-serif text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                {t.pediatricHeading}
              </h2>
              <p className="text-base leading-relaxed text-white/70 sm:text-lg">
                {t.pediatricDesc}
              </p>
              <ul className="grid gap-4 pt-2 sm:grid-cols-3">
                {t.pediatricPoints.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm">
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
                  className="inline-flex items-center gap-2 rounded-full bg-[#E4B95A] px-6 py-3 text-sm font-bold text-[#07162C] transition-colors hover:bg-[#EDC878]"
                >
                  {t.pediatricBtn}
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Transition note ──────────────────────────────────── */}
      <section className="pb-20 lg:pb-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 rounded-[1.75rem] border border-[#E8DFC8] bg-white p-6 sm:p-8 lg:flex-row lg:items-center">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#FBF8F2] text-[#07162C]">
              <Activity size={22} />
            </div>
            <div className="flex-1 space-y-1">
              <h3 className="ohh-serif text-xl font-semibold tracking-tight text-[#07162C]">
                {t.transitionTitle}
              </h3>
              <p className="text-sm leading-relaxed text-[#5B6B7C]">
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
