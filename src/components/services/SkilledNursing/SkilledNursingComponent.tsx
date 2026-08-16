import { Link } from "react-router-dom";

import {
  HeartPulse,
  Activity,
  Pill,
  FileText,
  Stethoscope,
  BookOpen,
  Users,
  ShieldCheck,
  Phone,
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  CalendarClock,
} from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "Health Assessments",
    desc: "Comprehensive evaluations of physical status, recovery progress, and ongoing home health needs.",
  },
  {
    icon: Pill,
    title: "Medication Management & Education",
    desc: "Medication reconciliation, adherence tracking, side-effect monitoring, and clear patient teaching.",
  },
  {
    icon: Activity,
    title: "Vital-Sign Monitoring",
    desc: "Regular tracking of blood pressure, heart rate, oxygen saturation, temperature, and weight.",
  },
  {
    icon: FileText,
    title: "Physician-Order Implementation",
    desc: "Precise execution of medical treatments, therapies, and clinical orders established by your doctor.",
  },
  {
    icon: HeartPulse,
    title: "Chronic-Condition Monitoring",
    desc: "Ongoing clinical oversight for conditions such as diabetes, heart failure, COPD, and hypertension.",
  },
  {
    icon: BookOpen,
    title: "Patient & Caregiver Education",
    desc: "Empowering families with knowledge regarding disease management, self-care techniques, and safety.",
  },
  {
    icon: Users,
    title: "Care Coordination",
    desc: "Seamless communication between physicians, therapists, family members, and medical suppliers.",
  },
  {
    icon: ShieldCheck,
    title: "Disease-Management Support",
    desc: "Structured programs to prevent complications, reduce hospital re-admissions, and improve quality of life.",
  },
];

const pathway = [
  {
    icon: ClipboardCheck,
    title: "Physician referral & intake",
    desc: "Your doctor's orders are reviewed and a licensed RN builds a plan of care around them.",
  },
  {
    icon: CalendarClock,
    title: "Scheduled in-home visits",
    desc: "A nurse visits on a cadence matched to your condition, from daily wound checks to weekly monitoring.",
  },
  {
    icon: HeartPulse,
    title: "Ongoing oversight & reporting",
    desc: "Vitals, medications, and progress are tracked and reported back to your physician after every visit.",
  },
];

export default function SkilledNursingPage() {
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
                Skilled nursing{" "}
                <span className="text-[#C89B3C]">care at home</span>
              </h1>

              <p className="text-base sm:text-lg text-[#5B6B7C] leading-relaxed max-w-2xl">
                Physician-directed clinical support delivered by licensed nurses
                to promote healing, manage chronic conditions, and ensure a
                safe, dignified recovery in the comfort of home.
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

            {/* Hero Feature Card */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl p-2 overflow-hidden">
                <div className="relative h-[300px] rounded-[20px] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80"
                    alt="Nurse caring for a patient at home"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A2140] via-transparent to-transparent opacity-70" />
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-[#0A2140] text-[#E4B95A] flex items-center justify-center flex-shrink-0">
                      <ShieldCheck size={20} />
                    </div>
                    <div>
                      <h3 className="ohh-serif text-lg font-semibold text-[#0A2140]">
                        Verified clinical excellence
                      </h3>
                      <p className="text-xs text-[#8A7B5C]">
                        Trusted by families since 2010
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-[#5B6B7C] leading-relaxed">
                    Professional, individualized medical oversight delivered
                    directly to families across the community.
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
                  src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1000&q=80"
                  alt="Compassionate home healthcare nurse smiling with a senior patient"
                  className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 hidden sm:flex flex-col gap-1 p-6 rounded-3xl bg-[#0A2140] max-w-[220px]">
                <span className="ohh-serif text-3xl font-semibold text-[#E4B95A]">
                  10+
                </span>
                <span className="text-xs text-white/70 font-medium leading-relaxed">
                  Years of dependable, dedicated home health service excellence.
                </span>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-8 lg:pl-4">
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#C89B3C]">
                  Professional clinical support
                </span>
                <h2 className="ohh-serif text-3xl sm:text-4xl font-semibold text-[#0A2140] tracking-tight">
                  Expert nursing care tailored to your recovery plan
                </h2>
                <p className="text-[#5B6B7C] text-sm sm:text-base leading-relaxed">
                  Our skilled nursing services provide comprehensive,
                  individualized medical care directly in your home. Working
                  closely with your physician, our licensed nurses monitor
                  health status, manage complex medications, and provide
                  essential education to empower patients and caregivers.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 text-sm font-semibold text-[#0A2140]">
                {[
                  "Licensed Registered Nurses (RN)",
                  "Physician-Directed Plans",
                  "Personalized In-Home Visits",
                  "24/7 On-Call Support",
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

      {/* ===== Care Pathway (signature element) ===== */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C89B3C]">
              How care begins
            </span>
            <h2 className="ohh-serif text-3xl sm:text-4xl font-semibold text-[#0A2140]">
              Your care pathway
            </h2>
            <p className="text-sm text-[#5B6B7C]">
              A clear, physician-directed path from referral to ongoing in-home
              support.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {pathway.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.title}
                  className="relative bg-white p-8 rounded-3xl space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-2xl bg-[#0A2140] text-[#E4B95A] flex items-center justify-center">
                      <Icon size={20} />
                    </div>
                    <span className="ohh-serif text-3xl font-semibold text-[#F3ECDC]">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="ohh-serif text-lg font-bold text-[#0A2140]">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#5B6B7C] leading-relaxed">
                    {step.desc}
                  </p>
                  {idx < pathway.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-px bg-[#EADFC2]" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== Services Grid ===== */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C89B3C]">
              Comprehensive services
            </span>
            <h2 className="ohh-serif text-3xl sm:text-4xl font-semibold text-[#0A2140] tracking-tight">
              Skilled nursing clinical scope
            </h2>
            <p className="text-[#5B6B7C] text-base">
              Our multidisciplinary approach covers a wide array of specialized
              clinical needs to support independence, safety, and recovery at
              home.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="group bg-[#FBF8F2] hover:bg-[#F3ECDC]/60 p-8 rounded-3xl flex flex-col justify-between transition-colors duration-300"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-[#0A2140] text-[#E4B95A] flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-105">
                      <Icon size={22} strokeWidth={1.75} />
                    </div>
                    <h3 className="ohh-serif font-bold text-[#0A2140] mb-3 text-lg tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5B6B7C] leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== Closing CTA ===== */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0A2140] rounded-3xl p-10 sm:p-14 flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#C89B3C]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 space-y-3 text-center lg:text-left">
              <h3 className="ohh-serif text-2xl sm:text-3xl font-semibold text-white">
                Ready to bring skilled nursing care home?
              </h3>
              <p className="text-white/70 text-sm sm:text-base max-w-xl">
                Talk to our team about your physician's orders and we'll build a
                plan of care around them.
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
