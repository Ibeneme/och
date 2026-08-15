
import {
  UserCheck,
  Sparkles,
  Zap,
  ShieldCheck,
  Wrench,
  Hand,
  Sun,
  Phone,

} from "lucide-react";

export default function OccupationalTherapyComponent() {

  return (
    <main className="min-h-screen bg-[#FAFAF8] text-slate-800">
      {/* ===== Hero Section ===== */}
      <section className="relative bg-[#0F172A] text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=2000&q=80"
            alt="Occupational therapist working with a patient at home"
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
              Occupational Therapy{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
                Care at Home
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed">
              Empowering you to regain independence, master daily routines, and
              navigate your home environment safely and confidently.
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
                  Daily Living & Independence
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] mt-2 mb-4">
                  Reclaiming Your Everyday Activities and Confidence
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Our licensed occupational therapists focus on helping you
                  perform daily tasks with ease and confidence. By addressing
                  physical coordination, adaptive strategies, and home
                  modifications, we enable you to maintain an active, fulfilling
                  lifestyle right at home.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 text-sm font-medium text-slate-700">
                <div className="bg-white p-4 rounded-2xl flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                  Licensed Occupational Therapists
                </div>
                <div className="bg-white p-4 rounded-2xl flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                  Personalized Home Assessments
                </div>
                <div className="bg-white p-4 rounded-2xl flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                  Practical Skill Building
                </div>
                <div className="bg-white p-4 rounded-2xl flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                  Adaptive Equipment Guidance
                </div>
              </div>
            </div>
            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-3xl">
                <img
                  src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1000&q=80"
                  alt="Occupational therapist helping a patient with fine motor and daily routines"
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
              Occupational Therapy Scope of Services
            </h2>
            <p className="text-slate-600 text-sm">
              Our targeted programs are designed to support your daily function,
              safety, and personal independence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* 1. Activities of daily living */}
            <div className="bg-white p-6 rounded-3xl flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-4">
                  <UserCheck size={24} />
                </div>
                <h3 className="font-bold text-[#0F172A] mb-2 text-base">
                  Activities of Daily Living
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Guidance and training to help you successfully manage
                  essential everyday tasks and routines.
                </p>
              </div>
            </div>

            {/* 2. Dressing, bathing, and grooming skills */}
            <div className="bg-white p-6 rounded-3xl flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-4">
                  <Sparkles size={24} />
                </div>
                <h3 className="font-bold text-[#0F172A] mb-2 text-base">
                  Personal Care Skills
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Techniques to improve ease and safety during dressing,
                  bathing, and personal grooming.
                </p>
              </div>
            </div>

            {/* 3. Energy conservation */}
            <div className="bg-white p-6 rounded-3xl flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-4">
                  <Zap size={24} />
                </div>
                <h3 className="font-bold text-[#0F172A] mb-2 text-base">
                  Energy Conservation
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Pacing strategies and techniques to manage fatigue and
                  preserve energy throughout the day.
                </p>
              </div>
            </div>

            {/* 4. Home-safety training */}
            <div className="bg-white p-6 rounded-3xl flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-4">
                  <ShieldCheck size={24} />
                </div>
                <h3 className="font-bold text-[#0F172A] mb-2 text-base">
                  Home-Safety Training
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Environment evaluations and modifications to minimize hazards
                  and ensure safe living conditions.
                </p>
              </div>
            </div>

            {/* 5. Adaptive-equipment education */}
            <div className="bg-white p-6 rounded-3xl flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-4">
                  <Wrench size={24} />
                </div>
                <h3 className="font-bold text-[#0F172A] mb-2 text-base">
                  Adaptive Equipment
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Instruction and training on using specialized tools and
                  devices to simplify routine activities.
                </p>
              </div>
            </div>

            {/* 6. Fine-motor skills */}
            <div className="bg-white p-6 rounded-3xl flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-4">
                  <Hand size={24} />
                </div>
                <h3 className="font-bold text-[#0F172A] mb-2 text-base">
                  Fine-Motor Skills
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Exercises and coordination tasks designed to restore hand
                  dexterity, grip, and finger control.
                </p>
              </div>
            </div>

            {/* 7. Independence with daily routines */}
            <div className="bg-white p-6 rounded-3xl flex flex-col justify-between md:col-span-2 lg:col-span-2">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-4">
                  <Sun size={24} />
                </div>
                <h3 className="font-bold text-[#0F172A] mb-2 text-base">
                  Independence with Daily Routines
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Comprehensive support to organize schedules, establish
                  manageable habits, and promote maximum autonomy in daily life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
