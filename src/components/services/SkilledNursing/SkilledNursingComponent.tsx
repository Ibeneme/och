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
} from "lucide-react";

export default function SkilledNursingPage() {
  return (
    <main className="min-h-screen bg-[#FAFAF8] text-slate-800">
      {/* ===== Hero Section ===== */}
      <section className="relative bg-[#0F172A] text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=2000&q=80"
            alt="Nurse caring for a patient at home"
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
              Skilled Nursing{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
                Care at Home
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed">
              Physician-directed clinical support delivered by licensed nurses
              to promote healing, manage chronic conditions, and ensure safe,
              dignified recovery in the comfort of home[cite: 1].
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
                  Professional Clinical Support
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] mt-2 mb-4">
                  Expert Nursing Care Tailored to Your Recovery Plan
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Our skilled nursing services provide comprehensive,
                  individualized medical care directly in your home. Working
                  closely with your physician, our licensed nurses monitor
                  health status, manage complex medications, and provide
                  essential education to empower patients and caregivers[cite:
                  1].
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 text-sm font-medium text-slate-700">
                <div className="bg-white p-4 rounded-2xl flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                  Licensed Registered Nurses (RN)
                </div>
                <div className="bg-white p-4 rounded-2xl flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                  Physician-Directed Plans
                </div>
                <div className="bg-white p-4 rounded-2xl flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                  Personalized In-Home Visits
                </div>
                <div className="bg-white p-4 rounded-2xl flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                  24/7 On-Call Support for Patients
                </div>
              </div>
            </div>
            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-3xl">
                <img
                  src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1000&q=80"
                  alt="Compassionate home healthcare nurse smiling with a senior patient"
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
              Comprehensive Services
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] mt-2 mb-4">
              Skilled Nursing Clinical Scope
            </h2>
            <p className="text-slate-600 text-sm">
              Our multidisciplinary approach covers a wide array of specialized
              clinical needs to support independence, safety, and recovery at
              home[cite: 1].
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* 1. Health Assessments */}
            <div className="bg-white p-6 rounded-3xl flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-4">
                  <Stethoscope size={24} />
                </div>
                <h3 className="font-bold text-[#0F172A] mb-2 text-base">
                  Health Assessments
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Comprehensive evaluations of physical status, recovery
                  progress, and ongoing home health needs.
                </p>
              </div>
            </div>

            {/* 2. Medication Management and Education */}
            <div className="bg-white p-6 rounded-3xl flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-4">
                  <Pill size={24} />
                </div>
                <h3 className="font-bold text-[#0F172A] mb-2 text-base">
                  Medication Management & Education
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Medication reconciliation, adherence tracking, side-effect
                  monitoring, and clear patient teaching.
                </p>
              </div>
            </div>

            {/* 3. Vital-sign Monitoring */}
            <div className="bg-white p-6 rounded-3xl flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-4">
                  <Activity size={24} />
                </div>
                <h3 className="font-bold text-[#0F172A] mb-2 text-base">
                  Vital-Sign Monitoring
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Regular tracking of blood pressure, heart rate, oxygen
                  saturation, temperature, and weight.
                </p>
              </div>
            </div>

            {/* 4. Physician-order Implementation */}
            <div className="bg-white p-6 rounded-3xl flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-4">
                  <FileText size={24} />
                </div>
                <h3 className="font-bold text-[#0F172A] mb-2 text-base">
                  Physician-Order Implementation
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Precise execution of medical treatments, therapies, and
                  clinical orders established by your doctor.
                </p>
              </div>
            </div>

            {/* 5. Chronic-condition Monitoring */}
            <div className="bg-white p-6 rounded-3xl flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-4">
                  <HeartPulse size={24} />
                </div>
                <h3 className="font-bold text-[#0F172A] mb-2 text-base">
                  Chronic-Condition Monitoring
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Ongoing clinical oversight for conditions such as diabetes,
                  heart failure, COPD, and hypertension.
                </p>
              </div>
            </div>

            {/* 6. Patient and caregiver education */}
            <div className="bg-white p-6 rounded-3xl flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-4">
                  <BookOpen size={24} />
                </div>
                <h3 className="font-bold text-[#0F172A] mb-2 text-base">
                  Patient & Caregiver Education
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Empowering families with knowledge regarding disease
                  management, self-care techniques, and safety.
                </p>
              </div>
            </div>

            {/* 7. Care coordination */}
            <div className="bg-white p-6 rounded-3xl flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-4">
                  <Users size={24} />
                </div>
                <h3 className="font-bold text-[#0F172A] mb-2 text-base">
                  Care Coordination
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Seamless communication between physicians, therapists, family
                  members, and medical suppliers.
                </p>
              </div>
            </div>

            {/* 8. Disease-management support */}
            <div className="bg-white p-6 rounded-3xl flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-4">
                  <ShieldCheck size={24} />
                </div>
                <h3 className="font-bold text-[#0F172A] mb-2 text-base">
                  Disease-Management Support
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Structured programs to prevent complications, reduce hospital
                  re-admissions, and improve quality of life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
