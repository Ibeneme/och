import {
  Utensils,
  Home,
  ClipboardList,
  Sparkles,
  Clock,
  Heart,
  Phone,
} from "lucide-react";

export default function DailyLifestyleSupportComp() {
  return (
    <div className="min-h-screen bg-[#FAFAF8] text-slate-800 font-sans">
      <section className="relative bg-[#0F172A] text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=2000&q=80"
            alt="Daily lifestyle support"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#F59E0B] font-medium text-xs tracking-wider uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-[#F59E0B] animate-pulse" />
              Everyday Living Support
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6 tracking-tight">
              Daily Lifestyle{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
                Support
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed">
              Practical assistance with everyday activities that help clients
              maintain independence, comfort, and a high quality of life at
              home.
            </p>
            <a
              href="tel:9723251598"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#F59E0B] hover:bg-[#FBBF24] text-[#0F172A] font-bold rounded-xl transition-all text-sm"
            >
              <Phone size={16} /> Call (972) 325-1598
            </a>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-[#F59E0B] font-semibold tracking-widest uppercase text-xs">
                  Independence & Comfort
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] mt-2 mb-4">
                  Supporting the Rhythms of Everyday Life
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Daily lifestyle support focuses on the practical tasks that
                  keep a household running smoothly. Our caregivers assist with
                  meal preparation, light housekeeping, errands, and personal
                  routines so clients can remain independent and comfortable in
                  their own homes.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 text-sm font-medium text-slate-700">
                {[
                  "Meal Preparation",
                  "Light Housekeeping",
                  "Errands & Shopping",
                  "Personal Routines",
                ].map((item) => (
                  <div
                    key={item}
                    className="bg-white p-4 rounded-2xl flex items-center gap-3 "
                  >
                    <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-3xl ">
                <img
                  src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1000&q=80"
                  alt="Daily lifestyle support"
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-[#F59E0B] font-semibold tracking-widest uppercase text-xs">
              Service Scope
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] mt-2 mb-4">
              Daily Lifestyle Services
            </h2>
            <p className="text-slate-600 text-sm">
              Practical, respectful support that preserves dignity and
              independence.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Utensils,
                title: "Meal Preparation",
                desc: "Planning and preparing nutritious meals according to dietary preferences and restrictions.",
              },
              {
                icon: Home,
                title: "Light Housekeeping",
                desc: "Tidying, laundry, dishwashing, and other light household tasks that keep the home comfortable.",
              },
              {
                icon: ClipboardList,
                title: "Errands & Appointments",
                desc: "Assistance with grocery shopping, prescription pickup, and accompaniment to appointments.",
              },
              {
                icon: Sparkles,
                title: "Personal Care Routines",
                desc: "Gentle support with grooming, dressing, and other daily personal care activities.",
              },
              {
                icon: Clock,
                title: "Schedule Management",
                desc: "Help organizing daily schedules, reminders, and preferred routines.",
              },
              {
                icon: Heart,
                title: "Companionship During Tasks",
                desc: "Friendly presence while completing everyday activities, reducing isolation and stress.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-white p-6 rounded-3xl transition-shadow"
              >
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-4">
                  <Icon size={24} />
                </div>
                <h3 className="font-bold text-[#0F172A] mb-2 text-base">
                  {title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
