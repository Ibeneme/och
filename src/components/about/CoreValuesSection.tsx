"use client";

import {
  HeartHandshake,
  Award,
  UserCheck,
  ShieldCheck,
  Users,
  MapPinned,
} from "lucide-react";
import { useLanguage } from "@/src/context/LanguageContext";
import content from "@/src/locales/about-us/values.json";

/* Brand: navy #07162C + gold #E4B95A / #C89B3C. Flat design: borders, no shadows. */
function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-[#C89B3C]">
      <span className="h-px w-8 bg-[#C89B3C]" />
      {children}
    </div>
  );
}

const valueIcons = [Award, UserCheck, ShieldCheck, Users, MapPinned];

export default function CoreValuesSection() {
  const { language } = useLanguage();
  const t = content[language as "en" | "es"] || content.en;

  const FeaturedIcon = HeartHandshake;

  return (
    <section
      id="values"
      className="mx-auto w-full max-w-7xl scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="max-w-3xl">
        <Eyebrow>{t.eyebrow}</Eyebrow>
        <h2 className="ohh-serif mt-4 text-3xl font-semibold leading-tight tracking-tight text-[#07162C] sm:text-4xl lg:text-5xl">
          {t.title}
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#5B6B7C]">
          {t.subtitle}
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-12">
        {/* Featured value */}
        <div className="flex flex-col justify-between rounded-3xl bg-[#07162C] p-8 text-white sm:p-10 lg:col-span-5">
          <div>
            <div className="flex items-center gap-3 text-[#E4B95A]">
              <FeaturedIcon className="h-10 w-10" strokeWidth={1.5} />
              <span className="rounded-full bg-[#E4B95A] px-3 py-1 text-[11px] font-black uppercase tracking-wider text-[#07162C]">
                {t.featuredTag}
              </span>
            </div>
            <div className="mt-10">
              <div className="ohh-serif text-4xl font-semibold leading-tight text-[#E4B95A] sm:text-5xl">
                {t.featuredTitle}
              </div>
              <div className="mt-2 text-xs font-bold uppercase tracking-[0.16em] text-white/55">
                {t.featuredLabel}
              </div>
            </div>
          </div>
          <p className="mt-10 border-t border-white/15 pt-6 text-sm leading-relaxed text-white/75 sm:text-base">
            {t.featuredDesc}
          </p>
        </div>

        {/* Values grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
          {t.valuesList.map(
            (
              value: {
                title: string;
                description: string;
                tag: string;
                panel: string;
              },
              idx: number
            ) => {
              const Icon = valueIcons[idx % valueIcons.length];
              const isDark = value.panel === "dark";
              const isLastOdd =
                t.valuesList.length % 2 === 1 &&
                idx === t.valuesList.length - 1;
              return (
                <div
                  key={value.title}
                  className={`flex flex-col justify-between rounded-3xl border p-7 transition-colors ${
                    isLastOdd ? "sm:col-span-2" : ""
                  } ${
                    isDark
                      ? "border-[#07162C] bg-[#07162C] text-white hover:border-[#E4B95A]"
                      : "border-[#E8DFC8] bg-[#FBF8F2] text-[#07162C] hover:border-[#C89B3C]"
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-2xl ${
                        isDark
                          ? "bg-[#E4B95A]/15 text-[#E4B95A]"
                          : "bg-[#07162C] text-[#E4B95A]"
                      }`}
                    >
                      <Icon size={18} strokeWidth={1.75} />
                    </div>
                    <span
                      className={`text-[11px] font-bold uppercase tracking-wider ${
                        isDark ? "text-[#E4B95A]" : "text-[#C89B3C]"
                      }`}
                    >
                      {value.tag}
                    </span>
                  </div>
                  <div className="mt-8">
                    <h3 className="ohh-serif text-xl font-semibold leading-snug">
                      {value.title}
                    </h3>
                    <p
                      className={`mt-2 text-sm leading-relaxed ${
                        isDark ? "text-white/70" : "text-[#5B6B7C]"
                      }`}
                    >
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
}
