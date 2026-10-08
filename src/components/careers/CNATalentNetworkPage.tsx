"use client";

import { useState } from "react";
import type { ChangeEvent, FormEvent, ReactNode } from "react";
import Link from "next/link";
import {
  Upload,
  CheckCircle2,
  AlertCircle,
  FileText,
  ShieldCheck,
  Send,
  ArrowUpRight,
  Home,
  Phone,
  Mail,
  MapPin,
  Award,
  CalendarDays,
  Clock,
  HeartPulse,
  Car,
  Languages as LanguagesIcon,
  Users,
  CalendarClock,
} from "lucide-react";
import { useLanguage } from "@/src/context/LanguageContext";
import content from "@/src/locales/resources/cna-application.json";
import { siteConfig } from "@/src/constants/siteConfig";

/* Clean layout: soft gray page, pill labels with a number chip, large light
   headings, rounded bento cards. Navy #101B33 + gold #C79A3B.
   #8A6423 = gold for small text on light surfaces (contrast).
   Flat: 1px borders only, no shadows, no hover effects, no transitions.
   Focus rings are kept for keyboard users. */

const container = "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8";
const focusNavy =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#101B33]";
const focusGold =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C79A3B]";
const input = `w-full rounded-xl border border-[#101B33]/15 bg-[#F4F4F2] px-4 py-3 text-sm text-[#101B33] focus:border-[#C79A3B] focus:outline-none focus:ring-1 focus:ring-[#C79A3B]`;
const btnNavy = `inline-flex items-center justify-center gap-2 rounded-full border border-[#101B33] bg-[#101B33] px-7 py-3 text-sm font-semibold text-white ${focusGold}`;
const btnOutline = `inline-flex items-center justify-center gap-2 rounded-full border border-[#101B33]/40 px-7 py-3 text-sm font-semibold text-[#101B33] ${focusNavy}`;
const heading =
  "font-display text-3xl font-light leading-tight tracking-tight text-[#101B33] sm:text-4xl lg:text-5xl";

function Pill({ n, label }: { n?: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[#101B33]/10 bg-[#E9EAE5] py-1.5 pl-1.5 pr-4 text-xs font-medium text-[#101B33]">
      {n && (
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#101B33] text-[10px] font-semibold text-[#C79A3B]">
          {n}
        </span>
      )}
      {!n && <span className="ml-2" />}
      {label}
    </span>
  );
}

function SectionHead({
  n,
  label,
  title,
  desc,
}: {
  n: string;
  label: string;
  title: string;
  desc?: string;
}) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <Pill n={n} label={label} />
      <h2 className={`${heading} mt-5`}>{title}</h2>
      {desc && (
        <p className="mt-4 text-base leading-relaxed text-[#101B33]/65">
          {desc}
        </p>
      )}
    </div>
  );
}

export default function CNATalentNetworkPage() {
  const { language } = useLanguage();
  const t = content[language as "en" | "es"] || content.en;

  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    serviceAreas: "",
    licenseNumber: "",
    licenseExpiration: "",
    yearsExperience: "",
    homeHealthExperience: "No",
    availability: "",
    shiftPreferences: "",
    transportation: "Yes",
    languages: "",
    references: "",
    consent: false,
  });

  const set =
    (key: keyof typeof formData) =>
    (
      e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) =>
      setFormData({ ...formData, [key]: e.target.value });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.consent) {
      alert("Please check the consent box to submit your application.");
      return;
    }
    setSubmitted(true);
  };

  const processSteps = [
    { title: t.step1Title, copy: t.step1Copy },
    { title: t.step2Title, copy: t.step2Copy },
    { title: t.step3Title, copy: t.step3Copy },
    { title: t.step4Title, copy: t.step4Copy },
  ];

  return (
    <main className="min-h-screen bg-[#F4F4F2] text-[#101B33]">
      {/* ===== Hero: centered heading + bento cards ===== */}
      <section className="pb-16 pt-16 lg:pb-24 lg:pt-24">
        <div className={container}>
          <div className="mx-auto max-w-3xl text-center">
            <Pill label={t.badge} />
            <h1 className={`${heading} mt-6 lg:text-6xl`}>
              {t.titleMain}{" "}
              <span className="text-[#8A6423]">{t.titleHighlight}</span>
            </h1>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-12">
            {/* Large quote card */}
            <div className="flex flex-col justify-between gap-10 rounded-3xl bg-[#101B33] p-8 text-white sm:p-10 md:col-span-7 md:row-span-2">
              <blockquote className="font-display text-2xl font-light leading-snug sm:text-3xl">
                {t.quote}
              </blockquote>
              <a
                href="#apply"
                aria-label={t.formTitle}
                className={`inline-flex items-center gap-3 self-start rounded-full border border-white/30 py-2 pl-5 pr-2 text-sm font-medium text-white ${focusGold}`}
              >
                {t.formTitle}
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#C79A3B] text-[#101B33]">
                  <ArrowUpRight size={18} aria-hidden="true" />
                </span>
              </a>
            </div>

            <div className="flex min-h-[150px] flex-col justify-between rounded-3xl border border-[#101B33]/10 bg-[#E9EAE5] p-7 md:col-span-5">
              <ShieldCheck
                size={26}
                className="text-[#8A6423]"
                aria-hidden="true"
              />
              <p className="font-display text-xl font-normal leading-snug">
                {t.secure}
              </p>
            </div>

            <div className="flex min-h-[150px] flex-col justify-between rounded-3xl border border-[#C79A3B]/40 bg-[#F6EBD2] p-7 md:col-span-5">
              <FileText
                size={26}
                className="text-[#8A6423]"
                aria-hidden="true"
              />
              <p className="font-display text-xl font-normal leading-snug">
                {t.directRoute}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Process: four step cards ===== */}
      <section className="border-t border-[#101B33]/10 py-16 lg:py-24">
        <div className={container}>
          <SectionHead n="01" label={t.processTitle} title={t.processHeader} />
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <li
                key={step.title}
                className="flex flex-col rounded-3xl border border-[#101B33]/10 bg-[#E9EAE5] p-6"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#101B33] text-xs font-semibold text-[#C79A3B]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display mt-10 text-lg font-medium leading-snug">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#101B33]/70">
                  {step.copy}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ===== Application form ===== */}
      <section
        id="apply"
        className="scroll-mt-16 border-t border-[#101B33]/10 py-16 lg:py-24"
      >
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
          {submitted ? (
            <div className="rounded-3xl border border-[#101B33]/10 bg-white p-10 text-center sm:p-16">
              <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#F6EBD2] text-[#8A6423]">
                <CheckCircle2 size={28} aria-hidden="true" />
              </div>
              <h2 className="font-display text-3xl font-light">
                {t.successTitle}
              </h2>
              <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-[#101B33]/70">
                {t.successMsg}{" "}
                <strong className="font-semibold text-[#101B33]">
                  {siteConfig.contact.email}
                </strong>
                .
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className={`${btnNavy} mt-8`}
              >
                {t.submitAnother}
              </button>
            </div>
          ) : (
            <>
              <SectionHead
                n="02"
                label={t.formBadge}
                title={t.formTitle}
                desc={t.formDesc}
              />

              <form
                onSubmit={handleSubmit}
                className="space-y-10 rounded-3xl border border-[#101B33]/10 bg-white p-6 sm:p-10"
              >
                <FormGroup n="01" title={t.sec1}>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label={t.fullName} required>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Jane Doe"
                        value={formData.fullName}
                        onChange={set("fullName")}
                        className={input}
                      />
                    </Field>
                    <Field label={t.phone} required icon={Phone}>
                      <input
                        type="tel"
                        required
                        placeholder="(972) 000-0000"
                        value={formData.phone}
                        onChange={set("phone")}
                        className={input}
                      />
                    </Field>
                    <Field label={t.email} required icon={Mail}>
                      <input
                        type="email"
                        required
                        placeholder="jane.doe@example.com"
                        value={formData.email}
                        onChange={set("email")}
                        className={input}
                      />
                    </Field>
                    <Field label={t.address} required icon={Home}>
                      <input
                        type="text"
                        required
                        placeholder="Street, City, State, Zip"
                        value={formData.address}
                        onChange={set("address")}
                        className={input}
                      />
                    </Field>
                  </div>
                </FormGroup>

                <FormGroup n="02" title={t.sec2}>
                  <Field label={t.counties} required icon={MapPin}>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dallas County, Collin County, Plano, Frisco"
                      value={formData.serviceAreas}
                      onChange={set("serviceAreas")}
                      className={input}
                    />
                  </Field>
                </FormGroup>

                <FormGroup n="03" title={t.sec3}>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label={t.cnaLicense} required icon={Award}>
                      <input
                        type="text"
                        required
                        placeholder="License # or certification ID"
                        value={formData.licenseNumber}
                        onChange={set("licenseNumber")}
                        className={input}
                      />
                    </Field>
                    <Field label={t.expDate} required icon={CalendarDays}>
                      <input
                        type="date"
                        required
                        value={formData.licenseExpiration}
                        onChange={set("licenseExpiration")}
                        className={input}
                      />
                    </Field>
                    <Field label={t.yearsExp} required icon={Clock}>
                      <input
                        type="text"
                        required
                        placeholder="e.g. 3 years"
                        value={formData.yearsExperience}
                        onChange={set("yearsExperience")}
                        className={input}
                      />
                    </Field>
                    <Field label={t.hhExp} required icon={HeartPulse}>
                      <select
                        value={formData.homeHealthExperience}
                        onChange={set("homeHealthExperience")}
                        className={input}
                      >
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                    </Field>
                  </div>
                </FormGroup>

                <FormGroup n="04" title={t.sec4}>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label={t.availability} required icon={CalendarClock}>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Full-time, weekdays, part-time"
                        value={formData.availability}
                        onChange={set("availability")}
                        className={input}
                      />
                    </Field>
                    <Field label={t.shiftPref} required icon={Clock}>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Day shifts, evening, weekends"
                        value={formData.shiftPreferences}
                        onChange={set("shiftPreferences")}
                        className={input}
                      />
                    </Field>
                    <Field label={t.transport} required icon={Car}>
                      <select
                        value={formData.transportation}
                        onChange={set("transportation")}
                        className={input}
                      >
                        <option value="Yes">
                          Yes (reliable vehicle & valid license)
                        </option>
                        <option value="No">No</option>
                      </select>
                    </Field>
                    <Field label={t.lang} icon={LanguagesIcon}>
                      <input
                        type="text"
                        placeholder="e.g. English, Spanish, Vietnamese"
                        value={formData.languages}
                        onChange={set("languages")}
                        className={input}
                      />
                    </Field>
                  </div>
                </FormGroup>

                <FormGroup n="05" title={t.sec5}>
                  <div className="space-y-5">
                    <Field label={t.refs} required icon={Users}>
                      <textarea
                        required
                        rows={3}
                        placeholder="Provide 2 professional references with name, relationship, phone number, and email."
                        value={formData.references}
                        onChange={set("references")}
                        className={input}
                      />
                    </Field>
                    <div>
                      <FieldLabel label={t.resume} icon={Upload} />
                      <label
                        className={`block cursor-pointer rounded-2xl border border-dashed border-[#101B33]/25 bg-[#F4F4F2] p-6 text-center focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-[#C79A3B]`}
                      >
                        <Upload
                          size={20}
                          className="mx-auto mb-2 text-[#101B33]/50"
                          aria-hidden="true"
                        />
                        <span className="block text-xs font-semibold">
                          {fileName || t.uploadPrompt}
                        </span>
                        <span className="mt-1 block text-[11px] text-[#101B33]/60">
                          {t.uploadSub}
                        </span>
                        <input
                          type="file"
                          className="sr-only"
                          accept=".pdf,.doc,.docx"
                          onChange={(e) =>
                            setFileName(e.target.files?.[0]?.name ?? "")
                          }
                        />
                      </label>
                    </div>
                  </div>
                </FormGroup>

                <div className="flex items-start gap-3 rounded-2xl border border-[#C79A3B]/40 bg-[#F6EBD2] p-5">
                  <AlertCircle
                    size={18}
                    className="mt-0.5 shrink-0 text-[#8A6423]"
                    aria-hidden="true"
                  />
                  <p className="text-xs leading-relaxed text-[#5A4419]">
                    <strong className="font-semibold text-[#3F3011]">
                      {t.privacyNotice}
                    </strong>{" "}
                    {t.privacyText}
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="consent"
                    required
                    checked={formData.consent}
                    onChange={(e) =>
                      setFormData({ ...formData, consent: e.target.checked })
                    }
                    className="mt-0.5 h-4 w-4 accent-[#101B33]"
                  />
                  <label
                    htmlFor="consent"
                    className="cursor-pointer text-xs leading-relaxed text-[#101B33]/75"
                  >
                    {t.consentLabel}
                  </label>
                </div>

                <button type="submit" className={`${btnNavy} w-full py-4`}>
                  <Send size={16} aria-hidden="true" />
                  {t.submitBtn}
                </button>
              </form>
            </>
          )}
        </div>
      </section>

      {/* ===== Footer CTA: dark rounded banner ===== */}
      <section className="px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
        <div className="mx-auto max-w-6xl rounded-3xl bg-[#101B33] px-6 py-14 text-center text-white sm:px-12 sm:py-20">
          <Pill label={t.questions} />
          <h2 className="font-display mt-5 text-3xl font-light tracking-tight sm:text-4xl">
            {t.talkItThrough}
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/75">
            {t.reachTeam}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className={`inline-flex items-center justify-center rounded-full border border-[#C79A3B] bg-[#C79A3B] px-7 py-3 text-sm font-semibold text-[#101B33] ${focusGold}`}
            >
              {t.emailUs}
            </a>
            <Link
              href="/employee-resources"
              className={`inline-flex items-center justify-center rounded-full border border-white/40 px-7 py-3 text-sm font-semibold text-white ${focusGold}`}
            >
              {t.resourcesHub}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function FormGroup({
  n,
  title,
  children,
}: {
  n: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <fieldset>
      <legend className="mb-5 flex w-full items-center gap-3">
        <Pill n={n} label={title} />
        <span aria-hidden="true" className="h-px flex-1 bg-[#101B33]/10" />
      </legend>
      {children}
    </fieldset>
  );
}

function FieldLabel({
  label,
  required,
  icon: Icon,
}: {
  label: string;
  required?: boolean;
  icon?: any;
}) {
  return (
    <span className="mb-2 flex items-center gap-1.5 text-xs font-semibold text-[#101B33]/85">
      {Icon && <Icon size={13} className="text-[#8A6423]" aria-hidden="true" />}
      {label} {required && <span className="text-[#8A6423]">*</span>}
    </span>
  );
}

function Field({
  label,
  required,
  icon,
  children,
}: {
  label: string;
  required?: boolean;
  icon?: any;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <FieldLabel label={label} required={required} icon={icon} />
      {children}
    </label>
  );
}
