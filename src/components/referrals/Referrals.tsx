import { useState } from "react";
import {
  Upload,
  CheckCircle2,
  Phone,
  Mail,
  Printer,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

export default function ReferralsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    patientName: "",
    dob: "",
    address: "",
    phone: "",
    emergencyContact: "",
    insuranceInfo: "",
    primaryDiagnosis: "",
    requestedServices: "Skilled Nursing",
    referringProvider: "",
    providerPhone: "",
    providerFax: "",
    dischargeDate: "",
    preferredStartDate: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Secure submission logic routing to info@onechh.com / secure fax
    setSubmitted(true);
  };

  const steps = [
    {
      title: "Information Review",
      desc: "Our intake department reviews submitted patient data, primary diagnoses, and clinical notes for completeness.",
    },
    {
      title: "Insurance Verification",
      desc: "We verify coverage eligibility, benefits, and authorization requirements with Medicare, Medicaid, or private insurance providers.",
    },
    {
      title: "Physician Coordination",
      desc: "We coordinate with the referring physician to confirm orders, establish the plan of care, and secure required signatures.",
    },
    {
      title: "Initiation of Care",
      desc: "Upon approval, we contact the patient or family to schedule the preferred start-of-care date and dispatch the care team.",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-[#3A4657]">
      {/* ===== Hero Section ===== */}
      <section className="relative bg-[#0A2140] text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=2000&q=80"
            alt="Medical consultation"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A2140] via-transparent to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#E4B95A] font-medium text-xs tracking-wider uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-[#E4B95A] animate-pulse" />
              Patient Care Coordination
            </div>
            <h1 className="ohh-serif text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.1] mb-6 tracking-tight">
              Submit a Patient <span className="text-[#E4B95A]">Referral</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/70 mb-8 leading-relaxed">
              Designed for physicians, hospitals, case managers, discharge
              planners, social workers, families, and healthcare partners to
              initiate prompt in-home care services.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#referral-form"
                className="px-8 py-4 bg-[#E4B95A] hover:bg-[#D9A93F] text-[#0A2140] font-bold rounded-xl transition-all text-sm"
              >
                Online Referral Form
              </a>
              <a
                href="#methods"
                className="px-8 py-4 bg-white/10 hover:bg-white/15 text-white font-semibold rounded-xl transition-all text-sm backdrop-blur-sm"
              >
                Alternative Referral Methods
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Main content — sticky sidebar (quick contact) + main column ===== */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Sticky left rail: quick referral methods, present throughout the page */}
            <aside id="methods" className="lg:col-span-4">
              <div className="lg:sticky lg:top-10 space-y-4">
                <span className="text-[#E4B95A] font-semibold tracking-widest uppercase text-xs">
                  Secure Transmission
                </span>
                <h2 className="ohh-serif text-xl font-semibold text-[#0A2140] mb-1">
                  Referral Methods
                </h2>
                <p className="text-[#5B6B7C] text-sm mb-2">
                  Prefer not to use the online portal? Send referral
                  documentation through any of these direct channels.
                </p>

                <div className="bg-white rounded-3xl p-6 flex items-start gap-4">
                  <div className="w-11 h-11 shrink-0 rounded-2xl bg-[#F3ECDC] text-[#0A2140] flex items-center justify-center">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-[#0A2140] mb-1">
                      Email Referral
                    </h3>
                    <a
                      href="mailto:info@onechh.com"
                      className="text-sm font-bold text-[#E4B95A] hover:text-[#C89B3C] transition-colors"
                    >
                      info@onechh.com &rarr;
                    </a>
                  </div>
                </div>

                <div className="bg-white rounded-3xl p-6 flex items-start gap-4">
                  <div className="w-11 h-11 shrink-0 rounded-2xl bg-[#F3ECDC] text-[#0A2140] flex items-center justify-center">
                    <Printer size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-[#0A2140] mb-1">
                      Secure Fax
                    </h3>
                    <div className="text-sm font-bold text-[#0A2140]">
                      972-674-2923
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-3xl p-6 flex items-start gap-4">
                  <div className="w-11 h-11 shrink-0 rounded-2xl bg-[#F3ECDC] text-[#0A2140] flex items-center justify-center">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-[#0A2140] mb-1">
                      Phone Intake
                    </h3>
                    <a
                      href="tel:9723251598"
                      className="text-sm font-bold text-[#E4B95A] hover:text-[#C89B3C] transition-colors"
                    >
                      (972) 325-1598 &rarr;
                    </a>
                  </div>
                </div>

                <div className="bg-[#0A2140] rounded-3xl p-6">
                  <h3 className="font-bold text-sm text-white mb-1">
                    Printable Referral Form
                  </h3>
                  <p className="text-xs text-white/70 mb-4 leading-relaxed">
                    Prefer paper? Download our PDF referral template to complete
                    and fax.
                  </p>
                  <button
                    onClick={() => alert("Referral form download initialized.")}
                    className="w-full px-5 py-3 bg-[#E4B95A] hover:bg-[#D9A93F] text-[#0A2140] font-bold rounded-xl transition-all text-xs"
                  >
                    Download PDF Referral Form
                  </button>
                </div>
              </div>
            </aside>

            {/* Main column: who may refer, clinical scope, process — stacked in reading order */}
            <div className="lg:col-span-8 space-y-16">
              {/* Who may submit */}
              <div>
                <span className="text-[#E4B95A] font-semibold tracking-widest uppercase text-xs">
                  Partner Network
                </span>
                <h2 className="ohh-serif text-2xl sm:text-3xl font-semibold text-[#0A2140] mt-2 mb-4">
                  Who May Submit a Referral
                </h2>
                <p className="text-[#5B6B7C] text-sm leading-relaxed mb-6">
                  We work collaboratively across the healthcare continuum to
                  ensure patients experience smooth transitions from
                  institutional settings to the comfort of home.
                </p>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Physicians & Providers",
                    "Hospitals & Health Systems",
                    "Case Managers & Discharge Planners",
                    "Social Workers & Care Coordinators",
                    "Patients, Family Members & Authorized Representatives",
                  ].map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-2 bg-white px-4 py-2.5 rounded-full text-sm font-medium text-[#3A4657]"
                    >
                      <span className="w-2 h-2 rounded-full bg-[#E4B95A]" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Clinical scope */}
              <div className="bg-white rounded-3xl p-8 sm:p-10">
                <span className="text-[#E4B95A] font-semibold tracking-widest uppercase text-xs">
                  Clinical Scope
                </span>
                <h3 className="text-xl font-bold text-[#0A2140] mt-2 mb-4">
                  Conditions & Service Needs Commonly Referred
                </h3>
                <p className="text-[#5B6B7C] text-sm mb-6">
                  Our multidisciplinary team provides physician-directed
                  clinical support for various recovery and long-term management
                  needs:
                </p>
                <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3 text-sm text-[#3A4657]">
                  <li className="flex items-start gap-2.5">
                    <ArrowRight
                      size={16}
                      className="text-[#E4B95A] shrink-0 mt-1"
                    />
                    <span>Skilled nursing care & medication management</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <ArrowRight
                      size={16}
                      className="text-[#E4B95A] shrink-0 mt-1"
                    />
                    <span>Physical, occupational, and speech therapy</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <ArrowRight
                      size={16}
                      className="text-[#E4B95A] shrink-0 mt-1"
                    />
                    <span>
                      Post-surgical rehabilitation & wound care management
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <ArrowRight
                      size={16}
                      className="text-[#E4B95A] shrink-0 mt-1"
                    />
                    <span>
                      Chronic disease oversight (diabetes, cardiac, respiratory)
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5 sm:col-span-2">
                    <ArrowRight
                      size={16}
                      className="text-[#E4B95A] shrink-0 mt-1"
                    />
                    <span>
                      Medical social services and home health aide assistance
                    </span>
                  </li>
                </ul>
              </div>

              {/* Process — vertical numbered timeline instead of a 4-col grid */}
              <div>
                <span className="text-[#E4B95A] font-semibold tracking-widest uppercase text-xs">
                  Workflow & Steps
                </span>
                <h2 className="ohh-serif text-2xl sm:text-3xl font-semibold text-[#0A2140] mt-2 mb-4">
                  Referral Review & Insurance Verification Process
                </h2>
                <p className="text-[#5B6B7C] text-sm mb-8">
                  We streamline every referral to ensure quick evaluation and
                  seamless initiation of care.
                </p>

                <div className="relative pl-10">
                  <div className="absolute left-[15px] top-2 bottom-2 w-px bg-[#EFE8D8]" />
                  <div className="space-y-8">
                    {steps.map((step, idx) => (
                      <div key={step.title} className="relative">
                        <div className="absolute -left-10 top-0 w-8 h-8 rounded-full bg-[#E4B95A] text-[#0A2140] flex items-center justify-center font-black text-xs">
                          {idx + 1}
                        </div>
                        <h3 className="font-bold text-[#0A2140] mb-1 text-base">
                          {step.title}
                        </h3>
                        <p className="text-sm text-[#5B6B7C] leading-relaxed max-w-xl">
                          {step.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Secure Online Referral Form Section ===== */}
      <section id="referral-form" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FBF8F2] rounded-3xl p-8 sm:p-12">
            {submitted ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 bg-[#F3ECDC] text-[#C89B3C] rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={36} />
                </div>
                <h2 className="ohh-serif text-2xl font-semibold text-[#0A2140] mb-3">
                  Referral Successfully Submitted
                </h2>
                <p className="text-[#5B6B7C] text-sm max-w-lg mx-auto mb-8 leading-relaxed">
                  Thank you for submitting your patient referral. Our intake
                  team has received the secure information and will begin
                  insurance verification and clinical review immediately.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-8 py-3.5 bg-[#0A2140] hover:bg-[#123258] text-white font-bold rounded-xl transition-all text-sm"
                >
                  Submit Another Referral
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-bold text-[#C89B3C] uppercase tracking-widest mb-2">
                    <ShieldCheck size={16} />
                    Secure HIPAA-Compliant Form
                  </div>
                  <h2 className="ohh-serif text-2xl sm:text-3xl font-semibold text-[#0A2140] mb-2">
                    Online Patient Referral Form
                  </h2>
                  <p className="text-[#5B6B7C] text-sm">
                    Please complete the required fields below. All transmitted
                    protected health information (PHI) is handled securely.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="font-bold text-sm text-[#0A2140] uppercase tracking-wider pb-2">
                    1. Patient Information
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#3A4657] mb-2">
                        Patient Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. John Smith"
                        value={formData.patientName}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            patientName: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 bg-white rounded-xl text-sm text-[#3A4657] focus:outline-none focus:ring-2 focus:ring-[#E4B95A]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#3A4657] mb-2">
                        Date of Birth *
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.dob}
                        onChange={(e) =>
                          setFormData({ ...formData, dob: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-white rounded-xl text-sm text-[#3A4657] focus:outline-none focus:ring-2 focus:ring-[#E4B95A]"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#3A4657] mb-2">
                        Patient Address *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Street, City, State, Zip"
                        value={formData.address}
                        onChange={(e) =>
                          setFormData({ ...formData, address: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-white rounded-xl text-sm text-[#3A4657] focus:outline-none focus:ring-2 focus:ring-[#E4B95A]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#3A4657] mb-2">
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
                        className="w-full px-4 py-3 bg-white rounded-xl text-sm text-[#3A4657] focus:outline-none focus:ring-2 focus:ring-[#E4B95A]"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#3A4657] mb-2">
                        Emergency Contact & Relationship *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Name, Phone, Relation"
                        value={formData.emergencyContact}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            emergencyContact: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 bg-white rounded-xl text-sm text-[#3A4657] focus:outline-none focus:ring-2 focus:ring-[#E4B95A]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#3A4657] mb-2">
                        Insurance Information *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Insurance Provider & Policy/ID #"
                        value={formData.insuranceInfo}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            insuranceInfo: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 bg-white rounded-xl text-sm text-[#3A4657] focus:outline-none focus:ring-2 focus:ring-[#E4B95A]"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-4 pt-4">
                  <h3 className="font-bold text-sm text-[#0A2140] uppercase tracking-wider pb-2">
                    2. Clinical Details & Services
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#3A4657] mb-2">
                        Primary Diagnosis *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Primary diagnosis or condition"
                        value={formData.primaryDiagnosis}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            primaryDiagnosis: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 bg-white rounded-xl text-sm text-[#3A4657] focus:outline-none focus:ring-2 focus:ring-[#E4B95A]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#3A4657] mb-2">
                        Requested Services *
                      </label>
                      <select
                        value={formData.requestedServices}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            requestedServices: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 bg-white rounded-xl text-sm text-[#3A4657] focus:outline-none focus:ring-2 focus:ring-[#E4B95A]"
                      >
                        <option value="Skilled Nursing">Skilled Nursing</option>
                        <option value="Physical Therapy">
                          Physical Therapy
                        </option>
                        <option value="Occupational Therapy">
                          Occupational Therapy
                        </option>
                        <option value="Speech Therapy">Speech Therapy</option>
                        <option value="Medical Social Services">
                          Medical Social Services
                        </option>
                        <option value="Home Health Aide">
                          Home Health Aide
                        </option>
                        <option value="Multiple Disciplines">
                          Multiple Disciplines / Comprehensive Care
                        </option>
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#3A4657] mb-2">
                        Hospital Discharge Date (If applicable)
                      </label>
                      <input
                        type="date"
                        value={formData.dischargeDate}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            dischargeDate: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 bg-white rounded-xl text-sm text-[#3A4657] focus:outline-none focus:ring-2 focus:ring-[#E4B95A]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#3A4657] mb-2">
                        Preferred Start-of-Care Date *
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.preferredStartDate}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            preferredStartDate: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 bg-white rounded-xl text-sm text-[#3A4657] focus:outline-none focus:ring-2 focus:ring-[#E4B95A]"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-4 pt-4">
                  <h3 className="font-bold text-sm text-[#0A2140] uppercase tracking-wider pb-2">
                    3. Referring Provider Information
                  </h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#3A4657] mb-2">
                        Referring Provider Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Physician or Coordinator Name"
                        value={formData.referringProvider}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            referringProvider: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 bg-white rounded-xl text-sm text-[#3A4657] focus:outline-none focus:ring-2 focus:ring-[#E4B95A]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#3A4657] mb-2">
                        Provider Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="(972) 000-0000"
                        value={formData.providerPhone}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            providerPhone: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 bg-white rounded-xl text-sm text-[#3A4657] focus:outline-none focus:ring-2 focus:ring-[#E4B95A]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#3A4657] mb-2">
                        Provider Fax *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="(972) 000-0000"
                        value={formData.providerFax}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            providerFax: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 bg-white rounded-xl text-sm text-[#3A4657] focus:outline-none focus:ring-2 focus:ring-[#E4B95A]"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-4 pt-4">
                  <h3 className="font-bold text-sm text-[#0A2140] uppercase tracking-wider pb-2">
                    4. Clinical Documentation & Physician Orders Upload
                  </h3>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#3A4657] mb-2">
                      Upload Recent Clinical Notes & Physician Orders (PDF/Word)
                      *
                    </label>
                    <div className="rounded-2xl p-6 text-center transition-colors cursor-pointer bg-white">
                      <Upload
                        size={24}
                        className="mx-auto text-[#8A93A0] mb-2"
                      />
                      <p className="text-xs text-[#5B6B7C] font-medium">
                        Click to upload clinical files or drag and drop here
                      </p>
                      <p className="text-[10px] text-[#8A93A0] mt-1">
                        Secure encrypted upload (PDF, DOCX up to 25MB)
                      </p>
                      <input
                        type="file"
                        required
                        className="hidden"
                        accept=".pdf,.doc,.docx"
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full py-4 bg-[#E4B95A] hover:bg-[#D9A93F] text-[#0A2140] font-bold rounded-xl transition-all text-sm flex items-center justify-center gap-2"
                  >
                    Submit Secure Referral <ArrowRight size={16} />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
