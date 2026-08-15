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
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

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
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Duplicate cards to create an infinite loop effect seamlessly
  const duplicatedCards = [
    ...insuranceLines,
    ...insuranceLines,
    ...insuranceLines,
  ];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    isPaused;

    let tween: gsap.core.Tween;

    const playMarquee = () => {
      const singleSetWidth = track.scrollWidth / 3;
      tween = gsap.to(track, {
        x: `-=${singleSetWidth}`,
        duration: 35,
        ease: "none",
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize((x) => parseFloat(x) % singleSetWidth),
        },
      });
    };

    playMarquee();

    return () => {
      if (tween) tween.kill();
    };
  }, []);

  const scrollByCard = (direction: "left" | "right") => {
    const track = trackRef.current;
    if (!track) return;
    const cardElement = track.children[0] as HTMLElement;
    if (!cardElement) return;

    const cardWidth = cardElement.offsetWidth + 24; // width + gap
    const delta = direction === "right" ? cardWidth : -cardWidth;

    gsap.to(track, {
      x: `+=${delta}`,
      duration: 0.6,
      ease: "power2.out",
    });

    setCurrentIndex((prev) => {
      if (direction === "right") {
        return (prev + 1) % insuranceLines.length;
      } else {
        return (prev - 1 + insuranceLines.length) % insuranceLines.length;
      }
    });
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-slate-950 font-sans overflow-hidden border-t border-b border-slate-800 py-24"
    >
      {/* Background Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 30%, rgba(228,185,90,0.06), transparent 70%)",
        }}
      />

      <div className="relative z-10 w-full flex flex-col items-center">
        {/* Section Header */}
        <div className="text-center pt-12 pb-14 max-w-3xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-[1.1]">
            Flexible payment <span className="text-[#E4B95A]">options.</span>
          </h2>
          <p className="mt-5 text-base md:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Review our accepted insurance providers, managed care plans, and
            private payment structures tailored to support your care journey.
          </p>

          {/* Manual Control Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => scrollByCard("left")}
              aria-label="Previous insurance plan"
              className="w-12 h-12 rounded-full bg-slate-900 border border-slate-800 text-white flex items-center justify-center hover:bg-slate-800 hover:border-[#E4B95A]/50 transition-all focus:outline-none focus:ring-2 focus:ring-[#E4B95A]"
            >
              <ChevronLeft className="w-5 h-5 text-[#E4B95A]" />
            </button>
            <span className="text-xs font-bold tracking-widest uppercase text-slate-400">
              Explore Plans ({currentIndex + 1} / {insuranceLines.length})
            </span>
            <button
              onClick={() => scrollByCard("right")}
              aria-label="Next insurance plan"
              className="w-12 h-12 rounded-full bg-slate-900 border border-slate-800 text-white flex items-center justify-center hover:bg-slate-800 hover:border-[#E4B95A]/50 transition-all focus:outline-none focus:ring-2 focus:ring-[#E4B95A]"
            >
              <ChevronRight className="w-5 h-5 text-[#E4B95A]" />
            </button>
          </div>
        </div>

        {/* Endless Horizontal Marquee Track */}
        <div
          className="w-full overflow-hidden py-4 cursor-grab active:cursor-grabbing select-none"
          onMouseEnter={() => {
            setIsPaused(true);
            gsap.to(trackRef.current, {
              timeScale: 0,
              duration: 0.5,
              overwrite: "auto",
            });
          }}
          onMouseLeave={() => {
            setIsPaused(false);
            gsap.to(trackRef.current, {
              timeScale: 1,
              duration: 1,
              overwrite: "auto",
            });
          }}
        >
          <div
            ref={trackRef}
            className="flex gap-6 w-max pl-6 will-change-transform"
          >
            {duplicatedCards.map((item, idx) => {
              const Icon = getInsuranceIcon(item.title);
              return (
                <div
                  key={`${item.title}-${idx}`}
                  className={`w-[340px] sm:w-[420px] md:w-[480px] shrink-0 ${item.bgClass} rounded-[2rem] p-8 md:p-10 min-h-[400px] flex flex-col justify-between border ${item.accentBorderClass} overflow-hidden shadow-[0_20px_50px_-15px_rgba(0,0,0,0.6)] transition-transform duration-300 hover:scale-[1.02]`}
                >
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between border-b border-current/15 pb-6">
                    <div
                      className={`w-12 h-12 rounded-2xl bg-black/25 flex items-center justify-center border border-current/20 ${item.textClass}`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span
                      className={`px-4 py-1.5 rounded-full text-[11px] md:text-xs font-bold uppercase tracking-wider border ${item.badgeBgClass}`}
                    >
                      {item.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <div className="my-6">
                    <h3
                      className={`text-2xl md:text-4xl font-bold tracking-tight leading-tight ${item.textClass}`}
                    >
                      {item.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <div className="pt-6 border-t border-current/15">
                    <p
                      className={`text-sm md:text-base font-medium leading-relaxed opacity-90 ${item.textClass}`}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mandatory Coverage & Authorization Disclaimer */}
        <div className="mt-16 max-w-3xl text-center px-4">
          <p className="text-xs md:text-sm text-slate-500 tracking-wide leading-relaxed">
            Coverage and authorization vary by plan, product, eligibility,
            service, and location.
          </p>
        </div>
      </div>
    </section>
  );
}
