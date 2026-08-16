import { useState } from "react";
import { Mail, Bell, CheckCircle2, ArrowRight } from "lucide-react";

export default function PediatricServicesComp() {
  const [emailInput, setEmailInput] = useState("");
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setEmailSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFCF7] text-slate-800 font-sans selection:bg-[#D4AF37] selection:text-[#0F172A]">
      <section className="relative bg-[#0A0F1D] text-white overflow-hidden py-24 lg:py-36">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1502781252888-914d6aadf720?auto=format&fit=crop&w=2000&q=80"
            alt="Pediatric services coming soon"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0F1D] via-[#0A0F1D]/90 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#D4AF37]/15 text-[#D4AF37] font-semibold text-xs tracking-widest uppercase mb-8">
              <span className="w-2 h-2 bg-[#D4AF37]" />
              Coming Soon
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] mb-8">
              Pediatric Care <br />
              <span className="text-[#D4AF37]">On The Horizon</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 font-light leading-relaxed mb-10">
              One Community Home Health is preparing to expand its expert
              clinical care to support children and their families. Please note
              that pediatric services are not currently available.
            </p>
            <a
              href="#email-signup"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#D4AF37] text-[#0A0F1D] font-bold text-sm hover:bg-[#C59B27] transition-colors"
            >
              <Mail size={16} /> Join Update List
            </a>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-[#FDFCF7]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 space-y-8">
              <div className="flex items-center gap-4 text-[#D4AF37]">
                <Bell size={28} strokeWidth={2} />
                <span className="text-xs font-bold tracking-widest uppercase text-slate-500">
                  Program Notice
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Family-Centered Pediatric Support Coming to Your Community
              </h2>
              <p className="text-slate-600 text-sm sm:text-base font-light leading-relaxed">
                We are actively developing our specialized pediatric care
                programs to bring our trusted standards of home health
                excellence directly to young patients who require unique,
                dedicated medical attention.
              </p>
            </div>

            <div className="lg:col-span-7 bg-[#F4F2EC] p-8 sm:p-14 space-y-10">
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
                  Stay Informed
                </span>
                <h3 className="text-2xl font-bold text-slate-900">
                  Be First to Know When We Launch
                </h3>
                <p className="text-sm text-slate-600 font-light">
                  Pediatric services are not currently available. Sign up below
                  to receive official program releases and launch announcements
                  directly in your inbox.
                </p>
              </div>

              <div id="email-signup">
                {emailSubmitted ? (
                  <div className="py-8 space-y-4 text-center">
                    <div className="w-12 h-12 bg-[#D4AF37] text-[#0A0F1D] flex items-center justify-center mx-auto">
                      <CheckCircle2 size={24} />
                    </div>
                    <h4 className="font-bold text-slate-900 text-lg">
                      You're on the list
                    </h4>
                    <p className="text-xs text-slate-600 max-w-sm mx-auto font-light">
                      Thank you. We will send updates to{" "}
                      <span className="font-semibold text-slate-900">
                        {emailInput}
                      </span>{" "}
                      as soon as our pediatric program details are finalized.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleEmailSubmit} className="space-y-6">
                    <div>
                      <input
                        type="email"
                        required
                        placeholder="Enter your email address"
                        value={emailInput}
                        onChange={(e) => setEmailInput(e.target.value)}
                        className="w-full px-5 py-4 bg-white text-sm text-slate-800 placeholder-slate-400 focus:outline-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-8 py-4 bg-[#D4AF37] hover:bg-[#C59B27] text-[#0A0F1D] font-bold text-sm transition-colors flex items-center justify-center gap-2"
                    >
                      Sign Up for Updates <ArrowRight size={16} />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
