"use client";

import { Award, Phone, ArrowRight, Shield } from "lucide-react";
import { useLanguage } from "@/src/context/LanguageContext";
import content from "@/src/locales/about-us/leadership.json";

/* Brand: navy #07162C + gold #E4B95A / #C89B3C. Flat design: borders, no shadows. */
const container = "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8";
const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E4B95A]";

export default function LeadershipHero() {
  const { language } = useLanguage();
  const t = content[language as "en" | "es"] || content.en;

  return (
    <section className="relative overflow-hidden bg-[#07162C] text-white">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#0A2140]/60 via-transparent to-transparent" />
      <div className={`${container} relative py-20 lg:py-28`}>
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left: identity */}
          <div className="lg:col-span-7">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-[#E4B95A]">
              <Award size={14} />
              {t.eyebrow}
            </div>

            <div>
              <h1 className="ohh-serif text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
                {t.name}{" "}
                <span className="text-[#E4B95A]">{t.nameHighlight}</span>
              </h1>
              <p className="mt-4 text-sm font-bold uppercase tracking-[0.16em] text-white/60 sm:text-base">
                {t.role}
              </p>
            </div>

            <svg
              viewBox="0 0 400 28"
              width="180"
              height="16"
              aria-hidden="true"
              className="mt-6"
            >
              <path
                d="M0 14 H130 L145 3 L160 25 L175 14 H400"
                fill="none"
                stroke="#E4B95A"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
              {t.desc}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="tel:9723251598"
                className={`inline-flex items-center justify-center gap-2 rounded-full bg-[#E4B95A] px-7 py-3.5 font-bold text-[#07162C] transition-colors hover:bg-[#EDC878] ${focusRing}`}
              >
                <Phone size={16} />
                {t.callBtn}
              </a>
              <a
                href="/referrals"
                className={`group inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-3.5 font-semibold text-white transition-colors hover:border-[#E4B95A] hover:text-[#E4B95A] ${focusRing}`}
              >
                {t.referBtn}
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>

          {/* Right: profile card */}
          <div className="space-y-4 lg:col-span-5">
            <div className="rounded-3xl bg-[#FBF8F2] p-8 text-[#07162C] sm:p-10">
              <div className="relative mb-6 h-[84px] w-[84px]">
                <svg
                  viewBox="0 0 100 100"
                  width="84"
                  height="84"
                  className="absolute inset-0"
                >
                  {Array.from({ length: 16 }).map((_, i) => {
                    const angle = (i / 16) * Math.PI * 2;
                    const x1 = 50 + Math.cos(angle) * 46;
                    const y1 = 50 + Math.sin(angle) * 46;
                    const x2 = 50 + Math.cos(angle) * 40;
                    const y2 = 50 + Math.sin(angle) * 40;
                    return (
                      <line
                        key={i}
                        x1={x1}
                        y1={y1}
                        x2={x2}
                        y2={y2}
                        stroke="#C89B3C"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    );
                  })}
                  <circle
                    cx="50"
                    cy="50"
                    r="34"
                    fill="#07162C"
                    stroke="#C89B3C"
                    strokeWidth="2"
                  />
                </svg>
                <span className="ohh-serif absolute inset-0 flex items-center justify-center text-xl font-semibold text-[#E4B95A]">
                  AA
                </span>
              </div>

              <div className="inline-flex items-center gap-1.5 rounded-full bg-[#07162C] px-3 py-1 text-[11px] font-black uppercase tracking-wider text-[#E4B95A]">
                <Award size={13} />
                {t.clinicalExpert}
              </div>
              <h3 className="ohh-serif mt-4 text-2xl font-semibold leading-snug">
                Angela Ananti, BSN, RN
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#5B6B7C]">
                Founder, Administrator, and Director of Nursing
              </p>
            </div>

            <div className="flex items-center justify-between gap-4 rounded-2xl border border-[#E4B95A]/30 bg-[#E4B95A]/10 px-6 py-4 text-[#E4B95A]">
              <span className="text-xs font-bold uppercase tracking-[0.16em]">
                {t.servingBadge}
              </span>
              <Shield size={18} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}