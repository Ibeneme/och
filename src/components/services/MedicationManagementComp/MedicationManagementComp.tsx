import { Link } from "react-router-dom";

import {
  ClipboardCheck,
  BookOpen,
  ShieldCheck,
  Activity,
  Users,
  HeartHandshake,
  Phone,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    icon: ClipboardCheck,
    title: "Medication Reconciliation",
    desc: "Careful comparison and verification of all current prescriptions to eliminate duplicates and prevent harmful interactions.",
  },
  {
    icon: BookOpen,
    title: "Medication Education",
    desc: "Clear explanations regarding what each medication does, correct timing, and proper administration methods.",
  },
  {
    icon: ShieldCheck,
    title: "Adherence Support",
    desc: "Practical organizing strategies and routine checks to ensure medications are taken exactly as prescribed.",
  },
  {
    icon: Activity,
    title: "Side-Effect Monitoring",
    desc: "Active clinical observation for adverse reactions, unexpected symptoms, or drug-to-drug complications.",
  },
  {
    icon: Users,
    title: "Physician & Pharmacy Coordination",
    desc: "Seamless communication with care providers and pharmacies for prescription refills, adjustments, and updates.",
  },
  {
    icon: HeartHandshake,
    title: "Caregiver Instruction",
    desc: "Comprehensive training and guidelines for family members helping manage daily medication schedules safely.",
  },
];

export default function MedicationManagementComp() {
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
                Medication management{" "}
                <span className="text-[#C89B3C]">care at home</span>
              </h1>

              <p className="text-base sm:text-lg text-[#5B6B7C] leading-relaxed max-w-2xl">
                Expert clinical oversight and safe medication coordination
                delivered directly in your home to ensure accurate regimens and
                prevent adverse drug interactions.
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
                    src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1000&q=80"
                    alt="Nurse reviewing medication schedules with a patient at home"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="ohh-serif text-lg font-semibold text-[#0A2140]">
                    Safety & regimen accuracy
                  </h3>
                  <p className="text-sm text-[#5B6B7C] leading-relaxed">
                    Skilled nurses reviewing interactions and coordinating
                    directly with physicians and pharmacies.
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
                  Safety & regimen accuracy
                </span>
                <h2 className="ohh-serif text-3xl sm:text-4xl font-semibold text-[#0A2140] tracking-tight">
                  Ensuring safety and compliance through professional oversight
                </h2>
                <p className="text-[#5B6B7C] text-base leading-relaxed">
                  Managing multiple prescriptions can be complex and
                  overwhelming. Our skilled nursing team provides comprehensive
                  medication management services—reviewing drug interactions,
                  organizing schedules, and coordinating directly with
                  physicians and pharmacies to protect your health and
                  well-being.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 text-sm font-semibold text-[#0A2140]">
                {[
                  "Licensed Skilled Nurses",
                  "Physician & Pharmacy Coordination",
                  "Adherence & Safety Support",
                  "Family & Caregiver Instruction",
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
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80"
                  alt="Nurse checking medication instructions with a patient"
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
              Specialized care areas
            </span>
            <h2 className="ohh-serif text-3xl sm:text-4xl font-semibold text-[#0A2140] tracking-tight">
              Medication management scope of services
            </h2>
            <p className="text-[#5B6B7C] text-base">
              Our clinical protocol addresses every phase of prescription
              organization, patient education, and safety monitoring.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
