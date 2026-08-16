import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Phone,
  ArrowRight,
  Heart,
  Award,
  Users,
  Activity,
  CheckCircle2,
  Bell,
  HeartHandshake,
} from "lucide-react";

const pathways = [
  {
    title: "Seniors",
    desc: "Supporting safety, independence, recovery, and quality of life at home through specialized assistance and personalized care routines.",
    footer: "Request consultation",
    tag: "Active",
    icon: Users,
  },
  {
    title: "Veterans",
    desc: "Respectful care and direct links to official VA resources for veterans and eligible families seeking dependable home assistance.",
    footer: "Official VA resource integration",
    tag: "Trusted",
    icon: ShieldCheck,
  },
  {
    title: "Adults with Disabilities",
    desc: "Person-centered support that promotes dignity, everyday independence, and tailored assistance structured around unique personal needs.",
    footer: "Customized daily support",
    tag: "Personalized",
    icon: HeartHandshake,
  },
  {
    title: "Pediatric Service",
    desc: "We are expanding our specialized care offerings to support children and young families. Stay connected for updates.",
    footer: "Coming soon",
    tag: "Coming soon",
    icon: Bell,
    comingSoon: true,
  },
];

const detailSections = [
  {
    icon: Heart,
    eyebrow: "Aging in place",
    title: "Older Adults & Seniors (65+)",
    desc: "Designed to help seniors maintain independence and dignity at home. We support daily routines, mobility, chronic condition monitoring, and medication management.",
    meta: ["Medicare-certified support", "DFW Metroplex"],
    points: [
      "Fall prevention and home safety evaluations",
      "Assistance with activities of daily living (ADLs)",
      "Companionship and mental wellness engagement",
      "Medication reminders and coordination with physicians",
    ],
  },
  {
    icon: Award,
    eyebrow: "Honoring service",
    title: "Veterans & Military Families",
    desc: "We proudly serve those who served our country. Through VA Community Care pathways, we help veterans access reliable in-home care tailored to their needs.",
    meta: ["VA Community Care", "Prior auth support"],
    points: [
      "VA Community Care Network authorization support",
      "Specialized care for veteran health conditions",
      "Dedicated liaison coordination with VA caseworkers",
      "Respectful, dependable home assistance for families",
    ],
  },
  {
    icon: Users,
    eyebrow: "Empowered living",
    title: "Adults with Disabilities",
    desc: "We support adults with physical or developmental disabilities so they can live with greater autonomy, dignity, and everyday independence at home.",
    meta: ["Medicaid / STAR+PLUS", "Texas programs"],
    points: [
      "Personalized personal care assistance",
      "Mobility assistance and community integration support",
      "Respite care options for primary caregivers",
      "Goal-oriented plans built around individual preferences",
    ],
  },
];

export default function WhoWeServePage() {
  return (
    <main className="min-h-screen bg-white text-[#3A4657]">
      {/* ===== Hero ===== */}
      <section className="relative bg-[#0A2140] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A2140]/80 via-[#0A2140]/70 to-[#0A2140]" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-[#E4B95A] font-bold text-xs tracking-wider uppercase mb-8">
            <span className="w-2 h-2 rounded-full bg-[#E4B95A] animate-pulse" />
            Specialized in-home support
          </div>

          <h1 className="ohh-serif text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.1] mb-6 tracking-tight">
            Who We <span className="text-[#E4B95A]">Serve</span>
          </h1>

          <p className="text-lg sm:text-xl text-white/75 mb-10 leading-relaxed max-w-2xl mx-auto">
            One Community Home Health delivers compassionate, personalized care
            designed for every stage of life across the Dallas-Fort Worth
            Metroplex.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
            <a
              href="tel:9723251598"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#E4B95A] hover:bg-[#D9A93F] text-[#0A2140] font-bold rounded-full transition-colors"
            >
              <Phone size={18} />
              <span>Call 972-325-1598</span>
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/15 text-white font-bold rounded-full transition-colors backdrop-blur-sm"
            >
              <span>Contact our team</span>
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* Commitment Strip under hero */}
          <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-md rounded-2xl p-6 sm:p-8 text-left">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-[#E4B95A]/15 text-[#E4B95A] flex items-center justify-center">
                <ShieldCheck size={22} />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">
                  Our commitment to you
                </h3>
                <p className="text-xs text-[#E4B95A]/90 font-semibold">
                  Dedicated client-first philosophy
                </p>
              </div>
            </div>
            <ul className="grid sm:grid-cols-3 gap-4 text-sm text-white/80 font-medium">
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#E4B95A] text-[#0A2140] flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-xs">
                  ✓
                </span>
                <span>
                  Individualized care plans tailored to unique life stages
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#E4B95A] text-[#0A2140] flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-xs">
                  ✓
                </span>
                <span>Direct collaboration with families and physicians</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#E4B95A] text-[#0A2140] flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-xs">
                  ✓
                </span>
                <span>Focus on safety, independence, and dignity at home</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== Four Pathways Overview ===== */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C89B3C] bg-[#E4B95A]/10 px-3.5 py-1.5 rounded-full">
              Our care pathways
            </span>
            <h2 className="ohh-serif text-3xl sm:text-4xl font-semibold text-[#0A2140] tracking-tight">
              Four populations we support
            </h2>
            <p className="text-[#5B6B7C]">
              Specialized in-home programs built around the unique needs of the
              people and families we serve across North Texas.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {pathways.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className={`rounded-3xl p-6 lg:p-7 flex flex-col justify-between min-h-[280px] transition-colors ${
                    item.comingSoon
                      ? "bg-[#0A2140] text-white"
                      : "bg-[#FBF8F2] hover:bg-[#F3ECDC]"
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div
                        className={`w-11 h-11 rounded-2xl flex items-center justify-center ${
                          item.comingSoon
                            ? "bg-[#E4B95A]/15 text-[#E4B95A]"
                            : "bg-[#F3ECDC] text-[#0A2140]"
                        }`}
                      >
                        <Icon size={22} />
                      </div>
                      <span
                        className={`text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-md ${
                          item.comingSoon
                            ? "bg-[#E4B95A]/15 text-[#E4B95A]"
                            : "bg-white text-[#8A7B5C]"
                        }`}
                      >
                        {item.tag}
                      </span>
                    </div>
                    <h3
                      className={`text-xl font-bold tracking-tight ${
                        item.comingSoon ? "text-white" : "text-[#0A2140]"
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p
                      className={`text-sm leading-relaxed ${
                        item.comingSoon ? "text-white/65" : "text-[#5B6B7C]"
                      }`}
                    >
                      {item.desc}
                    </p>
                  </div>
                  <div
                    className={`mt-6 pt-4 text-xs font-bold uppercase tracking-wider flex items-center gap-2 ${
                      item.comingSoon ? "text-[#E4B95A]" : "text-[#0A2140]"
                    }`}
                  >
                    <span>{item.footer}</span>
                    {!item.comingSoon && (
                      <span className="text-[#C89B3C]">→</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== Detailed Sections — zigzag rhythm instead of a repeated layout ===== */}
      <section className="py-20 lg:py-28 bg-[#FBF8F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C89B3C] bg-[#E4B95A]/10 px-3.5 py-1.5 rounded-full">
              How we support each group
            </span>
            <h2 className="ohh-serif text-3xl sm:text-4xl font-semibold text-[#0A2140] tracking-tight">
              Care built around real lives
            </h2>
          </div>

          <div className="space-y-10">
            {detailSections.map((section, idx) => {
              const Icon = section.icon;
              const flipped = idx % 2 === 1;
              return (
                <div
                  key={section.title}
                  className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-white rounded-3xl p-8 lg:p-10"
                >
                  <div
                    className={`lg:col-span-5 ${
                      flipped ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <div className="w-12 h-12 rounded-2xl bg-[#F3ECDC] text-[#0A2140] flex items-center justify-center mb-5">
                      <Icon size={24} />
                    </div>
                    <span className="text-xs font-bold tracking-widest uppercase text-[#C89B3C] block mb-2">
                      {section.eyebrow}
                    </span>
                    <h3 className="ohh-serif text-2xl lg:text-3xl font-semibold text-[#0A2140] tracking-tight mb-4">
                      {section.title}
                    </h3>
                    <p className="text-[#5B6B7C] text-sm leading-relaxed mb-6">
                      {section.desc}
                    </p>
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#8A93A0]">
                      <span>{section.meta[0]}</span>
                      <span className="text-[#C89B3C]">·</span>
                      <span className="text-[#0A2140]">{section.meta[1]}</span>
                    </div>
                  </div>
                  <div
                    className={`lg:col-span-7 ${
                      flipped ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <ul className="grid sm:grid-cols-2 gap-4">
                      {section.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-2.5 bg-[#FBF8F2] rounded-2xl p-4 text-sm font-medium text-[#3A4657]"
                        >
                          <CheckCircle2
                            size={16}
                            className="text-[#C89B3C] flex-shrink-0 mt-0.5"
                          />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== Pediatric Coming Soon ===== */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0A2140] rounded-3xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="p-10 sm:p-12 lg:p-14 text-white flex flex-col justify-center">
                <span className="inline-flex items-center gap-2 text-[#E4B95A] font-bold text-xs uppercase tracking-[0.15em] mb-5 bg-white/10 px-3 py-1.5 rounded-full w-fit">
                  <Bell size={14} />
                  Coming soon
                </span>
                <h2 className="ohh-serif text-3xl sm:text-4xl font-semibold mb-5 tracking-tight leading-tight">
                  Pediatric Home Health Services
                </h2>
                <p className="text-white/70 mb-6 leading-relaxed max-w-lg">
                  We are expanding our specialized care offerings to support
                  children and young families. Our future pediatric program will
                  focus on safe, family-centered care delivered in the comfort
                  of home.
                </p>
                <ul className="space-y-3 text-white/80 text-sm font-medium mb-8">
                  {[
                    "Family-centered care planning",
                    "Support for children with complex needs",
                    "Coordination with pediatric providers",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-[#E4B95A] text-[#0A2140] flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-xs">
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#0F6DF9] text-[#fff] font-bold rounded-full transition-colors w-fit"
                >
                  <span>Stay updated</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
              <div className="relative min-h-[280px] lg:min-h-full">
                <img
                  src="https://plus.unsplash.com/premium_photo-1747608208489-4b68e2433588?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpbGRjYXJlfGVufDB8fDB8fHww"
                  alt="Pediatric care coming soon"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2140]/80 via-[#0A2140]/20 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <p className="text-white font-bold text-lg">
                    Pediatric Service
                    <br />
                    <span className="text-[#E4B95A] text-sm font-bold uppercase tracking-wider">
                      Expanding soon
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Post-Hospital / Transitions Note ===== */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FBF8F2] rounded-3xl p-8 lg:p-10 flex flex-col lg:flex-row lg:items-center gap-8">
            <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-[#F3ECDC] text-[#0A2140] flex items-center justify-center">
              <Activity size={28} />
            </div>
            <div className="flex-1">
              <h3 className="ohh-serif text-xl font-semibold text-[#0A2140] mb-2 tracking-tight">
                Also supporting post-hospital recovery
              </h3>
              <p className="text-[#5B6B7C] text-sm leading-relaxed">
                Across all populations, our teams help patients transition
                safely from hospital to home — with skilled nursing, therapy
                coordination, medication education, and close communication with
                physicians to reduce readmission risk.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#0A2140] hover:text-[#C89B3C] transition-colors shrink-0"
            >
              Talk to our team
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
