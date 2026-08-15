import { useState } from "react";

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "success">("idle");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    inquiryType: "General Inquiry",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("success");
  };

  return (
    <main className="min-h-screen bg-[#FAFAF8] text-slate-800">
      {/* ===== Hero Section ===== */}
      <section className="relative bg-[#0F172A] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-[#F59E0B] font-medium text-xs tracking-wider uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-[#F59E0B] animate-pulse" />
              Get in Touch
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6 tracking-tight">
              Contact{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
                One Community
              </span>{" "}
              Home Health
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed">
              We are here to answer your questions, assist with care
              coordination, and support you and your family on your home health
              journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:9723251598"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#F59E0B] hover:bg-[#FBBF24] text-[#0F172A] font-bold rounded-xl transition-all "
              >
                Call 972-325-1598
              </a>
              <a
                href="#contact-form"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/15 text-white font-semibold rounded-xl transition-all backdrop-blur-sm "
              >
                Send a Message
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Quick Info Grid Bar ===== */}
      <section className="bg-white ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#F59E0B] flex items-center justify-center font-bold flex-shrink-0">
                📍
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                  Location
                </h4>
                <p className="text-sm font-bold text-[#0F172A] mt-0.5">
                  3560 Quannah Drive
                  <br />
                  Grand Prairie, TX 75052
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#F59E0B] flex items-center justify-center font-bold flex-shrink-0">
                📞
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                  Phone & Fax
                </h4>
                <p className="text-sm font-bold text-[#0F172A] mt-0.5">
                  P: 972-325-1598
                  <br />
                  F: 972-674-2923
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#F59E0B] flex items-center justify-center font-bold flex-shrink-0">
                ✉️
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                  Email
                </h4>
                <p className="text-sm font-bold text-[#0F172A] mt-0.5">
                  info@onechh.com
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#F59E0B] flex items-center justify-center font-bold flex-shrink-0">
                ⏰
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                  Admin Hours
                </h4>
                <p className="text-sm font-bold text-[#0F172A] mt-0.5">
                  Mon–Fri: 9:00 AM–5:00 PM
                  <br />
                  <span className="text-xs font-normal text-amber-600">
                    Visits by appointment only
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Main Content Section: Form & Office Info ===== */}
      <section id="contact-form" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Left Column: Form (7 cols) */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-12  ">
              <div className="mb-8">
                <span className="text-[#F59E0B] font-semibold tracking-widest uppercase text-xs">
                  Send Us a Note
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] mt-1">
                  General Inquiry, Consultation, or Referral
                </h2>
                <p className="text-slate-600 text-sm mt-2">
                  Fill out the form below for general inquiries, to request a
                  consultation, or to submit patient referral details. Our
                  administrative team will respond promptly during business
                  hours.
                </p>
              </div>

              {formStatus === "success" ? (
                <div className="bg-emerald-50  text-emerald-800 rounded-2xl p-6 text-center">
                  <h3 className="font-bold text-lg mb-1">
                    Message Received Successfully!
                  </h3>
                  <p className="text-sm">
                    Thank you for contacting One Community Home Health. A member
                    of our team will reach out to you soon.
                  </p>
                  <button
                    onClick={() => setFormStatus("idle")}
                    className="mt-4 px-6 py-2 bg-emerald-600 text-white text-xs font-bold rounded-xl hover:bg-emerald-700 transition-all"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Full Name <span className="text-amber-600">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        placeholder="John Doe"
                        className="w-full px-4 py-3 bg-slate-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F59E0B] text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Email Address <span className="text-amber-600">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 bg-slate-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F59E0B] text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Phone Number <span className="text-amber-600">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="(972) 000-0000"
                        className="w-full px-4 py-3 bg-slate-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F59E0B] text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Inquiry Type <span className="text-amber-600">*</span>
                      </label>
                      <select
                        value={formData.inquiryType}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            inquiryType: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 bg-slate-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F59E0B] text-sm"
                      >
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Request a Consultation">
                          Request a Consultation
                        </option>
                        <option value="Patient Referral">
                          Patient Referral Information
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Message / Details{" "}
                      <span className="text-amber-600">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Please let us know how we can assist you..."
                      className="w-full px-4 py-3 bg-slate-50  rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F59E0B] text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#0F172A] hover:bg-slate-800 text-white font-bold rounded-xl transition-all text-sm uppercase tracking-wider"
                  >
                    Submit Request
                  </button>
                </form>
              )}
            </div>

            {/* Right Column: Details, Service Area & Notices (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              {/* Office & Appointment Info */}
              <div className="bg-[#0F172A] text-white rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#F59E0B]/10 rounded-full blur-3xl pointer-events-none" />
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#F59E0B]" />
                  Office Information & Notice
                </h3>
                <div className="space-y-4 text-sm text-slate-300">
                  <p>
                    <strong className="text-white">
                      One Community Home Health
                    </strong>
                    <br />A DBA of JACOP Healthcare Services, Inc.
                  </p>
                  <p>
                    <strong className="text-white">Address:</strong>
                    <br />
                    3560 Quannah Drive, Grand Prairie, Texas 75052
                  </p>
                  <p>
                    <strong className="text-white">
                      Administrative Hours:
                    </strong>
                    <br />
                    Monday through Friday: 9:00 a.m. – 5:00 p.m.
                  </p>
                  <div className="p-4 bg-white/10 rounded-2xl ">
                    <p className="text-xs font-semibold text-[#F59E0B] uppercase tracking-wider mb-1">
                      Appointment Notice
                    </p>
                    <p className="text-xs text-slate-200">
                      Physical office visits are conducted{" "}
                      <strong>by appointment only</strong>. Please call ahead to
                      schedule an appointment with our team.
                    </p>
                  </div>
                </div>
              </div>

              {/* Service-Area Overview */}
              <div className="bg-white rounded-3xl p-8  ">
                <h3 className="text-lg font-bold text-[#0F172A] mb-3">
                  Service-Area Overview
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  We proudly deliver professional, compassionate home healthcare
                  across our designated service regions in Texas. Contact our
                  administrative office to verify whether your specific location
                  falls within our active care delivery zone.
                </p>
                <div className="flex items-center text-xs font-bold text-[#F59E0B]">
                  <span>Verification Hotline: 972-325-1598</span>
                </div>
              </div>

              {/* Current Patient After-Hours Notice */}
              <div className="bg-amber-50 rounded-3xl p-8">
                <h3 className="text-lg font-bold text-amber-900 mb-2">
                  After-Hours Care & Safety
                </h3>
                <p className="text-amber-800 text-sm leading-relaxed mb-4">
                  “Current patients will have access to a 24/7 on-call extension
                  for urgent clinical concerns. For a medical emergency, call
                  911.”
                </p>
                <p className="text-xs text-amber-700 italic">
                  Note: The 24/7 on-call clinical extension is designed for
                  urgent care coordination and should never be used as a
                  substitute for direct emergency medical services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Map Section Placeholder / Visual ===== */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-200 rounded-3xl overflow-hidden h-96 relative flex items-center justify-center ">
            {/* Simulated map integration style */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-40" />
            <div className="relative z-10 bg-white/90 backdrop-blur-md p-6 sm:p-8 rounded-2xl max-w-md text-center mx-4">
              <span className="text-[#F59E0B] font-bold text-xs uppercase tracking-wider">
                Find Our Office
              </span>
              <h3 className="text-xl font-extrabold text-[#0F172A] mt-1 mb-2">
                Grand Prairie, Texas
              </h3>
              <p className="text-slate-600 text-xs mb-4">
                3560 Quannah Drive, Grand Prairie, TX 75052
              </p>
              <a
                href="https://maps.google.com/?q=3560+Quannah+Drive,+Grand+Prairie,+TX+75052"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2.5 bg-[#0F172A] hover:bg-slate-800 text-white text-xs font-bold rounded-xl transition-all"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
