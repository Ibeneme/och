import {
    Users,
    Globe,
    FileText,
    HeartHandshake,
    BadgeDollarSign,
    Compass,
    ShieldCheck,
    Phone,
    CheckCircle2,
    ArrowRight,
  } from "lucide-react";
  
  export default function MedicalSocialServicesComponent() {
    return (
      <main className="min-h-screen bg-[#FAFAF8] text-slate-800">
        {/* ===== Hero Section ===== */}
        <section className="relative bg-[#0F172A] text-white overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=2000&q=80"
              alt="Medical social worker consulting with a patient and family member"
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
                Medical Social Services{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
                  Care at Home
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed">
                Compassionate guidance and psychosocial support to help patients
                and families navigate health challenges, connect with vital
                community resources, and plan for long-term well-being.
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
                    Psychosocial & Community Support
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] mt-2 mb-4">
                    Navigating Health Challenges With Professional Guidance
                  </h2>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    Our licensed medical social workers assist patients and their
                    families in coping with the emotional, social, and financial
                    impacts of illness or injury. By offering counseling, resource
                    coordination, and long-term care planning, we ensure
                    comprehensive support throughout your health journey.
                  </p>
                </div>
                <div className="grid sm:grid-cols-2 gap-4 text-sm font-medium text-slate-700">
                  <div className="bg-white p-4 rounded-2xl flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                    Licensed Social Workers
                  </div>
                  <div className="bg-white p-4 rounded-2xl flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                    Community Resource Access
                  </div>
                  <div className="bg-white p-4 rounded-2xl flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                    Family Counseling & Support
                  </div>
                  <div className="bg-white p-4 rounded-2xl flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                    Long-Term Care Guidance
                  </div>
                </div>
              </div>
              <div className="lg:col-span-6">
                <div className="overflow-hidden rounded-3xl">
                  <img
                    src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1000&q=80"
                    alt="Medical social worker holding a supportive discussion with an older adult"
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
                Medical Social Services Scope
              </h2>
              <p className="text-slate-600 text-sm">
                Our professional social work programs address the non-medical
                needs influencing your recovery, comfort, and peace of mind.
              </p>
            </div>
  
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* 1. Psychosocial assessments */}
              <div className="bg-white p-6 rounded-3xl flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-4">
                    <Users size={24} />
                  </div>
                  <h3 className="font-bold text-[#0F172A] mb-2 text-base">
                    Psychosocial Assessments
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Comprehensive evaluations of emotional, social, and
                    environmental factors affecting health and recovery.
                  </p>
                </div>
              </div>
  
              {/* 2. Community-resource coordination */}
              <div className="bg-white p-6 rounded-3xl flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-4">
                    <Globe size={24} />
                  </div>
                  <h3 className="font-bold text-[#0F172A] mb-2 text-base">
                    Community-Resource Coordination
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Connecting patients with local support networks,
                    transportation services, and nutritional programs.
                  </p>
                </div>
              </div>
  
              {/* 3. Long-term care planning */}
              <div className="bg-white p-6 rounded-3xl flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-4">
                    <FileText size={24} />
                  </div>
                  <h3 className="font-bold text-[#0F172A] mb-2 text-base">
                    Long-Term Care Planning
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Strategic planning and advisory support for future care
                    transitions, housing options, and advanced directives.
                  </p>
                </div>
              </div>
  
              {/* 4. Support for patients and families */}
              <div className="bg-white p-6 rounded-3xl flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-4">
                    <HeartHandshake size={24} />
                  </div>
                  <h3 className="font-bold text-[#0F172A] mb-2 text-base">
                    Support for Patients & Families
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Emotional counseling and guidance to help families cope with
                    chronic or life-altering medical conditions.
                  </p>
                </div>
              </div>
  
              {/* 5. Financial and social-service referrals */}
              <div className="bg-white p-6 rounded-3xl flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-4">
                    <BadgeDollarSign size={24} />
                  </div>
                  <h3 className="font-bold text-[#0F172A] mb-2 text-base">
                    Financial & Social-Service Referrals
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Assistance with insurance questions, public assistance
                    programs, and financial aid applications.
                  </p>
                </div>
              </div>
  
              {/* 6. Assistance navigating care-related challenges */}
              <div className="bg-white p-6 rounded-3xl flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-4">
                    <Compass size={24} />
                  </div>
                  <h3 className="font-bold text-[#0F172A] mb-2 text-base">
                    Navigating Care Challenges
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Expert advocacy and problem-solving support to overcome
                    roadblocks during medical recovery.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
  