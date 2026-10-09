"use client";

import Link from "next/link";
import {
  ShieldCheck,
  Phone,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
} from "lucide-react";
import { useLanguage } from "@/src/context/LanguageContext";
import content from "@/src/locales/services/aid-and-attendance.json";
import { siteConfig } from "@/src/constants/siteConfig";

const wrap = "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8";
const heading =
  "ohh-serif font-light leading-tight tracking-tight text-[#07162C]";
const card = "rounded-3xl border border-[#07162C]/10 bg-white p-6 sm:p-8";

export default function AidAndAttendancePage() {
  const { language } = useLanguage();
  const t = content[language as "en" | "es"] || content.en;

  const ratesTable = [
    { label: t.rateVeteranNoDep, amount: "$29,093" },
    { label: t.rateVeteranDep, amount: "$34,488" },
    { label: t.rateTwoVeterans, amount: "$46,143" },
    { label: t.rateSurvivingSpouse, amount: "$18,697" },
  ];

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
                  href="/contact"
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
            </div>

            <div className="lg:col-span-5">
              <div className={card}>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#07162C] text-[#E4B95A]">
                  <ShieldCheck size={26} />
                </div>
                <h3 className={`${heading} mb-2 text-xl font-medium`}>
                  {t.cardTitle}
                </h3>
                <p className="text-sm leading-relaxed text-[#07162C]/75">
                  {t.cardDesc}
                </p>
                <div className="mt-4 border-t border-[#07162C]/10 pt-4">
                  <p className="text-xs font-medium text-[#07162C]/60">
                    Net worth limit ($163,699 limit through Nov 30, 2026). Home
                    & car excluded.
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
          <div className="mb-12 max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#996515]">
              {t.overviewTag}
            </span>
            <h2 className={`${heading} text-3xl sm:text-4xl`}>
              {t.overviewTitle}
            </h2>
            <p className="text-sm leading-relaxed text-[#07162C]/75 sm:text-base">
              {t.overviewDesc}
            </p>
          </div>

          <div className="space-y-6 pt-4">
            <div className="border-b border-[#07162C]/10 pb-4">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#996515]">
                {t.qualifyTag}
              </span>
              <h3 className={`${heading} mt-1 text-2xl font-medium`}>
                {t.qualifyTitle}
              </h3>
              <p className="mt-1 text-sm text-[#07162C]/70">{t.qualifyDesc}</p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <div className={card}>
                <CheckCircle2 className="mb-3 h-6 w-6 text-[#996515]" />
                <h4 className={`${heading} mb-2 text-lg font-medium`}>
                  {t.militaryTitle}
                </h4>
                <p className="text-xs sm:text-sm leading-relaxed text-[#07162C]/70">
                  {t.militaryDesc}
                </p>
              </div>

              <div className={card}>
                <CheckCircle2 className="mb-3 h-6 w-6 text-[#996515]" />
                <h4 className={`${heading} mb-2 text-lg font-medium`}>
                  {t.needTitle}
                </h4>
                <p className="text-xs sm:text-sm leading-relaxed text-[#07162C]/70">
                  {t.needDesc}
                </p>
              </div>

              <div className={card}>
                <CheckCircle2 className="mb-3 h-6 w-6 text-[#996515]" />
                <h4 className={`${heading} mb-2 text-lg font-medium`}>
                  {t.incomeTitle}
                </h4>
                <p className="text-xs sm:text-sm leading-relaxed text-[#07162C]/70">
                  {t.incomeDesc}
                </p>
              </div>

              <div className={card}>
                <CheckCircle2 className="mb-3 h-6 w-6 text-[#996515]" />
                <h4 className={`${heading} mb-2 text-lg font-medium`}>
                  {t.spouseTitle}
                </h4>
                <p className="text-xs sm:text-sm leading-relaxed text-[#07162C]/70">
                  {t.spouseDesc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Rates Section ===== */}
      <section className="py-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className={card}>
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#996515]">
                {t.ratesTag}
              </span>
              <h2 className={`${heading} text-2xl sm:text-3xl font-medium`}>
                {t.ratesTitle}
              </h2>
              <p className="text-xs sm:text-sm text-[#07162C]/70">
                {t.ratesSubtitle}{" "}
                <a
                  href="https://www.va.gov/pension/veterans-pension-rates/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-semibold text-[#07162C] underline hover:text-[#996515]"
                >
                  va.gov/pension/veterans-pension-rates/
                  <ExternalLink size={12} />
                </a>
              </p>
            </div>

            <div className="my-6 divide-y divide-[#07162C]/10 border-y border-[#07162C]/10">
              {ratesTable.map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 py-4"
                >
                  <span className="text-sm font-semibold text-[#07162C]">
                    {item.label}
                  </span>
                  <span className="ohh-serif text-lg font-medium text-[#996515]">
                    {item.amount}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex items-start gap-3 rounded-2xl bg-[#E9EAE5] p-4 text-xs text-[#07162C]/75">
              <AlertCircle
                size={16}
                className="mt-0.5 shrink-0 text-[#996515]"
              />
              <p>{t.ratesDisclaimer}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== How to Apply & Free Help Section ===== */}
      <section className="py-12">
        <div className={`${wrap} max-w-4xl space-y-8`}>
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#996515]">
              {t.applyTag}
            </span>
            <h2 className={`${heading} text-3xl font-medium`}>
              {t.applyTitle}
            </h2>
            <p className="text-sm leading-relaxed text-[#07162C]/75 sm:text-base">
              {t.applyDesc}
            </p>
          </div>

          <div className={card}>
            <h3 className={`${heading} mb-4 text-xl font-medium`}>
              {t.freeHelpTitle}
            </h3>
            <ul className="space-y-4 text-sm text-[#07162C]/80">
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#996515]" />
                <div>
                  <strong className="text-[#07162C]">{t.tvLabel}</strong> —{" "}
                  {t.tvDesc}
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#996515]" />
                <div>
                  <strong className="text-[#07162C]">{t.cvsoLabel}</strong> —{" "}
                  {t.cvsoDesc}
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#996515]" />
                <div>
                  <strong className="text-[#07162C]">{t.vaRepLabel}</strong> —{" "}
                  {t.vaRepDesc}
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#996515]" />
                <div>
                  <strong className="text-[#07162C]">{t.vaDirectLabel}</strong>{" "}
                  — {t.vaDirectDesc}
                </div>
              </li>
            </ul>

            <div className="mt-6 border-t border-[#07162C]/10 pt-4 text-xs sm:text-sm leading-relaxed text-[#07162C]/70">
              {t.agencyStance}
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA & Notice Footer Box ===== */}
      <section className="py-12">
        <div className={`${wrap} space-y-8`}>
          <div className="relative overflow-hidden rounded-3xl bg-[#07162C] p-8 text-white sm:p-12 lg:p-14 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="absolute -bottom-12 -right-12 h-64 w-64 rounded-full bg-[#E4B95A]/10 blur-3xl pointer-events-none" />
            <div className="relative z-10 space-y-3 text-center lg:text-left max-w-xl">
              <h3 className={`${heading} text-2xl text-white sm:text-3xl`}>
                {t.alreadyTitle}
              </h3>
              <p className="text-sm leading-relaxed text-white/75 sm:text-base">
                {t.alreadyDesc}
              </p>
            </div>
            <div className="relative z-10 flex flex-col sm:flex-row gap-4 shrink-0">
              <a
                href={`tel:${siteConfig.contact.phoneTel}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#E4B95A] bg-[#E4B95A] px-7 py-3.5 text-sm font-semibold text-[#07162C] transition-colors hover:bg-[#EDC878]"
              >
                <Phone size={16} />
                <span>Call {siteConfig.contact.phone}</span>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-[#E4B95A] hover:text-[#E4B95A]"
              >
                <span>Request care</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-[#07162C]/10 bg-[#E9EAE5] p-6 sm:p-8 text-xs sm:text-sm leading-relaxed text-[#07162C]/75 space-y-2">
            <h4 className="font-bold text-[#07162C] uppercase tracking-wider text-xs">
              {t.disclaimerHeading}
            </h4>
            <p>{t.disclaimerText}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
