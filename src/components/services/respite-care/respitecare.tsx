import { Link } from "react-router-dom";

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

const services = [
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
    desc: "Hourly, daily, or overnight coverage options designed seamlessly around your family's unique routine.",
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
];

export default function RespiteCareComp() {
  return (
    <main className="min-h-screen bg-[#FBF8F2] text-[#3A4657] ohh-sans">
      {/* ===== Hero Section: centered editorial layout ===== */}
      <section className="relative overflow-hidden pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3ECDC] text-[#0A2140] font-semibold text-xs tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-[#C89B3C]" />
            Caregiver relief & support
          </div>

          <div className="text-xs text-[#8A7B5C] font-medium tracking-wide">
            JACOP Healthcare Services, Inc., serving clients since 2010, is now
            doing business as One Community Home Health.
          </div>

          <h1 className="ohh-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#0A2140] tracking-tight leading-[1.1]">
            Respite care <span className="text-[#C89B3C]">at home</span>
          </h1>

          <p className="text-base sm:text-lg text-[#5B6B7C] leading-relaxed max-w-3xl mx-auto">
            Temporary, dependable relief and professional in-home support
            designed to prevent caregiver burnout and support family well-being.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4 pt-2">
            <a
              href="#consultation-form"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#0A2140] hover:bg-[#123258] text-[#E4B95A] font-bold rounded-full transition-colors group"
            >
              <span>Request respite care</span>
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

          {/* Hero Featured Banner Image */}
          <div className="pt-10">
            <div className="relative rounded-3xl overflow-hidden h-[320px] sm:h-[420px]">
              <img
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1600&q=80"
                alt="Supportive professional caregiver interacting with a senior client at home"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A2140] via-transparent to-transparent opacity-70" />
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-white/95 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#C89B3C]">
                    Rest & reconnect
                  </span>
                  <p className="text-sm text-[#0A2140] font-semibold mt-1">
                    Take time for yourself knowing your loved one is in expert
                    hands.
                  </p>
                </div>
                <div className="px-4 py-2 rounded-xl bg-[#F3ECDC] text-[#0A2140] text-xs font-bold whitespace-nowrap">
                  Flexible scheduling
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Overview Section ===== */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-8">
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#C89B3C]">
                  Supporting family caregivers
                </span>
                <h2 className="ohh-serif text-3xl sm:text-4xl font-semibold text-[#0A2140] tracking-tight">
                  Recharge with confidence while loved ones are well cared for
                </h2>
                <p className="text-[#5B6B7C] text-sm sm:text-base leading-relaxed">
                  Family caregivers provide invaluable dedication, but taking
                  time for personal wellness is essential. Our respite care
                  services offer short-term, professional in-home support so you
                  can step away to rest, handle errands, or attend to personal
                  needs knowing your loved one is safe and engaged.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 text-sm font-semibold text-[#0A2140]">
                {[
                  "Temporary Family Relief",
                  "Supervision & Companionship",
                  "Burnout Prevention",
                  "Short-Term In-Home Support",
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

            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-8">
                <div className="overflow-hidden rounded-3xl">
                  <img
                    src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80"
                    alt="Kind home caregiver offering warm assistance"
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="overflow-hidden rounded-3xl">
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

      {/* ===== Scope of Services Section ===== */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C89B3C]">
              Service scope
            </span>
            <h2 className="ohh-serif text-3xl sm:text-4xl font-semibold text-[#0A2140] tracking-tight">
              Respite care services
            </h2>
            <p className="text-[#5B6B7C] text-base">
              Our respite programs provide flexible, compassionate coverage
              tailored directly to your family schedule and lifestyle.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group bg-white p-8 rounded-3xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#0A2140] text-[#E4B95A] flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-105">
                    <Icon size={26} strokeWidth={1.75} />
                  </div>
                  <h3 className="ohh-serif font-bold text-[#0A2140] mb-3 text-lg tracking-tight">
                    {title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5B6B7C] leading-relaxed">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0A2140] rounded-3xl p-10 sm:p-14 flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#C89B3C]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 space-y-3 text-center lg:text-left">
              <h3 className="ohh-serif text-2xl sm:text-3xl font-semibold text-white">
                Ready for a little rest?
              </h3>
              <p className="text-white/70 text-sm sm:text-base max-w-xl">
                Talk to our team about flexible respite coverage for your
                family.
              </p>
            </div>
            <div className="relative z-10 flex flex-col sm:flex-row gap-4">
              <a
                href="tel:9723251598"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#E4B95A] hover:bg-[#F0C874] text-[#0A2140] font-bold rounded-full transition-colors"
              >
                <Phone size={16} />
                <span>Call (972) 325-1598</span>
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full transition-colors"
              >
                <span>Contact our team</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
