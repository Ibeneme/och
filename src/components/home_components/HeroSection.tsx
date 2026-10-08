"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { useLanguage } from "@/src/context/LanguageContext";
import { siteConfig } from "@/src/constants/siteConfig";

const heroContent = {
  en: {
    badge: "NOW ACCEPTING ADULT REFERRALS · DFW METROPLEX",
    title: "Helping you stay where you belong",
    subtitle:
      "Compassionate, professional home health care across the Dallas-Fort Worth Metroplex — individualized plans of care, coordinated with your physicians, delivered where you’re most comfortable: home.",
    legacy:
      "JACOP Healthcare Services, Inc., serving clients since 2010, is now doing business as One Community Health.",
    requestCare: "Request Care",
    referPatient: "Refer a Patient",
  },
  es: {
    badge: "AHORA SE ACEPTAN REFERENCIAS DE ADULTOS · DFW METROPLEX",
    title: "Ayudándole a quedarse donde pertenece",
    subtitle:
      "Cuidado de salud a domicilio compasivo y profesional en todo el Metroplex de Dallas-Fort Worth: planes de atención individualizados, coordinados con sus médicos y entregados donde se siente más cómodo: su hogar.",
    legacy:
      "JACOP Healthcare Services, Inc., que atiende a clientes desde 2010, ahora opera bajo el nombre de One Community Health.",
    requestCare: "Solicitar Cuidado",
    referPatient: "Referir a un Paciente",
  },
};

export default function HeroSection() {
  const { language } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);
  const t = heroContent[language as "en" | "es"] || heroContent.en;

  useLayoutEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    v.defaultMuted = true;
    v.playsInline = true;
    v.setAttribute("muted", "");
    v.setAttribute("playsinline", "");
    v.setAttribute("webkit-playsinline", "");
  }, []);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const attemptPlay = async () => {
      try {
        v.muted = true;
        await v.play();
      } catch {
        // autoplay blocked – fine, poster/fallback already visible
      }
    };

    v.addEventListener("canplay", attemptPlay, { once: true });
    if (v.readyState >= 2) attemptPlay();

    const onInteract = () => {
      if (v.paused) attemptPlay();
    };
    window.addEventListener("touchstart", onInteract, {
      once: true,
      passive: true,
    });
    window.addEventListener("scroll", onInteract, {
      once: true,
      passive: true,
    });

    const onVis = () => {
      if (document.visibilityState === "visible" && v.paused) attemptPlay();
    };
    document.addEventListener("visibilitychange", onVis);

    return () => {
      window.removeEventListener("touchstart", onInteract);
      window.removeEventListener("scroll", onInteract);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  return (
    <section
      className="relative w-full h-[100dvh] min-h-[700px] overflow-hidden flex items-center bg-[#051122]"
      // Explicit solid fallback so the area is never a blank gray box
      style={{ backgroundColor: "#051122" }}
    >
      {/* Poster + video. Poster is the real first-paint asset. */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster="/assets/hero-poster.jpg" // ← real static asset
        disablePictureInPicture
        disableRemotePlayback
        className="absolute inset-0 w-full h-full object-cover"
        // @ts-ignore
        webkit-playsinline="true"
      >
        <source src="/assets/hero.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay – always present */}
      <div className="absolute inset-0 bg-black/40 z-[1]" />

      {/* Content is NEVER opacity-0 / never behind a reveal */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-5xl text-white">
          <div className="inline-flex mb-6">
            <span className="inline-flex items-center gap-2 border border-white/30 rounded-full px-3.5 py-1.5 text-[11px] font-bold tracking-wide text-white bg-white/10 backdrop-blur-sm">
              {t.badge}
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold leading-tight tracking-tight mb-5 drop-shadow-sm">
            {t.title} <span className="text-amber-400">.</span>
          </h1>

          <p className="max-w-4xl text-base sm:text-lg leading-relaxed text-white/90 mb-3">
            {t.subtitle}
          </p>
          <p className="max-w-4xl text-sm leading-relaxed text-white/70 mb-9">
            {t.legacy}
          </p>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-amber-400 hover:bg-[#FBBF24] text-[#051122] text-[14.5px] font-bold px-6 py-3.5 rounded-full transition-all hover:shadow-lg active:scale-[0.98]"
            >
              {t.requestCare} <ArrowRight size={15} />
            </Link>
            <Link
              href="/referrals"
              className="inline-flex items-center gap-1.5 text-[14.5px] font-semibold text-white px-4 py-3.5 rounded-full hover:bg-white/10 transition-colors"
            >
              {t.referPatient}
            </Link>
            <a
              href={`tel:${siteConfig.contact.phoneTel}`}
              className="inline-flex items-center gap-2 text-[14.5px] font-semibold text-white/85 px-3 py-3.5 hover:text-white transition-colors"
            >
              <Phone size={15} /> {siteConfig.contact.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
