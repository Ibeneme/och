import {
  Heart,
  Users,
  Shield,
  ShieldCheck,
  Clock,
  Home,
  Phone,
  ArrowRight,
  CheckCircle2,
  Smile,
  Coffee,
} from "lucide-react";

export default function CompanionCareComp() {
  return (
    <main className="min-h-screen bg-[#FAFAF8] text-slate-800 selection:bg-amber-400 selection:text-[#0F172A] font-sans">
      {/* ===== Hero Section with Split Alternative Layout ===== */}
      <section className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-32 bg-[#0F172A] text-white">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 text-amber-400 font-medium text-xs tracking-widest uppercase">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                Supportive Care Discipline
              </div>

              <div className="text-xs text-slate-400 font-medium tracking-wide">
                JACOP Healthcare Services, Inc., serving clients since 2010, is
                now doing business as One Community Home Health.
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.08]">
                Companion Care <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-amber-300">
                  at Home
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 font-medium leading-relaxed max-w-2xl">
                Warm social engagement, reassuring safety oversight, and gentle
                daily support delivered right to your home.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#consultation-form"
                  className="px-8 py-4 bg-amber-400 hover:bg-amber-300 text-[#0F172A] font-black rounded-2xl transition-all text-sm flex items-center gap-2 group"
                >
                  <span>Request Companion Care</span>
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
                <a
                  href="tel:9723251598"
                  className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-2xl transition-all text-sm flex items-center gap-2"
                >
                  <Phone size={16} className="text-amber-400" /> Call (972)
                  325-1598
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-[32px] p-2 bg-gradient-to-b from-white/10 to-transparent">
                <div className="relative h-[400px] rounded-[24px] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1000&q=80"
                    alt="Warm companion care and friendly engagement at home"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent opacity-80" />

                  <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-[#0F172A]/85 backdrop-blur-md">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-xs font-black uppercase tracking-wider text-emerald-400">
                        Connection & Comfort
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 font-medium">
                      Building positive, trusting relationships and joyful daily
                      interactions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Overview Section with Alternating Imagery ===== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 relative">
              <div className="overflow-hidden rounded-[32px]">
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1000&q=80"
                  alt="Friendly companion sharing conversation and support"
                  className="w-full h-[450px] object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 hidden sm:flex flex-col gap-2 p-6 rounded-3xl bg-[#0F172A] text-white max-w-[240px]">
                <span className="text-3xl font-black text-amber-400">100%</span>
                <span className="text-xs text-slate-300 font-medium leading-relaxed">
                  Dedicated to fostering meaningful engagement and emotional
                  well-being.
                </span>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-8">
              <div>
                <span className="text-xs font-black uppercase tracking-widest text-amber-700 bg-amber-100 px-3.5 py-1.5 rounded-full">
                  Connection & Comfort
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] mt-4 mb-5 tracking-tight">
                  Fostering Meaningful Engagement and Everyday Well-Being
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-medium">
                  Our companion care services focus on building positive,
                  trusting relationships while ensuring safety and comfort in
                  familiar home surroundings. From engaging conversations to
                  light routine assistance, we provide dependable presence and
                  peace of mind for clients and their families.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 text-sm font-semibold text-slate-700">
                <div className="bg-[#FAFAF8] p-4 rounded-2xl flex items-center gap-3">
                  <CheckCircle2 className="text-amber-600 w-5 h-5 flex-shrink-0" />
                  Meaningful Companionship
                </div>
                <div className="bg-[#FAFAF8] p-4 rounded-2xl flex items-center gap-3">
                  <CheckCircle2 className="text-amber-600 w-5 h-5 flex-shrink-0" />
                  Safety & Wellbeing Monitoring
                </div>
                <div className="bg-[#FAFAF8] p-4 rounded-2xl flex items-center gap-3">
                  <CheckCircle2 className="text-amber-600 w-5 h-5 flex-shrink-0" />
                  Family Caregiver Support
                </div>
                <div className="bg-[#FAFAF8] p-4 rounded-2xl flex items-center gap-3">
                  <CheckCircle2 className="text-amber-600 w-5 h-5 flex-shrink-0" />
                  Light Household Assistance
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Scope of Services Grid with Unique Visual Layout & Extra Items ===== */}
      <section className="py-24 bg-[#FAFAF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16 space-y-4">
            <span className="text-xs font-black uppercase tracking-widest text-amber-700 bg-amber-100 px-3.5 py-1.5 rounded-full">
              Service Scope
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
              Companion Care Services
            </h2>
            <p className="text-slate-600 text-base font-medium">
              Our companion care offerings are designed to enhance daily life
              through friendly interaction and dependable support.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Heart,
                title: "Companionship",
                desc: "Warm, friendly conversation, shared hobbies, reading, and pleasant social interaction.",
              },
              {
                icon: Users,
                title: "Social Engagement",
                desc: "Encouraging participation in favorite activities, community events, and family connections.",
              },
              {
                icon: Shield,
                title: "Safety Monitoring",
                desc: "Reassuring supervision around the house to prevent hazards and ensure immediate assistance when needed.",
              },
              {
                icon: Clock,
                title: "Support with Daily Routines",
                desc: "Gentle reminders for daily activities, schedules, and routine lifestyle habits.",
              },
              {
                icon: Home,
                title: "Light Assistance in the Home",
                desc: "Help with light organizing, tidying, plant care, and maintaining a comfortable living environment.",
              },
              {
                icon: ShieldCheck,
                title: "Family Caregiver Support",
                desc: "Providing dependable relief and regular updates so family caregivers can rest and recharge with confidence.",
              },
              // Additional items added below
              {
                icon: Smile,
                title: "Recreational Activities & Games",
                desc: "Enjoying board games, puzzles, crafts, and listening to favorite music together to keep spirits bright.",
              },
              {
                icon: Coffee,
                title: "Friendly Visiting & Mealtime Chats",
                desc: "Sharing meals and tea time together with warm conversation and attentive, caring presence.",
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
