import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Upload,
  CheckCircle2,
  AlertCircle,
  FileText,
  ShieldCheck,
  Send,
  Sparkles,
} from "lucide-react";

export default function CNATalentNetworkPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    serviceAreas: "",
    licenseNumber: "",
    licenseExpiration: "",
    yearsExperience: "",
    homeHealthExperience: "No",
    availability: "",
    shiftPreferences: "",
    transportation: "Yes",
    languages: "",
    references: "",
    consent: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) {
      alert("Please check the consent box to submit your application.");
      return;
    }
    // Application submission handling logic (sends to info@onechh.com)
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#FAFAF8] text-slate-800">
      {/* ===== Hero Section ===== */}
      <section className="relative bg-[#0F172A] text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=2000&q=80"
            alt="Healthcare professional"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/50 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-[#F59E0B] font-bold text-xs tracking-wider uppercase mb-6 border border-white/10">
              <Sparkles size={14} />
              Career Opportunities
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] mb-6 tracking-tight">
              Join Our CNA and Home Health Aide{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
                Talent Network
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-200 mb-8 leading-relaxed font-medium">
              “One Community Home Health accepts ongoing applications from
              qualified CNAs and home health aides. Submission of an application
              does not guarantee immediate employment or assignment. Qualified
              applicants may be contacted when a position or patient-care
              opportunity becomes available.”
            </p>
            <div className="flex flex-wrap gap-4 text-xs font-bold text-slate-200">
              <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl flex items-center gap-2 border border-white/10">
                <ShieldCheck size={16} className="text-[#F59E0B]" />
                Secure & Confidential Process
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl flex items-center gap-2 border border-white/10">
                <FileText size={16} className="text-[#F59E0B]" />
                Direct Application Routing
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Process Explanation Info Strip ===== */}
      <section className="bg-slate-900 text-white py-12 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-xs uppercase tracking-widest text-[#F59E0B] font-black mb-6 text-center">
            Application Process & Information Guidelines
          </div>
          <div className="grid md:grid-cols-4 gap-6 text-xs">
            <div className="bg-slate-800/80 border border-slate-700/80 p-6 rounded-2xl flex flex-col justify-between shadow-lg">
              <div>
                <strong className="text-white block mb-2 text-sm text-[#F59E0B] font-extrabold">
                  1. Submission Routing
                </strong>
                <span className="text-slate-300 font-medium">
                  Applications are securely transmitted directly to{" "}
                  <span className="text-amber-400 font-mono font-bold">
                    info@onechh.com
                  </span>{" "}
                  for administrative evaluation.
                </span>
              </div>
            </div>
            <div className="bg-slate-800/80 border border-slate-700/80 p-6 rounded-2xl flex flex-col justify-between shadow-lg">
              <div>
                <strong className="text-white block mb-2 text-sm text-[#F59E0B] font-extrabold">
                  2. Retention Period
                </strong>
                <span className="text-slate-300 font-medium">
                  Submitted talent network profiles may be retained on file for
                  up to two years for future staffing needs.
                </span>
              </div>
            </div>
            <div className="bg-slate-800/80 border border-slate-700/80 p-6 rounded-2xl flex flex-col justify-between shadow-lg">
              <div>
                <strong className="text-white block mb-2 text-sm text-[#F59E0B] font-extrabold">
                  3. Direct Contact
                </strong>
                <span className="text-slate-300 font-medium">
                  Applicants will be reached out to directly when a matching
                  patient placement or employment opening becomes available.
                </span>
              </div>
            </div>
            <div className="bg-slate-800/80 border border-slate-700/80 p-6 rounded-2xl flex flex-col justify-between shadow-lg">
              <div>
                <strong className="text-white block mb-2 text-sm text-[#F59E0B] font-extrabold">
                  4. Advancement & Onboarding
                </strong>
                <span className="text-slate-300 font-medium">
                  Background-check authorizations and onboarding paperwork are
                  provided only when advancing in the hiring process.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Application Form Section ===== */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-200">
            {submitted ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 bg-amber-100 text-[#F59E0B] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-inner">
                  <CheckCircle2 size={36} />
                </div>
                <h2 className="text-2xl font-black text-[#0F172A] mb-3">
                  Application Successfully Submitted
                </h2>
                <p className="text-slate-600 text-sm max-w-lg mx-auto mb-8 leading-relaxed font-medium">
                  Thank you for applying to join the One Community Home Health
                  Talent Network. Your details have been routed to{" "}
                  <strong className="text-slate-900 font-bold">
                    info@onechh.com
                  </strong>
                  . We will contact you if your qualifications match an active
                  care opportunity.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-8 py-3.5 bg-[#0F172A] hover:bg-slate-800 text-white font-extrabold rounded-xl transition-all text-sm shadow-md"
                >
                  Submit Another Application
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <span className="text-xs font-black uppercase tracking-widest text-[#F59E0B] bg-amber-500/10 px-3.5 py-1.5 rounded-full">
                    Talent Network Form
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-[#0F172A] mt-4 mb-2 tracking-tight">
                    CNA & Home Health Aide Application
                  </h2>
                  <p className="text-slate-600 text-sm font-medium">
                    Please fill out the form below completely. Note: We do not
                    collect Social Security numbers, banking information, copies
                    of identification, or background-check authorization through
                    this initial public application.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-2">
                      Full Legal Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Jane Doe"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-[#FAFAF8] border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#F59E0B] font-medium"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(972) 000-0000"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-[#FAFAF8] border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#F59E0B] font-medium"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane.doe@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-[#FAFAF8] border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#F59E0B] font-medium"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-2">
                      Home Address *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Street, City, State, Zip"
                      value={formData.address}
                      onChange={(e) =>
                        setFormData({ ...formData, address: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-[#FAFAF8] border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#F59E0B] font-medium"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-2">
                    Counties or Cities Willing to Serve *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Dallas County, Collin County, Plano, Frisco"
                    value={formData.serviceAreas}
                    onChange={(e) =>
                      setFormData({ ...formData, serviceAreas: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-[#FAFAF8] border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#F59E0B] font-medium"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-2">
                      CNA License or Certification Number *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="License # or Certification ID"
                      value={formData.licenseNumber}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          licenseNumber: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 bg-[#FAFAF8] border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#F59E0B] font-medium"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-2">
                      License or Certification Expiration Date *
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.licenseExpiration}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          licenseExpiration: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 bg-[#FAFAF8] border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#F59E0B] font-medium"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-2">
                      Years of Experience *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 3 years"
                      value={formData.yearsExperience}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          yearsExperience: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 bg-[#FAFAF8] border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#F59E0B] font-medium"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-2">
                      Home Health Experience? *
                    </label>
                    <select
                      value={formData.homeHealthExperience}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          homeHealthExperience: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 bg-[#FAFAF8] border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#F59E0B] font-medium"
                    >
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-2">
                      Availability *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Full-time, Weekdays, Part-time"
                      value={formData.availability}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          availability: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 bg-[#FAFAF8] border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#F59E0B] font-medium"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-2">
                      Shift Preferences *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Day shifts, Evening, Weekends"
                      value={formData.shiftPreferences}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          shiftPreferences: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 bg-[#FAFAF8] border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#F59E0B] font-medium"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-2">
                      Transportation Availability for Patient Homes *
                    </label>
                    <select
                      value={formData.transportation}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          transportation: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 bg-[#FAFAF8] border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#F59E0B] font-medium"
                    >
                      <option value="Yes">
                        Yes (Reliable personal vehicle & valid driver&apos;s
                        license)
                      </option>
                      <option value="No">No</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-2">
                      Languages Spoken
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. English, Spanish, Vietnamese"
                      value={formData.languages}
                      onChange={(e) =>
                        setFormData({ ...formData, languages: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-[#FAFAF8] border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#F59E0B] font-medium"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-2">
                    Professional References (Names & Contact Info) *
                  </label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Provide 2 professional references with name, relationship, phone number, and email."
                    value={formData.references}
                    onChange={(e) =>
                      setFormData({ ...formData, references: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-[#FAFAF8] border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#F59E0B] font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-2">
                    Resume Upload (PDF or Word)
                  </label>
                  <div className="border-2 border-dashed border-slate-200 rounded-2xl p-6 text-center hover:border-[#F59E0B] transition-colors cursor-pointer bg-[#FAFAF8]">
                    <Upload size={24} className="mx-auto text-slate-400 mb-2" />
                    <p className="text-xs text-slate-700 font-bold">
                      Click to upload resume or drag and drop file here
                    </p>
                    <p className="text-[10px] text-slate-500 mt-1 font-semibold">
                      PDF, DOCX up to 10MB
                    </p>
                    <input
                      type="file"
                      className="hidden"
                      accept=".pdf,.doc,.docx"
                    />
                  </div>
                </div>

                <div className="p-5 bg-amber-50 rounded-2xl border border-amber-200/80 flex items-start gap-3">
                  <AlertCircle
                    size={18}
                    className="text-amber-700 shrink-0 mt-0.5"
                  />
                  <p className="text-xs text-amber-900 leading-relaxed font-medium">
                    <strong className="font-bold text-amber-950">
                      Privacy Notice:
                    </strong>{" "}
                    Do not enter Social Security numbers, banking details, or
                    upload sensitive ID documents in this form. Those items are
                    only requested securely later in the formal onboarding
                    process.
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="consent"
                    required
                    checked={formData.consent}
                    onChange={(e) =>
                      setFormData({ ...formData, consent: e.target.checked })
                    }
                    className="w-4 h-4 text-[#F59E0B] rounded border-slate-300 focus:ring-[#F59E0B]"
                  />
                  <label
                    htmlFor="consent"
                    className="text-xs text-slate-700 font-medium"
                  >
                    I consent to be contacted by One Community Home Health
                    regarding employment or patient-care opportunities and
                    confirm that my submitted details are accurate. *
                  </label>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full py-4 bg-[#F59E0B] hover:bg-[#FBBF24] text-[#0F172A] font-extrabold rounded-xl transition-all text-sm flex items-center justify-center gap-2 shadow-lg"
                  >
                    <Send size={16} />
                    <span>Submit Application to Talent Network</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ===== Footer Call to Action ===== */}
      <section className="py-20 bg-white text-center border-t border-slate-200/80">
        <div className="max-w-3xl mx-auto px-4 space-y-4">
          <h2 className="text-2xl font-black text-[#0F172A] tracking-tight">
            Have Questions About Working With Us?
          </h2>
          <p className="text-slate-600 text-sm font-medium">
            Reach out to our administrative team or explore general employee
            information.
          </p>
          <div className="flex justify-center gap-4 flex-wrap pt-2">
            <a
              href="mailto:info@onechh.com"
              className="px-8 py-3.5 bg-[#0F172A] hover:bg-slate-800 text-white font-bold rounded-xl transition-all text-sm shadow-md"
            >
              Email info@onechh.com
            </a>
            <Link
              to="/employee-resources"
              className="px-8 py-3.5 bg-slate-100 hover:bg-slate-200 text-[#0F172A] font-bold rounded-xl transition-all text-sm shadow-sm border border-slate-200"
            >
              Employee Resources Hub
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
