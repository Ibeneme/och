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
    <main className="min-h-screen bg-[#051122] px-4 pb-24 pt-24 text-white sm:pt-32 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Sticky intro rail */}
          <div className="lg:col-span-4">
            <div className="space-y-6 lg:sticky lg:top-28">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#E4B95A]">
                <span className="h-2 w-2 rounded-full bg-[#E4B95A] animate-pulse" />
                {t.eyebrow}
              </span>
              <h1 className="ohh-serif text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                {t.heading}
                <span className="text-[#E4B95A]">.</span>
              </h1>
              <p className="text-base font-medium leading-relaxed text-white/70 sm:text-lg">
                {t.description}
              </p>
              <div className="hidden h-px w-16 bg-white/15 lg:block" />
              <div className="hidden flex-col gap-3 lg:flex">
                {carePathways.map((pathway, idx) => (
                  <a
                    key={pathway.titleKey}
                    href={`#pathway-${idx}`}
                    className="flex items-center gap-3 text-sm font-bold text-white/60 transition-colors hover:text-[#E4B95A]"
                  >
                    <span className="font-mono text-xs text-[#E4B95A]/70">
                      0{idx + 1}
                    </span>
                    {(t as Record<string, string>)[pathway.titleKey]}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* 2x2 card grid */}
          <div className="lg:col-span-8">
            <div className="grid gap-6 sm:grid-cols-2">
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
                    className={`group relative flex scroll-mt-28 flex-col justify-between rounded-3xl border p-8 transition-all duration-300 ${
                      pathway.isDark
                        ? "border-white/20 bg-[#07162C]"
                        : "border-white/15 bg-white/5"
                    }`}
                  >
                    {/* Top Section: Icon & Badge */}
                    <div className="mb-8 flex items-center justify-between">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E4B95A]/15 text-[#E4B95A]">
                        <Icon className="h-7 w-7" strokeWidth={1.75} />
                      </div>
                      {badgeText ? (
                        <span className="rounded-full bg-[#E4B95A] px-3.5 py-1.5 text-[11px] font-black uppercase tracking-wider text-[#07162C]">
                          {badgeText}
                        </span>
                      ) : (
                        <span className="font-mono text-xs font-bold uppercase tracking-widest text-white/40">
                          0{idx + 1}
                        </span>
                      )}
                    </div>

                    {/* Middle Section: Image banner + text details */}
                    <div className="space-y-6">
                      <div className="relative h-44 w-full overflow-hidden rounded-2xl">
                        <Image
                          src={pathway.image}
                          alt={titleText}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#07162C]/70 via-transparent to-transparent" />
                      </div>

                      <div>
                        <h3 className="ohh-serif mb-3 text-2xl font-medium tracking-tight text-white">
                          {titleText}
                        </h3>
                        <p className="text-sm font-medium leading-relaxed text-white/75">
                          {descText}
                        </p>
                      </div>
                    </div>

                    {/* Bottom Section: Actionable Footer */}
                    <div className="mt-8 pt-8">
                      {pathway.actionType === "button" ? (
                        <Link
                          href={pathway.href}
                          className="group/link inline-flex w-full items-center justify-between text-sm font-bold text-white transition-colors hover:text-[#E4B95A]"
                        >
                          <span>{footerText}</span>
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E4B95A] text-[#07162C] transition-transform duration-300 group-hover/link:translate-x-1">
                            <ArrowRight className="h-4 w-4" />
                          </div>
                        </Link>
                      ) : pathway.actionType === "cta" ? (
                        <Link
                          href={pathway.href}
                          className="block w-full rounded-full border border-[#E4B95A] bg-[#E4B95A] px-6 py-3.5 text-center text-sm font-bold text-[#07162C] transition-all hover:bg-[#EDC878]"
                        >
                          {footerText}
                        </Link>
                      ) : (
                        <Link
                          href={pathway.href}
                          className="inline-flex w-full items-center justify-between text-xs font-black uppercase tracking-widest text-[#E4B95A] hover:underline"
                        >
                          <span>{footerText}</span>
                          <ArrowRight className="h-3.5 w-3.5" />
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
