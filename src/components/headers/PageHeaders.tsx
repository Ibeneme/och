import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroVideo from "@/assets/hero.mp4";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface PageHeaderProps {
  title?: string;
  backgroundImage?: string;
}

export default function PageHeader({
  title = "Page Header",
  backgroundImage,
}: PageHeaderProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement) {
      videoElement.muted = true;
      videoElement.defaultMuted = true;
      videoElement.playsInline = true;
      videoElement.autoplay = true;

      const handleLoadedData = () => {
        videoElement.play().catch((error) => {
          console.warn(
            "Autoplay deferred or blocked by browser policy:",
            error
          );
        });
      };

      videoElement.addEventListener("loadeddata", handleLoadedData);

      if (videoElement.readyState >= 3) {
        handleLoadedData();
      }

      const ctx = gsap.context(() => {
        gsap.fromTo(
          bgRef.current,
          { yPercent: -10 },
          {
            yPercent: 15,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      }, sectionRef);

      return () => {
        videoElement.removeEventListener("loadeddata", handleLoadedData);
        ctx.revert();
      };
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[50vh] sm:h-[60vh] md:h-[65vh] overflow-hidden flex items-center justify-center font-sans"
    >
      {/* Parallax Background Video */}
      <div
        ref={bgRef}
        className="absolute inset-0 -top-[-10%] -bottom-[0%] w-full h-full will-change-transform pointer-events-none overflow-hidden"
      >
        {backgroundImage ? (
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
        ) : (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
          >
            <source src={heroVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A2140]/90 via-[#0A2140]/50 to-[#0A2140]/40 z-[1]" />

      {/* Animated background orbs */}
      <div className="absolute inset-0 z-[2] overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-72 h-72 md:w-96 md:h-96 rounded-full bg-[#E4B95A]/20 blur-[100px] animate-[float_8s_ease-in-out_infinite]" />
        <div className="absolute -bottom-32 -right-20 w-80 h-80 md:w-[28rem] md:h-[28rem] rounded-full bg-[#C89B3C]/15 blur-[120px] animate-[float_10s_ease-in-out_infinite_reverse]" />
        <div className="absolute top-1/2 right-[10%] -translate-y-1/2 w-48 h-48 rounded-full bg-[#E4B95A]/10 blur-[80px] animate-[pulse_6s_ease-in-out_infinite]" />
        <div className="absolute top-[20%] left-[15%] w-2 h-2 rounded-full bg-[#E4B95A]/60 animate-[float_5s_ease-in-out_infinite]" />
        <div className="absolute top-[35%] right-[20%] w-1.5 h-1.5 rounded-full bg-[#D9A93F]/50 animate-[float_7s_ease-in-out_infinite_reverse]" />
        <div className="absolute bottom-[30%] left-[25%] w-1 h-1 rounded-full bg-[#E4B95A]/40 animate-[float_6s_ease-in-out_infinite]" />
        <div className="absolute top-[60%] right-[30%] w-2 h-2 rounded-full bg-[#F3ECDC]/30 animate-[float_9s_ease-in-out_infinite_reverse]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6 space-y-5">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-[#E4B95A] font-medium text-xs tracking-wider uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E4B95A] animate-pulse" />
          One Community Home Health
        </div>

        <h1 className="ohh-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tight leading-[1.1] drop-shadow-md">
          {title}
        </h1>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          33% {
            transform: translateY(-18px) translateX(10px);
          }
          66% {
            transform: translateY(12px) translateX(-8px);
          }
        }
      `}</style>
    </section>
  );
}
