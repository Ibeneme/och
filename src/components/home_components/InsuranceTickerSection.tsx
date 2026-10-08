"use client";

import React from "react";
import { useLanguage } from "@/src/context/LanguageContext";

export default function InsuranceTickerSection() {
  const { language } = useLanguage();
  const isSpanish = language === "es";

  const insuranceList = [
    "Medicare",
    "Texas Medicaid",
    "Molina Healthcare of Texas",
    "Superior HealthPlan",
    "Wellpoint Texas",
    "Aetna Better Health of Texas",
    "VA Community Care",
    isSpanish ? "Pago Privado" : "Private Pay",
  ];

  return (
    <section className="relative w-full bg-[#051122] py-12 border-t border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 text-center space-y-6">
        <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-[#E4B95A]">
          Insurance and payment we accept
        </h3>

        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-5xl mx-auto">
          {insuranceList.map((name) => (
            <span
              key={name}
              className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/90 text-sm font-medium tracking-wide hover:border-[#E4B95A]/50 transition-colors"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
