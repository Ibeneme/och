import { useEffect, useRef } from "react";
import {
  Phone,
  ArrowRight,
  // MapPin,
  // Clock,
  // ShieldCheck,
  // Users,
} from "lucide-react";
import { motion, Variants } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroBg from "@/assets/hero.png";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// TypeScript Variants for Framer Motion
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      ease: "easeOut",
      duration: 0.6,
    },
  },
};

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax scroll effect for the background image
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

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full relative overflow-hidden">
      {/* Background Image with GSAP Parallax */}
      <div
        ref={bgRef}
        className="absolute inset-0 -top-[20%] -bottom-[20%] bg-cover bg-center bg-no-repeat will-change-transform"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/65" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 md:py-20 relative z-10">
        {/* motion.div with whileInView triggers the Intersection Observer */}
        <motion.div
          className="max-w-5xl text-white"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="inline-flex mb-6">
            <span className="inline-flex items-center gap-2 border border-white/30 rounded-full px-3.5 py-1.5 text-[11px] font-bold tracking-wide text-white bg-white/10 backdrop-blur-sm">
              NOW ACCEPTING ADULT REFERRALS · DFW METROPLEX
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-8xl font-extrabold leading-tight tracking-tight mb-5 drop-shadow-sm"
          >
            Helping you stay where you belong{" "}
            <span className="text-[#F59E0B]">.</span>
          </motion.h1>

          {/* Descriptions */}
          <motion.p
            variants={itemVariants}
            className="max-w-4xl text-base sm:text-lg leading-relaxed text-white/90 mb-3"
          >
            Compassionate, professional home health care across the Dallas-Fort
            Worth Metroplex — individualized plans of care, coordinated with
            your physicians, delivered where you’re most comfortable: home.
          </motion.p>
          <motion.p
            variants={itemVariants}
            className="max-w-4xl text-sm leading-relaxed text-white/70 mb-9"
          >
            JACOP Healthcare Services, Inc., serving clients since 2010, is now
            doing business as One Community Home Health.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-3 sm:gap-4 mb-12 md:mb-16"
          >
            <a
              href="/contact#consultation"
              className="inline-flex items-center gap-2 bg-[#F59E0B] hover:bg-[#FBBF24] text-[#0F172A] text-[14.5px] font-bold px-6 py-3.5 rounded-full transition-all hover:shadow-lg active:scale-[0.98]"
            >
              Request Care <ArrowRight size={15} />
            </a>
            <a
              href="/referrals"
              className="inline-flex items-center gap-1.5 text-[14.5px] font-semibold text-white px-4 py-3.5 rounded-full hover:bg-white/10 transition-colors"
            >
              Refer a Patient
            </a>
            <a
              href="tel:9723251598"
              className="inline-flex items-center gap-2 text-[14.5px] font-semibold text-white/85 px-3 py-3.5 hover:text-white transition-colors"
            >
              <Phone size={15} /> (972) 325-1598
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
