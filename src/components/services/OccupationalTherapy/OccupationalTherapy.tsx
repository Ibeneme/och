import {
  UserCheck,
  Sparkles,
  Zap,
  ShieldCheck,
  Wrench,
  Hand,
  Phone,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const services = [
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
];


export default function OccupationalTherapyComponent() {
  return (
    <main className="min-h-screen bg-[#FBF8F2] text-[#3A4657] ohh-sans">
      {/* ===== Hero ===== */}
      <section className="relative overflow-hidden pt-12 pb-16 lg:pt-20 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3ECDC] text-[#0A2140] font-semibold text-xs tracking-wider uppercase">
                <span className="w-2 h-2 rounded-full bg-[#C89B3C]" />
                Active clinical discipline
              </div>

              <div className="text-xs text-[#8A7B5C] font-medium tracking-wide">
                JACOP Healthcare Services, Inc., serving clients since 2010, is
                now doing business as One Community Home Health.
              </div>

              <h1 className="ohh-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#0A2140] tracking-tight leading-[1.1]">
                Occupational therapy{" "}
                <span className="text-[#C89B3C]">care at home</span>
              </h1>

              <p className="text-base sm:text-lg text-[#5B6B7C] leading-relaxed max-w-2xl">
                Empowering you to regain independence, master daily routines,
                and navigate your home environment safely and confidently.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a
                  href="#consultation-form"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#0A2140] hover:bg-[#123258] text-[#E4B95A] font-bold rounded-full transition-colors group"
                >
                  <span>Request care & consultation</span>
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
                <a
                  href="tel:9723251598"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#F3ECDC] hover:bg-[#EADFC2] text-[#0A2140] font-semibold rounded-full transition-colors"
                >
                  <Phone size={16} />
                  <span>Call (972) 325-1598</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl p-2 overflow-hidden">
                <div className="overflow-hidden rounded-[20px] aspect-[4/3]">
                  <img
                    src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1000&q=80"
                    alt="Occupational therapist helping a patient with fine motor and daily routines"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="ohh-serif text-lg font-semibold text-[#0A2140]">
                    Independence, one routine at a time
                  </h3>
                  <p className="text-sm text-[#5B6B7C] leading-relaxed">
                    Licensed therapists focused on coordination, adaptive
                    strategies, and home modifications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Overview ===== */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-8">
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#C89B3C]">
                  Daily living & independence
                </span>
                <h2 className="ohh-serif text-3xl sm:text-4xl font-semibold text-[#0A2140] tracking-tight">
                  Reclaiming your everyday activities and confidence
                </h2>
                <p className="text-[#5B6B7C] text-base leading-relaxed">
                  Our licensed occupational therapists focus on helping you
                  perform daily tasks with ease and confidence. By addressing
                  physical coordination, adaptive strategies, and home
                  modifications, we enable you to maintain an active, fulfilling
                  lifestyle right at home.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 text-sm font-semibold text-[#0A2140]">
                {[
                  "Licensed Occupational Therapists",
                  "Personalized Home Assessments",
                  "Practical Skill Building",
                  "Adaptive Equipment Guidance",
                ].map((item) => (
                  <div
                    key={item}
                    className="bg-[#FBF8F2] p-4 rounded-2xl flex items-center gap-3"
                  >
                    <CheckCircle2 className="text-[#C89B3C] w-5 h-5 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-3xl aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80"
                  alt="Occupational therapist working with a patient at home"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Scope of Services ===== */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C89B3C]">
              Specialized care areas
            </span>
            <h2 className="ohh-serif text-3xl sm:text-4xl font-semibold text-[#0A2140] tracking-tight">
              Occupational therapy scope of services
            </h2>
            <p className="text-[#5B6B7C] text-base">
              Our targeted programs are designed to support your daily function,
              safety, and personal independence.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-white rounded-3xl p-7 flex flex-col transition-colors hover:bg-[#F3ECDC]/40"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#0A2140] text-[#E4B95A] flex items-center justify-center mb-5">
                    <Icon size={22} />
                  </div>
                  <h3 className="ohh-serif font-bold text-[#0A2140] mb-2.5 text-lg tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#5B6B7C] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}


          </div>
        </div>
      </section>


    </main>
  );
}
