"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Phone,
  ArrowRight,
  ShieldCheck,
  FileText,
  Download,
  Lock,
  Users,
  AlertCircle,
  HelpCircle,
  ChevronDown,
  Car,
} from "lucide-react";
import { useLanguage } from "@/src/context/LanguageContext";
import content from "@/src/locales/resources/resources.json";
import { siteConfig } from "@/src/constants/siteConfig";

/* Brand: navy #07162C + gold #E4B95A / #C89B3C. Flat design: borders, no shadows. */
const container = "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8";
const eyebrow =
  "inline-block text-xs font-bold uppercase tracking-[0.18em] text-[#C89B3C]";
const sectionTitle =
  "ohh-serif mt-3 text-3xl font-semibold leading-tight tracking-tight text-[#07162C] sm:text-4xl";
const sectionDesc = "mt-4 max-w-2xl text-base leading-relaxed text-[#5B6B7C]";
const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E4B95A]";

export default function ResourcesPage() {
  const { language } = useLanguage();
  const lang = language === "es" ? "es" : "en";
  const t = content[lang] || content.en;

  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    { question: t.faq1Q, answer: t.faq1A },
    { question: t.faq2Q, answer: t.faq2A },
    { question: t.faq3Q, answer: t.faq3A },
    { question: t.faq4Q, answer: t.faq4A },
    { question: t.faq5Q, answer: t.faq5A },
    { question: t.faq6Q, answer: t.faq6A },
  ];

  const categories = [
    {
      title: t.cat1Title,
      items: [t.cat1Item1, t.cat1Item2, t.cat1Item3],
    },
    {
      title: t.cat2Title,
      items: [t.cat2Item1, t.cat2Item2, t.cat2Item3],
    },
    {
      title: t.cat3Title,
      items: [t.cat3Item1, t.cat3Item2, t.cat3Item3],
    },
    {
      title: t.cat4Title,
      items: [t.cat4Item1, t.cat4Item2, t.cat4Item3],
    },
    {
      title: t.cat5Title,
      items: [t.cat5Item1, t.cat5Item2, t.cat5Item3],
    },
    {
      title: t.cat6Title,
      items: [t.cat6Item1, t.cat6Item2, t.cat6Item3],
    },
  ];

  return (
    <main className="min-h-screen bg-white text-[#3A4657]">
      {/* ===== Hero ===== */}
      <section className="relative overflow-hidden bg-[#07162C] text-white">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#0A2140]/60 via-transparent to-transparent" />
        <div className={`${container} relative py-20 lg:py-28`}>
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-[#E4B95A]">
                <span className="h-2 w-2 rounded-full bg-[#E4B95A]" />
                {t.badge}
              </div>

              <h1 className="ohh-serif text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
                {t.titleMain}{" "}
                <span className="text-[#E4B95A]">{t.titleHighlight}</span>{" "}
                {t.titleEnd}
              </h1>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
                {t.description}
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <a
                  href={`tel:${siteConfig.contact.phoneTel}`}
                  className={`inline-flex items-center justify-center gap-2 rounded-full bg-[#E4B95A] px-7 py-3.5 font-bold text-[#07162C] transition-colors hover:bg-[#EDC878] ${focusRing}`}
                >
                  <Phone size={16} />
                  <span>
                    {t.callBtn} {siteConfig.contact.phone}
                  </span>
                </a>
                <Link
                  href="/resources/rides-to-medical-appointments"
                  className={`inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3.5 font-semibold text-white transition-colors hover:border-[#E4B95A] hover:text-[#E4B95A] ${focusRing}`}
                >
                  <Car size={16} />
                  <span>
                    {lang === "es"
                      ? "Guía de transporte médico"
                      : "Medical transportation guide"}
                  </span>
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/contact"
                  className={`group inline-flex items-center justify-center gap-2 px-3 py-3.5 font-semibold text-white/80 transition-colors hover:text-[#E4B95A] ${focusRing}`}
                >
                  <span>{t.contactTeam}</span>
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-7 sm:p-9 lg:col-span-5">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-[#E4B95A]/15 text-[#E4B95A]">
                  <HelpCircle size={20} />
                </div>
                <div>
                  <h3 className="ohh-serif text-xl font-semibold text-white">
                    {t.navSupport}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/70">
                    {t.guidance}
                  </p>
                </div>
              </div>

              <ul className="mt-7 space-y-3.5 border-t border-white/10 pt-7">
                {[t.check1, t.check2, t.check3].map((check, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#E4B95A] text-xs font-bold text-[#07162C]">
                      ✓
                    </div>
                    <span className="text-sm font-medium leading-relaxed text-white/85">
                      {check}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Featured Guide ===== */}
      <section className="bg-[#FBF8F2] py-12 lg:py-16">
        <div className={container}>
          <div className="flex flex-col gap-8 rounded-3xl border border-[#E8DFC8] bg-white p-7 sm:p-9 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
              <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-[#07162C] text-[#E4B95A]">
                <Car size={28} />
              </div>
              <div className="max-w-2xl">
                <span className={eyebrow}>
                  {t.featuredBadge || "Featured Guide"}
                </span>
                <h3 className="ohh-serif mt-2 text-2xl font-semibold leading-snug text-[#07162C]">
                  {t.featuredTitle ||
                    "How to get a ride to your medical appointments in Texas"}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5B6B7C] sm:text-base">
                  {t.featuredDesc ||
                    "Learn about STAR+PLUS Medicaid plans, MTP, VA options, and how a family member or friend can be paid to drive you."}
                </p>
              </div>
            </div>
            <div className="flex-shrink-0">
              <Link
                href="/resources/rides-to-medical-appointments"
                className={`group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#07162C] px-7 py-3.5 font-bold text-[#E4B95A] transition-colors hover:bg-[#0A2140] lg:w-auto ${focusRing}`}
              >
                <span>{t.featuredBtn || "View Transportation Guide"}</span>
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Quick Facts Strip ===== */}
      <section className="border-y border-[#EEF0F3] bg-white py-10">
        <div className={container}>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {[
              { label: t.rightsLabel, sub: t.rightsSub, icon: ShieldCheck },
              { label: t.educLabel, sub: t.educSub, icon: Users },
              { label: t.formsLabel, sub: t.formsSub, icon: Download },
              { label: t.privacyLabel, sub: t.privacySub, icon: Lock },
            ].map((item) => {
              const IconComponent = item.icon;
              return (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-[#F3ECDC] text-[#07162C]">
                    <IconComponent size={20} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#C89B3C]">
                      {item.sub}
                    </span>
                    <span className="font-semibold leading-snug text-[#07162C]">
                      {item.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== Knowledge Base ===== */}
      <section className="bg-white py-20 lg:py-28">
        <div className={container}>
          <div className="max-w-3xl">
            <span className={eyebrow}>{t.knowledgeBadge}</span>
            <h2 className={sectionTitle}>{t.knowledgeTitle}</h2>
            <p className={sectionDesc}>{t.knowledgeDesc}</p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat) => (
              <div
                key={cat.title}
                className="flex flex-col justify-between rounded-3xl border border-[#E8DFC8] bg-[#FBF8F2] p-7 transition-colors hover:border-[#C89B3C]"
              >
                <div>
                  <span className="inline-block rounded-full bg-[#07162C] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#E4B95A]">
                    {t.resourceGuideBadge || "Resource guide"}
                  </span>
                  <h3 className="ohh-serif mt-4 text-xl font-semibold leading-snug text-[#07162C]">
                    {cat.title}
                  </h3>
                  <ul className="mt-5 space-y-3">
                    {cat.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm leading-relaxed text-[#3A4657]"
                      >
                        <span className="mt-0.5 font-bold text-[#C89B3C]">
                          •
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-7 flex items-center justify-between border-t border-[#E8DFC8] pt-5 text-xs font-bold uppercase tracking-wider">
                  <span className="text-[#07162C]">{t.availableNow}</span>
                  <span className="text-[#C89B3C]">{t.freeAccess}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="bg-[#FBF8F2] py-20 lg:py-28">
        <div className={container}>
          <div className="mx-auto max-w-3xl text-center">
            <span className={eyebrow}>{t.faqBadge}</span>
            <h2 className={sectionTitle}>{t.faqTitle}</h2>
            <p className={`${sectionDesc} mx-auto`}>{t.faqDesc}</p>
          </div>

          <div className="mx-auto mt-12 max-w-3xl space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={faq.question}
                  className={`overflow-hidden rounded-2xl border bg-white transition-colors ${
                    isOpen ? "border-[#C89B3C]" : "border-[#E8DFC8]"
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className={`flex w-full items-center justify-between gap-4 px-6 py-5 text-left ${focusRing}`}
                  >
                    <span className="font-semibold leading-snug text-[#07162C]">
                      {faq.question}
                    </span>
                    <span
                      className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                        isOpen
                          ? "rotate-180 bg-[#07162C] text-[#E4B95A]"
                          : "bg-[#F3ECDC] text-[#07162C]"
                      }`}
                    >
                      <ChevronDown size={16} />
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-sm leading-relaxed text-[#5B6B7C] sm:text-base">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== Urgent + Legal ===== */}
      <section className="bg-white py-20 lg:py-24">
        <div className={container}>
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Urgent */}
            <div className="flex flex-col justify-between rounded-3xl bg-[#07162C] p-8 text-white sm:p-10">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-[#E4B95A] px-3 py-1.5 text-[11px] font-black uppercase tracking-wider text-[#07162C]">
                  <AlertCircle size={14} />
                  <span>{t.urgentBadge}</span>
                </div>
                <h3 className="ohh-serif mt-5 text-2xl font-semibold leading-snug sm:text-3xl">
                  {t.urgentTitle}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/75 sm:text-base">
                  {t.urgentDesc}
                </p>
              </div>
              <div className="mt-8 flex items-end justify-between gap-4 border-t border-white/10 pt-6">
                <span className="text-xs font-bold uppercase tracking-wider text-white/50">
                  {t.emergencyProtocol}
                </span>
                <span className="ohh-serif text-3xl font-semibold text-[#E4B95A]">
                  {t.call911}
                </span>
              </div>
            </div>

            {/* Legal */}
            <div className="flex flex-col justify-between rounded-3xl border border-[#E8DFC8] bg-[#FBF8F2] p-8 sm:p-10">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-[#07162C] px-3 py-1.5 text-[11px] font-black uppercase tracking-wider text-[#E4B95A]">
                  <FileText size={14} />
                  <span>{t.legalBadge}</span>
                </div>
                <h3 className="ohh-serif mt-5 text-2xl font-semibold leading-snug text-[#07162C] sm:text-3xl">
                  {t.legalTitle}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#5B6B7C] sm:text-base">
                  {t.legalDesc}
                </p>
              </div>
              <div className="mt-8 flex items-end justify-between gap-4 border-t border-[#E8DFC8] pt-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[#C89B3C]">
                  {t.statusLabel}
                </span>
                <span className="ohh-serif text-xl font-semibold text-[#07162C]">
                  {t.servingSince}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
