"use client";

import Link from "next/link";
import {
  Award,
  Phone,
  ArrowRight,
  Stethoscope,
  Building2,
  Lock,
} from "lucide-react";
import { useLanguage } from "@/src/context/LanguageContext";
import content from "@/src/locales/about-us/leadership.json";

/* Restyled to match Request Care layout:
   soft gray canvas #F4F4F2, pill badges with number chips, large light headings,
   rounded bento cards, flat style with 1px borders. */

const container = "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8";
const heading =
  "ohh-serif font-light leading-tight tracking-tight text-[#07162C]";
const card = "rounded-3xl border border-[#07162C]/10 bg-[#E9EAE5]";
const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#07162C]";

const MAIN_PHONE = "(972) 325-1598";
const MAIN_PHONE_HREF = "tel:9723251598";

const copy = {
  en: {
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
  },
  es: {
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
  },
};

const roleIcons = [Building2, Stethoscope, Lock];

function Pill({ n, label }: { n?: string | number; label: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[#07162C]/10 bg-[#E9EAE5] py-1.5 pl-1.5 pr-4 text-xs font-medium text-[#07162C]">
      {n !== undefined ? (
        <span
          aria-hidden
          className="flex h-6 w-6 items-center justify-center rounded-full bg-[#07162C] text-[10px] font-semibold text-[#E4B95A]"
        >
          {n}
        </span>
      ) : (
        <span
          aria-hidden
          className="ml-2.5 h-1.5 w-1.5 rounded-full bg-[#996515]"
        />
      )}
      {label}
    </span>
  );
}

export default function LeadershipHero() {
  const { language } = useLanguage();
  const lang: "en" | "es" = language === "es" ? "es" : "en";
  const t = content[lang] || content.en;
  const c = copy[lang];

  return (
    <main className="min-h-screen bg-[#F4F4F2] text-base leading-relaxed text-[#07162C]/80">
      {/* ===== Header: centered ===== */}
      <section className="px-4 pb-10 pt-14 text-center sm:px-6 lg:pb-14 lg:pt-20">
        <div className="mx-auto max-w-3xl">
          <Pill label={t.eyebrow} />
          <h1 className={`${heading} mt-6 text-4xl sm:text-5xl lg:text-6xl`}>
            Founder & Clinical Leadership
          </h1>
          <p className="mt-4 text-xl font-medium text-[#07162C]">
            Angela Ananti, BSN, RN
          </p>
          <p className="mt-1 text-xs font-bold uppercase tracking-[0.18em] text-[#996515]">
            Founder, Administrator, and Director of Nursing
          </p>
          <p className="mx-auto mt-4 max-w-xl text-sm text-[#07162C]/70 sm:text-base">
            Angela Ananti, BSN, RN, has practiced nursing since 2003. She brings
            high standards for clinical accountability and patient dignity to
            families across the Dallas–Fort Worth Metroplex.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={MAIN_PHONE_HREF}
              className={`inline-flex items-center justify-center gap-2 rounded-full border border-[#07162C] bg-[#07162C] px-7 py-3.5 text-sm font-semibold text-[#E4B95A] ${focusRing}`}
            >
              <Phone size={16} aria-hidden />
              <span>Call Our Team: {MAIN_PHONE}</span>
            </a>
            <Link
              href="/referrals"
              className={`inline-flex items-center justify-center gap-2 rounded-full border border-[#07162C]/20 bg-white px-7 py-3.5 text-sm font-semibold text-[#07162C] ${focusRing}`}
            >
              <span>Refer a Patient</span>
              <ArrowRight size={16} aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== Leadership Roles Bento Grid ===== */}
      <section className="px-4 pb-16 sm:px-6">
        <div className={container}>
          <div className="mb-10 text-center">
            <Pill n="01" label={c.rolesEyebrow} />
            <h2 className={`${heading} mt-4 text-3xl sm:text-4xl`}>
              {c.rolesTitle}
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-[#07162C]/70">
              {c.rolesIntro}
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {c.roles.map((r, i) => {
              const Icon = roleIcons[i % roleIcons.length];
              return (
                <div
                  key={r.title}
                  className={`flex flex-col justify-between p-6 sm:p-8 ${card}`}
                >
                  <div>
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#07162C] text-[#E4B95A]">
                      <Icon size={18} aria-hidden />
                    </span>
                    <span className="mt-6 block text-xs font-bold uppercase tracking-[0.18em] text-[#996515]">
                      {r.title}
                    </span>
                    <h3 className="ohh-serif mt-1 text-xl font-medium text-[#07162C]">
                      {r.name}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#07162C]/75">
                      {r.body}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== How We Lead Bento Cards ===== */}
      <section className="px-4 pb-20 sm:px-6 lg:pb-24">
        <div className={container}>
          <div className="mb-10 text-center">
            <Pill n="02" label={c.approachEyebrow} />
            <h2 className={`${heading} mt-4 text-3xl sm:text-4xl`}>
              {c.approachTitle}
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {c.approach.map((a, i) => (
              <div
                key={a.title}
                className={`flex flex-col justify-between p-6 sm:p-8 ${card}`}
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#07162C] font-mono text-[10px] font-semibold text-[#E4B95A]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="mt-6">
                  <h3 className="ohh-serif text-xl font-medium text-[#07162C]">
                    {a.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#07162C]/75">
                    {a.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
