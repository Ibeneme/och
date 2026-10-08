"use client";

import { Mail, Printer, Phone, ArrowRight } from "lucide-react";
import { useLanguage } from "@/src/context/LanguageContext";
import content from "@/src/locales/resources/referrals.json";
import { siteConfig } from "@/src/constants/siteConfig";

/* Design tokens: navy + gold. Fonts come from the root CSS; font-mono is used
   sparingly for small data-like details (eyebrow labels, fax number, step numbers).
   navy       #07162C  hero, methods card, form band
   navy-panel #0D2342  cards on navy
   gold       #E4B95A  accents and buttons on navy
   gold-deep  #C89B3C  borders and rules on white
   gold-text  #8A6A12  gold text on white (AA contrast)
   gold-tint  #FBF6E6  quiet gold background
   paper      #F6F8FC  quiet navy-tinted background
   line       #E6E9F0  borders on white                                  */

const container = "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8";
const eyebrow = "font-mono text-xs font-medium text-[#8A6A12]";
const h2Cls =
  "text-balance break-words text-2xl font-semibold leading-tight tracking-tight text-[#07162C] sm:text-3xl";
const btnBase =
  "inline-flex w-full items-center justify-center rounded-full px-6 py-3.5 text-center text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E4B95A] sm:w-auto sm:px-7";

export default function ReferralsPage() {
  const { language } = useLanguage();
  const t = content[language as "en" | "es"] || content.en;

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-[15px] text-[#1E2B4A] sm:text-base">
      {/* ===== Hero ===== */}
      <section className="border-b-4 border-[#E4B95A] bg-[#07162C] text-white">
        <div
          className={`${container} grid items-center gap-10 py-14 sm:py-16 lg:grid-cols-12 lg:gap-14 lg:py-20`}
        >
          <div className="relative order-2 mx-auto w-full max-w-md lg:order-2 lg:col-span-5 lg:max-w-none">
            <img
              src="/images/services/ot.svg"
              alt="Medical consultation"
              className="relative z-10 aspect-[4/3] w-full rounded-3xl bg-[#0D2342] object-cover"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 z-0 translate-x-3 translate-y-3 rounded-3xl border-2 border-[#E4B95A]"
            />
          </div>

          <div className="order-1 min-w-0 space-y-6 lg:order-1 lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#E4B95A]/40 px-3 py-1 font-mono text-xs font-medium text-[#E4B95A]">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#E4B95A]"
              />
              {t.badge}
            </div>
            <h1 className="text-balance break-words text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
              {t.titleMain}{" "}
              <span className="text-[#E4B95A]">{t.titleHighlight}</span>
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
              {t.description}
            </p>
            <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:flex-wrap">
              <a
                href="#referral-form"
                className={`${btnBase} bg-[#E4B95A] text-[#07162C] hover:bg-[#F0CB78]`}
              >
                {t.onlineFormBtn}
              </a>
              <a
                href="#methods"
                className={`${btnBase} border border-white/30 text-white hover:border-[#E4B95A] hover:text-[#E4B95A]`}
              >
                {t.altMethodsBtn}
              </a>
            </div>
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
              className="min-w-0 scroll-mt-32 lg:col-span-5 lg:self-start"
            >
              <div className="space-y-5 rounded-2xl bg-[#07162C] p-5 text-white sm:p-8">
                <div className="space-y-3">
                  <span className="font-mono text-xs font-medium text-[#E4B95A]">
                    {t.methodsEyebrow}
                  </span>
                  <h2 className="text-balance break-words text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl">
                    {t.methodsTitle}
                  </h2>
                  <p className="text-sm leading-relaxed text-white/70 sm:text-base">
                    {t.methodsDesc}
                  </p>
                </div>

                {/* Email */}
                <div className="flex gap-4 rounded-xl border border-white/10 bg-[#0D2342] p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#E4B95A] text-[#07162C]">
                    <Mail size={20} />
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
                      className="inline-block break-all text-sm font-semibold text-[#E4B95A] underline underline-offset-4 hover:text-[#F0CB78]"
                    >
                      intake@onechh.com &rarr;
                    </a>
                  </div>
                </div>

                {/* Fax */}
                <div className="flex gap-4 rounded-xl border border-white/10 bg-[#0D2342] p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#E4B95A] text-[#07162C]">
                    <Printer size={20} />
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
                <div className="flex gap-4 rounded-xl border border-white/10 bg-[#0D2342] p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#E4B95A] text-[#07162C]">
                    <Phone size={20} />
                  </div>
                  <div className="min-w-0 space-y-1.5">
                    <h3 className="break-words font-semibold text-white">
                      {t.phoneIntakeTitle || "New patients and referrals"}
                    </h3>
                    <p className="text-sm text-white/70">Referral & Intake</p>
                    <a
                      href="tel:9728489174"
                      className="inline-block whitespace-nowrap font-mono text-sm font-medium text-[#E4B95A] underline underline-offset-4 hover:text-[#F0CB78]"
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
                    className="w-full cursor-pointer rounded-full bg-[#E4B95A] px-6 py-3 text-sm font-semibold text-[#07162C] transition-colors hover:bg-[#F0CB78] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E4B95A]"
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
                <span className={eyebrow}>{t.partnerBadge}</span>
                <h2 className={h2Cls}>{t.partnerTitle}</h2>
                <p className="leading-relaxed text-[#1E2B4A]/80">
                  {t.partnerDesc}
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {t.partners.map((item: string) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-2 rounded-full border border-[#C89B3C]/60 bg-[#FBF6E6] px-4 py-1.5 text-sm font-medium text-[#07162C]"
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
              <div className="space-y-4 rounded-2xl border-l-4 border-[#E4B95A] bg-[#FBF6E6] p-5 sm:p-7">
                <span className={eyebrow}>{t.scopeBadge}</span>
                <h3 className="text-balance break-words text-xl font-semibold leading-snug tracking-tight text-[#07162C] sm:text-2xl">
                  {t.scopeTitle}
                </h3>
                <p className="leading-relaxed text-[#1E2B4A]/80">
                  {t.scopeDesc}
                </p>
                <ul className="space-y-2.5 pt-1">
                  {t.scopeItems.map((item: string, idx: number) => (
                    <li key={item} className="flex items-start gap-3">
                      <ArrowRight
                        size={16}
                        className="mt-1 shrink-0 text-[#8A6A12]"
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
                <span className={eyebrow}>{t.workflowBadge}</span>
                <h2 className={h2Cls}>{t.workflowTitle}</h2>
                <p className="leading-relaxed text-[#1E2B4A]/80">
                  {t.workflowDesc}
                </p>

                <div className="relative pt-4">
                  <div
                    aria-hidden="true"
                    className="absolute bottom-4 left-4 top-8 w-px bg-[#C89B3C]/50"
                  />
                  <div className="relative space-y-8 pl-12">
                    {t.steps.map(
                      (step: { title: string; desc: string }, idx: number) => (
                        <div key={step.title} className="relative min-w-0">
                          <div className="absolute -left-12 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-[#07162C] font-mono text-sm font-medium text-[#E4B95A]">
                            {idx + 1}
                          </div>
                          <h3 className="break-words text-lg font-semibold leading-snug text-[#07162C]">
                            {step.title}
                          </h3>
                          <p className="mt-1 leading-relaxed text-[#1E2B4A]/80">
                            {step.desc}
                          </p>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Online referral form (navy band) ===== */}
      <section
        id="referral-form"
        className="scroll-mt-24 border-t-4 border-[#E4B95A] bg-[#07162C]"
      >
        <div className={`${container} py-14 sm:py-16 lg:py-20`}>
          <div className="mx-auto max-w-4xl space-y-8">
            <div className="space-y-3 text-center">
              <h2 className="text-balance break-words text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
                {t.formTitle}
              </h2>
              <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
                {t.formSubtitle}
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl border-4 border-[#E4B95A] bg-white">
              <iframe
                id="JotFormIFrame-PASTE_YOUR_FORM_ID_HERE"
                title="Patient Referral Form"
                onLoad={() => window.parent.scrollTo(0, 0)}
                allowTransparency={true}
                allow="geolocation; microphone; camera; fullscreen"
                src="https://form.jotform.com/PASTE_YOUR_FORM_ID_HERE"
                frameBorder="0"
                scrolling="yes"
                className="block h-[900px] w-full sm:h-[1100px]"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
