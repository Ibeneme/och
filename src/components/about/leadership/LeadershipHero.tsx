import { Award, Phone, ArrowRight, Shield, Quote } from "lucide-react";

export default function LeadershipHero() {
  return (
    <section className="relative pt-16 pb-20 px-6 lg:px-12 mx-auto overflow-hidden bg-[#FBF8F2] text-[#3A4657] ohh-sans">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
        {/* Left – Identity + CTA */}
        <div className="lg:col-span-6 flex flex-col justify-between space-y-8">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3ECDC] text-[#0A2140] text-xs font-semibold tracking-wider uppercase">
              <Award className="w-4 h-4 text-[#C89B3C]" />
              Founder & Clinical Leadership
            </div>

            <div className="space-y-3">
              <h1 className="ohh-serif text-4xl sm:text-5xl font-semibold tracking-tight text-[#0A2140] leading-[1.1]">
                Angela Ananti, <span className="text-[#C89B3C]">BSN, RN</span>
              </h1>
              <p className="text-lg text-[#5B6B7C] font-semibold">
                Founder, Owner, Administrator, and Director of Nursing
              </p>
            </div>

            <p className="text-base text-[#5B6B7C] leading-relaxed max-w-xl">
              Bringing more than two decades of dedicated nursing and healthcare
              leadership experience to families across the Dallas-Fort Worth
              Metroplex.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="tel:9723251598"
              className="inline-flex items-center gap-2.5 bg-[#0A2140] text-[#E4B95A] hover:bg-[#123258] font-bold px-7 py-3.5 rounded-xl transition-all text-sm"
            >
              <Phone className="w-4 h-4" />
              Call Our Team: 972-325-1598
            </a>
            <a
              href="/referrals"
              className="inline-flex items-center gap-2 bg-[#F3ECDC] hover:bg-[#EADFC2] text-[#0A2140] font-semibold px-7 py-3.5 rounded-xl transition-all text-sm group"
            >
              Refer a Patient
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Right – Profile + Quote stack */}
        <div className="lg:col-span-6 flex flex-col gap-5">
          {/* Profile strip */}
          <div className="bg-[#0A2140] rounded-3xl p-6 sm:p-7 flex items-center gap-5 relative overflow-hidden">
            <div className="absolute -top-16 -right-16 w-44 h-44 bg-[#E4B95A]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 w-20 h-20 rounded-2xl bg-[#C89B3C] text-[#0A2140] flex items-center justify-center shrink-0">
              <span className="ohh-serif text-2xl font-bold tracking-tight">
                AA
              </span>
            </div>

            <div className="relative z-10 space-y-1 min-w-0">
              <div className="flex items-center gap-2 text-[#E4B95A]">
                <Award className="w-3.5 h-3.5" />
                <span className="text-xs font-bold uppercase tracking-wider">
                  Clinical Expert
                </span>
              </div>
              <h3 className="ohh-serif text-lg font-semibold text-white truncate">
                Angela Ananti, BSN, RN
              </h3>
              <p className="text-sm text-slate-300 font-medium">
                Founder & Director of Nursing
              </p>
            </div>
          </div>

          {/* Quote */}
          <blockquote className="relative bg-white border border-[#EFE8D8] rounded-3xl px-7 py-7 flex-1">
            <Quote className="absolute top-5 right-5 w-5 h-5 text-[#C89B3C]/35" />
            <p className="text-[#3A4657] leading-relaxed italic text-[15px] pr-6">
              “Home health is personal. When our team enters someone’s home, we
              are being trusted with their health, their dignity, and their
              peace of mind. I want every patient and family to feel respected,
              informed, and genuinely cared for.”
            </p>
            <footer className="mt-5 text-sm font-bold text-[#0A2140]">
              — Angela Ananti, BSN, RN
              <span className="block text-xs font-semibold text-[#8A7B5C] mt-1">
                Founder, Owner, Administrator, and Director of Nursing
              </span>
            </footer>
          </blockquote>

          {/* Serving bar */}
          <div className="bg-white border border-[#EFE8D8] rounded-2xl px-6 py-4 flex items-center justify-between">
            <span className="text-sm font-semibold text-[#0A2140]">
              Serving Clients Since 2010
            </span>
            <Shield className="w-5 h-5 text-[#C89B3C]" />
          </div>
        </div>
      </div>
    </section>
  );
}
