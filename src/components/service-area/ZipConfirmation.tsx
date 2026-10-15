"use client";

import { Phone } from "lucide-react";
import { useLanguage } from "@/src/context/LanguageContext";
import { siteConfig } from "@/src/constants/siteConfig";

/**
 * "Not sure if we cover your address?" line (A4 #4). Render it everywhere the
 * service area appears: homepage block, /service-area, and every city page.
 */
export default function ZipConfirmation({
  tone = "light",
  className = "",
}: {
  tone?: "light" | "dark";
  className?: string;
}) {
  const { language } = useLanguage();
  const { phone, phoneTel } = siteConfig.contact;
  const dark = tone === "dark";

  const lead =
    language === "es"
      ? "¿No está seguro de si cubrimos su dirección?"
      : "Not sure if we cover your address?";
  const rest =
    language === "es"
      ? "y lo confirmamos en una sola llamada."
      : "and we'll confirm in one call.";
  const call = language === "es" ? "Llame al" : "Call";

  return (
    <p
      className={`flex flex-wrap items-center gap-x-1.5 gap-y-1 text-sm leading-relaxed ${
        dark ? "text-white/75" : "text-[#07162C]/75"
      } ${className}`}
      data-zip-confirmation
    >
      <span>{lead}</span>
      <a
        href={`tel:${phoneTel}`}
        className={`inline-flex items-center gap-1.5 font-semibold underline decoration-[#E4B95A] underline-offset-4 ${
          dark ? "text-[#E4B95A]" : "text-[#07162C]"
        }`}
      >
        <Phone size={14} aria-hidden="true" />
        {call} {phone}
      </a>
      <span>{rest}</span>
    </p>
  );
}
