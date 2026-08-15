import  { useEffect, useRef } from "react";
import gsap from "gsap";

export const insuranceNames = [
  "Medicare",
  "Texas Medicaid or STAR+PLUS",
  "Molina Healthcare",
  "Superior HealthPlan",
  "Wellpoint",
  "Aetna",
  "VA Community Care",
  "Private Pay or Self-Pay",
];

export default function InsuranceTickerSection() {
  const trackRef = useRef<HTMLDivElement>(null);

  // Duplicate items multiple times to ensure seamless infinite looping
  const duplicatedItems = [
    ...insuranceNames,
    ...insuranceNames,
    ...insuranceNames,
  ];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let tween: gsap.core.Tween;

    const playTicker = () => {
      const singleSetWidth = track.scrollWidth / 3;
      tween = gsap.to(track, {
        x: `-=${singleSetWidth}`,
        duration: 28,
        ease: "none",
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize((x) => parseFloat(x) % singleSetWidth),
        },
      });
    };

    playTicker();

    return () => {
      if (tween) tween.kill();
    };
  }, []);

  return (
    <section className="relative w-full bg-[#051122] py-8 overflow-hidden border-t border-b border-[#0F284A]">
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#E4B95A]">
          Accepted Insurance & Payment Providers
        </p>
      </div>

      {/* Ticker Container with smooth fade-out gradient edges */}
      <div className="relative w-full overflow-hidden select-none ">
        <div
          ref={trackRef}
          className="flex items-center gap-12 w-max will-change-transform py-4"
        >
          {duplicatedItems.map((name, idx) => (
            <div
              key={`${name}-${idx}`}
              className="flex items-center gap-12 shrink-0 group"
            >
              <span className="text-xl md:text-2xl font-bold tracking-tight text-white/80 group-hover:text-[#E4B95A] transition-colors whitespace-nowrap">
                {name}
              </span>
              <span className="w-2 h-2 rounded-full bg-[#E4B95A]/40 shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
