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
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export interface InsuranceItem {
  title: string;
  description: string;
  reverse: boolean;
  bgClass: string;
  textClass: string;
  badgeBgClass: string;
  accentBorderClass: string;
}

// A single coordinated family of deep, muted jewel tones — each card reads
// as a distinct "brand," but none of them fight each other or the section's
// navy background the way saturated defaults (lime, fuchsia, bright rose)
// tend to.
export const insuranceLines: InsuranceItem[] = [
  {
    title: "Medicare",
    description:
      "Comprehensive Medicare-certified home health services, provided subject to individual patient eligibility and documented medical necessity.",
    reverse: false,
    bgClass: "bg-[#1B2333]",
    textClass: "text-[#F5C77E]",
    badgeBgClass: "bg-white/10 text-[#F5C77E] border-white/15",
    accentBorderClass: "border-white/10",
  },
  {
    title: "Texas Medicaid / STAR+PLUS",
    description:
      "Dedicated home care support serving eligible adults with disabilities and adults age 65 or older under the STAR+PLUS program.",
    reverse: true,
    bgClass: "bg-[#123B3E]",
    textClass: "text-[#8FE0DA]",
    badgeBgClass: "bg-white/10 text-[#8FE0DA] border-white/15",
    accentBorderClass: "border-white/10",
  },
  {
    title: "Molina Healthcare",
    description:
      "Owner-confirmed accepted participation for approved Medicaid and/or HMO managed care products.",
    reverse: false,
    bgClass: "bg-[#211B3E]",
    textClass: "text-[#B9AEFF]",
    badgeBgClass: "bg-white/10 text-[#B9AEFF] border-white/15",
    accentBorderClass: "border-white/10",
  },
  {
    title: "Superior HealthPlan",
    description:
      "Owner-confirmed accepted participation for approved Medicaid and/or HMO managed care product lines.",
    reverse: true,
    bgClass: "bg-[#3E1424]",
    textClass: "text-[#F3A8C0]",
    badgeBgClass: "bg-white/10 text-[#F3A8C0] border-white/15",
    accentBorderClass: "border-white/10",
  },
  {
    title: "Wellpoint",
    description:
      "Formerly Amerigroup; active network participation using the current Wellpoint name and designation.",
    reverse: false,
    bgClass: "bg-[#12301F]",
    textClass: "text-[#9FE6B8]",
    badgeBgClass: "bg-white/10 text-[#9FE6B8] border-white/15",
    accentBorderClass: "border-white/10",
  },
  {
    title: "Aetna",
    description:
      "Select HMO and private commercial insurance plan participation accepted upon verification.",
    reverse: true,
    bgClass: "bg-[#331B3E]",
    textClass: "text-[#E3AEE8]",
    badgeBgClass: "bg-white/10 text-[#E3AEE8] border-white/15",
    accentBorderClass: "border-white/10",
  },
  {
    title: "VA Community Care",
    description:
      "Accepted when eligible veterans have secured the required VA referral, network authorization, or prior approval.",
    reverse: false,
    bgClass: "bg-[#14263E]",
    textClass: "text-[#9FC7F5]",
    badgeBgClass: "bg-white/10 text-[#9FC7F5] border-white/15",
    accentBorderClass: "border-white/10",
  },
  {
    title: "Private Pay / Self-Pay",
    description:
      "Flexible private financial arrangements where custom rates and service availability are discussed during your personal consultation.",
    reverse: true,
    bgClass: "bg-[#3E2A14]",
    textClass: "text-[#F0C48A]",
    badgeBgClass: "bg-white/10 text-[#F0C48A] border-white/15",
    accentBorderClass: "border-white/10",
  },
];

const getInsuranceIcon = (title: string, textClass: string) => {
  console.warn(textClass);
  const iconColorClass = "text-white";
  if (title.includes("Medicare"))
    return <ShieldCheck className={`w-6 h-6 ${iconColorClass}`} />;
  if (title.includes("Medicaid"))
    return <Award className={`w-6 h-6 ${iconColorClass}`} />;
  if (title.includes("Molina"))
    return <Building2 className={`w-6 h-6 ${iconColorClass}`} />;
  if (title.includes("Superior"))
    return <CheckCircle2 className={`w-6 h-6 ${iconColorClass}`} />;
  if (title.includes("Wellpoint"))
    return <HeartPulse className={`w-6 h-6 ${iconColorClass}`} />;
  if (title.includes("Aetna"))
    return <BadgePercent className={`w-6 h-6 ${iconColorClass}`} />;
  if (title.includes("VA"))
    return <FileCheck className={`w-6 h-6 ${iconColorClass}`} />;
  return <WalletCards className={`w-6 h-6 ${iconColorClass}`} />;
};

// How many "retired" cards get a visibly distinct depth before they're
// treated as fully buried (keeps the fan from turning into mush past 4-5).
const MAX_DEPTH = 5;

export default function InsuranceStackSection(): React.JSX.Element {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stackRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];
      if (!cards.length || !stackRef.current) return;

      const n = cards.length;
      const progressState = { value: 0 };

      cards.forEach((card) => gsap.set(card, { transformOrigin: "50% 100%" }));

      // Every card's visual state is derived fresh from a single progress
      // value on every update, instead of a chain of one-shot tweens.
      // That's what was breaking: cards that had already "retired" once
      // never moved again, so they all piled up on the exact same
      // transform and read as one flat navy block.
      const applyStack = () => {
        cards.forEach((card, idx) => {
          const raw = progressState.value - idx;

          if (raw <= 0) {
            // Card hasn't arrived yet — interpolate its entrance during
            // the single unit of scroll immediately before it "lands".
            const enter = gsap.utils.clamp(0, 1, 1 + raw);
            gsap.set(card, {
              yPercent: gsap.utils.interpolate(100, 0, enter),
              y: 0,
              scale: gsap.utils.interpolate(1.05, 1, enter),
              rotate: 0,
              filter: `brightness(${gsap.utils.interpolate(0.55, 1, enter)})`,
            });
          } else {
            // Card has arrived and is now receding into the stack as later
            // cards land on top of it. Depth grows continuously so each
            // layer settles slightly further back — a real fanned deck,
            // capped so far-back cards don't shrink into nothing.
            const depth = Math.min(raw, MAX_DEPTH);
            const dir = idx % 2 === 0 ? -1 : 1;
            gsap.set(card, {
              yPercent: 0,
              y: -depth * 14,
              scale: 1 - depth * 0.045,
              rotate: dir * depth * 1.25,
              filter: `brightness(${Math.max(1 - depth * 0.12, 0.42)})`,
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
        trigger: stackRef.current,
        start: "top top",
        end: () => `+=${(n - 1) * (window.innerHeight * 0.9)}`,
        scrub: 1,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          progressState.value = self.progress * (n - 1);
          applyStack();
        },
      });

      // Layout can shift after fonts/images finish loading — recheck once
      // things settle so the pin distance is measured correctly.
      const refreshId = window.setTimeout(() => ScrollTrigger.refresh(), 200);

      return () => {
        window.clearTimeout(refreshId);
        trigger.kill();
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-slate-950 font-sans overflow-hidden border-t border-b border-slate-800 py-24"
    >
      {/* Soft background glows */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-amber-400/10 rounded-full pointer-events-none blur-[120px]" />
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-[#123B3E]/40 rounded-full pointer-events-none blur-[140px]" />
      <div className="absolute bottom-10 left-1/3 w-[450px] h-[450px] bg-[#211B3E]/40 rounded-full pointer-events-none blur-[130px]" />

      <div className="relative z-10 w-full flex flex-col items-center px-4 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center pt-12 pb-16 max-w-4xl mx-auto">
          <span className="inline-block text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-[#E4B95A] bg-amber-400/15 px-4 py-2 rounded-full mb-4 border border-amber-400/30">
            Accepted Insurance & Coverage Pathways
          </span>
          <h2 className="text-5xl md:text-8xl font-extrabold text-white tracking-tight leading-tight">
            Flexible Payment <span className="text-[#E4B95A]">Options.</span>
          </h2>
          <p className="mt-6 text-base md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Review our accepted insurance providers, managed care plans, and
            private payment structures tailored to support your care journey.
          </p>
        </div>

        {/* Pinned Stacking Area */}
        <div className="relative w-full max-w-5xl xl:max-w-6xl flex items-center justify-center gap-6">
          <div
            ref={stackRef}
            className="relative w-full h-[520px] md:h-[480px] flex items-center justify-center"
          >
            {insuranceLines.map((item, idx) => (
              <div
                key={idx}
                ref={(el) => {
                  cardsRef.current[idx] = el;
                }}
                className="absolute inset-0 flex items-center justify-center will-change-transform"
                style={{ zIndex: idx + 1 }}
              >
                <div
                  className={`relative w-full ${item.bgClass} rounded-[2.5rem] p-8 md:p-14 min-h-[440px] md:min-h-[460px] flex flex-col justify-between border ${item.accentBorderClass} overflow-hidden transition-colors duration-300`}
                >
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between border-b border-current/15 pb-6">
                    <div className="w-12 h-12 rounded-2xl bg-black/25 flex items-center justify-center border border-current/20">
                      {getInsuranceIcon(item.title, item.textClass)}
                    </div>
                    <span
                      className={`px-4 py-1.5 rounded-full text-xs md:text-sm font-extrabold uppercase tracking-wider border ${item.badgeBgClass}`}
                    >
                      {item.reverse ? "Verified Option" : "Accepted Provider"}
                    </span>
                  </div>

                  {/* Title */}
                  <div className="my-6">
                    <h3
                      className={`text-3xl md:text-6xl font-black tracking-tight leading-tight ${item.textClass}`}
                    >
                      {item.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <div className="pt-6 border-t border-current/15">
                    <p
                      className={`text-base md:text-2xl font-medium leading-relaxed max-w-4xl opacity-95 ${item.textClass}`}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Progress rail */}
          <div className="hidden lg:flex flex-col gap-3 shrink-0">
            {insuranceLines.map((item, idx) => (
              <div
                key={item.title}
                className={`w-2 rounded-full transition-all duration-300 ${
                  idx === activeIndex ? "h-8 bg-[#E4B95A]" : "h-2 bg-slate-700"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Mandatory Coverage & Authorization Disclaimer */}
        <div className="mt-20 max-w-3xl text-center px-4">
          <p className="text-xs md:text-sm text-slate-400 tracking-wide leading-relaxed">
            Coverage and authorization vary by plan, product, eligibility,
            service, and location.
          </p>
        </div>
      </div>
    </section>
  );
}
