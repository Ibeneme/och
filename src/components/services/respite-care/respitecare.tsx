import {
  Coffee,
  Smile,
  ClipboardList,
  HeartHandshake,
  ShieldCheck,
  Home,
  Phone,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Heart,
} from "lucide-react";

export default function RespiteCareComp() {
  return (
    <main className="min-h-screen bg-[#FAFAF8] text-slate-800 selection:bg-amber-400 selection:text-[#0F172A] font-sans">
      {/* ===== Hero Section with Centered Editorial Layout & Fresh Imagery ===== */}
      <section className="relative overflow-hidden pt-32 pb-24 lg:pt-40 lg:pb-36 bg-[#0F172A] text-white">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 text-amber-400 font-medium text-xs tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            Caregiver Relief & Support
          </div>

          <div className="text-xs text-slate-400 font-medium tracking-wide">
            JACOP Healthcare Services, Inc., serving clients since 2010, is now
            doing business as One Community Home Health.
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.08]">
            Respite Care <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-amber-300">
              at Home
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 font-medium leading-relaxed max-w-3xl mx-auto">
            Temporary, dependable relief and professional in-home support
            designed to prevent caregiver burnout and support family well-being.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4 pt-4">
            <a
              href="#consultation-form"
              className="px-8 py-4 bg-amber-400 hover:bg-amber-300 text-[#0F172A] font-black rounded-2xl transition-all text-sm flex items-center gap-2 group "
            >
              <span>Request Respite Care</span>
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <a
              href="tel:9723251598"
              className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-2xl transition-all text-sm flex items-center gap-2 border border-white/10"
            >
              <Phone size={16} className="text-amber-400" /> Call (972) 325-1598
            </a>
          </div>

          {/* Hero Featured Banner Image */}
          <div className="pt-10">
            <div className="relative rounded-[32px] overflow-hidden h-[360px] sm:h-[480px]">
              <img
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1600&q=80"
                alt="Supportive professional caregiver interacting with a senior client at home"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-8 left-8 right-8 p-6 rounded-2xl bg-[#0F172A]/85 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
                <div>
                  <span className="text-xs font-black uppercase tracking-wider text-amber-400">
                    Rest & Reconnect
                  </span>
                  <p className="text-sm text-slate-200 font-semibold mt-1">
                    Take time for yourself knowing your loved one is in expert
                    hands.
                  </p>
                </div>
                <div className="px-4 py-2 rounded-xl bg-amber-400/10 text-amber-300 text-xs font-bold whitespace-nowrap">
                  Flexible Scheduling
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Overview Section with Asymmetric Layout & New Images ===== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-8">
              <div>
                <span className="text-xs font-black uppercase tracking-widest text-amber-700 bg-amber-100 px-3.5 py-1.5 rounded-full">
                  Supporting Family Caregivers
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] mt-4 mb-5 tracking-tight">
                  Recharge With Confidence While Loved Ones Are Well Cared For
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-medium">
                  Family caregivers provide invaluable dedication, but taking
                  time for personal wellness is essential. Our respite care
                  services offer short-term, professional in-home support so you
                  can step away to rest, handle errands, or attend to personal
                  needs knowing your loved one is safe and engaged.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 text-sm font-semibold text-slate-700">
                <div className="bg-[#FAFAF8] p-4 rounded-2xl flex items-center gap-3">
                  <CheckCircle2 className="text-amber-600 w-5 h-5 flex-shrink-0" />
                  Temporary Family Relief
                </div>
                <div className="bg-[#FAFAF8] p-4 rounded-2xl flex items-center gap-3">
                  <CheckCircle2 className="text-amber-600 w-5 h-5 flex-shrink-0" />
                  Supervision & Companionship
                </div>
                <div className="bg-[#FAFAF8] p-4 rounded-2xl flex items-center gap-3">
                  <CheckCircle2 className="text-amber-600 w-5 h-5 flex-shrink-0" />
                  Burnout Prevention
                </div>
                <div className="bg-[#FAFAF8] p-4 rounded-2xl flex items-center gap-3">
                  <CheckCircle2 className="text-amber-600 w-5 h-5 flex-shrink-0" />
                  Short-Term In-Home Support
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-8">
                <div className="overflow-hidden rounded-[28px] ">
                  <img
                    src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80"
                    alt="Kind home caregiver offering warm assistance"
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="overflow-hidden rounded-[28px] ">
                  <img
                    src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80"
                    alt="Senior individual feeling secure and comfortable at home"
                    className="w-full h-80 object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Scope of Services Grid with Modern Cards & Expanded Options ===== */}
      <section className="py-24 bg-[#FAFAF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16 space-y-4">
            <span className="text-xs font-black uppercase tracking-widest text-amber-700 bg-amber-100 px-3.5 py-1.5 rounded-full">
              Service Scope
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
              Respite Care Services
            </h2>
            <p className="text-slate-600 text-base font-medium">
              Our respite programs provide flexible, compassionate coverage
              tailored directly to your family schedule and lifestyle.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Coffee,
                title: "Temporary Family Relief",
                desc: "Scheduled short-term care giving family members reliable time away for rest, travel, and personal appointments.",
              },
              {
                icon: Smile,
                title: "Supervision & Companionship",
                desc: "Attentive oversight and friendly conversation to keep clients safe, stimulated, and comfortable throughout the day.",
              },
              {
                icon: ClipboardList,
                title: "Assistance with Daily Routines",
                desc: "Support with meals, personal schedules, and daily habits while regular primary caregivers are away.",
              },
              {
                icon: HeartHandshake,
                title: "Flexible Scheduling",
                desc: "Hourly, daily, or overnight coverage options designed seamlessly around your family’s unique routine.",
              },
              {
                icon: ShieldCheck,
                title: "Peace of Mind",
                desc: "Professional caregivers who follow established routines and communicate clearly with the family upon return.",
              },
              {
                icon: Home,
                title: "In-Home Comfort",
                desc: "Care delivered in the familiar home environment so clients remain comfortable, secure, and relaxed.",
              },
              {
                icon: Heart,
                title: "Overnight Respite Coverage",
                desc: "Dedicated overnight presence to ensure safe monitoring, giving primary family caregivers a full night of restorative sleep.",
              },
              {
                icon: Sparkles,
                title: "Emergency & Backup Support",
                desc: "Reliable short-notice assistance when unexpected events or personal emergencies arise for primary caregivers.",
              },
            ].map(({ icon: Icon, title, desc }, idx) => (
              <div
                key={idx}
                className="group bg-white p-8 rounded-[28px] flex flex-col justify-between transition-all duration-300 hover:-translate-y-1"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={26} strokeWidth={1.75} />
                  </div>
                  <h3 className="font-extrabold text-[#0F172A] mb-3 text-lg tracking-tight">
                    {title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium opacity-90">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
