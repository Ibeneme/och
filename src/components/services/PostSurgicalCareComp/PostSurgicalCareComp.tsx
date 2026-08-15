import {
  Activity,
  Layers,
  ClipboardCheck,
  Footprints,
  BookOpen,
  Users,
  Home,
  Phone,
} from "lucide-react";

export default function PostSurgicalCareComp() {
  return (
    <main className="min-h-screen bg-[#FAFAF8] text-slate-800">
      <section className="relative bg-[#0F172A] text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=2000&q=80"
            alt="Post-surgical recovery care at home"
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
              Post-Surgical Care{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
                Care at Home
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed">
              Seamless hospital-to-home transitions, comprehensive recovery
              monitoring, and professional clinical support to ensure a safe,
              smooth healing process.
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
                  Safe Healing & Transition
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] mt-2 mb-4">
                  Expert Clinical Support Following Surgery
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Recovering from surgery requires careful attention to surgical
                  sites, medication regimens, and mobility restrictions. Our
                  skilled nursing and therapy teams guide you through every
                  stage of recovery at home, minimizing complications and
                  ensuring peace of mind for you and your family.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 text-sm font-medium text-slate-700">
                <div className="bg-white p-4 rounded-2xl flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                  Smooth Hospital Transitions
                </div>
                <div className="bg-white p-4 rounded-2xl flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                  Professional Wound Care
                </div>
                <div className="bg-white p-4 rounded-2xl flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                  Physician Coordination
                </div>
                <div className="bg-white p-4 rounded-2xl flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                  Rehabilitation Support
                </div>
              </div>
            </div>
            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-3xl">
                <img
                  src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1000&q=80"
                  alt="Post-surgical patient receiving in-home care support"
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
              Post-Surgical Care Scope of Services
            </h2>
            <p className="text-slate-600 text-sm">
              Our targeted clinical protocols address all critical aspects of
              post-operative recovery to protect your health and promote rapid
              healing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 1. Recovery monitoring */}
            <div className="bg-white p-6 rounded-3xl flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-4">
                  <Activity size={24} />
                </div>
                <h3 className="font-bold text-[#0F172A] mb-2 text-base">
                  Recovery Monitoring
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Consistent clinical assessment of vital signs, healing
                  progress, and early detection of post-operative complications.
                </p>
              </div>
            </div>

            {/* 2. Wound care */}
            <div className="bg-white p-6 rounded-3xl flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-4">
                  <Layers size={24} />
                </div>
                <h3 className="font-bold text-[#0F172A] mb-2 text-base">
                  Wound Care
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Sterile dressing changes, incision maintenance, and expert
                  monitoring to ensure clean, infection-free tissue healing.
                </p>
              </div>
            </div>

            {/* 3. Medication support */}
            <div className="bg-white p-6 rounded-3xl flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-4">
                  <ClipboardCheck size={24} />
                </div>
                <h3 className="font-bold text-[#0F172A] mb-2 text-base">
                  Medication Support
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Management of new prescriptions, pain medication schedules,
                  side-effect tracking, and safety instruction.
                </p>
              </div>
            </div>

            {/* 4. Mobility and rehabilitation */}
            <div className="bg-white p-6 rounded-3xl flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-4">
                  <Footprints size={24} />
                </div>
                <h3 className="font-bold text-[#0F172A] mb-2 text-base">
                  Mobility & Rehabilitation
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Assistance with safe movement, strengthening exercises, and
                  physical rehabilitation tailored to surgical limitations.
                </p>
              </div>
            </div>

            {/* 5. Patient education */}
            <div className="bg-white p-6 rounded-3xl flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-4">
                  <BookOpen size={24} />
                </div>
                <h3 className="font-bold text-[#0F172A] mb-2 text-base">
                  Patient Education
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Comprehensive guidance for patients and caregivers on activity
                  restrictions, warning signs, and home safety.
                </p>
              </div>
            </div>

            {/* 6. Coordination with physicians */}
            <div className="bg-white p-6 rounded-3xl flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-4">
                  <Users size={24} />
                </div>
                <h3 className="font-bold text-[#0F172A] mb-2 text-base">
                  Physician Coordination
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Seamless communication with surgeons and primary care
                  providers regarding status updates and follow-up plans.
                </p>
              </div>
            </div>

            {/* 7. Hospital-to-home transition support */}
            <div className="bg-white p-6 rounded-3xl flex flex-col justify-between md:col-span-2 lg:col-span-3">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-4">
                  <Home size={24} />
                </div>
                <h3 className="font-bold text-[#0F172A] mb-2 text-base">
                  Hospital-to-Home Transition Support
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Structured discharge assistance to bridge the gap between
                  hospital care and safe independent living at home, minimizing
                  readmission risks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
