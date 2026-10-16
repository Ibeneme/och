"use client";

import {
  BookOpen,
  ShieldAlert,
  Users,
  Wallet,
  AlertTriangle,
  ExternalLink,
  HeartPulse,
  Briefcase,
  ClipboardList,
  Pill as PillIcon,
  Lock,
  Scale,
  ArrowDown,
  ArrowRight,
} from "lucide-react";
import Link from "@/src/components/LocaleLink";
import { useLanguage } from "@/src/context/LanguageContext";
import content from "@/src/locales/resources/employee-resources.json";
import { siteConfig } from "@/src/constants/siteConfig";

const PHONE = siteConfig.contact.phone;

const container = "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8";
const heading =
  "ohh-serif font-light leading-tight tracking-tight text-[#07162C]";
const cardWhite = "rounded-3xl border border-[#07162C]/10 bg-white p-6 sm:p-10";
const focusGold =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E4B95A]";

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

const Steps = ({
  items,
}: {
  items: { label: string; desc: string; action?: string; tone?: string }[];
}) => (
  <div className="mt-8 space-y-4">
    {items.map((item, idx) => (
      <div
        key={item.label}
        className="flex flex-col gap-4 rounded-3xl border border-[#07162C]/10 bg-[#F4F4F2] p-5 transition-colors sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:p-6"
      >
        <div className="flex items-start gap-4">
          <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[#07162C] font-mono text-sm font-semibold text-[#E4B95A]">
            {String(idx + 1).padStart(2, "0")}
          </span>
          <div>
            <span className="text-lg font-semibold text-[#07162C]">
              {item.label}
            </span>
            <p className="mt-1 max-w-2xl text-sm leading-relaxed text-[#07162C]/80">
              {item.desc}
            </p>
          </div>
        </div>
        {item.action && (
          <div className="w-fit flex-shrink-0 rounded-full bg-[#07162C] px-5 py-2.5 text-sm font-semibold text-[#E4B95A]">
            {item.action}
          </div>
        )}
      </div>
    ))}
  </div>
);

export default function EmployeeResourcesPage() {
  const { language } = useLanguage();
  const t = content[language as "en" | "es"] || content.en;

  const escalationMatrix = [
    {
      label: "Life-threatening emergency",
      desc: "Call 911 immediately for severe life-threatening medical emergencies.",
      action: "Dial 911",
    },
    {
      label: "Urgent clinical need",
      desc: "Use the 24/7 on-call clinical extension for immediate patient needs.",
      action: "On-call line",
    },
    {
      label: "Routine incidents",
      desc: "Submit official logs through standard agency reporting workflows.",
      action: "Documentation portal",
    },
    {
      label: "HR & payroll",
      desc: "Contact the administrative desk during standard operating hours.",
      action: "Mon–Fri, 9 AM–5 PM",
    },
    {
      label: "Compliance",
      desc: "Report ethics, safety, or confidentiality concerns directly.",
      action: "Compliance officer",
    },
  ];

  const incidentTypes = [
    {
      icon: HeartPulse,
      title: "Patient incidents",
      desc: "Report sudden clinical changes, falls, or unexpected adverse events immediately to clinical supervision.",
    },
    {
      icon: Briefcase,
      title: "Employee injuries",
      desc: "Report workplace injuries sustained on duty directly to HR and management immediately for proper documentation.",
    },
    {
      icon: ShieldAlert,
      title: "Safety hazards",
      desc: "Identify and report environmental risks in patient homes or workplaces threatening staff or patient well-being.",
    },
    {
      icon: ClipboardList,
      title: "Missed visits",
      desc: "Document and report any unfulfilled or missed visits immediately to ensure unbroken continuity of care.",
    },
    {
      icon: PillIcon,
      title: "Medication flags",
      desc: "Report discrepancies, missed doses, or adverse reactions involving medications instantly to clinical leadership.",
    },
    {
      icon: AlertTriangle,
      title: "Abuse & neglect",
      desc: "Suspected abuse, exploitation, or neglect must be reported instantly to state authorities and agency compliance.",
    },
    {
      icon: Lock,
      title: "Privacy & HIPAA",
      desc: "Report potential privacy breaches, unauthorized disclosures, or data vulnerabilities without delay.",
    },
    {
      icon: Scale,
      title: "Ethics & billing",
      desc: "Voice concerns regarding billing precision, regulatory standards, or unethical practices securely.",
    },
  ];

  const quickNav = [
    { href: "#handbook", tag: "Docs", label: "Employee Handbook" },
    { href: "#reporting", tag: "Safety", label: "Reporting Protocols" },
    { href: "#support", tag: "Desks", label: "HR & Payroll Support" },
  ];

  return (
    <main className="min-h-screen bg-[#F4F4F2] text-base leading-relaxed text-[#07162C]/80">
      {/* ===== Hero Header ===== */}
      <section className="px-4 pb-10 pt-14 text-center sm:px-6 lg:pb-14 lg:pt-20">
        <div className="mx-auto max-w-3xl">
          <Pill label={t.badge} />
          <h1 className={`${heading} mt-6 text-4xl sm:text-5xl lg:text-6xl`}>
            {t.titleMain}{" "}
            <span className="text-[#996515]">{t.titleHighlight}</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base text-[#07162C]/70 sm:text-lg">
            {t.description}
          </p>

          <nav
            aria-label="Quick links"
            className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2"
          >
            {quickNav.map((m) => (
              <a
                key={m.href}
                href={m.href}
                className={`group flex items-center justify-between gap-4 rounded-2xl border border-[#07162C]/15 bg-[#E9EAE5] px-5 py-4 transition-colors hover:border-[#07162C] hover:bg-[#07162C] hover:text-white ${focusGold}`}
              >
                <span>
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-[#996515] group-hover:text-[#E4B95A]">
                    {m.tag}
                  </span>
                  <span className="mt-0.5 block font-semibold text-[#07162C] group-hover:text-white">
                    {m.label}
                  </span>
                </span>
                <ArrowDown
                  size={18}
                  aria-hidden
                  className="shrink-0 text-[#07162C] group-hover:text-[#E4B95A]"
                />
              </a>
            ))}
          </nav>
        </div>
      </section>

      <div
        className={`${container} space-y-6 pb-16 pt-4 sm:space-y-8 lg:pb-24`}
      >
        {/* ===== Escalation Matrix ===== */}
        <section className={cardWhite}>
          <div className="border-b border-[#07162C]/10 pb-6">
            <Pill label={t.matrixCount} />
            <h2 className={`${heading} mt-4 text-2xl sm:text-3xl`}>
              {t.matrixHeading}
            </h2>
          </div>
          <Steps items={escalationMatrix} />
        </section>

        {/* ===== Handbook ===== */}
        <section id="handbook" className={`scroll-mt-24 ${cardWhite}`}>
          <div className="grid items-stretch gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <Pill label={t.handbookBadge} />
              <h2 className={`${heading} mt-4 text-2xl sm:text-3xl`}>
                {t.handbookTitle}
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-[#07162C]/80">
                {t.handbookDesc}
              </p>

              <div className="mt-8 grid max-w-md grid-cols-2 gap-4">
                <div className="rounded-2xl border border-[#07162C]/10 bg-[#F4F4F2] p-5">
                  <span className="block text-[11px] font-semibold uppercase tracking-wider text-[#996515]">
                    {t.effDate}
                  </span>
                  <span className="mt-1 block font-semibold text-[#07162C]">
                    {t.effVal}
                  </span>
                </div>
                <div className="rounded-2xl border border-[#07162C]/10 bg-[#F4F4F2] p-5">
                  <span className="block text-[11px] font-semibold uppercase tracking-wider text-[#996515]">
                    {t.statusLabel}
                  </span>
                  <span className="mt-1 block font-semibold text-[#07162C]">
                    {t.statusVal}
                  </span>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/download/employee-handbook.pdf"
                  download="Employee Handbook and Policy Manual (Rev. 1.0, effective 10/01/2026).pdf"
                  className={`inline-flex items-center justify-center rounded-full bg-[#07162C] px-7 py-3.5 font-semibold text-[#E4B95A] transition-colors hover:bg-[#0A2140] ${focusGold}`}
                >
                  {t.downloadPdf}
                </a>
                <button
                  onClick={() =>
                    alert("Acknowledgment form instructions dispatched via HR.")
                  }
                  className={`inline-flex items-center justify-center rounded-full border border-[#07162C] px-7 py-3.5 font-semibold text-[#07162C] transition-colors hover:bg-[#07162C] hover:text-[#E4B95A] ${focusGold}`}
                >
                  {t.ackInfo}
                </button>
              </div>
            </div>

            <div className="flex flex-col justify-between rounded-3xl bg-[#07162C] p-8 text-white sm:p-10 lg:col-span-5">
              <div>
                <span className="inline-block rounded-full bg-[#E4B95A] px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#07162C]">
                  {t.ackNoticeBadge}
                </span>
                <h3 className="ohh-serif mt-5 text-2xl font-light leading-snug text-[#E4B95A]">
                  {t.ackNoticeTitle}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/75">
                  {t.ackNoticeDesc}
                </p>
              </div>
              <p className="mt-8 border-t border-white/10 pt-5 text-xs leading-relaxed text-white/55">
                {t.directInquiries}
              </p>
            </div>
          </div>
        </section>

        {/* ===== HR & Payroll ===== */}
        <section id="support" className={`scroll-mt-24 ${cardWhite}`}>
          <div className="border-b border-[#07162C]/10 pb-6">
            <Pill label={t.hrBadge} />
            <h2 className={`${heading} mt-4 text-2xl sm:text-3xl`}>
              {t.hrTitle}
            </h2>
            <p className="mt-2 text-base text-[#07162C]/70">{t.hrDesc}</p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {[
              {
                icon: Users,
                title: t.hrDesk,
                ext: "972-325-1598 ext. HR",
                email: "hr@onechh.com",
              },
              {
                icon: Wallet,
                title: t.payrollDesk,
                ext: "972-325-1598 ext. Payroll",
                email: "payroll@onechh.com",
              },
            ].map((desk) => (
              <div
                key={desk.title}
                className="rounded-3xl border border-[#07162C]/10 bg-[#F4F4F2] p-8 transition-colors"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#07162C] text-[#E4B95A]">
                  <desk.icon size={20} />
                </div>
                <h3 className="ohh-serif mt-5 text-2xl font-medium text-[#07162C]">
                  {desk.title}
                </h3>
                <div className="mt-6 divide-y divide-[#07162C]/10 border-y border-[#07162C]/10">
                  <div className="flex items-center justify-between gap-6 py-3.5">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#996515]">
                      {t.phoneLabel}
                    </span>
                    <span className="text-right text-sm font-semibold text-[#07162C]">
                      {desk.ext}
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-6 py-3.5">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#996515]">
                      {t.emailLabel}
                    </span>
                    <span className="break-all text-right text-sm font-semibold text-[#07162C]">
                      {desk.email}
                    </span>
                  </div>
                </div>
                <div className="mt-5 text-sm text-[#07162C]/70">
                  <span className="mr-2 text-xs font-semibold uppercase tracking-wider text-[#996515]">
                    {t.operatingWindow}
                  </span>
                  {t.windowTime}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== EVV ===== */}
        <section className={cardWhite}>
          <div className="border-b border-[#07162C]/10 pb-6">
            <Pill label={t.evvBadge} />
            <h2 className={`${heading} mt-4 text-2xl sm:text-3xl`}>
              {t.evvTitle}
            </h2>
            <p className="mt-2 text-base text-[#07162C]/70">{t.evvDesc}</p>
          </div>

          <div className="mt-8">
            <Link
              href="/employee-resources/evv"
              className={`inline-flex items-center justify-center gap-2 rounded-full border border-[#07162C]/20 bg-white px-7 py-3.5 text-sm font-semibold text-[#07162C] transition-colors hover:border-[#07162C] ${focusGold}`}
            >
              {language === "es" ? "Ver la guía completa de EVV" : "View the full EVV guide"}
              <ArrowRight size={15} />
            </Link>
          </div>

          <div className="mt-8 flex flex-col gap-6 rounded-3xl border border-[#07162C]/10 bg-[#E9EAE5] p-7 sm:p-9 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <h4 className="ohh-serif text-xl font-medium text-[#07162C]">
                {t.portalTitle}
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-[#07162C]/75">
                {t.portalDesc}
              </p>
            </div>
            <a
              href="https://hhaexchange.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex flex-shrink-0 items-center justify-center gap-2 rounded-full bg-[#07162C] px-7 py-3.5 font-semibold text-[#E4B95A] transition-colors hover:bg-[#0A2140] ${focusGold}`}
            >
              {t.launchPortal}
              <ExternalLink size={15} />
            </a>
          </div>
        </section>

        {/* ===== Safety & Reporting ===== */}
        <section id="reporting" className={`scroll-mt-24 ${cardWhite}`}>
          <div className="border-b border-[#07162C]/10 pb-6">
            <Pill label={t.safetyBadge} />
            <h2 className={`${heading} mt-4 text-2xl sm:text-3xl`}>
              {t.safetyTitle}
            </h2>
            <p className="mt-2 text-base text-[#07162C]/70">{t.safetyDesc}</p>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {incidentTypes.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-[#07162C]/10 bg-[#F4F4F2] p-6 transition-colors"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#07162C] text-[#E4B95A]">
                  <item.icon size={18} />
                </div>
                <h4 className="ohh-serif mt-5 text-lg font-medium text-[#07162C]">
                  {item.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-[#07162C]/70">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-3xl bg-[#07162C] p-8 text-white sm:p-10">
            <h3 className="ohh-serif text-2xl font-light text-[#E4B95A]">
              {t.emergencyRefTitle}
            </h3>
            <div className="mt-7 grid gap-6 border-t border-white/10 pt-7 md:grid-cols-2 md:gap-8">
              <div>
                <strong className="block text-sm font-semibold uppercase tracking-wider text-white">
                  {t.medEmerg}
                </strong>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  {t.medEmergText}
                </p>
              </div>
              <div>
                <strong className="block text-sm font-semibold uppercase tracking-wider text-white">
                  {t.urgentClin}
                </strong>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  {t.urgentClinText}
                </p>
              </div>
              <div>
                <strong className="block text-sm font-semibold uppercase tracking-wider text-white">
                  {t.routineMatters}
                </strong>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  {t.routineMattersText}
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
