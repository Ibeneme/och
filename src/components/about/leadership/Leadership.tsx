import {
  Heart,
  Shield,
  Award,
  Phone,
  ArrowRight,
} from "lucide-react";

// Small drawn "pulse" accent line — reuses the same signature motif as the
// navbar's EKG line, just sized for this card.
const PulseLine = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 400 28"
    width="180"
    height="16"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M0 14 H130 L145 3 L160 25 L175 14 H400"
      fill="none"
      stroke="#C89B3C"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="ohh-pulse-path"
    />
  </svg>
);

/* ---------------------------------------------------------------------- */
/*  Sticky index rail — same pattern used on the About page, so the two   */
/*  pages feel like one system rather than two different templates.       */
/* ---------------------------------------------------------------------- */
const INDEX = [
  { n: "01", id: "journey", label: "Clinical Journey" },
  { n: "02", id: "philosophy", label: "Leadership Philosophy" },
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
      <div className="mt-8 pt-6 border-t border-[#EFE8D8] space-y-3">
        <p className="text-[11px] font-bold uppercase tracking-widest text-[#8A7B5C]">
          Reach the team
        </p>
        <a
          href="tel:9723251598"
          className="flex items-center gap-1.5 text-xs font-semibold text-[#0A2140] hover:text-[#C89B3C] transition-colors"
        >
          <Phone size={12} className="text-[#C89B3C]" />
          (972) 325-1598
        </a>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------------- */
/*  Journey — three milestone panels replace the two alternating          */
/*  image/text rows, and reuse the notched-panel motif from the About     */
/*  page's Legacy section so the two pages read as one brand system.      */
/* ---------------------------------------------------------------------- */
const MILESTONES = [
  {
    year: "2003",
    tag: "(begin)",
    kicker: "career /",
    kickerRest: "nursing begins",
    panel: "dark",
    body: "Angela began her professional nursing career, cultivating deep expertise in clinical care, patient advocacy, and healthcare administration over more than two decades.",
    footer: "Director of Nursing, multiple agencies",
  },
  {
    year: "2010",
    tag: "(found)",
    kicker: "founding /",
    kickerRest: "jacop healthcare",
    panel: "gold",
    body: "Driven by a vision for more personalized, compassionate care delivered where people feel most comfortable, Angela founded JACOP Healthcare Services, Inc.",
    footer: "Founder & Administrator",
  },
  {
    year: "2026",
    tag: "(today)",
    kicker: "evolution /",
    kickerRest: "one community",
    panel: "dark",
    body: "Carrying the JACOP legacy forward, One Community Home Health was established as its DBA — continuing exceptional skilled nursing and therapy across the DFW Metroplex.",
    footer: "Director of Nursing, present day",
  },
];

function JourneySection() {
  return (
    <section id="journey" className="scroll-mt-24 space-y-10">
      <div className="max-w-2xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3ECDC] text-[#0A2140] text-xs font-semibold tracking-wider uppercase">
          <Award className="w-4 h-4 text-[#C89B3C]" /> Clinical journey
        </div>
        <h2 className="ohh-serif text-3xl sm:text-4xl font-semibold text-[#0A2140] leading-tight tracking-tight">
          Over two decades of nursing excellence
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#EFE8D8] rounded-3xl overflow-hidden border border-[#EFE8D8]">
        {MILESTONES.map((m) => (
          <div key={m.year} className="bg-white flex flex-col">
            <div
              className={
                m.panel === "dark"
                  ? "bg-[#0A2140] text-white px-7 pt-9 pb-7 relative"
                  : "bg-[#E4B95A] text-[#0A2140] px-7 pt-9 pb-7 relative"
              }
              style={{
                clipPath:
                  "polygon(0 0, 100% 0, 100% 100%, 32px 100%, 0 calc(100% - 32px))",
              }}
            >
              <div className="flex items-start justify-between">
                <span
                  className={`ohh-serif text-5xl md:text-6xl font-semibold tracking-tighter leading-none ${
                    m.panel === "dark" ? "text-[#E4B95A]" : "text-[#0A2140]"
                  }`}
                >
                  {m.year}
                </span>
                <span
                  className={`text-xs uppercase mt-2 ${
                    m.panel === "dark" ? "text-slate-300" : "text-[#0A2140]/70"
                  }`}
                >
                  {m.tag}
                </span>
              </div>
              <div
                className={`mt-6 flex items-baseline gap-1.5 text-xs uppercase tracking-wide ${
                  m.panel === "dark" ? "text-slate-300" : "text-[#0A2140]/80"
                }`}
              >
                <span
                  className={
                    m.panel === "dark" ? "text-[#E4B95A]" : "font-semibold"
                  }
                >
                  {m.kicker}
                </span>
                <span>{m.kickerRest}</span>
              </div>
            </div>
            <div className="px-7 py-7 flex-1 flex flex-col justify-between space-y-5">
              <p className="text-[#3A4657] text-sm leading-relaxed">{m.body}</p>
              <div className="pt-3 border-t border-[#F0EBDD] text-[11px] font-bold uppercase tracking-wider text-[#8A7B5C]">
                {m.footer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------------- */
/*  Leadership philosophy — asymmetric: one featured statement panel +    */
/*  one supporting card, instead of two identical numbered boxes.         */
/* ---------------------------------------------------------------------- */
function PhilosophySection() {
  return (
    <section id="philosophy" className="scroll-mt-24 space-y-10">
      <div className="max-w-2xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3ECDC] text-[#0A2140] text-xs font-semibold uppercase tracking-wider">
          <Heart className="w-3.5 h-3.5 text-[#C89B3C]" /> Core values
        </div>
        <h2 className="ohh-serif text-3xl sm:text-4xl font-semibold text-[#0A2140] tracking-tight">
          Leadership philosophy &amp; core commitments
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Featured statement — the philosophy everything else follows from */}
        <div className="lg:col-span-3 bg-[#0A2140] rounded-3xl p-9 lg:p-11 relative overflow-hidden text-white flex flex-col justify-between min-h-[280px]">
          <div className="absolute -top-16 -right-16 w-56 h-56 bg-[#E4B95A]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 space-y-4">
            <div className="w-12 h-12 rounded-full bg-white/10 text-[#E4B95A] font-bold flex items-center justify-center text-sm">
              01
            </div>
            <h3 className="ohh-serif text-2xl lg:text-3xl font-semibold leading-snug">
              Quality, dignity &amp; independence
            </h3>
          </div>
          <p className="relative z-10 text-slate-300 text-[15px] leading-relaxed pt-6 border-t border-white/10 mt-6">
            Angela&rsquo;s clinical philosophy centers on a deep commitment to
            preserving each patient&rsquo;s dignity, promoting independence, and
            ensuring uncompromising clinical quality in the home.
          </p>
        </div>

        {/* Supporting card */}
        <div className="lg:col-span-2 bg-white rounded-3xl p-9 border border-[#EFE8D8] flex flex-col justify-between space-y-5">
          <div className="w-12 h-12 rounded-full bg-[#F3ECDC] text-[#C89B3C] font-bold flex items-center justify-center text-sm">
            02
          </div>
          <div className="space-y-3">
            <h3 className="ohh-serif text-xl font-semibold text-[#0A2140]">
              Patients, families &amp; caregivers
            </h3>
            <p className="text-[#5B6B7C] text-[15px] leading-relaxed">
              Home health is profoundly personal. Angela is deeply committed to
              supporting patients, reassuring families, empowering caregivers,
              and uplifting every employee on the care team.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------------- */
/*  Page                                                                  */
/* ---------------------------------------------------------------------- */
export default function LeadershipPage() {
  return (
    <div className="min-h-screen bg-[#FBF8F2] text-[#3A4657] selection:bg-[#E4B95A] selection:text-[#0A2140] ohh-sans antialiased">
      {/* ===== Hero: identity card + bento column ===== */}
      <section className="relative py-16 lg:py-20 px-6 lg:px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.4fr_1fr] gap-7 items-stretch">
          {/* Identity card */}
          <div className="bg-white rounded-[2rem] p-9 sm:p-11 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-[#F3ECDC] text-[#0A2140] text-xs font-bold tracking-wider uppercase">
              <Award size={14} className="text-[#C89B3C]" />
              Founder & Clinical Leadership
            </div>

            <div>
              <h1 className="ohh-serif font-semibold text-[clamp(34px,4vw,50px)] leading-[1.08] tracking-tight text-[#0A2140]">
                Angela Ananti,{" "}
                <span className="text-[#C89B3C] font-medium">BSN, RN</span>
              </h1>
              <p className="mt-3 text-lg font-semibold text-[#5B6B7C]">
                Founder, Owner, Administrator, and Director of Nursing
              </p>
            </div>

            <PulseLine />

            <p className="text-[16.5px] leading-relaxed text-[#5B6B7C] max-w-xl">
              Bringing more than two decades of dedicated nursing and healthcare
              leadership experience to families across the Dallas-Fort Worth
              Metroplex.
            </p>

            <div className="flex flex-wrap gap-3.5 mt-1">
              <a
                href="tel:9723251598"
                className="group inline-flex items-center gap-2.5 bg-[#0A2140] hover:bg-[#123258] text-white font-semibold text-[14.5px] px-6.5 py-3.5 rounded-full transition-all hover:-translate-y-0.5"
              >
                <Phone size={16} className="text-[#E4B95A]" />
                Call our team: 972-325-1598
              </a>
              <a
                href="/referrals"
                className="group inline-flex items-center gap-2 bg-[#F3ECDC] hover:bg-[#EADFC2] text-[#0A2140] font-semibold text-[14.5px] px-6 py-3.5 rounded-full transition-colors"
              >
                Refer a patient
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>

          {/* Bento column */}
          <div className="flex flex-col gap-5">
            <div className="relative flex-1 bg-[#0A2140] rounded-[1.75rem] p-8 overflow-hidden flex flex-col items-center justify-center text-center">
              {/* faint DFW skyline watermark, grounding the metroplex mention */}
              <svg
                width="100%"
                height="64"
                viewBox="0 0 300 64"
                preserveAspectRatio="none"
                className="absolute bottom-0 left-0 opacity-[0.12]"
                aria-hidden="true"
              >
                {[
                  [0, 30, 18, 34],
                  [22, 18, 14, 46],
                  [40, 36, 20, 28],
                  [64, 10, 12, 54],
                  [80, 26, 16, 38],
                  [100, 4, 10, 60],
                  [114, 32, 18, 32],
                  [140, 16, 14, 48],
                  [158, 34, 20, 30],
                  [182, 8, 12, 56],
                  [198, 28, 16, 36],
                  [220, 20, 14, 44],
                  [238, 38, 20, 26],
                  [262, 14, 12, 50],
                  [278, 30, 18, 34],
                ].map(([x, y, w, h]) => (
                  <rect key={x} x={x} y={y} width={w} height={h} fill="#fff" />
                ))}
              </svg>

              {/* nursing-pin badge */}
              <div className="relative w-[84px] h-[84px] mb-4">
                <svg viewBox="0 0 100 100" width="84" height="84">
                  {Array.from({ length: 16 }).map((_, i) => {
                    const angle = (i / 16) * Math.PI * 2;
                    const x1 = 50 + Math.cos(angle) * 46;
                    const y1 = 50 + Math.sin(angle) * 46;
                    const x2 = 50 + Math.cos(angle) * 40;
                    const y2 = 50 + Math.sin(angle) * 40;
                    return (
                      <line
                        key={i}
                        x1={x1}
                        y1={y1}
                        x2={x2}
                        y2={y2}
                        stroke="#E4B95A"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    );
                  })}
                  <circle
                    cx="50"
                    cy="50"
                    r="34"
                    fill="#123258"
                    stroke="#E4B95A"
                    strokeWidth="2"
                  />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center ohh-serif text-white text-[22px] font-semibold">
                  AA
                </span>
              </div>

              <div className="inline-flex items-center gap-1.5 text-[#E4B95A] text-xs font-bold uppercase tracking-wider mb-1.5">
                <Award size={13} />
                Clinical expert
              </div>
              <h3 className="ohh-serif text-[19px] font-semibold text-white">
                Angela Ananti, BSN, RN
              </h3>
              <p className="mt-0.5 text-[13px] text-white/70">
                Founder & Director of Nursing
              </p>
            </div>

            <div className="bg-white rounded-full px-6 py-5 flex items-center justify-between">
              <span className="text-[14.5px] font-semibold text-[#0A2140]">
                Serving clients since 2010
              </span>
              <Shield size={18} className="text-[#C89B3C]" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== Journey + Philosophy, behind a sticky index rail ===== */}
      <section className="py-8 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-12 lg:gap-16">
          <IndexRail />
          <div className="space-y-24 min-w-0">
            <JourneySection />
            <PhilosophySection />
          </div>
        </div>
      </section>
    </div>
  );
}
