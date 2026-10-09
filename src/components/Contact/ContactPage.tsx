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

/* Restyled to match Request Care layout:
   soft gray page #F4F4F2, pill labels with a number chip, large light headings,
   rounded bento cards, flat style with 1px borders. */

const FOCUS =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#07162C]";
const FOCUS_GOLD =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E4B95A]";
const HEADING =
  "ohh-serif font-light leading-tight tracking-tight text-[#07162C]";
const card = "rounded-3xl border border-[#07162C]/10 bg-[#E9EAE5]";
const input =
  "w-full rounded-xl border border-[#07162C]/20 bg-[#F4F4F2] px-4 py-3.5 text-base text-[#07162C] outline-none transition-colors placeholder:text-[#07162C]/45 focus:border-[#07162C] focus:outline focus:outline-2 focus:outline-offset-0 focus:outline-[#E4B95A]";

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
    <main className="min-h-screen bg-[#F4F4F2] text-base leading-relaxed text-[#07162C]/80 antialiased">
      {/* ===== Header: centered ===== */}
      <section className="px-4 pb-10 pt-14 text-center sm:px-6 lg:pb-14 lg:pt-20">
        <div className="mx-auto max-w-3xl">
          <Pill label={t.badge} />
          <h1 className={`${HEADING} mt-6 text-4xl sm:text-5xl lg:text-6xl`}>
            {t.titleMain}{" "}
            <span className="text-[#996515]">{t.titleHighlight}</span>{" "}
            {t.titleEnd}
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base text-[#07162C]/70 sm:text-lg">
            {t.description}
          </p>
        </div>
      </section>

      {/* ===== Quick Info Bento Grid ===== */}
      <section className="px-4 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-5 text-center">
            <Pill n="01" label="Office Details" />
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {quickInfo.map(({ icon: Icon, label, lines, note }, i) => (
              <div
                key={label}
                className="flex flex-col justify-between rounded-3xl border border-[#07162C]/10 bg-[#E9EAE5] p-6"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#07162C] text-[#E4B95A]">
                  <Icon size={18} aria-hidden />
                </div>
                <div className="mt-6">
                  <span className="block text-xs font-bold uppercase tracking-[0.18em] text-[#996515]">
                    {label}
                  </span>
                  <p className="mt-2 break-words font-medium leading-snug text-[#07162C]">
                    {lines.map((line, idx) => (
                      <span key={line}>
                        {line}
                        {idx < lines.length - 1 && <br />}
                      </span>
                    ))}
                  </p>
                  {note && (
                    <span className="mt-2 block text-xs leading-snug text-[#07162C]/60">
                      {note}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Form + Notices ===== */}
      <section
        id="contact-form"
        className="px-4 pb-16 pt-12 sm:px-6 lg:pb-24 lg:pt-16"
      >
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Form Box */}
          <div className="rounded-3xl border border-[#07162C]/10 bg-white p-6 sm:p-10 lg:col-span-7">
            <div className="space-y-2 border-b border-[#07162C]/15 pb-6">
              <Pill n="02" label={t.formEyebrow} />
              <h2 className={`${HEADING} text-2xl sm:text-3xl`}>
                {t.formTitle}
              </h2>
              <p className="text-sm text-[#07162C]/70">{t.formDesc}</p>
            </div>

            {formStatus === "success" ? (
              <div role="status" className="space-y-5 py-10 text-center">
                <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#07162C] text-[#E4B95A]">
                  <CheckCircle2 size={32} aria-hidden />
                </span>
                <h3 className={`${HEADING} text-xl font-semibold`}>
                  {t.successTitle}
                </h3>
                <p className="mx-auto max-w-md text-sm text-[#07162C]/70">
                  {t.successDesc}
                </p>
                <button
                  onClick={() => setFormStatus("idle")}
                  className={`rounded-full border border-[#07162C] px-6 py-3 text-sm font-semibold text-[#07162C] transition-colors hover:bg-[#07162C] hover:text-[#E4B95A] ${FOCUS}`}
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
                        <option value="General Inquiry">{t.optGeneral}</option>
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
                  className={`group flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-full border border-[#07162C] bg-[#07162C] py-4 text-base font-semibold text-[#E4B95A] transition-colors hover:bg-[#0A2140] ${FOCUS}`}
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

          {/* Side Notices Stack */}
          <div className="space-y-6 lg:col-span-5">
            {/* Office notice */}
            <div className={`p-6 sm:p-8 ${card}`}>
              <h3 className={`${HEADING} text-xl font-medium leading-tight`}>
                {t.officeNoticeTitle}
              </h3>
              <div className="mt-4 space-y-4 text-sm text-[#07162C]/75">
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
                <div className="rounded-2xl border border-[#07162C]/10 bg-white p-4">
                  <p className="font-semibold text-[#07162C]">
                    {t.apptNoticeTitle}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed">
                    {t.apptNoticeText}{" "}
                    <strong className="text-[#07162C]">
                      {t.apptNoticeBold}
                    </strong>
                    {t.apptNoticeEnd}
                  </p>
                </div>
              </div>
            </div>

            {/* Service area banner (Navy) */}
            <div className="rounded-3xl bg-[#07162C] p-6 text-white sm:p-8">
              <h3 className="ohh-serif text-xl font-medium leading-tight text-[#E4B95A]">
                {t.serviceAreaTitle}
              </h3>
              <p className="mt-2 text-sm text-white/75">{t.serviceAreaText}</p>
              <div className="mt-5 border-t border-white/15 pt-5">
                <span className="inline-flex items-center gap-2 rounded-full bg-[#E4B95A] px-4 py-2 text-xs font-bold text-[#07162C]">
                  <Phone size={14} aria-hidden />
                  {t.verificationHotline} {siteConfig.contact.phone}
                </span>
              </div>
            </div>

            {/* After hours banner */}
            <div
              className={`p-6 sm:p-8 ${card} border-l-[6px] border-l-[#E4B95A]`}
            >
              <h3
                className={`${HEADING} flex items-center gap-2.5 text-lg font-medium leading-tight`}
              >
                <ShieldAlert
                  size={20}
                  aria-hidden
                  className="shrink-0 text-[#996515]"
                />
                {t.afterHoursTitle}
              </h3>
              <p className="mt-2.5 text-xs text-[#07162C]/75 leading-relaxed">
                {t.afterHoursText}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Map / directions banner card ===== */}
      <section className="px-4 pb-16 sm:px-6 lg:pb-24">
        <div className="mx-auto max-w-6xl rounded-3xl border border-[#07162C]/10 bg-[#E9EAE5] p-6 sm:p-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex gap-4 items-center">
            <div
              aria-hidden
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#07162C] text-[#E4B95A]"
            >
              <MapPin size={22} />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#996515]">
                {t.mapBadge}
              </span>
              <h3
                className={`${HEADING} mt-1 text-2xl font-medium leading-tight`}
              >
                {t.mapTitle}
              </h3>
              <p className="mt-1 text-sm text-[#07162C]/70">{t.mapAddress}</p>
            </div>
          </div>
          <a
            href="https://maps.google.com/?q=3560+Quannah+Drive,+Grand+Prairie,+TX+75052"
            target="_blank"
            rel="noopener noreferrer"
            className={`group inline-flex shrink-0 items-center justify-center gap-2.5 rounded-full border border-[#07162C] bg-[#07162C] px-7 py-3.5 text-sm font-semibold text-[#E4B95A] transition-colors hover:bg-[#0A2140] ${FOCUS_GOLD}`}
          >
            {t.mapBtn}
            <ArrowRight
              size={16}
              aria-hidden
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </div>
      </section>
    </main>
  );
}
