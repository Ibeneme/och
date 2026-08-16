import { Link } from "react-router-dom";

import {
  ShieldAlert,
  Activity,
  Home,
  ShieldCheck,
  Footprints,
  BookOpen,
  Phone,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    icon: ShieldAlert,
    title: "Fall-Risk Assessments",
    desc: "Comprehensive clinical evaluations to identify personal risk factors, medication side effects, and physical vulnerabilities.",
  },
  {
    icon: Activity,
    title: "Balance & Strength Support",
    desc: "Targeted therapeutic exercises designed to improve lower-body strength, posture, and postural stability.",
  },
  {
    icon: Home,
    title: "Home-Safety Recommendations",
    desc: "Expert inspection of living areas to eliminate hazards such as loose rugs, poor lighting, and blocked pathways.",
  },
  {
    icon: ShieldCheck,
    title: "Assistive-Device Education",
    desc: "Guidance on the proper selection, fitting, and safe usage of canes, walkers, and other mobility aids.",
  },
  {
    icon: Footprints,
    title: "Transfer Training",
    desc: "Safe movement techniques for transitioning between beds, chairs, and bathrooms without risking a fall.",
  },
  {
    icon: BookOpen,
    title: "Caregiver Education",
    desc: "Practical instruction for family members on supervisory techniques, spotting hazard risks, and assisting with mobility safely.",
  },
];

export default function FallPreventionComp() {
  return (
    <main className="min-h-screen bg-[#FBF8F2] text-[#3A4657] ohh-sans">
      {/* ===== Hero Section ===== */}
      <section className="relative overflow-hidden pt-12 pb-16 lg:pt-20 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3ECDC] text-[#0A2140] font-semibold text-xs tracking-wider uppercase">
                <span className="w-2 h-2 rounded-full bg-[#C89B3C]" />
                Active clinical discipline
              </div>

              <div className="text-xs text-[#8A7B5C] font-medium tracking-wide">
                JACOP Healthcare Services, Inc., serving clients since 2010, is
                now doing business as One Community Home Health.
              </div>

              <h1 className="ohh-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#0A2140] tracking-tight leading-[1.1]">
                Fall prevention & safety{" "}
                <span className="text-[#C89B3C]">care at home</span>
              </h1>

              <p className="text-base sm:text-lg text-[#5B6B7C] leading-relaxed max-w-2xl">
                Comprehensive clinical assessments, balance training, and home
                safety recommendations designed to protect mobility and prevent
                accidental falls.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a
                  href="#consultation-form"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#0A2140] hover:bg-[#123258] text-[#E4B95A] font-bold rounded-full transition-colors group"
                >
                  <span>Request care & consultation</span>
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
                <a
                  href="tel:9723251598"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#F3ECDC] hover:bg-[#EADFC2] text-[#0A2140] font-semibold rounded-full transition-colors"
                >
                  <Phone size={16} />
                  <span>Call (972) 325-1598</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl p-2 overflow-hidden">
                <div className="relative h-[300px] rounded-[20px] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1000&q=80"
                    alt="Senior balance training and physical therapy support at home"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="ohh-serif text-lg font-semibold text-[#0A2140]">
                    Mobility & protection
                  </h3>
                  <p className="text-sm text-[#5B6B7C] leading-relaxed">
                    Proactive assessment and balance training for secure living.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Overview Section ===== */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 relative">
              <div className="overflow-hidden rounded-3xl">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80"
                  alt="Therapist providing safe physical guidance to an older adult"
                  className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 hidden sm:flex flex-col gap-1 p-6 rounded-3xl bg-[#0A2140] max-w-[220px]">
                <span className="ohh-serif text-3xl font-semibold text-[#E4B95A]">
                  100%
                </span>
                <span className="text-xs text-white/70 font-medium leading-relaxed">
                  Dedicated to preserving personal independence and safety.
                </span>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-8 lg:pl-4">
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#C89B3C]">
                  Safety & mobility protection
                </span>
                <h2 className="ohh-serif text-3xl sm:text-4xl font-semibold text-[#0A2140] tracking-tight">
                  Maintaining independence through proactive fall prevention
                </h2>
                <p className="text-[#5B6B7C] text-sm sm:text-base leading-relaxed">
                  Falls are a primary risk to long-term independence, but many
                  can be prevented through targeted environmental modifications
                  and physical conditioning. Our therapy and nursing teams
                  evaluate individual risk factors, strengthen balance and
                  coordination, and educate caregivers to ensure a secure home
                  environment.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 text-sm font-semibold text-[#0A2140]">
                {[
                  "Thorough Fall-Risk Assessments",
                  "Balance & Strength Exercises",
                  "Home Hazard Identification",
                  "Caregiver Safety Training",
                ].map((item) => (
                  <div
                    key={item}
                    className="bg-[#FBF8F2] p-4 rounded-2xl flex items-center gap-3"
                  >
                    <CheckCircle2 className="text-[#C89B3C] w-5 h-5 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Scope of Services Section ===== */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C89B3C]">
              Specialized care areas
            </span>
            <h2 className="ohh-serif text-3xl sm:text-4xl font-semibold text-[#0A2140] tracking-tight">
              Fall prevention & safety scope of services
            </h2>
            <p className="text-[#5B6B7C] text-base">
              Our structured prevention programs focus on hazard identification,
              physical stability, and proper equipment use.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group bg-white p-8 rounded-3xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1"
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-[#0A2140] text-[#E4B95A] flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-105">
                      <Icon size={26} strokeWidth={1.75} />
                    </div>
                    <h3 className="ohh-serif font-bold text-[#0A2140] mb-3 text-lg tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5B6B7C] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0A2140] rounded-3xl p-10 sm:p-14 flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#C89B3C]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 space-y-3 text-center lg:text-left">
              <h3 className="ohh-serif text-2xl sm:text-3xl font-semibold text-white">
                Worried about falls at home?
              </h3>
              <p className="text-white/70 text-sm sm:text-base max-w-xl">
                Talk to our team about a fall-risk assessment and safety plan.
              </p>
            </div>
            <div className="relative z-10 flex flex-col sm:flex-row gap-4">
              <a
                href="tel:9723251598"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#E4B95A] hover:bg-[#F0C874] text-[#0A2140] font-bold rounded-full transition-colors"
              >
                <Phone size={16} />
                <span>Call (972) 325-1598</span>
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full transition-colors"
              >
                <span>Contact our team</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
