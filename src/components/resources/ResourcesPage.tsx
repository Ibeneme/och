import { useState } from "react";
import { Link } from "react-router-dom";

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
    <main className="min-h-screen bg-[#FAFAF8] text-slate-800">
      {/* ===== Hero Section ===== */}
      <section className="relative bg-[#0F172A] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-[#F59E0B] font-medium text-xs tracking-wider uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-[#F59E0B] animate-pulse" />
              Patient & Family Support
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6 tracking-tight">
              Helpful{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
                Resources
              </span>{" "}
              & Information
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed">
              Access important patient rights, caregiver education, forms, and
              compliance guidelines to help you navigate your home health
              journey with confidence.
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
        </div>
      </section>

      {/* ===== Trust Strip ===== */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
            {[
              { label: "Patient Rights", sub: "Advocacy & Clarity" },
              { label: "Caregiver Education", sub: "Empowering Families" },
              { label: "Downloads & Forms", sub: "Easy Access" },
              { label: "Privacy & Compliance", sub: "Trusted Standards" },
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

      {/* ===== Resource Categories Grid ===== */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-[#F59E0B] font-semibold tracking-widest uppercase text-xs">
              Knowledge & Support
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] mt-2 mb-4 tracking-tight">
              Patient Guides & Information
            </h2>
            <p className="text-slate-600 text-lg">
              Find detailed overviews about home health care expectations, your
              rights as a patient, and how we protect your privacy.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Patient Rights & Responsibilities",
                code: "PR",
                img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1000&q=80",
                items: [
                  "Right to safe, high-quality, professional care",
                  "Involvement in your own plan of care and treatment decisions",
                  "Full transparency regarding privacy, billing, and grievance processes",
                ],
              },
              {
                title: "Caregiver Education",
                code: "CE",
                img: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1000&q=80",
                items: [
                  "Tips for managing medications and daily routines safely at home",
                  "Fall prevention and home safety adaptation checklists",
                  "Support systems and resources to prevent caregiver burnout",
                ],
              },
              {
                title: "Forms & Downloads",
                code: "FD",
                img: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1000&q=80",
                items: [
                  "General inquiry and consultation request guides",
                  "Physician referral documentation guidelines",
                  "Accessible printable checklists for new care preparation",
                ],
              },
              {
                title: "Privacy & HIPAA Compliance",
                code: "HP",
                img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1000&q=80",
                items: [
                  "Notice of Privacy Practices safeguarding your health data",
                  "Secure handling guidelines for medical records",
                  "Strict protocols for confidential communication",
                ],
              },
              {
                title: "Nondiscrimination & Accessibility",
                code: "ND",
                img: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1000&q=80",
                items: [
                  "Equal access to services without regard to race, color, or origin",
                  "Language assistance services available for clear communication",
                  "ADA-compliant care practices and support infrastructure",
                ],
              },
              {
                title: "Grievances & Feedback",
                code: "GF",
                img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80",
                items: [
                  "Open channels to voice compliments, concerns, or complaints",
                  "Direct administrative oversight for prompt resolution",
                  "Commitment to continuous quality improvement",
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

      {/* ===== FAQ Accordion Section ===== */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#F59E0B] font-semibold tracking-widest uppercase text-xs">
              Common Questions
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] mt-2 mb-4 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 text-lg">
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
                  className="bg-[#FAFAF8] rounded-2xl overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className="font-bold text-[#0F172A] text-base sm:text-lg">
                      {faq.question}
                    </span>
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-200 text-[#0F172A] flex items-center justify-center font-bold text-sm transition-transform duration-300">
                      {isOpen ? "-" : "+"}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-slate-600 text-sm sm:text-base leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== Notices & Disclaimer Section ===== */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-amber-50/70 rounded-3xl p-8 flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-amber-500 text-white font-bold flex items-center justify-center text-xl">
                !
              </div>
              <div>
                <h3 className="font-bold text-[#0F172A] mb-2 text-lg">
                  Need Immediate Assistance?
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Current patients have access to a 24/7 on-call extension for
                  urgent clinical concerns. If you are experiencing a
                  life-threatening medical emergency, please call 911
                  immediately.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-8">
              <h3 className="font-bold text-[#0F172A] mb-2 text-lg">
                Compliance & Legal Commitment
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                One Community Health operates fully under applicable state and
                federal guidelines as a DBA of JACOP Healthcare Services, Inc.
                (serving clients since 2010). All resources adhere to standard
                healthcare compliance practices.
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
            Have questions about our resources or care options?
          </h2>
          <p className="text-lg text-slate-300 mb-8">
            Our team is available to help you understand your benefits, care
            plans, and next steps.
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
