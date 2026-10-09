"use client";

import Link from "next/link";
import {
  HeartPulse,
  Activity,
  Pill,
  FileText,
  Stethoscope,
  BookOpen,
  Users,
  ShieldCheck,
  Phone,
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  CalendarClock,
} from "lucide-react";
import { useLanguage } from "@/src/context/LanguageContext";
import content from "@/src/locales/services/skilled-nursing.json";

/* Restyled to match Request Care UI:
   soft gray canvas #F4F4F2, pill badges with dot indicators, light serif headings,
   rounded bento cards (3xl), flat style with 1px borders. */

const wrap = "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8";
const heading =
  "ohh-serif font-bold leading-tight tracking-tight text-[#07162C]";
const card = "rounded-3xl border border-[#07162C]/10 bg-white p-6 sm:p-8";

export default function SkilledNursingComponent() {
  const { language } = useLanguage();
  const t = content[language as "en" | "es"] || content.en;

  const serviceIcons = [
    Stethoscope,
    Pill,
    Activity,
    FileText,
    HeartPulse,
    BookOpen,
    Users,
    ShieldCheck,
  ];

  const pathwayIcons = [ClipboardCheck, CalendarClock, HeartPulse];

  return (
    <main className="min-h-screen bg-[#F4F4F2] pb-24 pt-14 text-[#07162C] sm:pt-20 lg:pb-28">
      {/* ===== Hero Section ===== */}
      <section className="px-4 sm:px-6 lg:px-8 py-12">
        <div className={wrap}>
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="space-y-6 lg:col-span-7">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#07162C]/10 bg-[#E9EAE5] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#07162C]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#996515] animate-pulse" />
                {t.badge}
              </span>

              <h1 className={`${heading} text-4xl sm:text-5xl lg:text-6xl`}>
                {t.titleMain}{" "}
                <span className="text-[#996515]">{t.titleHighlight}</span>
              </h1>

              <p className="max-w-xl text-sm leading-relaxed text-[#07162C]/75 sm:text-base">
                {t.description}
              </p>

              <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap">
                <Link
                  href="/contact#consultation"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#07162C] bg-[#07162C] px-7 py-3.5 text-sm font-semibold text-[#E4B95A] transition-colors hover:bg-[#0A2140]"
                >
                  <span>{t.requestCare}</span>
                  <ArrowRight size={16} />
                </Link>
                <a
                  href="tel:9723251598"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#07162C]/20 bg-white px-7 py-3.5 text-sm font-semibold text-[#07162C] transition-colors hover:border-[#07162C]"
                >
                  <Phone size={16} />
                  <span>{t.callUs}</span>
                </a>
              </div>
            </div>

            {/* Hero Feature Card */}
            <div className="lg:col-span-5">
              <div className={card}>
                <div className="relative mb-6 h-64 w-full overflow-hidden rounded-2xl">
                  <img
                    src="/images/home_a.jpg"
                    alt="Nurse caring for a patient at home"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07162C]/70 via-transparent to-transparent" />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#07162C] text-[#E4B95A]">
                      <ShieldCheck size={20} />
                    </div>
                    <div>
                      <h3 className={`${heading} text-lg font-medium`}>
                        {t.cardTitle}
                      </h3>
                      <p className="text-xs font-bold uppercase tracking-wider text-[#996515]">
                        {t.cardSub}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed text-[#07162C]/75">
                    {t.cardDesc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Overview Section ===== */}
      <section className="py-12">
        <div className={wrap}>
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="relative lg:col-span-6">
              <div className="overflow-hidden rounded-3xl border border-[#07162C]/10 bg-white p-3">
                <img
                  src="/images/home_e.jpg"
                  alt="Compassionate home healthcare nurse smiling with a senior patient"
                  className="h-[380px] w-full rounded-2xl object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 hidden sm:flex flex-col gap-1 rounded-3xl bg-[#07162C] p-6 max-w-[220px] text-white shadow-xl">
                <span className="ohh-serif text-3xl font-light text-[#E4B95A]">
                  10+
                </span>
                <span className="text-xs leading-relaxed text-white/70">
                  Years of dependable, dedicated home health service excellence.
                </span>
              </div>
            </div>

            <div className="space-y-6 lg:col-span-6">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#996515]">
                {t.overviewTag}
              </span>
              <h2 className={`${heading} text-3xl sm:text-4xl`}>
                {t.overviewTitle}
              </h2>
              <p className="text-sm leading-relaxed text-[#07162C]/75 sm:text-base">
                {t.overviewDesc}
              </p>

              <div className="grid gap-3 sm:grid-cols-2 text-sm font-semibold text-[#07162C]">
                {t.features.map((item: string) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-[#07162C]/10 bg-white p-4"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-[#996515]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Care Pathway ===== */}
      <section className="py-12">
        <div className={wrap}>
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#996515]">
              {t.pathwayTag}
            </span>
            <h2 className={`${heading} mt-2 text-3xl sm:text-4xl`}>
              {t.pathwayTitle}
            </h2>
            <p className="mt-2 text-sm text-[#07162C]/70">{t.pathwaySub}</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {t.pathwaySteps.map(
              (step: { title: string; desc: string }, idx: number) => {
                const Icon = pathwayIcons[idx];
                return (
                  <div key={step.title} className={card}>
                    <div className="mb-4 flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#07162C] text-[#E4B95A]">
                        <Icon size={20} />
                      </div>
                      <span className="ohh-serif text-3xl font-light text-[#07162C]/20 font-mono">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className={`${heading} mb-2 text-xl font-medium`}>
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[#07162C]/70">
                      {step.desc}
                    </p>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </section>

      {/* ===== Services Grid ===== */}
      <section className="py-12">
        <div className={wrap}>
          <div className="mb-12 max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#996515]">
              {t.servicesTag}
            </span>
            <h2 className={`${heading} text-3xl sm:text-4xl`}>
              {t.servicesTitle}
            </h2>
            <p className="text-sm text-[#07162C]/70 sm:text-base">
              {t.servicesDesc}
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {t.servicesList.map(
              (service: { title: string; desc: string }, idx: number) => {
                const Icon = serviceIcons[idx];
                return (
                  <div key={service.title} className={card}>
                    <div className="flex h-full flex-col justify-between">
                      <div>
                        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#07162C] text-[#E4B95A]">
                          <Icon size={22} strokeWidth={1.75} />
                        </div>
                        <h3 className={`${heading} mb-2 text-lg font-medium`}>
                          {service.title}
                        </h3>
                        <p className="text-xs sm:text-sm leading-relaxed text-[#07162C]/70">
                          {service.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </section>

      {/* ===== Closing CTA ===== */}
      <section className="py-12">
        <div className={wrap}>
          <div className="relative overflow-hidden rounded-3xl bg-[#07162C] p-8 text-white sm:p-12 lg:p-14 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="absolute -bottom-12 -right-12 h-64 w-64 rounded-full bg-[#E4B95A]/10 blur-3xl pointer-events-none" />
            <div className="relative z-10 space-y-3 text-center lg:text-left max-w-xl">
              <h3 className={`${heading} text-2xl text-white sm:text-3xl`}>
                {t.ctaTitle}
              </h3>
              <p className="text-sm leading-relaxed text-white/75 sm:text-base">
                {t.ctaDesc}
              </p>
            </div>
            <div className="relative z-10 flex flex-col sm:flex-row gap-4 shrink-0">
              <a
                href="tel:9723251598"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#E4B95A] bg-[#E4B95A] px-7 py-3.5 text-sm font-semibold text-[#07162C] transition-colors hover:bg-[#EDC878]"
              >
                <Phone size={16} />
                <span>{t.callUs}</span>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-[#E4B95A] hover:text-[#E4B95A]"
              >
                <span>{t.ctaContact}</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
