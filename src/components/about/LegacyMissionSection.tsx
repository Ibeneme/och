"use client";

import { useLanguage } from "@/src/context/LanguageContext";
import content from "@/src/locales/about-us/about.json";

/* Brand: navy #07162C + gold #E4B95A / #C89B3C. Flat design: borders, no shadows. */
function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-[#C89B3C]">
      <span className="h-px w-8 bg-[#C89B3C]" />
      {children}
    </div>
  );
}

export default function LegacyMissionSection() {
  const { language } = useLanguage();
  const t = content[language as "en" | "es"] || content.en;

  return (
    <section
      id="legacy"
      className="mx-auto w-full max-w-7xl scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="max-w-3xl">
        <Eyebrow>{t.eyebrow}</Eyebrow>
        <h2 className="ohh-serif mt-4 text-3xl font-semibold leading-tight tracking-tight text-[#07162C] sm:text-4xl lg:text-5xl">
          {t.title}
        </h2>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {/* Column 1 - navy */}
        <div className="flex flex-col justify-between rounded-3xl bg-[#07162C] p-8 text-white sm:p-10">
          <div>
            <div className="flex items-center justify-between gap-4">
              <span className="ohh-serif text-5xl font-semibold leading-none text-[#E4B95A]">
                {t.col1Year}
              </span>
              <span className="rounded-full bg-[#E4B95A] px-3 py-1 text-[11px] font-black uppercase tracking-wider text-[#07162C]">
                {t.col1Tag}
              </span>
            </div>
            <div className="ohh-serif mt-8 text-2xl font-semibold leading-snug">
              <span className="block">{t.col1Kicker}</span>
              <span className="block text-white/60">{t.col1Rest}</span>
            </div>
          </div>
          <div className="mt-8">
            <p className="text-sm leading-relaxed text-white/75 sm:text-base">
              {t.col1Body}
            </p>
            <div className="mt-6 border-t border-white/15 pt-4 text-xs font-bold uppercase tracking-wider text-[#E4B95A]">
              {t.col1Footer}
            </div>
          </div>
        </div>

        {/* Column 2 - gold */}
        <div className="flex flex-col justify-between rounded-3xl bg-[#E4B95A] p-8 text-[#07162C] sm:p-10">
          <div>
            <div className="flex items-center justify-between gap-4">
              <span className="ohh-serif text-5xl font-semibold leading-none">
                {t.col2Year}
              </span>
              <span className="rounded-full bg-[#07162C] px-3 py-1 text-[11px] font-black uppercase tracking-wider text-[#E4B95A]">
                {t.col2Tag}
              </span>
            </div>
            <div className="ohh-serif mt-8 text-2xl font-semibold leading-snug">
              <span className="block">{t.col2Kicker}</span>
              <span className="block text-[#07162C]/70">{t.col2Rest}</span>
            </div>
          </div>
          <div className="mt-8">
            <p className="text-sm leading-relaxed text-[#07162C]/85 sm:text-base">
              {t.col2Body}
            </p>
            <div className="mt-6 border-t border-[#07162C]/20 pt-4 text-xs font-bold uppercase tracking-wider">
              {t.col2Footer}
            </div>
          </div>
        </div>

        {/* Mission & vision - full width */}
        <div className="grid gap-8 rounded-3xl border border-[#E8DFC8] bg-[#FBF8F2] p-8 sm:p-10 md:col-span-2 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <span className="ohh-serif text-3xl font-semibold leading-none text-[#07162C]">
                {t.missionTitle}
              </span>
              <span className="rounded-full bg-[#07162C] px-3 py-1 text-[11px] font-black uppercase tracking-wider text-[#E4B95A]">
                {t.missionTag}
              </span>
            </div>
            <div className="ohh-serif mt-6 text-2xl font-semibold leading-snug text-[#07162C]">
              <span className="block">{t.missionKicker}</span>
              <span className="block text-[#C89B3C]">{t.missionRest}</span>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-[#C89B3C]">
                  {t.missionHeading}
                </h4>
                <p className="mt-3 text-sm leading-relaxed text-[#3A4657] sm:text-base">
                  {t.missionText}
                </p>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-[#C89B3C]">
                  {t.visionHeading}
                </h4>
                <p className="mt-3 text-sm leading-relaxed text-[#3A4657] sm:text-base">
                  {t.visionText}
                </p>
              </div>
            </div>
            <div className="mt-8 border-t border-[#E8DFC8] pt-4 text-xs font-bold uppercase tracking-wider text-[#07162C]">
              {t.founderFooter}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
