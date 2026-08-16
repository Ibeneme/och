import { useState } from "react";
import { MapPin, Phone, Mail, Clock, ShieldAlert } from "lucide-react";

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

  const quickInfo = [
    {
      icon: MapPin,
      label: "Location",
      lines: ["3560 Quannah Drive", "Grand Prairie, TX 75052"],
    },
    {
      icon: Phone,
      label: "Phone & fax",
      lines: ["P: 972-325-1598", "F: 972-674-2923"],
    },
    {
      icon: Mail,
      label: "Email",
      lines: ["info@onechh.com"],
    },
    {
      icon: Clock,
      label: "Admin hours",
      lines: ["Mon–Fri: 9:00 AM–5:00 PM"],
      note: "Visits by appointment only",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-[#3A4657]">
      {/* ===== Hero Section ===== */}
      <section className="relative bg-[#0A2140] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 lg:pt-28 pb-32 lg:pb-40">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-[#E4B95A] font-medium text-xs tracking-wider uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-[#E4B95A] animate-pulse" />
              Get in touch
            </div>
            <h1 className="ohh-serif text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.1] mb-6 tracking-tight">
              Contact <span className="text-[#E4B95A]">One Community</span> Home
              Health
            </h1>
            <p className="text-lg sm:text-xl text-white/75 mb-8 leading-relaxed max-w-xl">
              We are here to answer your questions, assist with care
              coordination, and support you and your family on your home health
              journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:9723251598"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#E4B95A] hover:bg-[#D9A93F] text-[#0A2140] font-bold rounded-xl transition-colors"
              >
                Call 972-325-1598
              </a>
              <a
                href="#contact-form"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/15 text-white font-semibold rounded-xl transition-colors backdrop-blur-sm"
              >
                Send a message
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Quick Info Dock — floats over the hero/body seam ===== */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="-mt-16 lg:-mt-20 relative z-10 bg-white rounded-[2rem] p-8 lg:p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {quickInfo.map(({ icon: Icon, label, lines, note }) => (
              <div key={label} className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#F3ECDC] text-[#0A2140] flex items-center justify-center flex-shrink-0">
                  <Icon size={18} />
                </div>
                <div>
                  <h4 className="text-[11px] uppercase tracking-wider text-[#8A93A0] font-semibold">
                    {label}
                  </h4>
                  <p className="text-sm font-semibold text-[#0A2140] mt-0.5 leading-snug">
                    {lines.map((line, i) => (
                      <span key={line}>
                        {line}
                        {i < lines.length - 1 && <br />}
                      </span>
                    ))}
                  </p>
                  {note && (
                    <span className="text-xs font-medium text-[#C89B3C] block mt-1">
                      {note}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Main Content Section: Form & Office Info ===== */}
      <section id="contact-form" className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Left Column: Form (7 cols) */}
            <div className="lg:col-span-7 bg-[#FBF8F2] rounded-3xl p-8 sm:p-12">
              <div className="mb-8">
                <span className="text-[#C89B3C] font-semibold tracking-widest uppercase text-xs">
                  Send us a note
                </span>
                <h2 className="ohh-serif text-2xl sm:text-3xl font-semibold text-[#0A2140] mt-1">
                  General inquiry, consultation, or referral
                </h2>
                <p className="text-[#5B6B7C] text-sm mt-2">
                  Fill out the form below for general inquiries, to request a
                  consultation, or to submit patient referral details. Our
                  administrative team will respond promptly during business
                  hours.
                </p>
              </div>

              {formStatus === "success" ? (
                <div className="bg-white text-emerald-800 rounded-2xl p-6 text-center">
                  <h3 className="font-bold text-lg mb-1">
                    Message received successfully!
                  </h3>
                  <p className="text-sm">
                    Thank you for contacting One Community Home Health. A member
                    of our team will reach out to you soon.
                  </p>
                  <button
                    onClick={() => setFormStatus("idle")}
                    className="mt-4 px-6 py-2 bg-emerald-600 text-white text-xs font-bold rounded-xl hover:bg-emerald-700 transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#3A4657] mb-2">
                        Full name <span className="text-[#C89B3C]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        placeholder="John Doe"
                        className="w-full px-4 py-3 bg-white rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E4B95A] text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#3A4657] mb-2">
                        Email address <span className="text-[#C89B3C]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 bg-white rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E4B95A] text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#3A4657] mb-2">
                        Phone number <span className="text-[#C89B3C]">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="(972) 000-0000"
                        className="w-full px-4 py-3 bg-white rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E4B95A] text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#3A4657] mb-2">
                        Inquiry type <span className="text-[#C89B3C]">*</span>
                      </label>
                      <select
                        value={formData.inquiryType}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            inquiryType: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 bg-white rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E4B95A] text-sm"
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
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#3A4657] mb-2">
                      Message / details{" "}
                      <span className="text-[#C89B3C]">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Please let us know how we can assist you..."
                      className="w-full px-4 py-3 bg-white rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E4B95A] text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#0A2140] hover:bg-[#123258] text-white font-bold rounded-xl transition-colors text-sm uppercase tracking-wider"
                  >
                    Submit request
                  </button>
                </form>
              )}
            </div>

            {/* Right Column: Details, Service Area & Notices (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              {/* Office & Appointment Info */}
              <div className="bg-[#0A2140] text-white rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#E4B95A]/10 rounded-full blur-3xl pointer-events-none" />
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2 relative z-10">
                  <span className="w-3 h-3 rounded-full bg-[#E4B95A]" />
                  Office information & notice
                </h3>
                <div className="space-y-4 text-sm text-white/70 relative z-10">
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
                      Administrative hours:
                    </strong>
                    <br />
                    Monday through Friday: 9:00 a.m. – 5:00 p.m.
                  </p>
                  <div className="p-4 bg-white/10 rounded-2xl">
                    <p className="text-xs font-semibold text-[#E4B95A] uppercase tracking-wider mb-1">
                      Appointment notice
                    </p>
                    <p className="text-xs text-white/80">
                      Physical office visits are conducted{" "}
                      <strong className="text-white">
                        by appointment only
                      </strong>
                      . Please call ahead to schedule an appointment with our
                      team.
                    </p>
                  </div>
                </div>
              </div>

              {/* Service-Area Overview */}
              <div className="bg-[#FBF8F2] rounded-3xl p-8">
                <h3 className="text-lg font-bold text-[#0A2140] mb-3">
                  Service-area overview
                </h3>
                <p className="text-[#5B6B7C] text-sm leading-relaxed mb-4">
                  We proudly deliver professional, compassionate home healthcare
                  across our designated service regions in Texas. Contact our
                  administrative office to verify whether your specific location
                  falls within our active care delivery zone.
                </p>
                <div className="flex items-center text-xs font-bold text-[#C89B3C]">
                  <span>Verification hotline: 972-325-1598</span>
                </div>
              </div>

              {/* Current Patient After-Hours Notice */}
              <div className="bg-[#F3ECDC] rounded-3xl p-8">
                <h3 className="text-lg font-bold text-[#0A2140] mb-2 flex items-center gap-2">
                  <ShieldAlert size={18} className="text-[#C89B3C]" />
                  After-hours care & safety
                </h3>
                <p className="text-[#5B6B7C] text-sm leading-relaxed mb-4">
                  Current patients will have access to a 24/7 on-call extension
                  for urgent clinical concerns. For a medical emergency, call
                  911.
                </p>
                <p className="text-xs text-[#8A7B5C] italic">
                  Note: The 24/7 on-call clinical extension is designed for
                  urgent care coordination and should never be used as a
                  substitute for direct emergency medical services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Map Section ===== */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#EFE8D8] rounded-3xl overflow-hidden h-96 relative flex items-center justify-center">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-40" />
            <div className="relative z-10 bg-white/90 backdrop-blur-md p-6 sm:p-8 rounded-2xl max-w-md text-center mx-4">
              <span className="text-[#C89B3C] font-bold text-xs uppercase tracking-wider">
                Find our office
              </span>
              <h3 className="ohh-serif text-xl font-semibold text-[#0A2140] mt-1 mb-2">
                Grand Prairie, Texas
              </h3>
              <p className="text-[#5B6B7C] text-xs mb-4">
                3560 Quannah Drive, Grand Prairie, TX 75052
              </p>
              <a
                href="https://maps.google.com/?q=3560+Quannah+Drive,+Grand+Prairie,+TX+75052"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2.5 bg-[#0A2140] hover:bg-[#123258] text-white text-xs font-bold rounded-xl transition-colors"
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
