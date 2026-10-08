"use client";

import { useLanguage } from "@/src/context/LanguageContext";
import content from "@/src/locales/about-us/cta.json";

export default function BottomCTA() {
  const { language } = useLanguage();
  const t = content[language as "en" | "es"] || content.en;

  return (
    <section className="py-20 px-6 lg:px-12 max-w-7xl mx-auto">
      <div className="bg-gradient-to-br from-[#0A1F3F] to-[#040e1c] border border-[#1E3A63] rounded-3xl p-8 sm:p-12 text-center space-y-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-[#D4AF37]/10 via-transparent to-transparent" />

        <h2 className="text-3xl sm:text-4xl font-bold text-white relative z-10">
          {t.title}
        </h2>

        <p className="text-slate-400 max-w-2xl mx-auto text-base relative z-10">
          {t.subtitle}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2 relative z-10">
          <a
            href="/contact"
            className="bg-[#D4AF37] hover:bg-[#E5C158] text-[#07162C] font-semibold px-8 py-4 rounded-xl transition-all text-sm"
          >
            {t.consultation}
          </a>
          <a
            href="/referrals"
            className="bg-[#132E54] hover:bg-[#1E3A63] text-white border border-[#234575] font-medium px-8 py-4 rounded-xl transition-all text-sm"
          >
            {t.refer}
          </a>
        </div>
      </div>
    </section>
  );
}