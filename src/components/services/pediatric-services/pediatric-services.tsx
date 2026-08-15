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
    <div className="min-h-screen bg-[#FAFAF8] text-slate-800 font-sans">
      <section className="relative bg-[#0F172A] text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=2000&q=80"
            alt="Pediatric services coming soon"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 text-[#F59E0B] font-medium text-xs tracking-wider uppercase mb-6 border border-amber-500/30">
              <span className="w-2 h-2 rounded-full bg-[#F59E0B] animate-pulse" />
              Coming Soon
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6 tracking-tight">
              Pediatric Services{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
                Are Coming Soon
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed">
              One Community Home Health is preparing to expand its services to
              support children and their families. Pediatric services are not
              currently available.
            </p>
            <a
              href="#email-signup"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#F59E0B] hover:bg-[#FBBF24] text-[#0F172A] font-bold rounded-xl transition-all text-sm"
            >
              <Mail size={16} /> Join Email Update List
            </a>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12  border border-slate-100 space-y-8">
            <div className="flex items-center gap-4 p-4 bg-amber-50 rounded-2xl border border-amber-100">
              <div className="w-12 h-12 bg-[#F59E0B] text-[#0F172A] rounded-xl flex items-center justify-center shrink-0">
                <Bell size={24} />
              </div>
              <div>
                <h2 className="text-lg font-bold text-[#0F172A]">
                  Pediatric Service Is Coming Soon
                </h2>
                <p className="text-xs text-slate-600">
                  We are expanding our care offerings to pediatric patients.
                  Please note that services for children are not currently
                  available.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <span className="text-[#F59E0B] font-semibold tracking-widest uppercase text-xs">
                Program Preview
              </span>
              <h3 className="text-2xl font-extrabold text-[#0F172A]">
                Expanding Family-Centered Care at Home
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                One Community Home Health is preparing to expand its services to
                support children and their families. Our future pediatric care
                programs will bring the same high standards of clinical
                excellence and compassionate in-home support to young patients
                requiring specialized medical attention in familiar home
                environments.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                Pediatric services are not currently available. We invite you to
                join our email list below to receive updates as program
                information becomes available.
              </p>
            </div>

            <div id="email-signup" className="pt-6 border-t border-slate-100">
              {emailSubmitted ? (
                <div className="bg-amber-50 p-6 rounded-2xl text-center space-y-3">
                  <div className="w-12 h-12 bg-[#F59E0B] text-[#0F172A] rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 size={24} />
                  </div>
                  <h4 className="font-bold text-[#0F172A] text-base">
                    You're on the list!
                  </h4>
                  <p className="text-xs text-slate-600 max-w-sm mx-auto">
                    Thank you for signing up. We will notify you at{" "}
                    <span className="font-semibold">{emailInput}</span> as soon
                    as our pediatric program information is released.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleEmailSubmit} className="space-y-4">
                  <div>
                    <h4 className="font-bold text-[#0F172A] text-base mb-1">
                      Stay Updated on Pediatric Care
                    </h4>
                    <p className="text-xs text-slate-600">
                      Enter your email address to receive launch updates and
                      program announcements.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      required
                      placeholder="Enter your email address..."
                      value={emailInput}
                      onChange={(e) => setEmailInput(e.target.value)}
                      className="flex-1 px-4 py-3 bg-slate-50 rounded-xl text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
                    />
                    <button
                      type="submit"
                      className="px-6 py-3 bg-[#F59E0B] hover:bg-[#FBBF24] text-[#0F172A] font-bold rounded-xl transition-all text-sm flex items-center justify-center gap-2 shrink-0"
                    >
                      Sign Up for Updates <ArrowRight size={16} />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
