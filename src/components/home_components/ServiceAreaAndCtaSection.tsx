import {
  MapPin,
  Phone,
  Printer,
  Mail,
  Clock,
  Building2,
  UserCheck,
  ArrowRight,
  Stethoscope,
  ShieldCheck,
} from "lucide-react";

const SERVICE_AREAS = [
  "Grand Prairie",
  "Arlington",
  "Fort Worth",
  "Irving",
  "Dallas",
  "Mansfield",
  "DeSoto",
  "Duncanville",
];

export default function OneCommunityContact() {
  return (
    <section className="relative bg-[#0F172A] text-slate-100 py-20 lg:py-28 px-4 sm:px-6 lg:px-8  overflow-hidden">
      {/* Soft gold vignette */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(250,204,21,0.08), transparent 60%)",
        }}
      />

      {/* Subtle pulse line accent */}
      <svg
        className="pointer-events-none absolute inset-x-0 top-0 w-full h-40 opacity-[0.08]"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,60 L280,60 L310,20 L340,100 L370,60 L1200,60"
          fill="none"
          stroke="#FACC15"
          strokeWidth="2"
        />
      </svg>

      <div className="max-w-6xl mx-auto space-y-16 relative z-10">
        {/* Heading */}
        <div className="space-y-5 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-yellow-400/10 text-yellow-400 text-xs font-black uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
            One Community Home Health
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight">
            Reach a real person.
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed font-medium max-w-2xl">
            Our intake team answers referrals, scheduling questions, and general
            inquiries directly — every call is picked up by staff who know the
            DFW service area.
          </p>
        </div>

        {/* Primary contact rail */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <a
            href="tel:9723251598"
            className="group flex flex-col justify-between p-7 rounded-3xl bg-white/[0.04] hover:bg-white/[0.07] transition-all"
          >
            <div className="w-11 h-11 rounded-2xl bg-yellow-400/15 text-yellow-400 flex items-center justify-center mb-8">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                Call intake
              </div>
              <div className="text-xl font-black text-white group-hover:text-yellow-400 transition-colors">
                972-325-1598
              </div>
            </div>
          </a>

          <div className="flex flex-col justify-between p-7 rounded-3xl bg-white/[0.04]">
            <div className="w-11 h-11 rounded-2xl bg-yellow-400/15 text-yellow-400 flex items-center justify-center mb-8">
              <Printer className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                Fax a referral
              </div>
              <div className="text-xl font-black text-white">972-674-2923</div>
            </div>
          </div>

          <a
            href="mailto:info@onechh.com"
            className="group flex flex-col justify-between p-7 rounded-3xl bg-white/[0.04] hover:bg-white/[0.07] transition-all"
          >
            <div className="w-11 h-11 rounded-2xl bg-yellow-400/15 text-yellow-400 flex items-center justify-center mb-8">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                Email us
              </div>
              <div className="text-xl font-black text-white group-hover:text-yellow-400 transition-colors truncate">
                info@onechh.com
              </div>
            </div>
          </a>
        </div>

        {/* Office details + Careers */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div className="lg:col-span-2 rounded-3xl bg-white/[0.04] p-8 sm:p-10 space-y-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-xl font-black text-white tracking-tight">
                  Office &amp; Administration
                </h2>
                <p className="text-sm text-slate-400 mt-1.5 font-medium">
                  A DBA of JACOP Healthcare Services, Inc.
                </p>
              </div>
              <div className="w-11 h-11 rounded-2xl bg-yellow-400/15 text-yellow-400 flex items-center justify-center shrink-0">
                <Building2 className="w-5 h-5" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-yellow-400/10 text-yellow-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-200">
                    Office location
                  </h3>
                  <a
                    href="https://maps.google.com/?q=3560+Quannah+Drive,+Grand+Prairie,+TX+75052"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-slate-400 mt-1.5 leading-relaxed block hover:text-yellow-400 transition-colors font-medium"
                  >
                    3560 Quannah Drive
                    <br />
                    Grand Prairie, TX 75052
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-yellow-400/10 text-yellow-400 flex items-center justify-center shrink-0">
                  <Clock className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-200">
                    Administrative hours
                  </h3>
                  <p className="text-sm text-slate-400 mt-1.5 leading-relaxed font-medium">
                    Mon–Fri, 9:00 AM – 5:00 PM
                  </p>
                  <p className="text-xs text-yellow-400 font-bold mt-1.5">
                    Office visits by appointment only
                  </p>
                </div>
              </div>
            </div>

            {/* Service areas */}
            <div className="pt-2">
              <h3 className="text-sm font-bold text-slate-200 mb-4">
                Communities we serve
              </h3>
              <div className="flex flex-wrap gap-2">
                {SERVICE_AREAS.map((city) => (
                  <span
                    key={city}
                    className="text-xs font-bold text-slate-300 bg-white/[0.06] rounded-full px-3.5 py-1.5"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Careers card */}
          <div className="rounded-3xl bg-white/[0.04] p-8 flex flex-col justify-between space-y-8">
            <div>
              <div className="w-11 h-11 rounded-2xl bg-yellow-400/15 text-yellow-400 flex items-center justify-center mb-6">
                <UserCheck className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-black text-white tracking-tight">
                Join our care team
              </h3>
              <p className="text-slate-400 text-sm mt-3 leading-relaxed font-medium">
                Licensed CNAs, nurses, and therapists are invited to join our
                rolling talent network for home health placements across the
                metroplex.
              </p>
            </div>

            <a
              href="/careers"
              className="w-full py-4 px-5 rounded-full bg-yellow-400 hover:bg-yellow-300 text-[#0F172A] text-sm font-extrabold flex items-center justify-between transition-all group"
            >
              <span>Apply as a CNA</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Referral CTA */}
        <div className="rounded-3xl bg-yellow-400 text-[#0F172A] p-8 sm:p-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="space-y-4 max-w-xl">
            <div className="w-12 h-12 rounded-2xl bg-[#0F172A]/10 flex items-center justify-center">
              <Stethoscope className="w-6 h-6" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
              Referring a patient?
            </h3>
            <p className="text-[#0F172A]/80 text-base leading-relaxed font-medium">
              Physicians and hospital case managers can submit referrals by
              phone or fax — our team confirms receipt within one business day.
            </p>
            <div className="flex items-center gap-2 text-xs font-bold text-[#0F172A]/70">
              <ShieldCheck className="w-4 h-4" />
              HIPAA-compliant intake
            </div>
          </div>

          <a
            href="tel:9723251598"
            className="w-full lg:w-auto flex-shrink-0 py-4 px-8 rounded-full bg-[#0F172A] text-white font-extrabold flex items-center justify-center gap-2 hover:bg-black transition-colors group"
          >
            <span>Refer a patient — 972-325-1598</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
