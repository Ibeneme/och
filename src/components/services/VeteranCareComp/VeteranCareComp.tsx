"use client";

import Link from "next/link";
import {
  Users,
  ClipboardList,
  Activity,
  FileText,
  Award,
  HeartPulse,
  Phone,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Flag,
} from "lucide-react";
import { useLanguage } from "@/src/context/LanguageContext";
import content from "@/src/locales/services/veteran-care.json";
import { siteConfig } from "@/src/constants/siteConfig";

export default function VeteranCareComp() {
  const { language } = useLanguage();
  const t = content[language as "en" | "es"] || content.en;

  const serviceIcons = [
    Users,
    ClipboardList,
    Activity,
    FileText,
    Award,
    HeartPulse,
    ShieldCheck,
    Flag,
  ];

  return (
    <main className="min-h-screen bg-[#FBF8F2] text-[#3A4657] ohh-sans">
      {/* ===== Hero Section ===== */}
      <section className="relative overflow-hidden pt-12 pb-16 lg:pt-20 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3ECDC] text-[#0A2140] font-semibold text-xs tracking-wider uppercase">
                <span className="w-2 h-2 rounded-full bg-[#C89B3C]" />
                {t.badge}
              </div>

              <div className="text-xs text-[#8A7B5C] font-medium tracking-wide">
                {siteConfig.legalName}, serving clients since 2010, is now doing
                business as {siteConfig.name}.
              </div>

              <h1 className="ohh-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#0A2140] tracking-tight leading-[1.1]">
                {t.titleMain}{" "}
                <span className="text-[#C89B3C]">{t.titleHighlight}</span>
              </h1>

              <p className="text-base sm:text-lg text-[#5B6B7C] leading-relaxed max-w-2xl">
                {t.description}
              </p>

              {/* Clickable prompt leading to Aid and Attendance */}
              <div className="pt-1">
                <Link
                  href="/services/veteran-care/aid-and-attendance"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#0A2140] hover:text-[#C89B3C] transition-colors underline underline-offset-4 decoration-[#C89B3C]/50 hover:decoration-[#C89B3C]"
                >
                  <span>{t.aidAndAttendancePrompt}</span>
                  <ArrowRight size={14} />
                </Link>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link
                  href="/contact#consultation-form"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#0A2140] hover:bg-[#123258] text-[#E4B95A] font-bold rounded-full transition-colors group"
                >
                  <span>{t.requestCare}</span>
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
                <a
                  href={`tel:${siteConfig.contact.phoneTel}`}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#F3ECDC] hover:bg-[#EADFC2] text-[#0A2140] font-semibold rounded-full transition-colors"
                >
                  <Phone size={16} />
                  <span>Call {siteConfig.contact.phone}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl p-2 overflow-hidden shadow-xl shadow-[#0A2140]/5">
                <div className="relative h-[300px] rounded-[20px] overflow-hidden">
                  <img
                    src="/images/services/ot_j.svg"
                    alt="Dedicated veteran healthcare support at home"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="ohh-serif text-lg font-semibold text-[#0A2140]">
                    {t.cardTitle}
                  </h3>
                  <p className="text-sm text-[#5B6B7C] leading-relaxed">
                    {t.cardDesc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Overview Section ===== */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 relative">
              <div className="overflow-hidden rounded-3xl shadow-xl shadow-[#0A2140]/5">
                <img
                  src="/images/services/ot_k.svg"
                  alt="Compassionate veteran care team member supporting a client"
                  className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 hidden sm:flex flex-col gap-1 p-6 rounded-3xl bg-[#0A2140] max-w-[220px]">
                <span className="ohh-serif text-3xl font-semibold text-[#E4B95A]">
                  100%
                </span>
                <span className="text-xs text-white/70 font-medium leading-relaxed">
                  Dedicated to respecting and serving those who served our
                  nation.
                </span>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-8 lg:pl-4">
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#C89B3C]">
                  {t.overviewTag}
                </span>
                <h2 className="ohh-serif text-3xl sm:text-4xl font-semibold text-[#0A2140] tracking-tight">
                  {t.overviewTitle}
                </h2>
                <p className="text-[#5B6B7C] text-sm sm:text-base leading-relaxed">
                  {t.overviewDesc}
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 text-sm font-semibold text-[#0A2140]">
                {t.features.map((item: string) => (
                  <div
                    key={item}
                    className="bg-[#FBF8F2] p-4 rounded-2xl flex items-center gap-3"
                  >
                    <CheckCircle2 className="text-[#C89B3C] w-5 h-5 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Scope of Services Section ===== */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C89B3C]">
              {t.servicesTag}
            </span>
            <h2 className="ohh-serif text-3xl sm:text-4xl font-semibold text-[#0A2140] tracking-tight">
              {t.servicesTitle}
            </h2>
            <p className="text-[#5B6B7C] text-base">{t.servicesDesc}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.servicesList.map(
              (item: { title: string; desc: string }, idx: number) => {
                const Icon = serviceIcons[idx];
                return (
                  <div
                    key={item.title}
                    className="group bg-white p-8 rounded-3xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-sm"
                  >
                    <div>
                      <div className="w-14 h-14 rounded-2xl bg-[#0A2140] text-[#E4B95A] flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-105">
                        <Icon size={26} strokeWidth={1.75} />
                      </div>
                      <h3 className="ohh-serif font-bold text-[#0A2140] mb-3 text-lg tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#5B6B7C] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0A2140] rounded-3xl p-10 sm:p-14 flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#C89B3C]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 space-y-3 text-center lg:text-left">
              <h3 className="ohh-serif text-2xl sm:text-3xl font-semibold text-white">
                {t.ctaTitle}
              </h3>
              <p className="text-white/70 text-sm sm:text-base max-w-xl">
                {t.ctaDesc}
              </p>
            </div>
            <div className="relative z-10 flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${siteConfig.contact.phoneTel}`}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#E4B95A] hover:bg-[#F0C874] text-[#0A2140] font-bold rounded-full transition-colors"
              >
                <Phone size={16} />
                <span>Call {siteConfig.contact.phone}</span>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full transition-colors"
              >
                <span>Contact our team</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}