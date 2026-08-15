import {
    ClipboardCheck,
    BookOpen,
    ShieldCheck,
    Activity,
    Users,
    HeartHandshake,
    Phone,
  } from "lucide-react";
  
  export default function MedicationManagementComp() {
    return (
      <main className="min-h-screen bg-[#FAFAF8] text-slate-800">
        {/* ===== Hero Section ===== */}
        <section className="relative bg-[#0F172A] text-white overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=2000&q=80"
              alt="Nurse reviewing medication schedules with a patient at home"
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
                Medication Management{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
                  Care at Home
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed">
                Expert clinical oversight and safe medication coordination delivered directly in your home to ensure accurate regimens and prevent adverse drug interactions.
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
                    Safety & Regimen Accuracy
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] mt-2 mb-4">
                    Ensuring Safety and Compliance Through Professional Oversight
                  </h2>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    Managing multiple prescriptions can be complex and overwhelming. Our skilled nursing team provides comprehensive medication management services—reviewing drug interactions, organizing schedules, and coordinating directly with physicians and pharmacies to protect your health and well-being.
                  </p>
                </div>
                <div className="grid sm:grid-cols-2 gap-4 text-sm font-medium text-slate-700">
                  <div className="bg-white p-4 rounded-2xl flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                    Licensed Skilled Nurses
                  </div>
                  <div className="bg-white p-4 rounded-2xl flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                    Physician & Pharmacy Coordination
                  </div>
                  <div className="bg-white p-4 rounded-2xl flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                    Adherence & Safety Support
                  </div>
                  <div className="bg-white p-4 rounded-2xl flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                    Family & Caregiver Instruction
                  </div>
                </div>
              </div>
              <div className="lg:col-span-6">
                <div className="overflow-hidden rounded-3xl">
                  <img
                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80"
                    alt="Nurse checking medication instructions with a patient"
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
                Medication Management Scope of Services
              </h2>
              <p className="text-slate-600 text-sm">
                Our clinical protocol addresses every phase of prescription organization, patient education, and safety monitoring.
              </p>
            </div>
  
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* 1. Medication reconciliation */}
              <div className="bg-white p-6 rounded-3xl flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-4">
                    <ClipboardCheck size={24} />
                  </div>
                  <h3 className="font-bold text-[#0F172A] mb-2 text-base">Medication Reconciliation</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Careful comparison and verification of all current prescriptions to eliminate duplicates and prevent harmful interactions.
                  </p>
                </div>
              </div>
  
              {/* 2. Medication education */}
              <div className="bg-white p-6 rounded-3xl flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-4">
                    <BookOpen size={24} />
                  </div>
                  <h3 className="font-bold text-[#0F172A] mb-2 text-base">Medication Education</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Clear explanations regarding what each medication does, correct timing, and proper administration methods.
                  </p>
                </div>
              </div>
  
              {/* 3. Adherence support */}
              <div className="bg-white p-6 rounded-3xl flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-4">
                    <ShieldCheck size={24} />
                  </div>
                  <h3 className="font-bold text-[#0F172A] mb-2 text-base">Adherence Support</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Practical organizing strategies and routine checks to ensure medications are taken exactly as prescribed.
                  </p>
                </div>
              </div>
  
              {/* 4. Side-effect monitoring */}
              <div className="bg-white p-6 rounded-3xl flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-4">
                    <Activity size={24} />
                  </div>
                  <h3 className="font-bold text-[#0F172A] mb-2 text-base">Side-Effect Monitoring</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Active clinical observation for adverse reactions, unexpected symptoms, or drug-to-drug complications.
                  </p>
                </div>
              </div>
  
              {/* 5. Coordination with physicians and pharmacies */}
              <div className="bg-white p-6 rounded-3xl flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-4">
                    <Users size={24} />
                  </div>
                  <h3 className="font-bold text-[#0F172A] mb-2 text-base">Physician & Pharmacy Coordination</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Seamless communication with care providers and pharmacies for prescription refills, adjustments, and updates.
                  </p>
                </div>
              </div>
  
              {/* 6. Caregiver instruction */}
              <div className="bg-white p-6 rounded-3xl flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-4">
                    <HeartHandshake size={24} />
                  </div>
                  <h3 className="font-bold text-[#0F172A] mb-2 text-base">Caregiver Instruction</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Comprehensive training and guidelines for family members helping manage daily medication schedules safely.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }