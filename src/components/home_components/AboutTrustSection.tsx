import { useEffect, useRef } from "react";
import {
  Award,
  ShieldCheck,
  HeartHandshake,
  ArrowRight,
  Sparkles,
  BookOpenText,
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
          {/* Section Header Badge */}
          <div className="flex flex-col items-center text-center space-y-6 mb-16">
            <div className="inline-flex items-center space-x-2 text-[#8A7B5C] px-4 py-2 rounded-full text-xs font-bold tracking-[0.2em] uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#C89B3C]" />
              <span>Serving clients since 2010</span>
            </div>

            <h2 className="ohh-serif text-3xl sm:text-5xl lg:text-6xl font-semibold text-[#051122] tracking-tight max-w-4xl leading-[1.15]">
              A trusted legacy of{" "}
              <span className="text-[#C89B3C]">compassionate care.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#5B6B7C] leading-relaxed font-normal max-w-2xl mx-auto">
              <strong className="text-[#051122] font-semibold">
                JACOP Healthcare Services, Inc.
              </strong>
              , serving clients since 2010, is now doing business as{" "}
              <strong className="text-[#051122] font-semibold">
                One Community Home Health
              </strong>
              — carrying our nurse-founded care legacy forward under a clearer,
              community-centered brand.
            </p>
          </div>

          {/* Asymmetric two-card layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Column: Core Values Card (Span 7) */}
            <div className="lg:col-span-7 bg-[#FBF8F2] p-8 sm:p-10 rounded-[2.5rem] border border-[#F0E9D9] relative overflow-hidden flex flex-col justify-between">
              <div className="space-y-6 relative z-10">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#8A7B5C] bg-white px-3.5 py-1.5 rounded-full border border-[#EFE8D8]">
                    Core values
                  </span>
                  <span className="text-xs text-[#8A93A0] font-medium">
                    Dallas-Fort Worth Metroplex
                  </span>
                </div>

                <h3 className="ohh-serif text-2xl sm:text-3xl font-semibold text-[#051122] tracking-tight">
                  Helping you stay where you belong
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="group bg-white p-5 rounded-2xl border border-[#F0E9D9] hover:border-[#E4B95A] transition-colors flex flex-col justify-between space-y-4">
                    <div className="w-10 h-10 bg-[#F3ECDC] rounded-xl flex items-center justify-center text-[#051122] group-hover:bg-[#051122] group-hover:text-[#E4B95A] transition-colors">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#051122] text-sm">
                        Nurse-founded
                      </h4>
                      <p className="text-[#5B6B7C] text-xs mt-1 leading-relaxed">
                        Over two decades of clinical leadership and professional
                        accountability.
                      </p>
                    </div>
                  </div>

                  <div className="group bg-white p-5 rounded-2xl border border-[#F0E9D9] hover:border-[#E4B95A] transition-colors flex flex-col justify-between space-y-4">
                    <div className="w-10 h-10 bg-[#F3ECDC] rounded-xl flex items-center justify-center text-[#051122] group-hover:bg-[#051122] group-hover:text-[#E4B95A] transition-colors">
                      <HeartHandshake className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#051122] text-sm">
                        Community focused
                      </h4>
                      <p className="text-[#5B6B7C] text-xs mt-1 leading-relaxed">
                        Delivering individualized care across the Dallas-Fort
                        Worth region.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8 mt-8 border-t border-[#F0E9D9] flex items-center gap-3 text-xs text-[#5B6B7C] relative z-10">
                <Award className="w-4 h-4 text-[#C89B3C] shrink-0" />
                <span>
                  Dedicated clinical excellence backed by institutional
                  experience.
                </span>
              </div>
            </div>

            {/* Right Column: Mission & Narrative Card (Span 5) */}
            <div className="lg:col-span-5 bg-[#051122] p-8 sm:p-10 rounded-[2.5rem] flex flex-col justify-between relative overflow-hidden">
              <div className="space-y-6 relative z-10">
                <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 text-[#E4B95A] px-3 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase">
                  <BookOpenText className="w-3.5 h-3.5" />
                  <span>Our story</span>
                </div>

                <h3 className="ohh-serif text-2xl sm:text-3xl font-semibold text-white tracking-tight leading-tight">
                  Care that meets you at home
                </h3>

                <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                  One Community Home Health operates as the DBA of JACOP
                  Healthcare Services, Inc. From our Grand Prairie base, we
                  partner with patients, families, and physicians to deliver
                  personalized home care that promotes independence, dignity,
                  and peace of mind.
                </p>
              </div>

              <div className="pt-8 mt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative z-10">
                <div>
                  <span className="text-[11px] text-white/40 font-medium uppercase tracking-wider block">
                    Legal entity
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-white/90">
                    JACOP Healthcare Services, Inc.
                  </span>
                </div>

                <a
                  href="/about-us"
                  className="group inline-flex items-center justify-center gap-2 bg-[#0F6DF9] hover:bg-[#D9A93F] text-[#fff] font-bold text-xs sm:text-sm px-6 py-3.5 rounded-[120px] transition-colors shrink-0"
                >
                  <span>Read our full story</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </a>
              </div>
            </div>
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
          <h2 className="ohh-serif text-4xl sm:text-8xl lg:text-9xl font-bold tracking-tight text-white drop-shadow-md">
           <span></span> One Community
          </h2>
        </div>
      </section>
    </>
  );
}
