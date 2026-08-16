import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  ArrowRight,
  ShieldCheck,
  FileText,
  Download,
  Lock,
  Users,
  AlertCircle,
  HelpCircle,
  ChevronDown,
} from "lucide-react";

export default function ResourcesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      question: "What are my rights as a home health patient?",
      answer:
        "You have the absolute right to safe, high-quality, professional care tailored to your needs. You are fully encouraged to participate in your own plan of care, treatment decisions, and have full transparency regarding privacy, billing, and grievance processes.",
    },
    {
      question: "How can caregivers get proper education and support?",
      answer:
        "Caregivers receive practical tips for managing medications and daily routines safely at home, fall prevention and home safety adaptation checklists, as well as dedicated support systems to prevent caregiver burnout.",
    },
    {
      question: "What forms and documentation are required to get started?",
      answer:
        "Getting started involves general inquiry and consultation request guides, physician referral documentation guidelines, and accessible printable checklists to help you prepare your home for care.",
    },
    {
      question: "How is my personal health information protected?",
      answer:
        "We operate under strict HIPAA compliance standards, utilizing Notice of Privacy Practices to safeguard your health data, secure handling guidelines for medical records, and strict protocols for confidential communication.",
    },
    {
      question: "What are your nondiscrimination and accessibility policies?",
      answer:
        "We provide equal access to all services without regard to race, color, national origin, age, or disability. Language assistance services and ADA-compliant care practices are fully integrated into our support infrastructure.",
    },
    {
      question: "How do I submit feedback, compliments, or grievances?",
      answer:
        "We maintain open channels for you to voice compliments, concerns, or complaints with direct administrative oversight for prompt resolution and an ongoing commitment to continuous quality improvement.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#FBF8F2] text-[#3A4657] ohh-sans">
      {/* ===== Hero Section ===== */}
      <section className="relative overflow-hidden pt-12 pb-16 lg:pt-20 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#F3ECDC] text-[#0A2140] font-semibold text-xs tracking-wider uppercase">
                <span className="w-2 h-2 rounded-full bg-[#C89B3C]" />
                Patient & Family Support
              </div>

              <h1 className="ohh-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#0A2140] tracking-tight leading-[1.1]">
                Helpful <span className="text-[#C89B3C]">Resources</span> &
                Information
              </h1>

              <p className="text-base sm:text-lg text-[#5B6B7C] leading-relaxed">
                Access important patient rights, caregiver education, forms, and
                compliance guidelines to help you navigate your home health
                journey with confidence.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a
                  href="tel:9723251598"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#0A2140] hover:bg-[#123258] text-[#E4B95A] font-bold rounded-md transition-all"
                >
                  <Phone size={16} />
                  <span>Call (972) 325-1598</span>
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#F3ECDC] hover:bg-[#EADFC2] text-[#0A2140] font-semibold rounded-md transition-all"
                >
                  <span>Contact Our Team</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Hero Feature Card */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-md p-8 space-y-6">
                <div className="flex items-center gap-3 pb-4">
                  <div className="w-10 h-10 rounded-md bg-[#0A2140] text-[#E4B95A] flex items-center justify-center">
                    <HelpCircle size={20} />
                  </div>
                  <div>
                    <h3 className="ohh-serif text-lg font-semibold text-[#0A2140]">
                      Navigation Support
                    </h3>
                    <p className="text-xs text-[#8A7B5C]">
                      Guidance every step of the way
                    </p>
                  </div>
                </div>

                <ul className="space-y-4 text-sm text-[#3A4657]">
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#F3ECDC] text-[#0A2140] flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-xs">
                      ✓
                    </div>
                    <span>
                      Direct access to patient bill of rights & policies
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#F3ECDC] text-[#0A2140] flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-xs">
                      ✓
                    </div>
                    <span>
                      Printable care checklists and preparation guides
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#F3ECDC] text-[#0A2140] flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-xs">
                      ✓
                    </div>
                    <span>Full HIPAA compliance and privacy transparency</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Trust Strip Grid ===== */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                label: "Patient Rights",
                sub: "Advocacy & Clarity",
                icon: ShieldCheck,
                accentColor: "text-[#C89B3C]",
                bgIcon: "bg-[#F3ECDC]",
              },
              {
                label: "Caregiver Education",
                sub: "Empowering Families",
                icon: Users,
                accentColor: "text-[#0A2140]",
                bgIcon: "bg-[#EAEFF7]",
              },
              {
                label: "Downloads & Forms",
                sub: "Easy Access",
                icon: Download,
                accentColor: "text-[#0A2140]",
                bgIcon: "bg-[#F3ECDC]",
              },
              {
                label: "Privacy & Compliance",
                sub: "Trusted Standards",
                icon: Lock,
                accentColor: "text-[#C89B3C]",
                bgIcon: "bg-[#F7F1E6]",
              },
            ].map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={idx}
                  className="group relative flex flex-col justify-between p-6 rounded-md bg-[#FBF8F2] hover:bg-[#F3ECDC]/40 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-10 h-10 rounded-md ${item.bgIcon} ${item.accentColor} flex items-center justify-center transition-transform group-hover:scale-105`}
                    >
                      <IconComponent size={20} />
                    </div>
                    <span className="text-[10px] font-mono text-[#8A7B5C] font-bold opacity-60">
                      [0{idx + 1}]
                    </span>
                  </div>

                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#8A7B5C] font-bold block">
                      {item.sub}
                    </span>
                    <span className="text-base font-bold text-[#0A2140] mt-1 block ohh-serif">
                      {item.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== Resource Categories Grid ===== */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C89B3C]">
              Knowledge & Support
            </span>
            <h2 className="ohh-serif text-3xl sm:text-4xl font-semibold text-[#0A2140]">
              Patient Guides & Information
            </h2>
            <p className="text-sm text-[#5B6B7C]">
              Find detailed overviews about home health care expectations, your
              rights as a patient, and how we protect your privacy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Patient Rights & Responsibilities",
                code: "PR",
                bgClass: "bg-[#1B2333]",
                textClass: "text-[#F5C77E]",
                badgeBgClass: "bg-white/10 text-[#F5C77E]",
                items: [
                  "Right to safe, high-quality, professional care",
                  "Involvement in your own plan of care and treatment decisions",
                  "Full transparency regarding privacy, billing, and grievance processes",
                ],
              },
              {
                title: "Caregiver Education",
                code: "CE",
                bgClass: "bg-[#123B3E]",
                textClass: "text-[#8FE0DA]",
                badgeBgClass: "bg-white/10 text-[#8FE0DA]",
                items: [
                  "Tips for managing medications and daily routines safely at home",
                  "Fall prevention and home safety adaptation checklists",
                  "Support systems and resources to prevent caregiver burnout",
                ],
              },
              {
                title: "Forms & Downloads",
                code: "FD",
                bgClass: "bg-[#211B3E]",
                textClass: "text-[#B9AEFF]",
                badgeBgClass: "bg-white/10 text-[#B9AEFF]",
                items: [
                  "General inquiry and consultation request guides",
                  "Physician referral documentation guidelines",
                  "Accessible printable checklists for new care preparation",
                ],
              },
              {
                title: "Privacy & HIPAA Compliance",
                code: "HP",
                bgClass: "bg-[#12301F]",
                textClass: "text-[#9FE6B8]",
                badgeBgClass: "bg-white/10 text-[#9FE6B8]",
                items: [
                  "Notice of Privacy Practices safeguarding your health data",
                  "Secure handling guidelines for medical records",
                  "Strict protocols for confidential communication",
                ],
              },
              {
                title: "Nondiscrimination & Accessibility",
                code: "ND",
                bgClass: "bg-[#331B3E]",
                textClass: "text-[#E3AEE8]",
                badgeBgClass: "bg-white/10 text-[#E3AEE8]",
                items: [
                  "Equal access to services without regard to race, color, or origin",
                  "Language assistance services available for clear communication",
                  "ADA-compliant care practices and support infrastructure",
                ],
              },
              {
                title: "Grievances & Feedback",
                code: "GF",
                bgClass: "bg-[#14263E]",
                textClass: "text-[#9FC7F5]",
                badgeBgClass: "bg-white/10 text-[#9FC7F5]",
                items: [
                  "Open channels to voice compliments, concerns, or complaints",
                  "Direct administrative oversight for prompt resolution",
                  "Commitment to continuous quality improvement",
                ],
              },
            ].map((cat, i) => (
              <div
                key={i}
                className={`${cat.bgClass} p-8 rounded-md flex flex-col justify-between space-y-6`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`inline-block px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider ${cat.badgeBgClass}`}
                    >
                      Module [{cat.code}]
                    </span>
                    <span className="text-xs font-mono opacity-40 text-white">
                      [0{i + 1}]
                    </span>
                  </div>

                  <h3
                    className={`ohh-serif text-xl font-bold ${cat.textClass}`}
                  >
                    {cat.title}
                  </h3>

                  <ul className="space-y-3 text-slate-300 text-sm font-light">
                    {cat.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className={`font-bold mt-0.5 ${cat.textClass}`}>
                          •
                        </span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span>Resource Guide</span>
                  <span className={cat.textClass}>Available</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ Accordion Section ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C89B3C]">
              Common Questions
            </span>
            <h2 className="ohh-serif text-3xl sm:text-4xl font-semibold text-[#0A2140]">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-[#5B6B7C]">
              Click on a question below to find quick answers about our home
              health services and patient care policies.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="bg-[#FBF8F2] rounded-md overflow-hidden transition-all duration-300 border border-[#F0EBDD]"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className="font-bold text-[#0A2140] text-base sm:text-lg ohh-serif">
                      {faq.question}
                    </span>
                    <span
                      className={`flex-shrink-0 w-8 h-8 rounded-md bg-[#F3ECDC] text-[#0A2140] flex items-center justify-center font-bold text-sm transition-transform duration-300 ${
                        isOpen ? "rotate-180 bg-[#0A2140] text-[#E4B95A]" : ""
                      }`}
                    >
                      <ChevronDown size={16} />
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-[#5B6B7C] text-sm sm:text-base leading-relaxed border-t border-[#F0EBDD] pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== Notices & Disclaimer Cards ===== */}
      <section className="pb-24 pt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Urgent Assistance Box */}
            <div className="bg-[#0A2140] text-white rounded-md p-8 sm:p-10 flex flex-col justify-between space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#C89B3C]/10 rounded-full blur-3xl pointer-events-none" />

              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 text-[#E4B95A] font-mono text-xs uppercase tracking-wider">
                    <AlertCircle size={14} />
                    <span>Urgent Assistance</span>
                  </div>
                  <span className="font-mono text-xs text-slate-400 opacity-60">
                    [24_7_SUPPORT]
                  </span>
                </div>

                <h3 className="ohh-serif text-2xl font-semibold text-white tracking-tight">
                  Need Immediate Assistance?
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed font-light">
                  Current patients have access to a 24/7 on-call extension for
                  urgent clinical concerns. If you are experiencing a
                  life-threatening medical emergency, please call 911
                  immediately.
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400 relative z-10">
                <span>Emergency Protocol</span>
                <span className="text-[#E4B95A]">Call 911</span>
              </div>
            </div>

            {/* Compliance Box */}
            <div className="bg-white text-[#0A2140] rounded-md p-8 sm:p-10 flex flex-col justify-between space-y-6 border border-[#EFE8D8]">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#F3ECDC] text-[#0A2140] font-mono text-xs uppercase tracking-wider">
                    <FileText size={14} className="text-[#C89B3C]" />
                    <span>Legal Commitment</span>
                  </div>
                  <span className="font-mono text-xs text-[#8A7B5C] opacity-60">
                    [COMPLIANCE_03]
                  </span>
                </div>

                <h3 className="ohh-serif text-2xl font-semibold text-[#0A2140] tracking-tight">
                  Compliance & Legal Commitment
                </h3>

                <p className="text-[#5B6B7C] text-sm leading-relaxed font-light">
                  One Community Health operates fully under applicable state and
                  federal guidelines as a DBA of JACOP Healthcare Services, Inc.
                  (serving clients since 2010). All resources adhere to standard
                  healthcare compliance practices.
                </p>
              </div>

              <div className="pt-6 border-t border-[#F0EBDD] flex items-center justify-between text-xs font-mono text-[#8A7B5C]">
                <span>Operational Status</span>
                <span className="text-[#0A2140] font-bold">
                  Serving Since 2010
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
