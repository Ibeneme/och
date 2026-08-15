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
    const gap = 20;
    const scrollAmount = cardWidth + gap;
    carouselRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <main
      ref={pageRef}
      className="bg-[#fff] min-h-screen pt-24 sm:pt-28 px-4 sm:px-6 lg:px-8 overflow-x-hidden will-change-transform"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="lp-header text-center max-w-4xl mx-auto mb-14 sm:mb-16">
          <span className="lp-eyebrow inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-semibold tracking-[0.18em] uppercase bg-white border border-amber-200 text-amber-700 mb-7">
            Who we serve
          </span>
          <h1 className="lp-heading fp-serif text-4xl sm:text-6xl lg:text-7xl leading-[1.1] font-bold tracking-tight text-slate-900 mb-6">
            Compassionate care tailored for every stage of life{" "}
            <span className="text-amber-700">.</span>
          </h1>
          <p className="lp-subhead text-base sm:text-[17px] text-slate-500 leading-relaxed max-w-2xl mx-auto">
            Professional, nurse-guided support delivered right to your doorstep.
            Explore our dedicated care pathways designed to preserve
            independence, dignity, and peace of mind.
          </p>
        </div>
      </div>

      {/* Carousel Section — Who We Serve */}
      <div className="max-w-6xl mx-auto lp-carousel-wrap mb-24 sm:mb-28">
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <h2 className="fp-serif text-2xl sm:text-3xl font-medium text-slate-900 tracking-tight">
            Our Care Pathways
          </h2>
          <div className="flex items-center gap-2">
            <button
              onClick={() => scrollCarousel("left")}
              disabled={!canScrollLeft}
              aria-label="Previous"
              className={`w-10 h-10 rounded-full border border-amber-200 bg-white flex items-center justify-center transition-all duration-200 ${
                canScrollLeft
                  ? "text-slate-700 hover:border-amber-500 hover:text-amber-700 cursor-pointer"
                  : "text-slate-300 cursor-not-allowed opacity-50"
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollCarousel("right")}
              disabled={!canScrollRight}
              aria-label="Next"
              className={`w-10 h-10 rounded-full border border-amber-200 bg-white flex items-center justify-center transition-all duration-200 ${
                canScrollRight
                  ? "text-slate-700 hover:border-amber-500 hover:text-amber-700 cursor-pointer"
                  : "text-slate-300 cursor-not-allowed opacity-50"
              }`}
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div
          ref={carouselRef}
          className="flex gap-5 overflow-x-auto scroll-smooth pb-4 -mx-1 px-1 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {carePathways.map((pathway) => {
            const Icon = pathway.icon;
            return (
              <div
                key={pathway.title}
                className={`lp-card group relative flex-shrink-0 w-[280px] sm:w-[310px] snap-start rounded-[24px] border flex flex-col justify-between overflow-hidden transition-all duration-300 will-change-transform ${
                  pathway.isDark
                    ? "bg-[#0F172A] text-white border-transparent"
                    : "bg-white border-amber-100 hover:border-amber-300"
                }`}
              >
                {/* Image Banner Header */}
                <div className="relative h-44 w-full overflow-hidden">
                  <img
                    src={pathway.image}
                    alt={pathway.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80" />

                  {/* Floating Badge / Icon */}
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
                    <div className="w-10 h-10 rounded-xl bg-white/95 backdrop-blur-md border border-amber-200 text-amber-700 flex items-center justify-center">
                      <Icon className="w-5 h-5" strokeWidth={1.75} />
                    </div>
                    {pathway.badge && (
                      <span className="text-[10px] font-semibold tracking-wider text-white uppercase bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                        {pathway.badge}
                      </span>
                    )}
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <h3
                      className={`fp-serif text-xl font-medium mb-2.5 tracking-tight ${
                        pathway.isDark ? "text-white" : "text-slate-900"
                      }`}
                    >
                      {pathway.title}
                    </h3>
                    <p
                      className={`text-[13.5px] leading-relaxed mb-6 ${
                        pathway.isDark ? "text-slate-300" : "text-slate-500"
                      }`}
                    >
                      {pathway.description}
                    </p>
                  </div>

                  {/* Footer Action */}
                  <div className="mt-auto">
                    {pathway.actionType === "button" ? (
                      <button className="inline-flex items-center text-[13px] font-semibold text-slate-800 group-hover:text-amber-700 transition-colors cursor-pointer w-full pt-4 border-t border-amber-100 justify-between">
                        <span>{pathway.footerText}</span>
                        <div className="w-7 h-7 rounded-full bg-[#0000CD] text-[#fff] flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
                          <ArrowRight className="w-3.5 h-3.5" />
                        </div>
                      </button>
                    ) : pathway.actionType === "cta" ? (
                      <a
                        href="/services/pediatric-services"
                        className="w-full bg-[#0000CD] text-[#fff] font-semibold px-5 py-3 rounded-xl text-[13px] transition-colors text-center cursor-pointer block"
                      >
                        Request Care
                      </a>
                    ) : (
                      <div className="pt-4 border-t border-amber-100 text-[11px] font-semibold tracking-wider text-slate-400 uppercase">
                        {pathway.footerText}
                      </div>
                    )}
                  </div>
                </div>

                {pathway.isDark && (
                  <>
                    <div className="absolute -right-8 -bottom-8 w-36 h-36 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute top-0 right-0 w-20 h-20 bg-amber-400/5 rounded-full blur-2xl pointer-events-none" />
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
