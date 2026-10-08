"use client";

import Link from "next/link";
import { Home, Phone, ArrowRight, AlertCircle } from "lucide-react";
import { useLanguage } from "@/src/context/LanguageContext";
import { siteConfig } from "@/src/constants/siteConfig";

const container = "mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8";
const focusNavy =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#07162C]";

const btnGold = `inline-flex items-center justify-center gap-2 rounded-full bg-[#E4B95A] px-7 py-3.5 text-base font-bold text-[#07162C] transition-colors hover:bg-[#EDC878] ${focusNavy}`;
const btnOutlineNavy = `inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#07162C] px-7 py-3.5 text-base font-bold text-[#07162C] transition-colors hover:bg-[#07162C] hover:text-white ${focusNavy}`;

export default function NotFound() {
  const { language } = useLanguage();
  const isSpanish = language === "es";

  const t = {
    en: {
      errorCode: "Error 404",
      badge: "Page Not Found",
      title: "We couldn't find the page you're looking for.",
      description:
        "The link may be outdated, or the page may have been moved. Let us help you find your way back to safe care resources across North Texas.",
      homeBtn: "Return to Home",
      contactBtn: "Call Office Support",
      quickLinksTitle: "Looking for something specific?",
      linkCare: "Request Care",
      linkAbout: "Leadership Team",
      linkContact: "Contact & Locations",
      linkCareers: "Careers",
    },
    es: {
      errorCode: "Error 404",
      badge: "Página No Encontrada",
      title: "No pudimos encontrar la página que busca.",
      description:
        "Es posible que el enlace esté desactualizado o que la página haya sido movida. Permítanos ayudarle a regresar a nuestros recursos de atención médica.",
      homeBtn: "Volver al Inicio",
      contactBtn: "Llamar a la Oficina",
      quickLinksTitle: "¿Busca algo específico?",
      linkCare: "Solicitar Atención",
      linkAbout: "Equipo de Liderazgo",
      linkContact: "Contacto y Oficinas",
      linkCareers: "Empleos",
    },
  }[isSpanish ? "es" : "en"];

  const currentYear = new Date().getFullYear();

  return (
    <main className="min-h-screen bg-[#FBF8F2] text-[#07162C] flex flex-col justify-between overflow-x-hidden">
      {/* Main Content Hero Card */}
      <div className={`${container} py-16 lg:py-24 my-auto`}>
        <div className="rounded-3xl border border-[#E8DFC8] bg-white p-8 sm:p-12 lg:p-16 shadow-sm">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#C89B3C]/40 bg-[#E4B95A]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#9A7420]">
              <AlertCircle size={14} aria-hidden="true" />
              {t.errorCode} — {t.badge}
            </div>

            <h1 className="ohh-serif mt-6 text-3xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl text-[#07162C]">
              {t.title}
            </h1>

            <p className="mt-5 text-base leading-relaxed text-[#4A5A6B] sm:text-lg">
              {t.description}
            </p>

            {/* Action Buttons */}
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link href="/" className={btnGold}>
                <Home size={18} aria-hidden="true" />
                <span>{t.homeBtn}</span>
              </Link>
              <a
                href={`tel:${siteConfig?.contact?.phoneTel || "9723251598"}`}
                className={btnOutlineNavy}
              >
                <Phone size={18} aria-hidden="true" />
                <span>
                  {t.contactBtn}: {siteConfig?.contact?.phone || "972-325-1598"}
                </span>
              </a>
            </div>
          </div>

          {/* Quick Helpful Navigation Grid */}
          <div className="mt-16 border-t border-[#E8DFC8] pt-10">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9A7420] mb-6">
              {t.quickLinksTitle}
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Link
                href="/contact"
                className="group flex items-center justify-between rounded-2xl border border-[#E8DFC8] bg-[#FBF8F2] p-5 text-sm font-semibold text-[#07162C] transition-colors hover:border-[#C89B3C]"
              >
                <span>{t.linkCare}</span>
                <ArrowRight
                  size={16}
                  className="text-[#C89B3C] transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
              <Link
                href="/about-us/leadership"
                className="group flex items-center justify-between rounded-2xl border border-[#E8DFC8] bg-[#FBF8F2] p-5 text-sm font-semibold text-[#07162C] transition-colors hover:border-[#C89B3C]"
              >
                <span>{t.linkAbout}</span>
                <ArrowRight
                  size={16}
                  className="text-[#C89B3C] transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
              <Link
                href="/contact"
                className="group flex items-center justify-between rounded-2xl border border-[#E8DFC8] bg-[#FBF8F2] p-5 text-sm font-semibold text-[#07162C] transition-colors hover:border-[#C89B3C]"
              >
                <span>{t.linkContact}</span>
                <ArrowRight
                  size={16}
                  className="text-[#C89B3C] transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
              <Link
                href="/careers"
                className="group flex items-center justify-between rounded-2xl border border-[#E8DFC8] bg-[#FBF8F2] p-5 text-sm font-semibold text-[#07162C] transition-colors hover:border-[#C89B3C]"
              >
                <span>{t.linkCareers}</span>
                <ArrowRight
                  size={16}
                  className="text-[#C89B3C] transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer copyright space anchor */}
      <div className="py-6 text-center text-xs text-[#4A5A6B]">
        &copy; {currentYear} One Community Home Health. All rights reserved.
      </div>
    </main>
  );
}
