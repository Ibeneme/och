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

export default function WhoWeServePage() {
  return (
    <main className="min-h-screen bg-[#FAFAF8] text-slate-800">
      {/* ===== Hero – Centered Full-Width Layout ===== */}
      <section className="relative bg-[#0F172A] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/80 via-[#0F172A]/70 to-[#0F172A]" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-yellow-400 font-bold text-xs tracking-wider uppercase mb-8">
            <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
            Specialized In-Home Support
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] mb-6 tracking-tight">
            Who We{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">
              Serve
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-200 mb-10 leading-relaxed font-medium max-w-2xl mx-auto">
            One Community Home Health delivers compassionate, personalized care
            designed for every stage of life across the Dallas-Fort Worth
            Metroplex.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
            <a
              href="tel:9723251598"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-yellow-400 hover:bg-yellow-300 text-[#0F172A] font-extrabold rounded-xl transition-all"
            >
              <Phone size={18} />
              <span>Call 972-325-1598</span>
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/15 text-white font-bold rounded-xl transition-all backdrop-blur-sm"
            >
              <span>Contact Our Team</span>
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* Commitment Strip under hero */}
          <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-md rounded-2xl p-6 sm:p-8 text-left">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-yellow-400/20 text-yellow-400 flex items-center justify-center">
                <ShieldCheck size={22} />
              </div>
              <div>
                <h3 className="text-base font-extrabold text-white">
                  Our Commitment to You
                </h3>
                <p className="text-xs text-yellow-400/90 font-semibold">
                  Dedicated client-first philosophy
                </p>
              </div>
            </div>
            <ul className="grid sm:grid-cols-3 gap-4 text-sm text-slate-200 font-medium">
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-yellow-400 text-[#0F172A] flex items-center justify-center flex-shrink-0 mt-0.5 font-black text-xs">
                  ✓
                </span>
                <span>
                  Individualized care plans tailored to unique life stages
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-yellow-400 text-[#0F172A] flex items-center justify-center flex-shrink-0 mt-0.5 font-black text-xs">
                  ✓
                </span>
                <span>Direct collaboration with families and physicians</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-yellow-400 text-[#0F172A] flex items-center justify-center flex-shrink-0 mt-0.5 font-black text-xs">
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
            <span className="text-xs font-black uppercase tracking-widest text-yellow-500 bg-yellow-500/10 px-3.5 py-1.5 rounded-full">
              Our Care Pathways
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0F172A] tracking-tight">
              Four Populations We Support
            </h2>
            <p className="text-slate-600 font-medium">
              Specialized in-home programs built around the unique needs of the
              people and families we serve across North Texas.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
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
                footer: "Official VA Resource Integration",
                tag: "Trusted",
                icon: ShieldCheck,
              },
              {
                title: "Adults with Disabilities",
                desc: "Person-centered support that promotes dignity, everyday independence, and tailored assistance structured around unique personal needs.",
                footer: "Customized Daily Support",
                tag: "Personalized",
                icon: HeartHandshake,
              },
              {
                title: "Pediatric Service",
                desc: "We are expanding our specialized care offerings to support children and young families. Stay connected for updates.",
                footer: "Coming Soon",
                tag: "Coming Soon",
                icon: Bell,
                comingSoon: true,
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className={`rounded-3xl p-6 lg:p-7 flex flex-col justify-between min-h-[280px] transition-all ${
                    item.comingSoon
                      ? "bg-[#0F172A] text-white"
                      : "bg-white hover:bg-[#F9F9F6]"
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div
                        className={`w-11 h-11 rounded-2xl flex items-center justify-center ${
                          item.comingSoon
                            ? "bg-yellow-400/20 text-yellow-400"
                            : "bg-yellow-100 text-yellow-600"
                        }`}
                      >
                        <Icon size={22} />
                      </div>
                      <span
                        className={`text-[10px] font-black tracking-widest uppercase px-2.5 py-1 rounded-md ${
                          item.comingSoon
                            ? "bg-yellow-400/20 text-yellow-400"
                            : "bg-yellow-400/15 text-yellow-600"
                        }`}
                      >
                        {item.tag}
                      </span>
                    </div>
                    <h3
                      className={`text-xl font-black tracking-tight ${
                        item.comingSoon ? "text-white" : "text-[#0F172A]"
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p
                      className={`text-sm leading-relaxed font-medium ${
                        item.comingSoon ? "text-slate-300" : "text-slate-600"
                      }`}
                    >
                      {item.desc}
                    </p>
                  </div>
                  <div
                    className={`mt-6 pt-4 text-xs font-bold uppercase tracking-wider flex items-center gap-2 ${
                      item.comingSoon ? "text-yellow-400" : "text-[#0F172A]"
                    }`}
                  >
                    <span>{item.footer}</span>
                    {!item.comingSoon && (
                      <span className="text-yellow-500">→</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== Detailed Sections – Active Populations ===== */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-black uppercase tracking-widest text-yellow-500 bg-yellow-500/10 px-3.5 py-1.5 rounded-full">
              How We Support Each Group
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0F172A] tracking-tight">
              Care Built Around Real Lives
            </h2>
          </div>

          <div className="space-y-10">
            {/* Seniors */}
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-[#FAFAF8] rounded-3xl p-8 lg:p-10">
              <div className="lg:col-span-5">
                <div className="w-12 h-12 rounded-2xl bg-yellow-100 text-yellow-600 flex items-center justify-center mb-5">
                  <Heart size={24} />
                </div>
                <span className="text-xs font-black tracking-widest uppercase text-yellow-600 block mb-2">
                  Aging in Place
                </span>
                <h3 className="text-2xl lg:text-3xl font-black text-[#0F172A] tracking-tight mb-4">
                  Older Adults & Seniors (65+)
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed font-medium mb-6">
                  Designed to help seniors maintain independence and dignity at
                  home. We support daily routines, mobility, chronic condition
                  monitoring, and medication management.
                </p>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
                  <span>Medicare-Certified Support</span>
                  <span className="text-yellow-500">·</span>
                  <span className="text-[#0F172A]">DFW Metroplex</span>
                </div>
              </div>
              <div className="lg:col-span-7">
                <ul className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Fall prevention and home safety evaluations",
                    "Assistance with activities of daily living (ADLs)",
                    "Companionship and mental wellness engagement",
                    "Medication reminders and coordination with physicians",
                  ].map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2.5 bg-white rounded-2xl p-4 text-sm font-semibold text-slate-700"
                    >
                      <CheckCircle2
                        size={16}
                        className="text-yellow-500 flex-shrink-0 mt-0.5"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Veterans */}
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-[#FAFAF8] rounded-3xl p-8 lg:p-10">
              <div className="lg:col-span-5">
                <div className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-700 flex items-center justify-center mb-5">
                  <Award size={24} />
                </div>
                <span className="text-xs font-black tracking-widest uppercase text-slate-500 block mb-2">
                  Honoring Service
                </span>
                <h3 className="text-2xl lg:text-3xl font-black text-[#0F172A] tracking-tight mb-4">
                  Veterans & Military Families
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed font-medium mb-6">
                  We proudly serve those who served our country. Through VA
                  Community Care pathways, we help veterans access reliable
                  in-home care tailored to their needs.
                </p>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
                  <span>VA Community Care</span>
                  <span className="text-yellow-500">·</span>
                  <span className="text-[#0F172A]">Prior Auth Support</span>
                </div>
              </div>
              <div className="lg:col-span-7">
                <ul className="grid sm:grid-cols-2 gap-4">
                  {[
                    "VA Community Care Network authorization support",
                    "Specialized care for veteran health conditions",
                    "Dedicated liaison coordination with VA caseworkers",
                    "Respectful, dependable home assistance for families",
                  ].map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2.5 bg-white rounded-2xl p-4 text-sm font-semibold text-slate-700"
                    >
                      <CheckCircle2
                        size={16}
                        className="text-yellow-500 flex-shrink-0 mt-0.5"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Adults with Disabilities */}
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-[#FAFAF8] rounded-3xl p-8 lg:p-10">
              <div className="lg:col-span-5">
                <div className="w-12 h-12 rounded-2xl bg-yellow-100 text-yellow-600 flex items-center justify-center mb-5">
                  <Users size={24} />
                </div>
                <span className="text-xs font-black tracking-widest uppercase text-yellow-600 block mb-2">
                  Empowered Living
                </span>
                <h3 className="text-2xl lg:text-3xl font-black text-[#0F172A] tracking-tight mb-4">
                  Adults with Disabilities
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed font-medium mb-6">
                  We support adults with physical or developmental disabilities
                  so they can live with greater autonomy, dignity, and everyday
                  independence at home.
                </p>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
                  <span>Medicaid / STAR+PLUS</span>
                  <span className="text-yellow-500">·</span>
                  <span className="text-[#0F172A]">Texas Programs</span>
                </div>
              </div>
              <div className="lg:col-span-7">
                <ul className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Personalized personal care assistance",
                    "Mobility assistance and community integration support",
                    "Respite care options for primary caregivers",
                    "Goal-oriented plans built around individual preferences",
                  ].map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2.5 bg-white rounded-2xl p-4 text-sm font-semibold text-slate-700"
                    >
                      <CheckCircle2
                        size={16}
                        className="text-yellow-500 flex-shrink-0 mt-0.5"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Pediatric Coming Soon ===== */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0F172A] rounded-3xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="p-10 sm:p-12 lg:p-14 text-white flex flex-col justify-center">
                <span className="inline-flex items-center gap-2 text-yellow-400 font-extrabold text-xs uppercase tracking-[0.15em] mb-5 bg-white/10 px-3 py-1.5 rounded-full w-fit">
                  <Bell size={14} />
                  Coming Soon
                </span>
                <h2 className="text-3xl sm:text-4xl font-black mb-5 tracking-tight leading-tight">
                  Pediatric Home Health Services
                </h2>
                <p className="text-slate-300 mb-6 leading-relaxed font-medium max-w-lg">
                  We are expanding our specialized care offerings to support
                  children and young families. Our future pediatric program will
                  focus on safe, family-centered care delivered in the comfort
                  of home.
                </p>
                <ul className="space-y-3 text-slate-200 text-sm font-semibold mb-8">
                  {[
                    "Family-centered care planning",
                    "Support for children with complex needs",
                    "Coordination with pediatric providers",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-yellow-400 text-[#0F172A] flex items-center justify-center flex-shrink-0 mt-0.5 font-black text-xs">
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-yellow-400 hover:bg-yellow-300 text-[#0F172A] font-extrabold rounded-xl transition-all w-fit"
                >
                  <span>Stay Updated</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
              <div className="relative min-h-[280px] lg:min-h-full">
                <img
                  src="https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=1200&q=80"
                  alt="Pediatric care coming soon"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-[#0F172A]/20 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <p className="text-white font-extrabold text-lg">
                    Pediatric Service
                    <br />
                    <span className="text-yellow-400 text-sm font-bold uppercase tracking-wider">
                      Expanding Soon
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
          <div className="bg-[#FAFAF8] rounded-3xl p-8 lg:p-10 flex flex-col lg:flex-row lg:items-center gap-8">
            <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-yellow-100 text-yellow-600 flex items-center justify-center">
              <Activity size={28} />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-black text-[#0F172A] mb-2 tracking-tight">
                Also Supporting Post-Hospital Recovery
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed font-medium">
                Across all populations, our teams help patients transition
                safely from hospital to home—with skilled nursing, therapy
                coordination, medication education, and close communication with
                physicians to reduce readmission risk.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#0F172A] hover:text-yellow-600 transition-colors shrink-0"
            >
              Talk to our team
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== Final CTA ===== */}
      <section className="py-20 lg:py-28 bg-[#0F172A] text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
            Ready to explore care for you or a loved one?
          </h2>
          <p className="text-lg text-slate-300 font-medium">
            Our team is available to discuss needs, benefits, and next steps
            across the Dallas–Fort Worth Metroplex.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <a
              href="tel:9723251598"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-yellow-400 hover:bg-yellow-300 text-[#0F172A] font-extrabold rounded-xl transition-all"
            >
              <Phone size={18} />
              <span>Call 972-325-1598</span>
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/15 text-white font-bold rounded-xl transition-all backdrop-blur-sm"
            >
              <span>Contact Our Team</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
