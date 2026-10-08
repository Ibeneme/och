"use client";

import { useState, useEffect, useRef, type ReactNode } from "react";
import Link from "next/link";
import {
  ChevronDown,
  Menu,
  X,
  HeartHandshake,
  Phone,
  Stethoscope,
  Heart,
  Users,
  Shield,
  Briefcase,
  Activity,
  ArrowRight,
  BookOpen,
  UserCheck,
  Globe,
  Home,
  CreditCard,
  Clock,
} from "lucide-react";
import { useLanguage } from "@/src/context/LanguageContext";

/**
 * Responsive strategy
 * - < md   : top bar shows phone numbers only; full navigation lives in the drawer.
 * - md–xl  : top bar stacks (banner above phones); drawer navigation.
 * - >= xl  : full desktop navigation + mega menus (1280px is the first width where
 *            logo + 5 links + actions always fit, including the longer Spanish labels).
 * - The drawer is anchored to the header itself (top-full), so it follows the real
 *   header height no matter how many lines the top bar wraps to.
 * - Every flex child that holds text has min-w-0, and the header clips on the x-axis,
 *   so nothing can ever create horizontal scroll.
 */

const SteadyLine = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 170 20"
    className={className}
    aria-hidden="true"
    fill="none"
  >
    <path
      d="M0 10 H55 L62 10 L67 2 L74 18 L80 10 L86 10 L91 6 L96 10 H170"
      stroke="#E4B95A"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="ohh-pulse-path"
    />
  </svg>
);

const desktopLink =
  "px-3 2xl:px-3.5 py-2 rounded-lg text-[13px] font-semibold text-[#3A4657] hover:text-[#0A2140] hover:bg-[#F3ECDC]/70 transition-colors whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0A2140]/30";

const reveal =
  "opacity-0 invisible pointer-events-none group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:visible group-focus-within:pointer-events-auto transition-all duration-200";

export default function Navbar() {
  const { language, setLanguage } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<
    string | null
  >(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [headerH, setHeaderH] = useState(120);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Track the real header height so the drawer can size itself to the viewport.
  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const update = () => setHeaderH(el.offsetHeight);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Close the drawer when the desktop layout takes over, and on Escape.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1280px)");
    const onChange = () => {
      if (mq.matches) {
        setMobileMenuOpen(false);
        setActiveMobileDropdown(null);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
        setLangOpen(false);
      }
    };
    mq.addEventListener("change", onChange);
    document.addEventListener("keydown", onKey);
    return () => {
      mq.removeEventListener("change", onChange);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  useEffect(() => {
    if (!langOpen) return;
    const onDown = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest("[data-lang-toggle]")) setLangOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [langOpen]);

  const toggleMobileDropdown = (name: string) => {
    setActiveMobileDropdown(activeMobileDropdown === name ? null : name);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setActiveMobileDropdown(null);
  };

  const t = {
    en: {
      banner:
        "JACOP Healthcare Services, Inc., doing business as One Community Home Health. Serving Clients Since 2010",
      referPatient: "Refer a patient",
      newPatients: "New patients & referrals:",
      newPatientsShort: "New patients:",
      mainOffice: "Main office:",
      mainOfficeShort: "Office:",
      home: "Home",
      services: "Services",
      about: "About",
      insurance: "Insurance & payment",
      resources: "Resources",
      requestCare: "Request care",
      evvHelp: "EVV Clock-In Help",
      inHomeCare: "In-home care",
      clinicalCareTitle: "Comprehensive care options",
      clinicalCareDesc:
        "Skilled clinical care and compassionate personal attendant services tailored for DFW families.",
      scheduleAssessment: "Schedule an assessment",
      clinicalDisciplines: "Skilled care",
      attendantCare: "Attendant & personal care",
      specialties: "Specialties",
      whoWeAre: "Who we are",
      getTeam: "Get to know our team",
      getTeamDesc:
        "Rooted in trust, led by clinicians who call this community home.",
      fullStory: "Our full story",
      support: "Support",
      guidesRes: "Guides & resources",
      guidesResDesc:
        "Forms, FAQs, and support for patients, families, and our care team.",
      browseAllRes: "Browse all resources",
      language: "Language",
      openMenu: "Open navigation menu",
      closeMenu: "Close navigation menu",
    },
    es: {
      banner:
        "JACOP Healthcare Services, Inc., haciendo negocios como One Community Home Health. Sirviendo a clientes desde 2010",
      referPatient: "Referir a un paciente",
      newPatients: "Pacientes nuevos y referencias:",
      newPatientsShort: "Pacientes nuevos:",
      mainOffice: "Oficina principal:",
      mainOfficeShort: "Oficina:",
      home: "Inicio",
      services: "Servicios",
      about: "Nosotros",
      insurance: "Seguros y pagos",
      resources: "Recursos",
      requestCare: "Solicitar atención",
      evvHelp: "Ayuda de Reloj EVV",
      inHomeCare: "Cuidado en casa",
      clinicalCareTitle: "Opciones integrales de atención",
      clinicalCareDesc:
        "Atención clínica especializada y servicios de asistencia personal adaptados para familias de DFW.",
      scheduleAssessment: "Programar una evaluación",
      clinicalDisciplines: "Atención especializada",
      attendantCare: "Cuidado personal y de asistencia",
      specialties: "Especialidades",
      whoWeAre: "Quiénes somos",
      getTeam: "Conozca a nuestro equipo",
      getTeamDesc:
        "Arraigados en la confianza, dirigidos por profesionales clínicos que llaman hogar a esta comunidad.",
      fullStory: "Nuestra historia completa",
      support: "Apoyo",
      guidesRes: "Guías y recursos",
      guidesResDesc:
        "Formularios, preguntas frecuentes y apoyo para pacientes, familias y nuestro equipo de atención.",
      browseAllRes: "Ver todos los recursos",
      language: "Idioma",
      openMenu: "Abrir menú de navegación",
      closeMenu: "Cerrar menú de navegación",
    },
  }[language];

  const skilledServices = [
    {
      href: "/services/pediatric-services",
      label:
        language === "en"
          ? "Pediatric Home Care"
          : "Cuidado Pediátrico en el Hogar",
      desc:
        language === "en"
          ? "Specialized pediatric nursing and respite care"
          : "Enfermería pediátrica y cuidado de relevo",
    },
    {
      href: "/services/skilled-nursing",
      label: language === "en" ? "Skilled Nursing" : "Enfermería Especializada",
      desc:
        language === "en"
          ? "24/7 registered nursing care at home"
          : "Cuidado de enfermería 24/7 en casa",
    },
    {
      href: "/services/physical-therapy",
      label: language === "en" ? "Physical Therapy" : "Fisioterapia",
      desc:
        language === "en"
          ? "Rehabilitation and mobility recovery"
          : "Rehabilitación y recuperación de movilidad",
    },
    {
      href: "/services/occupational-therapy",
      label: language === "en" ? "Occupational Therapy" : "Terapia Ocupacional",
      desc:
        language === "en"
          ? "Daily living skills adaptation"
          : "Adaptación de habilidades de la vida diaria",
    },
    {
      href: "/services/speech-therapy",
      label: language === "en" ? "Speech Therapy" : "Terapia del Habla",
      desc:
        language === "en"
          ? "Speech and swallowing therapy"
          : "Terapia de lenguaje y deglución",
    },
    {
      href: "/services/medical-social-services",
      label:
        language === "en"
          ? "Medical Social Services"
          : "Servicios Sociales Médicos",
      desc:
        language === "en"
          ? "Counseling and community support"
          : "Asesoramiento y apoyo comunitario",
    },
    {
      href: "/services/home-health-aide",
      label:
        language === "en"
          ? "Home Health Aide"
          : "Asistente de Salud en el Hogar",
      desc:
        language === "en"
          ? "Personal care and daily assistance"
          : "Cuidado personal y asistencia diaria",
    },
  ];

  const personalAttendantServices = [
    {
      href: "/services/get-paid-to-care-for-a-loved-one",
      label:
        language === "en"
          ? "Get Paid to Care for a Loved One"
          : "Gane dinero por cuidar a un ser querido",
      desc:
        language === "en"
          ? "Texas Medicaid family caregiver program"
          : "Programa de cuidadores familiares de Medicaid",
    },
    {
      href: "/services/personal-attendant-services",
      label:
        language === "en"
          ? "Personal Attendant Services"
          : "Servicios de Asistencia Personal",
      desc:
        language === "en"
          ? "Daily living and personal care support"
          : "Apoyo con actividades de la vida diaria",
    },
    {
      href: "/services/companion-care",
      label: language === "en" ? "Companion Care" : "Cuidado de Acompañamiento",
      desc:
        language === "en"
          ? "Friendly social connection and assistance"
          : "Conexión social y asistencia amigable",
    },
    {
      href: "/services/respite-care",
      label: language === "en" ? "Respite Care" : "Cuidado de Relevo",
      desc:
        language === "en"
          ? "Temporary relief for family caregivers"
          : "Alivio temporal para cuidadores familiares",
    },
    {
      href: "/services/daily-lifestyle-support",
      label: language === "en" ? "Daily Lifestyle Support" : "Apoyo Diario",
      desc:
        language === "en"
          ? "Assistance with routine household tasks"
          : "Asistencia con tareas domésticas rutinarias",
    },
  ];

  const specialtyServices = [
    {
      href: "/services/wound-care",
      label: language === "en" ? "Wound care" : "Cuidado de heridas",
    },
    {
      href: "/services/chronic-disease-management",
      label:
        language === "en" ? "Chronic disease care" : "Enfermedades crónicas",
    },
    {
      href: "/services/medication-management",
      label:
        language === "en" ? "Medication management" : "Gestión de medicamentos",
    },
    {
      href: "/services/post-surgical-care",
      label:
        language === "en" ? "Post-surgical care" : "Cuidado post-quirúrgico",
    },
    {
      href: "/services/fall-prevention",
      label: language === "en" ? "Fall prevention" : "Prevención de caídas",
    },
    {
      href: "/services/veteran-care",
      label: language === "en" ? "Veteran care" : "Cuidado para veteranos",
    },
  ];

  const aboutLinks = [
    {
      href: "/about-us",
      label: language === "en" ? "About our agency" : "Sobre nuestra agencia",
      icon: Heart,
      desc:
        language === "en"
          ? "Our mission, vision, and values"
          : "Nuestra misión, visión y valores",
    },
    {
      href: "/about-us/leadership",
      label: language === "en" ? "Leadership team" : "Equipo de liderazgo",
      icon: Users,
      desc:
        language === "en"
          ? "Meet our executive leadership"
          : "Conozca a nuestro equipo ejecutivo",
    },
    {
      href: "/who-we-serve",
      label: language === "en" ? "Who we serve" : "A quién servimos",
      icon: Shield,
      desc:
        language === "en"
          ? "Seniors and the families we support"
          : "Personas mayores y familias",
    },
    {
      href: "/careers",
      label:
        language === "en" ? "Careers & hiring" : "Empleos y contrataciones",
      icon: Briefcase,
      desc:
        language === "en"
          ? "Join our team of care professionals"
          : "Únase a nuestro equipo profesional",
    },
    {
      href: "/careers/cna-home-health-aide-application",
      label:
        language === "en"
          ? "CNA / Home Health Aide Application"
          : "Solicitud CNA / Asistente",
      icon: UserCheck,
      desc:
        language === "en"
          ? "Apply to join our home health aide program"
          : "Aplique a nuestro programa",
    },
  ];

  const resourceLinks = [
    {
      href: "/employee-resources/evv",
      label: language === "en" ? "EVV Clock-In Help" : "Ayuda de Reloj EVV",
      icon: Clock,
      desc:
        language === "en"
          ? "Troubleshooting and how-to for app, FOB, and phone"
          : "Guía de uso para app, FOB y llamadas",
    },
    {
      href: "/resources",
      label:
        language === "en"
          ? "Patient & Family Resources"
          : "Recursos para Pacientes",
      icon: BookOpen,
      desc:
        language === "en"
          ? "Educational guides, FAQs, and forms for patients"
          : "Guías, preguntas frecuentes y formularios",
    },
    {
      href: "/employee-resources",
      label:
        language === "en" ? "Employee Resources" : "Recursos para Empleados",
      icon: UserCheck,
      desc:
        language === "en"
          ? "Handbook, HR/payroll support, EVV, and reporting instructions"
          : "Manual, soporte de recursos humanos y más",
    },
    {
      href: "/contact",
      label: language === "en" ? "Contact us" : "Contáctenos",
      icon: Phone,
      desc:
        language === "en"
          ? "Get in touch or schedule a consultation"
          : "Póngase en contacto o programe una consulta",
    },
    {
      href: "/referrals",
      label: language === "en" ? "Refer a patient" : "Referir a un paciente",
      icon: HeartHandshake,
      desc:
        language === "en"
          ? "Start a referral for someone in your care"
          : "Inicie una referencia",
    },
  ];

  /* ---------- Language toggle (desktop / tablet dropdown) ---------- */
  const LangToggle = () => (
    <div className="relative" data-lang-toggle>
      <button
        type="button"
        onClick={() => setLangOpen((v) => !v)}
        aria-label="Change language"
        aria-expanded={langOpen}
        className="inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-[#E8DFCB] bg-[#FBF8F2] px-3 py-2 text-[13px] text-[#0A2140] transition-all hover:bg-[#F3ECDC] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0A2140]/30"
      >
        <Globe size={14} className="shrink-0 opacity-70" />
        <span className="font-semibold tracking-wide">
          {language === "en" ? "EN" : "ES"}
        </span>
        <span className="text-[14px] leading-none" aria-hidden>
          {language === "en" ? "🇺🇸" : "🇪🇸"}
        </span>
        <ChevronDown
          size={12}
          className={`opacity-50 transition-transform duration-200 ${
            langOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {langOpen && (
        <div className="absolute right-0 top-full z-[70] mt-1.5 min-w-[140px] max-w-[calc(100vw-1.5rem)] rounded-xl border border-[#EFE8D8] bg-white py-1 shadow-lg shadow-[#0A2140]/[0.08]">
          {(
            [
              ["en", "🇺🇸", "English"],
              ["es", "🇪🇸", "Español"],
            ] as const
          ).map(([code, flag, name]) => (
            <button
              key={code}
              type="button"
              onClick={() => {
                setLanguage(code);
                setLangOpen(false);
              }}
              className={`flex w-full cursor-pointer items-center gap-2.5 px-3 py-2 text-left text-[13px] transition-colors ${
                language === code
                  ? "bg-[#F3ECDC] font-semibold text-[#0A2140]"
                  : "text-[#3A4657] hover:bg-[#FBF8F2]"
              }`}
            >
              <span className="text-[15px]">{flag}</span>
              <span>{name}</span>
              {language === code && (
                <span className="ml-auto h-1.5 w-1.5 rounded-full bg-[#E4B95A]" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );

  /* ---------- Mobile accordion helper (plain function, not a component,
     so open/close transitions are not interrupted by re-mounting) ---------- */
  const renderAccordion = (
    key: string,
    label: string,
    icon: ReactNode,
    maxH: string,
    children: ReactNode
  ) => {
    const open = activeMobileDropdown === key;
    return (
      <div className="overflow-hidden rounded-xl bg-white/40">
        <button
          type="button"
          onClick={() => toggleMobileDropdown(key)}
          aria-expanded={open}
          className="flex w-full cursor-pointer items-center justify-between gap-3 rounded-xl p-3 font-semibold text-[#2C3947] transition-colors hover:bg-[#FBF8F2] sm:p-3.5"
        >
          <span className="flex min-w-0 items-center gap-3">
            <span className="shrink-0 rounded-lg bg-[#F3ECDC] p-2 text-[#0A2140]">
              {icon}
            </span>
            <span className="min-w-0 break-words text-left">{label}</span>
          </span>
          <ChevronDown
            size={15}
            className={`shrink-0 text-[#8A7B5C] transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            open
              ? `${maxH} px-1.5 pb-3 opacity-100 sm:px-2`
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="space-y-1 rounded-xl border border-[#F0EBDD] bg-white p-2.5 text-sm sm:p-3">
            {children}
          </div>
        </div>
      </div>
    );
  };

  const mobileSubLink =
    "block min-w-0 break-words rounded-lg p-2 text-[13px] font-semibold text-[#3A4657] transition-colors hover:bg-[#FBF8F2] hover:text-[#0A2140]";
  const mobileGroupLabel =
    "px-2 pt-1 text-[10px] font-bold uppercase tracking-[0.1em] text-[#8A7B5C]";

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 w-full overflow-x-clip"
    >
      {/* ===== Top utility bar ===== */}
      <div className="relative z-50 bg-[#0A2140] px-3 py-2 text-[11px] text-white sm:px-6 sm:text-[12px] lg:px-8">
        <div className="mx-auto flex w-full max-w-7xl min-w-0 flex-col gap-1 xl:flex-row xl:items-center xl:justify-between xl:gap-6">
          {/* Banner: hidden on phones (repeated at the bottom of the drawer) */}
          <span className="hidden min-w-0 items-start gap-1.5 leading-snug text-[#A8C0D4] md:inline-flex">
            <span className="relative mt-[5px] flex h-1.5 w-1.5 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#7FA283] opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#7FA283]" />
            </span>
            <span className="min-w-0 break-words">{t.banner}</span>
          </span>

          <div className="flex min-w-0 flex-wrap items-center justify-center gap-x-5 gap-y-1 md:justify-start xl:shrink-0 xl:justify-end">
            <SteadyLine className="hidden h-3 w-12 opacity-90 xl:block" />

            <Link
              href="/referrals"
              className="group hidden items-center gap-1 whitespace-nowrap font-medium text-white/75 transition-colors hover:text-[#E4B95A] md:inline-flex"
            >
              <span>{t.referPatient}</span>
              <ArrowRight
                size={12}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </Link>

            <div className="flex min-w-0 flex-wrap items-center justify-center gap-x-3 gap-y-1 md:justify-start">
              <span className="inline-flex items-center gap-1">
                <span className="font-medium text-white/60">
                  <span className="hidden sm:inline">{t.newPatients}</span>
                  <span className="sm:hidden">{t.newPatientsShort}</span>
                </span>
                <a
                  href="tel:9728489174"
                  className="whitespace-nowrap font-bold text-[#E4B95A] hover:underline"
                >
                  (972) 848-9174
                </a>
              </span>
              <span
                className="hidden text-white/30 sm:inline"
                aria-hidden="true"
              >
                |
              </span>
              <span className="inline-flex items-center gap-1">
                <span className="font-medium text-white/60">
                  <span className="hidden sm:inline">{t.mainOffice}</span>
                  <span className="sm:hidden">{t.mainOfficeShort}</span>
                </span>
                <a
                  href="tel:9723251598"
                  className="whitespace-nowrap font-semibold text-white hover:underline"
                >
                  (972) 325-1598
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Main navbar =====
          `relative` here so the Services mega menu can centre itself on the
          full-width bar and can never poke outside the viewport. */}
      <div
        className={`relative z-50 border-b bg-white px-3 transition-all duration-300 sm:px-6 lg:px-8 ${
          isScrolled
            ? "border-[#E8DFCB] py-2 shadow-[0_1px_12px_rgba(10,33,64,0.06)]"
            : "border-[#F0E9D9] py-3 sm:py-3.5"
        }`}
      >
        <nav
          className="mx-auto flex w-full max-w-7xl min-w-0 items-center justify-between gap-3 sm:gap-4"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            href="/"
            className="group -ml-1 flex min-w-0 shrink items-center gap-2.5 rounded-xl p-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0A2140]/40 sm:gap-3"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0A2140] transition-colors group-hover:bg-[#123258] sm:h-10 sm:w-10">
              <HeartHandshake
                size={18}
                className="text-[#E4B95A] sm:h-5 sm:w-5"
              />
            </div>
            <div className="flex min-w-0 flex-col justify-center leading-none">
              <span className="truncate text-[1.05rem] font-semibold tracking-tight text-[#0A2140] min-[380px]:text-[1.15rem] sm:text-[1.35rem]">
                One Community
              </span>
              <span className="mt-0.5 truncate text-[9px] font-semibold uppercase tracking-[0.15em] text-[#8A7B5C] sm:text-[10px] sm:tracking-[0.2em]">
                Home Health
              </span>
            </div>
          </Link>

          {/* Desktop links (xl and up) */}
          <div className="hidden min-w-0 flex-1 items-center justify-center gap-0.5 xl:flex 2xl:gap-1">
            <Link href="/" className={desktopLink}>
              {t.home}
            </Link>

            {/* Services mega menu: centred on the full-width bar */}
            <div className="group">
              <button
                type="button"
                className={`flex cursor-pointer items-center gap-1.5 ${desktopLink}`}
              >
                <span>{t.services}</span>
                <ChevronDown
                  size={14}
                  className="opacity-50 transition-transform duration-300 group-hover:rotate-180"
                />
              </button>

              <div
                className={`absolute left-1/2 top-full z-[60] -mt-5 w-[min(920px,calc(100vw-2rem))] -translate-x-1/2 pt-8 ${reveal}`}
              >
                <div className="grid max-h-[calc(100dvh-10rem)] w-full grid-cols-12 overflow-y-auto overscroll-contain rounded-2xl border border-[#EFE8D8] bg-white shadow-xl shadow-[#0A2140]/[0.06]">
                  <div className="col-span-3 flex min-w-0 flex-col justify-between border-r border-[#EFE8D8] bg-[#F7F1E6] p-6">
                    <div>
                      <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#0A2140] text-[#E4B95A]">
                        <Stethoscope size={18} />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#8A7B5C]">
                        {t.inHomeCare}
                      </span>
                      <h3 className="mt-2.5 text-[1.3rem] font-semibold leading-snug text-[#0A2140]">
                        {t.clinicalCareTitle}
                      </h3>
                      <p className="mt-3 text-[13px] leading-relaxed text-[#5B6B7C]">
                        {t.clinicalCareDesc}
                      </p>
                    </div>
                    <Link
                      href="/request-care"
                      className="group/link mt-8 inline-flex w-max max-w-full items-center gap-2 text-sm font-semibold text-[#0A2140] transition-colors hover:text-[#123258]"
                    >
                      <span className="border-b border-[#E4B95A] pb-0.5">
                        {t.scheduleAssessment}
                      </span>
                      <ArrowRight
                        size={14}
                        className="shrink-0 transition-transform group-hover/link:translate-x-1"
                      />
                    </Link>
                  </div>

                  <div className="col-span-9 flex min-w-0 flex-col gap-5 p-6">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="min-w-0">
                        <div className="mb-3 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.12em] text-[#0A2140]">
                          <Stethoscope
                            size={13}
                            className="shrink-0 text-[#C89B3C]"
                          />
                          <span>{t.clinicalDisciplines}</span>
                        </div>
                        <div className="space-y-1">
                          {skilledServices.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="group/item block rounded-lg px-2.5 py-1.5 transition-colors hover:bg-[#FBF8F2]"
                            >
                              <div className="break-words text-[13px] font-semibold text-[#2C3947] group-hover/item:text-[#0A2140]">
                                {item.label}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>

                      <div className="min-w-0">
                        <div className="mb-3 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.12em] text-[#0A2140]">
                          <Heart
                            size={13}
                            className="shrink-0 text-[#C89B3C]"
                          />
                          <span>{t.attendantCare}</span>
                        </div>
                        <div className="space-y-1">
                          {personalAttendantServices.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="group/item block rounded-lg px-2.5 py-1.5 transition-colors hover:bg-[#FBF8F2]"
                            >
                              <div className="break-words text-[13px] font-semibold text-[#2C3947] group-hover/item:text-[#0A2140]">
                                {item.label}
                              </div>
                              <p className="break-words text-[11px] leading-snug text-[#8A93A0]">
                                {item.desc}
                              </p>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="h-px bg-[#F0EBDD]" />

                    <div>
                      <div className="mb-2 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.12em] text-[#0A2140]">
                        <Activity
                          size={13}
                          className="shrink-0 text-[#C89B3C]"
                        />
                        <span>{t.specialties}</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {specialtyServices.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="rounded-full border border-[#F0EBDD] bg-[#FBF8F2] px-3 py-1 text-[12px] font-medium text-[#3A4657] transition-colors hover:bg-[#F3ECDC] hover:text-[#0A2140]"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* About dropdown */}
            <div className="group relative">
              <button
                type="button"
                className={`flex cursor-pointer items-center gap-1.5 ${desktopLink}`}
              >
                <span>{t.about}</span>
                <ChevronDown
                  size={14}
                  className="opacity-50 transition-transform duration-300 group-hover:rotate-180"
                />
              </button>

              <div
                className={`absolute left-0 top-full z-[60] w-[min(560px,calc(100vw-2rem))] pt-3 ${reveal}`}
              >
                <div className="grid max-h-[calc(100dvh-10rem)] w-full grid-cols-12 overflow-y-auto overscroll-contain rounded-2xl border border-[#EFE8D8] bg-white shadow-xl shadow-[#0A2140]/[0.06]">
                  <div className="col-span-4 flex min-w-0 flex-col justify-between border-r border-[#EFE8D8] bg-[#F7F1E6] p-5">
                    <div>
                      <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#0A2140] text-[#E4B95A]">
                        <Heart size={18} />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#8A7B5C]">
                        {t.whoWeAre}
                      </span>
                      <h3 className="mt-2.5 text-[1.15rem] font-semibold leading-snug text-[#0A2140]">
                        {t.getTeam}
                      </h3>
                      <p className="mt-3 text-[13px] leading-relaxed text-[#5B6B7C]">
                        {t.getTeamDesc}
                      </p>
                    </div>
                    <Link
                      href="/about-us"
                      className="group/link mt-8 inline-flex w-max max-w-full items-center gap-2 text-sm font-semibold text-[#0A2140] transition-colors hover:text-[#123258]"
                    >
                      <span className="border-b border-[#E4B95A] pb-0.5">
                        {t.fullStory}
                      </span>
                      <ArrowRight
                        size={14}
                        className="shrink-0 transition-transform group-hover/link:translate-x-1"
                      />
                    </Link>
                  </div>

                  <div className="col-span-8 flex min-w-0 flex-col justify-center gap-0.5 p-4">
                    {aboutLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="group/sub flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-[#FBF8F2]"
                      >
                        <div className="shrink-0 rounded-lg bg-[#F3ECDC] p-2 text-[#0A2140] transition-colors group-hover/sub:bg-[#0A2140] group-hover/sub:text-[#E4B95A]">
                          <item.icon size={15} />
                        </div>
                        <div className="min-w-0 pt-0.5">
                          <div className="break-words text-sm font-semibold text-[#2C3947] group-hover/sub:text-[#0A2140]">
                            {item.label}
                          </div>
                          <p className="mt-0.5 break-words text-[11.5px] leading-snug text-[#8A93A0]">
                            {item.desc}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Link href="/insurance-payment-options" className={desktopLink}>
              {t.insurance}
            </Link>

            {/* Resources dropdown */}
            <div className="group relative">
              <button
                type="button"
                className={`flex cursor-pointer items-center gap-1.5 ${desktopLink}`}
              >
                <span>{t.resources}</span>
                <ChevronDown
                  size={14}
                  className="opacity-50 transition-transform duration-300 group-hover:rotate-180"
                />
              </button>

              <div
                className={`absolute right-0 top-full z-[60] w-[min(560px,calc(100vw-2rem))] pt-3 ${reveal}`}
              >
                <div className="grid max-h-[calc(100dvh-10rem)] w-full grid-cols-12 overflow-y-auto overscroll-contain rounded-2xl border border-[#EFE8D8] bg-white shadow-xl shadow-[#0A2140]/[0.06]">
                  <div className="col-span-4 flex min-w-0 flex-col justify-between border-r border-[#EFE8D8] bg-[#F7F1E6] p-5">
                    <div>
                      <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#0A2140] text-[#E4B95A]">
                        <BookOpen size={18} />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#8A7B5C]">
                        {t.support}
                      </span>
                      <h3 className="mt-2.5 text-[1.15rem] font-semibold leading-snug text-[#0A2140]">
                        {t.guidesRes}
                      </h3>
                      <p className="mt-3 text-[13px] leading-relaxed text-[#5B6B7C]">
                        {t.guidesResDesc}
                      </p>
                    </div>
                    <Link
                      href="/resources"
                      className="group/link mt-8 inline-flex w-max max-w-full items-center gap-2 text-sm font-semibold text-[#0A2140] transition-colors hover:text-[#123258]"
                    >
                      <span className="border-b border-[#E4B95A] pb-0.5">
                        {t.browseAllRes}
                      </span>
                      <ArrowRight
                        size={14}
                        className="shrink-0 transition-transform group-hover/link:translate-x-1"
                      />
                    </Link>
                  </div>

                  <div className="col-span-8 flex min-w-0 flex-col justify-center gap-0.5 p-4">
                    {resourceLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="group/sub flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-[#FBF8F2]"
                      >
                        <div className="shrink-0 rounded-lg bg-[#F3ECDC] p-2 text-[#0A2140] transition-colors group-hover/sub:bg-[#0A2140] group-hover/sub:text-[#E4B95A]">
                          <item.icon size={15} />
                        </div>
                        <div className="min-w-0 pt-0.5">
                          <div className="break-words text-sm font-semibold text-[#2C3947] group-hover/sub:text-[#0A2140]">
                            {item.label}
                          </div>
                          <p className="mt-0.5 break-words text-[11.5px] leading-snug text-[#8A93A0]">
                            {item.desc}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right actions */}
          <div className="flex shrink-0 items-center gap-2 sm:gap-2.5">
            <div className="hidden sm:block">
              <LangToggle />
            </div>

            <Link
              href="/request-care"
              className="hidden items-center gap-2 whitespace-nowrap rounded-full bg-[#0A2140] px-4 py-2.5 text-[13px] font-bold text-white transition-all hover:bg-[#123258] active:scale-[0.98] sm:inline-flex md:px-5"
            >
              <HeartHandshake size={16} className="shrink-0" />
              <span>{t.requestCare}</span>
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((v) => !v)}
              aria-label={mobileMenuOpen ? t.closeMenu : t.openMenu}
              aria-expanded={mobileMenuOpen}
              className="cursor-pointer rounded-xl bg-[#F3ECDC] p-2.5 text-[#0A2140] transition-colors hover:bg-[#EADFC2] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0A2140]/40 active:scale-95 xl:hidden"
            >
              <div className="relative flex h-5 w-5 items-center justify-center">
                <span
                  className={`absolute transition-all duration-300 ${
                    mobileMenuOpen
                      ? "scale-50 rotate-90 opacity-0"
                      : "scale-100 rotate-0 opacity-100"
                  }`}
                >
                  <Menu size={20} />
                </span>
                <span
                  className={`absolute transition-all duration-300 ${
                    mobileMenuOpen
                      ? "scale-100 rotate-0 text-[#C89B3C] opacity-100"
                      : "scale-50 -rotate-90 opacity-0"
                  }`}
                >
                  <X size={20} />
                </span>
              </div>
            </button>
          </div>
        </nav>
      </div>

      {/* ===== Mobile / tablet drawer (below xl) =====
          Anchored to the header, so it always starts exactly under the bar
          and never depends on hard-coded pixel offsets. */}
      <div
        className={`fixed inset-0 z-40 bg-[#0A2140]/50 backdrop-blur-[3px] transition-opacity duration-300 xl:hidden ${
          mobileMenuOpen
            ? "visible opacity-100"
            : "invisible pointer-events-none opacity-0"
        }`}
        onClick={closeMobileMenu}
        aria-hidden="true"
      />

      <div
        className={`absolute inset-x-0 top-full z-[55] px-3 pt-2 transition-all duration-300 ease-in-out sm:px-6 xl:hidden ${
          mobileMenuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible pointer-events-none -translate-y-3 opacity-0"
        }`}
      >
        <div
          className="mx-auto flex w-full max-w-xl flex-col overflow-hidden rounded-2xl border border-[#EFE8D8] bg-white shadow-2xl shadow-[#0A2140]/10 md:max-w-3xl"
          style={{ maxHeight: `calc(100dvh - ${headerH}px - 1.25rem)` }}
        >
          <div className="min-w-0 space-y-1 overflow-y-auto overscroll-contain p-2.5 sm:p-3">
            {/* Language segmented control */}
            <div
              role="group"
              aria-label={t.language}
              className="mb-1 flex items-center justify-between gap-3 rounded-xl border border-[#EFE8D8] bg-[#F7F1E6] px-3.5 py-2.5"
            >
              <span className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-wider text-[#8A7B5C]">
                <Globe size={14} className="shrink-0" />
                {t.language}
              </span>
              <div className="flex rounded-full border border-[#E8DFCB] bg-white p-0.5">
                {(
                  [
                    ["en", "EN", "🇺🇸"],
                    ["es", "ES", "🇪🇸"],
                  ] as const
                ).map(([code, short, flag]) => (
                  <button
                    key={code}
                    type="button"
                    onClick={() => setLanguage(code)}
                    aria-pressed={language === code}
                    className={`flex cursor-pointer items-center gap-1.5 rounded-full px-3 py-1.5 text-[12px] font-semibold transition-colors ${
                      language === code
                        ? "bg-[#0A2140] text-white"
                        : "text-[#3A4657] hover:bg-[#FBF8F2]"
                    }`}
                  >
                    <span aria-hidden>{flag}</span>
                    {short}
                  </button>
                ))}
              </div>
            </div>

            <Link
              href="/"
              onClick={closeMobileMenu}
              className="flex items-center gap-3 rounded-xl p-3 font-semibold text-[#2C3947] transition-colors hover:bg-[#FBF8F2] sm:p-3.5"
            >
              <span className="shrink-0 rounded-lg bg-[#F3ECDC] p-2 text-[#0A2140]">
                <Home size={17} />
              </span>
              {t.home}
            </Link>

            {renderAccordion(
              "services",
              t.services,
              <Stethoscope size={17} />,
              "max-h-[1600px]",
              <>
                <p className={mobileGroupLabel}>{t.clinicalDisciplines}</p>
                {skilledServices.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    onClick={closeMobileMenu}
                    className={mobileSubLink}
                  >
                    {s.label}
                  </Link>
                ))}
                <div className="my-2 h-px w-full bg-[#EFE8D8]" />
                <p className={mobileGroupLabel}>{t.attendantCare}</p>
                {personalAttendantServices.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    onClick={closeMobileMenu}
                    className={mobileSubLink}
                  >
                    {s.label}
                  </Link>
                ))}
                <div className="my-2 h-px w-full bg-[#EFE8D8]" />
                <p className={mobileGroupLabel}>{t.specialties}</p>
                <div className="flex flex-wrap gap-1.5 p-2">
                  {specialtyServices.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      onClick={closeMobileMenu}
                      className="rounded-full border border-[#F0EBDD] bg-[#FBF8F2] px-3 py-1 text-[12px] font-medium text-[#3A4657] transition-colors hover:bg-[#F3ECDC] hover:text-[#0A2140]"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              </>
            )}

            {renderAccordion(
              "about",
              t.about,
              <Heart size={17} />,
              "max-h-[700px]",
              aboutLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className={mobileSubLink}
                >
                  {item.label}
                  <span className="mt-0.5 block text-[11.5px] font-normal leading-snug text-[#8A93A0]">
                    {item.desc}
                  </span>
                </Link>
              ))
            )}

            <Link
              href="/insurance-payment-options"
              onClick={closeMobileMenu}
              className="flex items-center gap-3 rounded-xl p-3 font-semibold text-[#2C3947] transition-colors hover:bg-[#FBF8F2] sm:p-3.5"
            >
              <span className="shrink-0 rounded-lg bg-[#F3ECDC] p-2 text-[#0A2140]">
                <CreditCard size={17} />
              </span>
              <span className="min-w-0 break-words">{t.insurance}</span>
            </Link>

            {renderAccordion(
              "resources",
              t.resources,
              <BookOpen size={17} />,
              "max-h-[700px]",
              resourceLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className={mobileSubLink}
                >
                  {item.label}
                  <span className="mt-0.5 block text-[11.5px] font-normal leading-snug text-[#8A93A0]">
                    {item.desc}
                  </span>
                </Link>
              ))
            )}

            <div className="space-y-2 pb-1 pt-2">
              <Link
                href="/request-care"
                onClick={closeMobileMenu}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-[#0A2140] py-3.5 text-center font-bold text-white transition-all hover:shadow-md active:scale-[0.98]"
              >
                <HeartHandshake size={18} className="shrink-0" />
                {t.requestCare}
              </Link>

              <div className="flex flex-col gap-1 rounded-xl border border-[#EFE8D8] bg-[#F7F1E6] px-3 py-2.5 text-center text-xs">
                <div className="break-words">
                  <span className="font-semibold text-[#8A7B5C]">
                    {t.newPatients}{" "}
                  </span>
                  <a
                    href="tel:9728489174"
                    className="whitespace-nowrap font-bold text-[#0A2140]"
                  >
                    (972) 848-9174
                  </a>
                </div>
                <div className="break-words">
                  <span className="font-semibold text-[#8A7B5C]">
                    {t.mainOffice}{" "}
                  </span>
                  <a
                    href="tel:9723251598"
                    className="whitespace-nowrap font-semibold text-[#0A2140]"
                  >
                    (972) 325-1598
                  </a>
                </div>
              </div>

              <p className="px-2 pb-1 text-center text-[11px] leading-snug text-[#8A93A0] md:hidden">
                {t.banner}
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
