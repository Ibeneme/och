import {
    ShieldAlert,
    Activity,
    Home,
    ShieldCheck,
    Footprints,
    BookOpen,
    Phone,
  } from "lucide-react";
  
  export default function FallPreventionComp() {
    return (
      <main className="min-h-screen bg-[#FAFAF8] text-slate-800">
        {/* ===== Hero Section ===== */}
        <section className="relative bg-[#0F172A] text-white overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=2000&q=80"
              alt="Fall prevention and physical therapy at home"
              className="w-full h-full object-cover opacity-15"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#F59E0B] font-medium text-xs tracking-wider uppercase mb-6">
                <span className="w-2 h-2 rounded-full bg-[#F59E0B] animate-pulse" />
                Active Clinical Discipline
              </div>
              <div className="text-xs text-slate-300 mb-3 font-medium">
                JACOP Healthcare Services, Inc., serving clients since 2010, is now doing business as One Community Home Health[cite: 1].
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6 tracking-tight">
                Fall Prevention & Safety{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
                  Care at Home
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed">
                Comprehensive clinical assessments, balance training, and home safety recommendations designed to protect mobility and prevent accidental falls.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="tel:9723251598"
                  className="px-8 py-4 bg-[#F59E0B] hover:bg-[#FBBF24] text-[#0F172A] font-bold rounded-xl transition-all text-sm flex items-center gap-2"
                >
                  <Phone size={16} /> Call (972) 325-1598
                </a>
              </div>
            </div>
          </div>
        </section>
  
        {/* ===== Overview Section ===== */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <span className="text-[#F59E0B] font-semibold tracking-widest uppercase text-xs">
                    Safety & Mobility Protection
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] mt-2 mb-4">
                    Maintaining Independence Through Proactive Fall Prevention
                  </h2>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    Falls are a primary risk to long-term independence, but many can be prevented through targeted environmental modifications and physical conditioning. Our therapy and nursing teams evaluate individual risk factors, strengthen balance and coordination, and educate caregivers to ensure a secure home environment.
                  </p>
                </div>
                <div className="grid sm:grid-cols-2 gap-4 text-sm font-medium text-slate-700">
                  <div className="bg-white p-4 rounded-2xl flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                    Thorough Fall-Risk Assessments
                  </div>
                  <div className="bg-white p-4 rounded-2xl flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                    Balance & Strength Exercises
                  </div>
                  <div className="bg-white p-4 rounded-2xl flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                    Home Hazard Identification
                  </div>
                  <div className="bg-white p-4 rounded-2xl flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                    Caregiver Safety Training
                  </div>
                </div>
              </div>
              <div className="lg:col-span-6">
                <div className="overflow-hidden rounded-3xl">
                  <img
                    src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1000&q=80"
                    alt="Therapist assisting a patient with mobility and balance training"
                    className="w-full h-80 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
  
        {/* ===== Core Topics / Services Grid ===== */}
        <section className="py-20 bg-slate-100/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="text-[#F59E0B] font-semibold tracking-widest uppercase text-xs">
                Specialized Care Areas
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] mt-2 mb-4">
                Fall Prevention & Safety Scope of Services
              </h2>
              <p className="text-slate-600 text-sm">
                Our structured prevention programs focus on hazard identification, physical stability, and proper equipment use.
              </p>
            </div>
  
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* 1. Fall-risk assessments */}
              <div className="bg-white p-6 rounded-3xl flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-4">
                    <ShieldAlert size={24} />
                  </div>
                  <h3 className="font-bold text-[#0F172A] mb-2 text-base">Fall-Risk Assessments</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Comprehensive clinical evaluations to identify personal risk factors, medication side effects, and physical vulnerabilities.
                  </p>
                </div>
              </div>
  
              {/* 2. Balance and strength support */}
              <div className="bg-white p-6 rounded-3xl flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-4">
                    <Activity size={24} />
                  </div>
                  <h3 className="font-bold text-[#0F172A] mb-2 text-base">Balance & Strength Support</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Targeted therapeutic exercises designed to improve lower-body strength, posture, and postural stability.
                  </p>
                </div>
              </div>
  
              {/* 3. Home-safety recommendations */}
              <div className="bg-white p-6 rounded-3xl flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-4">
                    <Home size={24} />
                  </div>
                  <h3 className="font-bold text-[#0F172A] mb-2 text-base">Home-Safety Recommendations</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Expert inspection of living areas to eliminate hazards such as loose rugs, poor lighting, and blocked pathways.
                  </p>
                </div>
              </div>
  
              {/* 4. Assistive-device education */}
              <div className="bg-white p-6 rounded-3xl flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-4">
                    <ShieldCheck size={24} />
                  </div>
                  <h3 className="font-bold text-[#0F172A] mb-2 text-base">Assistive-Device Education</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Guidance on the proper selection, fitting, and safe usage of canes, walkers, and other mobility aids.
                  </p>
                </div>
              </div>
  
              {/* 5. Transfer training */}
              <div className="bg-white p-6 rounded-3xl flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-4">
                    <Footprints size={24} />
                  </div>
                  <h3 className="font-bold text-[#0F172A] mb-2 text-base">Transfer Training</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Safe movement techniques for transitioning between beds, chairs, and bathrooms without risking a fall.
                  </p>
                </div>
              </div>
  
              {/* 6. Caregiver education */}
              <div className="bg-white p-6 rounded-3xl flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-4">
                    <BookOpen size={24} />
                  </div>
                  <h3 className="font-bold text-[#0F172A] mb-2 text-base">Caregiver Education</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Practical instruction for family members on supervisory techniques, spotting hazard risks, and assisting with mobility safely.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }