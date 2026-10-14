"use client";

import { useEffect } from "react";
import { Phone } from "lucide-react";
import { useLanguage } from "@/src/context/LanguageContext";

/* Restyled Request Care page featuring the HIPAA Jotform embed.
   Brand: navy #07162C · gold #E4B95A · canvas #F4F4F2 */

const container = "mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8";
const heading =
  "ohh-serif font-light leading-tight tracking-tight text-[#07162C]";
const cardWhite = "rounded-3xl border border-[#07162C]/10 bg-white p-6 sm:p-10";
const focusGold =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E4B95A]";

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

export default function RequestCarePage() {
  const { language } = useLanguage();

  // Load Jotform embed script dynamically & handle privacy-safe submission analytics events
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if ((window as any).jotformEmbedHandler) {
        (window as any).jotformEmbedHandler(
          "iframe[id='JotFormIFrame-262855342857165']",
          "https://form.jotform.com/"
        );
      }
    };

    const handleMessage = (event: MessageEvent) => {
      if (
        event.origin.includes("jotform.com") &&
        typeof event.data === "string" &&
        event.data.includes("action=submissionCompleted")
      ) {
        // Privacy-safe analytics counter (no form answers transmitted)
        if (typeof window !== "undefined" && (window as any).gtag) {
          (window as any).gtag("event", "request_care_form_submitted", {
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

  const t = {
    en: {
      badge: "Patient Inquiry Form",
      title: "Request care or ask a question",
      subtitle:
        "Fill out the secure form below and a member of our intake team will call you within one business day.",
      nextTitle: "What happens next",
      next1Title: "You send the form",
      next1Desc: "Tell us who needs care and how to reach you.",
      next2Title: "We call you",
      next2Desc: "Our intake team calls within one business day.",
      next3Title: "We talk through options",
      next3Desc: "We go over the care that fits and the next steps.",
      needNow: "Need to talk to someone now?",
      hours: "Monday–Friday, 9:00 a.m.–5:00 p.m.",
    },
    es: {
      badge: "Solicitud de Atención",
      title: "Solicitar atención domiciliaria",
      subtitle:
        "Complete el formulario seguro a continuación y un miembro de nuestro equipo se comunicará con usted dentro de un día hábil.",
      nextTitle: "Qué sigue",
      next1Title: "Usted envía el formulario",
      next1Desc: "Díganos quién necesita atención y cómo contactarle.",
      next2Title: "Le llamamos",
      next2Desc:
        "Nuestro equipo de admisiones le llama dentro de un día hábil.",
      next3Title: "Hablamos de las opciones",
      next3Desc: "Revisamos la atención adecuada y los próximos pasos.",
      needNow: "¿Necesita hablar con alguien ahora?",
      hours: "Lunes a viernes, 9:00 a.m.–5:00 p.m.",
    },
  }[language === "es" ? "es" : "en"];

  const steps = [
    { title: t.next1Title, desc: t.next1Desc },
    { title: t.next2Title, desc: t.next2Desc },
    { title: t.next3Title, desc: t.next3Desc },
  ];

  return (
    <main className="min-h-screen bg-[#F4F4F2] text-base leading-relaxed text-[#07162C]/80">
      {/* ===== Header: centered ===== */}
      <section className="px-4 pb-10 pt-14 text-center sm:px-6 lg:pb-14 lg:pt-20">
        <div className="mx-auto max-w-3xl">
          <Pill label={t.badge} />
          <h1 className={`${heading} mt-6 text-4xl sm:text-5xl lg:text-6xl`}>
            {t.title}
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base text-[#07162C]/70 sm:text-lg">
            {t.subtitle}
          </p>
        </div>
      </section>

      {/* ===== What happens next: bento row ===== */}
      <section aria-labelledby="next-title" className="px-4 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <h2 id="next-title" className="mb-5 text-center">
            <Pill n="01" label={t.nextTitle} />
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <div
                key={s.title}
                className="flex min-h-[200px] flex-col justify-between rounded-3xl border border-[#07162C]/10 bg-[#E9EAE5] p-6"
              >
                <span
                  aria-hidden
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-[#07162C] text-xs font-semibold text-[#E4B95A]"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="ohh-serif text-lg font-medium leading-snug text-[#07162C]">
                    {s.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-snug text-[#07162C]/70">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}

            <div className="flex min-h-[200px] flex-col justify-between rounded-3xl bg-[#07162C] p-6 text-white md:col-span-2 lg:col-span-1">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E4B95A] text-[#07162C]">
                <Phone size={16} aria-hidden />
              </span>
              <div>
                <p className="text-sm text-white/75">{t.needNow}</p>
                <a
                  href="tel:+19728489174"
                  className={`mt-1 inline-block rounded-sm text-2xl font-semibold text-[#E4B95A] ${focusGold}`}
                >
                  (972) 848-9174
                </a>
                <p className="mt-1 text-xs text-white/70">{t.hours}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Jotform Embed Container ===== */}
      <section className="px-4 pb-16 pt-12 sm:px-6 lg:pb-24 lg:pt-16">
        <div className={`mx-auto max-w-3xl ${cardWhite}`}>
          <iframe
            id="JotFormIFrame-262855342857165"
            title="Request Care"
            onLoad={() => window.parent.scrollTo(0, 0)}
            allowTransparency={true}
            allow="geolocation; microphone; camera; fullscreen; payment"
            src="https://form.jotform.com/262855342857165?source_page=/request-care"
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
