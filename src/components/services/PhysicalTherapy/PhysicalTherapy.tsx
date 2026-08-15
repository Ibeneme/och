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
} from "lucide-react";

export default function PhysicalTherapyComponent() {
  return (
    <main className="min-h-screen bg-[#FAFAF8] text-slate-800">
      <section className="relative bg-[#0F172A] text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=2000&q=80"
            alt="Physical therapist assisting a patient with rehabilitation exercises"
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
              JACOP Healthcare Services, Inc., serving clients since 2010, is
              now doing business as One Community Home Health[cite: 1].
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6 tracking-tight">
              Physical Therapy{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
                Care at Home
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed">
              Physician-directed physical therapy designed to restore mobility,
              rebuild strength, and empower safe, independent living right in
              your home.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#consultation-form"
                className="px-8 py-4 bg-[#F59E0B] hover:bg-[#FBBF24] text-[#0F172A] font-bold rounded-xl transition-all text-sm"
              >
                Request Care & Consultation
              </a>
              <a
                href="tel:9723251598"
                className="px-8 py-4 bg-white/10 hover:bg-white/15 text-white font-semibold rounded-xl transition-all text-sm backdrop-blur-sm flex items-center gap-2"
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
                  Rehabilitation & Mobility Support
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] mt-2 mb-4">
                  Restoring Independence Through Targeted Movement
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Our licensed physical therapists work closely with your
                  physician to evaluate physical limitations and create
                  customized rehabilitation programs. Whether you are recovering
                  from surgery, managing an injury, or striving to prevent
                  falls, our in-home therapy plans focus on enhancing overall
                  physical function and confidence.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 text-sm font-medium text-slate-700">
                <div className="bg-white p-4 rounded-2xl flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                  Licensed Physical Therapists
                </div>
                <div className="bg-white p-4 rounded-2xl flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                  Customized Exercise Plans
                </div>
                <div className="bg-white p-4 rounded-2xl flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                  One-on-One Home Sessions
                </div>
                <div className="bg-white p-4 rounded-2xl flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                  Safety & Environment Review
                </div>
              </div>
            </div>
            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-3xl">
                <img
                  src="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=1000&q=80"
                  alt="Physical therapist helping an older adult stretch during home therapy session"
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
              Physical Therapy Scope of Services
            </h2>
            <p className="text-slate-600 text-sm">
              Our professional therapy programs address every facet of mobility,
              safety, and physical conditioning to support your recovery goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* 1. Strength and mobility */}
            <div className="bg-white p-6 rounded-3xl flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-4">
                  <Activity size={24} />
                </div>
                <h3 className="font-bold text-[#0F172A] mb-2 text-base">
                  Strength & Mobility
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Targeted exercises to rebuild muscle strength, enhance
                  flexibility, and improve range of motion.
                </p>
              </div>
            </div>

            {/* 2. Balance training */}
            <div className="bg-white p-6 rounded-3xl flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-4">
                  <Footprints size={24} />
                </div>
                <h3 className="font-bold text-[#0F172A] mb-2 text-base">
                  Balance Training
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Specialized techniques and stability drills to enhance
                  postural control and body coordination.
                </p>
              </div>
            </div>

            {/* 3. Gait training */}
            <div className="bg-white p-6 rounded-3xl flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-4">
                  <ShieldAlert size={24} />
                </div>
                <h3 className="font-bold text-[#0F172A] mb-2 text-base">
                  Gait Training
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Guidance and practice to help patients regain a safe, natural,
                  and confident walking pattern.
                </p>
              </div>
            </div>

            {/* 4. Fall prevention */}
            <div className="bg-white p-6 rounded-3xl flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-4">
                  <ShieldCheck size={24} />
                </div>
                <h3 className="font-bold text-[#0F172A] mb-2 text-base">
                  Fall Prevention
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Comprehensive home risk assessments and strategies designed to
                  minimize accident hazards.
                </p>
              </div>
            </div>

            {/* 5. Transfer training */}
            <div className="bg-white p-6 rounded-3xl flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-4">
                  <ArrowRightLeft size={24} />
                </div>
                <h3 className="font-bold text-[#0F172A] mb-2 text-base">
                  Transfer Training
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Safe movement techniques for transitioning between beds,
                  chairs, and vehicles independently.
                </p>
              </div>
            </div>

            {/* 6. Rehabilitation after illness, injury, or surgery */}
            <div className="bg-white p-6 rounded-3xl flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-4">
                  <HeartPulse size={24} />
                </div>
                <h3 className="font-bold text-[#0F172A] mb-2 text-base">
                  Post-Op & Injury Rehab
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Structured recovery protocols following joint replacements,
                  surgeries, or severe illnesses.
                </p>
              </div>
            </div>

            {/* 7. Home exercise programs */}
            <div className="bg-white p-6 rounded-3xl flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-4">
                  <Dumbbell size={24} />
                </div>
                <h3 className="font-bold text-[#0F172A] mb-2 text-base">
                  Home Exercise Programs
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Custom routines tailored for patients to practice safely
                  between therapist visits.
                </p>
              </div>
            </div>

            {/* 8. Assistive-device education */}
            <div className="bg-white p-6 rounded-3xl flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-4">
                  <FileText size={24} />
                </div>
                <h3 className="font-bold text-[#0F172A] mb-2 text-base">
                  Assistive-Device Education
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Proper instruction and fitting for canes, walkers,
                  wheelchairs, and other supportive tools.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
