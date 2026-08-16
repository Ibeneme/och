import { Link } from "react-router-dom";

import {
  Users,
  ClipboardList,
  Activity,
  FileText,
  Award,
  HeartPulse,
  Phone,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Flag,
} from "lucide-react";

const services = [
  {
    icon: Users,
    title: "Support for Veterans & Families",
    desc: "Comprehensive in-home clinical and supportive care for veterans and eligible family members.",
  },
  {
    icon: ClipboardList,
    title: "VA Provider Coordination",
    desc: "Active communication and reporting with VA physicians, case managers, and care teams.",
  },
  {
    icon: Activity,
    title: "Skilled & Supportive Care",
    desc: "High-quality clinical nursing, therapy, and personal care tailored to individual needs.",
  },
  {
    icon: FileText,
    title: "Referral & Authorization Process",
    desc: "Guidance and administrative support navigating the necessary VA referral steps.",
  },
  {
    icon: Award,
    title: "Respectful, Experienced Team",
    desc: "Caregivers trained to understand the unique experiences and needs of those who have served.",
  },
  {
    icon: HeartPulse,
    title: "Chronic Condition Management",
    desc: "Ongoing monitoring and support for service-related and age-related health conditions.",
  },
  {
    icon: ShieldCheck,
    title: "Post-Hospitalization Support",
    desc: "Dedicated clinical follow-up and transition care after discharge from VA or community hospitals.",
  },
  {
    icon: Flag,
    title: "Community Resource Navigation",
    desc: "Assistance connecting veterans with local benefits, support groups, and specialized programs.",
  },
];

export default function VeteranCareComp() {
  return (
    <main className="min-h-screen bg-[#FBF8F2] text-[#3A4657] ohh-sans">
      {/* ===== Hero Section ===== */}
      <section className="relative overflow-hidden pt-12 pb-16 lg:pt-20 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3ECDC] text-[#0A2140] font-semibold text-xs tracking-wider uppercase">
                <span className="w-2 h-2 rounded-full bg-[#C89B3C]" />
                Honoring those who served
              </div>

              <div className="text-xs text-[#8A7B5C] font-medium tracking-wide">
                JACOP Healthcare Services, Inc., serving clients since 2010, is
                now doing business as One Community Home Health.
              </div>

              <h1 className="ohh-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#0A2140] tracking-tight leading-[1.1]">
                Veteran care <span className="text-[#C89B3C]">at home</span>
              </h1>

              <p className="text-base sm:text-lg text-[#5B6B7C] leading-relaxed max-w-2xl">
                Specialized clinical and supportive home health services for
                veterans and their families, coordinated with VA providers.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a
                  href="#consultation-form"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#0A2140] hover:bg-[#123258] text-[#E4B95A] font-bold rounded-full transition-colors group"
                >
                  <span>Request veteran care</span>
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
                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80"
                    alt="Dedicated veteran healthcare support at home"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="ohh-serif text-lg font-semibold text-[#0A2140]">
                    VA coordination
                  </h3>
                  <p className="text-sm text-[#5B6B7C] leading-relaxed">
                    Seamless clinical alignment with VA physicians and dedicated
                    case managers.
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
                  src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1000&q=80"
                  alt="Compassionate veteran care team member supporting a client"
                  className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 hidden sm:flex flex-col gap-1 p-6 rounded-3xl bg-[#0A2140] max-w-[220px]">
                <span className="ohh-serif text-3xl font-semibold text-[#E4B95A]">
                  100%
                </span>
                <span className="text-xs text-white/70 font-medium leading-relaxed">
                  Dedicated to respecting and serving those who served our
                  nation.
                </span>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-8 lg:pl-4">
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#C89B3C]">
                  Respect & excellence
                </span>
                <h2 className="ohh-serif text-3xl sm:text-4xl font-semibold text-[#0A2140] tracking-tight">
                  Dedicated care for veterans and their families
                </h2>
                <p className="text-[#5B6B7C] text-sm sm:text-base leading-relaxed">
                  We understand the unique needs of those who have served. Our
                  team delivers high-quality clinical nursing, therapy, and
                  personal care while coordinating closely with VA physicians
                  and case managers to ensure seamless support.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 text-sm font-semibold text-[#0A2140]">
                {[
                  "VA Coordination",
                  "Skilled Clinical Care",
                  "Family Support",
                  "Referral Guidance",
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
              Service scope
            </span>
            <h2 className="ohh-serif text-3xl sm:text-4xl font-semibold text-[#0A2140] tracking-tight">
              Veteran care services
            </h2>
            <p className="text-[#5B6B7C] text-base">
              Comprehensive in-home clinical and supportive care tailored
              specifically for veterans and their households.
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
                Serving a veteran or their family?
              </h3>
              <p className="text-white/70 text-sm sm:text-base max-w-xl">
                Talk to our team about VA coordination and getting started.
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
