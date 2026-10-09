"use client";

import { useState } from "react";
import type { FormEvent, ReactNode } from "react";
import { Mail, Printer, Phone, ArrowRight, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/src/context/LanguageContext";
import content from "@/src/locales/resources/referrals.json";
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
const container = "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8";
const card = "rounded-3xl border border-[#07162C]/10 bg-[#E9EAE5]";
const input =
  "w-full rounded-xl border border-[#07162C]/20 bg-[#F4F4F2] px-4 py-3 text-base text-[#07162C] outline-none placeholder:text-[#07162C]/45 focus:border-[#07162C] focus:outline focus:outline-2 focus:outline-offset-0 focus:outline-[#E4B95A]";

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
  required,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <label
        htmlFor={id}
        className="block text-sm font-semibold text-[#07162C]"
      >
        {label}
        {required && (
          <span className="text-[#996515]" aria-hidden>
            {" "}
            *
          </span>
        )}
      </label>
      {children}
    </div>
  );
}

function SectionHeading({
  number,
  children,
}: {
  number: number;
  children: ReactNode;
}) {
  return (
    <div className="flex items-center gap-3">
      <Pill n={String(number).padStart(2, "0")} label={String(children)} />
      <span aria-hidden className="h-px flex-1 bg-[#07162C]/10" />
    </div>
  );
}

export default function ReferralsPage() {
  const { language } = useLanguage();
  const t = content[language as "en" | "es"] || content.en;

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    patient_name: "",
    phone: "",
    email: "",
    insurance_type: "",
    notes: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const payload = {
        ...formData,
        submitted_at: new Date().toISOString(),
        source_page: window.location.pathname,
      };

      const endpoint =
        process.env.NEXT_PUBLIC_REFERRAL_WEBHOOK_URL || "/api/referrals";

      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Submission failed");
      setSubmitted(true);
    } catch {
      setError(
        language === "es"
          ? "Hubo un error al enviar su referencia. Por favor llame al (972) 848-9174."
          : "There was an error submitting your referral. Please call us at (972) 848-9174."
      );
    } finally {
      setLoading(false);
    }
  };

  const link = `rounded-sm font-semibold text-[#07162C] underline decoration-[#E4B95A] decoration-2 underline-offset-4 ${FOCUS}`;

  return (
    <main className="min-h-screen bg-[#F4F4F2] text-base leading-relaxed text-[#07162C]/80">
      {/* ===== Header: centered ===== */}
      <section className="px-4 pb-10 pt-14 text-center sm:px-6 lg:pb-14 lg:pt-20">
        <div className="mx-auto max-w-3xl">
          <Pill label={t.badge} />
          <h1 className={`${HEADING} mt-6 text-4xl sm:text-5xl lg:text-6xl`}>
            {t.titleMain}{" "}
            <span className="text-[#996515]">{t.titleHighlight}</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base text-[#07162C]/70 sm:text-lg">
            {t.description}
          </p>
        </div>
      </section>

      {/* ===== Alternative Methods Bento Row ===== */}
      <section id="methods" className="px-4 sm:px-6">
        <div className={container}>
          <div className="mb-5 text-center">
            <Pill n="01" label={t.methodsEyebrow} />
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {/* Email Intake Card */}
            <div className={`flex flex-col justify-between p-6 ${card}`}>
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#07162C] text-[#E4B95A]">
                <Mail size={20} aria-hidden />
              </div>
              <div className="mt-6">
                <h3 className="ohh-serif text-xl font-medium text-[#07162C]">
                  Email intake
                </h3>
                <p className="mt-2 text-sm text-[#07162C]/70">
                  intake@onechh.com — send documentation securely or coordinate
                  directly.
                </p>
                <a
                  href="mailto:intake@onechh.com"
                  className={`mt-4 inline-block text-sm font-semibold text-[#996515] underline underline-offset-4 ${FOCUS}`}
                >
                  intake@onechh.com &rarr;
                </a>
              </div>
            </div>

            {/* Secure Fax Card */}
            <div className={`flex flex-col justify-between p-6 ${card}`}>
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#07162C] text-[#E4B95A]">
                <Printer size={20} aria-hidden />
              </div>
              <div className="mt-6">
                <h3 className="ohh-serif text-xl font-medium text-[#07162C]">
                  {t.secureFaxTitle}
                </h3>
                <div className="mt-2 font-mono text-lg font-semibold text-[#07162C]">
                  {siteConfig.contact.fax}
                </div>
                <p className="mt-1 text-xs text-[#07162C]/60">
                  Available 24/7 for secure clinical records.
                </p>
              </div>
            </div>

            {/* Phone Intake Card (Navy theme block) */}
            <div className="flex flex-col justify-between rounded-3xl bg-[#07162C] p-6 text-white">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#E4B95A] text-[#07162C]">
                <Phone size={20} aria-hidden />
              </div>
              <div className="mt-6">
                <h3 className="ohh-serif text-xl font-medium text-white">
                  {t.phoneIntakeTitle || "New patients & referrals"}
                </h3>
                <a
                  href="tel:9728489174"
                  className={`mt-2 inline-block font-mono text-xl font-semibold text-[#E4B95A] ${FOCUS_GOLD}`}
                >
                  (972) 848-9174
                </a>
                <p className="mt-1 text-xs text-white/70">
                  Main office: (972) 325-1598
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Partner & Scope Overview ===== */}
      <section className="px-4 py-16 sm:px-6 lg:py-24">
        <div className={`${container} grid gap-8 lg:grid-cols-2`}>
          {/* Partner types */}
          <div className={`p-6 sm:p-8 ${card}`}>
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#996515]">
              {t.partnerBadge}
            </span>
            <h2 className={`${HEADING} mt-2 text-2xl sm:text-3xl`}>
              {t.partnerTitle}
            </h2>
            <p className="mt-3 text-sm text-[#07162C]/75 leading-relaxed">
              {t.partnerDesc}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {t.partners.map((item: string) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full border border-[#07162C]/10 bg-white px-3.5 py-1.5 text-xs font-semibold text-[#07162C]"
                >
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#996515]"
                  />
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Scope of service */}
          <div className={`p-6 sm:p-8 ${card}`}>
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#996515]">
              {t.scopeBadge}
            </span>
            <h2 className={`${HEADING} mt-2 text-2xl sm:text-3xl`}>
              {t.scopeTitle}
            </h2>
            <p className="mt-3 text-sm text-[#07162C]/75 leading-relaxed">
              {t.scopeDesc}
            </p>
            <ul className="mt-5 space-y-2 border-t border-[#07162C]/10 pt-4">
              {t.scopeItems.map((item: string) => (
                <li key={item} className="flex items-start gap-2.5 text-sm">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#996515]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ===== Online Referral Form Component ===== */}
      <section id="referral-form" className="px-4 pb-16 pt-4 sm:px-6 lg:pb-24">
        <div className="mx-auto max-w-3xl rounded-3xl border border-[#07162C]/10 bg-white p-6 sm:p-10">
          <div className="mb-8 text-center">
            <Pill n="02" label="Online Submission" />
            <h2 className={`${HEADING} mt-4 text-3xl sm:text-4xl`}>
              {t.formTitle}
            </h2>
            <p className="mt-2 text-sm text-[#07162C]/70">{t.formSubtitle}</p>
          </div>

          {submitted ? (
            <div role="status" className="space-y-4 py-8 text-center">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#07162C] text-[#E4B95A]">
                <CheckCircle2 size={28} aria-hidden />
              </span>
              <h2 className={`${HEADING} text-3xl`}>Referral Received</h2>
              <p className="mx-auto max-w-md text-sm text-[#07162C]/70">
                Thank you. Our intake team will review the information and
                contact the patient and referring office promptly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {error && (
                <div
                  role="alert"
                  className="rounded-2xl border border-[#B91C1C] bg-[#FEF2F2] p-4 text-sm font-medium text-[#991B1B]"
                >
                  {error}
                </div>
              )}

              <Field id="patient_name" label="Patient Full Name" required>
                <input
                  id="patient_name"
                  type="text"
                  required
                  placeholder="e.g. Jane Doe"
                  value={formData.patient_name}
                  onChange={(e) =>
                    setFormData({ ...formData, patient_name: e.target.value })
                  }
                  className={input}
                />
              </Field>

              <div className="grid gap-4 sm:grid-cols-2">
                <Field id="phone" label="Contact Phone" required>
                  <input
                    id="phone"
                    type="tel"
                    required
                    placeholder="e.g. (972) 555-0199"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className={input}
                  />
                </Field>
                <Field id="email" label="Contact Email">
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="e.g. coordinator@clinic.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className={input}
                  />
                </Field>
              </div>

              <Field id="insurance_type" label="Insurance / Program">
                <input
                  id="insurance_type"
                  type="text"
                  placeholder="e.g. Medicare, Texas Medicaid, STAR+PLUS"
                  value={formData.insurance_type}
                  onChange={(e) =>
                    setFormData({ ...formData, insurance_type: e.target.value })
                  }
                  className={input}
                />
              </Field>

              <Field id="notes" label="Additional Referral Notes">
                <textarea
                  id="notes"
                  rows={3}
                  placeholder="Include basic service notes or requested disciplines..."
                  value={formData.notes}
                  onChange={(e) =>
                    setFormData({ ...formData, notes: e.target.value })
                  }
                  className={input}
                />
              </Field>

              <button
                type="submit"
                disabled={loading}
                className={`flex w-full cursor-pointer items-center justify-center gap-2 rounded-full border border-[#07162C] bg-[#07162C] py-4 text-base font-semibold text-[#E4B95A] disabled:cursor-not-allowed disabled:opacity-60 ${FOCUS}`}
              >
                {loading ? "Submitting..." : "Submit Patient Referral"}
                <ArrowRight size={18} aria-hidden />
              </button>

              <p className="border-t border-[#07162C]/10 pt-6 text-center text-sm leading-relaxed text-[#07162C]/70">
                Please fax formal orders and secure documentation directly to{" "}
                <span className="font-semibold text-[#07162C]">
                  {siteConfig.contact.fax}
                </span>
                .
              </p>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
