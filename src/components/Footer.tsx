"use client";

import Link from "next/link";
import {
  HeartHandshake,
  Phone,
  MapPin,
  Clock,
  ShieldCheck,
  Users,
  ArrowUpRight,
} from "lucide-react";
import { useLanguage } from "@/src/context/LanguageContext";
import footerContent from "@/src/locales/footer/footer.json";
import { siteConfig } from "@/src/constants/siteConfig";

/**
 * Responsive strategy
 * - One shared container (`wrap`) so every section has identical gutters at every width.
 * - Link columns adjust to fit the full navbar structure.
 * - Every text container has min-w-0 + break-words; the footer clips on x as a last guard.
 * - The giant wordmark scales with clamp() and is allowed to wrap.
 */
const wrap = "relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-12";

/* Legal links, in required order: the Notice of Privacy Practices is the
   legally required one, so it is first. Plain <Link> = real <a href>. */
const LEGAL_LINKS: { href: string; label: { en: string; es: string } }[] = [
  {
    href: "/privacy-policy",
    label: { en: "Privacy Policy", es: "Política de privacidad" },
  },
  {
    href: "/terms-of-service",
    label: { en: "Terms of Service", es: "Términos de servicio" },
  },
  {
    href: "/accessibility",
    label: { en: "Accessibility", es: "Accesibilidad" },
  },
  {
    href: "/nondiscrimination",
    label: { en: "Nondiscrimination", es: "No discriminación" },
  },
];

const FooterLinkColumn = ({
  title,
  links,
  language,
}: {
  title: string;
  links: { label: { en: string; es: string }; href: string }[];
  language: "en" | "es";
}) => (
  <div className="min-w-0">
    <h4 className="mb-4 break-words text-[11px] font-semibold uppercase tracking-[0.18em] text-[#E4B95A]/90 sm:mb-5">
      {title}
    </h4>
    <ul className="space-y-2.5 sm:space-y-3">
      {links.map((link) => (
        <li key={link.href + link.label.en} className="min-w-0">
          <Link
            href={link.href}
            className="group inline-flex max-w-full items-center gap-1.5 py-0.5 text-[14px] text-white/65 transition-colors duration-200 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E4B95A] sm:text-[13.5px]"
          >
            <span className="relative min-w-0 break-words">
              {link.label[language] || link.label.en}
              <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[#E4B95A] transition-all duration-300 group-hover:w-full" />
            </span>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default function Footer() {
  const { language } = useLanguage();
  const lang = (language === "es" ? "es" : "en") as "en" | "es";

  // Navbar-aligned link datasets
  const skilledServices = [
    {
      href: "/services/pediatric-services",
      label: {
        en: "Pediatric Home Care",
        es: "Cuidado Pediátrico en el Hogar",
      },
    },
    {
      href: "/services/skilled-nursing",
      label: { en: "Skilled Nursing", es: "Enfermería Especializada" },
    },
    {
      href: "/services/physical-therapy",
      label: { en: "Physical Therapy", es: "Fisioterapia" },
    },
    {
      href: "/services/occupational-therapy",
      label: { en: "Occupational Therapy", es: "Terapia Ocupacional" },
    },
    {
      href: "/services/speech-therapy",
      label: { en: "Speech Therapy", es: "Terapia del Habla" },
    },
    {
      href: "/services/medical-social-services",
      label: {
        en: "Medical Social Services",
        es: "Servicios Sociales Médicos",
      },
    },
    {
      href: "/services/home-health-aide",
      label: { en: "Home Health Aide", es: "Asistente de Salud en el Hogar" },
    },
  ];

  const personalAttendantServices = [
    {
      href: "/services/get-paid-to-care-for-a-loved-one",
      label: {
        en: "Get Paid to Care for a Loved One",
        es: "Gane dinero por cuidar a un ser querido",
      },
    },
    {
      href: "/services/personal-attendant-services",
      label: {
        en: "Personal Attendant Services",
        es: "Servicios de Asistencia Personal",
      },
    },
    {
      href: "/services/companion-care",
      label: { en: "Companion Care", es: "Cuidado de Acompañamiento" },
    },
    {
      href: "/services/respite-care",
      label: { en: "Respite Care", es: "Cuidado de Relevo" },
    },
    {
      href: "/services/daily-lifestyle-support",
      label: { en: "Daily Lifestyle Support", es: "Apoyo Diario" },
    },
  ];

  const specialtyServices = [
    {
      href: "/services/wound-care",
      label: { en: "Wound care", es: "Cuidado de heridas" },
    },
    {
      href: "/services/chronic-disease-management",
      label: { en: "Chronic disease care", es: "Enfermedades crónicas" },
    },
    {
      href: "/services/medication-management",
      label: { en: "Medication management", es: "Gestión de medicamentos" },
    },
    {
      href: "/services/post-surgical-care",
      label: { en: "Post-surgical care", es: "Cuidado post-quirúrgico" },
    },
    {
      href: "/services/fall-prevention",
      label: { en: "Fall prevention", es: "Prevención de caídas" },
    },
    {
      href: "/services/veteran-care",
      label: { en: "Veteran care", es: "Cuidado para veteranos" },
    },
  ];

  const aboutLinks = [
    {
      href: "/about-us",
      label: { en: "About our agency", es: "Sobre nuestra agencia" },
    },
    {
      href: "/about-us/leadership",
      label: { en: "Leadership team", es: "Equipo de liderazgo" },
    },
    {
      href: "/who-we-serve",
      label: { en: "Who we serve", es: "A quién servimos" },
    },
    {
      href: "/careers",
      label: { en: "Careers & hiring", es: "Empleos y contrataciones" },
    },
    {
      href: "/careers/cna-home-health-aide-application",
      label: {
        en: "CNA / Home Health Aide Application",
        es: "Solicitud CNA / Asistente",
      },
    },
  ];

  const resourceLinks = [
    {
      href: "/employee-resources/evv",
      label: { en: "EVV Clock-In Help", es: "Ayuda de Reloj EVV" },
    },
    {
      href: "/resources",
      label: {
        en: "Patient & Family Resources",
        es: "Recursos para Pacientes",
      },
    },
    {
      href: "/employee-resources",
      label: { en: "Employee Resources", es: "Recursos para Empleados" },
    },
    { href: "/contact", label: { en: "Contact us", es: "Contáctenos" } },
    {
      href: "/referrals",
      label: { en: "Refer a patient", es: "Referir a un paciente" },
    },
  ];

  const infoItems = [
    {
      icon: MapPin,
      label: footerContent.office.locationLabel[lang],
      lines: [siteConfig.address.full, siteConfig.address.street],
      accent: siteConfig.address.note[lang],
    },
    {
      icon: Clock,
      label: footerContent.office.hoursLabel[lang],
      lines: [siteConfig.hours[lang]],
      accent: footerContent.office.hoursNote[lang],
    },
    {
      icon: ShieldCheck,
      label: footerContent.office.coverageLabel[lang],
      lines: [footerContent.office.coverageLines[lang]],
      accent: footerContent.office.coverageNote[lang],
    },
    {
      icon: Users,
      label: footerContent.office.portalsLabel[lang],
      lines: [footerContent.office.portalsLines[lang]],
      accent: footerContent.office.portalsNote[lang],
    },
  ];

  return (
    <footer className="relative w-full overflow-hidden border-t border-[#102B4E] bg-[#07162C] text-white">
      <svg
        className="pointer-events-none absolute left-0 top-0 h-16 w-full opacity-[0.08] sm:h-24"
        viewBox="0 0 1200 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,60 C150,10 300,90 450,50 C600,10 750,90 900,45 C1000,15 1100,55 1200,30"
          fill="none"
          stroke="#E4B95A"
          strokeWidth="2"
          strokeDasharray="1 10"
          strokeLinecap="round"
        />
      </svg>

      {/* ===== Call-to-action banner ===== */}
      <div
        className={`${wrap} flex flex-col gap-6 border-b border-white/10 pb-10 pt-10 sm:gap-8 sm:pb-12 sm:pt-14 lg:flex-row lg:items-center lg:justify-between`}
      >
        <div className="min-w-0 max-w-xl">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#E4B95A]">
            {footerContent.banner.title[lang]}
          </p>
          <h3 className="text-balance break-words text-xl font-semibold leading-snug text-white sm:text-2xl md:text-3xl">
            {footerContent.banner.subtitle[lang]}
          </h3>
        </div>

        <div className="flex w-full min-w-0 flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap lg:shrink-0 lg:flex-nowrap">
          <a
            href={`tel:${siteConfig.contact.phoneTel}`}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3.5 text-center text-sm font-semibold text-white transition-colors hover:border-white/30 hover:bg-white/10 sm:w-auto sm:px-6"
          >
            <Phone size={16} className="shrink-0 text-[#E4B95A]" />
            <span className="whitespace-nowrap">
              {siteConfig.contact.phone}
            </span>
          </a>
          <Link
            href="/contact"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-yellow-400 px-5 py-3.5 text-center text-sm font-bold text-[#07162C] transition-colors hover:bg-[#D9A93F] sm:w-auto sm:px-6"
          >
            <HeartHandshake size={16} className="shrink-0" />
            <span className="min-w-0">
              {footerContent.buttons.requestConsultation[lang]}
            </span>
          </Link>
        </div>
      </div>

      {/* ===== Link columns + office info (Expanded grid layout matching all navbar options) ===== */}
      <div
        className={`${wrap} grid grid-cols-1 gap-x-6 gap-y-10 py-12 sm:grid-cols-2 sm:gap-y-12 sm:py-16 lg:grid-cols-3 xl:grid-cols-6`}
      >
        <div className="min-w-0">
          <FooterLinkColumn
            title={footerContent.columns.navigation[lang]}
            links={footerContent.navLinks}
            language={lang}
          />
        </div>

        <div className="min-w-0">
          <FooterLinkColumn
            title={lang === "es" ? "Atención Especializada" : "Skilled Care"}
            links={skilledServices}
            language={lang}
          />
        </div>

        <div className="min-w-0">
          <FooterLinkColumn
            title={
              lang === "es"
                ? "Cuidado Personal y de Asistencia"
                : "Attendant & Personal Care"
            }
            links={personalAttendantServices}
            language={lang}
          />
        </div>

        <div className="min-w-0">
          <FooterLinkColumn
            title={lang === "es" ? "Especialidades" : "Specialties"}
            links={specialtyServices}
            language={lang}
          />
        </div>

        <div className="min-w-0">
          <FooterLinkColumn
            title={lang === "es" ? "Nosotros" : "About Us"}
            links={aboutLinks}
            language={lang}
          />
          <div className="mt-8">
            <FooterLinkColumn
              title={lang === "es" ? "Recursos y Apoyo" : "Resources"}
              links={resourceLinks}
              language={lang}
            />
          </div>
        </div>

        <div className="min-w-0">
          <h4 className="mb-4 break-words text-[11px] font-semibold uppercase tracking-[0.18em] text-[#E4B95A]/90 sm:mb-5">
            {footerContent.columns.officeInfo[lang]}
          </h4>
          <div className="mb-6 space-y-4">
            {infoItems.map(({ icon: Icon, label, lines, accent }) => (
              <div key={label} className="flex min-w-0 items-start gap-3">
                <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/5">
                  <Icon size={14} className="text-[#E4B95A]" />
                </div>
                <div className="min-w-0">
                  <p className="break-words text-[11px] font-semibold uppercase tracking-wider text-white/50">
                    {label}
                  </p>
                  {lines.map((line) => (
                    <p
                      key={line}
                      className="break-words text-[13.5px] leading-snug text-white/80"
                    >
                      {line}
                    </p>
                  ))}
                  <p className="mt-0.5 break-words text-[12px] font-medium text-[#E4B95A]">
                    {accent}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-white transition-colors hover:text-[#E4B95A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E4B95A]"
          >
            {footerContent.office.directionsLink[lang]}
            <ArrowUpRight size={14} className="shrink-0" />
          </Link>
        </div>
      </div>

      {/* ===== Wordmark: fluid size, wraps instead of clipping ===== */}
      <div className={`${wrap} overflow-hidden pb-8 sm:pb-10`}>
        <h2 className="select-none text-balance break-words text-[clamp(2.25rem,9.5vw,8rem)] font-bold leading-[0.95] tracking-tighter text-white [-webkit-text-fill-color:transparent] [-webkit-text-stroke:1px_rgba(255,255,255,0.95)] lg:[-webkit-text-fill-color:white] lg:[-webkit-text-stroke:0]">
          {siteConfig.name}
        </h2>
      </div>

      {/* ===== Legal bar ===== */}
      <div className="relative border-t border-white/10">
        <div className={`${wrap} space-y-6 py-8`}>
          <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[15px] font-medium text-white">
            <span lang="en">Free language assistance available</span>
            <span className="hidden text-white/50 md:inline" aria-hidden="true">
              ·
            </span>
            <span lang="es">Asistencia lingüística gratuita disponible</span>
            <span className="hidden text-white/50 md:inline" aria-hidden="true">
              ·
            </span>
            <a
              href="tel:9723251598"
              className="whitespace-nowrap underline underline-offset-4 hover:text-[#E4B95A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E4B95A]"
            >
              972-325-1598
            </a>
          </p>

          <nav aria-label={lang === "es" ? "Información legal" : "Legal"}>
            <ul className="grid grid-cols-1 gap-x-7 gap-y-3 text-[15px] min-[420px]:grid-cols-2 md:flex md:flex-wrap">
              {LEGAL_LINKS.map((l, i) => (
                <li key={l.href} className="min-w-0">
                  <Link
                    href={l.href}
                    className={`break-words underline decoration-white/40 underline-offset-4 hover:text-[#E4B95A] hover:decoration-[#E4B95A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E4B95A] ${
                      i === 0
                        ? "font-semibold text-white"
                        : "font-medium text-white/90"
                    }`}
                  >
                    {l.label[lang]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="space-y-1.5 break-words border-t border-white/10 pt-6 text-sm leading-relaxed text-white/80">
            <p>{footerContent.legal.copyright[lang]}</p>
            <p>
              {lang === "es"
                ? "Licenciado por la Comisión de Salud y Servicios Humanos de Texas · Certificado por Medicare"
                : "Licensed by the Texas Health and Human Services Commission · Medicare-certified"}
            </p>
            <p>{footerContent.legal.operatedBy[lang]}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
