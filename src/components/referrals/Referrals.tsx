"use client";

import { Mail, Printer, Phone, ArrowRight } from "lucide-react";
import { useLanguage } from "@/src/context/LanguageContext";
import content from "@/src/locales/resources/referrals.json";
import { siteConfig } from "@/src/constants/siteConfig";

/* Design tokens: navy + gold, flat (1px borders, no shadows). font-mono is used
   sparingly for data-like details (fax, phone numbers, step numbers).
   navy   #07162C  hero + methods card
   navy-2 #0A2140  cards on navy
   gold   #E4B95A  accents and buttons on navy
   gold-d #996515  small gold text on light backgrounds (AA contrast)
   cream  #FBF8F2  quiet section background
   sand   #F3ECDC  chips and tints
   line   #E8DFC8  borders on light                                       */

const container = "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8";
const eyebrowLight =
  "text-xs font-bold uppercase tracking-[0.18em] text-[#996515]";
const eyebrowDark =
  "text-xs font-bold uppercase tracking-[0.18em] text-[#E4B95A]";
const h2Cls =
  "text-balance break-words text-2xl font-semibold leading-tight tracking-tight text-[#07162C] sm:text-3xl";
const btnBase =
  "inline-flex w-full items-center justify-center rounded-full px-6 py-3.5 text-center text-sm font-bold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E4B95A] sm:w-auto sm:px-7";

export default function ReferralsPage() {
  const { language } = useLanguage();
  const t = content[language as "en" | "es"] || content.en;

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-[15px] text-[#3A4657] sm:text-base">
      {/* ===== Hero ===== */}
      <section className="bg-[#07162C] text-white">
        <div
          className={`${container} grid items-center gap-10 py-14 sm:py-16 lg:grid-cols-12 lg:gap-14 lg:py-24`}
        >
          <div className="order-1 min-w-0 space-y-6 lg:col-span-7">
            <div
              className={`inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 ${eyebrowDark}`}
            >
              <span
                aria-hidden="true"
                className="h-2 w-2 shrink-0 rounded-full bg-[#E4B95A]"
              />
              {t.badge}
            </div>
            <h1 className="text-balance break-words text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
              {t.titleMain}{" "}
              <span className="text-[#E4B95A]">{t.titleHighlight}</span>
            </h1>
            <div className="h-1 w-16 rounded-full bg-[#E4B95A]" />
            <p className="max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
              {t.description}
            </p>
            <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:flex-wrap">
              <a
                href="#referral-form"
                className={`${btnBase} bg-[#E4B95A] text-[#07162C] hover:bg-[#EDC878]`}
              >
                {t.onlineFormBtn}
              </a>
              <a
                href="#methods"
                className={`${btnBase} border border-white/30 !font-semibold text-white hover:border-[#E4B95A] hover:text-[#E4B95A]`}
              >
                {t.altMethodsBtn}
              </a>
            </div>
          </div>

          <div className="order-2 mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none">
            <img
              src="/images/services/ot.svg"
              alt="Medical consultation"
              className="aspect-[4/3] w-full rounded-3xl border border-[#E4B95A]/40 bg-[#0A2140] object-cover"
            />
          </div>
        </div>
      </section>

      {/* ===== Methods + partner info ===== */}
      <section className="bg-white">
        <div className={`${container} py-14 sm:py-16 lg:py-24`}>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            {/* Methods card (navy) */}
            <aside
              id="methods"
              className="min-w-0 scroll-mt-32 lg:sticky lg:top-24 lg:col-span-5 lg:self-start"
            >
              <div className="space-y-5 rounded-3xl bg-[#07162C] p-5 text-white sm:p-8">
                <div className="space-y-3">
                  <span className={eyebrowDark}>{t.methodsEyebrow}</span>
                  <h2 className="text-balance break-words text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl">
                    {t.methodsTitle}
                  </h2>
                  <p className="text-sm leading-relaxed text-white/70 sm:text-base">
                    {t.methodsDesc}
                  </p>
                </div>

                {/* Email */}
                <div className="flex gap-4 rounded-2xl border border-white/10 bg-[#0A2140] p-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E4B95A] text-[#07162C]">
                    <Mail size={20} aria-hidden />
                  </div>
                  <div className="min-w-0 space-y-1.5">
                    <h3 className="break-words font-semibold text-white">
                      Email intake — intake@onechh.com
                    </h3>
                    <p className="text-sm leading-relaxed text-white/70">
                      For referral notification and coordination. Please send
                      clinical documentation by secure fax to 972-674-2923.
                    </p>
                    <a
                      href="mailto:intake@onechh.com"
                      className="inline-block break-all text-sm font-semibold text-[#E4B95A] underline underline-offset-4 hover:text-white"
                    >
                      intake@onechh.com &rarr;
                    </a>
                  </div>
                </div>

                {/* Fax */}
                <div className="flex gap-4 rounded-2xl border border-white/10 bg-[#0A2140] p-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E4B95A] text-[#07162C]">
                    <Printer size={20} aria-hidden />
                  </div>
                  <div className="min-w-0 space-y-1.5">
                    <h3 className="break-words font-semibold text-white">
                      {t.secureFaxTitle}
                    </h3>
                    <div className="break-words font-mono text-lg font-medium text-[#E4B95A]">
                      {siteConfig.contact.fax}
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4 rounded-2xl border border-white/10 bg-[#0A2140] p-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E4B95A] text-[#07162C]">
                    <Phone size={20} aria-hidden />
                  </div>
                  <div className="min-w-0 space-y-1.5">
                    <h3 className="break-words font-semibold text-white">
                      {t.phoneIntakeTitle || "New patients and referrals"}
                    </h3>
                    <p className="text-sm text-white/70">Referral & Intake</p>
                    <a
                      href="tel:9728489174"
                      className="inline-block whitespace-nowrap font-mono text-sm font-medium text-[#E4B95A] underline underline-offset-4 hover:text-white"
                    >
                      (972) 848-9174 &rarr;
                    </a>
                    <div className="mt-3 space-y-1 border-t border-white/10 pt-3">
                      <p className="text-sm text-white/70">Main office</p>
                      <a
                        href="tel:9723251598"
                        className="inline-block whitespace-nowrap font-mono text-sm font-medium text-white underline underline-offset-4 hover:text-[#E4B95A]"
                      >
                        (972) 325-1598
                      </a>
                    </div>
                  </div>
                </div>

                {/* PDF form */}
                <div className="space-y-3 border-t border-white/10 pt-5">
                  <h3 className="break-words font-semibold text-white">
                    {t.pdfFormTitle}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/70">
                    {t.pdfFormDesc}
                  </p>
                  <button
                    onClick={() => alert("Referral form download initialized.")}
                    className="w-full cursor-pointer rounded-full bg-[#E4B95A] px-6 py-3 text-sm font-bold text-[#07162C] transition-colors hover:bg-[#EDC878] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E4B95A]"
                  >
                    {t.pdfBtn}
                  </button>
                </div>
              </div>
            </aside>

            {/* Right column */}
            <div className="min-w-0 space-y-12 lg:col-span-7 lg:space-y-14">
              {/* Partners */}
              <div className="space-y-4">
                <span className={eyebrowLight}>{t.partnerBadge}</span>
                <h2 className={h2Cls}>{t.partnerTitle}</h2>
                <p className="leading-relaxed text-[#3A4657]">
                  {t.partnerDesc}
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {t.partners.map((item: string) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-2 rounded-full bg-[#F3ECDC] px-4 py-1.5 text-sm font-semibold text-[#07162C]"
                    >
                      <span
                        aria-hidden="true"
                        className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#C89B3C]"
                      />
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Scope */}
              <div className="space-y-4 rounded-3xl border border-[#E8DFC8] border-l-[6px] border-l-[#E4B95A] bg-[#FBF8F2] p-6 sm:p-8">
                <span className={eyebrowLight}>{t.scopeBadge}</span>
                <h3 className="text-balance break-words text-xl font-semibold leading-snug tracking-tight text-[#07162C] sm:text-2xl">
                  {t.scopeTitle}
                </h3>
                <p className="leading-relaxed text-[#3A4657]">{t.scopeDesc}</p>
                <ul className="space-y-2.5 border-t border-[#E8DFC8] pt-5">
                  {t.scopeItems.map((item: string) => (
                    <li key={item} className="flex items-start gap-3">
                      <ArrowRight
                        size={16}
                        aria-hidden
                        className="mt-1 shrink-0 text-[#996515]"
                      />
                      <span className="min-w-0 break-words leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Workflow */}
              <div className="space-y-4">
                <span className={eyebrowLight}>{t.workflowBadge}</span>
                <h2 className={h2Cls}>{t.workflowTitle}</h2>
                <p className="leading-relaxed text-[#3A4657]">
                  {t.workflowDesc}
                </p>

                <ol className="space-y-4 pt-4">
                  {t.steps.map(
                    (step: { title: string; desc: string }, idx: number) => (
                      <li
                        key={step.title}
                        className="flex min-w-0 gap-5 rounded-2xl border border-[#E8DFC8] bg-white p-5 transition-colors hover:border-[#C89B3C]"
                      >
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#07162C] font-mono text-sm font-semibold text-[#E4B95A]">
                          {idx + 1}
                        </span>
                        <div className="min-w-0">
                          <h3 className="break-words text-lg font-semibold leading-snug text-[#07162C]">
                            {step.title}
                          </h3>
                          <p className="mt-1 leading-relaxed text-[#5B6B7C]">
                            {step.desc}
                          </p>
                        </div>
                      </li>
                    )
                  )}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Online referral form ===== */}
      <section id="referral-form" className="scroll-mt-24 bg-[#FBF8F2]">
        <div className={`${container} py-14 sm:py-16 lg:py-24`}>
          <div className="mx-auto max-w-4xl space-y-8">
            <div className="space-y-3 text-center">
              <h2 className="text-balance break-words text-3xl font-semibold leading-tight tracking-tight text-[#07162C] sm:text-4xl">
                {t.formTitle}
              </h2>
              <div className="mx-auto h-1 w-16 rounded-full bg-[#E4B95A]" />
              <p className="mx-auto max-w-2xl text-base leading-relaxed text-[#5B6B7C] sm:text-lg">
                {t.formSubtitle}
              </p>
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#E8DFC8] bg-white">
              <iframe
                id="JotFormIFrame-PASTE_YOUR_FORM_ID_HERE"
                title="Patient Referral Form"
                onLoad={() => window.parent.scrollTo(0, 0)}
                allow="geolocation; microphone; camera; fullscreen"
                src="https://form.jotform.com/PASTE_YOUR_FORM_ID_HERE"
                style={{ border: 0 }}
                className="block h-[900px] w-full sm:h-[1100px]"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
