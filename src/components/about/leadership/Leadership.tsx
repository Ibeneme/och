import {
  Heart,
  Shield,
  Calendar,
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
                <span className="text-[#C89B3C] font-medium">
                  BSN, RN
                </span>
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
                className="group inline-flex items-center gap-2.5 bg-[#0A2140] hover:bg-[#123258] text-white font-semibold text-[14.5px] px-6.5 py-3.5 rounded-2xl transition-all hover:-translate-y-0.5"
              >
                <Phone size={16} className="text-[#E4B95A]" />
                Call our team: 972-325-1598
              </a>
              <a
                href="/referrals"
                className="group inline-flex items-center gap-2 bg-[#F3ECDC] hover:bg-[#EADFC2] text-[#0A2140] font-semibold text-[14.5px] px-6 py-3.5 rounded-2xl transition-colors"
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

            <div className="bg-white rounded-2xl px-6 py-5 flex items-center justify-between">
              <span className="text-[14.5px] font-semibold text-[#0A2140]">
                Serving clients since 2010
              </span>
              <Shield size={18} className="text-[#C89B3C]" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== Career, founding story & core values ===== */}
      <section className="py-8 px-6 lg:px-12 max-w-7xl mx-auto space-y-24">
        {/* Career + Founding */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-[#EFE8D8]">
            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80"
              alt="Nurse providing compassionate home care"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A2140]/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 text-[#0A2140] text-xs font-semibold">
                <Calendar className="w-3.5 h-3.5 text-[#C89B3C]" />
                Since 2003
              </span>
            </div>
          </div>

          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3ECDC] text-[#0A2140] text-xs font-semibold tracking-wider uppercase">
              <Award className="w-4 h-4 text-[#C89B3C]" /> Clinical journey
            </div>
            <h2 className="ohh-serif text-3xl sm:text-4xl font-semibold text-[#0A2140] leading-tight">
              Over two decades of nursing excellence
            </h2>
            <div className="space-y-4 text-[#5B6B7C] leading-relaxed text-base">
              <p>
                Angela Ananti began her professional nursing career in{" "}
                <strong className="text-[#0A2140] font-semibold">2003</strong>.
                Over the course of her distinguished career spanning{" "}
                <strong className="text-[#0A2140] font-semibold">
                  more than two decades
                </strong>
                , she has cultivated deep expertise in clinical care, patient
                advocacy, and healthcare administration.
              </p>
              <p>
                Before establishing her own agency, Angela served with
                distinction as a{" "}
                <strong className="text-[#0A2140] font-semibold">
                  Director of Nursing for multiple healthcare agencies
                </strong>
                , where she managed clinical operations, ensured regulatory
                compliance, and directed high standards of patient care.
              </p>
            </div>
          </div>
        </div>

        {/* Founding story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="space-y-6 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3ECDC] text-[#0A2140] text-xs font-semibold tracking-wider uppercase">
              <Shield className="w-4 h-4 text-[#C89B3C]" /> Legacy
            </div>
            <h2 className="ohh-serif text-3xl sm:text-4xl font-semibold text-[#0A2140] leading-tight">
              Founding JACOP Healthcare Services in 2010
            </h2>
            <div className="space-y-4 text-[#5B6B7C] leading-relaxed text-base">
              <p>
                Driven by a vision to deliver more personalized, compassionate
                care directly to individuals where they feel most comfortable,
                Angela founded{" "}
                <strong className="text-[#0A2140] font-semibold">
                  JACOP Healthcare Services, Inc. in 2010
                </strong>
                .
              </p>
              <p>
                Carrying forward this established legacy of trusted care,{" "}
                <strong className="text-[#0A2140] font-semibold">
                  One Community Home Health
                </strong>{" "}
                was established as its DBA in 2026. Under her leadership, the
                organization continues to provide exceptional skilled nursing,
                therapy, and specialized home health services across the
                Dallas-Fort Worth Metroplex.
              </p>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-[#EFE8D8] order-1 lg:order-2">
            <img
              src="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=900&q=80"
              alt="Compassionate home health care"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A2140]/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 text-[#0A2140] text-xs font-semibold">
                <Shield className="w-3.5 h-3.5 text-[#C89B3C]" />
                Est. 2010
              </span>
            </div>
          </div>
        </div>

        {/* Core values */}
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3ECDC] text-[#0A2140] text-xs font-semibold uppercase tracking-wider">
              <Heart className="w-3.5 h-3.5 text-[#C89B3C]" /> Core values
            </div>
            <h2 className="ohh-serif text-3xl sm:text-4xl font-semibold text-[#0A2140] tracking-tight">
              Leadership philosophy & core commitments
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <div className="bg-white rounded-3xl p-8 lg:p-9 space-y-5">
              <div className="w-12 h-12 rounded-2xl bg-[#F3ECDC] text-[#C89B3C] font-bold flex items-center justify-center text-sm">
                01
              </div>
              <h3 className="ohh-serif text-xl font-semibold text-[#0A2140]">
                Quality, dignity & independence
              </h3>
              <p className="text-[#5B6B7C] text-[15px] leading-relaxed">
                Angela's clinical philosophy centers on a deep commitment to
                preserving each patient's dignity, promoting independence, and
                ensuring uncompromising clinical quality in the home.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 lg:p-9 space-y-5">
              <div className="w-12 h-12 rounded-2xl bg-[#F3ECDC] text-[#C89B3C] font-bold flex items-center justify-center text-sm">
                02
              </div>
              <h3 className="ohh-serif text-xl font-semibold text-[#0A2140]">
                Patients, families & caregivers
              </h3>
              <p className="text-[#5B6B7C] text-[15px] leading-relaxed">
                Home health is profoundly personal. Angela is deeply committed
                to supporting patients, reassuring families, empowering
                caregivers, and uplifting every employee on the care team.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
