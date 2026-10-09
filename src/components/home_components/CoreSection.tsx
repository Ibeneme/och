"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import {
  Stethoscope,
  Activity,
  Hand,
  MessageCircle,
  Heart,
  UserCheck,
  Bandage,
  Pill,
  Hospital,
  Home,
  Coffee,
  Clock,
  Sparkles,
  ShoppingBag,
  Medal,
  Accessibility,
  ArrowRight,
  PhoneCall,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "@/src/context/LanguageContext";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const wrap = "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8";
const heading =
  "ohh-serif font-bold leading-tight tracking-tight text-[#07162C]";
const card = "rounded-3xl border border-[#07162C]/10 bg-white p-6 sm:p-8";

export default function CoreServicesPage() {
  const { language } = useLanguage();
  const pageRef = useRef<HTMLElement>(null);
  const [activeTab, setActiveTab] = useState<"clinical" | "specialty">(
    "clinical"
  );

  const clinicalServices = [
    {
      title: language === "es" ? "Enfermería Especializada" : "Skilled Nursing",
      description:
        language === "es"
          ? "Cuidado de enfermería profesional que incluye evaluaciones, administración de medicamentos y monitoreo clínico continuo."
          : "Professional nursing care including assessments, medication administration, and ongoing clinical monitoring.",
      icon: Stethoscope,
      category: "clinical",
    },
    {
      title: language === "es" ? "Fisioterapia" : "Physical Therapy",
      description:
        language === "es"
          ? "Restauración de la movilidad, fuerza y equilibrio mediante programas de ejercicio terapéutico personalizado."
          : "Restoring mobility, strength, and balance through personalized therapeutic exercise programs.",
      icon: Activity,
      category: "clinical",
    },
    {
      title: language === "es" ? "Terapia Ocupacional" : "Occupational Therapy",
      description:
        language === "es"
          ? "Ayudar a los clientes a recuperar la independencia en las actividades diarias y adaptar su entorno para mayor seguridad."
          : "Helping clients regain independence in daily activities and adapt their environment for safety.",
      icon: Hand,
      category: "clinical",
    },
    {
      title: language === "es" ? "Terapia del Habla" : "Speech Therapy",
      description:
        language === "es"
          ? "Apoyo a la comunicación, la deglución y las habilidades cognitivas para mejorar la calidad de vida."
          : "Supporting communication, swallowing, and cognitive skills for improved quality of life.",
      icon: MessageCircle,
      category: "clinical",
    },
    {
      title:
        language === "es"
          ? "Servicios Sociales Médicos"
          : "Medical Social Services",
      description:
        language === "es"
          ? "Orientación con recursos, asesoramiento y coordinación de cuidados para apoyar las necesidades emocionales y sociales."
          : "Guidance with resources, counseling, and care coordination to support emotional and social needs.",
      icon: Heart,
      category: "clinical",
    },
    {
      title:
        language === "es"
          ? "Auxiliar de Salud en el Hogar"
          : "Home Health Aide",
      description:
        language === "es"
          ? "Asistencia práctica con cuidado personal, movilidad y tareas de la vida diaria bajo supervisión clínica."
          : "Hands-on assistance with personal care, mobility, and daily living tasks under clinical supervision.",
      icon: UserCheck,
      category: "clinical",
    },
  ];

  const specialtyServices = [
    {
      title: language === "es" ? "Cuidado de Heridas" : "Wound Care",
      description:
        language === "es"
          ? "Evaluación y manejo experto de heridas complejas o crónicas para promover la cicatrización."
          : "Expert assessment and management of complex or chronic wounds to promote healing.",
      icon: Bandage,
      category: "specialty",
    },
    {
      title:
        language === "es"
          ? "Gestión de Medicamentos y Enfermedades Crónicas"
          : "Medication & Chronic Disease Management",
      description:
        language === "es"
          ? "Apoyo con la adherencia a la medicación y manejo continuo de condiciones de salud crónicas."
          : "Support with medication adherence and ongoing management of chronic health conditions.",
      icon: Pill,
      category: "specialty",
    },
    {
      title:
        language === "es"
          ? "Cuidado Post-Quirúrgico / Post-Hospitalario"
          : "Post-Surgical / Post-Hospital Care",
      description:
        language === "es"
          ? "Apoyo de recuperación sin interrupciones después de una cirugía o alta hospitalaria para reducir el riesgo de reingreso."
          : "Seamless recovery support after surgery or hospital discharge to reduce readmission risk.",
      icon: Hospital,
      category: "specialty",
    },
    {
      title:
        language === "es"
          ? "Prevención de Caídas y Seguridad en el Hogar"
          : "Fall Prevention & Home Safety",
      description:
        language === "es"
          ? "Evaluaciones del hogar y estrategias diseñadas para reducir el riesgo de caídas y mejorar la seguridad."
          : "Home evaluations and strategies designed to reduce fall risk and improve safety.",
      icon: Home,
      category: "specialty",
    },
    {
      title: language === "es" ? "Cuidado de Compañía" : "Companion Care",
      description:
        language === "es"
          ? "Presencia amigable y compromiso para reducir el aislamiento y apoyar el bienestar emocional."
          : "Friendly presence and engagement to reduce isolation and support emotional wellbeing.",
      icon: Coffee,
      category: "specialty",
    },
    {
      title: language === "es" ? "Cuidado de Respiro" : "Respite Care",
      description:
        language === "es"
          ? "Alivio temporal para los cuidadores familiares asegurando un apoyo continuo y confiable."
          : "Temporary relief for family caregivers while ensuring continuous, reliable support.",
      icon: Clock,
      category: "specialty",
    },
    {
      title:
        language === "es"
          ? "Apoyo Diario de Estilo de Vida"
          : "Daily Lifestyle Support",
      description:
        language === "es"
          ? "Asistencia con rutinas, tareas domésticas ligeras y mantenimiento de la independencia en el hogar."
          : "Assistance with routines, light household tasks, and maintaining independence at home.",
      icon: Sparkles,
      category: "specialty",
    },
    {
      title:
        language === "es"
          ? "Apoyo en Mandados Aprobados"
          : "Approved Errand Support",
      description:
        language === "es"
          ? "Ayuda con diligencias esenciales como recogida de recetas y compras ligeras cuando esté aprobado."
          : "Help with essential errands such as prescription pickup and light shopping when approved.",
      icon: ShoppingBag,
      category: "specialty",
    },
    {
      title: language === "es" ? "Cuidado para Veteranos" : "Veteran Care",
      description:
        language === "es"
          ? "Apoyo respetuoso y especializado adaptado para veteranos y coordinado con los beneficios disponibles."
          : "Respectful, specialized support tailored for veterans and coordinated with available benefits.",
      icon: Medal,
      category: "specialty",
    },
    {
      title:
        language === "es"
          ? "Adultos con Discapacidades"
          : "Adults with Disabilities",
      description:
        language === "es"
          ? "Cuidado centrado en la persona que promueve la dignidad, autonomía y apoyo diario individualizado."
          : "Person-centered care that promotes dignity, autonomy, and individualized daily support.",
      icon: Accessibility,
      category: "specialty",
    },
  ];

  const displayedServices =
    activeTab === "clinical" ? clinicalServices : specialtyServices;

  const t = {
    en: {
      eyebrow: "What We Provide",
      heading: "Comprehensive care built around your independence",
      subheading:
        "A full range of clinical disciplines and specialty support services delivered with compassion, expertise, and unwavering dedication.",
      clinicalTab: `Clinical Disciplines (${clinicalServices.length})`,
      specialtyTab: `Specialty Support (${specialtyServices.length})`,
      clinicalBadge: "Clinical",
      specialtyBadge: "Specialty",
      learnMore: "Learn more about care",
      bannerTag: "Personalized Plans",
      bannerHeading: "Not sure which care pathway is right for you?",
      bannerDesc:
        "Our nurse-founded leadership team will work directly with your family and physician to coordinate a custom care plan tailored precisely to your needs.",
      bannerBtn: "Request Free Consultation",
    },
    es: {
      eyebrow: "Lo Que Ofrecemos",
      heading: "Cuidado integral construido en torno a su independencia",
      subheading:
        "Una gama completa de disciplinas clínicas y servicios de apoyo especializado brindados con compasión, experiencia y dedicación inquebrantable.",
      clinicalTab: `Disciplinas Clínicas (${clinicalServices.length})`,
      specialtyTab: `Apoyo Especializado (${specialtyServices.length})`,
      clinicalBadge: "Clínico",
      specialtyBadge: "Especializado",
      learnMore: "Conozca más sobre el cuidado",
      bannerTag: "Planes Personalizados",
      bannerHeading: "¿No está seguro de qué vía de atención es la adecuada?",
      bannerDesc:
        "Nuestro equipo de liderazgo fundado por enfermeras trabajará directamente con su familia y médico para coordinar un plan de atención personalizado a su medida.",
      bannerBtn: "Solicitar Consulta Gratuita",
    },
  }[language];

  return (
    <main
      ref={pageRef}
      className="min-h-screen bg-[#F4F4F2] px-4 pt-20 text-[#07162C] sm:pt-28 sm:px-6 lg:px-8 overflow-x-hidden will-change-transform pb-24"
    >
      <div className={wrap}>
        {/* Header */}
        <div className="sp-header mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#07162C]/10 bg-[#E9EAE5] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#07162C] mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-[#996515] animate-pulse" />
            {t.eyebrow}
          </span>
          <h1 className={`${heading} mb-6 text-4xl sm:text-5xl lg:text-6xl`}>
            {t.heading} <span className="text-[#996515]">.</span>
          </h1>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-[#07162C]/70 sm:text-base">
            {t.subheading}
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="mb-12 flex justify-center">
          <div className="inline-flex rounded-full border border-[#07162C]/10 bg-[#E9EAE5] p-1.5">
            <button
              onClick={() => setActiveTab("clinical")}
              className={`rounded-full px-6 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activeTab === "clinical"
                  ? "bg-[#07162C] text-[#E4B95A] shadow-sm"
                  : "text-[#07162C]/60 hover:text-[#07162C]"
              }`}
            >
              {t.clinicalTab}
            </button>
            <button
              onClick={() => setActiveTab("specialty")}
              className={`rounded-full px-6 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activeTab === "specialty"
                  ? "bg-[#07162C] text-[#E4B95A] shadow-sm"
                  : "text-[#07162C]/60 hover:text-[#07162C]"
              }`}
            >
              {t.specialtyTab}
            </button>
          </div>
        </div>

        {/* Services Bento Grid */}
        <div className="sp-grid mb-20 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {displayedServices.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.title} className={card}>
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <div className="mb-6 flex items-start justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#07162C] text-[#E4B95A]">
                        <Icon className="h-5 w-5" strokeWidth={1.75} />
                      </div>
                      <span className="rounded-full border border-[#07162C]/10 bg-[#E9EAE5] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#07162C]/70">
                        {service.category === "clinical"
                          ? t.clinicalBadge
                          : t.specialtyBadge}
                      </span>
                    </div>
                    <h3 className="ohh-serif mb-2.5 text-xl font-medium text-[#07162C]">
                      {service.title}
                    </h3>
                    <p className="mb-6 text-sm leading-relaxed text-[#07162C]/70">
                      {service.description}
                    </p>
                  </div>
                  <div className="flex items-center justify-between border-t border-[#07162C]/10 pt-4 text-xs font-bold uppercase tracking-wider text-[#07162C]">
                    <span>{t.learnMore}</span>
                    <ArrowRight className="h-4 w-4 text-[#996515]" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Banner CTA */}
        <div className="relative overflow-hidden rounded-3xl bg-[#07162C] p-8 text-white sm:p-12">
          <div className="absolute -bottom-12 -right-12 h-64 w-64 rounded-full bg-[#E4B95A]/10 blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#E4B95A] mb-4">
              {t.bannerTag}
            </span>
            <h2 className={`${heading} mb-4 text-2xl text-white sm:text-3xl`}>
              {t.bannerHeading}
            </h2>
            <p className="mb-8 text-sm leading-relaxed text-white/75 sm:text-base">
              {t.bannerDesc}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-[#E4B95A] bg-[#E4B95A] px-7 py-3.5 text-sm font-semibold text-[#07162C] transition-colors hover:bg-[#EDC878]"
              >
                <PhoneCall className="h-4 w-4" /> {t.bannerBtn}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
