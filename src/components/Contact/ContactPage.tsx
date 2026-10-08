"use client";

import { useState } from "react";
import type { FormEvent, ReactNode } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldAlert,
  CheckCircle2,
  ChevronDown,
  ArrowRight,
} from "lucide-react";
import { useLanguage } from "@/src/context/LanguageContext";
import content from "@/src/locales/resources/contact.json";
import { siteConfig } from "@/src/constants/siteConfig";

/*
  Design notes
  - Navy hero, gold for the one action that matters on each block.
  - Flat: 1px borders, no shadows, no gradients. Focus shown with outlines.
  navy #07162C · navy-2 #0A2140 · gold #E4B95A · gold-d #996515 (small text on light)
  cream #FBF8F2 · sand #F3ECDC · line #E8DFC8 · field #CBD5E1
  body #3A4657 · muted #5B6B7C
*/

const HEADING = "ohh-serif text-[#07162C]";
const FOCUS =
  "focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[#07162C]";
const FOCUS_DARK =
  "focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[#E4B95A]";

const eyebrowLight =
  "block text-xs font-bold uppercase tracking-[0.18em] text-[#996515]";
const eyebrowDark =
  "block text-xs font-bold uppercase tracking-[0.18em] text-[#E4B95A]";

const input =
  "w-full rounded-xl border border-[#CBD5E1] bg-white px-4 py-3.5 text-base text-[#07162C] outline-none transition-colors placeholder:text-[#8A97A8] focus:border-[#07162C] focus:outline focus:outline-[3px] focus:outline-offset-0 focus:outline-[#E4B95A]/70";

function Field({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="space-y-2">
      <label
        htmlFor={id}
        className="block text-sm font-semibold text-[#07162C]"
      >
        {label}
        <span className="text-[#996515]" aria-hidden>
          {" "}
          *
        </span>
      </label>
      {children}
    </div>
  );
}

export default function ContactPage() {
  const { language } = useLanguage();
  const t = content[language as "en" | "es"] || content.en;

  const [formStatus, setFormStatus] = useState<"idle" | "success">("idle");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    inquiryType: "General Inquiry",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormStatus("success");
  };

  const quickInfo = [
    {
      icon: MapPin,
      label: t.locationLabel,
      lines: [
        siteConfig.address.street,
        `${siteConfig.address.city}, ${siteConfig.address.state} ${siteConfig.address.zip}`,
      ],
    },
    {
      icon: Phone,
      label: t.phoneLabel,
      lines: [`P: ${siteConfig.contact.phone}`, `F: ${siteConfig.contact.fax}`],
    },
    {
      icon: Mail,
      label: t.emailLabel,
      lines: [siteConfig.contact.email],
    },
    {
      icon: Clock,
      label: t.hoursLabel,
      lines: [siteConfig.hours[language as "en" | "es"] || siteConfig.hours.en],
      note:
        siteConfig.address.note[language as "en" | "es"] ||
        siteConfig.address.note.en,
    },
  ];

  return (
    <main className="bg-white text-base leading-relaxed text-[#3A4657] antialiased">
      {/* ===== Hero: text left, contact details right ===== */}
      <section className="bg-[#07162C] text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:gap-16 lg:py-24">
          <div className="lg:col-span-6">
            <div
              className={`inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-[#E4B95A]`}
            >
              <span aria-hidden className="h-2 w-2 rounded-full bg-[#E4B95A]" />
              {t.badge}
            </div>
            <h1 className="ohh-serif mt-6 text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
              {t.titleMain}{" "}
              <span className="text-[#E4B95A]">{t.titleHighlight}</span>{" "}
              {t.titleEnd}
            </h1>
            <div className="mt-6 h-1 w-16 rounded-full bg-[#E4B95A]" />
            <p className="mt-6 max-w-[52ch] text-base leading-relaxed text-white/75 sm:text-lg">
              {t.description}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={`tel:${siteConfig.contact.phoneTel}`}
                className={`inline-flex items-center justify-center gap-2.5 rounded-full bg-[#E4B95A] px-7 py-3.5 text-base font-bold text-[#07162C] transition-colors hover:bg-[#EDC878] ${FOCUS_DARK}`}
              >
                <Phone size={18} aria-hidden />
                {t.callBtn} {siteConfig.contact.phone}
              </a>
              <a
                href="#contact-form"
                className={`group inline-flex items-center justify-center gap-2.5 rounded-full border border-white/30 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:border-[#E4B95A] hover:text-[#E4B95A] ${FOCUS_DARK}`}
              >
                {t.msgBtn}
                <ArrowRight
                  size={18}
                  aria-hidden
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>

          <div className="rounded-3xl bg-[#FBF8F2] p-7 text-[#07162C] sm:p-9 lg:col-span-6">
            <ul className="divide-y divide-[#E8DFC8]">
              {quickInfo.map(({ icon: Icon, label, lines, note }) => (
                <li
                  key={label}
                  className="flex gap-4 py-5 first:pt-0 last:pb-0"
                >
                  <div
                    aria-hidden
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#07162C] text-[#E4B95A]"
                  >
                    <Icon size={20} />
                  </div>
                  <div className="min-w-0">
                    <h4 className={eyebrowLight}>{label}</h4>
                    <p className="mt-1.5 break-words font-medium leading-snug text-[#07162C]">
                      {lines.map((line, i) => (
                        <span key={line}>
                          {line}
                          {i < lines.length - 1 && <br />}
                        </span>
                      ))}
                    </p>
                    {note && (
                      <span className="mt-1.5 block text-sm leading-snug text-[#5B6B7C]">
                        {note}
                      </span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ===== Form + notices ===== */}
      <section id="contact-form" className="scroll-mt-8 bg-[#FBF8F2]">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:gap-10 lg:py-24">
          {/* Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-[#E8DFC8] bg-white p-6 sm:p-10">
              <div className="space-y-3 border-b border-[#EEF0F3] pb-7">
                <span className={eyebrowLight}>{t.formEyebrow}</span>
                <h2
                  className={`${HEADING} text-2xl font-semibold leading-tight sm:text-3xl`}
                >
                  {t.formTitle}
                </h2>
                <p className="max-w-[58ch] text-[#5B6B7C]">{t.formDesc}</p>
              </div>

              {formStatus === "success" ? (
                <div role="status" className="space-y-5 py-10 text-center">
                  <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#07162C] text-[#E4B95A]">
                    <CheckCircle2 size={32} aria-hidden />
                  </span>
                  <h3 className={`${HEADING} text-xl font-semibold`}>
                    {t.successTitle}
                  </h3>
                  <p className="mx-auto max-w-md text-[#5B6B7C]">
                    {t.successDesc}
                  </p>
                  <button
                    onClick={() => setFormStatus("idle")}
                    className={`rounded-full border border-[#07162C] px-6 py-3 font-semibold text-[#07162C] transition-colors hover:bg-[#07162C] hover:text-[#E4B95A] ${FOCUS}`}
                  >
                    {t.sendAnother}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-7 space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field id="fullName" label={t.fullName}>
                      <input
                        id="fullName"
                        type="text"
                        required
                        autoComplete="name"
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        placeholder="John Doe"
                        className={input}
                      />
                    </Field>
                    <Field id="email" label={t.emailAddr}>
                      <input
                        id="email"
                        type="email"
                        required
                        autoComplete="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="john@example.com"
                        className={input}
                      />
                    </Field>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field id="phone" label={t.phoneNum}>
                      <input
                        id="phone"
                        type="tel"
                        required
                        autoComplete="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="(972) 000-0000"
                        className={input}
                      />
                    </Field>
                    <Field id="inquiryType" label={t.inquiryType}>
                      <div className="relative">
                        <select
                          id="inquiryType"
                          value={formData.inquiryType}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              inquiryType: e.target.value,
                            })
                          }
                          className={`${input} appearance-none pr-11`}
                        >
                          <option value="General Inquiry">
                            {t.optGeneral}
                          </option>
                          <option value="Request a Consultation">
                            {t.optConsult}
                          </option>
                          <option value="Patient Referral">
                            {t.optReferral}
                          </option>
                        </select>
                        <ChevronDown
                          size={20}
                          aria-hidden
                          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#07162C]"
                        />
                      </div>
                    </Field>
                  </div>

                  <Field id="message" label={t.messageLabel}>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder={t.messagePlaceholder}
                      className={input}
                    />
                  </Field>

                  <button
                    type="submit"
                    className={`group flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-full bg-[#07162C] py-4 text-base font-bold text-[#E4B95A] transition-colors hover:bg-[#0A2140] ${FOCUS}`}
                  >
                    {t.submitReq}
                    <ArrowRight
                      size={20}
                      aria-hidden
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Notices */}
          <div className="space-y-6 lg:col-span-5">
            {/* Office notice */}
            <div className="rounded-3xl border border-[#E8DFC8] bg-white p-7 sm:p-9">
              <h3 className={`${HEADING} text-xl font-semibold leading-tight`}>
                {t.officeNoticeTitle}
              </h3>
              <div className="mt-5 space-y-5 text-[15px]">
                <p>
                  <strong className="text-[#07162C]">{siteConfig.name}</strong>
                  <br />
                  {t.dbaText}
                </p>
                <p>
                  <strong className="text-[#07162C]">{t.addrLabel}</strong>
                  <br />
                  {siteConfig.address.full}
                </p>
                <p>
                  <strong className="text-[#07162C]">
                    {t.adminHoursLabel}
                  </strong>
                  <br />
                  {t.adminHoursText}
                </p>
                <div className="rounded-2xl border border-[#E8DFC8] border-l-4 border-l-[#E4B95A] bg-[#FBF8F2] p-5">
                  <p className="font-semibold text-[#07162C]">
                    {t.apptNoticeTitle}
                  </p>
                  <p className="mt-1">
                    {t.apptNoticeText}{" "}
                    <strong className="text-[#07162C]">
                      {t.apptNoticeBold}
                    </strong>
                    {t.apptNoticeEnd}
                  </p>
                </div>
              </div>
            </div>

            {/* Service area */}
            <div className="rounded-3xl bg-[#07162C] p-7 text-white sm:p-9">
              <h3 className="ohh-serif text-xl font-semibold leading-tight text-[#E4B95A]">
                {t.serviceAreaTitle}
              </h3>
              <p className="mt-3 text-white/75">{t.serviceAreaText}</p>
              <div className="mt-6 border-t border-white/15 pt-6">
                <span className="inline-flex items-center gap-2 rounded-full bg-[#E4B95A] px-5 py-2.5 text-sm font-bold text-[#07162C]">
                  <Phone size={16} aria-hidden />
                  {t.verificationHotline} {siteConfig.contact.phone}
                </span>
              </div>
            </div>

            {/* After hours */}
            <div className="rounded-3xl border border-[#E4B95A] border-l-[6px] bg-[#F3ECDC] p-7 text-[#07162C] sm:p-9">
              <h3
                className={`${HEADING} flex items-center gap-3 text-xl font-semibold leading-tight`}
              >
                <ShieldAlert
                  size={24}
                  aria-hidden
                  className="shrink-0 text-[#996515]"
                />
                {t.afterHoursTitle}
              </h3>
              <p className="mt-3 text-[#3A4657]">{t.afterHoursText}</p>
              <p className="mt-2 text-[#3A4657]">{t.afterHoursNote}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Map / directions ===== */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
          <div className="flex flex-col gap-8 rounded-3xl bg-[#E4B95A] p-8 text-[#07162C] sm:p-12 md:flex-row md:items-center md:justify-between">
            <div className="flex gap-5">
              <div
                aria-hidden
                className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#07162C] text-[#E4B95A] sm:flex"
              >
                <MapPin size={26} />
              </div>
              <div>
                <span className="block text-xs font-bold uppercase tracking-[0.18em] text-[#07162C]/70">
                  {t.mapBadge}
                </span>
                <h3 className="ohh-serif mt-1 text-2xl font-semibold leading-tight">
                  {t.mapTitle}
                </h3>
                <p className="mt-2 text-[#07162C]/80">{t.mapAddress}</p>
              </div>
            </div>
            <a
              href="https://maps.google.com/?q=3560+Quannah+Drive,+Grand+Prairie,+TX+75052"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex shrink-0 items-center justify-center gap-2.5 rounded-full bg-[#07162C] px-7 py-3.5 text-base font-bold text-[#E4B95A] transition-colors hover:bg-[#0A2140] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[#07162C]"
            >
              {t.mapBtn}
              <ArrowRight
                size={18}
                aria-hidden
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
