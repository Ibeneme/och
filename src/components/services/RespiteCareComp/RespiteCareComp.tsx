"use client";

import Link from "next/link";
import {
  Coffee,
  Smile,
  ClipboardList,
  HeartHandshake,
  ShieldCheck,
  Home,
  Phone,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Heart,
} from "lucide-react";
import { useLanguage } from "@/src/context/LanguageContext";
import content from "@/src/locales/services/respite-care.json";
import { siteConfig } from "@/src/constants/siteConfig";

export default function RespiteCareComp() {
  const { language } = useLanguage();
  const t = content[language as "en" | "es"] || content.en;

  const serviceIcons = [
    Coffee,
    Smile,
    ClipboardList,
    HeartHandshake,
    ShieldCheck,
    Home,
    Heart,
    Sparkles,
  ];

  return (
    <main className="min-h-screen bg-[#FBF8F2] text-[#3A4657] ohh-sans">
      {/* ===== Hero Section ===== */}
      <section className="relative overflow-hidden pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
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

          <p className="text-base sm:text-lg text-[#5B6B7C] leading-relaxed max-w-3xl mx-auto">
            {t.description}
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4 pt-2">
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

          <div className="pt-10">
            <div className="relative rounded-3xl overflow-hidden h-[320px] sm:h-[420px] shadow-xl shadow-[#0A2140]/5">
              <img
                src="/images/services/ot_d.svg"
                alt="Supportive professional caregiver interacting with a senior client at home"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A2140] via-transparent to-transparent opacity-70" />
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-white/95 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#C89B3C]">
                    {t.cardTitle}
                  </span>
                  <p className="text-sm text-[#0A2140] font-semibold mt-1">
                    {t.cardDesc}
                  </p>
                </div>
                <div className="px-4 py-2 rounded-xl bg-[#F3ECDC] text-[#0A2140] text-xs font-bold whitespace-nowrap">
                  {t.flexibleScheduling}
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
            <div className="lg:col-span-6 space-y-8">
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

            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-8">
                <div className="overflow-hidden rounded-3xl shadow-md">
                  <img
                    src="/images/services/ot_e.svg"
                    alt="Kind home caregiver offering warm assistance"
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="overflow-hidden rounded-3xl shadow-md">
                  <img
                    src="/images/services/ot_f.svg"
                    alt="Senior individual feeling secure and comfortable at home"
                    className="w-full h-80 object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
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