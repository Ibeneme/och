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

/* Design tokens: flat surfaces, 1px borders, no shadows, no gradients.
   navy  #07162C  text, buttons, dark surfaces
   tint  #F4F6F9  quiet section background
   line  #E3E8EF  every border and divider
   muted #4A5568  secondary text
   brass #996515  small labels and check marks                        */

const PHONE = "(972) 848-9174";
const PHONE_HREF = "tel:9728489174";

const container = "mx-auto w-full max-w-6xl px-5 sm:px-8";
const focus =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#07162C]";
const btnPrimary = `inline-flex items-center justify-center gap-2 rounded-full bg-[#07162C] px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#143A66] ${focus}`;
const btnOutline = `inline-flex items-center justify-center gap-2 rounded-full border border-[#07162C] px-7 py-3.5 text-sm font-semibold text-[#07162C] transition-colors hover:bg-[#07162C] hover:text-white ${focus}`;

export default function PediatricServicesComp() {
  const { language } = useLanguage();
  const t = content[language as "en" | "es"] || content.en;

  const payment = [
    { title: t.starkidsTitle, desc: t.starkidsDesc },
    { title: t.starchipTitle, desc: t.starchipDesc },
    { title: t.privateTitle, desc: t.privateDesc },
  ];

  return (
    <main className="ohh-sans min-h-screen bg-white text-[#07162C]">
      {/* ===== Hero ===== */}
      <section>
        <div
          className={`${container} grid items-center gap-12 py-16 lg:grid-cols-12 lg:gap-16 lg:py-24`}
        >
          <div className="space-y-7 lg:col-span-7">
            <p className="text-sm font-semibold text-[#996515]">{t.badge}</p>
            <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              {t.titleMain} {t.titleHighlight}
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-[#4A5568]">
              {t.description}
            </p>
            <div className="flex flex-wrap gap-3 pt-1">
              <Link href="/contact" className={btnPrimary}>
                <HeartHandshake size={17} aria-hidden />
                {t.contactBtn}
                <ArrowRight size={16} aria-hidden />
              </Link>
              <a href={PHONE_HREF} className={btnOutline}>
                <Phone size={16} aria-hidden />
                {t.callUs}
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <img
              src="/images/paediatric-care.jpg"
              alt="Pediatric home care"
              className="aspect-[4/3] w-full rounded-2xl border border-[#E3E8EF] object-cover"
            />
          </div>
        </div>
      </section>

      {/* ===== Coverage strip ===== */}
      <section className="border-y border-[#E3E8EF] bg-[#F4F6F9]">
        <div
          className={`${container} flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between`}
        >
          <div className="flex max-w-2xl items-start gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#996515] border border-[#E3E8EF]">
              <ShieldCheck size={21} aria-hidden />
            </span>
            <div>
              <h2 className="text-lg font-semibold">{t.sidebarTitle}</h2>
              <p className="mt-1 text-sm leading-relaxed text-[#4A5568]">
                {t.sidebarDesc}
              </p>
            </div>
          </div>
          <ul className="flex flex-wrap gap-2 md:justify-end">
            {["STAR Kids", "STAR", "CHIP", "HHSC Licensed"].map((b) => (
              <li
                key={b}
                className="rounded-full border border-[#07162C]/20 bg-white px-4 py-1.5 text-sm font-medium"
              >
                {b}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== Respite care (leads per requirements) ===== */}
      <section className="border-b border-[#E3E8EF]">
        <div
          className={`${container} grid gap-10 py-16 lg:grid-cols-12 lg:gap-16 lg:py-24`}
        >
          <div className="space-y-3 lg:col-span-5">
            <p className="text-sm font-semibold text-[#996515]">
              {t.respiteTag}
            </p>
            <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              {t.respiteTitle}
            </h2>
          </div>
          <div className="space-y-5 lg:col-span-7">
            <p className="text-xl font-medium leading-snug tracking-tight">
              {t.respiteDesc}
            </p>
            <p className="text-lg leading-relaxed text-[#4A5568]">
              {t.respiteSubDesc}
            </p>
          </div>
        </div>
      </section>

      {/* ===== Other pediatric support ===== */}
      <section className="border-b border-[#E3E8EF]">
        <div
          className={`${container} grid gap-10 py-16 lg:grid-cols-12 lg:gap-16 lg:py-24`}
        >
          <div className="space-y-3 lg:col-span-4">
            <p className="text-sm font-semibold text-[#996515]">
              {t.supportTag}
            </p>
            <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              {t.supportTitle}
            </h2>
          </div>
          <ul className="grid gap-x-10 border-t border-[#E3E8EF] sm:grid-cols-2 lg:col-span-8">
            {t.supportItems.map((item: string, idx: number) => (
              <li
                key={idx}
                className="flex items-start gap-3 border-b border-[#E3E8EF] py-4 text-[15px] leading-relaxed"
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
      </section>

      {/* ===== How pediatric care is paid for ===== */}
      <section className="border-b border-[#E3E8EF] bg-[#F4F6F9]">
        <div className={`${container} space-y-12 py-16 lg:py-24`}>
          <div className="max-w-3xl space-y-3">
            <p className="text-sm font-semibold text-[#996515]">
              {t.paymentTag}
            </p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              {t.paymentTitle}
            </h2>
          </div>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-[#E3E8EF] bg-[#E3E8EF] md:grid-cols-3">
            {payment.map((p) => (
              <div key={p.title} className="space-y-3 bg-white p-7 sm:p-9">
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="text-[15px] leading-relaxed text-[#2C3744]">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Family member as paid caregiver ===== */}
      <section className="border-b border-[#E3E8EF]">
        <div className={`${container} py-16 lg:py-24`}>
          <div className="grid gap-6 rounded-2xl border border-[#E3E8EF] p-8 sm:p-12 lg:grid-cols-12 lg:gap-12">
            <h3 className="text-2xl font-semibold leading-tight tracking-tight sm:text-3xl lg:col-span-5">
              {t.familyPaidTitle}
            </h3>
            <p className="leading-relaxed text-[#4A5568] lg:col-span-7">
              {t.familyPaidDesc}
            </p>
          </div>
        </div>
      </section>

      {/* ===== Talk to us ===== */}
      <section className="bg-[#F4F6F9]">
        <div
          className={`${container} flex flex-col items-start justify-between gap-8 py-16 md:flex-row md:items-center lg:py-20`}
        >
          <div className="max-w-2xl space-y-3">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              {t.talkTitle}
            </h2>
            <p className="text-lg leading-relaxed text-[#4A5568]">
              {t.talkDesc}{" "}
              <a
                href={PHONE_HREF}
                className="font-semibold text-[#07162C] underline underline-offset-4"
              >
                {PHONE}
              </a>
              . {t.talkSubDesc}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className={btnPrimary}>
              {t.requestCareBtn}
            </Link>
            <a href={PHONE_HREF} className={btnOutline}>
              {t.callIntakeBtn}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
