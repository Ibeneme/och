"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
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
import { useLanguage } from "@/src/context/LanguageContext";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutTrustSection() {
  const { language } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const parallaxSectionRef = useRef<HTMLDivElement>(null);
  const parallaxBgRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Autoplay was prevented:", error);
      });
    }

    const ctx = gsap.context(() => {
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

  const t = {
    en: {
      badge: "Serving clients since 2010",
      heading: "A trusted legacy of",
      headingHighlight: "compassionate care.",
      paragraph: `JACOP Healthcare Services, Inc., doing business as One Community Home Health, has served clients since 2010, carrying our nurse-founded care legacy forward under a clearer, community-centered brand.`,
      sealEst: "Est. 2010",
      legalName:
        "JACOP Healthcare Services, Inc., doing business as One Community Home Health",
      v1Title: "Nurse-founded",
      v1Desc:
        "Over two decades of clinical leadership and professional accountability.",
      v2Title: "Community focused",
      v2Desc:
        "Delivering individualized care across the Dallas-Fort Worth region.",
      v3Title: "Clinical excellence",
      v3Desc:
        "Dedicated care backed by institutional experience and oversight.",
      storyTag: "Our story",
      storyDesc: `JACOP Healthcare Services, Inc., doing business as One Community Home Health, partners with patients, families, and physicians from our Grand Prairie base to deliver personalized home care that promotes independence, dignity, and peace of mind.`,
      readStory: "Read our full story",
      since: "Since 2010",
      brandName: "One Community",
    },
    es: {
      badge: "Sirviendo a clientes desde 2010",
      heading: "Un legado de confianza en",
      headingHighlight: "cuidado compasivo.",
      paragraph: `JACOP Healthcare Services, Inc., haciendo negocios como One Community Home Health, atiende a clientes desde 2010, llevando nuestro legado de cuidado fundado por enfermeras hacia adelante bajo una marca más clara y centrada en la comunidad.`,
      sealEst: "Fundada 2010",
      legalName:
        "JACOP Healthcare Services, Inc., haciendo negocios como One Community Home Health",
      v1Title: "Fundada por enfermeras",
      v1Desc:
        "Más de dos décadas de liderazgo clínico y responsabilidad profesional.",
      v2Title: "Enfoque comunitario",
      v2Desc:
        "Brindando atención individualizada en toda la región de Dallas-Fort Worth.",
      v3Title: "Excelencia clínica",
      v3Desc:
        "Atención dedicada respaldada por experiencia institucional y supervisión.",
      storyTag: "Nuestra historia",
      storyDesc: `JACOP Healthcare Services, Inc., haciendo negocios como One Community Home Health, se asocia con pacientes, familias y médicos desde nuestra base en Grand Prairie para brindar atención domiciliaria personalizada que promueve la independencia, la dignidad y la tranquilidad.`,
      readStory: "Lea nuestra historia completa",
      since: "Desde 2010",
      brandName: "One Community",
    },
  }[language];

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
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-16">
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center space-x-2 text-[#8A7B5C] px-4 py-2 rounded-full text-xs font-bold tracking-[0.2em] uppercase bg-[#FBF8F2] border border-[#F0E9D9]">
                <Sparkles className="w-3.5 h-3.5 text-[#C89B3C]" />
                <span>{t.badge}</span>
              </div>

              <h2 className=" text-3xl sm:text-5xl lg:text-6xl font-semibold text-[#051122] tracking-tight leading-[1.15]">
                {t.heading}{" "}
                <span className="text-[#C89B3C]">{t.headingHighlight}</span>
              </h2>

              <p className="text-base sm:text-lg text-[#5B6B7C] leading-relaxed font-normal max-w-2xl">
                {t.paragraph}
              </p>
            </div>

            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 -rotate-3">
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#C89B3C]/40" />
                <div className="absolute inset-4 rounded-full bg-[#051122] flex flex-col items-center justify-center text-center px-7 space-y-2">
                  <Stamp className="w-6 h-6 text-[#E4B95A]" />
                  <span className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-bold">
                    {t.sealEst}
                  </span>
                  <span className=" text-[13px] sm:text-sm font-semibold text-white leading-snug break-words">
                    {t.legalName}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-b border-[#F0E9D9] grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#F0E9D9]">
            <div className="group py-8 sm:pr-8 flex items-start gap-4">
              <div className="w-11 h-11 shrink-0 rounded-xl bg-[#F3ECDC] flex items-center justify-center text-[#051122] group-hover:bg-[#051122] group-hover:text-[#E4B95A] transition-colors">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-[#051122] text-sm mb-1">
                  {t.v1Title}
                </h4>
                <p className="text-[#5B6B7C] text-xs leading-relaxed">
                  {t.v1Desc}
                </p>
              </div>
            </div>

            <div className="group py-8 sm:px-8 flex items-start gap-4">
              <div className="w-11 h-11 shrink-0 rounded-xl bg-[#F3ECDC] flex items-center justify-center text-[#051122] group-hover:bg-[#051122] group-hover:text-[#E4B95A] transition-colors">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-[#051122] text-sm mb-1">
                  {t.v2Title}
                </h4>
                <p className="text-[#5B6B7C] text-xs leading-relaxed">
                  {t.v2Desc}
                </p>
              </div>
            </div>

            <div className="group py-8 sm:pl-8 flex items-start gap-4">
              <div className="w-11 h-11 shrink-0 rounded-xl bg-[#F3ECDC] flex items-center justify-center text-[#051122] group-hover:bg-[#051122] group-hover:text-[#E4B95A] transition-colors">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-[#051122] text-sm mb-1">
                  {t.v3Title}
                </h4>
                <p className="text-[#5B6B7C] text-xs leading-relaxed">
                  {t.v3Desc}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 bg-[#051122] rounded-[2.5rem] p-8 sm:p-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
            <div className="flex items-start gap-4 max-w-2xl">
              <BookOpenText className="w-6 h-6 text-[#E4B95A] shrink-0 mt-1" />
              <div>
                <span className="inline-block text-[10px] uppercase tracking-[0.2em] text-[#E4B95A] font-bold mb-2">
                  {t.storyTag}
                </span>
                <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                  {t.storyDesc}
                </p>
              </div>
            </div>

            <Link
              href="/about-us"
              className="group inline-flex items-center justify-center gap-2 bg-[#0F6DF9] hover:bg-[#D9A93F] text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-[120px] transition-colors shrink-0 whitespace-nowrap"
            >
              <span>{t.readStory}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        </div>
      </section>

      <section
        ref={parallaxSectionRef}
        className="relative w-full h-[60vh] sm:h-[65vh] overflow-hidden flex items-center justify-center"
      >
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
            <source src="/assets/care.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/40 to-black/30 z-[1]" />

        <div className="relative z-10 text-center max-w-6xl mx-auto px-6 text-white">
          <span className="inline-block text-[11px] uppercase tracking-[0.3em] text-[#E4B95A] font-bold mb-4">
            {t.since}
          </span>
          <h2 className=" text-4xl sm:text-8xl lg:text-9xl font-bold tracking-tight text-white drop-shadow-md">
            {t.brandName}
          </h2>
        </div>
      </section>
    </>
  );
}
