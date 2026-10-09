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

const valueIcons = [Award, UserCheck, ShieldCheck, Users, MapPinned];

export default function CoreValuesSection() {
  const { language } = useLanguage();
  const t = content[language as "en" | "es"] || content.en;

  const FeaturedIcon = HeartHandshake;

  return (
    <section
      id="values"
      className="mx-auto w-full max-w-6xl scroll-mt-24 px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mb-10 text-center">
        <Pill label={t.eyebrow} />
        <h2 className={`${heading} mt-4 text-3xl sm:text-4xl lg:text-5xl`}>
          {t.title}
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm text-[#07162C]/70 sm:text-base">
          {t.subtitle}
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-12">
        {/* Featured value bento */}
        <div className="flex flex-col justify-between rounded-3xl bg-[#07162C] p-6 text-white sm:p-10 lg:col-span-5">
          <div>
            <div className="flex items-center gap-3 text-[#E4B95A]">
              <FeaturedIcon size={32} strokeWidth={1.5} />
              <span className="rounded-full bg-[#E4B95A] px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-[#07162C]">
                {t.featuredTag}
              </span>
            </div>
            <div className="mt-8">
              <div className="ohh-serif text-3xl font-light leading-tight text-[#E4B95A] sm:text-4xl">
                {t.featuredTitle}
              </div>
              <div className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-white/50">
                {t.featuredLabel}
              </div>
            </div>
          </div>
          <p className="mt-8 border-t border-white/15 pt-6 text-sm leading-relaxed text-white/75 sm:text-base">
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
                  className={`flex flex-col justify-between p-6 sm:p-8 ${
                    isLastOdd ? "sm:col-span-2" : ""
                  } ${isDark ? "rounded-3xl bg-[#07162C] text-white" : card}`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full ${
                        isDark
                          ? "bg-[#E4B95A] text-[#07162C]"
                          : "bg-[#07162C] text-[#E4B95A]"
                      }`}
                    >
                      <Icon size={18} strokeWidth={1.75} />
                    </div>
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider ${
                        isDark ? "text-[#E4B95A]" : "text-[#996515]"
                      }`}
                    >
                      {value.tag}
                    </span>
                  </div>
                  <div className="mt-6">
                    <h3 className="ohh-serif text-xl font-medium leading-snug">
                      {value.title}
                    </h3>
                    <p
                      className={`mt-2 text-sm leading-relaxed ${
                        isDark ? "text-white/75" : "text-[#07162C]/70"
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
