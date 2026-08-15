import { Link } from "react-router-dom";

export default function InsurancePaymentOptionsPage() {
  return (
    <main className="min-h-screen bg-[#FAFAF8] text-slate-800">
      {/* ===== Hero (Modern Split Layout) ===== */}
      <section className="relative bg-[#0F172A] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-[#F59E0B] font-medium text-xs tracking-wider uppercase mb-6">
                <span className="w-2 h-2 rounded-full bg-[#F59E0B] animate-pulse" />
                Coverage & Billing Support
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6 tracking-tight">
                Insurance and{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
                  Payment Options
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed">
                One Community Home Health works with multiple insurance and
                payment sources. Our team manages verification and authorization
                before care begins.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:9723251598"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#F59E0B] hover:bg-[#FBBF24] text-[#0F172A] font-bold rounded-xl transition-all"
                >
                  Call 972-325-1598
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/15 text-white font-semibold rounded-xl transition-all backdrop-blur-sm"
                >
                  Contact Our Team
                </Link>
              </div>
            </div>

            {/* Quick Hero Floating Card */}
            <div className="lg:col-span-5">
              <div className="bg-slate-800/80 backdrop-blur-xl p-8 rounded-3xl space-y-6">
                <h3 className="text-lg font-semibold text-white tracking-wide pb-4">
                  Why Families Trust Our Billing Team
                </h3>
                <ul className="space-y-4 text-sm text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#F59E0B]/20 text-[#F59E0B] flex items-center justify-center flex-shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span>
                      Direct coordination with providers & case managers
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#F59E0B]/20 text-[#F59E0B] flex items-center justify-center flex-shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span>
                      Proactive benefit checks to prevent unexpected costs
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#F59E0B]/20 text-[#F59E0B] flex items-center justify-center flex-shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span>Comprehensive coverage for Texas residents</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Trust Strip ===== */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
            {[
              { label: "Benefit Verification", sub: "Before Care Starts" },
              { label: "Medicare-Certified", sub: "Trusted Quality" },
              { label: "Multiple Sources", sub: "Flexible Options" },
              { label: "Transparent Process", sub: "Zero Guesswork" },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                  {item.sub}
                </span>
                <span className="text-sm font-bold text-[#0F172A] mt-0.5">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Insurance Categories (Bento Grid Style) ===== */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-[#F59E0B] font-semibold tracking-widest uppercase text-xs">
              Accepted Sources
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] mt-2 mb-4 tracking-tight">
              Insurance & Payment Options
            </h2>
            <p className="text-slate-600 text-lg">
              Review our primary payment pathways. Coverage is subject to
              individual plan rules, medical necessity, and prior authorization.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Medicare",
                code: "M",
                img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1000&q=80",
                items: [
                  "Medicare-certified home health services",
                  "Coverage subject to eligibility & medical necessity",
                  "Physician or authorized practitioner orders required",
                ],
              },
              {
                title: "Texas Medicaid",
                code: "TX",
                img: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1000&q=80",
                items: [
                  "Texas Medicaid plans",
                  "STAR+PLUS programs supported",
                  "Authorization governed by managed-care mandates",
                ],
              },
              {
                title: "Medicaid & Managed-Care",
                code: "MC",
                img: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1000&q=80",
                items: [
                  "Molina Healthcare",
                  "Superior HealthPlan",
                  "Wellpoint (formerly Amerigroup)",
                ],
              },
              {
                title: "Private Insurance & HMO",
                code: "PI",
                img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1000&q=80",
                items: [
                  "Molina, Superior, Wellpoint, Aetna",
                  "Commercial options subject to active network status",
                ],
              },
              {
                title: "Veterans Affairs",
                code: "VA",
                img: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1000&q=80",
                items: [
                  "VA-authorized care & Community Care network",
                  "Requires proper VA eligibility & service referral",
                ],
              },
              {
                title: "Private Pay & Self-Pay",
                code: "$",
                img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80",
                items: [
                  "Customized private-pay packages",
                  "Transparent rates and flexible scheduling tailored to you",
                ],
              },
            ].map((cat, i) => (
              <div
                key={i}
                className="group bg-white rounded-3xl overflow-hidden transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-[16/9] overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10" />
                    <img
                      src={cat.img}
                      alt={cat.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-3 left-4 z-20 flex items-center gap-2">
                      <span className="w-8 h-8 rounded-lg bg-[#F59E0B] text-[#0F172A] font-bold text-xs flex items-center justify-center">
                        {cat.code}
                      </span>
                      <h3 className="text-lg font-bold text-white">
                        {cat.title}
                      </h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3 text-slate-600 text-sm">
                      {cat.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <span className="text-[#F59E0B] font-bold mt-0.5">
                            •
                          </span>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Notices & Disclaimer Split Cards ===== */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-amber-50/70 rounded-3xl p-8 flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-amber-500 text-white font-bold flex items-center justify-center text-xl">
                !
              </div>
              <div>
                <h3 className="font-bold text-[#0F172A] mb-2 text-lg">
                  Pending Insurance Relationships
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  UnitedHealthcare is not currently listed as an accepted plan.
                  It will only be shown once contracting and network
                  participation are fully confirmed.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8">
              <h3 className="font-bold text-[#0F172A] mb-2 text-lg">
                Important Compliance Disclaimer
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Insurance participation can change dynamically. Acceptance of a
                plan does not guarantee final coverage. Authorizations, co-pays,
                deductibles, and clinical limitations must be verified prior to
                care delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Final CTA ===== */}
      <section className="py-24 bg-[#0F172A] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 via-[#0F172A] to-slate-900" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 tracking-tight">
            Have questions about your coverage?
          </h2>
          <p className="text-lg text-slate-300 mb-8">
            Our specialized care coordinators are ready to verify your insurance
            benefits and outline your options clearly.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:9723251598"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#F59E0B] hover:bg-[#FBBF24] text-[#0F172A] font-bold rounded-xl transition-all"
            >
              Call 972-325-1598
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/15 text-white font-semibold rounded-xl transition-all backdrop-blur-sm"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
