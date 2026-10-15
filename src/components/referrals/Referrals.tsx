"use client";

import { useEffect } from "react";
import { Mail, Printer, Phone } from "lucide-react";
import { useLanguage } from "@/src/context/LanguageContext";
import content from "@/src/locales/resources/referrals.json";
import { siteConfig } from "@/src/constants/siteConfig";

/* Restyled to match Request Care layout:
   soft gray page #F4F4F2, pill labels with a number chip, large light headings,
   rounded bento cards, flat style with 1px borders. */

const FOCUS_GOLD =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E4B95A]";
const HEADING =
  "ohh-serif font-light leading-tight tracking-tight text-[#07162C]";
const container = "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8";
const card = "rounded-3xl border border-[#07162C]/10 bg-[#E9EAE5]";
const cardWhite = "rounded-3xl border border-[#07162C]/10 bg-white p-6 sm:p-10";

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

export default function ReferralsPage() {
  const { language } = useLanguage();
  const t = content[language as "en" | "es"] || content.en;

  // Load Jotform embed script dynamically & track submissions via analytics event listener
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if ((window as any).jotformEmbedHandler) {
        (window as any).jotformEmbedHandler(
          "iframe[id='JotFormIFrame-262856103710149']",
          "https://form.jotform.com/"
        );
      }
    };

    // Listen for Jotform submission events to trigger privacy-safe analytics counts
    const handleMessage = (event: MessageEvent) => {
      if (
        event.origin.includes("jotform.com") &&
        typeof event.data === "string" &&
        event.data.includes("action=submissionCompleted")
      ) {
        // Privacy-safe analytics event (no form answers transmitted)
        if (typeof window !== "undefined" && (window as any).gtag) {
          (window as any).gtag("event", "referral_form_submitted", {
            event_category: "Conversion",
            non_interaction: false,
          });
        }
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
      window.removeEventListener("message", handleMessage);
    };
  }, []);

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
                  className="mt-4 inline-block text-sm font-semibold text-[#996515] underline underline-offset-4"
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

      {/* ===== HIPAA Jotform Embed Section ===== */}
      <section id="referral-form" className="px-4 pb-16 pt-4 sm:px-6 lg:pb-24">
        <div className={`mx-auto max-w-3xl ${cardWhite}`}>
          <div className="mb-8 text-center">
            <Pill n="01" label="Online Submission" />
            <h2 className={`${HEADING} mt-4 text-3xl sm:text-4xl`}>
              {t.formTitle}
            </h2>
            <p className="mt-2 text-sm text-[#07162C]/70">{t.formSubtitle}</p>
          </div>

          <iframe
            id="JotFormIFrame-262856103710149"
            title="Refer a Patient"
            onLoad={() => window.parent.scrollTo(0, 0)}
            allowTransparency={true}
            allow="geolocation; microphone; camera; fullscreen; payment"
            src="https://form.jotform.com/262856103710149?source_page=/referrals"
            frameBorder="0"
            style={{
              minWidth: "100%",
              maxWidth: "100%",
              height: "690px",
              border: "none",
            }}
            scrolling="no"
          />
        </div>
      </section>
    </main>
  );
}
