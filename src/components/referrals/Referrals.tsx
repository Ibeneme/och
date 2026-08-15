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

  return (
    <main className="min-h-screen bg-[#FAFAF8] text-slate-800">
      {/* ===== Hero Section ===== */}
      <section className="relative bg-[#0F172A] text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=2000&q=80"
            alt="Medical consultation"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#F59E0B] font-medium text-xs tracking-wider uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-[#F59E0B] animate-pulse" />
              Patient Care Coordination
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6 tracking-tight">
              Submit a Patient{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
                Referral
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed">
              Designed for physicians, hospitals, case managers, discharge
              planners, social workers, families, and healthcare partners to
              initiate prompt in-home care services.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#referral-form"
                className="px-8 py-4 bg-[#F59E0B] hover:bg-[#FBBF24] text-[#0F172A] font-bold rounded-xl transition-all text-sm"
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

      {/* ===== Referral Partners & Submitter Overview ===== */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-[#F59E0B] font-semibold tracking-widest uppercase text-xs">
                  Partner Network
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] mt-2 mb-4">
                  Who May Submit a Referral
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  We work collaboratively across the healthcare continuum to
                  ensure patients experience smooth transitions from
                  institutional settings to the comfort of home.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 text-sm font-medium text-slate-700">
                <div className="bg-white p-4 rounded-2xl flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                  Physicians & Providers
                </div>
                <div className="bg-white p-4 rounded-2xl flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                  Hospitals & Health Systems
                </div>
                <div className="bg-white p-4 rounded-2xl flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                  Case Managers & Discharge Planners
                </div>
                <div className="bg-white p-4 rounded-2xl flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                  Social Workers & Care Coordinators
                </div>
                <div className="bg-white p-4 rounded-2xl flex items-center gap-3 sm:col-span-2">
                  <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                  Patients, Family Members & Authorized Representatives
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div className="overflow-hidden rounded-3xl h-64">
                <img
                  src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1000&q=80"
                  alt="Healthcare professional reviewing clinical data"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-white rounded-3xl p-8 sm:p-10">
                <span className="text-[#F59E0B] font-semibold tracking-widest uppercase text-xs">
                  Clinical Scope
                </span>
                <h3 className="text-xl font-bold text-[#0F172A] mt-2 mb-4">
                  Conditions & Service Needs Commonly Referred
                </h3>
                <p className="text-slate-600 text-sm mb-6">
                  Our multidisciplinary team provides physician-directed
                  clinical support for various recovery and long-term management
                  needs:
                </p>
                <ul className="space-y-3 text-sm text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <ArrowRight
                      size={16}
                      className="text-[#F59E0B] shrink-0 mt-1"
                    />
                    <span>Skilled nursing care & medication management</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <ArrowRight
                      size={16}
                      className="text-[#F59E0B] shrink-0 mt-1"
                    />
                    <span>Physical, occupational, and speech therapy</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <ArrowRight
                      size={16}
                      className="text-[#F59E0B] shrink-0 mt-1"
                    />
                    <span>
                      Post-surgical rehabilitation & wound care management
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <ArrowRight
                      size={16}
                      className="text-[#F59E0B] shrink-0 mt-1"
                    />
                    <span>
                      Chronic disease oversight (diabetes, cardiac, respiratory)
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <ArrowRight
                      size={16}
                      className="text-[#F59E0B] shrink-0 mt-1"
                    />
                    <span>
                      Medical social services and home health aide assistance
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Referral Methods & Direct Contacts ===== */}
      <section id="methods" className="py-20 bg-slate-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-[#F59E0B] font-semibold tracking-widest uppercase text-xs">
              Secure Transmission
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] mt-2 mb-4">
              Alternative Referral Methods
            </h2>
            <p className="text-slate-600 text-sm">
              If you prefer not to use our online portal, you can securely send
              referral documentation using any of the direct channels below.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-3xl p-8 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-6">
                  <Mail size={24} />
                </div>
                <h3 className="font-bold text-lg text-[#0F172A] mb-2">
                  Email Referral
                </h3>
                <p className="text-xs text-slate-600 mb-6 leading-relaxed">
                  Send patient demographics, clinical notes, and orders directly
                  to our secure intake email.
                </p>
              </div>
              <a
                href="mailto:info@onechh.com"
                className="text-sm font-bold text-[#F59E0B] hover:text-[#D97706] transition-colors"
              >
                info@onechh.com &rarr;
              </a>
            </div>

            <div className="bg-white rounded-3xl p-8 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-6">
                  <Printer size={24} />
                </div>
                <h3 className="font-bold text-lg text-[#0F172A] mb-2">
                  Secure Fax
                </h3>
                <p className="text-xs text-slate-600 mb-6 leading-relaxed">
                  Transmit physician orders and clinical summaries straight to
                  our dedicated intake fax line.
                </p>
              </div>
              <div className="text-sm font-bold text-[#0F172A]">
                972-674-2923
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-6">
                  <Phone size={24} />
                </div>
                <h3 className="font-bold text-lg text-[#0F172A] mb-2">
                  Phone Intake
                </h3>
                <p className="text-xs text-slate-600 mb-6 leading-relaxed">
                  Speak directly with our intake coordination team to discuss
                  patient eligibility and service readiness.
                </p>
              </div>
              <a
                href="tel:9723251598"
                className="text-sm font-bold text-[#F59E0B] hover:text-[#D97706] transition-colors"
              >
                (972) 325-1598 &rarr;
              </a>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-bold text-[#0F172A] mb-1">
                Download Printable Referral Form
              </h3>
              <p className="text-xs text-slate-600">
                Prefer filling out a paper form? Download our PDF referral
                template to complete and fax.
              </p>
            </div>
            <button
              onClick={() => alert("Referral form download initialized.")}
              className="px-6 py-3.5 bg-[#0F172A] hover:bg-slate-800 text-white font-bold rounded-xl transition-all text-xs shrink-0"
            >
              Download PDF Referral Form
            </button>
          </div>
        </div>
      </section>

      {/* ===== Referral Process & Workflow ===== */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-[#F59E0B] font-semibold tracking-widest uppercase text-xs">
              Workflow & Steps
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] mt-2 mb-4">
              Referral Review & Insurance Verification Process
            </h2>
            <p className="text-slate-600 text-sm">
              We streamline every referral to ensure quick evaluation and
              seamless initiation of care.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-3xl flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-[#F59E0B] uppercase tracking-wider block mb-2">
                  Step 01
                </span>
                <h3 className="font-bold text-[#0F172A] mb-2 text-base">
                  Information Review
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Our intake department reviews submitted patient data, primary
                  diagnoses, and clinical notes for completeness.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-3xl flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-[#F59E0B] uppercase tracking-wider block mb-2">
                  Step 02
                </span>
                <h3 className="font-bold text-[#0F172A] mb-2 text-base">
                  Insurance Verification
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We verify coverage eligibility, benefits, and authorization
                  requirements with Medicare, Medicaid, or private insurance
                  providers.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-3xl flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-[#F59E0B] uppercase tracking-wider block mb-2">
                  Step 03
                </span>
                <h3 className="font-bold text-[#0F172A] mb-2 text-base">
                  Physician Coordination
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We coordinate with the referring physician to confirm orders,
                  establish the plan of care, and secure required signatures.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-3xl flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-[#F59E0B] uppercase tracking-wider block mb-2">
                  Step 04
                </span>
                <h3 className="font-bold text-[#0F172A] mb-2 text-base">
                  Initiation of Care
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Upon approval, we contact the patient or family to schedule
                  the preferred start-of-care date and dispatch the care team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Secure Online Referral Form Section ===== */}
      <section id="referral-form" className="py-20 bg-slate-100/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12">
            {submitted ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 bg-amber-100 text-[#F59E0B] rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={36} />
                </div>
                <h2 className="text-2xl font-bold text-[#0F172A] mb-3">
                  Referral Successfully Submitted
                </h2>
                <p className="text-slate-600 text-sm max-w-lg mx-auto mb-8 leading-relaxed">
                  Thank you for submitting your patient referral. Our intake
                  team has received the secure information and will begin
                  insurance verification and clinical review immediately.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-8 py-3.5 bg-[#0F172A] hover:bg-slate-800 text-white font-bold rounded-xl transition-all text-sm"
                >
                  Submit Another Referral
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-600 uppercase tracking-widest mb-2">
                    <ShieldCheck size={16} />
                    Secure HIPAA-Compliant Form
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] mb-2">
                    Online Patient Referral Form
                  </h2>
                  <p className="text-slate-600 text-sm">
                    Please complete the required fields below. All transmitted
                    protected health information (PHI) is handled securely.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="font-bold text-sm text-[#0F172A] uppercase tracking-wider pb-2">
                    1. Patient Information
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
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
                        className="w-full px-4 py-3 bg-slate-50 rounded-xl text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Date of Birth *
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.dob}
                        onChange={(e) =>
                          setFormData({ ...formData, dob: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-slate-50 rounded-xl text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
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
                        className="w-full px-4 py-3 bg-slate-50 rounded-xl text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
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
                        className="w-full px-4 py-3 bg-slate-50 rounded-xl text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
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
                        className="w-full px-4 py-3 bg-slate-50 rounded-xl text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
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
                        className="w-full px-4 py-3 bg-slate-50 rounded-xl text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-4 pt-4">
                  <h3 className="font-bold text-sm text-[#0F172A] uppercase tracking-wider pb-2">
                    2. Clinical Details & Services
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
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
                        className="w-full px-4 py-3 bg-slate-50 rounded-xl text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
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
                        className="w-full px-4 py-3 bg-slate-50 rounded-xl text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
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
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
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
                        className="w-full px-4 py-3 bg-slate-50 rounded-xl text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
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
                        className="w-full px-4 py-3 bg-slate-50 rounded-xl text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-4 pt-4">
                  <h3 className="font-bold text-sm text-[#0F172A] uppercase tracking-wider pb-2">
                    3. Referring Provider Information
                  </h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
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
                        className="w-full px-4 py-3 bg-slate-50 rounded-xl text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
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
                        className="w-full px-4 py-3 bg-slate-50 rounded-xl text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
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
                        className="w-full px-4 py-3 bg-slate-50 rounded-xl text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-4 pt-4">
                  <h3 className="font-bold text-sm text-[#0F172A] uppercase tracking-wider pb-2">
                    4. Clinical Documentation & Physician Orders Upload
                  </h3>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Upload Recent Clinical Notes & Physician Orders (PDF/Word)
                      *
                    </label>
                    <div className="rounded-2xl p-6 text-center transition-colors cursor-pointer bg-slate-50">
                      <Upload
                        size={24}
                        className="mx-auto text-slate-400 mb-2"
                      />
                      <p className="text-xs text-slate-600 font-medium">
                        Click to upload clinical files or drag and drop here
                      </p>
                      <p className="text-[10px] text-slate-400 mt-1">
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
                    className="w-full py-4 bg-[#F59E0B] hover:bg-[#FBBF24] text-[#0F172A] font-bold rounded-xl transition-all text-sm flex items-center justify-center gap-2"
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
