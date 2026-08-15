import {
  Activity,
  HeartPulse,
  ShieldAlert,
  Wind,
  Brain,
  BookOpen,
  ClipboardList,
  ShieldCheck,
  Phone,
} from "lucide-react";

export default function ChronicDiseaseManagementComp() {
  return (
    <main className="min-h-screen bg-[#FAFAF8] text-slate-800">
      {/* ===== Hero Section ===== */}
      <section className="relative bg-[#0F172A] text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=2000&q=80"
            alt="Healthcare professional consulting with a patient for chronic disease management"
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
              Chronic Disease Management{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
                Care at Home
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed">
              Expert clinical support and monitoring designed to help you manage
              long-term health conditions, prevent complications, and maintain
              stability at home.
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
                  Proactive Health Maintenance
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] mt-2 mb-4">
                  Long-Term Stability Through Skilled Clinical Guidance
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Living with a chronic condition requires careful monitoring,
                  education, and consistent clinical support. Our skilled
                  nursing and therapy teams partner with your physician to
                  provide comprehensive in-home care plans that track symptoms,
                  optimize medication routines, and help prevent avoidable
                  hospitalizations.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 text-sm font-medium text-slate-700">
                <div className="bg-white p-4 rounded-2xl flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                  Skilled Nursing Oversight
                </div>
                <div className="bg-white p-4 rounded-2xl flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                  Regular Symptom Monitoring
                </div>
                <div className="bg-white p-4 rounded-2xl flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                  Medication Education & Support
                </div>
                <div className="bg-white p-4 rounded-2xl flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                  Personalized Care Plans
                </div>
              </div>
            </div>
            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-3xl">
                <img
                  src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1000&q=80"
                  alt="Nurse checking on an elderly patient at home"
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
              Chronic Disease Management Scope
            </h2>
            <p className="text-slate-600 text-sm">
              Our targeted programs provide comprehensive support across a wide
              range of chronic conditions to ensure safety and quality of life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 1. Diabetes */}
            <div className="bg-white p-6 rounded-3xl flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-4">
                  <Activity size={24} />
                </div>
                <h3 className="font-bold text-[#0F172A] mb-2 text-base">
                  Diabetes Management
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Blood glucose monitoring, dietary guidance, and insulin
                  management education to maintain stable levels.
                </p>
              </div>
            </div>

            {/* 2. Heart disease */}
            <div className="bg-white p-6 rounded-3xl flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-4">
                  <HeartPulse size={24} />
                </div>
                <h3 className="font-bold text-[#0F172A] mb-2 text-base">
                  Heart Disease Support
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Cardiovascular tracking, fluid restriction monitoring, and
                  lifestyle management for cardiac conditions.
                </p>
              </div>
            </div>

            {/* 3. Hypertension */}
            <div className="bg-white p-6 rounded-3xl flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-4">
                  <ShieldAlert size={24} />
                </div>
                <h3 className="font-bold text-[#0F172A] mb-2 text-base">
                  Hypertension Care
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Regular blood pressure checks, medication compliance
                  monitoring, and risk reduction strategies.
                </p>
              </div>
            </div>

            {/* 4. COPD and respiratory conditions */}
            <div className="bg-white p-6 rounded-3xl flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-4">
                  <Wind size={24} />
                </div>
                <h3 className="font-bold text-[#0F172A] mb-2 text-base">
                  COPD & Respiratory Support
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Oxygen therapy guidance, breathing techniques, and symptom
                  tracking for chronic respiratory illnesses.
                </p>
              </div>
            </div>

            {/* 5. Stroke recovery */}
            <div className="bg-white p-6 rounded-3xl flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-4">
                  <Brain size={24} />
                </div>
                <h3 className="font-bold text-[#0F172A] mb-2 text-base">
                  Stroke Recovery Support
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Coordinated nursing and therapy interventions to support
                  post-stroke rehabilitation and independence.
                </p>
              </div>
            </div>

            {/* 6. Neurological conditions */}
            <div className="bg-white p-6 rounded-3xl flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-4">
                  <Brain size={24} />
                </div>
                <h3 className="font-bold text-[#0F172A] mb-2 text-base">
                  Neurological Conditions
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Specialized care and symptom management for progressive
                  neurological disorders and related needs.
                </p>
              </div>
            </div>

            {/* 7. Medication education */}
            <div className="bg-white p-6 rounded-3xl flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-4">
                  <BookOpen size={24} />
                </div>
                <h3 className="font-bold text-[#0F172A] mb-2 text-base">
                  Medication Education
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Clear instruction on proper dosages, administration schedules,
                  side effects, and adherence tracking.
                </p>
              </div>
            </div>

            {/* 8. Symptom monitoring */}
            <div className="bg-white p-6 rounded-3xl flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-4">
                  <ClipboardList size={24} />
                </div>
                <h3 className="font-bold text-[#0F172A] mb-2 text-base">
                  Symptom Monitoring
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Consistent clinical observation and vital sign tracking to
                  detect early warning signs and changes in status.
                </p>
              </div>
            </div>

            {/* 9. Avoidable-hospitalization prevention */}
            <div className="bg-white p-6 rounded-3xl flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-4">
                  <ShieldCheck size={24} />
                </div>
                <h3 className="font-bold text-[#0F172A] mb-2 text-base">
                  Hospitalization Prevention
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Proactive intervention strategies and patient education
                  designed to reduce emergency room visits and hospital
                  readmissions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
