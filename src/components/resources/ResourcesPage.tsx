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

/* Restyled to match Request Care layout:
   soft gray canvas #F4F4F2, pill badges with number chips, large light headings,
   rounded bento cards, flat style with 1px borders. */

const container = "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8";
const heading =
  "ohh-serif font-light leading-tight tracking-tight text-[#07162C]";
const card = "rounded-3xl border border-[#07162C]/10 bg-[#E9EAE5]";
const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#07162C]";

function Pill({ n, label }: { n?: string | number; label: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[#07162C]/10 bg-[#E9EAE5] py-1.5 pl-1.5 pr-4 text-xs font-medium text-[#07162C]">
      {n !== undefined ? (
        <span
          aria-hidden
          className="flex h-6 w-6 items-center justify-center rounded-full bg-[#07162C] text-[10px] font-semibold text-[#E4B95A]"
        >
          {n}
        </span>
      ) : (
        <span
          aria-hidden
          className="ml-2.5 h-1.5 w-1.5 rounded-full bg-[#996515]"
        />
      )}
      {label}
    </span>
  );
}

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
    <main className="min-h-screen bg-[#F4F4F2] text-base leading-relaxed text-[#07162C]/80">
      {/* ===== Header: centered ===== */}
      <section className="px-4 pb-10 pt-14 text-center sm:px-6 lg:pb-14 lg:pt-20">
        <div className="mx-auto max-w-3xl">
          <Pill label={t.badge} />
          <h1 className={`${heading} mt-6 text-4xl sm:text-5xl lg:text-6xl`}>
            {t.titleMain}{" "}
            <span className="text-[#996515]">{t.titleHighlight}</span>{" "}
            {t.titleEnd}
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base text-[#07162C]/70 sm:text-lg">
            {t.description}
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={`tel:${siteConfig.contact.phoneTel}`}
              className={`inline-flex items-center justify-center gap-2 rounded-full border border-[#07162C] bg-[#07162C] px-7 py-3.5 text-sm font-semibold text-[#E4B95A] ${focusRing}`}
            >
              <Phone size={16} />
              <span>
                {t.callBtn} {siteConfig.contact.phone}
              </span>
            </a>
            <Link
              href="/resources/rides-to-medical-appointments"
              className={`inline-flex items-center justify-center gap-2 rounded-full border border-[#07162C]/20 bg-white px-7 py-3.5 text-sm font-semibold text-[#07162C] ${focusRing}`}
            >
              <Car size={16} />
              <span>
                {lang === "es"
                  ? "Guía de transporte médico"
                  : "Medical transportation guide"}
              </span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== Featured Guide Bento ===== */}
      <section className="px-4 pb-12 sm:px-6">
        <div className={container}>
          <div
            className={`flex flex-col gap-6 p-6 sm:p-10 lg:flex-row lg:items-center lg:justify-between ${card}`}
          >
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-[#07162C] text-[#E4B95A]">
                <Car size={24} />
              </div>
              <div className="max-w-2xl">
                <Pill n="01" label={t.featuredBadge || "Featured Guide"} />
                <h3 className={`${heading} mt-3 text-2xl sm:text-3xl`}>
                  {t.featuredTitle ||
                    "How to get a ride to your medical appointments in Texas"}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#07162C]/70 sm:text-base">
                  {t.featuredDesc ||
                    "Learn about STAR+PLUS Medicaid plans, MTP, VA options, and how a family member or friend can be paid to drive you."}
                </p>
              </div>
            </div>
            <div className="flex-shrink-0">
              <Link
                href="/resources/rides-to-medical-appointments"
                className={`inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#07162C] bg-[#07162C] px-7 py-3.5 text-sm font-semibold text-[#E4B95A] lg:w-auto ${focusRing}`}
              >
                <span>{t.featuredBtn || "View Transportation Guide"}</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Quick Facts Bento Grid ===== */}
      <section className="px-4 pb-16 sm:px-6">
        <div className={container}>
          <div className="mb-5 text-center">
            <Pill n="02" label="Core Pillars" />
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: t.rightsLabel, sub: t.rightsSub, icon: ShieldCheck },
              { label: t.educLabel, sub: t.educSub, icon: Users },
              { label: t.formsLabel, sub: t.formsSub, icon: Download },
              { label: t.privacyLabel, sub: t.privacySub, icon: Lock },
            ].map((item, i) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={item.label}
                  className={`flex flex-col justify-between p-6 ${card}`}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#07162C] text-[#E4B95A]">
                    <IconComponent size={18} />
                  </div>
                  <div className="mt-6">
                    <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#996515]">
                      {item.sub}
                    </span>
                    <span className="ohh-serif mt-1 block text-lg font-medium text-[#07162C]">
                      {item.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== Knowledge Base Bento ===== */}
      <section className="px-4 pb-16 sm:px-6">
        <div className={container}>
          <div className="mb-10 text-center">
            <Pill n="03" label={t.knowledgeBadge} />
            <h2 className={`${heading} mt-4 text-3xl sm:text-4xl`}>
              {t.knowledgeTitle}
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-[#07162C]/70">
              {t.knowledgeDesc}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat) => (
              <div
                key={cat.title}
                className={`flex flex-col justify-between p-7 ${card}`}
              >
                <div>
                  <span className="inline-block rounded-full border border-[#07162C]/20 bg-white px-3 py-1 text-xs font-medium text-[#07162C]">
                    {t.resourceGuideBadge || "Resource guide"}
                  </span>
                  <h3
                    className={`${heading} mt-4 text-xl font-medium leading-snug`}
                  >
                    {cat.title}
                  </h3>
                  <ul className="mt-4 space-y-2.5">
                    {cat.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm text-[#07162C]/75 leading-relaxed"
                      >
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#996515]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 flex items-center justify-between border-t border-[#07162C]/10 pt-4 text-xs font-semibold text-[#996515]">
                  <span>{t.availableNow}</span>
                  <span>{t.freeAccess}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ Accordions ===== */}
      <section className="px-4 pb-16 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 text-center">
            <Pill n="04" label={t.faqBadge} />
            <h2 className={`${heading} mt-4 text-3xl sm:text-4xl`}>
              {t.faqTitle}
            </h2>
            <p className="mt-2 text-sm text-[#07162C]/70">{t.faqDesc}</p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-3xl border border-[#07162C]/10 bg-white"
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
                      className={`flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-[#07162C]/20 transition-transform ${
                        isOpen
                          ? "rotate-180 bg-[#07162C] text-[#E4B95A]"
                          : "text-[#07162C]"
                      }`}
                    >
                      <ChevronDown size={14} />
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-sm leading-relaxed text-[#07162C]/70 sm:text-base">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== Urgent + Legal Bento Row ===== */}
      <section className="px-4 pb-20 sm:px-6 lg:pb-24">
        <div className={`${container} grid gap-4 lg:grid-cols-2`}>
          <div className="flex flex-col justify-between rounded-3xl bg-[#07162C] p-8 text-white sm:p-10">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 px-3 py-1 text-xs font-medium text-[#E4B95A]">
                <AlertCircle size={14} />
                <span>{t.urgentBadge}</span>
              </span>
              <h3 className={`${heading} mt-5 text-2xl text-white sm:text-3xl`}>
                {t.urgentTitle}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/75 sm:text-base">
                {t.urgentDesc}
              </p>
            </div>
            <div className="mt-8 flex items-end justify-between gap-4 border-t border-white/15 pt-6">
              <span className="text-xs font-bold uppercase tracking-wider text-white/50">
                {t.emergencyProtocol}
              </span>
              <span className="ohh-serif text-3xl font-normal text-[#E4B95A]">
                {t.call911}
              </span>
            </div>
          </div>

          <div className={`flex flex-col justify-between p-8 sm:p-10 ${card}`}>
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#07162C]/15 px-3 py-1 text-xs font-medium text-[#07162C]">
                <FileText size={14} />
                <span>{t.legalBadge}</span>
              </span>
              <h3 className={`${heading} mt-5 text-2xl sm:text-3xl`}>
                {t.legalTitle}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#07162C]/70 sm:text-base">
                {t.legalDesc}
              </p>
            </div>
            <div className="mt-8 flex items-end justify-between gap-4 border-t border-[#07162C]/10 pt-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#996515]">
                {t.statusLabel}
              </span>
              <span className="ohh-serif text-xl font-medium text-[#07162C]">
                {t.servingSince}
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
