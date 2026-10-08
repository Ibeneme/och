"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Users,
  ShieldCheck,
  HeartHandshake,
  Bell,
} from "lucide-react";
import { useLanguage } from "@/src/context/LanguageContext";

interface CarePathway {
  titleKey: string;
  descKey: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  badgeKey?: string;
  image: string;
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
    image: "/images/home_e.jpg",
    actionType: "button",
    footerKey: "requestConsultation",
    href: "/who-we-serve/seniors",
  },
  {
    titleKey: "veteransTitle",
    descKey: "veteransDesc",
    icon: ShieldCheck,
    badgeKey: "trustedBadge",
    image: "/images/home_b.jpg",
    actionType: "text",
    footerKey: "vaIntegration",
    href: "/services/veteran-care",
  },
  {
    titleKey: "disabilitiesTitle",
    descKey: "disabilitiesDesc",
    icon: HeartHandshake,
    badgeKey: "personalizedBadge",
    image: "/images/home_c.jpg",
    actionType: "text",
    footerKey: "customSupport",
    href: "/services/adults-with-disabilities",
  },
  {
    titleKey: "pediatricTitle",
    descKey: "pediatricDesc",
    icon: Bell,
    badgeKey: "comingSoonBadge",
    image: "/images/paediatric-care.jpg",
    isDark: true,
    actionType: "cta",
    footerKey: "explorePediatric",
    href: "/services/pediatric-services",
  },
];

export default function ServicesLandingPage() {
  const { language } = useLanguage();

  const translations = {
    en: {
      eyebrow: "Who We Serve",
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
    },
    es: {
      eyebrow: "A Quién Servimos",
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
    },
  };

  const t = translations[language];

  return (
    <main className="bg-[#051122] min-h-screen pt-24 sm:pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Sticky intro rail */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28 space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#E4B95A] bg-white/10 w-fit">
                <span className="w-2 h-2 rounded-full bg-[#E4B95A]" />
                {t.eyebrow}
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-[1.08]">
                {t.heading}
                <span className="text-[#E4B95A]">.</span>
              </h1>
              <p className="text-base sm:text-lg text-white/70 font-medium leading-relaxed">
                {t.description}
              </p>
              <div className="hidden lg:block h-px w-16 bg-white/15" />
              <div className="hidden lg:flex flex-col gap-3">
                {carePathways.map((pathway, idx) => (
                  <a
                    key={pathway.titleKey}
                    href={`#pathway-${idx}`}
                    className="flex items-center gap-3 text-sm font-bold text-white/60 hover:text-[#E4B95A] transition-colors"
                  >
                    <span className="text-[#E4B95A]/70 text-xs font-mono">
                      0{idx + 1}
                    </span>
                    {/* @ts-ignore */}
                    {t[pathway.titleKey]}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* 2x2 card grid */}
          <div className="lg:col-span-8">
            <div className="grid sm:grid-cols-2 gap-6">
              {carePathways.map((pathway, idx) => {
                const Icon = pathway.icon;
                const titleText = (t as Record<string, string>)[
                  pathway.titleKey
                ];
                const descText = (t as Record<string, string>)[pathway.descKey];
                const badgeText = pathway.badgeKey
                  ? (t as Record<string, string>)[pathway.badgeKey]
                  : undefined;
                const footerText = (t as Record<string, string>)[
                  pathway.footerKey
                ];

                return (
                  <div
                    key={pathway.titleKey}
                    id={`pathway-${idx}`}
                    className="group relative rounded-[32px] p-8 flex flex-col justify-between scroll-mt-28 bg-[#0C213F]/50 transition-all duration-300 text-white"
                  >
                    {/* Top Section: Icon & Badge */}
                    <div className="flex items-center justify-between mb-8">
                      <div className="w-14 h-14 rounded-2xl bg-[#E4B95A]/10 text-[#E4B95A] flex items-center justify-center">
                        <Icon className="w-7 h-7" strokeWidth={1.75} />
                      </div>
                      {badgeText ? (
                        <span className="text-[11px] font-black tracking-wider text-[#07162C] uppercase bg-[#E4B95A] px-3.5 py-1.5 rounded-full">
                          {badgeText}
                        </span>
                      ) : (
                        <span className="text-xs font-bold text-white/40 uppercase tracking-widest font-mono">
                          Pathway 0{idx + 1}
                        </span>
                      )}
                    </div>

                    {/* Middle Section: Image banner + text details */}
                    <div className="space-y-6">
                      <div className="relative h-44 w-full rounded-2xl overflow-hidden">
                        <img
                          src={pathway.image}
                          alt={titleText}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#07162C]/70 via-transparent to-transparent" />
                      </div>

                      <div>
                        <h3 className="text-2xl font-semibold tracking-tight text-white mb-3">
                          {titleText}
                        </h3>
                        <p className="text-sm text-white/75 font-medium leading-relaxed">
                          {descText}
                        </p>
                      </div>
                    </div>

                    {/* Bottom Section: Actionable Footer */}
                    <div className="pt-8 mt-8">
                      {pathway.actionType === "button" ? (
                        <Link
                          href={pathway.href}
                          className="inline-flex items-center text-sm font-bold text-white hover:text-[#E4B95A] transition-colors cursor-pointer w-full justify-between group/link"
                        >
                          <span>{footerText}</span>
                          <div className="w-8 h-8 rounded-full bg-[#E4B95A] text-[#07162C] flex items-center justify-center transition-transform duration-300 group-hover/link:translate-x-1">
                            <ArrowRight className="w-4 h-4" />
                          </div>
                        </Link>
                      ) : pathway.actionType === "cta" ? (
                        <Link
                          href={pathway.href}
                          className="w-full bg-[#E4B95A] hover:bg-[#D9A93F] text-[#07162C] font-bold px-6 py-3.5 rounded-full text-sm transition-all text-center cursor-pointer block active:scale-[0.98]"
                        >
                          {footerText}
                        </Link>
                      ) : (
                        <Link
                          href={pathway.href}
                          className="inline-flex items-center justify-between text-xs font-black tracking-widest text-[#E4B95A] uppercase w-full hover:underline"
                        >
                          <span>{footerText}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
