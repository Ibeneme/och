import {
  Users,
  Globe,
  FileText,
  HeartHandshake,
  BadgeDollarSign,
  Compass,
  Phone,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function MedicalSocialServicesComponent() {
  return (
    <main className="min-h-screen bg-[#0F172A] text-white selection:bg-amber-400 selection:text-[#0F172A]">
      {/* ===== Hero Section ===== */}
      <section className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-32">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-amber-400 font-medium text-xs tracking-widest uppercase">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                Active Clinical Discipline
              </div>

              <div className="text-xs text-slate-400 font-medium tracking-wide">
                JACOP Healthcare Services, Inc., serving clients since 2010, is
                now doing business as One Community Home Health.
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.08]">
                Medical Social Services <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-amber-300">
                  Care at Home
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 font-medium leading-relaxed max-w-2xl">
                Compassionate guidance and psychosocial support to help patients
                and families navigate complex health challenges, connect with
                vital community resources, and plan securely for long-term
                well-being and recovery.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#consultation-form"
                  className="px-8 py-4 bg-amber-400 hover:bg-amber-300 text-[#0F172A] font-black rounded-2xl transition-all shadow-lg shadow-amber-400/20 text-sm flex items-center gap-2 group"
                >
                  <span>Request Care & Consultation</span>
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
                <a
                  href="tel:9723251598"
                  className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold rounded-2xl transition-all text-sm backdrop-blur-md flex items-center gap-2"
                >
                  <Phone size={16} className="text-amber-400" /> Call (972)
                  325-1598
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-[32px] p-2 bg-gradient-to-b from-white/10 to-transparent border border-white/10 shadow-2xl backdrop-blur-xl">
                <div className="relative h-[400px] rounded-[24px] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1000&q=80"
                    alt="Professional social worker warmly consulting with a senior client at home"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent opacity-80" />

                  <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-[#0F172A]/85 border border-white/10 backdrop-blur-md">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-xs font-black uppercase tracking-wider text-emerald-400">
                        Holistic Care Advocacy
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 font-medium">
                      Bridging medical treatments with essential emotional,
                      financial, and community support networks.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Overview Section ===== */}
      <section className="py-24 border-t border-white/5 bg-[#121B2E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 relative">
              <div className="overflow-hidden rounded-[32px] border border-white/10 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=1000&q=80"
                  alt="Family support session with healthcare professional"
                  className="w-full h-[450px] object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 hidden sm:flex flex-col gap-2 p-6 rounded-3xl bg-[#0F172A] border border-white/10 shadow-xl max-w-[240px]">
                <span className="text-3xl font-black text-amber-400">100%</span>
                <span className="text-xs text-slate-300 font-medium leading-relaxed">
                  Dedicated to preserving personal dignity and life quality.
                </span>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-8">
              <div>
                <span className="text-xs font-black uppercase tracking-widest text-amber-400 bg-amber-400/10 px-3.5 py-1.5 rounded-full">
                  Psychosocial & Community Support
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 mb-5 tracking-tight">
                  Navigating Health Challenges With Professional Guidance
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-medium">
                  Our licensed medical social workers assist patients and their
                  families in coping with the emotional, social, and financial
                  impacts of illness or injury. By offering customized
                  counseling, resource coordination, and long-term care
                  planning, we ensure comprehensive support throughout every
                  step of your health journey.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 text-sm font-semibold text-slate-200">
                <div className="bg-[#1B273D] border border-white/5 p-4 rounded-2xl flex items-center gap-3">
                  <CheckCircle2 className="text-amber-400 w-5 h-5 flex-shrink-0" />
                  Licensed Social Workers
                </div>
                <div className="bg-[#1B273D] border border-white/5 p-4 rounded-2xl flex items-center gap-3">
                  <CheckCircle2 className="text-amber-400 w-5 h-5 flex-shrink-0" />
                  Community Resource Access
                </div>
                <div className="bg-[#1B273D] border border-white/5 p-4 rounded-2xl flex items-center gap-3">
                  <CheckCircle2 className="text-amber-400 w-5 h-5 flex-shrink-0" />
                  Family Counseling & Support
                </div>
                <div className="bg-[#1B273D] border border-white/5 p-4 rounded-2xl flex items-center gap-3">
                  <CheckCircle2 className="text-amber-400 w-5 h-5 flex-shrink-0" />
                  Long-Term Care Guidance
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Scope of Services Section ===== */}
      <section className="py-24 bg-[#0F172A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16 space-y-4">
            <span className="text-xs font-black uppercase tracking-widest text-amber-400 bg-amber-400/10 px-3.5 py-1.5 rounded-full">
              Specialized Care Areas
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Medical Social Services Scope
            </h2>
            <p className="text-slate-300 text-base font-medium">
              Our professional social work programs address the crucial
              non-medical needs directly influencing your recovery, home
              comfort, and long-term peace of mind.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Users,
                title: "Psychosocial Assessments",
                desc: "Comprehensive evaluations of emotional, social, and environmental factors affecting health, recovery outcomes, and daily living environments.",
              },
              {
                icon: Globe,
                title: "Community-Resource Coordination",
                desc: "Connecting patients with local support networks, specialized transportation services, essential meal programs, and community assistance grants.",
              },
              {
                icon: FileText,
                title: "Long-Term Care Planning",
                desc: "Strategic planning and advisory support for future care transitions, alternative housing options, healthcare proxies, and advanced directives.",
              },
              {
                icon: HeartHandshake,
                title: "Support for Patients & Families",
                desc: "Empathetic emotional counseling and guidance to help households cope resiliently with chronic, degenerative, or life-altering medical conditions.",
              },
              {
                icon: BadgeDollarSign,
                title: "Financial & Social-Service Referrals",
                desc: "Targeted assistance with insurance questions, public assistance programs, Medicare/Medicaid optimization, and financial aid applications.",
              },
              {
                icon: Compass,
                title: "Navigating Care Challenges",
                desc: "Expert patient advocacy and practical problem-solving support designed to overcome unexpected roadblocks throughout the medical recovery path.",
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="group bg-[#162233] border border-white/5 hover:border-amber-400/40 p-8 rounded-[28px] flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-lg"
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-[#0F172A] text-amber-400 flex items-center justify-center mb-6 border border-white/5 group-hover:scale-110 transition-transform duration-300">
                      <Icon size={26} strokeWidth={1.75} />
                    </div>
                    <h3 className="font-extrabold text-white mb-3 text-lg tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium opacity-90">
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
