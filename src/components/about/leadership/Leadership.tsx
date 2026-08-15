import { Heart, Shield, Calendar, Award } from "lucide-react";

export default function LeadershipPage() {
  return (
    <div className="min-h-screen bg-[#faf8f2] text-slate-900 selection:bg-[#D4AF37] selection:text-[#07162C] font-sans antialiased">
      <section className="py-20 px-6 lg:px-12 max-w-7xl mx-auto space-y-24">
        {/* ===== Career + Founding (Image + Text Layout) ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Image side */}
          <div className="relative rounded-[2rem] overflow-hidden aspect-[4/3] bg-slate-200">
            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80"
              alt="Nurse providing compassionate home care"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07162C]/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 text-[#07162C] text-xs font-semibold">
                <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                Since 2003
              </span>
            </div>
          </div>

          {/* Content side */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#07162C] text-[#D4AF37] text-xs font-semibold tracking-wider uppercase">
              <Award className="w-4 h-4" /> Clinical Journey
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#07162C] leading-tight">
              Over Two Decades of Nursing Excellence
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed text-base">
              <p>
                Angela Ananti began her professional nursing career in{" "}
                <strong className="text-[#07162C] font-semibold">2003</strong>.
                Over the course of her distinguished career spanning{" "}
                <strong className="text-[#07162C] font-semibold">
                  more than two decades
                </strong>
                , she has cultivated deep expertise in clinical care, patient
                advocacy, and healthcare administration.
              </p>
              <p>
                Before establishing her own agency, Angela served with
                distinction as a{" "}
                <strong className="text-[#07162C] font-semibold">
                  Director of Nursing for multiple healthcare agencies
                </strong>
                , where she managed clinical operations, ensured regulatory
                compliance, and directed high standards of patient care.
              </p>
            </div>
          </div>
        </div>

        {/* ===== Founding Story (Reversed Layout) ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Content side (comes first on mobile) */}
          <div className="space-y-6 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#07162C] text-[#D4AF37] text-xs font-semibold tracking-wider uppercase">
              <Shield className="w-4 h-4" /> Legacy
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#07162C] leading-tight">
              Founding JACOP Healthcare Services in 2010
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed text-base">
              <p>
                Driven by a vision to deliver more personalized, compassionate
                care directly to individuals where they feel most comfortable,
                Angela founded{" "}
                <strong className="text-[#07162C] font-semibold">
                  JACOP Healthcare Services, Inc. in 2010
                </strong>
                .
              </p>
              <p>
                Carrying forward this established legacy of trusted care,{" "}
                <strong className="text-[#07162C] font-semibold">
                  One Community Home Health
                </strong>{" "}
                was established as its DBA in 2026. Under her leadership, the
                organization continues to provide exceptional skilled nursing,
                therapy, and specialized home health services across the
                Dallas-Fort Worth Metroplex.
              </p>
            </div>
          </div>

          {/* Image side */}
          <div className="relative rounded-[2rem] overflow-hidden aspect-[4/3] bg-slate-200 order-1 lg:order-2">
            <img
              src="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=900&q=80"
              alt="Compassionate home health care"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07162C]/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 text-[#07162C] text-xs font-semibold">
                <Shield className="w-3.5 h-3.5 text-[#D4AF37]" />
                Est. 2010
              </span>
            </div>
          </div>
        </div>

        {/* ===== Core Values ===== */}
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#07162C] text-[#D4AF37] text-xs font-semibold uppercase tracking-wider">
              <Heart className="w-3.5 h-3.5" /> Core Values
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#07162C] tracking-tight">
              Leadership Philosophy & Core Commitments
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Value 01 */}
            <div className="bg-white border border-slate-100 rounded-[2rem] p-8 lg:p-9 space-y-5  transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/10 text-[#D4AF37] font-bold flex items-center justify-center text-sm border border-[#D4AF37]/25">
                01
              </div>
              <h3 className="text-xl font-bold text-[#07162C]">
                Quality, Dignity & Independence
              </h3>
              <p className="text-slate-600 text-[15px] leading-relaxed">
                Angela’s clinical philosophy centers on a deep commitment to
                preserving each patient’s dignity, promoting independence, and
                ensuring uncompromising clinical quality in the home.
              </p>
            </div>

            {/* Value 02 */}
            <div className="bg-white border border-slate-100 rounded-[2rem] p-8 lg:p-9 space-y-5  transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/10 text-[#D4AF37] font-bold flex items-center justify-center text-sm border border-[#D4AF37]/25">
                02
              </div>
              <h3 className="text-xl font-bold text-[#07162C]">
                Patients, Families & Caregivers
              </h3>
              <p className="text-slate-600 text-[15px] leading-relaxed">
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
