import {
  HeartPulse,
  Activity,
  Pill,
  FileText,
  Stethoscope,
  BookOpen,
  Users,
  ShieldCheck,
  Phone,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function SkilledNursingPage() {
  return (
    <main className="min-h-screen bg-[#0F172A] text-white selection:bg-[#F59E0B] selection:text-[#0F172A]">
      {/* ===== Hero Section: Modern Asymmetric Bento Header ===== */}
      <section className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28">
        {/* Background glow effects */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#F59E0B]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Headlines & CTAs */}
            <div className="lg:col-span-7 space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#F59E0B] font-medium text-xs tracking-widest uppercase">
                <span className="w-2 h-2 rounded-full bg-[#F59E0B] animate-pulse" />
                Active Clinical Discipline
              </div>

              <div className="text-xs text-slate-400 font-medium tracking-wide">
                JACOP Healthcare Services, Inc., serving clients since 2010, is
                now doing business as One Community Home Health.
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.08]">
                Skilled Nursing <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F59E0B] via-amber-200 to-amber-400">
                  Care at Home
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 font-medium leading-relaxed max-w-2xl">
                Physician-directed clinical support delivered by licensed nurses
                to promote healing, manage chronic conditions, and ensure safe,
                dignified recovery in the comfort of home.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#consultation-form"
                  className="px-8 py-4 bg-[#F59E0B] hover:bg-[#FBBF24] text-[#0F172A] font-black rounded-2xl transition-all shadow-lg shadow-[#F59E0B]/20 text-sm flex items-center gap-2 group"
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
                  <Phone size={16} className="text-[#F59E0B]" /> Call (972)
                  325-1598
                </a>
              </div>
            </div>

            {/* Right Column: Dynamic Visual Card Feature */}
            <div className="lg:col-span-5">
              <div className="relative rounded-[32px] p-2 bg-gradient-to-b from-white/10 to-transparent border border-white/10 shadow-2xl backdrop-blur-xl">
                <div className="relative h-[380px] rounded-[24px] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80"
                    alt="Nurse caring for a patient at home"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent opacity-80" />

                  <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-[#0F172A]/80 border border-white/10 backdrop-blur-md">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-xs font-black uppercase tracking-wider text-emerald-400">
                        Verified Clinical Excellence
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 font-medium">
                      Providing professional, trusted, and individualized
                      medical oversight directly to families across the
                      community.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Overview Section: Sleek Bento Layout ===== */}
      <section className="py-24 border-t border-white/5 bg-[#121B2E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 relative">
              <div className="overflow-hidden rounded-[32px] border border-white/10 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1000&q=80"
                  alt="Compassionate home healthcare nurse smiling with a senior patient"
                  className="w-full h-[420px] object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 hidden sm:flex flex-col gap-2 p-6 rounded-3xl bg-[#0F172A] border border-white/10 shadow-xl max-w-[240px]">
                <span className="text-3xl font-black text-[#F59E0B]">10+</span>
                <span className="text-xs text-slate-300 font-medium leading-relaxed">
                  Years of dependable dedicated home health service excellence.
                </span>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-8">
              <div>
                <span className="text-[#F59E0B] font-black tracking-widest uppercase text-xs">
                  Professional Clinical Support
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3 mb-4 tracking-tight">
                  Expert Nursing Care Tailored to Your Recovery Plan
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Our skilled nursing services provide comprehensive,
                  individualized medical care directly in your home. Working
                  closely with your physician, our licensed nurses monitor
                  health status, manage complex medications, and provide
                  essential education to empower patients and caregivers.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 text-sm font-semibold text-slate-200">
                <div className="bg-[#1B273D] border border-white/5 p-4 rounded-2xl flex items-center gap-3">
                  <CheckCircle2 className="text-[#F59E0B] w-5 h-5 flex-shrink-0" />
                  Licensed Registered Nurses (RN)
                </div>
                <div className="bg-[#1B273D] border border-white/5 p-4 rounded-2xl flex items-center gap-3">
                  <CheckCircle2 className="text-[#F59E0B] w-5 h-5 flex-shrink-0" />
                  Physician-Directed Plans
                </div>
                <div className="bg-[#1B273D] border border-white/5 p-4 rounded-2xl flex items-center gap-3">
                  <CheckCircle2 className="text-[#F59E0B] w-5 h-5 flex-shrink-0" />
                  Personalized In-Home Visits
                </div>
                <div className="bg-[#1B273D] border border-white/5 p-4 rounded-2xl flex items-center gap-3">
                  <CheckCircle2 className="text-[#F59E0B] w-5 h-5 flex-shrink-0" />
                  24/7 On-Call Support
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Core Topics / Services Grid: High-End Card Design ===== */}
      <section className="py-24 bg-[#0F172A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-[#F59E0B] font-black tracking-widest uppercase text-xs">
              Comprehensive Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3 mb-4 tracking-tight">
              Skilled Nursing Clinical Scope
            </h2>
            <p className="text-slate-300 text-base">
              Our multidisciplinary approach covers a wide array of specialized
              clinical needs to support independence, safety, and recovery at
              home.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Stethoscope,
                title: "Health Assessments",
                desc: "Comprehensive evaluations of physical status, recovery progress, and ongoing home health needs.",
              },
              {
                icon: Pill,
                title: "Medication Management & Education",
                desc: "Medication reconciliation, adherence tracking, side-effect monitoring, and clear patient teaching.",
              },
              {
                icon: Activity,
                title: "Vital-Sign Monitoring",
                desc: "Regular tracking of blood pressure, heart rate, oxygen saturation, temperature, and weight.",
              },
              {
                icon: FileText,
                title: "Physician-Order Implementation",
                desc: "Precise execution of medical treatments, therapies, and clinical orders established by your doctor.",
              },
              {
                icon: HeartPulse,
                title: "Chronic-Condition Monitoring",
                desc: "Ongoing clinical oversight for conditions such as diabetes, heart failure, COPD, and hypertension.",
              },
              {
                icon: BookOpen,
                title: "Patient & Caregiver Education",
                desc: "Empowering families with knowledge regarding disease management, self-care techniques, and safety.",
              },
              {
                icon: Users,
                title: "Care Coordination",
                desc: "Seamless communication between physicians, therapists, family members, and medical suppliers.",
              },
              {
                icon: ShieldCheck,
                title: "Disease-Management Support",
                desc: "Structured programs to prevent complications, reduce hospital re-admissions, and improve quality of life.",
              },
            ].map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={idx}
                  className="group bg-[#162233] border border-white/5 hover:border-[#F59E0B]/40 p-8 rounded-[28px] flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-lg"
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-[#0F172A] text-[#F59E0B] flex items-center justify-center mb-6 border border-white/5 group-hover:scale-110 transition-transform duration-300">
                      <Icon size={26} strokeWidth={1.75} />
                    </div>
                    <h3 className="font-extrabold text-white mb-3 text-lg tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium opacity-90">
                      {service.desc}
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
