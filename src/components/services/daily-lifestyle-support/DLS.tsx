import {
  Utensils,
  Home,
  ClipboardList,
  Sparkles,
  Clock,
  Heart,
  Phone,
} from "lucide-react";

const checklistItems = [
  "Meal preparation",
  "Light housekeeping",
  "Errands & shopping",
  "Personal routines",
];

const services = [
  {
    icon: Utensils,
    title: "Meal preparation",
    desc: "Planning and preparing nutritious meals according to dietary preferences and restrictions.",
    featured: true,
  },
  {
    icon: Home,
    title: "Light housekeeping",
    desc: "Tidying, laundry, dishwashing, and other light household tasks that keep the home comfortable.",
  },
  {
    icon: ClipboardList,
    title: "Errands & appointments",
    desc: "Assistance with grocery shopping, prescription pickup, and accompaniment to appointments.",
  },
  {
    icon: Sparkles,
    title: "Personal care routines",
    desc: "Gentle support with grooming, dressing, and other daily personal care activities.",
  },
  {
    icon: Clock,
    title: "Schedule management",
    desc: "Help organizing daily schedules, reminders, and preferred routines.",
  },
  {
    icon: Heart,
    title: "Companionship during tasks",
    desc: "Friendly presence while completing everyday activities, reducing isolation and stress.",
  },
];

export default function DailyLifestyleSupportComp() {
  return (
    <div className="min-h-screen bg-white text-[#3A4657] font-sans">
      {/* ========== HERO ========== */}
      <section className="relative bg-[#0A2140] text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=2000&q=80"
            alt="Daily lifestyle support"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A2140] via-[#0A2140]/70 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#E4B95A] font-medium text-xs tracking-wider uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-[#E4B95A] animate-pulse" />
              Everyday living support
            </div>
            <h1 className="ohh-serif text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.1] mb-6 tracking-tight">
              Daily Lifestyle <span className="text-[#E4B95A]">Support</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/70 mb-8 leading-relaxed max-w-xl">
              Practical assistance with everyday activities that help clients
              maintain independence, comfort, and a high quality of life at
              home.
            </p>
            <a
              href="tel:9723251598"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#E4B95A] hover:bg-[#D9A93F] text-[#0A2140] font-bold rounded-xl transition-colors text-sm"
            >
              <Phone size={16} /> Call (972) 325-1598
            </a>
          </div>
        </div>
      </section>

      {/* ========== INTRO — image leads, checklist as plain rows ========== */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 relative order-2 lg:order-1">
              <div className="overflow-hidden rounded-[2rem]">
                <img
                  src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1000&q=80"
                  alt="Daily lifestyle support"
                  className="w-full h-80 lg:h-[26rem] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 left-6 bg-[#FBF8F2] rounded-2xl px-6 py-4">
                <p className="ohh-serif text-3xl font-semibold text-[#0A2140] leading-none">
                  6+
                </p>
                <p className="text-[11px] uppercase tracking-wider text-[#8A7B5C] font-semibold mt-1">
                  Everyday support services
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-8 order-1 lg:order-2">
              <div>
                <span className="text-[#C89B3C] font-semibold tracking-widest uppercase text-xs">
                  Independence & comfort
                </span>
                <h2 className="ohh-serif text-2xl sm:text-3xl font-semibold text-[#0A2140] mt-2 mb-4">
                  Supporting the rhythms of everyday life
                </h2>
                <p className="text-[#5B6B7C] text-sm leading-relaxed">
                  Daily lifestyle support focuses on the practical tasks that
                  keep a household running smoothly. Our caregivers assist with
                  meal preparation, light housekeeping, errands, and personal
                  routines so clients can remain independent and comfortable in
                  their own homes.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-4">
                {checklistItems.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E4B95A] shrink-0" />
                    <span className="text-sm font-medium text-[#0A2140]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SERVICE SCOPE — bento grid, tone-separated not bordered ========== */}
      <section className="py-20 bg-[#FBF8F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-[#C89B3C] font-semibold tracking-widest uppercase text-xs">
              Service scope
            </span>
            <h2 className="ohh-serif text-2xl sm:text-3xl font-semibold text-[#0A2140] mt-2 mb-4">
              Daily lifestyle services
            </h2>
            <p className="text-[#5B6B7C] text-sm">
              Practical, respectful support that preserves dignity and
              independence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map(({ icon: Icon, title, desc, featured }) => (
              <div
                key={title}
                className={`p-7 rounded-3xl ${
                  featured
                    ? "bg-[#0A2140] text-white md:col-span-2 lg:col-span-1 lg:row-span-2 flex flex-col justify-between"
                    : "bg-white"
                }`}
              >
                <div>
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 ${
                      featured
                        ? "bg-white/10 text-[#E4B95A]"
                        : "bg-[#F3ECDC] text-[#0A2140]"
                    }`}
                  >
                    <Icon size={22} />
                  </div>
                  <h3
                    className={`font-semibold mb-2 text-base ${
                      featured ? "text-white" : "text-[#0A2140]"
                    }`}
                  >
                    {title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed ${
                      featured ? "text-white/65" : "text-[#5B6B7C]"
                    }`}
                  >
                    {desc}
                  </p>
                </div>
                {featured && (
                  <span className="mt-8 inline-flex items-center gap-1.5 text-xs font-semibold text-[#E4B95A]">
                    Most requested
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
}
