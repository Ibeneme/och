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

  const categories = [
    {
      title: "Patient rights & responsibilities",
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
      title: "Caregiver education",
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
      title: "Forms & downloads",
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
      title: "Privacy & HIPAA compliance",
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
      title: "Nondiscrimination & accessibility",
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
      title: "Grievances & feedback",
      bgClass: "bg-[#14263E]",
      textClass: "text-[#9FC7F5]",
      badgeBgClass: "bg-white/10 text-[#9FC7F5]",
      items: [
        "Open channels to voice compliments, concerns, or complaints",
        "Direct administrative oversight for prompt resolution",
        "Commitment to continuous quality improvement",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-[#FBF8F2] text-[#3A4657] ohh-sans">
      {/* ===== Hero Section ===== */}
      <section className="relative overflow-hidden pt-12 pb-16 lg:pt-20 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3ECDC] text-[#0A2140] font-semibold text-xs tracking-wider uppercase">
                <span className="w-2 h-2 rounded-full bg-[#C89B3C]" />
                Patient & family support
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
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#0A2140] hover:bg-[#123258] text-[#E4B95A] font-bold rounded-xl transition-colors"
                >
                  <Phone size={16} />
                  <span>Call (972) 325-1598</span>
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#F3ECDC] hover:bg-[#EADFC2] text-[#0A2140] font-semibold rounded-xl transition-colors"
                >
                  <span>Contact our team</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Hero Feature Card */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl p-8 space-y-6">
                <div className="flex items-center gap-3 pb-4">
                  <div className="w-10 h-10 rounded-2xl bg-[#0A2140] text-[#E4B95A] flex items-center justify-center">
                    <HelpCircle size={20} />
                  </div>
                  <div>
                    <h3 className="ohh-serif text-lg font-semibold text-[#0A2140]">
                      Navigation support
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
                label: "Patient rights",
                sub: "Advocacy & clarity",
                icon: ShieldCheck,
                accentColor: "text-[#C89B3C]",
                bgIcon: "bg-[#F3ECDC]",
              },
              {
                label: "Caregiver education",
                sub: "Empowering families",
                icon: Users,
                accentColor: "text-[#0A2140]",
                bgIcon: "bg-[#EAEFF7]",
              },
              {
                label: "Downloads & forms",
                sub: "Easy access",
                icon: Download,
                accentColor: "text-[#0A2140]",
                bgIcon: "bg-[#F3ECDC]",
              },
              {
                label: "Privacy & compliance",
                sub: "Trusted standards",
                icon: Lock,
                accentColor: "text-[#C89B3C]",
                bgIcon: "bg-[#F7F1E6]",
              },
            ].map((item) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={item.label}
                  className="group flex flex-col justify-between p-6 rounded-3xl bg-[#FBF8F2] hover:bg-[#F3ECDC]/40 transition-colors duration-300"
                >
                  <div
                    className={`w-10 h-10 rounded-2xl ${item.bgIcon} ${item.accentColor} flex items-center justify-center mb-4 transition-transform group-hover:scale-105`}
                  >
                    <IconComponent size={20} />
                  </div>

                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#8A7B5C] font-bold block">
                      {item.sub}
                    </span>
                    <span className="ohh-serif text-base font-bold text-[#0A2140] mt-1 block">
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
              Knowledge & support
            </span>
            <h2 className="ohh-serif text-3xl sm:text-4xl font-semibold text-[#0A2140]">
              Patient guides & information
            </h2>
            <p className="text-sm text-[#5B6B7C]">
              Find detailed overviews about home health care expectations, your
              rights as a patient, and how we protect your privacy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <div
                key={cat.title}
                className={`${cat.bgClass} p-8 rounded-3xl flex flex-col justify-between space-y-6`}
              >
                <div className="space-y-4">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${cat.badgeBgClass}`}
                  >
                    Resource guide
                  </span>

                  <h3
                    className={`ohh-serif text-xl font-bold ${cat.textClass}`}
                  >
                    {cat.title}
                  </h3>

                  <ul className="space-y-3 text-white/70 text-sm font-light">
                    {cat.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span className={`font-bold mt-0.5 ${cat.textClass}`}>
                          •
                        </span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between text-xs text-white/50">
                  <span>Available now</span>
                  <span className={cat.textClass}>Free to access</span>
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
              Common questions
            </span>
            <h2 className="ohh-serif text-3xl sm:text-4xl font-semibold text-[#0A2140]">
              Frequently asked questions
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
                  key={faq.question}
                  className="bg-[#FBF8F2] rounded-2xl overflow-hidden transition-colors duration-300"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className="font-bold text-[#0A2140] text-base sm:text-lg ohh-serif">
                      {faq.question}
                    </span>
                    <span
                      className={`flex-shrink-0 w-8 h-8 rounded-full bg-[#F3ECDC] text-[#0A2140] flex items-center justify-center font-bold text-sm transition-transform duration-300 ${
                        isOpen ? "rotate-180 bg-[#0A2140] text-[#E4B95A]" : ""
                      }`}
                    >
                      <ChevronDown size={16} />
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-[#5B6B7C] text-sm sm:text-base leading-relaxed pt-1">
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
            <div className="bg-[#0A2140] text-white rounded-3xl p-8 sm:p-10 flex flex-col justify-between space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#C89B3C]/10 rounded-full blur-3xl pointer-events-none" />

              <div className="space-y-4 relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-[#E4B95A] text-xs font-bold uppercase tracking-wider">
                  <AlertCircle size={14} />
                  <span>Urgent assistance</span>
                </div>

                <h3 className="ohh-serif text-2xl font-semibold text-white tracking-tight">
                  Need immediate assistance?
                </h3>

                <p className="text-white/70 text-sm leading-relaxed">
                  Current patients have access to a 24/7 on-call extension for
                  urgent clinical concerns. If you are experiencing a
                  life-threatening medical emergency, please call 911
                  immediately.
                </p>
              </div>

              <div className="flex items-center justify-between text-xs text-white/50 relative z-10">
                <span>Emergency protocol</span>
                <span className="text-[#E4B95A] font-semibold">Call 911</span>
              </div>
            </div>

            {/* Compliance Box */}
            <div className="bg-white text-[#0A2140] rounded-3xl p-8 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F3ECDC] text-[#0A2140] text-xs font-bold uppercase tracking-wider">
                  <FileText size={14} className="text-[#C89B3C]" />
                  <span>Legal commitment</span>
                </div>

                <h3 className="ohh-serif text-2xl font-semibold text-[#0A2140] tracking-tight">
                  Compliance & legal commitment
                </h3>

                <p className="text-[#5B6B7C] text-sm leading-relaxed">
                  One Community Health operates fully under applicable state and
                  federal guidelines as a DBA of JACOP Healthcare Services, Inc.
                  (serving clients since 2010). All resources adhere to standard
                  healthcare compliance practices.
                </p>
              </div>

              <div className="flex items-center justify-between text-xs text-[#8A93A0]">
                <span>Operational status</span>
                <span className="text-[#0A2140] font-bold">
                  Serving since 2010
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
