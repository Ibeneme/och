"use client";

import { useLanguage } from "@/src/context/LanguageContext";
import content from "@/src/locales/about-us/quality.json";

/* Brand: navy #07162C + gold #E4B95A / #C89B3C. Flat design: borders, no shadows. */
function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-[#C89B3C]">
      <span className="h-px w-8 bg-[#C89B3C]" />
      {children}
    </div>
  );
}

export default function CommitmentCareSection() {
  const { language } = useLanguage();
  const t = content[language as "en" | "es"] || content.en;

  return (
    <section
      id="quality"
      className="mx-auto w-full max-w-7xl scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      {/* Header */}
      <div className="grid items-end gap-6 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-12">
          <Eyebrow>{t.eyebrow}</Eyebrow>
        </div>
        <div className="lg:col-span-7">
          <h2 className="ohh-serif text-3xl font-semibold leading-tight tracking-tight text-[#07162C] sm:text-4xl lg:text-5xl">
            {t.titleMain}{" "}
            <span className="text-[#C89B3C]">{t.titleHighlight}</span>{" "}
            {t.titleEnd}
          </h2>
        </div>
        <p className="text-base leading-relaxed text-[#5B6B7C] lg:col-span-5">
          {t.subtitle}
        </p>
      </div>

      {/* Three pillars */}
      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        <div className="flex flex-col justify-between rounded-3xl border border-[#E8DFC8] bg-[#FBF8F2] p-8">
          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#07162C] text-[#E4B95A]">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 10.5V11.25m-15 0V19.5"
                />
              </svg>
            </div>
            <h3 className="ohh-serif mt-6 text-2xl font-semibold leading-snug text-[#07162C]">
              {t.card1Title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[#5B6B7C] sm:text-base">
              {t.card1Desc}
            </p>
          </div>
          <div className="mt-8 border-t border-[#E8DFC8] pt-4 text-xs font-bold uppercase tracking-wider text-[#C89B3C]">
            {t.card1Footer}
          </div>
        </div>

        <div className="flex flex-col justify-between rounded-3xl bg-[#07162C] p-8 text-white">
          <div>
            <div className="inline-block rounded-full bg-[#E4B95A] px-3 py-1 text-[11px] font-black uppercase tracking-wider text-[#07162C]">
              {t.leadershipBadge}
            </div>
            <div className="mt-6">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/55">
                {t.leaderRole}
              </p>
              <h3 className="ohh-serif mt-2 text-2xl font-semibold leading-snug text-[#E4B95A]">
                {t.leaderName}
              </h3>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/75 sm:text-base">
              {t.leaderDesc}
            </p>
          </div>
          <div className="mt-8 border-t border-white/15 pt-4">
            <span className="text-xs font-bold uppercase tracking-wider text-white/60">
              {t.leaderTitle}
            </span>
          </div>
        </div>

        <div className="flex flex-col justify-between rounded-3xl border border-[#E8DFC8] bg-[#F3ECDC] p-8">
          <div>
            <h3 className="ohh-serif text-2xl font-semibold leading-snug text-[#07162C]">
              {t.approachTitle}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[#5B6B7C] sm:text-base">
              {t.approachDesc}
            </p>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-4 border-y border-[#E8DFC8] py-5">
            <div>
              <p className="ohh-serif text-3xl font-semibold leading-none text-[#07162C]">
                {t.statExperience}
              </p>
              <p className="mt-2 text-xs font-bold uppercase tracking-wider text-[#C89B3C]">
                {t.expLabel}
              </p>
            </div>
            <div>
              <p className="ohh-serif text-3xl font-semibold leading-none text-[#07162C]">
                {t.statCounties}
              </p>
              <p className="mt-2 text-xs font-bold uppercase tracking-wider text-[#C89B3C]">
                {t.countiesLabel}
              </p>
            </div>
          </div>
          <p className="mt-6 text-sm italic leading-relaxed text-[#3A4657]">
            {t.quote}
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="mt-6 grid divide-y divide-white/10 overflow-hidden rounded-3xl bg-[#07162C] text-white sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {[
          { n: t.stat1Num, l: t.stat1Label },
          { n: t.stat2Num, l: t.stat2Label },
          { n: t.stat3Num, l: t.stat3Label },
        ].map((s) => (
          <div key={s.l} className="px-8 py-9 text-center">
            <p className="ohh-serif text-4xl font-semibold leading-none text-[#E4B95A] sm:text-5xl">
              {s.n}
            </p>
            <p className="mt-3 text-xs font-bold uppercase tracking-[0.16em] text-white/65">
              {s.l}
            </p>
          </div>
        ))}
      </div>

      {/* Footprint + map */}
      <div className="mt-6 overflow-hidden rounded-3xl border border-[#E8DFC8] bg-white">
        <div className="flex flex-col gap-5 p-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-2xl">
            <h3 className="ohh-serif text-2xl font-semibold leading-snug text-[#07162C]">
              {t.footprintTitle}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[#5B6B7C] sm:text-base">
              {t.footprintDesc}
            </p>
          </div>
          <div className="flex-shrink-0">
            <span className="inline-block rounded-full bg-[#07162C] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#E4B95A]">
              {t.footprintPill}
            </span>
          </div>
        </div>

        <div className="h-[320px] w-full border-t border-[#E8DFC8] sm:h-[400px]">
          <iframe
            title="Dallas-Fort Worth Metroplex Service Area"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-97.70%2C32.40%2C-96.20%2C33.50&layer=mapnik&marker=32.7767%2C-96.7970"
            style={{ border: 0 }}
            className="h-full w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
