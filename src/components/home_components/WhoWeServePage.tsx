import { Link } from "react-router-dom";

export default function WhoWeServePage() {
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
                Specialized In-Home Support
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6 tracking-tight">
                Who We{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
                  Serve
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed">
                One Community Home Health delivers compassionate, personalized
                care designed for every stage of life across the Dallas-Fort
                Worth Metroplex.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:9723251598"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#F59E0B] hover:bg-[#FBBF24] text-[#0F172A] font-bold rounded-xl transition-all "
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
              <div className="bg-slate-800/80 backdrop-blur-xl  p-8 rounded-3xl  space-y-6">
                <h3 className="text-lg font-semibold text-white tracking-wide  pb-4">
                  Our Commitment to You
                </h3>
                <ul className="space-y-4 text-sm text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#F59E0B]/20 text-[#F59E0B] flex items-center justify-center flex-shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span>
                      Individualized care plans tailored to unique life stages
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#F59E0B]/20 text-[#F59E0B] flex items-center justify-center flex-shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span>
                      Direct collaboration with families and physicians
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#F59E0B]/20 text-[#F59E0B] flex items-center justify-center flex-shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span>
                      Focus on safety, independence, and dignity at home
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Trust Strip ===== */}
      <section className="bg-white  ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
            {[
              { label: "Serving Seniors", sub: "Safety & Independence" },
              { label: "Honoring Veterans", sub: "Specialized Care Support" },
              {
                label: "Adults with Disabilities",
                sub: "Person-Centered Living",
              },
              { label: "Post-Hospital Recovery", sub: "Smooth Transitions" },
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

      {/* ===== Populations Served (Bento Grid Style) ===== */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-[#F59E0B] font-semibold tracking-widest uppercase text-xs">
              Populations We Support
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] mt-2 mb-4 tracking-tight">
              Tailored Care for Every Life Stage
            </h2>
            <p className="text-slate-600 text-lg">
              We partner with patients, families, and healthcare providers to
              provide dedicated home health services customized to specific
              needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Seniors",
                code: "SR",
                img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1000&q=80",
                items: [
                  "Supporting safety, independence, and recovery at home",
                  "Fall prevention, balance, and home-safety education",
                  "Medication management and chronic condition support",
                ],
              },
              {
                title: "Veterans",
                code: "VA",
                img: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1000&q=80",
                items: [
                  "Respectful care for those who have served",
                  "Coordination through VA Community Care networks",
                  "Guidance on authorized VA home health benefits",
                ],
              },
              {
                title: "Adults with Disabilities",
                code: "AD",
                img: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1000&q=80",
                items: [
                  "Person-centered support promoting daily independence",
                  "Assistance with activities of daily living and mobility",
                  "Skilled clinical care focused on comfort and dignity",
                ],
              },
              {
                title: "Post-Hospital & Post-Surgical Recovery",
                code: "RX",
                img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1000&q=80",
                items: [
                  "Smooth transition support from hospital or rehab to home",
                  "Wound care, vital-sign monitoring, and recovery tracking",
                  "Physical, occupational, and speech therapy services",
                ],
              },
              {
                title: "Chronic Condition Management",
                code: "CC",
                img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80",
                items: [
                  "Specialized education for diabetes, heart failure, and COPD",
                  "Symptom monitoring to prevent avoidable hospitalizations",
                  "Close collaboration with attending physicians",
                ],
              },
              {
                title: "Pediatric Services",
                code: "PE",
                img: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1000&q=80",
                items: [
                  "Pediatric Service Is Coming Soon",
                  "Preparing to expand compassionate care to children and families",
                  "Join our update list for upcoming launch information",
                ],
              },
            ].map((cat, i) => (
              <div
                key={i}
                className="group bg-white rounded-3xl overflow-hidden  transition-all duration-300 flex flex-col justify-between"
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
                      <span className="w-8 h-8 rounded-lg bg-[#F59E0B] text-[#0F172A] font-bold text-xs flex items-center justify-center shadow">
                        {cat.code}
                      </span>
                      <h3 className="text-lg font-bold text-white drop-">
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
              <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-amber-500 text-white font-bold flex items-center justify-center text-xl ">
                i
              </div>
              <div>
                <h3 className="font-bold text-[#0F172A] mb-2 text-lg">
                  Pediatric Service Update
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Pediatric care is coming soon. While we expand our clinical
                  offerings to support children and families, pediatric
                  referrals are not currently active. Sign up for updates to be
                  notified upon launch.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 ">
              <h3 className="font-bold text-[#0F172A] mb-2 text-lg">
                Personalized Care Planning
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Every individual we serve receives a customized plan of care
                developed in coordination with their physician, family members,
                and clinical specialists to ensure safe, high-quality outcomes
                at home.
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
            Ready to discuss care for yourself or a loved one?
          </h2>
          <p className="text-lg text-slate-300 mb-8">
            Our team is here to answer your questions, verify coverage, and
            outline the best support options available.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:9723251598"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#F59E0B] hover:bg-[#FBBF24] text-[#0F172A] font-bold rounded-xl transition-all "
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
