"use client";

import Link from "next/link";
import {
  Activity,
  UserCheck,
  HeartPulse,
  ShieldCheck,
  BookOpen,
  Star,
  Phone,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { useLanguage } from "@/src/context/LanguageContext";
import content from "@/src/locales/services/adults-with-disabilities.json";
import { siteConfig } from "@/src/constants/siteConfig";

export default function AdultsWithDisabilitiesComp() {
  const { language } = useLanguage();
  const t = content[language as "en" | "es"] || content.en;

  const serviceIcons = [
    Activity,
    UserCheck,
    HeartPulse,
    ShieldCheck,
    BookOpen,
    Activity,
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
                {siteConfig.legalName}, serving clients since 2010, is now doing business as {siteConfig.name}.
              </div>

              <h1 className="ohh-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#0A2140] tracking-tight leading-[1.1]">
                {t.titleMain}{" "}
                <span className="text-[#C89B3C]">{t.titleHighlight}</span>
              </h1>

              <p className="text-base sm:text-lg text-[#5B6B7C] leading-relaxed max-w-2xl">
                {t.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a
                  href={`tel:${siteConfig.contact.phoneTel}`}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#0A2140] hover:bg-[#123258] text-[#E4B95A] font-bold rounded-full transition-colors group"
                >
                  <Phone size={16} />
                  <span>Call {siteConfig.contact.phone}</span>
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#F3ECDC] hover:bg-[#EADFC2] text-[#0A2140] font-semibold rounded-full transition-colors"
                >
                  <span>{t.requestConsultation}</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl p-2 overflow-hidden shadow-xl shadow-[#0A2140]/5">
                <div className="relative h-[300px] rounded-[20px] overflow-hidden">
                  <img
                    src="/images/services/ot_b.svg"
                    alt="Adults with disabilities home care"
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
            <div className="lg:col-span-6 space-y-8">
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#C89B3C]">
                  {t.overviewTag}
                </span>
                <h2 className="ohh-serif text-3xl sm:text-4xl font-semibold text-[#0A2140] tracking-tight">
                  {t.overviewTitle}
                </h2>
                <p className="text-[#5B6B7C] text-base leading-relaxed">
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

            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-3xl shadow-xl shadow-[#0A2140]/5">
                <img
                  src="/images/services/ot_c.svg"
                  alt="Care for adults with disabilities"
                  className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Scope of Services ===== */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C89B3C]">
              {t.servicesTag}
            </span>
            <h2 className="ohh-serif text-3xl sm:text-4xl font-semibold text-[#0A2140] tracking-tight">
              {t.servicesTitle}
            </h2>
            <p className="text-[#5B6B7C] text-base">
              {t.servicesDesc}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.servicesList.map((item: { title: string; desc: string }, idx: number) => {
              const Icon = serviceIcons[idx];
              return (
                <div
                  key={item.title}
                  className="bg-white rounded-3xl p-7 flex flex-col transition-colors hover:bg-[#F3ECDC]/40 shadow-sm"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#0A2140] text-[#E4B95A] flex items-center justify-center mb-5">
                    <Icon size={22} />
                  </div>
                  <h3 className="ohh-serif font-bold text-[#0A2140] mb-2.5 text-lg tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#5B6B7C] leading-relaxed">{item.desc}</p>
                </div>
              );
            })}

            <div className="md:col-span-2 lg:col-span-3 bg-[#0A2140] rounded-3xl p-8 lg:p-10 flex flex-col sm:flex-row sm:items-center gap-6 shadow-xl">
              <div className="w-14 h-14 rounded-2xl bg-white/10 text-[#E4B95A] flex items-center justify-center shrink-0">
                <Star size={26} />
              </div>
              <div className="flex-1">
                <h3 className="ohh-serif font-bold text-white mb-2 text-xl tracking-tight">
                  {t.bannerTitle}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed max-w-3xl">
                  {t.bannerDesc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}