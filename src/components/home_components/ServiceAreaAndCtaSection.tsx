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
    <section className="relative bg-[#07162C] text-slate-100 py-20 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden">
      {/* subtle background texture — a quiet nod to a pulse/vitals line, not literal */}
      <svg
        className="pointer-events-none absolute inset-x-0 top-0 w-full h-40 opacity-[0.07]"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,60 L280,60 L310,20 L340,100 L370,60 L1200,60"
          fill="none"
          stroke="#F5B942"
          strokeWidth="2"
        />
      </svg>

      <div className="max-w-6xl mx-auto space-y-14 relative z-10">
        {/* Eyebrow + Heading */}

        {/* <div className="max-w-7xl mx-auto pt-4 pb-10 overflow-hidden">
          <h2 className="ohh-serif text-[13vw] lg:text-[11vw] font-bold tracking-tighter leading-none text-white/35 select-none whitespace-nowrap text-right">
            Contact Us
          </h2>
        </div> */}

        <div className="space-y-5 max-w-3xl">
          <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-[0.2em]">
            <span className="h-px w-8 bg-amber-400/60" />
            One Community Home Health
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold  text-white leading-[1.05]">
            Reach a real person,
            <br />
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            Our intake team answers referrals, scheduling questions, and general
            inquiries directly — every call is picked up by staff who know the
            DFW service area.
          </p>
        </div>

        {/* Primary contact rail — three real, distinct paths in, not decoration */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <a
            href="tel:9723251598"
            className="group flex flex-col justify-between p-6 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-amber-400/60 hover:bg-white/[0.06] transition-colors"
          >
            <Phone className="w-5 h-5 text-amber-400 mb-6" />
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                Call intake
              </div>
              <div className="text-xl font-bold text-white mt-1 group-hover:text-amber-400 transition-colors">
                972-325-1598
              </div>
            </div>
          </a>

          <div className="flex flex-col justify-between p-6 rounded-2xl bg-white/[0.04] border border-white/10">
            <Printer className="w-5 h-5 text-amber-400 mb-6" />
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                Fax a referral
              </div>
              <div className="text-xl font-bold text-white mt-1">
                972-674-2923
              </div>
            </div>
          </div>

          <a
            href="mailto:info@onechh.com"
            className="group flex flex-col justify-between p-6 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-amber-400/60 hover:bg-white/[0.06] transition-colors"
          >
            <Mail className="w-5 h-5 text-amber-400 mb-6" />
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                Email us
              </div>
              <div className="text-xl font-bold text-white mt-1 group-hover:text-amber-400 transition-colors truncate">
                info@onechh.com
              </div>
            </div>
          </a>
        </div>

        {/* Office details + Careers */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 rounded-2xl bg-white/[0.03] border border-white/10 p-8 sm:p-10 space-y-8">
            <div className="flex items-start justify-between gap-4 pb-6 border-b border-white/10">
              <div>
                <h2 className="text-xl font-bold text-white">
                  Office &amp; Administration
                </h2>
                <p className="text-sm text-slate-400 mt-1">
                  A DBA of JACOP Healthcare Services, Inc.
                </p>
              </div>
              <Building2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-1" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <MapPin className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-semibold text-slate-200">
                    Office location
                  </h3>
                  <a
                    href="https://maps.google.com/?q=3560+Quannah+Drive,+Grand+Prairie,+TX+75052"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-slate-400 mt-1 leading-relaxed block hover:text-amber-400 transition-colors"
                  >
                    3560 Quannah Drive
                    <br />
                    Grand Prairie, TX 75052
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-semibold text-slate-200">
                    Administrative hours
                  </h3>
                  <p className="text-sm text-slate-400 mt-1 leading-relaxed">
                    Mon–Fri, 9:00 AM – 5:00 PM
                  </p>
                  <p className="text-xs text-amber-400/90 font-bold mt-1">
                    Office visits by appointment only
                  </p>
                </div>
              </div>
            </div>

            {/* Service area — real content instead of a vague claim */}
            <div className="pt-6 border-t border-white/10">
              <h3 className="text-sm font-semibold text-slate-200 mb-3">
                Communities we serve
              </h3>
              <div className="flex flex-wrap gap-2">
                {SERVICE_AREAS.map((city) => (
                  <span
                    key={city}
                    className="text-xs font-bold text-slate-300 bg-white/[0.05] border border-white/10 rounded-full px-3 py-1.5"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-8 flex flex-col justify-between space-y-6">
            <div>
              <UserCheck className="w-5 h-5 text-amber-400 mb-6" />
              <h3 className="text-xl font-bold text-white">
                Join our care team
              </h3>
              <p className="text-slate-400 text-sm mt-3 leading-relaxed">
                Licensed CNAs, nurses, and therapists are invited to join our
                rolling talent network for home health placements across the
                metroplex.
              </p>
            </div>

            <a
              href="#careers"
              className="w-full py-3.5 px-5 rounded-xl bg-white/[0.06] hover:bg-amber-400 hover:text-slate-950 text-white text-sm font-semibold flex items-center justify-between transition-colors border border-white/10 group"
            >
              <span>Apply as a CNA</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Referral CTA */}
        <div className="rounded-2xl bg-amber-400 text-slate-950 p-8 sm:p-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="space-y-4 max-w-xl">
            <Stethoscope className="w-6 h-6" />
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Referring a patient?
            </h3>
            <p className="text-slate-900/80 text-base leading-relaxed">
              Physicians and hospital case managers can submit referrals by
              phone or fax — our team confirms receipt within one business day.
            </p>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-900/70">
              <ShieldCheck className="w-4 h-4" />
              HIPAA-compliant intake
            </div>
          </div>

          <a
            href="tel:9723251598"
            className="w-full lg:w-auto flex-shrink-0 py-4 px-8 rounded-xl bg-[#07162C] text-white font-bold flex items-center justify-center gap-2 hover:bg-black transition-colors group"
          >
            <span>Refer a patient — 972-325-1598</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
