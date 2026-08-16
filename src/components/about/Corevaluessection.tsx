import {
  HeartHandshake,
  Award,
  UserCheck,
  ShieldCheck,
  Users,
  MapPinned,
} from "lucide-react";

function Eyebrow({ children }: any) {
  return (
    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3ECDC] text-[#0A2140] font-semibold text-xs tracking-wider uppercase">
      <span className="w-2 h-2 rounded-full bg-[#C89B3C]" />
      {children}
    </div>
  );
}

/* ---------------------------------------------------------------------- */
/*  Sticky index rail — replaces the plain vertical stack of sections     */
/*  with a numbered dossier-style nav that stays in view while reading.   */
/* ---------------------------------------------------------------------- */
const INDEX = [
  { n: "01", id: "legacy", label: "Story & Mission" },
  { n: "02", id: "values", label: "Core Values" },
  { n: "03", id: "quality", label: "Commitment to Quality" },
];

function IndexRail() {
  return (
    <div className="hidden lg:block sticky top-24 self-start">
      <div className="space-y-1">
        <p className="text-[11px] font-bold uppercase tracking-widest text-[#8A7B5C] mb-4">
          On this page
        </p>
        {INDEX.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="group flex items-baseline gap-3 py-2.5 border-t border-[#EFE8D8] first:border-t-0"
          >
            <span className="ohh-serif text-sm text-[#C89B3C] font-semibold">
              {item.n}
            </span>
            <span className="text-sm font-semibold text-[#3A4657] group-hover:text-[#0A2140] transition-colors leading-snug">
              {item.label}
            </span>
          </a>
        ))}
      </div>
      <div className="mt-8 pt-6 border-t border-[#EFE8D8] space-y-1">
        <p className="text-[11px] font-bold uppercase tracking-widest text-[#8A7B5C]">
          One Community
        </p>
        <p className="text-xs text-[#5B6B7C] leading-relaxed max-w-[180px]">
          Home health care across the Dallas–Fort Worth Metroplex.
        </p>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------------- */
/*  1. Legacy / Mission — kept as a 3-up timeline row                     */
/* ---------------------------------------------------------------------- */
function LegacyMissionSection() {
  const columns = [
    {
      badge: "2010",
      badgeTag: "(est.)",
      kicker: "foundation /",
      kickerRest: "jacop healthcare",
      panel: "dark",
      body: "One Community Home Health was established in 2026 as the DBA of JACOP Healthcare Services, Inc., a nurse-founded home health organization serving clients since 2010. The One Community name brings the established JACOP care legacy forward in a brand centered on belonging, dignity, independence, and compassionate care at home.",
      footer: "Serving clients since 2010",
      footerColor: "text-[#8A7B5C]",
    },
    {
      badge: "DFW",
      badgeTag: "(hub)",
      kicker: "operations /",
      kickerRest: "grand prairie base",
      panel: "gold",
      body: "From our Grand Prairie base, we deliver individualized care across the Dallas–Fort Worth Metroplex. Our team collaborates with patients, families, caregivers, physicians, hospitals, rehabilitation facilities, and community partners to support recovery, manage health needs, strengthen independence, and help people remain safely at home.",
      footer: "North Texas base",
      footerColor: "text-[#C89B3C]",
    },
  ];

  return (
    <section id="legacy" className="scroll-mt-24 ohh-sans text-[#3A4657]">
      <div className="mb-10 space-y-4">
        <Eyebrow>About our legacy</Eyebrow>
        <h2 className="ohh-serif max-w-3xl text-4xl md:text-5xl font-semibold text-[#0A2140] tracking-tight">
          Our Story &amp; Core Mission
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#EFE8D8] rounded-3xl overflow-hidden border border-[#EFE8D8]">
        {columns.map((col) => (
          <div key={col.badge} className="bg-white flex flex-col">
            <div
              className={
                col.panel === "dark"
                  ? "bg-[#0A2140] text-white px-8 pt-10 pb-8 relative"
                  : "bg-[#E4B95A] text-[#0A2140] px-8 pt-10 pb-8 relative"
              }
              style={{
                clipPath:
                  "polygon(0 0, 100% 0, 100% 100%, 36px 100%, 0 calc(100% - 36px))",
              }}
            >
              <div className="flex items-start justify-between">
                <span
                  className={`ohh-serif text-6xl md:text-7xl font-semibold tracking-tighter leading-none ${
                    col.panel === "dark" ? "text-[#E4B95A]" : "text-[#0A2140]"
                  }`}
                >
                  {col.badge}
                </span>
                <span
                  className={`text-xs uppercase mt-2 ${
                    col.panel === "dark"
                      ? "text-slate-300"
                      : "text-[#0A2140]/70"
                  }`}
                >
                  {col.badgeTag}
                </span>
              </div>
              <div
                className={`mt-8 flex items-baseline gap-1.5 text-xs uppercase tracking-wide ${
                  col.panel === "dark" ? "text-slate-300" : "text-[#0A2140]/80"
                }`}
              >
                <span
                  className={
                    col.panel === "dark" ? "text-[#E4B95A]" : "font-semibold"
                  }
                >
                  {col.kicker}
                </span>
                <span>{col.kickerRest}</span>
              </div>
            </div>
            <div className="px-8 py-8 flex-1 flex flex-col justify-between space-y-6">
              <p className="text-[#3A4657] text-sm md:text-base leading-relaxed">
                {col.body}
              </p>
              <div
                className={`pt-4 border-t border-[#F0EBDD] text-xs font-bold uppercase tracking-wider ${col.footerColor}`}
              >
                {col.footer}
              </div>
            </div>
          </div>
        ))}

        <div className="bg-white flex flex-col">
          <div
            className="bg-[#0A2140] text-white px-8 pt-10 pb-8 relative"
            style={{
              clipPath:
                "polygon(0 0, 100% 0, 100% 100%, 36px 100%, 0 calc(100% - 36px))",
            }}
          >
            <div className="flex items-start justify-between">
              <span className="ohh-serif text-3xl md:text-4xl font-semibold tracking-tight leading-tight">
                Mission
                <br />
                &amp; Vision
              </span>
              <span className="text-xs uppercase text-slate-300 mt-2">
                (why)
              </span>
            </div>
            <div className="mt-8 flex items-baseline gap-1.5 text-xs uppercase tracking-wide text-white">
              <span className="font-semibold text-[#E4B95A]">principles /</span>
              <span>clinical excellence</span>
            </div>
          </div>
          <div className="px-8 py-8 flex-1 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div>
                <h4 className="ohh-serif font-semibold text-[#0A2140] mb-1 text-sm uppercase tracking-wider">
                  Mission
                </h4>
                <p className="text-[#3A4657] text-xs md:text-sm leading-relaxed">
                  To provide trusted, high-quality home health services that
                  promote independence, dignity, and a better quality of life
                  for every individual and family we serve.
                </p>
              </div>
              <div>
                <h4 className="ohh-serif font-semibold text-[#0A2140] mb-1 text-sm uppercase tracking-wider">
                  Vision
                </h4>
                <p className="text-[#3A4657] text-xs md:text-sm leading-relaxed">
                  To be the trusted in-home care partner of choice across North
                  Texas, empowering patients to stay where they belong through
                  compassionate, professional, and reliable clinical excellence.
                </p>
              </div>
            </div>
            <div className="pt-4 border-t border-[#F0EBDD] text-xs font-bold uppercase tracking-wider text-[#0A2140]">
              Angela Ananti, BSN, RN — Founder &amp; Director of Nursing
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------------- */
/*  2. Core Values — now asymmetric: one featured tile + a 2x2 grid,      */
/*     instead of six identical cards in a uniform 3-col grid.            */
/* ---------------------------------------------------------------------- */
const FEATURED_VALUE = {
  tag: "(care)",
  label: "why we start here",
  title: "Compassion",
  description:
    "Treating every patient and family with genuine empathy, warmth, and kindness — the value every other one is built on.",
  icon: HeartHandshake,
};

const OTHER_VALUES = [
  {
    tag: "(standard)",
    label: "clinical rigor",
    title: "Clinical Excellence",
    description:
      "Upholding rigorous standards of professional nursing and therapy to support safe, effective recovery.",
    icon: Award,
    panel: "gold",
  },
  {
    tag: "(dignity)",
    label: "individual care",
    title: "Respect",
    description:
      "Honoring the individuality, preferences, and dignity of every person in our care.",
    icon: UserCheck,
    panel: "dark",
  },
  {
    tag: "(daily)",
    label: "you can count on us",
    title: "Reliability",
    description:
      "Providing dependable, responsive service that patients and referral partners can count on every day.",
    icon: ShieldCheck,
    panel: "dark",
  },
  {
    tag: "(team)",
    label: "coordinated care",
    title: "Collaboration",
    description:
      "Partnering closely with physicians, families, and caregivers to build coordinated, personalized plans of care.",
    icon: Users,
    panel: "gold",
  },
  {
    tag: "(local)",
    label: "dfw metroplex",
    title: "Community",
    description:
      "Serving our neighbors across the Dallas-Fort Worth Metroplex with deep dedication and local accountability.",
    icon: MapPinned,
    panel: "dark",
  },
];

function CoreValuesSection() {
  const FeaturedIcon = FEATURED_VALUE.icon;
  return (
    <section id="values" className="scroll-mt-24 ohh-sans">
      <div className="mb-10 max-w-2xl space-y-4">
        <Eyebrow>What we stand on</Eyebrow>
        <h2 className="ohh-serif text-4xl md:text-5xl font-semibold text-[#0A2140] tracking-tight">
          Our Core Values
        </h2>
        <p className="text-[#5B6B7C] text-base md:text-lg leading-relaxed">
          The principles that guide every interaction and plan of care.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
        {/* Featured value — tall column, gives Compassion room as the
            value everything else stands on */}
        <div className="lg:col-span-2 bg-[#0A2140] rounded-3xl p-8 md:p-10 relative overflow-hidden text-white flex flex-col justify-between min-h-[380px]">
          <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-[#E4B95A]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 space-y-6">
            <div className="flex items-start justify-between">
              <FeaturedIcon
                className="w-11 h-11 text-[#E4B95A]"
                strokeWidth={1.5}
              />
              <span className="text-xs uppercase text-slate-300 mt-1">
                {FEATURED_VALUE.tag}
              </span>
            </div>
            <div>
              <div className="ohh-serif text-4xl font-semibold tracking-tight leading-none">
                {FEATURED_VALUE.title}
              </div>
              <div className="mt-3 text-xs uppercase tracking-wide font-semibold text-[#E4B95A]">
                {FEATURED_VALUE.label}
              </div>
            </div>
          </div>
          <p className="relative z-10 text-slate-300 text-sm leading-relaxed pt-6 border-t border-white/10">
            {FEATURED_VALUE.description}
          </p>
        </div>

        {/* Remaining values — 2x2-ish grid alongside the featured tile */}
        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {OTHER_VALUES.map((value) => {
            const Icon = value.icon;
            const isDark = value.panel === "dark";
            return (
              <div
                key={value.title}
                className="bg-white rounded-3xl border border-[#EFE8D8] p-6 flex flex-col justify-between space-y-4"
              >
                <div className="flex items-start justify-between">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      isDark
                        ? "bg-[#0A2140] text-[#E4B95A]"
                        : "bg-[#F3ECDC] text-[#0A2140]"
                    }`}
                  >
                    <Icon size={18} strokeWidth={1.75} />
                  </div>
                  <span className="text-[10px] uppercase text-[#8A7B5C] mt-1">
                    {value.tag}
                  </span>
                </div>
                <div>
                  <h3 className="ohh-serif text-lg font-semibold text-[#0A2140]">
                    {value.title}
                  </h3>
                  <p className="text-[#5B6B7C] text-xs leading-relaxed mt-1.5">
                    {value.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------------- */
/*  3. Commitment to Quality                                              */
/* ---------------------------------------------------------------------- */
function CommitmentCareSection() {
  return (
    <section
      id="quality"
      className="scroll-mt-24 ohh-sans text-[#3A4657] space-y-16"
    >
      <div className="space-y-6">
        <Eyebrow>Commitment &amp; quality</Eyebrow>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <h2 className="ohh-serif text-4xl md:text-5xl font-semibold text-[#0A2140] tracking-tight leading-[1.1] max-w-2xl">
            Commitment to <span className="text-[#C89B3C]">Quality</span> &amp;
            Compassionate Care
          </h2>
          <p className="text-[#5B6B7C] text-sm md:text-base max-w-md leading-relaxed">
            Every visit reflects compassion, professional accountability, clear
            communication, and respect for the person receiving care.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-3xl p-8 border border-[#EFE8D8] flex flex-col justify-between space-y-8">
          <div className="space-y-4">
            <div className="w-10 h-10 rounded-2xl bg-[#FBF8F2] border border-[#EFE8D8] flex items-center justify-center text-[#0A2140]">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 10.5V11.25m-15 0V19.5"
                />
              </svg>
            </div>
            <h3 className="ohh-serif text-xl font-semibold text-[#0A2140]">
              Built on Trust &amp; Professional Standards
            </h3>
            <p className="text-[#5B6B7C] text-sm leading-relaxed">
              We believe home health care is built on trust. Our goal is to help
              each patient and family feel informed, supported, and confident in
              their plan of care.
            </p>
          </div>
          <div className="pt-4 border-t border-[#F0EBDD] text-xs text-[#8A7B5C] leading-relaxed">
            Services provided in accordance with applicable physician orders,
            plans of care, eligibility, and authorization requirements.
          </div>
        </div>

        <div className="bg-[#0A2140] rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between text-white">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#E4B95A]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E4B95A] text-[#0A2140] text-[10px] font-bold uppercase tracking-widest">
              Clinical Leadership
            </div>
            <div>
              <p className="text-xs font-semibold text-[#E4B95A]">
                Founder &amp; Administrator
              </p>
              <h3 className="ohh-serif text-2xl font-semibold mt-1 text-white">
                Angela Ananti, BSN, RN
              </h3>
            </div>
            <p className="text-slate-300 text-xs leading-relaxed pt-2">
              Beginning her nursing career in 2003, Angela brings over two
              decades of home-health leadership, ensuring elite standards for
              clinical accountability and patient dignity.
            </p>
          </div>
          <div className="pt-6 relative z-10">
            <span className="text-xs font-semibold text-[#E4B95A] uppercase tracking-wider">
              Director of Nursing
            </span>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-8 border border-[#EFE8D8] flex flex-col justify-between space-y-6">
          <div className="space-y-3">
            <h3 className="ohh-serif text-xl font-semibold text-[#0A2140]">
              Individualized Approach
            </h3>
            <p className="text-[#5B6B7C] text-sm leading-relaxed">
              Tailored clinical oversight designed to match unique patient
              requirements across our entire operating footprint.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 py-4 border-y border-[#F0EBDD]">
            <div>
              <p className="ohh-serif text-2xl font-bold text-[#0A2140]">
                20+ yrs
              </p>
              <p className="text-xs text-[#8A7B5C] font-semibold">Experience</p>
            </div>
            <div>
              <p className="ohh-serif text-2xl font-bold text-[#C89B3C]">11</p>
              <p className="text-xs text-[#8A7B5C] font-semibold">
                Counties Served
              </p>
            </div>
          </div>
          <p className="text-xs text-[#8A7B5C] italic">
            "Committed to excellence in every single home visit."
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-[#F0E9D9] text-center">
        <div>
          <p className="ohh-serif text-4xl md:text-5xl font-semibold text-[#0A2140]">
            2003
          </p>
          <p className="text-xs md:text-sm text-[#5B6B7C] mt-1 font-semibold">
            Nursing Career Origin
          </p>
        </div>
        <div>
          <p className="ohh-serif text-4xl md:text-5xl font-semibold text-[#0A2140]">
            2010
          </p>
          <p className="text-xs md:text-sm text-[#5B6B7C] mt-1 font-semibold">
            Agency Established
          </p>
        </div>
        <div>
          <p className="ohh-serif text-4xl md:text-5xl font-semibold text-[#C89B3C]">
            11
          </p>
          <p className="text-xs md:text-sm text-[#5B6B7C] mt-1 font-semibold">
            DFW Counties Covered
          </p>
        </div>
        <div>
          <p className="ohh-serif text-4xl md:text-5xl font-semibold text-[#0A2140]">
            100%
          </p>
          <p className="text-xs md:text-sm text-[#5B6B7C] mt-1 font-semibold">
            Patient Focused
          </p>
        </div>
      </div>

      <div className="bg-white rounded-3xl p-8 md:p-12 border border-[#EFE8D8] space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <h3 className="ohh-serif text-3xl font-semibold text-[#0A2140] tracking-tight">
              Our Service Footprint
            </h3>
            <p className="text-[#5B6B7C] text-sm leading-relaxed">
              Proudly serving patients and families throughout the Dallas-Fort
              Worth Metroplex, including communities across Collin, Dallas,
              Denton, Ellis, Hunt, Johnson, Kaufman, Parker, Rockwall, Tarrant,
              and Wise counties.
            </p>
          </div>
          <div className="text-right hidden md:block">
            <span className="inline-block text-xs font-bold uppercase tracking-wider bg-[#0A2140] text-[#E4B95A] px-4 py-2 rounded-xl">
              DFW Metroplex Area
            </span>
          </div>
        </div>

        <div className="w-full h-72 md:h-96 rounded-2xl overflow-hidden border border-[#EFE8D8] relative">
          <iframe
            title="Dallas-Fort Worth Metroplex Service Area"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-97.70%2C32.40%2C-96.20%2C33.50&layer=mapnik&marker=32.7767%2C-96.7970"
            className="w-full h-full"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------------- */
/*  Page — sticky index rail + content column, instead of a plain stack   */
/* ---------------------------------------------------------------------- */
export default function NewAbout() {
  return (
    <main className="bg-[#FBF8F2] ohh-sans py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-12 lg:gap-16">
        <IndexRail />
        <div className="space-y-24 min-w-0">
          <LegacyMissionSection />
          <CoreValuesSection />
          <CommitmentCareSection />
        </div>
      </div>
    </main>
  );
}
