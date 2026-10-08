"use client";

import Link from "next/link";
import {
  Phone,
  ArrowRight,
  Sparkles,
  Briefcase,
  Clock,
  Check,
} from "lucide-react";
import { useLanguage } from "@/src/context/LanguageContext";
import content from "@/src/locales/resources/careers.json";
import { siteConfig } from "@/src/constants/siteConfig";

/* Brand: navy #07162C + gold #E4B95A / #C89B3C. Flat design: borders only, NO shadows.
   #9A7420 = darker gold, used only for small text on light backgrounds (contrast). */

const container = "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8";
const sectionTitle =
  "ohh-serif text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl";
const badgeLight = "inline-block text-sm font-semibold text-[#9A7420]";
const badgeDark = "inline-block text-sm font-semibold text-[#E4B95A]";
const btnGold =
  "group inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#E4B95A] bg-[#E4B95A] px-7 py-3.5 text-base font-bold text-[#07162C] transition-colors hover:bg-transparent hover:text-[#E4B95A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E4B95A]";
const btnOutlineDark =
  "inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:border-[#E4B95A] hover:text-[#E4B95A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E4B95A]";
const btnNavy =
  "group inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#07162C] bg-[#07162C] px-7 py-3.5 text-base font-bold text-white transition-colors hover:bg-transparent hover:text-[#07162C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#07162C]";

/* ---- Random service illustrations: /public/images/services/ot_a.svg … ot_m.svg ----
   Shuffled once with a fixed seed so server and client always agree (no hydration
   mismatch). Change SEED to get a different random mix. */
const SEED = 2026;
const OT_IMAGES = "abcdefghijklm"
  .split("")
  .map((l) => `/images/services/ot_${l}.svg`);

function seededShuffle<T>(items: T[], seed: number): T[] {
  const arr = [...items];
  let s = seed >>> 0;
  const rand = () => {
    s = (s + 0x6d2b79f5) >>> 0;
    let t = s;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const SHUFFLED = seededShuffle(OT_IMAGES, SEED);

export default function CareersPage() {
  const { language } = useLanguage();
  const t = content[language as "en" | "es"] || content.en;

  const stats = [
    {
      number: "01",
      label: "Nurse-Founded Leadership",
      sub: "Clinical Excellence",
    },
    {
      number: "02",
      label: "Serving Clients Since 2010",
      sub: "Trusted Track Record",
    },
    {
      number: "03",
      label: "Individualized Care",
      sub: "Person-Centered Approach",
    },
    { number: "04", label: "Dignity & Independence", sub: "At-Home Living" },
  ];

  const roles = [
    {
      role: "Registered Nurses (RN)",
      desc: "Skilled nursing visits, care coordination & clinical leadership",
      tag: "Clinical",
    },
    {
      role: "Licensed Vocational / Practical Nurses (LVN/LPN)",
      desc: "Hands-on clinical care under RN supervision",
      tag: "Clinical",
    },
    {
      role: "Physical Therapists",
      desc: "Mobility, strength & functional recovery in the home",
      tag: "Therapy",
    },
    {
      role: "Occupational Therapists",
      desc: "Daily living skills & adaptive strategies",
      tag: "Therapy",
    },
    {
      role: "Speech-Language Pathologists",
      desc: "Communication, swallowing & cognitive support",
      tag: "Therapy",
    },
    {
      role: "Medical Social Workers",
      desc: "Psychosocial support & resource coordination",
      tag: "Support",
    },
    {
      role: "Home Health Aides / CNAs",
      desc: "Personal care, companionship & daily assistance",
      tag: "Care",
    },
    {
      role: "Intake & Office Support",
      desc: "Patient onboarding & referral management",
      tag: "Operations",
    },
    {
      role: "Administrative Roles",
      desc: "Operations, scheduling & team coordination",
      tag: "Operations",
    },
  ];

  const whyItems = [
    {
      title: "Compassion & Dignity",
      desc: "Every interaction is grounded in respect for the patient and family.",
      image: SHUFFLED[0],
      alt: "Caregiver holding patient's hand",
    },
    {
      title: "Clinical Accountability",
      desc: "Nurse-led standards and professional growth opportunities.",
      image: SHUFFLED[1],
      alt: "Nurse reviewing care plan",
    },
    {
      title: "Reliable Support",
      desc: "We support patients, families, caregivers—and our team members.",
      image: SHUFFLED[2],
      alt: "Team supporting a family",
    },
    {
      title: "Nurse-Founded Culture",
      desc: "Led by Angela Ananti, BSN, RN, with more than two decades of nursing experience.",
      image: SHUFFLED[3],
      alt: "Founder and leadership team",
    },
  ];

  const talentImage = SHUFFLED[4];

  return (
    <main className="bg-white text-[#07162C]">
      {/* ===== Announcement bar ===== */}
      <div className="bg-[#E4B95A] text-[#07162C]">
        <p className="mx-auto flex max-w-7xl items-center justify-center gap-3 px-4 py-2.5 text-center text-sm font-semibold">
          <span
            aria-hidden="true"
            className="h-2 w-2 flex-shrink-0 rounded-full bg-[#07162C]"
          />
          {t.announcement}
        </p>
      </div>

      {/* ===== Hero ===== */}
      <section className="bg-[#07162C] py-20 text-white lg:py-28">
        <div className={container}>
          <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#E4B95A]/50 px-4 py-1.5 text-sm font-semibold text-[#E4B95A]">
                <Sparkles size={14} aria-hidden="true" />
                {t.badge}
              </div>
              <h1 className="ohh-serif mt-6 text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
                {t.titleMain}{" "}
                <span className="text-[#E4B95A]">{t.titleHighlight}</span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
                {t.description}
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/careers/cna-home-health-aide-application"
                  className={btnGold}
                >
                  <span>{t.joinCnaNet}</span>
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
                <a
                  href={`tel:${siteConfig.contact.phoneTel}`}
                  className={btnOutlineDark}
                >
                  <Phone size={18} aria-hidden="true" />
                  <span>
                    {t.callText} {siteConfig.contact.phone}
                  </span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-white/15 p-2">
                {stats.map((item, idx) => (
                  <div
                    key={item.number}
                    className={`flex items-center gap-5 px-5 py-5 sm:px-6 ${
                      idx !== stats.length - 1 ? "border-b border-white/10" : ""
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#E4B95A] text-[#07162C]"
                    >
                      <Check size={18} strokeWidth={3} />
                    </span>
                    <div className="flex flex-col">
                      <span className="text-sm text-white/55">{item.sub}</span>
                      <span className="ohh-serif text-lg font-semibold leading-snug text-white sm:text-xl">
                        {item.label}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Open roles ===== */}
      <section className="bg-[#FBF8F2] py-20 lg:py-28">
        <div className={container}>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-28">
                <span className={badgeLight}>{t.openRolesBadge}</span>
                <h2 className={`${sectionTitle} mt-4 text-[#07162C]`}>
                  {t.openRolesTitle}
                </h2>
                <p className="mt-5 text-base leading-relaxed text-[#4A5A6B]">
                  {t.openRolesDesc}
                </p>
                <Link
                  href="/careers/cna-home-health-aide-application"
                  className="group mt-7 inline-flex items-center gap-2 border-b-2 border-[#C89B3C] pb-1 text-base font-bold text-[#07162C] transition-colors hover:text-[#9A7420]"
                >
                  {t.viewCnaNet}
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="border-t-2 border-[#07162C]">
                {roles.map((item) => (
                  <div
                    key={item.role}
                    className="group flex flex-col gap-3 border-b border-[#E8DFC8] py-6 transition-colors hover:bg-white sm:flex-row sm:items-center sm:gap-6 sm:px-4"
                  >
                    <span className="w-fit flex-shrink-0 rounded-full border border-[#C89B3C] px-3 py-1 text-xs font-semibold text-[#9A7420] sm:w-28 sm:text-center">
                      {item.tag}
                    </span>
                    <div className="flex-1">
                      <h3 className="ohh-serif text-xl font-semibold leading-snug text-[#07162C]">
                        {item.role}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-[#4A5A6B] sm:text-base">
                        {item.desc}
                      </p>
                    </div>
                    <div className="flex flex-shrink-0 items-center gap-2 text-sm font-bold text-[#07162C] transition-colors group-hover:text-[#9A7420]">
                      <span>{t.inquireApply}</span>
                      <ArrowRight
                        size={14}
                        className="transition-transform group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p className="mt-10 max-w-3xl border-l-2 border-[#C89B3C] pl-4 text-sm leading-relaxed text-[#4A5A6B]">
            {t.qualifiedNotice}
          </p>
        </div>
      </section>

      {/* ===== Why work with us ===== */}
      <section className="bg-white py-20 lg:py-28">
        <div className={container}>
          <div className="max-w-3xl">
            <span className={badgeLight}>{t.whyBadge}</span>
            <h2 className={`${sectionTitle} mt-4 text-[#07162C]`}>
              {t.whyTitle}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[#4A5A6B] sm:text-lg">
              {t.whyDesc}
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyItems.map((item) => (
              <div
                key={item.title}
                className="flex flex-col overflow-hidden rounded-3xl border border-[#E8DFC8] bg-white transition-colors hover:border-[#C89B3C]"
              >
                <div className="flex aspect-[4/3] items-center justify-center border-b border-[#E8DFC8] bg-[#FBF8F2] p-6">
                  <img
                    src={item.image}
                    alt={item.alt}
                    loading="lazy"
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="ohh-serif text-xl font-semibold leading-snug text-[#07162C]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#4A5A6B]">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-10 max-w-3xl text-base leading-relaxed text-[#4A5A6B]">
            {t.whySubFooter}
          </p>
        </div>
      </section>

      {/* ===== Talent year-round ===== */}
      <section className="bg-[#07162C] py-20 text-white lg:py-28">
        <div className={container}>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <span className={badgeDark}>{t.talentYearRound}</span>
              <h2 className={`${sectionTitle} mt-4`}>{t.talentTitle}</h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
                {t.talentDesc}
              </p>

              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {t.talentList.map((item: string) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#E4B95A] text-[#07162C]"
                    >
                      <Check size={12} strokeWidth={3} />
                    </span>
                    <span className="text-sm font-medium leading-snug text-white/90 sm:text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="/careers/cna-home-health-aide-application"
                className={`${btnGold} mt-10`}
              >
                <span>{t.applyTalentBtn}</span>
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>

            <div className="flex aspect-[4/3] items-center justify-center rounded-3xl border border-[#E4B95A]/40 bg-[#FBF8F2] p-8 sm:p-12">
              <img
                src={talentImage}
                alt="CNA providing home care"
                loading="lazy"
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== What we offer ===== */}
      <section className="bg-[#FBF8F2] py-20 lg:py-28">
        <div className={container}>
          <div className="max-w-3xl">
            <span className={badgeLight}>{t.offerBadge}</span>
            <h2 className={`${sectionTitle} mt-4 text-[#07162C]`}>
              {t.offerTitle}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[#4A5A6B] sm:text-lg">
              {t.offerDesc}
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            <div className="rounded-3xl border border-[#E8DFC8] bg-white p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#07162C] text-[#E4B95A]">
                <Briefcase size={22} aria-hidden="true" />
              </div>
              <h3 className="ohh-serif mt-6 text-2xl font-semibold leading-snug text-[#07162C]">
                {t.compTitle}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-[#4A5A6B]">
                {t.compDesc}
              </p>
            </div>

            <div className="rounded-3xl border border-[#E8DFC8] bg-white p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#07162C] text-[#E4B95A]">
                <Clock size={22} aria-hidden="true" />
              </div>
              <h3 className="ohh-serif mt-6 text-2xl font-semibold leading-snug text-[#07162C]">
                {t.schedTitle}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-[#4A5A6B]">
                {t.schedDesc}
              </p>
            </div>

            <div className="flex flex-col justify-between gap-8 rounded-3xl bg-[#07162C] p-8 text-white">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E4B95A] text-[#07162C]">
                  <Phone size={20} aria-hidden="true" />
                </div>
                <h3 className="ohh-serif mt-6 text-2xl font-semibold leading-snug">
                  {t.questionsTitle}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-white/75">
                  {t.questionsDesc}
                </p>
              </div>
              <a
                href={`tel:${siteConfig.contact.phoneTel}`}
                className={btnGold}
              >
                <Phone size={16} aria-hidden="true" />
                <span>{t.inquireOpenings}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== EEO + employee portal ===== */}
      <section className="bg-white py-20 lg:py-24">
        <div className={container}>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <h2 className="ohh-serif text-2xl font-semibold leading-snug text-[#07162C] sm:text-3xl">
                {t.eeoTitle}
              </h2>
              <p className="mt-5 max-w-prose text-base leading-relaxed text-[#4A5A6B]">
                {t.eeoText1}
              </p>
              <p className="mt-4 max-w-prose text-base leading-relaxed text-[#4A5A6B]">
                {t.eeoText2}{" "}
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="font-semibold text-[#07162C] underline decoration-[#C89B3C] decoration-2 underline-offset-4 hover:text-[#9A7420]"
                >
                  {siteConfig.contact.email}
                </a>{" "}
                or{" "}
                <a
                  href={`tel:${siteConfig.contact.phoneTel}`}
                  className="font-semibold text-[#07162C] underline decoration-[#C89B3C] decoration-2 underline-offset-4 hover:text-[#9A7420]"
                >
                  {siteConfig.contact.phone}
                </a>
                .
              </p>
            </div>

            <div className="flex flex-col justify-between gap-8 rounded-3xl bg-[#E4B95A] p-8 text-[#07162C] lg:col-span-5">
              <div>
                <span className="text-sm font-bold text-[#07162C]/70">
                  {t.portalBadge}
                </span>
                <h3 className="ohh-serif mt-3 text-2xl font-semibold leading-snug">
                  {t.portalTitle}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-[#07162C]/85">
                  {t.portalDesc}
                </p>
              </div>
              <Link href="/employee-resources" className={btnNavy}>
                <span>{t.portalBtn}</span>
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
