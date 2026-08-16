import { Link } from "react-router-dom";

import {
  Activity,
  UserCheck,
  HeartPulse,
  ShieldCheck,
  BookOpen,
  Star,
  Phone,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    icon: Activity,
    title: "Skilled Clinical Care",
    desc: "Professional nursing interventions, health monitoring, and specialized clinical treatments.",
  },
  {
    icon: UserCheck,
    title: "Personal-Care Support",
    desc: "Respectful assistance with daily hygiene, dressing, grooming, and personal routines.",
  },
  {
    icon: HeartPulse,
    title: "Therapy Services",
    desc: "Physical, occupational, and speech therapy to enhance functional mobility and communication.",
  },
  {
    icon: ShieldCheck,
    title: "Independence with Daily Activities",
    desc: "Empowering clients to perform daily tasks with confidence and appropriate adaptive support.",
  },
  {
    icon: BookOpen,
    title: "Caregiver Education",
    desc: "Guidance and training for family members and support networks on safe handling and care techniques.",
  },
  {
    icon: Activity,
    title: "Chronic-Condition Support",
    desc: "Targeted symptom tracking and clinical management for long-term health conditions.",
  },
];

export default function AdultsWithDisabilitiesComp() {
  return (
    <main className="min-h-screen bg-[#FBF8F2] text-[#3A4657] ohh-sans">
      {/* ===== Hero Section ===== */}
      <section className="relative overflow-hidden pt-12 pb-16 lg:pt-20 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3ECDC] text-[#0A2140] font-semibold text-xs tracking-wider uppercase">
                <span className="w-2 h-2 rounded-full bg-[#C89B3C]" />
                Specialized clinical discipline
              </div>

              <div className="text-xs text-[#8A7B5C] font-medium tracking-wide">
                JACOP Healthcare Services, Inc., serving clients since 2010, is
                now doing business as One Community Home Health.
              </div>

              <h1 className="ohh-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#0A2140] tracking-tight leading-[1.1]">
                Services for adults with{" "}
                <span className="text-[#C89B3C]">disabilities</span>
              </h1>

              <p className="text-base sm:text-lg text-[#5B6B7C] leading-relaxed max-w-2xl">
                Dignified, professional clinical care, therapy, and personal
                support designed to promote independence, safety, and quality of
                life at home.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a
                  href="tel:9723251598"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#0A2140] hover:bg-[#123258] text-[#E4B95A] font-bold rounded-full transition-colors group"
                >
                  <Phone size={16} />
                  <span>Call (972) 325-1598</span>
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#F3ECDC] hover:bg-[#EADFC2] text-[#0A2140] font-semibold rounded-full transition-colors"
                >
                  <span>Request a consultation</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl p-2 overflow-hidden">
                <div className="relative h-[300px] rounded-[20px] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1000&q=80"
                    alt="Adults with disabilities home care"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="ohh-serif text-lg font-semibold text-[#0A2140]">
                    Dignity, safety & independence
                  </h3>
                  <p className="text-sm text-[#5B6B7C] leading-relaxed">
                    Personalized care that respects dignity while maximizing
                    everyday independence.
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
            <div className="lg:col-span-6 space-y-8">
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#C89B3C]">
                  Dignity, safety & independence
                </span>
                <h2 className="ohh-serif text-3xl sm:text-4xl font-semibold text-[#0A2140] tracking-tight">
                  Comprehensive in-home support for adults with disabilities
                </h2>
                <p className="text-[#5B6B7C] text-base leading-relaxed">
                  Living with a disability requires personalized care that
                  respects personal dignity while maximizing everyday
                  independence. Our skilled clinical team, therapists, and
                  personal care aides partner with individuals and families to
                  deliver tailored support, therapy, and chronic-condition
                  management at home.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 text-sm font-semibold text-[#0A2140]">
                {[
                  "Skilled Clinical Care",
                  "Personal-Care Support",
                  "Specialized Therapy Services",
                  "Caregiver Education",
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
              <div className="overflow-hidden rounded-3xl">
                <img
                  src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1000&q=80"
                  alt="Care for adults with disabilities"
                  className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
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
              Service scope
            </span>
            <h2 className="ohh-serif text-3xl sm:text-4xl font-semibold text-[#0A2140] tracking-tight">
              Adult disability care services
            </h2>
            <p className="text-[#5B6B7C] text-base">
              Our specialized care programs focus on clinical excellence, daily
              independence, and holistic well-being.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-white rounded-3xl p-7 flex flex-col transition-colors hover:bg-[#F3ECDC]/40"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#0A2140] text-[#E4B95A] flex items-center justify-center mb-5">
                  <Icon size={22} />
                </div>
                <h3 className="ohh-serif font-bold text-[#0A2140] mb-2.5 text-lg tracking-tight">
                  {title}
                </h3>
                <p className="text-sm text-[#5B6B7C] leading-relaxed">{desc}</p>
              </div>
            ))}

            <div className="md:col-span-2 lg:col-span-3 bg-[#0A2140] rounded-3xl p-8 lg:p-10 flex flex-col sm:flex-row sm:items-center gap-6">
              <div className="w-14 h-14 rounded-2xl bg-white/10 text-[#E4B95A] flex items-center justify-center shrink-0">
                <Star size={26} />
              </div>
              <div className="flex-1">
                <h3 className="ohh-serif font-bold text-white mb-2 text-xl tracking-tight">
                  Dignity, safety, and quality of life
                </h3>
                <p className="text-white/70 text-sm leading-relaxed max-w-3xl">
                  A holistic commitment to safeguarding personal autonomy,
                  physical safety, and overall happiness at home.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
