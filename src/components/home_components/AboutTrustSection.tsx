import { useEffect, useRef } from "react";
import {
  Award,
  ShieldCheck,
  HeartHandshake,
  ArrowRight,
  Sparkles,
  BookOpenText,
  Stamp,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import care from "../../assets/care.mp4";

gsap.registerPlugin(ScrollTrigger);

export default function AboutTrustSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const parallaxSectionRef = useRef<HTMLDivElement>(null);
  const parallaxBgRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Ensure video autoplays on Safari and Chrome
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Autoplay was prevented:", error);
      });
    }

    const ctx = gsap.context(() => {
      // Fade in/up animation for the main content card grid
      gsap.fromTo(
        containerRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Full page parallax scroll effect for the video section
      gsap.fromTo(
        parallaxBgRef.current,
        { yPercent: -15 },
        {
          yPercent: 15,
          ease: "none",
          scrollTrigger: {
            trigger: parallaxSectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        className="relative bg-white py-24 sm:py-32 px-6 lg:px-12 overflow-hidden"
      >
        <div
          ref={containerRef}
          className="max-w-7xl mx-auto relative z-10 opacity-0"
        >
          {/* Heading + legacy seal */}
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-16">
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center space-x-2 text-[#8A7B5C] px-4 py-2 rounded-full text-xs font-bold tracking-[0.2em] uppercase bg-[#FBF8F2] border border-[#F0E9D9]">
                <Sparkles className="w-3.5 h-3.5 text-[#C89B3C]" />
                <span>Serving clients since 2010</span>
              </div>

              <h2 className="ohh-serif text-3xl sm:text-5xl lg:text-6xl font-semibold text-[#051122] tracking-tight leading-[1.15]">
                A trusted legacy of{" "}
                <span className="text-[#C89B3C]">compassionate care.</span>
              </h2>

              <p className="text-base sm:text-lg text-[#5B6B7C] leading-relaxed font-normal max-w-2xl">
                <strong className="text-[#051122] font-semibold">
                  JACOP Healthcare Services, Inc.
                </strong>
                , serving clients since 2010, is now doing business as{" "}
                <strong className="text-[#051122] font-semibold">
                  One Community Home Health
                </strong>
                — carrying our nurse-founded care legacy forward under a
                clearer, community-centered brand.
              </p>
            </div>

            {/* Legacy seal */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 -rotate-3">
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#C89B3C]/40" />
                <div className="absolute inset-4 rounded-full bg-[#051122] flex flex-col items-center justify-center text-center px-7 space-y-2">
                  <Stamp className="w-6 h-6 text-[#E4B95A]" />
                  <span className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-bold">
                    Est. 2010
                  </span>
                  <span className="ohh-serif text-base sm:text-lg font-semibold text-white leading-tight">
                    One Community Home Health
                  </span>
                  <span className="text-[10px] text-white/40 leading-snug">
                    DBA of JACOP Healthcare Services, Inc.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Value row */}
          <div className="border-t border-b border-[#F0E9D9] grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#F0E9D9]">
            <div className="group py-8 sm:pr-8 flex items-start gap-4">
              <div className="w-11 h-11 shrink-0 rounded-xl bg-[#F3ECDC] flex items-center justify-center text-[#051122] group-hover:bg-[#051122] group-hover:text-[#E4B95A] transition-colors">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-[#051122] text-sm mb-1">
                  Nurse-founded
                </h4>
                <p className="text-[#5B6B7C] text-xs leading-relaxed">
                  Over two decades of clinical leadership and professional
                  accountability.
                </p>
              </div>
            </div>

            <div className="group py-8 sm:px-8 flex items-start gap-4">
              <div className="w-11 h-11 shrink-0 rounded-xl bg-[#F3ECDC] flex items-center justify-center text-[#051122] group-hover:bg-[#051122] group-hover:text-[#E4B95A] transition-colors">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-[#051122] text-sm mb-1">
                  Community focused
                </h4>
                <p className="text-[#5B6B7C] text-xs leading-relaxed">
                  Delivering individualized care across the Dallas-Fort Worth
                  region.
                </p>
              </div>
            </div>

            <div className="group py-8 sm:pl-8 flex items-start gap-4">
              <div className="w-11 h-11 shrink-0 rounded-xl bg-[#F3ECDC] flex items-center justify-center text-[#051122] group-hover:bg-[#051122] group-hover:text-[#E4B95A] transition-colors">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-[#051122] text-sm mb-1">
                  Clinical excellence
                </h4>
                <p className="text-[#5B6B7C] text-xs leading-relaxed">
                  Dedicated care backed by institutional experience and
                  oversight.
                </p>
              </div>
            </div>
          </div>

          {/* Mission narrative banner */}
          <div className="mt-10 bg-[#051122] rounded-[2.5rem] p-8 sm:p-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
            <div className="flex items-start gap-4 max-w-2xl">
              <BookOpenText className="w-6 h-6 text-[#E4B95A] shrink-0 mt-1" />
              <div>
                <span className="inline-block text-[10px] uppercase tracking-[0.2em] text-[#E4B95A] font-bold mb-2">
                  Our story
                </span>
                <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                  One Community Home Health operates as the DBA of JACOP
                  Healthcare Services, Inc. From our Grand Prairie base, we
                  partner with patients, families, and physicians to deliver
                  personalized home care that promotes independence, dignity,
                  and peace of mind.
                </p>
              </div>
            </div>

            <a
              href="/about-us"
              className="group inline-flex items-center justify-center gap-2 bg-[#0F6DF9] hover:bg-[#D9A93F] text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-[120px] transition-colors shrink-0 whitespace-nowrap"
            >
              <span>Read our full story</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </div>
        </div>
      </section>

      <section
        ref={parallaxSectionRef}
        className="relative w-full h-[60vh] sm:h-[65vh] overflow-hidden flex items-center justify-center"
      >
        {/* Parallax Background Video Container */}
        <div
          ref={parallaxBgRef}
          className="absolute inset-0 -top-[0%] -bottom-[0%] w-full h-full will-change-transform pointer-events-none overflow-hidden"
        >
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={care} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Dark Gradient Overlay for Legibility & Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/40 to-black/30 z-[1]" />

        {/* Content Over Parallax Video */}
        <div className="relative z-10 text-center max-w-6xl mx-auto px-6 text-white">
          <span className="inline-block text-[11px] uppercase tracking-[0.3em] text-[#E4B95A] font-bold mb-4">
            Since 2010
          </span>
          <h2 className="ohh-serif text-4xl sm:text-8xl lg:text-9xl font-bold tracking-tight text-white drop-shadow-md">
            One Community
          </h2>
        </div>
      </section>
    </>
  );
}
