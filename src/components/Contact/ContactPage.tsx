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
  Design notes (shared with the insurance and request-care pages)
  - Spruce hero, marigold for the one action that matters on each block.
  - Contact details sit in one white strip that overlaps the hero.
  - Flat, no images, focus shown with outlines.
  spruce #0E3F3F · teal #0E5A5A · mist #E4EFED · line #D3DEDB · ink #17302F
  muted #4A5F5D · marigold #F2B544 · amber #FFF1CF
*/

const HEADING = "text-[#17302F]";
const FOCUS =
  "focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[#0E5A5A]";
const FOCUS_DARK =
  "focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[#F2B544]";

const input =
  "w-full rounded-xl border border-[#9FB5B1] bg-white px-4 py-3.5 text-base text-[#17302F] outline-none transition-colors placeholder:text-[#64807C] focus:border-[#0E5A5A] focus:outline focus:outline-[3px] focus:outline-offset-0 focus:outline-[#F2B544]/70";

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
      <label htmlFor={id} className="block font-medium text-[#17302F]">
        {label}
        <span className="text-[#8A5A00]" aria-hidden>
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
    <main
      className={`bg-[#F6F8F7] text-base leading-relaxed text-[#2B4240] antialiased`}
    >
      {/* ===== Hero ===== */}
      <section className="bg-[#0E3F3F] text-white">
        <div className="mx-auto max-w-6xl px-5 pb-24 pt-14 sm:px-8 lg:pb-28 lg:pt-20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2.5 text-[#F2B544]">
              <span
                aria-hidden
                className="h-2.5 w-2.5 rounded-full bg-[#F2B544]"
              />
              {t.badge}
            </div>
            <h1 className="mt-4 text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">
              {t.titleMain} {t.titleHighlight} {t.titleEnd}
            </h1>
            <p className="mt-6 max-w-[58ch] text-base leading-relaxed text-[#D7E8E5]">
              {t.description}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={`tel:${siteConfig.contact.phoneTel}`}
                className={`inline-flex items-center gap-2.5 rounded-full bg-[#F2B544] px-7 py-4 text-base font-semibold text-[#17302F] transition-colors hover:bg-[#F7C766] ${FOCUS_DARK}`}
              >
                <Phone size={20} aria-hidden />
                {t.callBtn} {siteConfig.contact.phone}
              </a>
              <a
                href="#contact-form"
                className={`inline-flex items-center gap-2.5 rounded-full border-2 border-white/40 px-7 py-4 text-base font-semibold text-white transition-colors hover:border-white hover:bg-white/10 ${FOCUS_DARK}`}
              >
                {t.msgBtn}
                <ArrowRight size={18} aria-hidden />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Quick info strip (overlaps hero) ===== */}
      <section className="relative z-10 -mt-12">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid gap-8 rounded-[2rem] border border-[#D3DEDB] bg-white p-7 sm:grid-cols-2 sm:p-9 lg:grid-cols-4 lg:gap-6">
            {quickInfo.map(({ icon: Icon, label, lines, note }) => (
              <div key={label} className="flex gap-4">
                <div
                  aria-hidden
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#E4EFED] text-[#0E5A5A]"
                >
                  <Icon size={20} />
                </div>
                <div className="min-w-0">
                  <h4
                    className={`${HEADING} text-base font-semibold leading-tight`}
                  >
                    {label}
                  </h4>
                  <p className="mt-1 break-words text-[#2B4240]">
                    {lines.map((line, i) => (
                      <span key={line}>
                        {line}
                        {i < lines.length - 1 && <br />}
                      </span>
                    ))}
                  </p>
                  {note && (
                    <span className="mt-1 block text-base leading-snug text-[#4A5F5D]">
                      {note}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Form + notices ===== */}
      <section id="contact-form" className="scroll-mt-8">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 sm:px-8 lg:grid-cols-12 lg:gap-10 lg:py-20">
          {/* Form */}
          <div className="lg:col-span-7">
            <div className="rounded-[2rem] border border-[#D3DEDB] bg-white p-6 sm:p-10">
              <div className="space-y-3">
                <span className="block text-[#0E5A5A]">{t.formEyebrow}</span>
                <h2
                  className={`${HEADING} text-2xl font-semibold leading-tight sm:text-3xl`}
                >
                  {t.formTitle}
                </h2>
                <p className="max-w-[58ch]">{t.formDesc}</p>
              </div>

              {formStatus === "success" ? (
                <div role="status" className="space-y-5 py-10 text-center">
                  <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#E4EFED] text-[#0E5A5A]">
                    <CheckCircle2 size={32} aria-hidden />
                  </span>
                  <h3 className={`${HEADING} text-xl font-semibold`}>
                    {t.successTitle}
                  </h3>
                  <p className="mx-auto max-w-md">{t.successDesc}</p>
                  <button
                    onClick={() => setFormStatus("idle")}
                    className={`rounded-full border-2 border-[#0E5A5A] px-6 py-3 font-semibold text-[#0E5A5A] transition-colors hover:bg-[#E4EFED] ${FOCUS}`}
                  >
                    {t.sendAnother}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
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
                          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#0E5A5A]"
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
                    className={`flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-full bg-[#F2B544] py-4 text-base font-semibold text-[#17302F] transition-colors hover:bg-[#F7C766] ${FOCUS}`}
                  >
                    {t.submitReq}
                    <ArrowRight size={20} aria-hidden />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Notices */}
          <div className="space-y-6 lg:col-span-5">
            {/* Office notice */}
            <div className="rounded-[2rem] bg-[#E4EFED] p-7 sm:p-9">
              <h3 className={`${HEADING} text-xl font-semibold leading-tight`}>
                {t.officeNoticeTitle}
              </h3>
              <div className="mt-5 space-y-5">
                <p>
                  <strong className="text-[#17302F]">{siteConfig.name}</strong>
                  <br />
                  {t.dbaText}
                </p>
                <p>
                  <strong className="text-[#17302F]">{t.addrLabel}</strong>
                  <br />
                  {siteConfig.address.full}
                </p>
                <p>
                  <strong className="text-[#17302F]">
                    {t.adminHoursLabel}
                  </strong>
                  <br />
                  {t.adminHoursText}
                </p>
                <div className="rounded-2xl border-l-4 border-[#0E5A5A] bg-white p-5">
                  <p className=" text-[#17302F]">{t.apptNoticeTitle}</p>
                  <p className="mt-1">
                    {t.apptNoticeText}{" "}
                    <strong className="text-[#17302F]">
                      {t.apptNoticeBold}
                    </strong>
                    {t.apptNoticeEnd}
                  </p>
                </div>
              </div>
            </div>

            {/* Service area */}
            <div className="rounded-[2rem] border border-[#D3DEDB] bg-white p-7 sm:p-9">
              <h3 className={`${HEADING} text-xl font-semibold leading-tight`}>
                {t.serviceAreaTitle}
              </h3>
              <p className="mt-3">{t.serviceAreaText}</p>
              <div className="mt-5">
                <span className="inline-flex items-center gap-2 rounded-full bg-[#0E3F3F] px-5 py-2.5 text-white">
                  <Phone size={16} aria-hidden className="text-[#F2B544]" />
                  {t.verificationHotline} {siteConfig.contact.phone}
                </span>
              </div>
            </div>

            {/* After hours */}
            <div className="rounded-[2rem] border-l-4 border-[#D9972B] bg-[#FFF1CF] p-7 text-[#4A3100] sm:p-9">
              <h3
                className={`${HEADING} flex items-center gap-3 text-xl font-semibold leading-tight`}
              >
                <ShieldAlert
                  size={24}
                  aria-hidden
                  className="shrink-0 text-[#8A5A00]"
                />
                {t.afterHoursTitle}
              </h3>
              <p className="mt-3">{t.afterHoursText}</p>
              <p className="mt-2">{t.afterHoursNote}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Map / directions ===== */}
      <section>
        <div className="mx-auto max-w-6xl px-5 pb-16 sm:px-8 lg:pb-24">
          <div className="flex flex-col gap-8 rounded-[2rem] bg-[#0E3F3F] p-8 text-white sm:p-12 md:flex-row md:items-center md:justify-between">
            <div className="flex gap-5">
              <div
                aria-hidden
                className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#F2B544] text-[#17302F] sm:flex"
              >
                <MapPin size={26} />
              </div>
              <div>
                <span className="block text-[#F2B544]">{t.mapBadge}</span>
                <h3 className="mt-1 text-2xl font-semibold leading-tight">
                  {t.mapTitle}
                </h3>
                <p className="mt-2 text-[#D7E8E5]">{t.mapAddress}</p>
              </div>
            </div>
            <a
              href="https://maps.google.com/?q=3560+Quannah+Drive,+Grand+Prairie,+TX+75052"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex shrink-0 items-center justify-center gap-2.5 rounded-full bg-[#F2B544] px-7 py-4 text-base font-semibold text-[#17302F] transition-colors hover:bg-[#F7C766] ${FOCUS_DARK}`}
            >
              {t.mapBtn}
              <ArrowRight size={18} aria-hidden />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
