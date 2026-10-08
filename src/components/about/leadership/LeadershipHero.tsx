"use client";

import Link from "next/link";
import {
  Award,
  Phone,
  ArrowRight,
  Shield,
  Stethoscope,
  Building2,
  Lock,
  Mail,
} from "lucide-react";
import { useLanguage } from "@/src/context/LanguageContext";
import content from "@/src/locales/about-us/leadership.json";

/* Brand: navy #07162C + gold #E4B95A / #C89B3C. Flat design: borders, no shadows.
   Small gold text on light backgrounds uses #996515 for contrast. */
const container = "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8";
const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E4B95A]";
const focusRingNavy =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#07162C]";
const eyebrowLight =
  "text-xs font-bold uppercase tracking-[0.18em] text-[#996515]";
const h2 =
  "ohh-serif text-3xl font-semibold leading-[1.15] tracking-tight text-[#07162C] sm:text-4xl lg:text-5xl";

const MAIN_PHONE = "(972) 325-1598";
const MAIN_PHONE_HREF = "tel:9723251598";
const PRIVACY_PHONE = "972-848-7942";
const PRIVACY_EMAIL = "privacy@onechh.com";

/* Copy for the sections below the hero (EN / ES).
   The hero itself keeps reading from leadership.json. */
const copy = {
  en: {
    founderRole: "Founder, Administrator, and Director of Nursing",
    rolesEyebrow: "Leadership team",
    rolesTitle: "Who is accountable for your care",
    rolesIntro:
      "Home health care works when someone clinical and someone administrative both know your name. Here is who to ask for.",
    roles: [
      {
        title: "Founder & Administrator",
        name: "Angela Ananti, BSN, RN",
        body: "Leads the agency, its operations, and its relationships with referral partners, health plans, and families across North Texas.",
      },
      {
        title: "Director of Nursing",
        name: "Angela Ananti, BSN, RN",
        body: "A registered nurse leads clinical care, so the plan of care, the visits, and the people delivering them are overseen by someone who has done the work.",
      },
      {
        title: "Privacy Officer",
        name: "Blessing Obieze, Attorney at Law",
        body: "Handles questions about your health information and your privacy rights, including requests for copies of your records.",
      },
    ],
    contactLabel: "Contact",
    approachEyebrow: "How we lead",
    approachTitle: "Three commitments we hold ourselves to",
    approach: [
      {
        title: "Nurse-led, start to finish",
        body: "Clinical decisions are made by clinicians. Leadership stays close to the care so problems are caught early.",
      },
      {
        title: "Reachable and accountable",
        body: "Families and referral partners can reach a real person. When something needs fixing, we say so and fix it.",
      },
      {
        title: "One plan for everyone",
        body: "Nurses, therapists, aides, and family caregivers work from the same plan, built around the patient's actual day.",
      },
    ],
    stats: [
      { n: "2010", l: "Serving families since" },
      { n: "8", l: "North Texas counties" },
      { n: "Medicare", l: "Certified home health agency" },
    ],
    ctaTitle: "Speak with our leadership team",
    ctaBody:
      "Questions about care, a referral, or how we work? Call our office and ask for the Administrator or Director of Nursing.",
    office: "Main office",
    privacyTitle: "Privacy questions",
    refer: "Send a referral",
  },
  es: {
    founderRole: "Fundadora, Administradora y Directora de Enfermería",
    rolesEyebrow: "Equipo de liderazgo",
    rolesTitle: "Quién es responsable de su atención",
    rolesIntro:
      "La atención médica en el hogar funciona cuando una persona clínica y una administrativa conocen su nombre. Esto es a quién puede pedir.",
    roles: [
      {
        title: "Fundadora y Administradora",
        name: "Angela Ananti, BSN, RN",
        body: "Dirige la agencia, sus operaciones y sus relaciones con socios de referencia, planes de salud y familias en el norte de Texas.",
      },
      {
        title: "Directora de Enfermería",
        name: "Angela Ananti, BSN, RN",
        body: "Una enfermera registrada dirige la atención clínica, de modo que el plan de cuidado, las visitas y quienes las realizan están supervisados por alguien que ha hecho el trabajo.",
      },
      {
        title: "Oficial de Privacidad",
        name: "Blessing Obieze, Attorney at Law",
        body: "Atiende las preguntas sobre su información de salud y sus derechos de privacidad, incluidas las solicitudes de copias de sus expedientes.",
      },
    ],
    contactLabel: "Contacto",
    approachEyebrow: "Cómo lideramos",
    approachTitle: "Tres compromisos que cumplimos",
    approach: [
      {
        title: "Dirigidos por enfermería, de principio a fin",
        body: "Las decisiones clínicas las toman clínicos. El liderazgo se mantiene cerca de la atención para detectar los problemas a tiempo.",
      },
      {
        title: "Accesibles y responsables",
        body: "Las familias y los socios de referencia pueden hablar con una persona real. Cuando algo debe corregirse, lo decimos y lo corregimos.",
      },
      {
        title: "Un solo plan para todos",
        body: "Enfermeras, terapeutas, asistentes y familiares cuidadores trabajan con el mismo plan, basado en el día real del paciente.",
      },
    ],
    stats: [
      { n: "2010", l: "Sirviendo a familias desde" },
      { n: "8", l: "condados del norte de Texas" },
      { n: "Medicare", l: "Agencia certificada de salud en el hogar" },
    ],
    ctaTitle: "Hable con nuestro equipo de liderazgo",
    ctaBody:
      "¿Preguntas sobre la atención, una referencia o cómo trabajamos? Llame a nuestra oficina y pida hablar con la Administradora o la Directora de Enfermería.",
    office: "Oficina principal",
    privacyTitle: "Preguntas de privacidad",
    refer: "Enviar una referencia",
  },
};

const roleIcons = [Building2, Stethoscope, Lock];
const approachNumbers = ["01", "02", "03"];

export default function LeadershipHero() {
  const { language } = useLanguage();
  const lang: "en" | "es" = language === "es" ? "es" : "en";
  const t = content[lang] || content.en;
  const c = copy[lang];

  return (
    <>
      {/* ===== Hero (Revised Layout) ===== */}
      <section className="relative overflow-hidden bg-[#07162C] text-white">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#0A2140]/60 via-transparent to-transparent" />
        <div className={`${container} relative py-20 lg:py-28`}>
          <div className="mx-auto max-w-4xl text-center">
            {/* Eyebrow badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#E4B95A]">
              <Award size={14} aria-hidden />
              {t.eyebrow}
            </div>

            {/* Main title & clinical role */}
            <h1 className="ohh-serif text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              Founder & Clinical Leadership
            </h1>
            <p className="mt-4 text-xl font-bold text-[#E4B95A] sm:text-2xl">
              Angela Ananti, BSN, RN
            </p>
            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-white/60 sm:text-base">
              Founder, Administrator, and Director of Nursing
            </p>

            <svg
              viewBox="0 0 400 28"
              width="180"
              height="16"
              aria-hidden="true"
              className="mx-auto mt-6"
            >
              <path
                d="M0 14 H130 L145 3 L160 25 L175 14 H400"
                fill="none"
                stroke="#E4B95A"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
              Angela Ananti, BSN, RN, has practiced nursing since 2003. She
              brings high standards for clinical accountability and patient
              dignity to families across the Dallas–Fort Worth Metroplex.
            </p>

            {/* Action buttons */}
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={MAIN_PHONE_HREF}
                className={`inline-flex items-center justify-center gap-2 rounded-full bg-[#E4B95A] px-7 py-3.5 font-bold text-[#07162C] transition-colors hover:bg-[#EDC878] ${focusRing}`}
              >
                <Phone size={16} aria-hidden />
                Call Our Team: 972-325-1598
              </a>
              <Link
                href="/referrals"
                className={`group inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-3.5 font-semibold text-white transition-colors hover:border-[#E4B95A] hover:text-[#E4B95A] ${focusRing}`}
              >
                Refer a Patient
                <ArrowRight
                  size={16}
                  aria-hidden
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Leadership roles ===== */}
      <section className="bg-white py-20 lg:py-28">
        <div className={container}>
          <div className="max-w-3xl">
            <p className={eyebrowLight}>{c.rolesEyebrow}</p>
            <h2 className={`${h2} mt-4`}>{c.rolesTitle}</h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#5B6B7C] sm:text-lg">
              {c.rolesIntro}
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {c.roles.map((r, i) => {
              const Icon = roleIcons[i % roleIcons.length];
              return (
                <div
                  key={r.title}
                  className="flex flex-col rounded-3xl border border-[#E8DFC8] bg-[#FBF8F2] p-8 transition-colors hover:border-[#C89B3C]"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#07162C] text-[#E4B95A]">
                    <Icon size={22} aria-hidden />
                  </span>
                  <p className={`${eyebrowLight} mt-6`}>{r.title}</p>
                  <h3 className="ohh-serif mt-2 text-xl font-semibold leading-snug text-[#07162C]">
                    {r.name}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-[#3A4657]">
                    {r.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== How we lead ===== */}
      <section className="bg-[#FBF8F2] py-20 lg:py-28">
        <div className={`${container} grid gap-12 lg:grid-cols-12 lg:gap-16`}>
          <div className="lg:col-span-4">
            <p className={eyebrowLight}>{c.approachEyebrow}</p>
            <h2 className={`${h2} mt-4`}>{c.approachTitle}</h2>
          </div>

          <ol className="divide-y divide-[#E8DFC8] border-y border-[#E8DFC8] lg:col-span-8">
            {c.approach.map((a, i) => (
              <li
                key={a.title}
                className="grid gap-4 py-8 sm:grid-cols-12 sm:gap-8"
              >
                <span className="ohh-serif text-4xl font-semibold leading-none text-[#C89B3C] sm:col-span-2">
                  {approachNumbers[i]}
                </span>
                <div className="sm:col-span-10">
                  <h3 className="ohh-serif text-xl font-semibold leading-snug text-[#07162C]">
                    {a.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-[#3A4657] sm:text-base">
                    {a.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
