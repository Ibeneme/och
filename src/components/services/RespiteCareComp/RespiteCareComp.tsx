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

const wrap = "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8";
const heading =
  "ohh-serif font-light leading-tight tracking-tight text-[#07162C]";
const card = "rounded-3xl border border-[#07162C]/10 bg-white p-6 sm:p-8";

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
    <main className="min-h-screen bg-[#F4F4F2] pb-24 pt-14 text-[#07162C] sm:pt-20 lg:pb-28">
      {/* ===== Hero Section ===== */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 text-center">
        <div className={`${wrap} space-y-6 max-w-4xl`}>
          <span className="inline-flex items-center gap-2 rounded-full border border-[#07162C]/10 bg-[#E9EAE5] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#07162C]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#996515] animate-pulse" />
            {t.badge}
          </span>

          <h1 className={`${heading} text-4xl sm:text-5xl lg:text-6xl`}>
            {t.titleMain}{" "}
            <span className="text-[#996515]">{t.titleHighlight}</span>
          </h1>

          <p className="mx-auto max-w-3xl text-sm leading-relaxed text-[#07162C]/75 sm:text-base">
            {t.description}
          </p>

          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <Link
              href="/contact#consultation-form"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#07162C] bg-[#07162C] px-7 py-3.5 text-sm font-semibold text-[#E4B95A] transition-colors hover:bg-[#0A2140]"
            >
              <span>{t.requestCare}</span>
              <ArrowRight size={16} />
            </Link>
            <a
              href={`tel:${siteConfig.contact.phoneTel}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#07162C]/20 bg-white px-7 py-3.5 text-sm font-semibold text-[#07162C] transition-colors hover:border-[#07162C]"
            >
              <Phone size={16} />
              <span>Call {siteConfig.contact.phone}</span>
            </a>
          </div>

          <div className="pt-8">
            <div className="relative h-[320px] sm:h-[420px] overflow-hidden rounded-3xl border border-[#07162C]/10 bg-white p-3 shadow-xl">
              <img
                src="/images/services/ot_d.svg"
                alt="Supportive professional caregiver interacting with a senior client at home"
                className="h-full w-full rounded-2xl object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07162C]/70 via-transparent to-transparent pointer-events-none rounded-2xl" />
              <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border border-[#07162C]/10 bg-white/95 p-6 backdrop-blur-md text-left">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#996515]">
                    {t.cardTitle}
                  </span>
                  <p className="mt-1 text-sm font-semibold text-[#07162C]">
                    {t.cardDesc}
                  </p>
                </div>
                <div className="rounded-full bg-[#E9EAE5] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#07162C] whitespace-nowrap">
                  {t.flexibleScheduling}
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

            <div className="grid grid-cols-2 gap-4 lg:col-span-6">
              <div className="space-y-4 pt-8">
                <div className="overflow-hidden rounded-3xl border border-[#07162C]/10 bg-white p-2">
                  <img
                    src="/images/services/ot_e.svg"
                    alt="Kind home caregiver offering warm assistance"
                    className="h-64 w-full rounded-2xl object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="overflow-hidden rounded-3xl border border-[#07162C]/10 bg-white p-2">
                  <img
                    src="/images/services/ot_f.svg"
                    alt="Senior individual feeling secure and comfortable at home"
                    className="h-80 w-full rounded-2xl object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Scope of Services Section ===== */}
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

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {t.servicesList.map(
              (item: { title: string; desc: string }, idx: number) => {
                const Icon = serviceIcons[idx];
                return (
                  <div key={item.title} className={card}>
                    <div className="flex h-full flex-col justify-between">
                      <div>
                        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#07162C] text-[#E4B95A]">
                          <Icon size={26} strokeWidth={1.75} />
                        </div>
                        <h3 className={`${heading} mb-2 text-lg font-medium`}>
                          {item.title}
                        </h3>
                        <p className="text-xs sm:text-sm leading-relaxed text-[#07162C]/70">
                          {item.desc}
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
    </main>
  );
}
