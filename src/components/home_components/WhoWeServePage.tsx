import { Link } from "react-router-dom";
import ServicesLandingPage from "./BrandPromiseBentoSection";

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

      <ServicesLandingPage />
    </main>
  );
}
