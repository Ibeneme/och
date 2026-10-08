"use client";

import {
  BookOpen,
  ShieldAlert,
  Users,
  Wallet,
  Clock,
  ShieldCheck,
  AlertTriangle,
  ExternalLink,
  HeartPulse,
  Briefcase,
  ClipboardList,
  Pill,
  Lock,
  Scale,
} from "lucide-react";
import { useLanguage } from "@/src/context/LanguageContext";
import content from "@/src/locales/resources/employee-resources.json";

/* Brand: navy #07162C + gold #E4B95A / #C89B3C. Flat design: borders, no shadows. */
const container = "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8";
const eyebrow =
  "inline-block text-xs font-bold uppercase tracking-[0.18em] text-[#C89B3C]";
const sectionTitle =
  "ohh-serif mt-3 text-3xl font-semibold leading-tight tracking-tight text-[#07162C] sm:text-4xl";
const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E4B95A]";

/* Escalation badge colours by urgency */
const toneStyles: Record<string, string> = {
  emergency: "bg-[#07162C] text-[#E4B95A]",
  urgent: "bg-[#E4B95A] text-[#07162C]",
  routine: "bg-[#F3ECDC] text-[#07162C]",
};

export default function EmployeeResourcesPage() {
  const { language } = useLanguage();
  const t = content[language as "en" | "es"] || content.en;

  const escalationMatrix = [
    {
      label: "Life-threatening emergency",
      desc: "Call 911 immediately for severe life-threatening medical emergencies.",
      action: "Dial 911",
      tone: "emergency",
    },
    {
      label: "Urgent clinical need",
      desc: "Use the 24/7 on-call clinical extension for immediate patient needs.",
      action: "On-call line",
      tone: "urgent",
    },
    {
      label: "Routine incidents",
      desc: "Submit official logs through standard agency reporting workflows.",
      action: "Documentation portal",
      tone: "routine",
    },
    {
      label: "HR & payroll",
      desc: "Contact the administrative desk during standard operating hours.",
      action: "Mon–Fri, 9 AM–5 PM",
      tone: "routine",
    },
    {
      label: "Compliance",
      desc: "Report ethics, safety, or confidentiality concerns directly.",
      action: "Compliance officer",
      tone: "routine",
    },
  ];

  const evvSteps = [
    {
      icon: Clock,
      title: "Clock in / out",
      desc: "Use the official HHAeXchange mobile application or telephony system at the exact location of service delivery.",
    },
    {
      icon: ShieldCheck,
      title: "EVV reminders",
      desc: "Keep device GPS services enabled. Confirm visit tasks and applicable service codes before final submission.",
    },
    {
      icon: AlertTriangle,
      title: "Missed visits",
      desc: "If a recording error or missed check-in happens, notify administration immediately and submit a manual adjustment ticket.",
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
      desc: "Identify and report environmental risks in client homes or workplaces threatening staff or client well-being.",
    },
    {
      icon: ClipboardList,
      title: "Missed visits",
      desc: "Document and report any unfulfilled or missed visits immediately to ensure unbroken continuity of care.",
    },
    {
      icon: Pill,
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

  return (
    <main className="min-h-screen bg-white text-[#3A4657]">
      {/* ===== Hero ===== */}
      <section className="relative overflow-hidden bg-[#07162C] text-white">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#0A2140]/60 via-transparent to-transparent" />
        <div className={`${container} relative py-20 lg:py-28`}>
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-[#E4B95A]">
                <span className="h-2 w-2 rounded-full bg-[#E4B95A]" />
                {t.badge}
              </div>

              <h1 className="ohh-serif text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
                {t.titleMain}{" "}
                <span className="text-[#E4B95A]">{t.titleHighlight}</span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
                {t.description}
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href="#handbook"
                  className={`inline-flex items-center justify-center gap-2 rounded-full bg-[#E4B95A] px-7 py-3.5 font-bold text-[#07162C] transition-colors hover:bg-[#EDC878] ${focusRing}`}
                >
                  <BookOpen size={16} />
                  {t.handbookBtn}
                </a>
                <a
                  href="#reporting"
                  className={`inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-3.5 font-semibold text-white transition-colors hover:border-[#E4B95A] hover:text-[#E4B95A] ${focusRing}`}
                >
                  <ShieldAlert size={16} />
                  {t.protocolsBtn}
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-7 sm:p-9 lg:col-span-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-white/60">
                  Quick status
                </span>
                <span className="h-2.5 w-2.5 rounded-full bg-[#E4B95A]" />
              </div>

              <div className="divide-y divide-white/10">
                <div className="flex items-start justify-between gap-6 py-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-white/50">
                    {t.officeLabel}
                  </span>
                  <span className="text-right text-sm font-semibold text-white">
                    {t.hqText}
                  </span>
                </div>
                <div className="flex items-start justify-between gap-6 py-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-white/50">
                    {t.evvLabel}
                  </span>
                  <span className="text-right text-sm font-semibold text-[#E4B95A]">
                    {t.evvStatus}
                  </span>
                </div>
                <div className="flex items-start justify-between gap-6 py-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-white/50">
                    {t.supportLabel}
                  </span>
                  <span className="text-right text-sm font-semibold text-white">
                    {t.supportStatus}
                  </span>
                </div>
              </div>

              <p className="mt-2 border-t border-white/10 pt-5 text-xs leading-relaxed text-white/55">
                {t.confidentialNotice}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Escalation Matrix ===== */}
      <section className="bg-white py-20 lg:py-24">
        <div className={container}>
          <div className="flex flex-col gap-2 border-b border-[#E8DFC8] pb-6 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="ohh-serif text-3xl font-semibold leading-tight tracking-tight text-[#07162C] sm:text-4xl">
              {t.matrixHeading}
            </h2>
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#C89B3C]">
              {t.matrixCount}
            </span>
          </div>

          <div className="divide-y divide-[#EEF0F3]">
            {escalationMatrix.map((item, idx) => (
              <div
                key={item.label}
                className="flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between sm:gap-8"
              >
                <div className="grid grid-cols-[auto_1fr] items-baseline gap-x-5 gap-y-1">
                  <span className="font-mono text-sm font-bold text-[#C89B3C]">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="ohh-serif text-lg font-semibold text-[#07162C]">
                    {item.label}
                  </span>
                  <p className="col-start-2 max-w-2xl text-sm leading-relaxed text-[#5B6B7C]">
                    {item.desc}
                  </p>
                </div>
                <div
                  className={`w-fit flex-shrink-0 rounded-full px-5 py-2.5 text-sm font-bold ${
                    toneStyles[item.tone] ?? toneStyles.routine
                  }`}
                >
                  {item.action}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Handbook ===== */}
      <section
        id="handbook"
        className="scroll-mt-24 bg-[#FBF8F2] py-20 lg:py-28"
      >
        <div className={container}>
          <div className="grid items-stretch gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <span className={eyebrow}>{t.handbookBadge}</span>
              <h2 className={sectionTitle}>{t.handbookTitle}</h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-[#5B6B7C]">
                {t.handbookDesc}
              </p>

              <div className="mt-8 grid max-w-md grid-cols-2 gap-4">
                <div className="rounded-2xl border border-[#E8DFC8] bg-white p-5">
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-[#C89B3C]">
                    {t.effDate}
                  </span>
                  <span className="mt-1 block font-semibold text-[#07162C]">
                    {t.effVal}
                  </span>
                </div>
                <div className="rounded-2xl border border-[#E8DFC8] bg-white p-5">
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-[#C89B3C]">
                    {t.statusLabel}
                  </span>
                  <span className="mt-1 block font-semibold text-[#07162C]">
                    {t.statusVal}
                  </span>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button
                  onClick={() => alert("Handbook download initialized.")}
                  className={`inline-flex items-center justify-center rounded-full bg-[#07162C] px-7 py-3.5 font-bold text-[#E4B95A] transition-colors hover:bg-[#0A2140] ${focusRing}`}
                >
                  {t.downloadPdf}
                </button>
                <button
                  onClick={() =>
                    alert("Acknowledgment form instructions dispatched via HR.")
                  }
                  className={`inline-flex items-center justify-center rounded-full border border-[#07162C] px-7 py-3.5 font-semibold text-[#07162C] transition-colors hover:bg-[#07162C] hover:text-[#E4B95A] ${focusRing}`}
                >
                  {t.ackInfo}
                </button>
              </div>
            </div>

            <div className="flex flex-col justify-between rounded-3xl bg-[#07162C] p-8 text-white sm:p-10 lg:col-span-5">
              <div>
                <span className="inline-block rounded-full bg-[#E4B95A] px-3 py-1 text-[11px] font-black uppercase tracking-wider text-[#07162C]">
                  {t.ackNoticeBadge}
                </span>
                <h3 className="ohh-serif mt-5 text-2xl font-semibold leading-snug">
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
        </div>
      </section>

      {/* ===== HR & Payroll ===== */}
      <section className="bg-white py-20 lg:py-28">
        <div className={container}>
          <div className="max-w-3xl">
            <span className={eyebrow}>{t.hrBadge}</span>
            <h2 className={sectionTitle}>{t.hrTitle}</h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#5B6B7C]">
              {t.hrDesc}
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
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
                className="rounded-3xl border border-[#E8DFC8] bg-[#FBF8F2] p-8 transition-colors hover:border-[#C89B3C]"
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#07162C] text-[#E4B95A]">
                    <desk.icon size={20} />
                  </div>
                  <h3 className="ohh-serif mt-5 text-2xl font-semibold text-[#07162C]">
                    {desk.title}
                  </h3>

                  <div className="mt-6 divide-y divide-[#E8DFC8] border-y border-[#E8DFC8]">
                    <div className="flex items-center justify-between gap-6 py-3.5">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#C89B3C]">
                        {t.phoneLabel}
                      </span>
                      <span className="text-right text-sm font-semibold text-[#07162C]">
                        {desk.ext}
                      </span>
                    </div>
                    <div className="flex items-center justify-between gap-6 py-3.5">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#C89B3C]">
                        {t.emailLabel}
                      </span>
                      <span className="break-all text-right text-sm font-semibold text-[#07162C]">
                        {desk.email}
                      </span>
                    </div>
                  </div>

                  <div className="mt-5 text-sm text-[#5B6B7C]">
                    <span className="mr-2 text-xs font-bold uppercase tracking-wider text-[#C89B3C]">
                      {t.operatingWindow}
                    </span>
                    {t.windowTime}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== EVV ===== */}
      <section className="bg-[#07162C] py-20 text-white lg:py-28">
        <div className={container}>
          <div className="space-y-12">
            <div className="max-w-3xl">
              <span className="inline-block text-xs font-bold uppercase tracking-[0.18em] text-[#E4B95A]">
                {t.evvBadge}
              </span>
              <h2 className="ohh-serif mt-3 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                {t.evvTitle}
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/70">
                {t.evvDesc}
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {evvSteps.map((step) => (
                <div
                  key={step.title}
                  className="rounded-3xl border border-white/10 bg-white/5 p-7"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#E4B95A]/15 text-[#E4B95A]">
                    <step.icon size={18} />
                  </div>
                  <h4 className="ohh-serif mt-5 text-lg font-semibold">
                    {step.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-6 rounded-3xl border border-[#E4B95A]/30 bg-[#E4B95A]/5 p-7 sm:p-9 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <h4 className="ohh-serif text-xl font-semibold text-[#E4B95A]">
                  {t.portalTitle}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-white/75">
                  {t.portalDesc}
                </p>
              </div>
              <a
                href="https://ha.hhaexchange.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex flex-shrink-0 items-center justify-center gap-2 rounded-full bg-[#E4B95A] px-7 py-3.5 font-bold text-[#07162C] transition-colors hover:bg-[#EDC878] ${focusRing}`}
              >
                {t.launchPortal}
                <ExternalLink size={15} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Safety & Reporting ===== */}
      <section
        id="reporting"
        className="scroll-mt-24 bg-[#FBF8F2] py-20 lg:py-28"
      >
        <div className={container}>
          <div className="max-w-3xl">
            <span className={eyebrow}>{t.safetyBadge}</span>
            <h2 className={sectionTitle}>{t.safetyTitle}</h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#5B6B7C]">
              {t.safetyDesc}
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {incidentTypes.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-[#E8DFC8] bg-white p-6 transition-colors hover:border-[#C89B3C]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#07162C] text-[#E4B95A]">
                  <item.icon size={18} />
                </div>
                <h4 className="ohh-serif mt-5 text-lg font-semibold text-[#07162C]">
                  {item.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-[#5B6B7C]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-3xl bg-[#07162C] p-8 text-white sm:p-10">
            <h3 className="ohh-serif text-2xl font-semibold text-[#E4B95A]">
              {t.emergencyRefTitle}
            </h3>
            <div className="mt-7 grid gap-6 border-t border-white/10 pt-7 md:grid-cols-3 md:gap-8">
              <div>
                <strong className="block text-sm font-bold uppercase tracking-wider text-white">
                  {t.medEmerg}
                </strong>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  {t.medEmergText}
                </p>
              </div>
              <div>
                <strong className="block text-sm font-bold uppercase tracking-wider text-white">
                  {t.urgentClin}
                </strong>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  {t.urgentClinText}
                </p>
              </div>
              <div>
                <strong className="block text-sm font-bold uppercase tracking-wider text-white">
                  {t.routineMatters}
                </strong>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  {t.routineMattersText}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
