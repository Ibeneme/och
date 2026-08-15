import { useEffect, useRef } from "react";
import { Award, ShieldCheck, HeartHandshake, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutTrustSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headlineRef.current,
        { scale: 0.9, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headlineRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto">
        {/* Centered Header Section with Text Zoom-In Effect */}
        <div
          ref={headlineRef}
          className="text-center max-w-5xl mx-auto space-y-6 mb-16 opacity-0 scale-90"
        >
          <div className="inline-flex items-center space-x-2 bg-amber-50 border border-amber-200 text-amber-800 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide">
            <Award className="w-4 h-4 text-[#F59E0B]" />
            <span>Serving Clients Since 2010</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
            A Trusted Legacy of{" "}
            <span className="text-[#F59E0B] underline decoration-[#F59E0B] decoration-wavy decoration-5 underline-offset-8">
              Compassionate Care.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
            <strong className="text-slate-900 font-semibold">
              JACOP Healthcare Services, Inc.
            </strong>
            , serving clients since 2010, is now doing business as{" "}
            <strong className="text-slate-900 font-semibold">
              One Community Home Health
            </strong>
            . Established to carry our nurse-founded care legacy forward under a
            clearer, community-centered brand.
          </p>
        </div>

        {/* Side-by-Side Layout Grid (No Shadows) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Feature Card */}
          <div className="lg:col-span-6 bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 relative overflow-hidden">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 space-y-6 relative z-10">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-widest text-[#F59E0B] bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                  Core Values
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  Dallas-Fort Worth
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                Helping You Stay Where You Belong
              </h3>

              <div className="space-y-4 pt-2">
                <div className="group flex items-start space-x-4 bg-white p-4 rounded-2xl border border-slate-200 hover:border-[#F59E0B] transition-all">
                  <div className="p-2.5 bg-amber-50 rounded-xl text-[#F59E0B]">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">
                      Nurse-Founded
                    </h4>
                    <p className="text-slate-500 text-xs mt-0.5 leading-relaxed">
                      Over two decades of clinical leadership and professional
                      accountability.
                    </p>
                  </div>
                </div>

                <div className="group flex items-start space-x-4 bg-white p-4 rounded-2xl border border-slate-200 hover:border-[#F59E0B] transition-all">
                  <div className="p-2.5 bg-amber-50 rounded-xl text-[#F59E0B]">
                    <HeartHandshake className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">
                      Community Focused
                    </h4>
                    <p className="text-slate-500 text-xs mt-0.5 leading-relaxed">
                      Delivering individualized care across the Dallas-Fort
                      Worth Metroplex.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Details */}
          <div className="lg:col-span-6 space-y-6 lg:pl-6">
            <div className="inline-flex items-center space-x-2 bg-amber-50 border border-amber-200 text-amber-800 px-3 py-1 rounded-full text-xs font-semibold">
              <span>Step 01</span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
              About Our Agency & Mission Preview
            </h3>

            <p className="text-slate-600 text-base leading-relaxed">
              One Community Home Health was established as the DBA of JACOP
              Healthcare Services, Inc. Operating from our Grand Prairie base,
              we partner with patients, families, and physicians to deliver
              personalized home care that promotes independence, dignity, and
              peace of mind.
            </p>

            <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <span className="text-[11px] text-slate-400 font-medium uppercase tracking-wider block">
                  Legal Entity
                </span>
                <span className="text-sm font-semibold text-slate-900">
                  JACOP Healthcare Services, Inc.
                </span>
              </div>

              <a
                href="/about-us"
                className="group inline-flex items-center justify-center space-x-2 bg-[#F59E0B] hover:bg-[#FBBF24] text-[#0F172A] font-bold text-sm px-6 py-3.5 rounded-xl transition-all duration-200"
              >
                <span>Read Full Story</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
