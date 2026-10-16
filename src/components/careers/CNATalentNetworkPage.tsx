"use client";

import Script from "next/script";
import Link from "@/src/components/LocaleLink";
import { FileText, ShieldCheck, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/src/context/LanguageContext";
import content from "@/src/locales/resources/cna-application.json";
import { siteConfig } from "@/src/constants/siteConfig";

/* Clean layout: soft gray page, pill labels with a number chip, large light
   headings, rounded bento cards. Navy #101B33 + gold #C79A3B.
   #8A6423 = gold for small text on light surfaces (contrast).
   Flat: 1px borders only, no shadows, no hover effects, no transitions.
   Focus rings are kept for keyboard users. */

const container = "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8";
const focusGold =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C79A3B]";
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
          <SectionHead
            n="02"
            label={t.formBadge}
            title={t.formTitle}
            desc={t.formDesc}
          />

          {/* Careers - CNA/HHA Application (EN). Embed code supplied by the client;
              do not alter the form's fields or wording (carrier-reviewed consent text). */}
          <div className="w-full">
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/CVmf48hEsjtgJ7Wim2tX"
              style={{ width: "100%", height: "100%", minHeight: "700px", border: "none", borderRadius: "8px" }}
              id="inline-CVmf48hEsjtgJ7Wim2tX"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Careers - CNA/HHA Application (EN)"
              data-height="2923"
              data-layout-iframe-id="inline-CVmf48hEsjtgJ7Wim2tX"
              data-form-id="CVmf48hEsjtgJ7Wim2tX"
              data-cookie-consent="true"
              data-cookie-consent-provider="auto"
              title="Careers - CNA/HHA Application (EN)"
            />
            <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" />
          </div>
          <p className="mt-4 text-center text-sm text-[#101B33]/70">
            {language === "es" ? "Consulte nuestros " : "See our "}
            <Link href="/terms-of-service" className="font-semibold underline underline-offset-4">
              {language === "es" ? "Términos de SMS" : "SMS Terms"}
            </Link>
            {language === "es" ? " y nuestra " : " and "}
            <Link href="/privacy-policy" className="font-semibold underline underline-offset-4">
              {language === "es" ? "Política de Privacidad" : "Privacy Policy"}
            </Link>
            .
          </p>
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
