export default function LegacyMissionSection() {
  return (
    <section className="py-20 px-6 bg-[#fff] min-h-screen flex items-center justify-center font-sans">
      <div className="max-w-7xl mx-auto w-full">
        <div className="mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-600">
            About Our Legacy
          </span>
          <h2 className="max-w-3xl text-4xl md:text-8xl font-bold text-[#0a1628] mt-2 tracking-tight">
            Our Story &amp; Core Mission
          </h2>
        </div>

        {/* 3-column stat-block layout: colored panel with a cut corner, label row, white body below */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-slate-200 rounded-3xl overflow-hidden border border-slate-200 shadow-sm">
          {/* Column 1: Founding */}
          <div className="bg-white flex flex-col">
            <div
              className="bg-[#0a1628] text-white px-8 pt-10 pb-8 relative"
              style={{
                clipPath:
                  "polygon(0 0, 100% 0, 100% 100%, 36px 100%, 0 calc(100% - 36px))",
              }}
            >
              <div className="flex items-start justify-between">
                <span className="text-6xl md:text-7xl font-extrabold tracking-tighter leading-none text-[#E4B95A]">
                  2010
                </span>
                <span className="text-xs uppercase text-slate-400 mt-2">
                  (est.)
                </span>
              </div>
              <div className="mt-8 flex items-baseline gap-1.5 text-xs uppercase tracking-wide text-slate-300">
                <span className="text-[#E4B95A]/80">foundation /</span>
                <span>jacop healthcare</span>
              </div>
            </div>
            <div className="px-8 py-8 flex-1 flex flex-col justify-between space-y-6">
              <p className="text-slate-700 text-sm md:text-base leading-relaxed">
                One Community Home Health was established in 2026 as the DBA of
                JACOP Healthcare Services, Inc., a nurse-founded home health
                organization serving clients since 2010. The One Community name
                brings the established JACOP care legacy forward in a brand
                centered on belonging, dignity, independence, and compassionate
                care at home.
              </p>
              <div className="pt-4 border-t border-slate-100 text-xs font-bold uppercase tracking-wider text-slate-400">
                Serving clients since 2010
              </div>
            </div>
          </div>

          {/* Column 2: Regional base */}
          <div className="bg-white flex flex-col">
            <div
              className="bg-[#E4B95A] text-[#0a1628] px-8 pt-10 pb-8 relative"
              style={{
                clipPath:
                  "polygon(0 0, 100% 0, 100% 100%, 36px 100%, 0 calc(100% - 36px))",
              }}
            >
              <div className="flex items-start justify-between">
                <span className="text-6xl md:text-7xl font-extrabold tracking-tighter leading-none">
                  DFW
                </span>
                <span className="text-xs uppercase text-[#0a1628]/60 mt-2">
                  (hub)
                </span>
              </div>
              <div className="mt-8 flex items-baseline gap-1.5 text-xs uppercase tracking-wide text-[#0a1628]/70">
                <span className="font-semibold">operations /</span>
                <span>grand prairie base</span>
              </div>
            </div>
            <div className="px-8 py-8 flex-1 flex flex-col justify-between space-y-6">
              <p className="text-slate-700 text-sm md:text-base leading-relaxed">
                From our Grand Prairie base, we deliver individualized care
                across the Dallas–Fort Worth Metroplex. Our team collaborates
                with patients, families, caregivers, physicians, hospitals,
                rehabilitation facilities, and community partners to support
                recovery, manage health needs, strengthen independence, and help
                people remain safely at home.
              </p>
              <div className="pt-4 border-t border-slate-100 text-xs font-bold uppercase tracking-wider text-amber-600">
                North Texas base
              </div>
            </div>
          </div>

          {/* Column 3: Mission & Vision */}
          <div className="bg-white flex flex-col">
            <div
              className="bg-[#0a1628] text-white px-8 pt-10 pb-8 relative"
              style={{
                clipPath:
                  "polygon(0 0, 100% 0, 100% 100%, 36px 100%, 0 calc(100% - 36px))",
              }}
            >
              <div className="flex items-start justify-between">
                <span className="text-3xl md:text-4xl font-extrabold tracking-tight leading-none">
                  Mission
                  <br />
                  &amp; Vision
                </span>
                <span className="text-xs uppercase text-[#fff]/70 mt-2">
                  (why)
                </span>
              </div>
              <div className="mt-8 flex items-baseline gap-1.5 text-xs uppercase tracking-wide text-[#fff]">
                <span className="font-semibold">principles /</span>
                <span>clinical excellence</span>
              </div>
            </div>
            <div className="px-8 py-8 flex-1 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-[#0a1628] mb-1 text-sm uppercase tracking-wider">
                    Mission
                  </h4>
                  <p className="text-slate-700 text-xs md:text-sm leading-relaxed">
                    To provide trusted, high-quality home health services that
                    promote independence, dignity, and a better quality of life
                    for every individual and family we serve.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-[#0a1628] mb-1 text-sm uppercase tracking-wider">
                    Vision
                  </h4>
                  <p className="text-slate-700 text-xs md:text-sm leading-relaxed">
                    To be the trusted in-home care partner of choice across
                    North Texas, empowering patients to stay where they belong
                    through compassionate, professional, and reliable clinical
                    excellence.
                  </p>
                </div>
              </div>
              <div className="pt-4 border-t border-slate-100 text-xs font-bold uppercase tracking-wider text-[#0a1628]">
                Angela Ananti, BSN, RN — Founder &amp; Director of Nursing
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
