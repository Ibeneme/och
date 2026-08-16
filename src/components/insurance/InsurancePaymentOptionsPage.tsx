import { Link } from "react-router-dom";

import {
  ShieldCheck,
  Phone,
  ArrowRight,
  CheckCircle2,
  Award,
  Layers,
  SlidersHorizontal,
  Info,
  ShieldAlert,
} from "lucide-react";

export interface InsuranceItem {
  title: string;
  description: string;
  badge: string;
  bgClass: string;
  textClass: string;
  badgeBgClass: string;
}

export const insuranceLines: InsuranceItem[] = [
  {
    title: "Medicare",
    description:
      "Comprehensive Medicare-certified home health services, provided subject to individual patient eligibility and documented medical necessity.",
    badge: "In-network coverage",
    bgClass: "bg-[#1B2333]",
    textClass: "text-[#F5C77E]",
    badgeBgClass: "bg-white/10 text-[#F5C77E]",
  },
  {
    title: "Texas Medicaid / STAR+PLUS",
    description:
      "Dedicated home care support serving eligible adults with disabilities and adults age 65 or older under the STAR+PLUS program.",
    badge: "In-network coverage",
    bgClass: "bg-[#123B3E]",
    textClass: "text-[#8FE0DA]",
    badgeBgClass: "bg-white/10 text-[#8FE0DA]",
  },
  {
    title: "Molina Healthcare",
    description:
      "Owner-confirmed accepted participation for approved Medicaid and/or HMO managed care products.",
    badge: "In-network coverage",
    bgClass: "bg-[#211B3E]",
    textClass: "text-[#B9AEFF]",
    badgeBgClass: "bg-white/10 text-[#B9AEFF]",
  },
  {
    title: "Superior HealthPlan",
    description:
      "Owner-confirmed accepted participation for approved Medicaid and/or HMO managed care product lines.",
    badge: "In-network coverage",
    bgClass: "bg-[#3E1424]",
    textClass: "text-[#F3A8C0]",
    badgeBgClass: "bg-white/10 text-[#F3A8C0]",
  },
  {
    title: "Wellpoint",
    description:
      "Formerly Amerigroup; active network participation using the current Wellpoint name and designation.",
    badge: "In-network coverage",
    bgClass: "bg-[#12301F]",
    textClass: "text-[#9FE6B8]",
    badgeBgClass: "bg-white/10 text-[#9FE6B8]",
  },
  {
    title: "Aetna",
    description:
      "Select HMO and private commercial insurance plan participation accepted upon verification.",
    badge: "Accepted upon verification",
    bgClass: "bg-[#331B3E]",
    textClass: "text-[#E3AEE8]",
    badgeBgClass: "bg-white/10 text-[#E3AEE8]",
  },
  {
    title: "VA Community Care",
    description:
      "Accepted when eligible veterans have secured the required VA referral, network authorization, or prior approval.",
    badge: "Requires prior authorization",
    bgClass: "bg-[#14263E]",
    textClass: "text-[#9FC7F5]",
    badgeBgClass: "bg-white/10 text-[#9FC7F5]",
  },
  {
    title: "Private Pay / Self-Pay",
    description:
      "Flexible private financial arrangements where custom rates and service availability are discussed during your personal consultation.",
    badge: "Flexible arrangement",
    bgClass: "bg-[#3E2A14]",
    textClass: "text-[#F0C48A]",
    badgeBgClass: "bg-white/10 text-[#F0C48A]",
  },
];

export default function InsurancePaymentOptionsPage() {
  return (
    <main className="min-h-screen bg-[#FBF8F2] text-[#3A4657] ohh-sans">
      {/* ===== Hero Section ===== */}
      <section className="relative overflow-hidden pt-12 pb-16 lg:pt-20 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3ECDC] text-[#0A2140] font-semibold text-xs tracking-wider uppercase">
                <span className="w-2 h-2 rounded-full bg-[#C89B3C]" />
                Coverage & billing support
              </div>

              <h1 className="ohh-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#0A2140] tracking-tight leading-[1.1]">
                Insurance and{" "}
                <span className="text-[#C89B3C]">payment options</span>
              </h1>

              <p className="text-base sm:text-lg text-[#5B6B7C] leading-relaxed">
                One Community Home Health works with multiple insurance and
                payment sources. Our team manages verification and authorization
                before care begins.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a
                  href="tel:9723251598"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#0A2140] hover:bg-[#123258] text-[#E4B95A] font-bold rounded-xl transition-colors"
                >
                  <Phone size={16} />
                  <span>Call (972) 325-1598</span>
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#F3ECDC] hover:bg-[#EADFC2] text-[#0A2140] font-semibold rounded-xl transition-colors"
                >
                  <span>Contact our team</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Hero Feature Card */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl p-8 space-y-6">
                <div className="flex items-center gap-3 pb-4">
                  <div className="w-10 h-10 rounded-2xl bg-[#0A2140] text-[#E4B95A] flex items-center justify-center">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <h3 className="ohh-serif text-lg font-semibold text-[#0A2140]">
                      Why families trust us
                    </h3>
                    <p className="text-xs text-[#8A7B5C]">
                      Dedicated billing & verification
                    </p>
                  </div>
                </div>

                <ul className="space-y-4 text-sm text-[#3A4657]">
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#F3ECDC] text-[#0A2140] flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-xs">
                      ✓
                    </div>
                    <span>
                      Direct coordination with providers & case managers
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#F3ECDC] text-[#0A2140] flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-xs">
                      ✓
                    </div>
                    <span>
                      Proactive benefit checks to prevent unexpected costs
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#F3ECDC] text-[#0A2140] flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-xs">
                      ✓
                    </div>
                    <span>
                      Comprehensive coverage support for Texas residents
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Trust Strip Grid ===== */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                label: "Benefit verification",
                sub: "Before care starts",
                icon: CheckCircle2,
                accentColor: "text-[#C89B3C]",
                bgIcon: "bg-[#F3ECDC]",
              },
              {
                label: "Medicare-certified",
                sub: "Trusted quality",
                icon: Award,
                accentColor: "text-[#0A2140]",
                bgIcon: "bg-[#EAEFF7]",
              },
              {
                label: "Multiple sources",
                sub: "Flexible options",
                icon: Layers,
                accentColor: "text-[#0A2140]",
                bgIcon: "bg-[#F3ECDC]",
              },
              {
                label: "Transparent process",
                sub: "Zero guesswork",
                icon: SlidersHorizontal,
                accentColor: "text-[#C89B3C]",
                bgIcon: "bg-[#F7F1E6]",
              },
            ].map((item) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={item.label}
                  className="group flex flex-col justify-between p-6 rounded-3xl bg-[#FBF8F2] hover:bg-[#F3ECDC]/40 transition-colors duration-300"
                >
                  <div
                    className={`w-10 h-10 rounded-2xl ${item.bgIcon} ${item.accentColor} flex items-center justify-center mb-4 transition-transform group-hover:scale-105`}
                  >
                    <IconComponent size={20} />
                  </div>

                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#8A7B5C] font-bold block">
                      {item.sub}
                    </span>
                    <span className="ohh-serif text-base font-bold text-[#0A2140] mt-1 block">
                      {item.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== Insurance Lines Grid ===== */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C89B3C]">
              Accepted coverage
            </span>
            <h2 className="ohh-serif text-3xl sm:text-4xl font-semibold text-[#0A2140]">
              Our insurance & payment plans
            </h2>
            <p className="text-sm text-[#5B6B7C]">
              Review our supported insurance networks and flexible payment
              arrangements below.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {insuranceLines.map((item) => (
              <div
                key={item.title}
                className={`${item.bgClass} p-8 rounded-3xl flex flex-col justify-between space-y-6`}
              >
                <div className="space-y-4">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${item.badgeBgClass}`}
                  >
                    {item.badge}
                  </span>

                  <h3
                    className={`ohh-serif text-xl font-bold ${item.textClass}`}
                  >
                    {item.title}
                  </h3>

                  <p className="text-sm text-white/70 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="flex items-center justify-between text-xs text-white/50">
                  <span>Verification required</span>
                  <span className={item.textClass}>Active plan</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Notices & Disclaimer Cards ===== */}
      <section className="pb-24 pt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Pending Notice Box */}
            <div className="bg-[#0A2140] text-white rounded-3xl p-8 sm:p-10 flex flex-col justify-between space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#C89B3C]/10 rounded-full blur-3xl pointer-events-none" />

              <div className="space-y-4 relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-[#E4B95A] text-xs font-bold uppercase tracking-wider">
                  <Info size={14} />
                  <span>Network status note</span>
                </div>

                <h3 className="ohh-serif text-2xl font-semibold text-white tracking-tight">
                  Pending insurance relationships
                </h3>

                <p className="text-white/70 text-sm leading-relaxed">
                  UnitedHealthcare is not currently listed as an accepted plan.
                  It will only be shown once contracting and network
                  participation are fully confirmed.
                </p>
              </div>

              <div className="flex items-center justify-between text-xs text-white/50 relative z-10">
                <span>Status: in review</span>
                <span className="text-[#E4B95A] font-semibold">
                  Updated 2026
                </span>
              </div>
            </div>

            {/* Compliance Disclaimer Box */}
            <div className="bg-white text-[#0A2140] rounded-3xl p-8 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F3ECDC] text-[#0A2140] text-xs font-bold uppercase tracking-wider">
                  <ShieldAlert size={14} className="text-[#C89B3C]" />
                  <span>Important disclaimer</span>
                </div>

                <h3 className="ohh-serif text-2xl font-semibold text-[#0A2140] tracking-tight">
                  Please verify before care begins
                </h3>

                <p className="text-[#5B6B7C] text-sm leading-relaxed">
                  Insurance participation can change dynamically. Acceptance of
                  a plan does not guarantee final coverage. Authorizations,
                  co-pays, deductibles, and clinical limitations must be
                  verified prior to care delivery.
                </p>
              </div>

              <div className="flex items-center justify-between text-xs text-[#8A93A0]">
                <span>Mandatory check</span>
                <span className="text-[#0A2140] font-bold">
                  Texas operating standards
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
