import {
  UserCheck,
  Sparkles,
  Zap,
  ShieldCheck,
  Wrench,
  Hand,
  Sun,
  Phone,
  ArrowRight,
} from "lucide-react";

export default function OccupationalTherapyComponent() {
  return (
    <main className="min-h-screen bg-[#FAFAF8] text-slate-800">
      {/* ===== Hero ===== */}
      <section className="relative bg-[#0F172A] text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=2000&q=80"
            alt="Occupational therapist working with a patient at home"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/70 to-[#0F172A]/40" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-yellow-400 font-bold text-xs tracking-wider uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
              Active Clinical Discipline
            </div>

            <p className="text-xs text-slate-400 mb-4 font-medium">
              JACOP Healthcare Services, Inc., serving clients since 2010, is
              now doing business as One Community Home Health.
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] mb-6 tracking-tight">
              Occupational Therapy{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">
                Care at Home
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-200 mb-10 leading-relaxed font-medium max-w-2xl">
              Empowering you to regain independence, master daily routines, and
              navigate your home environment safely and confidently.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#consultation-form"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-yellow-400 hover:bg-yellow-300 text-[#0F172A] font-extrabold rounded-xl transition-all text-sm"
              >
                Request Care & Consultation
                <ArrowRight size={16} />
              </a>
              <a
                href="tel:9723251598"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/15 text-white font-bold rounded-xl transition-all text-sm backdrop-blur-sm"
              >
                <Phone size={16} />
                Call (972) 325-1598
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Overview ===== */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-8">
              <div>
                <span className="text-xs font-black uppercase tracking-widest text-yellow-500 bg-yellow-500/10 px-3.5 py-1.5 rounded-full">
                  Daily Living & Independence
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-[#0F172A] mt-5 mb-5 tracking-tight">
                  Reclaiming Your Everyday Activities and Confidence
                </h2>
                <p className="text-slate-600 text-base leading-relaxed font-medium">
                  Our licensed occupational therapists focus on helping you
                  perform daily tasks with ease and confidence. By addressing
                  physical coordination, adaptive strategies, and home
                  modifications, we enable you to maintain an active, fulfilling
                  lifestyle right at home.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "Licensed Occupational Therapists",
                  "Personalized Home Assessments",
                  "Practical Skill Building",
                  "Adaptive Equipment Guidance",
                ].map((item) => (
                  <div
                    key={item}
                    className="bg-white rounded-2xl p-4 flex items-center gap-3 text-sm font-bold text-[#0F172A]"
                  >
                    <span className="w-2 h-2 rounded-full bg-yellow-400 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-3xl aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1000&q=80"
                  alt="Occupational therapist helping a patient with fine motor and daily routines"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Scope of Services ===== */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14 space-y-4">
            <span className="text-xs font-black uppercase tracking-widest text-yellow-500 bg-yellow-500/10 px-3.5 py-1.5 rounded-full">
              Specialized Care Areas
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0F172A] tracking-tight">
              Occupational Therapy Scope of Services
            </h2>
            <p className="text-slate-600 text-base font-medium">
              Our targeted programs are designed to support your daily function,
              safety, and personal independence.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: UserCheck,
                title: "Activities of Daily Living",
                desc: "Guidance and training to help you successfully manage essential everyday tasks and routines.",
              },
              {
                icon: Sparkles,
                title: "Personal Care Skills",
                desc: "Techniques to improve ease and safety during dressing, bathing, and personal grooming.",
              },
              {
                icon: Zap,
                title: "Energy Conservation",
                desc: "Pacing strategies and techniques to manage fatigue and preserve energy throughout the day.",
              },
              {
                icon: ShieldCheck,
                title: "Home-Safety Training",
                desc: "Environment evaluations and modifications to minimize hazards and ensure safe living conditions.",
              },
              {
                icon: Wrench,
                title: "Adaptive Equipment",
                desc: "Instruction and training on using specialized tools and devices to simplify routine activities.",
              },
              {
                icon: Hand,
                title: "Fine-Motor Skills",
                desc: "Exercises and coordination tasks designed to restore hand dexterity, grip, and finger control.",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-[#FAFAF8] rounded-3xl p-7 flex flex-col transition-all hover:bg-[#F5F5F0]"
                >
                  <div className="w-12 h-12 rounded-2xl bg-yellow-100 text-yellow-600 flex items-center justify-center mb-5">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-extrabold text-[#0F172A] mb-2.5 text-lg tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              );
            })}

            {/* Featured wide card */}
            <div className="sm:col-span-2 lg:col-span-3 bg-[#0F172A] rounded-3xl p-8 lg:p-10 flex flex-col sm:flex-row sm:items-center gap-6">
              <div className="w-14 h-14 rounded-2xl bg-yellow-400/20 text-yellow-400 flex items-center justify-center shrink-0">
                <Sun size={26} />
              </div>
              <div className="flex-1">
                <h3 className="font-extrabold text-white mb-2 text-xl tracking-tight">
                  Independence with Daily Routines
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed font-medium max-w-3xl">
                  Comprehensive support to organize schedules, establish
                  manageable habits, and promote maximum autonomy in daily life.
                </p>
              </div>
              <a
                href="#consultation-form"
                className="inline-flex items-center gap-2 text-sm font-bold text-yellow-400 hover:text-yellow-300 transition-colors shrink-0"
              >
                Get started
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 lg:py-28 bg-[#0F172A] text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
            Ready to rebuild independence at home?
          </h2>
          <p className="text-lg text-slate-300 font-medium">
            Our occupational therapy team is available to discuss your goals,
            home environment, and next steps.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
            <a
              href="#consultation-form"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-yellow-400 hover:bg-yellow-300 text-[#0F172A] font-extrabold rounded-xl transition-all"
            >
              Request Care & Consultation
              <ArrowRight size={16} />
            </a>
            <a
              href="tel:9723251598"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/15 text-white font-bold rounded-xl transition-all backdrop-blur-sm"
            >
              <Phone size={16} />
              Call (972) 325-1598
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
