import React from "react";
import {
  ShieldCheck,
  Award,
  CheckCircle2,
  HeartPulse,
  BadgePercent,
  FileCheck,
  Building2,
  WalletCards,
} from "lucide-react";

export interface InsuranceItem {
  title: string;
  description: string;
  badge: string;
  bgClass: string;
  textClass: string;
  badgeBgClass: string;
  accentBorderClass: string;
}

export const insuranceLines: InsuranceItem[] = [
  {
    title: "Medicare",
    description:
      "Comprehensive Medicare-certified home health services, provided subject to individual patient eligibility and documented medical necessity.",
    badge: "In-network coverage",
    bgClass: "bg-[#1B2333]",
    textClass: "text-[#F5C77E]",
    badgeBgClass: "bg-white/10 text-[#F5C77E] border-white/15",
    accentBorderClass: "border-white/10",
  },
  {
    title: "Texas Medicaid / STAR+PLUS",
    description:
      "Dedicated home care support serving eligible adults with disabilities and adults age 65 or older under the STAR+PLUS program.",
    badge: "In-network coverage",
    bgClass: "bg-[#123B3E]",
    textClass: "text-[#8FE0DA]",
    badgeBgClass: "bg-white/10 text-[#8FE0DA] border-white/15",
    accentBorderClass: "border-white/10",
  },
  {
    title: "Molina Healthcare",
    description:
      "Owner-confirmed accepted participation for approved Medicaid and/or HMO managed care products.",
    badge: "In-network coverage",
    bgClass: "bg-[#211B3E]",
    textClass: "text-[#B9AEFF]",
    badgeBgClass: "bg-white/10 text-[#B9AEFF] border-white/15",
    accentBorderClass: "border-white/10",
  },
  {
    title: "Superior HealthPlan",
    description:
      "Owner-confirmed accepted participation for approved Medicaid and/or HMO managed care product lines.",
    badge: "In-network coverage",
    bgClass: "bg-[#3E1424]",
    textClass: "text-[#F3A8C0]",
    badgeBgClass: "bg-white/10 text-[#F3A8C0] border-white/15",
    accentBorderClass: "border-white/10",
  },
  {
    title: "Wellpoint",
    description:
      "Formerly Amerigroup; active network participation using the current Wellpoint name and designation.",
    badge: "In-network coverage",
    bgClass: "bg-[#12301F]",
    textClass: "text-[#9FE6B8]",
    badgeBgClass: "bg-white/10 text-[#9FE6B8] border-white/15",
    accentBorderClass: "border-white/10",
  },
  {
    title: "Aetna",
    description:
      "Select HMO and private commercial insurance plan participation accepted upon verification.",
    badge: "Accepted upon verification",
    bgClass: "bg-[#331B3E]",
    textClass: "text-[#E3AEE8]",
    badgeBgClass: "bg-white/10 text-[#E3AEE8] border-white/15",
    accentBorderClass: "border-white/10",
  },
  {
    title: "VA Community Care",
    description:
      "Accepted when eligible veterans have secured the required VA referral, network authorization, or prior approval.",
    badge: "Requires prior authorization",
    bgClass: "bg-[#14263E]",
    textClass: "text-[#9FC7F5]",
    badgeBgClass: "bg-white/10 text-[#9FC7F5] border-white/15",
    accentBorderClass: "border-white/10",
  },
  {
    title: "Private Pay / Self-Pay",
    description:
      "Flexible private financial arrangements where custom rates and service availability are discussed during your personal consultation.",
    badge: "Flexible arrangement",
    bgClass: "bg-[#3E2A14]",
    textClass: "text-[#F0C48A]",
    badgeBgClass: "bg-white/10 text-[#F0C48A] border-white/15",
    accentBorderClass: "border-white/10",
  },
];

const getInsuranceIcon = (title: string) => {
  if (title.includes("Medicare")) return ShieldCheck;
  if (title.includes("Medicaid")) return Award;
  if (title.includes("Molina")) return Building2;
  if (title.includes("Superior")) return CheckCircle2;
  if (title.includes("Wellpoint")) return HeartPulse;
  if (title.includes("Aetna")) return BadgePercent;
  if (title.includes("VA")) return FileCheck;
  return WalletCards;
};

export default function Scrollers(): React.JSX.Element {
  return (
    <section className="relative w-full bg-[#051122] border-t border-b border-slate-800 py-24">
      {/* Background Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 15% 20%, rgba(228,185,90,0.06), transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Sticky intro rail — replaces the centered header + marquee controls */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-16">
              <span className="inline-block text-xs font-bold tracking-widest uppercase text-ext-yellow-400 bg-ext-yellow-400/10 px-3.5 py-1.5 rounded-full mb-5">
                Coverage & payment
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.1] mb-5">
                Flexible payment{" "}
                <span className="text-ext-yellow-400">options.</span>
              </h2>
              <p className="text-base md:text-lg text-slate-400 leading-relaxed mb-8">
                Review our accepted insurance providers, managed care plans, and
                private payment structures tailored to support your care
                journey.
              </p>
              <div className="hidden lg:block h-px w-16 bg-slate-800 mb-8" />
              <p className="text-xs md:text-sm text-slate-500 tracking-wide leading-relaxed">
                Coverage and authorization vary by plan, product, eligibility,
                service, and location.
              </p>
            </div>
          </div>

          {/* Card grid — replaces the auto-scrolling horizontal marquee */}
          <div className="lg:col-span-8">
            <div className="grid sm:grid-cols-2 gap-5">
              {insuranceLines.map((item) => {
                const Icon = getInsuranceIcon(item.title);
                return (
                  <div
                    key={item.title}
                    className={`${item.bgClass} rounded-[1.75rem] p-6 md:p-7 flex flex-col justify-between min-h-[260px] border ${item.accentBorderClass} overflow-hidden shadow-[0_20px_50px_-15px_rgba(0,0,0,0.6)] transition-transform duration-300 hover:scale-[1.02]`}
                  >
                    {/* Top Badge & Icon */}
                    <div className="flex items-center justify-between border-b border-current/15 pb-5">
                      <div
                        className={`w-11 h-11 rounded-2xl bg-black/25 flex items-center justify-center border border-current/20 ${item.textClass}`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <span
                        className={`px-3.5 py-1.5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider border ${item.badgeBgClass}`}
                      >
                        {item.badge}
                      </span>
                    </div>

                    {/* Title */}
                    <div className="my-5">
                      <h3
                        className={`text-xl md:text-2xl font-bold tracking-tight leading-tight ${item.textClass}`}
                      >
                        {item.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <div className="pt-5 border-t border-current/15">
                      <p
                        className={`text-sm font-medium leading-relaxed opacity-90 ${item.textClass}`}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
