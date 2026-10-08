"use client";

import Link from "next/link";
import {
  Utensils,
  Home,
  ClipboardList,
  Sparkles,
  Clock,
  Heart,
  Phone,
} from "lucide-react";
import { useLanguage } from "@/src/context/LanguageContext";
import content from "@/src/locales/services/daily-lifestyle.json";
import { siteConfig } from "@/src/constants/siteConfig";

export default function DailyLifestyleSupportComp() {
  const { language } = useLanguage();
  const t = content[language as "en" | "es"] || content.en;

  const serviceIcons = [Utensils, Home, ClipboardList, Sparkles, Clock, Heart];

  return (
    <div className="min-h-screen bg-white text-[#3A4657] font-sans">
      {/* ========== HERO ========== */}
      <section className="relative bg-[#0A2140] text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/services/ot_h.svg"
            alt="Daily lifestyle support"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A2140] via-[#0A2140]/70 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#E4B95A] font-medium text-xs tracking-wider uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-[#E4B95A] animate-pulse" />
              {t.badge}
            </div>
            <h1 className="ohh-serif text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.1] mb-6 tracking-tight">
              {t.titleMain}{" "}
              <span className="text-[#E4B95A]">{t.titleHighlight}</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/70 mb-8 leading-relaxed max-w-xl">
              {t.description}
            </p>
            <a
              href={`tel:${siteConfig.contact.phoneTel}`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#E4B95A] hover:bg-[#D9A93F] text-[#0A2140] font-bold rounded-xl transition-colors text-sm"
            >
              <Phone size={16} /> {t.callUs}
            </a>
          </div>
        </div>
      </section>

      {/* ========== INTRO ========== */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 relative order-2 lg:order-1">
              <div className="overflow-hidden rounded-[2rem] shadow-xl shadow-[#0A2140]/5">
                <img
                  src="/images/services/ot_i.svg"
                  alt="Daily lifestyle support"
                  className="w-full h-80 lg:h-[26rem] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 left-6 bg-[#FBF8F2] rounded-2xl px-6 py-4 shadow-md">
                <p className="ohh-serif text-3xl font-semibold text-[#0A2140] leading-none">
                  6+
                </p>
                <p className="text-[11px] uppercase tracking-wider text-[#8A7B5C] font-semibold mt-1">
                  {t.cardSub}
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-8 order-1 lg:order-2">
              <div>
                <span className="text-[#C89B3C] font-semibold tracking-widest uppercase text-xs">
                  {t.overviewTag}
                </span>
                <h2 className="ohh-serif text-2xl sm:text-3xl font-semibold text-[#0A2140] mt-2 mb-4">
                  {t.overviewTitle}
                </h2>
                <p className="text-[#5B6B7C] text-sm leading-relaxed">
                  {t.overviewDesc}
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-4">
                {t.checklist.map((item: string) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E4B95A] shrink-0" />
                    <span className="text-sm font-medium text-[#0A2140]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SERVICE SCOPE ========== */}
      <section className="py-20 bg-[#FBF8F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-[#C89B3C] font-semibold tracking-widest uppercase text-xs">
              {t.servicesTag}
            </span>
            <h2 className="ohh-serif text-2xl sm:text-3xl font-semibold text-[#0A2140] mt-2 mb-4">
              {t.servicesTitle}
            </h2>
            <p className="text-[#5B6B7C] text-sm">{t.servicesDesc}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {t.servicesList.map(
              (
                item: { title: string; desc: string; featured?: boolean },
                idx: number
              ) => {
                const Icon = serviceIcons[idx];
                const featured = item.featured;
                return (
                  <div
                    key={item.title}
                    className={`p-7 rounded-3xl shadow-sm ${
                      featured
                        ? "bg-[#0A2140] text-white md:col-span-2 lg:col-span-1 lg:row-span-2 flex flex-col justify-between"
                        : "bg-white"
                    }`}
                  >
                    <div>
                      <div
                        className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 ${
                          featured
                            ? "bg-white/10 text-[#E4B95A]"
                            : "bg-[#F3ECDC] text-[#0A2140]"
                        }`}
                      >
                        <Icon size={22} />
                      </div>
                      <h3
                        className={`font-semibold mb-2 text-base ${
                          featured ? "text-white" : "text-[#0A2140]"
                        }`}
                      >
                        {item.title}
                      </h3>
                      <p
                        className={`text-sm leading-relaxed ${
                          featured ? "text-white/65" : "text-[#5B6B7C]"
                        }`}
                      >
                        {item.desc}
                      </p>
                    </div>
                    {featured && (
                      <span className="mt-8 inline-flex items-center gap-1.5 text-xs font-semibold text-[#E4B95A]">
                        {t.mostRequested}
                      </span>
                    )}
                  </div>
                );
              }
            )}
          </div>
        </div>
      </section>
    </div>
  );
}