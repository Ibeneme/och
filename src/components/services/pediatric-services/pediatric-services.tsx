import { useState } from "react";
import { Mail, Bell, CheckCircle2, ArrowRight, Phone } from "lucide-react";

export default function PediatricServicesComp() {
  const [emailInput, setEmailInput] = useState("");
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleEmailSubmit = (e: any) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setEmailSubmitted(true);
    }
  };

  return (
    <main className="min-h-screen bg-[#FBF8F2] text-[#3A4657] ohh-sans">
      {/* ===== Hero ===== */}
      <section className="relative overflow-hidden pt-12 pb-16 lg:pt-20 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3ECDC] text-[#0A2140] font-semibold text-xs tracking-wider uppercase">
                <span className="w-2 h-2 rounded-full bg-[#C89B3C]" />
                Coming soon
              </div>

              <div className="text-xs text-[#8A7B5C] font-medium tracking-wide">
                One Community Home Health is preparing to expand its clinical
                programs to serve children and their families.
              </div>

              <h1 className="ohh-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#0A2140] tracking-tight leading-[1.1]">
                Pediatric care{" "}
                <span className="text-[#C89B3C]">on the horizon</span>
              </h1>

              <p className="text-base sm:text-lg text-[#5B6B7C] leading-relaxed max-w-2xl">
                Please note that pediatric services are not currently available.
                Sign up to hear from us the moment the program launches in your
                community.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a
                  href="#email-signup"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#0A2140] hover:bg-[#123258] text-[#E4B95A] font-bold rounded-full transition-colors group"
                >
                  <Mail size={16} />
                  <span>Join the update list</span>
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
                <a
                  href="tel:9723251598"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#F3ECDC] hover:bg-[#EADFC2] text-[#0A2140] font-semibold rounded-full transition-colors"
                >
                  <Phone size={16} />
                  <span>Call (972) 325-1598</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl p-2 overflow-hidden">
                <div className="overflow-hidden rounded-[20px] aspect-[4/3]">
                  <img
                    src="https://images.unsplash.com/photo-1502781252888-914d6aadf720?auto=format&fit=crop&w=1000&q=80"
                    alt="Pediatric services coming soon"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="ohh-serif text-lg font-semibold text-[#0A2140]">
                    A program built for young patients
                  </h3>
                  <p className="text-sm text-[#5B6B7C] leading-relaxed">
                    Dedicated pediatric clinicians, family-centered visits, and
                    the same trusted standard of home health care.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Overview / Signup ===== */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-8">
              <div className="flex items-center gap-4 text-[#C89B3C]">
                <Bell size={28} strokeWidth={2} />
                <span className="text-xs font-bold tracking-widest uppercase text-[#8A7B5C]">
                  Program notice
                </span>
              </div>
              <h2 className="ohh-serif text-3xl sm:text-4xl font-semibold text-[#0A2140] tracking-tight leading-snug">
                Family-centered pediatric support, coming to your community
              </h2>
              <p className="text-[#5B6B7C] text-base leading-relaxed">
                We are actively developing specialized pediatric care programs
                to bring our trusted standard of home health excellence directly
                to young patients who need unique, dedicated medical attention.
              </p>
            </div>

            <div className="lg:col-span-7 bg-[#FBF8F2] rounded-3xl p-8 sm:p-14 space-y-10">
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-widest text-[#C89B3C]">
                  Stay informed
                </span>
                <h3 className="ohh-serif text-2xl font-semibold text-[#0A2140]">
                  Be first to know when we launch
                </h3>
                <p className="text-sm text-[#5B6B7C] leading-relaxed">
                  Pediatric services are not currently available. Sign up below
                  to receive official program updates and launch announcements
                  directly in your inbox.
                </p>
              </div>

              <div id="email-signup">
                {emailSubmitted ? (
                  <div className="py-8 space-y-4 text-center">
                    <div className="w-12 h-12 rounded-2xl bg-[#0A2140] text-[#E4B95A] flex items-center justify-center mx-auto">
                      <CheckCircle2 size={24} />
                    </div>
                    <h4 className="ohh-serif font-semibold text-[#0A2140] text-lg">
                      You&apos;re on the list
                    </h4>
                    <p className="text-xs text-[#5B6B7C] max-w-sm mx-auto">
                      Thank you. We&apos;ll send updates to{" "}
                      <span className="font-semibold text-[#0A2140]">
                        {emailInput}
                      </span>{" "}
                      as soon as our pediatric program details are finalized.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleEmailSubmit} className="space-y-6">
                    <input
                      type="email"
                      required
                      placeholder="Enter your email address"
                      value={emailInput}
                      onChange={(e) => setEmailInput(e.target.value)}
                      className="w-full px-5 py-4 bg-white rounded-2xl text-sm text-[#3A4657] placeholder-[#8A7B5C] focus:outline-none focus:ring-2 focus:ring-[#C89B3C]"
                    />
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0A2140] hover:bg-[#123258] text-[#E4B95A] font-bold rounded-full transition-colors group"
                    >
                      Sign up for updates
                      <ArrowRight
                        size={16}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
