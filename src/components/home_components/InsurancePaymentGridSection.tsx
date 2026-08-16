import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ShieldCheck,
  Award,
  CheckCircle2,
  HeartPulse,
  BadgePercent,
  FileCheck,
  Building2,
  WalletCards,
  ArrowUpRight,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

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
    bgClass: "bg-[#162233]",
    textClass: "text-white",
    badgeBgClass: "bg-yellow-400 text-[#0F172A]",
  },
  {
    title: "Texas Medicaid / STAR+PLUS",
    description:
      "Dedicated home care support serving eligible adults with disabilities and adults age 65 or older under the STAR+PLUS program.",
    badge: "In-network coverage",
    bgClass: "bg-[#15261C]",
    textClass: "text-white",
    badgeBgClass: "bg-yellow-400 text-[#0F172A]",
  },
  {
    title: "Molina Healthcare",
    description:
      "Owner-confirmed accepted participation for approved Medicaid and/or HMO managed care products.",
    badge: "In-network coverage",
    bgClass: "bg-[#1E1B2E]",
    textClass: "text-white",
    badgeBgClass: "bg-yellow-400 text-[#0F172A]",
  },
  {
    title: "Superior HealthPlan",
    description:
      "Owner-confirmed accepted participation for approved Medicaid and/or HMO managed care product lines.",
    badge: "In-network coverage",
    bgClass: "bg-[#241A22]",
    textClass: "text-white",
    badgeBgClass: "bg-yellow-400 text-[#0F172A]",
  },
  {
    title: "Wellpoint",
    description:
      "Formerly Amerigroup; active network participation using the current Wellpoint name and designation.",
    badge: "In-network coverage",
    bgClass: "bg-[#1B2333]",
    textClass: "text-white",
    badgeBgClass: "bg-yellow-400 text-[#0F172A]",
  },
  {
    title: "Aetna",
    description:
      "Select HMO and private commercial insurance plan participation accepted upon verification.",
    badge: "Verification required",
    bgClass: "bg-[#241B2A]",
    textClass: "text-white",
    badgeBgClass: "bg-yellow-400 text-[#0F172A]",
  },
  {
    title: "VA Community Care",
    description:
      "Accepted when eligible veterans have secured the required VA referral, network authorization, or prior approval.",
    badge: "Prior auth required",
    bgClass: "bg-[#162A32]",
    textClass: "text-white",
    badgeBgClass: "bg-yellow-400 text-[#0F172A]",
  },
  {
    title: "Private Pay / Self-Pay",
    description:
      "Flexible private financial arrangements where custom rates and service availability are discussed during your personal consultation.",
    badge: "Flexible option",
    bgClass: "bg-[#2A2218]",
    textClass: "text-white",
    badgeBgClass: "bg-yellow-400 text-[#0F172A]",
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

export default function InsuranceStackSection(): React.JSX.Element {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(query.matches);
    const handleChange = (e: MediaQueryListEvent) =>
      setReducedMotion(e.matches);
    query.addEventListener("change", handleChange);
    return () => query.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;

    const ctx = gsap.context(() => {
      const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];
      if (!cards.length || !trackRef.current) return;

      const n = cards.length;
      const progressState = { value: 0 };

      cards.forEach((card) => gsap.set(card, { transformOrigin: "50% 0%" }));

      const applyStack = () => {
        cards.forEach((card, idx) => {
          const raw = progressState.value - idx;

          if (raw <= 0) {
            const enter = gsap.utils.clamp(0, 1, 1 + raw);
            gsap.set(card, {
              yPercent: gsap.utils.interpolate(120, 0, enter),
              scale: gsap.utils.interpolate(0.9, 1, enter),
              opacity: gsap.utils.interpolate(0, 1, enter),
              rotateX: gsap.utils.interpolate(15, 0, enter),
            });
          } else {
            const depth = Math.min(raw, 4);
            gsap.set(card, {
              yPercent: 0,
              y: -depth * 28,
              scale: 1 - depth * 0.05,
              opacity: Math.max(1 - depth * 0.25, 0),
              rotateX: depth * 4,
            });
          }
        });

        const active = Math.min(
          n - 1,
          Math.max(0, Math.round(progressState.value))
        );
        setActiveIndex(active);
      };

      applyStack();

      const trigger = ScrollTrigger.create({
        id: "insurance-stack-clean",
        trigger: trackRef.current,
        start: "top top+=100",
        end: () => `+=${(n - 1) * 400}`,
        scrub: 0.8,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          progressState.value = self.progress * (n - 1);
          applyStack();
        },
      });

      const refreshId = window.setTimeout(() => ScrollTrigger.refresh(), 200);

      return () => {
        window.clearTimeout(refreshId);
        trigger.kill();
      };
    }, sectionRef);

    return () => ctx.revert();
  }, [reducedMotion]);

  const jumpToCard = (idx: number) => {
    const trigger = ScrollTrigger.getById("insurance-stack-clean");
    if (!trigger) return;
    const target =
      trigger.start +
      (idx / (insuranceLines.length - 1)) * (trigger.end - trigger.start);
    gsap.to(window, { scrollTo: target, duration: 0.5, ease: "power2.out" });
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#0F172A] font-sans py-24 lg:py-32 overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Layout */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-16 lg:mb-24">
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-yellow-400 bg-white/10 px-4 py-2 rounded-full">
              <span className="w-2 h-2 rounded-full bg-yellow-400" />
              Insurance & Financial Pathways
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.08]">
              Flexible coverage options tailored for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">
                your care.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-base sm:text-lg text-slate-300 font-medium leading-relaxed">
              We work directly with major public providers, managed care
              organizations, and private structures to streamline your
              authorization and ensure seamless access to care across DFW.
            </p>
          </div>
        </div>

        {/* Main Interface Grid: Interactive Stack + Navigation Menu (No Shadows / No Borders) */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Navigation Quick Menu */}
          <div className="hidden lg:flex lg:col-span-4 flex-col gap-2 bg-slate-900/60 p-4 rounded-3xl backdrop-blur-md">
            <div className="px-4 py-2 text-xs font-black uppercase tracking-wider text-slate-400">
              Select Provider
            </div>
            {insuranceLines.map((item, idx) => {
              const Icon = getInsuranceIcon(item.title);
              const isActive = idx === activeIndex;
              return (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => jumpToCard(idx)}
                  className={`flex items-center justify-between w-full p-3.5 rounded-2xl text-left transition-all ${
                    isActive
                      ? "bg-yellow-400 text-[#0F172A] font-black"
                      : "text-slate-300 hover:bg-white/5 font-semibold"
                  }`}
                >
                  <div className="flex items-center gap-3 truncate">
                    <Icon size={18} className="flex-shrink-0" />
                    <span className="text-sm truncate">{item.title}</span>
                  </div>
                  <ArrowUpRight
                    size={16}
                    className={`flex-shrink-0 transition-transform ${
                      isActive ? "opacity-100 rotate-45" : "opacity-40"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Sticky Stacking Cards Stage */}
          <div className="lg:col-span-8 relative">
            <div
              ref={trackRef}
              className={`relative w-full ${
                reducedMotion ? "flex flex-col gap-6" : "h-[460px] sm:h-[420px]"
              }`}
            >
              {insuranceLines.map((item, idx) => {
                const Icon = getInsuranceIcon(item.title);
                return (
                  <div
                    key={idx}
                    ref={(el) => {
                      cardsRef.current[idx] = el;
                    }}
                    className={`will-change-transform ${
                      reducedMotion
                        ? "relative"
                        : "absolute inset-0 flex items-start"
                    }`}
                    style={reducedMotion ? undefined : { zIndex: idx + 1 }}
                  >
                    <div
                      className={`w-full ${item.bgClass} rounded-3xl p-8 sm:p-12 min-h-[380px] sm:min-h-[400px] flex flex-col justify-between`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 rounded-2xl bg-black/30 flex items-center justify-center text-yellow-400">
                          <Icon size={24} />
                        </div>
                        <span
                          className={`px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider ${item.badgeBgClass}`}
                        >
                          {item.badge}
                        </span>
                      </div>

                      <div className="my-6 space-y-3">
                        <h3 className="text-3xl sm:text-4xl font-black tracking-tight text-white leading-tight">
                          {item.title}
                        </h3>
                        <p className="text-base sm:text-lg font-medium text-slate-200 leading-relaxed max-w-2xl opacity-90">
                          {item.description}
                        </p>
                      </div>

                      <div className="pt-6 flex items-center justify-between text-xs font-bold text-slate-400">
                        <span className="uppercase tracking-widest">
                          Coverage Pathway #{idx + 1}
                        </span>
                        <span className="text-yellow-400">
                          Dallas-Fort Worth Metroplex
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile Indicator Bar */}
        {!reducedMotion && (
          <div className="mt-8 lg:hidden flex items-center justify-center gap-2">
            {insuranceLines.map((_, idx) => (
              <button
                key={idx}
                onClick={() => jumpToCard(idx)}
                aria-label={`Jump to slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all ${
                  idx === activeIndex ? "w-8 bg-yellow-400" : "w-2 bg-slate-700"
                }`}
              />
            ))}
          </div>
        )}

        {/* Disclaimer Footer */}
        <div className="mt-16 text-center max-w-2xl mx-auto">
          <p className="text-xs sm:text-sm text-slate-400 tracking-wide leading-relaxed font-medium">
            Coverage and authorization vary by plan, specific product lines,
            medical necessity, and service location. Contact our team to confirm
            active network status.
          </p>
        </div>
      </div>
    </section>
  );
}
