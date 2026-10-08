"use client";

import Link from "next/link";
import {
  ShieldCheck,
  Phone,
  ArrowRight,
  CheckCircle2,
  FileText,
  AlertCircle,
  HelpCircle,
  ExternalLink,
} from "lucide-react";
import { useLanguage } from "@/src/context/LanguageContext";
import content from "@/src/locales/services/aid-and-attendance.json";
import { siteConfig } from "@/src/constants/siteConfig";

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

              <h1 className="ohh-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#0A2140] tracking-tight leading-[1.1]">
                {t.titleMain}{" "}
                <span className="text-[#C89B3C]">{t.titleHighlight}</span>
              </h1>

              <p className="text-base sm:text-lg text-[#5B6B7C] leading-relaxed max-w-2xl">
                {t.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link
                  href="/contact"
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
              <div className="bg-white rounded-3xl p-6 shadow-xl shadow-[#0A2140]/5 space-y-4 border border-[#F0E6D2]">
                <div className="w-12 h-12 rounded-2xl bg-[#0A2140] text-[#E4B95A] flex items-center justify-center">
                  <ShieldCheck size={26} />
                </div>
                <h3 className="ohh-serif text-xl font-semibold text-[#0A2140]">
                  {t.cardTitle}
                </h3>
                <p className="text-sm text-[#5B6B7C] leading-relaxed">
                  {t.cardDesc}
                </p>
                <div className="pt-2 border-t border-[#F5EFE6]">
                  <p className="text-xs text-[#8A7B5C] font-medium">
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
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4 mb-16">
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

          {/* Who may qualify grid */}
          <div className="space-y-6 pt-6">
            <div className="border-b border-gray-100 pb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C89B3C]">
                {t.qualifyTag}
              </span>
              <h3 className="ohh-serif text-2xl font-semibold text-[#0A2140] mt-1">
                {t.qualifyTitle}
              </h3>
              <p className="text-sm text-[#5B6B7C] mt-1">{t.qualifyDesc}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-[#FBF8F2] p-6 rounded-2xl space-y-3">
                <CheckCircle2 className="text-[#C89B3C] w-6 h-6" />
                <h4 className="ohh-serif font-bold text-[#0A2140] text-lg">
                  {t.militaryTitle}
                </h4>
                <p className="text-xs sm:text-sm text-[#5B6B7C] leading-relaxed">
                  {t.militaryDesc}
                </p>
              </div>

              <div className="bg-[#FBF8F2] p-6 rounded-2xl space-y-3">
                <CheckCircle2 className="text-[#C89B3C] w-6 h-6" />
                <h4 className="ohh-serif font-bold text-[#0A2140] text-lg">
                  {t.needTitle}
                </h4>
                <p className="text-xs sm:text-sm text-[#5B6B7C] leading-relaxed">
                  {t.needDesc}
                </p>
              </div>

              <div className="bg-[#FBF8F2] p-6 rounded-2xl space-y-3">
                <CheckCircle2 className="text-[#C89B3C] w-6 h-6" />
                <h4 className="ohh-serif font-bold text-[#0A2140] text-lg">
                  {t.incomeTitle}
                </h4>
                <p className="text-xs sm:text-sm text-[#5B6B7C] leading-relaxed">
                  {t.incomeDesc}
                </p>
              </div>

              <div className="bg-[#FBF8F2] p-6 rounded-2xl space-y-3">
                <CheckCircle2 className="text-[#C89B3C] w-6 h-6" />
                <h4 className="ohh-serif font-bold text-[#0A2140] text-lg">
                  {t.spouseTitle}
                </h4>
                <p className="text-xs sm:text-sm text-[#5B6B7C] leading-relaxed">
                  {t.spouseDesc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Rates Section ===== */}
      <section className="py-20 bg-[#FBF8F2]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-[#EFE8D8] space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C89B3C]">
                {t.ratesTag}
              </span>
              <h2 className="ohh-serif text-2xl sm:text-3xl font-semibold text-[#0A2140]">
                {t.ratesTitle}
              </h2>
              <p className="text-xs sm:text-sm text-[#5B6B7C]">
                {t.ratesSubtitle}{" "}
                <a
                  href="https://www.va.gov/pension/veterans-pension-rates/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0A2140] font-semibold underline inline-flex items-center gap-1 hover:text-[#C89B3C]"
                >
                  va.gov/pension/veterans-pension-rates/
                  <ExternalLink size={12} />
                </a>
              </p>
            </div>

            <div className="divide-y divide-[#F0E6D2]">
              {ratesTable.map((item, idx) => (
                <div
                  key={idx}
                  className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                >
                  <span className="text-sm font-medium text-[#0A2140]">
                    {item.label}
                  </span>
                  <span className="ohh-serif text-lg font-bold text-[#C89B3C]">
                    {item.amount}
                  </span>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-[#FBF8F2] text-xs text-[#5B6B7C] flex items-start gap-3">
              <AlertCircle
                size={16}
                className="text-[#C89B3C] shrink-0 mt-0.5"
              />
              <p>{t.ratesDisclaimer}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== How to Apply & Free Help Section ===== */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C89B3C]">
              {t.applyTag}
            </span>
            <h2 className="ohh-serif text-3xl font-semibold text-[#0A2140]">
              {t.applyTitle}
            </h2>
            <p className="text-[#5B6B7C] text-sm sm:text-base leading-relaxed">
              {t.applyDesc}
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#FBF8F2] border border-[#F0E6D2] space-y-6">
            <h3 className="ohh-serif text-xl font-semibold text-[#0A2140]">
              {t.freeHelpTitle}
            </h3>
            <ul className="space-y-4 text-sm text-[#5B6B7C]">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#C89B3C] mt-2 shrink-0" />
                <div>
                  <strong className="text-[#0A2140]">{t.tvLabel}</strong> —{" "}
                  {t.tvDesc}
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#C89B3C] mt-2 shrink-0" />
                <div>
                  <strong className="text-[#0A2140]">{t.cvsoLabel}</strong> —{" "}
                  {t.cvsoDesc}
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#C89B3C] mt-2 shrink-0" />
                <div>
                  <strong className="text-[#0A2140]">{t.vaRepLabel}</strong> —{" "}
                  {t.vaRepDesc}
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#C89B3C] mt-2 shrink-0" />
                <div>
                  <strong className="text-[#0A2140]">{t.vaDirectLabel}</strong>{" "}
                  — {t.vaDirectDesc}
                </div>
              </li>
            </ul>

            <div className="pt-4 border-t border-[#EAE3D2] text-xs sm:text-sm text-[#5B6B7C] leading-relaxed">
              {t.agencyStance}
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA & Notice Footer Box ===== */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Already receiving box */}
          <div className="bg-[#0A2140] rounded-3xl p-10 sm:p-14 flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#C89B3C]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 space-y-3 text-center lg:text-left">
              <h3 className="ohh-serif text-2xl sm:text-3xl font-semibold text-white">
                {t.alreadyTitle}
              </h3>
              <p className="text-white/70 text-sm sm:text-base max-w-xl">
                {t.alreadyDesc}
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
                <span>Request care</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Required Compliance Footer Disclaimer Block */}
          <div className="bg-[#F3ECDC] border border-[#E4D5B7] rounded-2xl p-6 sm:p-8 text-xs sm:text-sm text-[#5B6B7C] leading-relaxed space-y-2">
            <h4 className="font-bold text-[#0A2140] uppercase tracking-wider text-xs">
              {t.disclaimerHeading}
            </h4>
            <p>{t.disclaimerText}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
