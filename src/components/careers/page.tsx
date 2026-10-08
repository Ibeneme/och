"use client";

import Link from "next/link";
import { Phone, ArrowRight, Briefcase, Clock, Check } from "lucide-react";
import { useLanguage } from "@/src/context/LanguageContext";
import content from "@/src/locales/resources/careers.json";
import { siteConfig } from "@/src/constants/siteConfig";

/* Clean layout: soft gray page, pill labels with a number chip, large light
   centered headings, rounded bento cards. navy #07162C, gold #E4B95A,
   gold-d #996515 (small text on light), card #E9EAE5, gold-tint #F6EBD2.
   Flat: 1px borders only, fully rounded buttons, no shadows, no hover
   effects, no transitions. Focus rings are kept for keyboard users. */

const container = "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8";
const heading =
  "ohh-serif font-light leading-tight tracking-tight text-[#07162C]";
const focusGold =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E4B95A]";
const focusNavy =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#07162C]";
const btn =
  "inline-flex items-center justify-center gap-2 rounded-full border px-7 py-3.5 text-sm font-semibold";
const btnGold = `${btn} border-[#E4B95A] bg-[#E4B95A] text-[#07162C] ${focusGold}`;
const btnGoldOutline = `${btn} border-[#E4B95A]/60 text-[#E4B95A] ${focusGold}`;
const btnNavy = `${btn} border-[#07162C] bg-[#07162C] text-[#E4B95A] ${focusNavy}`;
const btnNavyOutline = `${btn} border-[#07162C]/40 text-[#07162C] ${focusNavy}`;
const card = "rounded-3xl border border-[#07162C]/10 bg-[#E9EAE5]";
const textLink = `font-semibold text-[#07162C] underline decoration-[#E4B95A] decoration-2 underline-offset-4 ${focusNavy}`;

function Pill({ n, label }: { n?: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[#07162C]/10 bg-[#E9EAE5] py-1.5 pl-1.5 pr-4 text-xs font-medium text-[#07162C]">
      {n ? (
        <span
          aria-hidden="true"
          className="flex h-6 w-6 items-center justify-center rounded-full bg-[#07162C] text-[10px] font-semibold text-[#E4B95A]"
        >
          {n}
        </span>
      ) : (
        <span
          aria-hidden="true"
          className="ml-2.5 h-1.5 w-1.5 rounded-full bg-[#996515]"
        />
      )}
      {label}
    </span>
  );
}

function SectionHead({
  n,
  label,
  title,
  desc,
}: {
  n: string;
  label: string;
  title: string;
  desc?: string;
}) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <Pill n={n} label={label} />
      <h2 className={`${heading} mt-5 text-3xl sm:text-4xl lg:text-5xl`}>
        {title}
      </h2>
      {desc && (
        <p className="mx-auto mt-4 max-w-2xl text-base text-[#07162C]/70">
          {desc}
        </p>
      )}
    </div>
  );
}

function ArrowCircle() {
  return (
    <span
      aria-hidden="true"
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#07162C]/20 text-[#07162C]"
    >
      <ArrowRight size={16} />
    </span>
  );
}

export default function CareersPage() {
  const { language } = useLanguage();
  const t = content[language as "en" | "es"] || content.en;

  const stats = [
    { label: "Nurse-Founded Leadership", sub: "Clinical Excellence" },
    { label: "Serving Clients Since 2010", sub: "Trusted Track Record" },
    { label: "Individualized Care", sub: "Person-Centered Approach" },
    { label: "Dignity & Independence", sub: "At-Home Living" },
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
    },
    {
      title: "Clinical Accountability",
      desc: "Nurse-led standards and professional growth opportunities.",
    },
    {
      title: "Reliable Support",
      desc: "We support patients, families, caregivers—and our team members.",
    },
    {
      title: "Nurse-Founded Culture",
      desc: "Led by Angela Ananti, BSN, RN, with more than two decades of nursing experience.",
    },
  ];

  const applyHref = "/careers/cna-home-health-aide-application";
  const phoneHref = `tel:${siteConfig.contact.phoneTel}`;

  return (
    <main className="bg-[#F4F4F2] text-[#07162C]">
      {/* ===== Announcement strip ===== */}
      <div className="bg-[#07162C]">
        <p className="mx-auto max-w-6xl px-4 py-2.5 text-center text-sm font-medium text-[#E4B95A]">
          {t.announcement}
        </p>
      </div>

      {/* ===== Header: centered ===== */}
      <section className="px-4 pb-10 pt-14 text-center sm:px-6 lg:pb-14 lg:pt-24">
        <div className="mx-auto max-w-4xl">
          <Pill label={t.badge} />
          <h1 className={`${heading} mt-6 text-4xl sm:text-5xl lg:text-7xl`}>
            {t.titleMain}{" "}
            <span className="text-[#996515]">{t.titleHighlight}</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-[#07162C]/70 sm:text-lg">
            {t.description}
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href={applyHref} className={btnNavy}>
              <span>{t.joinCnaNet}</span>
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <a href={phoneHref} className={btnNavyOutline}>
              <Phone size={16} aria-hidden="true" />
              <span>
                {t.callText} {siteConfig.contact.phone}
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* ===== Stats bento: first card carries the ot_a.svg background ===== */}
      <section className="pb-16 lg:pb-24">
        <div className={container}>
          <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`relative flex min-h-[180px] flex-col justify-between overflow-hidden p-6 ${
                  i === 0 ? "rounded-3xl bg-[#07162C] text-white" : card
                }`}
              >
                {i === 0 && (
                  <>
                    <img
                      src="/images/services/ot_a.svg"
                      alt=""
                      aria-hidden="true"
                      className="absolute inset-0 h-full w-full object-cover opacity-15"
                    />
                  </>
                )}
                <span
                  aria-hidden="true"
                  className={`relative flex h-9 w-9 items-center justify-center rounded-full text-xs font-semibold ${
                    i === 0
                      ? "bg-[#E4B95A] text-[#07162C]"
                      : "bg-[#07162C] text-[#E4B95A]"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="relative">
                  <dt
                    className={`text-sm font-semibold ${
                      i === 0 ? "text-[#E4B95A]" : "text-[#996515]"
                    }`}
                  >
                    {s.sub}
                  </dt>
                  <dd className="ohh-serif mt-1 text-xl font-normal leading-snug">
                    {s.label}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ===== Open roles ===== */}
      <section className="border-t border-[#07162C]/10 py-16 lg:py-24">
        <div className={container}>
          <SectionHead
            n="01"
            label={t.openRolesBadge}
            title={t.openRolesTitle}
            desc={t.openRolesDesc}
          />

          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {roles.map((r) => (
              <li key={r.role} className={`flex flex-col p-6 ${card}`}>
                <span className="w-fit rounded-full border border-[#07162C]/20 bg-white px-3 py-1 text-xs font-medium text-[#07162C]">
                  {r.tag}
                </span>
                <h3 className="ohh-serif mt-6 text-xl font-normal leading-snug">
                  {r.role}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-[#07162C]/70">
                  {r.desc}
                </p>
                <a
                  href={phoneHref}
                  className={`mt-6 inline-flex items-center justify-between gap-3 text-sm ${textLink} no-underline`}
                >
                  <span className="underline decoration-[#E4B95A] decoration-2 underline-offset-4">
                    {t.inquireApply}
                  </span>
                  <ArrowCircle />
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col items-center gap-5 text-center">
            <p className="max-w-3xl rounded-2xl border border-[#E4B95A] bg-[#F6EBD2] px-5 py-4 text-sm text-[#07162C]/80">
              {t.qualifiedNotice}
            </p>
            <Link href={applyHref} className={btnNavy}>
              {t.viewCnaNet}
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== Why work with us ===== */}
      <section className="border-t border-[#07162C]/10 py-16 lg:py-24">
        <div className={container}>
          <SectionHead
            n="02"
            label={t.whyBadge}
            title={t.whyTitle}
            desc={t.whyDesc}
          />

          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {whyItems.map((item, i) => (
              <li
                key={item.title}
                className={`flex min-h-[240px] flex-col justify-between p-6 ${card}`}
              >
                <span
                  aria-hidden="true"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-[#07162C] text-xs font-semibold text-[#E4B95A]"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="ohh-serif text-xl font-normal leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#07162C]/70">
                    {item.desc}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <p className="mx-auto mt-8 max-w-3xl text-center text-base text-[#07162C]/70">
            {t.whySubFooter}
          </p>
        </div>
      </section>

      {/* ===== Talent year-round: rounded navy banner ===== */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl rounded-3xl bg-[#07162C] px-6 py-14 text-white sm:px-12 sm:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 py-1.5 pl-3 pr-4 text-xs font-medium text-[#E4B95A]">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-[#E4B95A]"
              />
              {t.talentYearRound}
            </span>
            <h2 className="ohh-serif mt-5 text-3xl font-light leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              {t.talentTitle}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-white/75 sm:text-lg">
              {t.talentDesc}
            </p>
          </div>

          <ul className="mx-auto mt-10 grid max-w-3xl gap-x-8 gap-y-3 sm:grid-cols-2">
            {t.talentList.map((item: string) => (
              <li
                key={item}
                className="flex items-start gap-3 border-t border-white/15 pt-3"
              >
                <Check
                  size={18}
                  className="mt-0.5 shrink-0 text-[#E4B95A]"
                  aria-hidden="true"
                />
                <span className="text-sm leading-snug text-white/90 sm:text-base">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-10 text-center">
            <Link href={applyHref} className={btnGold}>
              <span>{t.applyTalentBtn}</span>
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== What we offer ===== */}
      <section className="py-16 lg:py-24">
        <div className={container}>
          <SectionHead
            n="03"
            label={t.offerBadge}
            title={t.offerTitle}
            desc={t.offerDesc}
          />

          <div className="grid gap-4 md:grid-cols-3">
            <div
              className={`flex min-h-[260px] flex-col justify-between p-7 ${card}`}
            >
              <Briefcase
                size={26}
                className="text-[#996515]"
                aria-hidden="true"
              />
              <div>
                <h3 className="ohh-serif text-2xl font-normal leading-snug">
                  {t.compTitle}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#07162C]/70">
                  {t.compDesc}
                </p>
              </div>
            </div>
            <div
              className={`flex min-h-[260px] flex-col justify-between p-7 ${card}`}
            >
              <Clock size={26} className="text-[#996515]" aria-hidden="true" />
              <div>
                <h3 className="ohh-serif text-2xl font-normal leading-snug">
                  {t.schedTitle}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#07162C]/70">
                  {t.schedDesc}
                </p>
              </div>
            </div>
            <div className="flex min-h-[260px] flex-col justify-between gap-6 rounded-3xl bg-[#07162C] p-7 text-white">
              <Phone size={26} className="text-[#E4B95A]" aria-hidden="true" />
              <div>
                <h3 className="ohh-serif text-2xl font-normal leading-snug">
                  {t.questionsTitle}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/75">
                  {t.questionsDesc}
                </p>
                <a href={phoneHref} className={`${btnGold} mt-5`}>
                  <Phone size={16} aria-hidden="true" />
                  <span>{t.inquireOpenings}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== EEO + employee portal ===== */}
      <section className="pb-16 lg:pb-24">
        <div className={`${container} grid gap-4 lg:grid-cols-12`}>
          <div className={`p-7 sm:p-10 lg:col-span-7 ${card}`}>
            <h2 className="ohh-serif text-2xl font-normal leading-snug sm:text-3xl">
              {t.eeoTitle}
            </h2>
            <p className="mt-4 max-w-prose text-[#07162C]/75">{t.eeoText1}</p>
            <p className="mt-4 max-w-prose text-[#07162C]/75">
              {t.eeoText2}{" "}
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className={textLink}
              >
                {siteConfig.contact.email}
              </a>{" "}
              or{" "}
              <a href={phoneHref} className={textLink}>
                {siteConfig.contact.phone}
              </a>
              .
            </p>
          </div>

          <div className="flex flex-col justify-between gap-8 rounded-3xl bg-[#E4B95A] p-7 text-[#07162C] sm:p-10 lg:col-span-5">
            <div>
              <p className="text-sm font-semibold text-[#07162C]/75">
                {t.portalBadge}
              </p>
              <h3 className="ohh-serif mt-2 text-2xl font-normal leading-snug">
                {t.portalTitle}
              </h3>
              <p className="mt-3 text-[#07162C]/85">{t.portalDesc}</p>
            </div>
            <Link
              href="/employee-resources"
              className={`${btnNavy} self-start`}
            >
              <span>{t.portalBtn}</span>
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
