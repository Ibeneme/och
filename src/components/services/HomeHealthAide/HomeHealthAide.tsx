import {
  Droplet,
  Sparkles,
  UserCheck,
  ShieldCheck,
  Footprints,
  Activity,
  ClipboardList,
  Phone,
} from "lucide-react";

export default function HomeHealthAideComponent() {
  return (
    <main className="min-h-screen bg-[#FAFAF8] text-slate-800">
      {/* ===== Hero Section ===== */}
      <section className="relative bg-[#0F172A] text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=2000&q=80"
            alt="Home health aide assisting an older adult at home"
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
              Home Health Aide{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
                Care at Home
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed">
              Compassionate, hands-on personal care and daily living support
              delivered safely in your home under expert clinical supervision.
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
                  Personal Care & Daily Support
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] mt-2 mb-4">
                  Dignified Assistance for Everyday Comfort and Safety
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Our professional home health aides provide reliable,
                  respectful assistance with essential personal care routines.
                  Operating under the direct supervision of our clinical care
                  team, our aides ensure that every aspect of daily living is
                  managed smoothly to protect your health, comfort, and dignity.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 text-sm font-medium text-slate-700">
                <div className="bg-white p-4 rounded-2xl flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                  Trained & Certified Aides
                </div>
                <div className="bg-white p-4 rounded-2xl flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                  Clinical Team Supervision
                </div>
                <div className="bg-white p-4 rounded-2xl flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                  Respectful Personal Care
                </div>
                <div className="bg-white p-4 rounded-2xl flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                  Customized Daily Routines
                </div>
              </div>
            </div>
            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-3xl">
                <img
                  src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1000&q=80"
                  alt="Home health aide smiling with an elderly client"
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
              Home Health Aide Scope of Services
            </h2>
            <p className="text-slate-600 text-sm">
              Our dedicated support services focus on maintaining personal
              hygiene, mobility safety, and overall daily well-being.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* 1. Bathing */}
            <div className="bg-white p-6 rounded-3xl flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-4">
                  <Droplet size={24} />
                </div>
                <h3 className="font-bold text-[#0F172A] mb-2 text-base">
                  Bathing Support
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Safe and gentle assistance with tub, shower, or sponge baths
                  while preserving personal dignity.
                </p>
              </div>
            </div>

            {/* 2. Grooming */}
            <div className="bg-white p-6 rounded-3xl flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-4">
                  <Sparkles size={24} />
                </div>
                <h3 className="font-bold text-[#0F172A] mb-2 text-base">
                  Grooming Care
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Help with hair care, shaving, oral hygiene, nail care, and
                  daily appearance maintenance.
                </p>
              </div>
            </div>

            {/* 3. Dressing */}
            <div className="bg-white p-6 rounded-3xl flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-4">
                  <UserCheck size={24} />
                </div>
                <h3 className="font-bold text-[#0F172A] mb-2 text-base">
                  Dressing Assistance
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Support selecting appropriate clothing and putting on garments
                  safely and comfortably each day.
                </p>
              </div>
            </div>

            {/* 4. Personal hygiene */}
            <div className="bg-white p-6 rounded-3xl flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-4">
                  <ShieldCheck size={24} />
                </div>
                <h3 className="font-bold text-[#0F172A] mb-2 text-base">
                  Personal Hygiene
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Assistance with toileting, incontinence care, and general
                  cleanliness standards.
                </p>
              </div>
            </div>

            {/* 5. Mobility assistance */}
            <div className="bg-white p-6 rounded-3xl flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-4">
                  <Footprints size={24} />
                </div>
                <h3 className="font-bold text-[#0F172A] mb-2 text-base">
                  Mobility Assistance
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Support with walking, repositioning, and moving safely around
                  the home environment.
                </p>
              </div>
            </div>

            {/* 6. Assistance with activities of daily living */}
            <div className="bg-white p-6 rounded-3xl flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-4">
                  <Activity size={24} />
                </div>
                <h3 className="font-bold text-[#0F172A] mb-2 text-base">
                  Activities of Daily Living
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Hands-on help with essential daily tasks to foster
                  independence and comfort at home.
                </p>
              </div>
            </div>

            {/* 7. Support provided under the supervision of the clinical care team */}
            <div className="bg-white p-6 rounded-3xl flex flex-col justify-between md:col-span-2 lg:col-span-2">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-4">
                  <ClipboardList size={24} />
                </div>
                <h3 className="font-bold text-[#0F172A] mb-2 text-base">
                  Clinical Team Supervision
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  All aide services are carefully monitored and coordinated
                  under the direct guidance of our clinical care team to ensure
                  high standards of safety and quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
