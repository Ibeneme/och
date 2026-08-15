export default function CommitmentCareSection() {
    return (
      <section className="py-24 px-6 md:px-12 bg-[#FBF8F2] min-h-screen relative overflow-hidden ohh-sans text-[#3A4657]">
        <div className="max-w-7xl mx-auto space-y-20 relative z-10">
          {/* Header with pill badge and modern editorial layout */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3ECDC] text-[#0A2140] font-semibold text-xs tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-[#C89B3C]" />
              Commitment & Quality
            </div>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
              <h2 className="ohh-serif text-4xl md:text-6xl font-semibold text-[#0A2140] tracking-tight leading-[1.1] max-w-4xl">
                Commitment to <span className="text-[#C89B3C]">Quality</span>{" "}
                &amp; Compassionate Care
              </h2>
              <p className="text-[#5B6B7C] text-sm md:text-base max-w-md leading-relaxed">
                Every visit reflects compassion, professional accountability,
                clear communication, and respect for the person receiving care.
              </p>
            </div>
          </div>
  
          {/* Bento Grid Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Card 1: Core Values / Info */}
            <div className="bg-white rounded-3xl p-8 md:p-10 border border-[#EFE8D8] flex flex-col justify-between space-y-8">
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
                <p className="text-[#5B6B7C] text-sm md:text-base leading-relaxed">
                  We believe home health care is built on trust. Our goal is to
                  help each patient and family feel informed, supported, and
                  confident in their plan of care.
                </p>
              </div>
              <div className="pt-4 border-t border-[#F0EBDD] text-xs text-[#8A7B5C] leading-relaxed">
                Services provided in accordance with applicable physician orders,
                plans of care, eligibility, and authorization requirements.
              </div>
            </div>
  
            {/* Card 2: Featured Visual / Leadership Highlight */}
            <div className="bg-[#0A2140] rounded-3xl p-8 md:p-10 relative overflow-hidden flex flex-col justify-between text-white lg:col-span-1">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#E4B95A]/10 rounded-full blur-3xl pointer-events-none" />
              <div className="space-y-4 relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E4B95A] text-[#0A2140] text-[10px] font-bold uppercase tracking-widest">
                  Clinical Leadership
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#E4B95A]">
                    Founder &amp; Administrator
                  </p>
                  <h3 className="ohh-serif text-2xl md:text-3xl font-semibold mt-1 text-white">
                    Angela Ananti, BSN, RN
                  </h3>
                </div>
                <p className="text-slate-300 text-xs md:text-sm leading-relaxed pt-2">
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
  
            {/* Card 3: Graphic / Stats layout or secondary info */}
            <div className="bg-white rounded-3xl p-8 md:p-10 border border-[#EFE8D8] flex flex-col justify-between space-y-6">
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
                  <p className="text-xs text-[#8A7B5C] font-semibold">
                    Experience
                  </p>
                </div>
                <div>
                  <p className="ohh-serif text-2xl font-bold text-[#C89B3C]">
                    11
                  </p>
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
  
          {/* Stats Strip */}
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
  
          {/* Service Footprint with proper map */}
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-[#EFE8D8] space-y-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="space-y-3 max-w-2xl">
                <h3 className="ohh-serif text-3xl md:text-4xl font-semibold text-[#0A2140] tracking-tight">
                  Our Service Footprint
                </h3>
                <p className="text-[#5B6B7C] text-sm md:text-base leading-relaxed">
                  Proudly serving patients and families throughout the Dallas-Fort
                  Worth Metroplex, including communities across Collin, Dallas,
                  Denton, Ellis, Hunt, Johnson, Kaufman, Parker, Rockwall,
                  Tarrant, and Wise counties.
                </p>
              </div>
              <div className="text-right hidden md:block">
                <span className="inline-block text-xs font-bold uppercase tracking-wider bg-[#0A2140] text-[#E4B95A] px-4 py-2 rounded-xl">
                  DFW Metroplex Area
                </span>
              </div>
            </div>
  
            {/* Real map */}
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
        </div>
      </section>
    );
  }
  