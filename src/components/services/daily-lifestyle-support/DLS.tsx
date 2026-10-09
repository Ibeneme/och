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

const wrap = "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8";
const heading =
  "ohh-serif font-light leading-tight tracking-tight text-[#07162C]";
const card = "rounded-3xl border border-[#07162C]/10 bg-white p-6 sm:p-8";

export default function DailyLifestyleSupportComp() {
  const { language } = useLanguage();
  const t = content[language as "en" | "es"] || content.en;

  const serviceIcons = [Utensils, Home, ClipboardList, Sparkles, Clock, Heart];

  return (
    <main className="min-h-screen bg-[#F4F4F2] pb-24 pt-14 text-[#07162C] sm:pt-20 lg:pb-28">
      {/* ========== HERO ========== */}
      <section className="px-4 sm:px-6 lg:px-8 py-12">
        <div className={wrap}>
          <div className="max-w-3xl space-y-6">
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
            <div className="pt-2">
              <a
                href={`tel:${siteConfig.contact.phoneTel}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#07162C] bg-[#07162C] px-7 py-3.5 text-sm font-semibold text-[#E4B95A] transition-colors hover:bg-[#0A2140]"
              >
                <Phone size={16} /> {t.callUs}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========== INTRO ========== */}
      <section className="py-12">
        <div className={wrap}>
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="relative order-2 lg:order-1 lg:col-span-6">
              <div className="overflow-hidden rounded-3xl border border-[#07162C]/10 bg-white p-3">
                <img
                  src="/images/services/ot_i.svg"
                  alt="Daily lifestyle support"
                  className="h-80 lg:h-[26rem] w-full rounded-2xl object-cover"
                />
              </div>
              <div className="absolute -bottom-6 left-6 rounded-2xl border border-[#07162C]/10 bg-[#E9EAE5] px-6 py-4 shadow-xl">
                <p className="ohh-serif text-3xl font-light text-[#07162C] leading-none">
                  6+
                </p>
                <p className="mt-1 text-[11px] font-bold uppercase tracking-wider text-[#996515]">
                  {t.cardSub}
                </p>
              </div>
            </div>

            <div className="order-1 space-y-6 lg:order-2 lg:col-span-6">
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
                {t.checklist.map((item: string) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-[#07162C]/10 bg-white p-4"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#996515]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SERVICE SCOPE ========== */}
      <section className="py-12">
        <div className={wrap}>
          <div className="mb-12 max-w-2xl space-y-3">
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

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
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
                    className={`${card} ${
                      featured
                        ? "bg-[#07162C] text-white md:col-span-2 lg:col-span-1 lg:row-span-2 flex flex-col justify-between border-transparent"
                        : ""
                    }`}
                  >
                    <div>
                      <div
                        className={`mb-6 flex h-12 w-12 items-center justify-center rounded-2xl ${
                          featured
                            ? "bg-white/10 text-[#E4B95A]"
                            : "bg-[#07162C] text-[#E4B95A]"
                        }`}
                      >
                        <Icon size={22} />
                      </div>
                      <h3
                        className={`${heading} mb-2 text-lg font-medium ${
                          featured ? "text-white" : ""
                        }`}
                      >
                        {item.title}
                      </h3>
                      <p
                        className={`text-xs sm:text-sm leading-relaxed ${
                          featured ? "text-white/75" : "text-[#07162C]/70"
                        }`}
                      >
                        {item.desc}
                      </p>
                    </div>
                    {featured && (
                      <span className="mt-8 inline-flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase text-[#E4B95A]">
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
    </main>
  );
}
