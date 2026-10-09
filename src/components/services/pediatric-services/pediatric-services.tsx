"use client";

import Link from "next/link";
import {
  Phone,
  ArrowRight,
  HeartHandshake,
  ShieldCheck,
  Check,
} from "lucide-react";
import { useLanguage } from "@/src/context/LanguageContext";
import content from "@/src/locales/services/pediatric-services.json";

const wrap = "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8";
const heading =
  "ohh-serif font-light leading-tight tracking-tight text-[#07162C]";
const card = "rounded-3xl border border-[#07162C]/10 bg-white p-6 sm:p-8";

export default function PediatricServicesComp() {
  const { language } = useLanguage();
  const t = content[language as "en" | "es"] || content.en;

  const payment = [
    { title: t.starkidsTitle, desc: t.starkidsDesc },
    { title: t.starchipTitle, desc: t.starchipDesc },
    { title: t.privateTitle, desc: t.privateDesc },
  ];

  return (
    <main className="min-h-screen bg-[#F4F4F2] pb-24 pt-14 text-[#07162C] sm:pt-20 lg:pb-28">
      {/* ===== Hero ===== */}
      <section className="px-4 sm:px-6 lg:px-8 py-12">
        <div className={wrap}>
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="space-y-6 lg:col-span-7">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#07162C]/10 bg-[#E9EAE5] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#07162C]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#996515] animate-pulse" />
                {t.badge}
              </span>

              <h1 className={`${heading} text-4xl sm:text-5xl lg:text-6xl`}>
                {t.titleMain} {t.titleHighlight}
              </h1>
              <p className="max-w-xl text-sm leading-relaxed text-[#07162C]/75 sm:text-base">
                {t.description}
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#07162C] bg-[#07162C] px-7 py-3.5 text-sm font-semibold text-[#E4B95A] transition-colors hover:bg-[#0A2140]"
                >
                  <HeartHandshake size={17} aria-hidden />
                  {t.contactBtn}
                  <ArrowRight size={16} aria-hidden />
                </Link>
                <a
                  href="tel:9728489174"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#07162C]/20 bg-white px-7 py-3.5 text-sm font-semibold text-[#07162C] transition-colors hover:border-[#07162C]"
                >
                  <Phone size={16} aria-hidden />
                  {t.callUs}
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className={card}>
                <img
                  src="/images/paediatric-care.jpg"
                  alt="Pediatric home care"
                  className="aspect-[4/3] w-full rounded-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Coverage strip ===== */}
      <section className="py-8">
        <div className={wrap}>
          <div
            className={`${card} flex flex-col gap-6 md:flex-row md:items-center md:justify-between`}
          >
            <div className="flex max-w-2xl items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#07162C] text-[#E4B95A]">
                <ShieldCheck size={21} aria-hidden />
              </span>
              <div>
                <h2 className={`${heading} text-xl font-medium`}>
                  {t.sidebarTitle}
                </h2>
                <p className="mt-1 text-sm leading-relaxed text-[#07162C]/70">
                  {t.sidebarDesc}
                </p>
              </div>
            </div>
            <ul className="flex flex-wrap gap-2 md:justify-end">
              {["STAR Kids", "STAR", "CHIP", "HHSC Licensed"].map((b) => (
                <li
                  key={b}
                  className="rounded-full border border-[#07162C]/10 bg-[#E9EAE5] px-4 py-1.5 text-xs font-bold text-[#07162C]"
                >
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ===== Respite care ===== */}
      <section className="py-12">
        <div className={`${wrap} grid gap-8 lg:grid-cols-12 lg:gap-12`}>
          <div className={`${card} space-y-3 lg:col-span-5`}>
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#996515]">
              {t.respiteTag}
            </span>
            <h2
              className={`${heading} text-3xl font-medium leading-tight sm:text-4xl`}
            >
              {t.respiteTitle}
            </h2>
          </div>
          <div className={`${card} space-y-4 lg:col-span-7`}>
            <p
              className={`${heading} text-xl font-medium leading-snug tracking-tight`}
            >
              {t.respiteDesc}
            </p>
            <p className="text-sm leading-relaxed text-[#07162C]/75 sm:text-base">
              {t.respiteSubDesc}
            </p>
          </div>
        </div>
      </section>

      {/* ===== Other pediatric support ===== */}
      <section className="py-12">
        <div className={`${wrap} grid gap-8 lg:grid-cols-12 lg:gap-12`}>
          <div className={`${card} space-y-3 lg:col-span-4`}>
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#996515]">
              {t.supportTag}
            </span>
            <h2
              className={`${heading} text-3xl font-medium leading-tight sm:text-4xl`}
            >
              {t.supportTitle}
            </h2>
          </div>
          <div className={`${card} lg:col-span-8`}>
            <ul className="divide-y divide-[#07162C]/10 border-y border-[#07162C]/10">
              {t.supportItems.map((item: string, idx: number) => (
                <li
                  key={idx}
                  className="flex items-start gap-3.5 py-4 text-sm leading-relaxed text-[#07162C]/85"
                >
                  <Check
                    size={18}
                    className="mt-0.5 shrink-0 text-[#996515]"
                    aria-hidden
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ===== How pediatric care is paid for ===== */}
      <section className="py-12">
        <div className={`${wrap} space-y-10`}>
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#996515]">
              {t.paymentTag}
            </span>
            <h2 className={`${heading} text-3xl font-medium sm:text-4xl`}>
              {t.paymentTitle}
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {payment.map((p) => (
              <div key={p.title} className={card}>
                <h3 className={`${heading} text-xl font-medium`}>{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#07162C]/75">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Family member as paid caregiver ===== */}
      <section className="py-12">
        <div className={wrap}>
          <div
            className={`${card} grid gap-6 border-l-4 border-l-[#996515] lg:grid-cols-12 lg:gap-12 items-center`}
          >
            <h3
              className={`${heading} text-2xl font-medium leading-tight tracking-tight sm:text-3xl lg:col-span-5`}
            >
              {t.familyPaidTitle}
            </h3>
            <p className="text-sm leading-relaxed text-[#07162C]/75 lg:col-span-7 sm:text-base">
              {t.familyPaidDesc}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
