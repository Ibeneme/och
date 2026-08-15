import { Award, Phone, ArrowRight, Shield, Quote } from "lucide-react";

export default function LeadershipHero() {
  return (
    <section className="relative pt-16 pb-20 px-6 lg:px-12 max-w-7xl mx-auto overflow-hidden bg-[#faf8f2] text-slate-900">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Left Column */}
        <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-[2rem] border border-slate-100 space-y-7">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#07162C] text-[#D4AF37] text-xs font-semibold tracking-wider uppercase">
            <Award className="w-4 h-4" /> Founder & Clinical Leadership
          </div>

          <div className="space-y-3">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#07162C] leading-[1.1]">
              Angela Ananti,{" "}
              <span className="text-[#D4AF37] font-semibold">BSN, RN</span>
            </h1>
            <p className="text-xl text-slate-700 font-medium">
              Founder, Owner, Administrator, and Director of Nursing
            </p>
          </div>

          <p className="text-base text-slate-600 leading-relaxed max-w-2xl">
            Bringing more than two decades of dedicated nursing and healthcare
            leadership experience to families across the Dallas-Fort Worth
            Metroplex.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <a
              href="tel:9723251598"
              className="inline-flex items-center gap-2.5 bg-[#07162C] text-white hover:bg-[#0A1F3F] font-semibold px-6 py-3.5 rounded-xl transition-colors text-sm "
            >
              <Phone className="w-4 h-4 text-[#D4AF37]" />
              Call Our Team: 972-325-1598
            </a>
            <a
              href="/referrals"
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-[#07162C] border border-slate-200 font-medium px-6 py-3.5 rounded-xl transition-colors text-sm group"
            >
              Refer a Patient
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-5 space-y-5">
          {/* Quote */}
          <blockquote className="relative bg-white border border-slate-100 rounded-[1.75rem] px-6 py-6">
            <Quote className="absolute top-5 right-5 w-5 h-5 text-[#D4AF37]/35" />
            <p className="text-slate-700 leading-relaxed italic text-[15px] pr-7">
              “Home health is personal. When our team enters someone’s home, we
              are being trusted with their health, their dignity, and their
              peace of mind. I want every patient and family to feel respected,
              informed, and genuinely cared for.”
            </p>
            <footer className="mt-4 text-sm font-medium text-[#07162C]">
              — Angela Ananti, BSN, RN
              <span className="block text-xs font-normal text-slate-500 mt-1">
                Founder, Owner, Administrator, and Director of Nursing
              </span>
            </footer>
          </blockquote>

          {/* Profile Card */}
          <div className="bg-[#07162C] rounded-[2rem] p-8 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-56 h-56 bg-[#D4AF37]/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-[#D4AF37]/10 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 space-y-6">
              <div className="w-28 h-28 rounded-2xl bg-[#D4AF37] flex items-center justify-center mx-auto lg:mx-0 ">
                <span className="text-3xl font-bold text-[#07162C] tracking-tight">
                  AA
                </span>
              </div>

              <div className="text-center lg:text-left space-y-1">
                <div className="flex items-center justify-center lg:justify-start gap-2 text-[#D4AF37]">
                  <Award className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">
                    Clinical Expert
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white">
                  Angela Ananti, BSN, RN
                </h3>
                <p className="text-sm text-slate-300">
                  Founder & Director of Nursing
                </p>
              </div>
            </div>
          </div>

          {/* Serving Since Bar */}
          <div className="bg-white border border-slate-100 rounded-2xl px-5 py-4 flex items-center justify-between ">
            <span className="text-sm font-semibold text-[#07162C]">
              Serving Clients Since 2010
            </span>
            <Shield className="w-5 h-5 text-[#D4AF37]" />
          </div>
        </div>
      </div>
    </section>
  );
}
