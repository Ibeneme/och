import { Link } from "react-router-dom";
import Scrollers from "../home_components/Scrollers";
import {
  ShieldCheck,
  Phone,
  ArrowRight,
  AlertCircle,
  FileText,
} from "lucide-react";

export default function InsurancePaymentOptionsPage() {
  return (
    <main className="min-h-screen bg-[#FBF8F2] text-[#3A4657] ohh-sans">
      {/* ===== Hero Section ===== */}
      <section className="relative overflow-hidden pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-[#F0E9D9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3ECDC] text-[#0A2140] font-semibold text-xs tracking-wider uppercase">
                <span className="w-2 h-2 rounded-full bg-[#C89B3C]" />
                Coverage & Billing Support
              </div>

              <h1 className="ohh-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#0A2140] tracking-tight leading-[1.1]">
                Insurance and{" "}
                <span className="text-[#C89B3C]">Payment Options</span>
              </h1>

              <p className="text-base sm:text-lg text-[#5B6B7C] leading-relaxed">
                One Community Home Health works with multiple insurance and
                payment sources. Our team manages verification and authorization
                before care begins.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a
                  href="tel:9723251598"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#0A2140] hover:bg-[#123258] text-[#E4B95A] font-bold rounded-xl transition-all"
                >
                  <Phone size={16} />
                  <span>Call (972) 325-1598</span>
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#F3ECDC] hover:bg-[#EADFC2] text-[#0A2140] font-semibold rounded-xl transition-all"
                >
                  <span>Contact Our Team</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Hero Feature Card */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl p-8 border border-[#EFE8D8] space-y-6">
                <div className="flex items-center gap-3 pb-4 border-b border-[#F0EBDD]">
                  <div className="w-10 h-10 rounded-xl bg-[#0A2140] text-[#E4B95A] flex items-center justify-center">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <h3 className="ohh-serif text-lg font-semibold text-[#0A2140]">
                      Why Families Trust Us
                    </h3>
                    <p className="text-xs text-[#8A7B5C]">
                      Dedicated billing & verification
                    </p>
                  </div>
                </div>

                <ul className="space-y-4 text-sm text-[#3A4657]">
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#F3ECDC] text-[#0A2140] flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-xs">
                      ✓
                    </div>
                    <span>
                      Direct coordination with providers & case managers
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#F3ECDC] text-[#0A2140] flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-xs">
                      ✓
                    </div>
                    <span>
                      Proactive benefit checks to prevent unexpected costs
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#F3ECDC] text-[#0A2140] flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-xs">
                      ✓
                    </div>
                    <span>
                      Comprehensive coverage support for Texas residents
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Trust Strip Grid ===== */}
      <section className="bg-white border-b border-[#F0E9D9] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Benefit Verification", sub: "Before Care Starts" },
              { label: "Medicare-Certified", sub: "Trusted Quality" },
              { label: "Multiple Sources", sub: "Flexible Options" },
              { label: "Transparent Process", sub: "Zero Guesswork" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col p-5 rounded-2xl bg-[#FBF8F2] border border-[#F0EBDD]"
              >
                <span className="text-[10px] uppercase tracking-wider text-[#8A7B5C] font-bold">
                  {item.sub}
                </span>
                <span className="text-sm font-bold text-[#0A2140] mt-1">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Insurance Categories (Scrollers) ===== */}
      <div className="py-8">
        <Scrollers />
      </div>

      {/* ===== Notices & Disclaimer Cards ===== */}
      <section className="pb-20 pt-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#F7F1E6] border border-[#EFE8D8] rounded-3xl p-8 flex gap-5 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-[#C89B3C] text-[#0A2140] font-bold flex items-center justify-center text-xl">
                <AlertCircle size={22} />
              </div>
              <div>
                <h3 className="ohh-serif font-bold text-[#0A2140] mb-2 text-lg">
                  Pending Insurance Relationships
                </h3>
                <p className="text-[#5B6B7C] text-sm leading-relaxed">
                  UnitedHealthcare is not currently listed as an accepted plan.
                  It will only be shown once contracting and network
                  participation are fully confirmed.
                </p>
              </div>
            </div>

            <div className="bg-white border border-[#EFE8D8] rounded-3xl p-8 flex gap-5 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-[#0A2140] text-[#E4B95A] font-bold flex items-center justify-center text-xl">
                <FileText size={22} />
              </div>
              <div>
                <h3 className="ohh-serif font-bold text-[#0A2140] mb-2 text-lg">
                  Important Compliance Disclaimer
                </h3>
                <p className="text-[#5B6B7C] text-sm leading-relaxed">
                  Insurance participation can change dynamically. Acceptance of
                  a plan does not guarantee final coverage. Authorizations,
                  co-pays, deductibles, and clinical limitations must be
                  verified prior to care delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
