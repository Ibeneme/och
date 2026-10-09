"use client";

import { Award, Heart } from "lucide-react";
import { useLanguage } from "@/src/context/LanguageContext";
import content from "@/src/locales/about-us/leadership.json";

/* Restyled to match Request Care layout:
   soft gray canvas #F4F4F2, pill badges with number chips, large light headings,
   rounded bento cards, flat style with 1px borders. */

const container = "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8";
const heading =
  "ohh-serif font-light leading-tight tracking-tight text-[#07162C]";
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

export default function JourneyPhilosophySection() {
  const { language } = useLanguage();
  const t = content[language as "en" | "es"] || content.en;

  const MILESTONES = [
    {
      year: "2003",
      tag: t.milestone1Tag,
      kicker: t.milestone1Kicker,
      kickerRest: t.milestone1KickerRest,
      body: t.milestone1Body,
      footer: t.milestone1Footer,
    },
    {
      year: "2010",
      tag: t.milestone2Tag,
      kicker: t.milestone2Kicker,
      kickerRest: t.milestone2KickerRest,
      body: t.milestone2Body,
      footer: t.milestone2Footer,
    },
    {
      year: "2026",
      tag: t.milestone3Tag,
      kicker: t.milestone3Kicker,
      kickerRest: t.milestone3KickerRest,
      body: t.milestone3Body,
      footer: t.milestone3Footer,
    },
  ];

  const PRINCIPLES = [
    { title: t.phil1Title, desc: t.phil1Desc },
    { title: t.phil2Title, desc: t.phil2Desc },
  ];

  return (
    <div className="bg-[#F4F4F2] text-base leading-relaxed text-[#07162C]/80">
      {/* ===== Journey Timeline Bento Grid ===== */}
      <section id="journey" className="px-4 py-16 sm:px-6 lg:py-24">
        <div className={container}>
          <div className="mb-10 text-center">
            <Pill label={t.journeyEyebrow} />
            <h2 className={`${heading} mt-4 text-3xl sm:text-4xl lg:text-5xl`}>
              {t.journeyTitle}
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {MILESTONES.map((m, i) => (
              <div
                key={m.year}
                className={`flex flex-col justify-between p-6 sm:p-8 ${card}`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="ohh-serif text-4xl font-light text-[#07162C]">
                      {m.year}
                    </span>
                    <span className="rounded-full border border-[#07162C]/10 bg-white px-3 py-1 text-[10px] font-semibold text-[#07162C]">
                      {m.tag}
                    </span>
                  </div>

                  <h3 className="ohh-serif mt-6 text-xl font-medium leading-snug">
                    <span className="block text-[#07162C]">{m.kicker}</span>
                    <span className="block text-[#07162C]/60">
                      {m.kickerRest}
                    </span>
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-[#07162C]/75">
                    {m.body}
                  </p>
                </div>

                <p className="mt-6 border-l-2 border-[#996515] pl-3 text-xs font-semibold leading-snug text-[#996515]">
                  {m.footer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Philosophy Bento Cards ===== */}
      <section id="philosophy" className="px-4 pb-20 sm:px-6 lg:pb-24">
        <div className={container}>
          <div className="mb-10 text-center">
            <Pill label={t.philEyebrow} />
            <h2 className={`${heading} mt-4 text-3xl sm:text-4xl lg:text-5xl`}>
              {t.philTitle}
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {PRINCIPLES.map((p, i) => (
              <div key={i} className={cardWhite}>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#07162C] text-xs font-semibold text-[#E4B95A]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3
                  className={`${heading} mt-6 text-2xl font-medium leading-snug`}
                >
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#07162C]/75 sm:text-base">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
