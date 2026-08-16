import {
  Activity,
  Footprints,
  ShieldAlert,
  ArrowRightLeft,
  HeartPulse,
  Dumbbell,
  FileText,
  ShieldCheck,
  Phone,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    icon: Activity,
    title: "Strength & Mobility",
    desc: "Targeted exercises to rebuild muscle strength, enhance flexibility, and improve range of motion safely at home.",
  },
  {
    icon: Footprints,
    title: "Balance Training",
    desc: "Specialized techniques and stability drills to enhance postural control, coordination, and overall steadiness.",
  },
  {
    icon: ShieldAlert,
    title: "Gait Training",
    desc: "Guidance and hands-on practice to help patients regain a safe, natural, and confident walking pattern.",
  },
  {
    icon: ShieldCheck,
    title: "Fall Prevention",
    desc: "Comprehensive home risk assessments and proactive strategies designed to minimize accident hazards.",
  },
  {
    icon: ArrowRightLeft,
    title: "Transfer Training",
    desc: "Safe movement techniques for transitioning between beds, chairs, and vehicles independently.",
  },
  {
    icon: HeartPulse,
    title: "Post-Op & Injury Rehab",
    desc: "Structured recovery protocols following joint replacements, surgeries, or severe medical illnesses.",
  },
  {
    icon: Dumbbell,
    title: "Home Exercise Programs",
    desc: "Custom routines tailored for patients to practice safely and effectively between therapist visits.",
  },
  {
    icon: FileText,
    title: "Assistive-Device Education",
    desc: "Proper instruction, adjustment, and fitting for canes, walkers, wheelchairs, and other supportive tools.",
  },
];

export default function PhysicalTherapyComponent() {
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
                Physical therapy{" "}
                <span className="text-[#C89B3C]">care at home</span>
              </h1>

              <p className="text-base sm:text-lg text-[#5B6B7C] leading-relaxed max-w-2xl">
                Physician-directed physical therapy designed to restore
                mobility, rebuild strength, and empower safe, independent living
                right in the comfort of your home.
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
                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1000&q=80"
                    alt="Physical therapist assisting a patient with rehabilitation exercises"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="ohh-serif text-lg font-semibold text-[#0A2140]">
                    Targeted rehabilitation
                  </h3>
                  <p className="text-sm text-[#5B6B7C] leading-relaxed">
                    Rebuilding confidence, strength, and mobility through expert
                    clinical sessions.
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
                  src="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=1000&q=80"
                  alt="Physical therapist helping an older adult stretch during home therapy session"
                  className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 hidden sm:flex flex-col gap-1 p-6 rounded-3xl bg-[#0A2140] max-w-[220px]">
                <span className="ohh-serif text-3xl font-semibold text-[#E4B95A]">
                  100%
                </span>
                <span className="text-xs text-white/70 font-medium leading-relaxed">
                  Dedicated to safe recovery and enhanced physical performance.
                </span>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-8 lg:pl-4">
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#C89B3C]">
                  Rehabilitation & mobility support
                </span>
                <h2 className="ohh-serif text-3xl sm:text-4xl font-semibold text-[#0A2140] tracking-tight">
                  Restoring independence through targeted movement
                </h2>
                <p className="text-[#5B6B7C] text-sm sm:text-base leading-relaxed">
                  Our licensed physical therapists work closely with your
                  physician to evaluate physical limitations and create
                  customized rehabilitation programs. Whether you are recovering
                  from surgery, managing an injury, or striving to prevent
                  falls, our in-home therapy plans focus on enhancing overall
                  physical function and confidence.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 text-sm font-semibold text-[#0A2140]">
                {[
                  "Licensed Physical Therapists",
                  "Customized Exercise Plans",
                  "One-on-One Home Sessions",
                  "Safety & Environment Review",
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
              Physical therapy scope of services
            </h2>
            <p className="text-[#5B6B7C] text-base">
              Our professional therapy programs address every facet of mobility,
              safety, and physical conditioning to support your recovery goals.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group bg-white p-8 rounded-3xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-[#0A2140] text-[#E4B95A] flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-105">
                      <Icon size={22} strokeWidth={1.75} />
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
    </main>
  );
}
