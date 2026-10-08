"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Upload,
  CheckCircle2,
  AlertCircle,
  FileText,
  ShieldCheck,
  Send,
  Sparkles,
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

export default function CNATalentNetworkPage() {
  const { language } = useLanguage();
  const t = content[language as "en" | "es"] || content.en;

  const [submitted, setSubmitted] = useState(false);
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

  const handleSubmit = (e: React.FormEvent) => {
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

  const routeMarkers = [
    { left: "10%", top: "88%" },
    { left: "34%", top: "56%" },
    { left: "58%", top: "34%" },
  ];

  return (
    <main className="min-h-screen bg-[#F1F3EC] text-[#101B33]">
      {/* ===== Hero ===== */}
      <section className="relative bg-[#101B33] text-[#F1F3EC] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 font-label text-[11px] tracking-[0.25em] uppercase text-[#C79A3B] mb-6">
              <Sparkles size={13} />
              {t.badge}
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.08] font-semibold mb-8 tracking-tight">
              {t.titleMain}
              <br className="hidden sm:block" /> {t.titleHighlight}
            </h1>
            <blockquote className="border-l-2 border-[#C79A3B] pl-5 text-[#D7DCEA] text-base sm:text-lg leading-relaxed italic mb-8 max-w-xl">
              {t.quote}
            </blockquote>
            <div className="flex flex-wrap gap-3 font-label text-[11px] uppercase tracking-wider text-[#D7DCEA]">
              <span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-white/15">
                <ShieldCheck size={14} className="text-[#C79A3B]" />
                {t.secure}
              </span>
              <span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-white/15">
                <FileText size={14} className="text-[#C79A3B]" />
                {t.directRoute}
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 relative h-[320px] sm:h-[380px] lg:h-[440px]">
            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              className="absolute inset-0 w-full h-full"
            >
              <path
                d="M10,90 C28,78 24,58 34,54 C46,49 50,38 58,32 C68,25 66,14 82,10"
                fill="none"
                stroke="#C79A3B"
                strokeWidth="0.6"
                strokeDasharray="1.6 2.2"
                strokeLinecap="round"
                opacity="0.6"
              />
            </svg>
            {routeMarkers.map((m, i) => (
              <div
                key={i}
                className="absolute -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/5 border border-white/20 flex items-center justify-center"
                style={{ left: m.left, top: m.top }}
              >
                <Home size={15} className="text-[#D7DCEA]" />
              </div>
            ))}
            <div
              className="absolute -translate-x-1/2 -translate-y-1/2 flex items-center gap-2"
              style={{ left: "82%", top: "10%" }}
            >
              <span className="relative flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C79A3B] opacity-60" />
                <span className="relative inline-flex rounded-full h-4 w-4 bg-[#C79A3B]" />
              </span>
              <span className="font-label text-[10px] uppercase tracking-widest text-[#C79A3B] whitespace-nowrap">
                Next opening
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Process + Form ===== */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-12">
          {/* Timeline sidebar */}
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-16">
              <span className="font-label text-[11px] uppercase tracking-[0.25em] text-[#C79A3B]">
                {t.processTitle}
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold mt-3 mb-8 tracking-tight">
                {t.processHeader}
              </h2>
              <ol className="relative border-l border-dashed border-[#101B33]/20 ml-3">
                {processSteps.map((step, i) => (
                  <li key={step.title} className="pl-7 pb-9 last:pb-0 relative">
                    <span className="absolute -left-[15px] top-0 w-7 h-7 rounded-full bg-[#101B33] text-[#C79A3B] font-label text-xs flex items-center justify-center">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-display text-base font-semibold mb-1.5">
                      {step.title}
                    </h3>
                    <p className="text-sm text-[#101B33]/70 leading-relaxed">
                      {step.copy}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </aside>

          {/* Form */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-2xl border border-[#101B33]/10 p-7 sm:p-10">
              {submitted ? (
                <div className="text-center py-16">
                  <div className="w-14 h-14 bg-[#C79A3B]/10 text-[#C79A3B] rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={30} />
                  </div>
                  <h2 className="font-display text-2xl font-semibold mb-3">
                    {t.successTitle}
                  </h2>
                  <p className="text-sm text-[#101B33]/70 max-w-md mx-auto mb-8 leading-relaxed">
                    {t.successMsg}{" "}
                    <strong className="text-[#101B33] font-semibold">
                      {siteConfig.contact.email}
                    </strong>
                    .
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="px-7 py-3 bg-[#101B33] hover:bg-[#1B2C52] text-white font-semibold rounded-full transition-colors text-sm"
                  >
                    {t.submitAnother}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-10">
                  <div>
                    <span className="font-label text-[11px] uppercase tracking-[0.25em] text-[#C79A3B]">
                      {t.formBadge}
                    </span>
                    <h2 className="font-display text-2xl sm:text-3xl font-semibold mt-3 mb-2 tracking-tight">
                      {t.formTitle}
                    </h2>
                    <p className="text-sm text-[#101B33]/70">{t.formDesc}</p>
                  </div>

                  {/* Section 01 — Contact */}
                  <div>
                    <div className="flex items-center gap-3 mb-5">
                      <span className="font-label text-[11px] text-[#C79A3B]">
                        01
                      </span>
                      <span className="font-label text-[11px] uppercase tracking-widest text-[#101B33]/50">
                        {t.sec1}
                      </span>
                      <div className="flex-1 border-t border-dashed border-[#101B33]/15" />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <Field label={t.fullName} required>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Jane Doe"
                          value={formData.fullName}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              fullName: e.target.value,
                            })
                          }
                          className="w-full px-4 py-3 bg-[#F1F3EC] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#C79A3B]"
                        />
                      </Field>
                      <Field label={t.phone} required icon={Phone}>
                        <input
                          type="tel"
                          required
                          placeholder="(972) 000-0000"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          className="w-full px-4 py-3 bg-[#F1F3EC] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#C79A3B]"
                        />
                      </Field>
                      <Field label={t.email} required icon={Mail}>
                        <input
                          type="email"
                          required
                          placeholder="jane.doe@example.com"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="w-full px-4 py-3 bg-[#F1F3EC] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#C79A3B]"
                        />
                      </Field>
                      <Field label={t.address} required icon={Home}>
                        <input
                          type="text"
                          required
                          placeholder="Street, City, State, Zip"
                          value={formData.address}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              address: e.target.value,
                            })
                          }
                          className="w-full px-4 py-3 bg-[#F1F3EC] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#C79A3B]"
                        />
                      </Field>
                    </div>
                  </div>

                  {/* Section 02 — Coverage area */}
                  <div>
                    <div className="flex items-center gap-3 mb-5">
                      <span className="font-label text-[11px] text-[#C79A3B]">
                        02
                      </span>
                      <span className="font-label text-[11px] uppercase tracking-widest text-[#101B33]/50">
                        {t.sec2}
                      </span>
                      <div className="flex-1 border-t border-dashed border-[#101B33]/15" />
                    </div>
                    <Field label={t.counties} required icon={MapPin}>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Dallas County, Collin County, Plano, Frisco"
                        value={formData.serviceAreas}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            serviceAreas: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 bg-[#F1F3EC] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#C79A3B]"
                      />
                    </Field>
                  </div>

                  {/* Section 03 — Credentials */}
                  <div>
                    <div className="flex items-center gap-3 mb-5">
                      <span className="font-label text-[11px] text-[#C79A3B]">
                        03
                      </span>
                      <span className="font-label text-[11px] uppercase tracking-widest text-[#101B33]/50">
                        {t.sec3}
                      </span>
                      <div className="flex-1 border-t border-dashed border-[#101B33]/15" />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <Field label={t.cnaLicense} required icon={Award}>
                        <input
                          type="text"
                          required
                          placeholder="License # or certification ID"
                          value={formData.licenseNumber}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              licenseNumber: e.target.value,
                            })
                          }
                          className="w-full px-4 py-3 bg-[#F1F3EC] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#C79A3B]"
                        />
                      </Field>
                      <Field label={t.expDate} required icon={CalendarDays}>
                        <input
                          type="date"
                          required
                          value={formData.licenseExpiration}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              licenseExpiration: e.target.value,
                            })
                          }
                          className="w-full px-4 py-3 bg-[#F1F3EC] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#C79A3B]"
                        />
                      </Field>
                      <Field label={t.yearsExp} required icon={Clock}>
                        <input
                          type="text"
                          required
                          placeholder="e.g. 3 years"
                          value={formData.yearsExperience}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              yearsExperience: e.target.value,
                            })
                          }
                          className="w-full px-4 py-3 bg-[#F1F3EC] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#C79A3B]"
                        />
                      </Field>
                      <Field label={t.hhExp} required icon={HeartPulse}>
                        <select
                          value={formData.homeHealthExperience}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              homeHealthExperience: e.target.value,
                            })
                          }
                          className="w-full px-4 py-3 bg-[#F1F3EC] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#C79A3B]"
                        >
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </select>
                      </Field>
                    </div>
                  </div>

                  {/* Section 04 — Availability */}
                  <div>
                    <div className="flex items-center gap-3 mb-5">
                      <span className="font-label text-[11px] text-[#C79A3B]">
                        04
                      </span>
                      <span className="font-label text-[11px] uppercase tracking-widest text-[#101B33]/50">
                        {t.sec4}
                      </span>
                      <div className="flex-1 border-t border-dashed border-[#101B33]/15" />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <Field
                        label={t.availability}
                        required
                        icon={CalendarClock}
                      >
                        <input
                          type="text"
                          required
                          placeholder="e.g. Full-time, weekdays, part-time"
                          value={formData.availability}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              availability: e.target.value,
                            })
                          }
                          className="w-full px-4 py-3 bg-[#F1F3EC] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#C79A3B]"
                        />
                      </Field>
                      <Field label={t.shiftPref} required icon={Clock}>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Day shifts, evening, weekends"
                          value={formData.shiftPreferences}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              shiftPreferences: e.target.value,
                            })
                          }
                          className="w-full px-4 py-3 bg-[#F1F3EC] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#C79A3B]"
                        />
                      </Field>
                      <Field label={t.transport} required icon={Car}>
                        <select
                          value={formData.transportation}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              transportation: e.target.value,
                            })
                          }
                          className="w-full px-4 py-3 bg-[#F1F3EC] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#C79A3B]"
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
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              languages: e.target.value,
                            })
                          }
                          className="w-full px-4 py-3 bg-[#F1F3EC] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#C79A3B]"
                        />
                      </Field>
                    </div>
                  </div>

                  {/* Section 05 — References & resume */}
                  <div>
                    <div className="flex items-center gap-3 mb-5">
                      <span className="font-label text-[11px] text-[#C79A3B]">
                        05
                      </span>
                      <span className="font-label text-[11px] uppercase tracking-widest text-[#101B33]/50">
                        {t.sec5}
                      </span>
                      <div className="flex-1 border-t border-dashed border-[#101B33]/15" />
                    </div>
                    <div className="space-y-5">
                      <Field label={t.refs} required icon={Users}>
                        <textarea
                          required
                          rows={3}
                          placeholder="Provide 2 professional references with name, relationship, phone number, and email."
                          value={formData.references}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              references: e.target.value,
                            })
                          }
                          className="w-full px-4 py-3 bg-[#F1F3EC] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#C79A3B]"
                        />
                      </Field>
                      <div>
                        <FieldLabel label={t.resume} icon={Upload} />
                        <div className="rounded-xl border border-dashed border-[#101B33]/20 p-6 text-center cursor-pointer bg-[#F1F3EC]/60 hover:bg-[#F1F3EC] transition-colors">
                          <Upload
                            size={20}
                            className="mx-auto text-[#101B33]/40 mb-2"
                          />
                          <p className="text-xs font-semibold">
                            {t.uploadPrompt}
                          </p>
                          <p className="text-[10px] text-[#101B33]/50 mt-1">
                            {t.uploadSub}
                          </p>
                          <input
                            type="file"
                            className="hidden"
                            accept=".pdf,.doc,.docx"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 bg-[#C79A3B]/10 rounded-xl flex items-start gap-3 border border-[#C79A3B]/20">
                    <AlertCircle
                      size={17}
                      className="text-[#8A6423] shrink-0 mt-0.5"
                    />
                    <p className="text-xs text-[#5A4419] leading-relaxed">
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
                      className="w-4 h-4 mt-0.5 text-[#C79A3B] rounded"
                    />
                    <label
                      htmlFor="consent"
                      className="text-xs text-[#101B33]/70 leading-relaxed cursor-pointer"
                    >
                      {t.consentLabel}
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#101B33] hover:bg-[#1B2C52] text-white font-semibold rounded-full transition-colors text-sm flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send size={16} />
                    {t.submitBtn}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ===== Footer CTA ===== */}
      <section className="py-20 bg-white border-t border-[#101B33]/10 text-center">
        <div className="max-w-2xl mx-auto px-4 space-y-4">
          <span className="font-label text-[11px] uppercase tracking-[0.25em] text-[#C79A3B]">
            {t.questions}
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight">
            {t.talkItThrough}
          </h2>
          <p className="text-sm text-[#101B33]/70">{t.reachTeam}</p>
          <div className="flex justify-center gap-4 flex-wrap pt-3">
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="px-7 py-3 bg-[#101B33] hover:bg-[#1B2C52] text-white font-semibold rounded-full transition-colors text-sm"
            >
              {t.emailUs}
            </a>
            <Link
              href="/employee-resources"
              className="px-7 py-3 border border-[#101B33]/20 hover:bg-[#101B33]/5 text-[#101B33] font-semibold rounded-full transition-colors text-sm"
            >
              {t.resourcesHub}
            </Link>
          </div>
        </div>
      </section>
    </main>
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
    <label className="flex items-center gap-1.5 text-xs font-semibold text-[#101B33]/80 mb-2">
      {Icon && <Icon size={13} className="text-[#C79A3B]" />}
      {label} {required && <span className="text-[#C79A3B]">*</span>}
    </label>
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
  children: React.ReactNode;
}) {
  return (
    <div>
      <FieldLabel label={label} required={required} icon={icon} />
      {children}
    </div>
  );
}
