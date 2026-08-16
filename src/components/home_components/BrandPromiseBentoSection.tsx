import { useRef, useState, useEffect } from "react";
import {
  ArrowRight,
  ArrowLeft,
  Users,
  ShieldCheck,
  HeartHandshake,
  Bell,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface CarePathway {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  badge?: string;
  image: string;
  isDark?: boolean;
  actionType: "button" | "text" | "cta";
  footerText?: string;
}

const carePathways: CarePathway[] = [
  {
    title: "Seniors",
    description:
      "Supporting safety, independence, recovery, and quality of life at home through specialized assistance and personalized care routines.",
    icon: Users,
    image:
      "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=600&q=80",
    actionType: "button",
    footerText: "Request consultation",
  },
  {
    title: "Veterans",
    description:
      "Respectful care and direct links to official VA resources for veterans and eligible families seeking dependable home assistance.",
    icon: ShieldCheck,
    badge: "Trusted",
    image:
      "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=600&q=80",
    actionType: "text",
    footerText: "Official VA Resource Integration",
  },
  {
    title: "Adults with Disabilities",
    description:
      "Person-centered support that promotes dignity, everyday independence, and tailored assistance structured around unique personal needs.",
    icon: HeartHandshake,
    badge: "Personalized",
    image:
      "https://images.unsplash.com/photo-1599282271323-f4d8e3b18df1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWR1bHQlMjBkaXNhYmlsdHl8ZW58MHx8MHx8fDA%3D",
    actionType: "text",
    footerText: "Customized Daily Support",
  },
  {
    title: "Pediatric Service",
    description:
      "We are expanding our specialized care offerings to support children and young families. Stay connected for updates.",
    icon: Bell,
    badge: "Coming Soon",
    image:
      "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=600&q=80",
    isDark: true,
    actionType: "cta",
  },
];

export default function ServicesLandingPage() {
  const pageRef = useRef<HTMLElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollButtons = () => {
    if (!carouselRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    setCanScrollLeft(scrollLeft > 8);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 8);
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    updateScrollButtons();
    carousel.addEventListener("scroll", updateScrollButtons);
    window.addEventListener("resize", updateScrollButtons);
    return () => {
      carousel.removeEventListener("scroll", updateScrollButtons);
      window.removeEventListener("resize", updateScrollButtons);
    };
  }, []);

  const scrollCarousel = (direction: "left" | "right") => {
    if (!carouselRef.current) return;
    const cardWidth =
      carouselRef.current.querySelector(".lp-card")?.clientWidth || 320;
    const gap = 24;
    const scrollAmount = cardWidth + gap;
    carouselRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <main
      ref={pageRef}
      className="bg-[#0F172A] min-h-screen pt-24 sm:pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-x-hidden will-change-transform"
    >
      <div className="max-w-7xl mx-auto">
        {/* Modern Split Header */}
        <div className="grid lg:grid-cols-12 gap-12 items-end mb-16 lg:mb-20">
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-black uppercase tracking-widest text-[#C89B3C] bg-white/10">
              <span className="w-2 h-2 rounded-full bg-[#C89B3C]" />
              Who We Serve
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.08]">
              Compassionate care tailored for every stage of life{" "}
              <span className="text-[#C89B3C]">.</span>
            </h1>
          </div>
          <div className="lg:col-span-5 flex flex-col justify-end">
            <p className="text-base sm:text-lg text-slate-300 font-medium leading-relaxed mb-8">
              Professional, nurse-guided support delivered right to your
              doorstep. Explore our dedicated care pathways designed to preserve
              independence, dignity, and peace of mind.
            </p>
            {/* Carousel Controls integrated right into header */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => scrollCarousel("left")}
                disabled={!canScrollLeft}
                aria-label="Previous"
                className={`w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center transition-all duration-200 ${
                  canScrollLeft
                    ? "text-white hover:bg-[#C89B3C] hover:text-[#0F172A] hover:border-[#C89B3C] cursor-pointer"
                    : "text-slate-600 cursor-not-allowed opacity-40"
                }`}
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scrollCarousel("right")}
                disabled={!canScrollRight}
                aria-label="Next"
                className={`w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center transition-all duration-200 ${
                  canScrollRight
                    ? "text-white hover:bg-[#C89B3C] hover:text-[#0F172A] hover:border-[#C89B3C] cursor-pointer"
                    : "text-slate-600 cursor-not-allowed opacity-40"
                }`}
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Edge-to-edge Horizontal Stream Grid */}
      <div className="max-w-[1400px] mx-auto">
        <div
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto scroll-smooth pb-8 px-4 sm:px-6 lg:px-8 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {carePathways.map((pathway, idx) => {
            const Icon = pathway.icon;
            return (
              <div
                key={pathway.title}
                className={`lp-card group relative flex-shrink-0 w-[300px] sm:w-[380px] snap-start rounded-[32px] p-8 flex flex-col justify-between transition-all duration-300 will-change-transform ${
                  pathway.isDark
                    ? "bg-[#1E293B] text-white"
                    : "bg-[#162233] text-white"
                }`}
              >
                {/* Top Section: Icon & Badge */}
                <div className="flex items-center justify-between mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-black/40 text-[#C89B3C] flex items-center justify-center">
                    <Icon className="w-7 h-7" strokeWidth={1.75} />
                  </div>
                  {pathway.badge ? (
                    <span className="text-[11px] font-black tracking-wider text-[#0F172A] uppercase bg-[#C89B3C] px-3.5 py-1.5 rounded-full">
                      {pathway.badge}
                    </span>
                  ) : (
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                      Pathway 0{idx + 1}
                    </span>
                  )}
                </div>

                {/* Middle Section: Image banner + text details */}
                <div className="space-y-6">
                  <div className="relative h-48 w-full rounded-2xl overflow-hidden">
                    <img
                      src={pathway.image}
                      alt={pathway.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/60 via-transparent to-transparent" />
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white mb-3">
                      {pathway.title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-300 font-medium leading-relaxed opacity-90">
                      {pathway.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Section: Actionable Footer */}
                <div className="pt-8 mt-8 border-t border-white/10">
                  {pathway.actionType === "button" ? (
                    <button className="inline-flex items-center text-sm font-black text-white group-hover:text-[#C89B3C] transition-colors cursor-pointer w-full justify-between">
                      <span>{pathway.footerText}</span>
                      <div className="w-8 h-8 rounded-full bg-[#C89B3C] text-[#0F172A] flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </button>
                  ) : pathway.actionType === "cta" ? (
                    <a
                      href="/services/pediatric-services"
                      className="w-full bg-[#C89B3C] text-[#0F172A] font-black px-6 py-3.5 rounded-xl text-sm transition-transform text-center cursor-pointer block hover:bg-amber-400"
                    >
                      Request Care
                    </a>
                  ) : (
                    <div className="text-xs font-black tracking-widest text-[#C89B3C] uppercase">
                      {pathway.footerText}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
