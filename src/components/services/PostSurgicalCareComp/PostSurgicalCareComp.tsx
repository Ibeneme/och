import { Link } from "react-router-dom";

import {
  Activity,
  Layers,
  ClipboardCheck,
  Footprints,
  BookOpen,
  Users,
  Home,
  Phone,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    icon: Activity,
    title: "Recovery Monitoring",
    desc: "Consistent clinical assessment of vital signs, healing progress, and early detection of post-operative complications.",
  },
  {
    icon: Layers,
    title: "Wound Care",
    desc: "Sterile dressing changes, incision maintenance, and expert monitoring to ensure clean, infection-free tissue healing.",
  },
  {
    icon: ClipboardCheck,
    title: "Medication Support",
    desc: "Management of new prescriptions, pain medication schedules, side-effect tracking, and safety instruction.",
  },
  {
    icon: Footprints,
    title: "Mobility & Rehabilitation",
    desc: "Assistance with safe movement, strengthening exercises, and physical rehabilitation tailored to surgical limitations.",
  },
  {
    icon: BookOpen,
    title: "Patient Education",
    desc: "Comprehensive guidance for patients and caregivers on activity restrictions, warning signs, and home safety.",
  },
  {
    icon: Users,
    title: "Physician Coordination",
    desc: "Seamless communication with surgeons and primary care providers regarding status updates and follow-up plans.",
  },
  {
    icon: Home,
    title: "Hospital-to-Home Transition Support",
    desc: "Structured discharge assistance to bridge the gap between hospital care and safe independent living at home, minimizing readmission risks.",
    colSpan: "sm:col-span-2 lg:col-span-3",
  },
];

export default function PostSurgicalCareComp() {
  return (
    <main className="min-h-screen bg-[#FBF8F2] text-[#3A4657] ohh-sans">
      {/* ===== Hero Section ===== */}
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
                Post-surgical{" "}
                <span className="text-[#C89B3C]">care at home</span>
              </h1>

              <p className="text-base sm:text-lg text-[#5B6B7C] leading-relaxed max-w-2xl">
                Seamless hospital-to-home transitions, comprehensive recovery
                monitoring, and professional clinical support to ensure a safe,
                smooth healing process.
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
                <div className="relative h-[300px] rounded-[20px] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=80"
                    alt="Modern medical facility and post-surgical recovery monitoring"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="ohh-serif text-lg font-semibold text-[#0A2140]">
                    Hospital-to-home transition
                  </h3>
                  <p className="text-sm text-[#5B6B7C] leading-relaxed">
                    Professional clinical oversight bridging the gap to safe
                    recovery.
                  </p>
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
            <div className="lg:col-span-6 relative">
              <div className="overflow-hidden rounded-3xl">
                <img
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=80"
                  alt="Specialized medical recovery support and nursing care"
                  className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 hidden sm:flex flex-col gap-1 p-6 rounded-3xl bg-[#0A2140] max-w-[220px]">
                <span className="ohh-serif text-3xl font-semibold text-[#E4B95A]">
                  100%
                </span>
                <span className="text-xs text-white/70 font-medium leading-relaxed">
                  Dedicated to minimizing readmission risks and ensuring safety.
                </span>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-8 lg:pl-4">
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#C89B3C]">
                  Safe healing & transition
                </span>
                <h2 className="ohh-serif text-3xl sm:text-4xl font-semibold text-[#0A2140] tracking-tight">
                  Expert clinical support following surgery
                </h2>
                <p className="text-[#5B6B7C] text-sm sm:text-base leading-relaxed">
                  Recovering from surgery requires careful attention to surgical
                  sites, medication regimens, and mobility restrictions. Our
                  skilled nursing and therapy teams guide you through every
                  stage of recovery at home, minimizing complications and
                  ensuring peace of mind for you and your family.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 text-sm font-semibold text-[#0A2140]">
                {[
                  "Smooth Hospital Transitions",
                  "Professional Wound Care",
                  "Physician Coordination",
                  "Rehabilitation Support",
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
          </div>
        </div>
      </section>

      {/* ===== Scope of Services Section ===== */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C89B3C]">
              Specialized care areas
            </span>
            <h2 className="ohh-serif text-3xl sm:text-4xl font-semibold text-[#0A2140] tracking-tight">
              Post-surgical care scope of services
            </h2>
            <p className="text-[#5B6B7C] text-base">
              Our targeted clinical protocols address all critical aspects of
              post-operative recovery to protect your health and promote rapid
              healing.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className={`group bg-white p-8 rounded-3xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 ${
                    item.colSpan || ""
                  }`}
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-[#0A2140] text-[#E4B95A] flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-105">
                      <Icon size={26} strokeWidth={1.75} />
                    </div>
                    <h3 className="ohh-serif font-bold text-[#0A2140] mb-3 text-lg tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5B6B7C] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
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
                Coming home after surgery?
              </h3>
              <p className="text-white/70 text-sm sm:text-base max-w-xl">
                Talk to our team about discharge timing and a plan of care.
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
