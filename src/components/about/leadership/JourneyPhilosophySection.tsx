"use client";

import { Award, Heart } from "lucide-react";
import { useLanguage } from "@/src/context/LanguageContext";
import content from "@/src/locales/about-us/leadership.json";

/* Brand: navy #07162C + gold #E4B95A / #C89B3C. Flat design: borders, no shadows.
   #9A7420 is a darker gold used only for small text on light backgrounds (contrast). */
const container = "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8";

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
    <div>
      {/* ===== Journey: one navy band, laid out as a real timeline ===== */}
      <section
        id="journey"
        className="scroll-mt-24 bg-[#07162C] py-20 text-white lg:py-28"
      >
        <div className={container}>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#E4B95A] [&>svg]:h-4 [&>svg]:w-4">
              <Award aria-hidden="true" /> {t.journeyEyebrow}
            </div>
            <h2 className="ohh-serif mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              {t.journeyTitle}
            </h2>
          </div>

          <ol className="mt-16 grid gap-12 lg:grid-cols-3 lg:gap-10">
            {MILESTONES.map((m, i) => {
              const isFirst = i === 0;
              const isLast = i === MILESTONES.length - 1;
              return (
                <li key={m.year} className="relative pl-10 lg:pl-0 lg:pt-12">
                  {/* Timeline node */}
                  <span
                    aria-hidden="true"
                    className={`absolute left-0 top-1 h-6 w-6 rounded-full border-2 border-[#E4B95A] ${
                      isLast ? "bg-[#E4B95A]" : "bg-[#07162C]"
                    }`}
                  />
                  {/* Connector: vertical on mobile, horizontal on desktop */}
                  {!isLast && (
                    <>
                      <span
                        aria-hidden="true"
                        className="absolute -bottom-12 left-[11px] top-8 w-px bg-white/20 lg:hidden"
                      />
                      <span
                        aria-hidden="true"
                        className="absolute -right-10 left-8 top-[15px] hidden h-px bg-white/20 lg:block"
                      />
                    </>
                  )}

                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
                    <span className="ohh-serif text-6xl font-semibold leading-none tracking-tight text-[#E4B95A] lg:text-7xl">
                      {m.year}
                    </span>
                    <span className="rounded-full border border-[#E4B95A]/60 px-3 py-1 text-xs font-semibold text-[#E4B95A]">
                      {m.tag}
                    </span>
                  </div>

                  <h3 className="ohh-serif mt-8 text-2xl font-semibold leading-snug">
                    <span className="block text-white">{m.kicker}</span>
                    <span className="block text-white/55">{m.kickerRest}</span>
                  </h3>

                  <p className="mt-5 max-w-prose text-base leading-relaxed text-white/75">
                    {m.body}
                  </p>

                  <p className="mt-6 border-l-2 border-[#E4B95A] pl-4 text-sm font-semibold leading-snug text-[#E4B95A]">
                    {m.footer}
                  </p>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* ===== Philosophy: quiet editorial split ===== */}
      <section
        id="philosophy"
        className="scroll-mt-24 bg-[#FBF8F2] py-20 lg:py-28"
      >
        <div className={container}>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-28">
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#9A7420] [&>svg]:h-4 [&>svg]:w-4">
                  <Heart aria-hidden="true" /> {t.philEyebrow}
                </div>
                <h2 className="ohh-serif mt-4 text-3xl font-semibold leading-tight tracking-tight text-[#07162C] sm:text-4xl lg:text-5xl">
                  {t.philTitle}
                </h2>
              </div>
            </div>

            <div className="lg:col-span-7">
              {PRINCIPLES.map((p, i) => (
                <div
                  key={i}
                  className={`border-t-2 border-[#07162C] py-8 sm:py-10 ${
                    i === PRINCIPLES.length - 1
                      ? "border-b border-b-[#E8DFC8]"
                      : ""
                  }`}
                >
                  <h3 className="ohh-serif text-2xl font-semibold leading-snug text-[#07162C] sm:text-3xl">
                    {p.title}
                  </h3>
                  <p className="mt-4 max-w-prose text-base leading-relaxed text-[#4A5A6B] sm:text-lg">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
