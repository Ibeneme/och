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
        language === "es" ? "Apoyo diario personalizado" : "Customized daily support",
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
        language === "es" ? "Apoyo certificado por Medicare" : "Medicare-certified support",
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
        language === "es" ? "Apoyo de autorización previa" : "Prior auth support",
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
      meta: ["Medicaid / STAR+PLUS", language === "es" ? "Programas de Texas" : "Texas programs"],
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
    <main className="min-h-screen bg-white text-[#3A4657]">
      {/* ===== Hero ===== */}
      <section className="relative bg-[#0A2140] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A2140]/80 via-[#0A2140]/70 to-[#0A2140]" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-[#E4B95A] font-bold text-xs tracking-wider uppercase mb-8">
            <span className="w-2 h-2 rounded-full bg-[#E4B95A] animate-pulse" />
            {t.badge}
          </div>

          <h1 className="ohh-serif text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.1] mb-6 tracking-tight">
            {t.titlePre} <span className="text-[#E4B95A]">{t.titleHighlight}</span>
          </h1>

          <p className="text-lg sm:text-xl text-white/75 mb-10 leading-relaxed max-w-2xl mx-auto">
            {t.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
            <a
              href="tel:9723251598"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#E4B95A] hover:bg-[#D9A93F] text-[#0A2140] font-bold rounded-full transition-colors"
            >
              <Phone size={18} />
              <span>{t.callBtn}</span>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/15 text-white font-bold rounded-full transition-colors backdrop-blur-sm"
            >
              <span>{t.contactBtn}</span>
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* Commitment Strip under hero */}
          <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-md rounded-2xl p-6 sm:p-8 text-left">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-[#E4B95A]/15 text-[#E4B95A] flex items-center justify-center">
                <ShieldCheck size={22} />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">
                  {t.commitmentTitle}
                </h3>
                <p className="text-xs text-[#E4B95A]/90 font-semibold">
                  {t.commitmentSub}
                </p>
              </div>
            </div>
            <ul className="grid sm:grid-cols-3 gap-4 text-sm text-white/80 font-medium">
              {t.commitPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#E4B95A] text-[#0A2140] flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-xs">
                    ✓
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ===== Four Pathways Overview ===== */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C89B3C] bg-[#E4B95A]/10 px-3.5 py-1.5 rounded-full">
              {t.pathwayEyebrow}
            </span>
            <h2 className="ohh-serif text-3xl sm:text-4xl font-semibold text-[#0A2140] tracking-tight">
              {t.pathwayHeading}
            </h2>
            <p className="text-[#5B6B7C]">{t.pathwaySub}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {pathways.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className={`rounded-3xl p-6 lg:p-7 flex flex-col justify-between min-h-[280px] transition-colors ${
                    item.comingSoon
                      ? "bg-[#0A2140] text-white"
                      : "bg-[#FBF8F2] hover:bg-[#F3ECDC]"
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div
                        className={`w-11 h-11 rounded-2xl flex items-center justify-center ${
                          item.comingSoon
                            ? "bg-[#E4B95A]/15 text-[#E4B95A]"
                            : "bg-[#F3ECDC] text-[#0A2140]"
                        }`}
                      >
                        <Icon size={22} />
                      </div>
                      <span
                        className={`text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-md ${
                          item.comingSoon
                            ? "bg-[#E4B95A]/15 text-[#E4B95A]"
                            : "bg-white text-[#8A7B5C]"
                        }`}
                      >
                        {item.tag}
                      </span>
                    </div>
                    <h3
                      className={`text-xl font-bold tracking-tight ${
                        item.comingSoon ? "text-white" : "text-[#0A2140]"
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p
                      className={`text-sm leading-relaxed ${
                        item.comingSoon ? "text-white/65" : "text-[#5B6B7C]"
                      }`}
                    >
                      {item.desc}
                    </p>
                  </div>
                  <div
                    className={`mt-6 pt-4 text-xs font-bold uppercase tracking-wider flex items-center gap-2 ${
                      item.comingSoon ? "text-[#E4B95A]" : "text-[#0A2140]"
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

      {/* ===== Detailed Sections ===== */}
      <section className="py-20 lg:py-28 bg-[#FBF8F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C89B3C] bg-[#E4B95A]/10 px-3.5 py-1.5 rounded-full">
              {t.detailEyebrow}
            </span>
            <h2 className="ohh-serif text-3xl sm:text-4xl font-semibold text-[#0A2140] tracking-tight">
              {t.detailHeading}
            </h2>
          </div>

          <div className="space-y-10">
            {detailSections.map((section, idx) => {
              const Icon = section.icon;
              const flipped = idx % 2 === 1;
              return (
                <div
                  key={section.title}
                  className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-white rounded-3xl p-8 lg:p-10"
                >
                  <div
                    className={`lg:col-span-5 ${
                      flipped ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <div className="w-12 h-12 rounded-2xl bg-[#F3ECDC] text-[#0A2140] flex items-center justify-center mb-5">
                      <Icon size={24} />
                    </div>
                    <span className="text-xs font-bold tracking-widest uppercase text-[#C89B3C] block mb-2">
                      {section.eyebrow}
                    </span>
                    <h3 className="ohh-serif text-2xl lg:text-3xl font-semibold text-[#0A2140] tracking-tight mb-4">
                      {section.title}
                    </h3>
                    <p className="text-[#5B6B7C] text-sm leading-relaxed mb-6">
                      {section.desc}
                    </p>
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#8A93A0]">
                      <span>{section.meta[0]}</span>
                      <span className="text-[#C89B3C]">·</span>
                      <span className="text-[#0A2140]">{section.meta[1]}</span>
                    </div>
                  </div>
                  <div
                    className={`lg:col-span-7 ${
                      flipped ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <ul className="grid sm:grid-cols-2 gap-4">
                      {section.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-2.5 bg-[#FBF8F2] rounded-2xl p-4 text-sm font-medium text-[#3A4657]"
                        >
                          <CheckCircle2
                            size={16}
                            className="text-[#C89B3C] flex-shrink-0 mt-0.5"
                          />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== Pediatric Coming Soon ===== */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0A2140] rounded-3xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="p-10 sm:p-12 lg:p-14 text-white flex flex-col justify-center">
                <span className="inline-flex items-center gap-2 text-[#E4B95A] font-bold text-xs uppercase tracking-[0.15em] mb-5 bg-white/10 px-3 py-1.5 rounded-full w-fit">
                  <Bell size={14} />
                  {t.pediatricEyebrow}
                </span>
                <h2 className="ohh-serif text-3xl sm:text-4xl font-semibold mb-5 tracking-tight leading-tight">
                  {t.pediatricHeading}
                </h2>
                <p className="text-white/70 mb-6 leading-relaxed max-w-lg">
                  {t.pediatricDesc}
                </p>
                <ul className="space-y-3 text-white/80 text-sm font-medium mb-8">
                  {t.pediatricPoints.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-[#E4B95A] text-[#0A2140] flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-xs">
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#0F6DF9] text-[#fff] font-bold rounded-full transition-colors w-fit"
                >
                  <span>{t.pediatricBtn}</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
              <div className="relative min-h-[280px] lg:min-h-full">
                <img
                  src="https://plus.unsplash.com/premium_photo-1747608208489-4b68e2433588?w=900&auto=format&fit=crop&q=60"
                  alt="Pediatric care coming soon"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2140]/80 via-[#0A2140]/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Post-Hospital / Transitions Note ===== */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FBF8F2] rounded-3xl p-8 lg:p-10 flex flex-col lg:flex-row lg:items-center gap-8">
            <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-[#F3ECDC] text-[#0A2140] flex items-center justify-center">
              <Activity size={28} />
            </div>
            <div className="flex-1">
              <h3 className="ohh-serif text-xl font-semibold text-[#0A2140] mb-2 tracking-tight">
                {t.transitionTitle}
              </h3>
              <p className="text-[#5B6B7C] text-sm leading-relaxed">
                {t.transitionDesc}
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#0A2140] hover:text-[#C89B3C] transition-colors shrink-0"
            >
              {t.transitionBtn}
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}