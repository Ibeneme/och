import {
  Phone,
  Calendar,
  Star,
  ShieldCheck,
  HeartHandshake,
  Award,
  MessageCircle,
} from "lucide-react";

export default function OneCommunitySection() {
  return (
    <section className="relative min-h-screen bg-[#F3F1EC] text-slate-900 py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Soft background glow matching gold theme */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top Badge & Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-semibold tracking-[0.18em] uppercase bg-white border border-amber-200 text-amber-700 mb-7">
            <span>✨</span> Trusted Home Health Excellence Since 2010
          </div>
          <h1 className="fp-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.1]">
            Why Families Choose <br className="hidden sm:inline" />
            <span className="text-amber-700">One Community</span>
          </h1>
          <p className="text-base sm:text-[17px] text-slate-500 leading-relaxed max-w-2xl mx-auto">
            Care that feels like home. Talk with our team about your needs,
            coverage, and next steps.
          </p>
        </div>

        {/* Grid layout with floating review card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16 sm:mb-20">
          {/* Left Column: Floating Review Card */}
          <div className="lg:col-span-4 flex justify-center lg:justify-start">
            <div className="relative bg-white p-7 rounded-[22px] border border-amber-100 max-w-sm transform -rotate-2 hover:rotate-0 transition-transform duration-300">
              <div className="flex items-center space-x-1 text-amber-400 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-slate-700 text-sm italic mb-5 leading-relaxed">
                "Founder-led clinical leadership and responsive communication
                gave our family complete peace of mind."
              </p>
              <div className="flex items-center space-x-3 pt-3 border-t border-amber-50">
                <div className="w-10 h-10 rounded-full bg-amber-50 text-amber-700 font-bold flex items-center justify-center text-sm border border-amber-100">
                  OC
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900">
                    The Family Care Network
                  </h4>
                  <p className="text-xs text-slate-400">
                    Verified Client Review
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Key Value Propositions */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            <div className="rounded-[22px] bg-white border border-amber-100 p-6 sm:p-7 flex flex-col justify-between hover:border-amber-300 transition-colors duration-300">
              <div>
                <div className="w-11 h-11 rounded-full bg-amber-50 border border-amber-100 text-amber-700 flex items-center justify-center mb-5">
                  <Award className="w-5 h-5" strokeWidth={1.75} />
                </div>
                <h3 className="fp-serif text-xl font-medium text-slate-900 mb-2.5 tracking-tight">
                  Decades of Nursing Experience
                </h3>
                <p className="text-slate-500 text-[14px] leading-relaxed">
                  Founder-led clinical leadership backed by more than two
                  decades of nursing experience.
                </p>
              </div>
            </div>

            <div className="rounded-[22px] bg-white border border-amber-100 p-6 sm:p-7 flex flex-col justify-between hover:border-amber-300 transition-colors duration-300">
              <div>
                <div className="w-11 h-11 rounded-full bg-amber-50 border border-amber-100 text-amber-700 flex items-center justify-center mb-5">
                  <ShieldCheck className="w-5 h-5" strokeWidth={1.75} />
                </div>
                <h3 className="fp-serif text-xl font-medium text-slate-900 mb-2.5 tracking-tight">
                  A Proven Care Legacy
                </h3>
                <p className="text-slate-500 text-[14px] leading-relaxed">
                  A care legacy serving clients since 2010, now presented under
                  the One Community Home Health DBA.
                </p>
              </div>
            </div>

            <div className="rounded-[22px] bg-white border border-amber-100 p-6 sm:p-7 flex flex-col justify-between hover:border-amber-300 transition-colors duration-300">
              <div>
                <div className="w-11 h-11 rounded-full bg-amber-50 border border-amber-100 text-amber-700 flex items-center justify-center mb-5">
                  <HeartHandshake className="w-5 h-5" strokeWidth={1.75} />
                </div>
                <h3 className="fp-serif text-xl font-medium text-slate-900 mb-2.5 tracking-tight">
                  Individualized Coordination
                </h3>
                <p className="text-slate-500 text-[14px] leading-relaxed">
                  Individualized care closely coordinated with physicians,
                  families, and caregivers.
                </p>
              </div>
            </div>

            <div className="rounded-[22px] bg-white border border-amber-100 p-6 sm:p-7 flex flex-col justify-between hover:border-amber-300 transition-colors duration-300">
              <div>
                <div className="w-11 h-11 rounded-full bg-amber-50 border border-amber-100 text-amber-700 flex items-center justify-center mb-5">
                  <MessageCircle className="w-5 h-5" strokeWidth={1.75} />
                </div>
                <h3 className="fp-serif text-xl font-medium text-slate-900 mb-2.5 tracking-tight">
                  Responsive Communication
                </h3>
                <p className="text-slate-500 text-[14px] leading-relaxed">
                  Responsive communication and dedicated patient/caregiver
                  education every step of the way.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Focus & Final Call to Action Card */}
        <div className="rounded-[28px] bg-[#0F172A] text-white p-8 sm:p-12 relative overflow-hidden">
          <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-xl text-center lg:text-left">
              <span className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-[11px] font-bold tracking-widest uppercase bg-amber-400/20 text-amber-200 border border-yellow-400/30 mb-4">
                Our Core Mission
              </span>
              <h3 className="fp-serif text-2xl sm:text-3xl font-bold tracking-tight mb-3 text-white">
                A focus on recovery, safety, independence, and dignity.
              </h3>
              <p className="text-slate-300 text-[15px] leading-relaxed">
                Care that feels like home. Talk with our team about your needs,
                coverage, and next steps.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
              <a
                href="tel:9723251598"
                className="w-full sm:w-auto bg-yellow-400 text-slate-950 font-semibold px-7 py-4 rounded-full text-[14px] transition-colors inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                <Phone className="w-4 h-4" />
                Call 972-325-1598
              </a>
              <button
                onClick={() => alert("Opening free consultation request...")}
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-semibold px-7 py-4 rounded-full text-[14px] transition-colors inline-flex items-center justify-center gap-2 border border-white/20 backdrop-blur-sm cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                Request Free Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
