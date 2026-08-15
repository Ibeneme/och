import {
  FileText,
  Layers,
  ShieldAlert,
  HeartPulse,
  Activity,
  ShieldCheck,
  BookOpen,
  Phone,
} from "lucide-react";

export default function WoundCareComponent() {
  return (
    <main className="min-h-screen bg-[#FAFAF8] text-slate-800">
      {/* ===== Hero Section ===== */}
      <section className="relative bg-[#0F172A] text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=2000&q=80"
            alt="Wound care nurse providing specialized treatment at home"
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
              Wound Care{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
                Care at Home
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed">
              Professional, clinical wound management and specialized dressing
              protocols delivered safely in your home to promote healing and
              prevent infection.
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
                  Advanced Clinical Treatment
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] mt-2 mb-4">
                  Promoting Optimal Healing and Tissue Recovery
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Our skilled nursing team specializes in comprehensive wound
                  care management. Working under physician direction, we provide
                  thorough assessments, sterile dressing changes, and
                  specialized support for surgical sites, pressure injuries, and
                  diabetic wounds to ensure safe and rapid recovery at home.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 text-sm font-medium text-slate-700">
                <div className="bg-white p-4 rounded-2xl flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                  Licensed Skilled Nurses
                </div>
                <div className="bg-white p-4 rounded-2xl flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                  Physician-Directed Protocols
                </div>
                <div className="bg-white p-4 rounded-2xl flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                  Infection Prevention Focus
                </div>
                <div className="bg-white p-4 rounded-2xl flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                  Caregiver Education & Support
                </div>
              </div>
            </div>
            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-3xl">
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80"
                  alt="Specialized nurse conducting medical care at home"
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
              Wound Care Scope of Services
            </h2>
            <p className="text-slate-600 text-sm">
              Our clinical wound care programs cover every aspect of monitoring,
              treatment, prevention, and patient education.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* 1. Wound assessment */}
            <div className="bg-white p-6 rounded-3xl flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-4">
                  <FileText size={24} />
                </div>
                <h3 className="font-bold text-[#0F172A] mb-2 text-base">
                  Wound Assessment
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Regular clinical evaluations to track healing progress,
                  measure dimensions, and monitor tissue condition.
                </p>
              </div>
            </div>

            {/* 2. Dressing changes */}
            <div className="bg-white p-6 rounded-3xl flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-4">
                  <Layers size={24} />
                </div>
                <h3 className="font-bold text-[#0F172A] mb-2 text-base">
                  Dressing Changes
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Sterile, professional application of advanced dressings
                  tailored to promote optimal wound closure.
                </p>
              </div>
            </div>

            {/* 3. Pressure-injury care */}
            <div className="bg-white p-6 rounded-3xl flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-4">
                  <ShieldAlert size={24} />
                </div>
                <h3 className="font-bold text-[#0F172A] mb-2 text-base">
                  Pressure-Injury Care
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Specialized treatment and prevention strategies for pressure
                  ulcers and skin breakdown.
                </p>
              </div>
            </div>

            {/* 4. Post-surgical wound support */}
            <div className="bg-white p-6 rounded-3xl flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-4">
                  <HeartPulse size={24} />
                </div>
                <h3 className="font-bold text-[#0F172A] mb-2 text-base">
                  Post-Surgical Support
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Careful monitoring and maintenance of surgical incisions to
                  ensure clean healing and reduce complications.
                </p>
              </div>
            </div>

            {/* 5. Diabetic wound support */}
            <div className="bg-white p-6 rounded-3xl flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-4">
                  <Activity size={24} />
                </div>
                <h3 className="font-bold text-[#0F172A] mb-2 text-base">
                  Diabetic Wound Support
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Specialized care protocols and management for diabetic ulcers
                  and chronic foot complications.
                </p>
              </div>
            </div>

            {/* 6. Infection-prevention education */}
            <div className="bg-white p-6 rounded-3xl flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-4">
                  <ShieldCheck size={24} />
                </div>
                <h3 className="font-bold text-[#0F172A] mb-2 text-base">
                  Infection Prevention
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Guidance on identifying early warning signs of infection and
                  maintaining proper hygiene standards.
                </p>
              </div>
            </div>

            {/* 7. Patient and caregiver instruction */}
            <div className="bg-white p-6 rounded-3xl flex flex-col justify-between md:col-span-2 lg:col-span-2">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-4">
                  <BookOpen size={24} />
                </div>
                <h3 className="font-bold text-[#0F172A] mb-2 text-base">
                  Patient & Caregiver Instruction
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Clear, hands-on training for patients and family members on
                  home monitoring, safe hygiene habits, and supportive care
                  techniques.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
