import { Link } from "react-router-dom";

export default function EmployeeResourcesPage() {
  return (
    <main className="min-h-screen bg-[#FAFAF8] text-slate-800">
      {/* ===== Hero Section ===== */}
      <section className="relative bg-[#0F172A] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#F59E0B] font-medium text-xs tracking-wider uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-[#F59E0B] animate-pulse" />
              Internal Staff Hub
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6 tracking-tight">
              Employee{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
                Resources
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed">
              This page provides current One Community Home Health employees
              with access to commonly used documents, support information, and
              reporting instructions. A secure employee portal may be added in
              the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#handbook"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#F59E0B] hover:bg-[#FBBF24] text-[#0F172A] font-bold rounded-xl transition-all"
              >
                View Handbook & Docs
              </a>
              <a
                href="#reporting"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/15 text-white font-semibold rounded-xl transition-all"
              >
                Reporting Protocols
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Priority Escalation Clarity Strip ===== */}
      <section className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-xs uppercase tracking-widest text-[#F59E0B] font-bold mb-3">
            Quick Distinction: Incident & Concern Pathways
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 text-xs">
            <div className="bg-white/5 p-3.5 rounded-xl">
              <span className="font-bold text-red-400 block mb-1">
                1. Life Emergency
              </span>
              Call 911 immediately for severe medical emergencies.
            </div>
            <div className="bg-white/5 p-3.5 rounded-xl">
              <span className="font-bold text-amber-400 block mb-1">
                2. Urgent Clinical
              </span>
              Use the 24/7 on-call clinical extension for immediate patient
              needs.
            </div>
            <div className="bg-white/5 p-3.5 rounded-xl">
              <span className="font-bold text-white block mb-1">
                3. Routine Incidents
              </span>
              Submit standard documentation through approved agency reporting
              channels.
            </div>
            <div className="bg-white/5 p-3.5 rounded-xl">
              <span className="font-bold text-white block mb-1">
                4. HR & Payroll
              </span>
              Contact administration during operating hours (Mon–Fri, 9 AM–5
              PM).
            </div>
            <div className="bg-white/5 p-3.5 rounded-xl">
              <span className="font-bold text-white block mb-1">
                5. Compliance
              </span>
              Report confidentiality, ethics, or safety concerns directly.
            </div>
          </div>
        </div>
      </section>

      {/* ===== Section 1: Employee Handbook ===== */}
      <section id="handbook" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <span className="text-[#F59E0B] font-semibold tracking-widest uppercase text-xs">
                Documentation
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] mt-2 mb-4">
                Employee Handbook
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Review the latest agency policies, code of conduct, benefits
                overview, and operational guidelines. All active field and
                office staff are expected to stay familiar with current handbook
                policies.
              </p>

              <div className="bg-slate-50 rounded-2xl p-6 mb-6 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-500 font-medium">
                    Handbook Version:
                  </span>
                  <span className="font-bold text-[#0F172A]">v2026.1</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 font-medium">
                    Effective Date:
                  </span>
                  <span className="font-bold text-[#0F172A]">
                    January 1, 2026
                  </span>
                </div>
                <div className="flex justify-between pt-2 border-t border-slate-200">
                  <span className="text-slate-500 font-medium">
                    Acknowledgment Status:
                  </span>
                  <span className="font-bold text-amber-600">
                    Required for active staff
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => alert("Handbook download initialized.")}
                  className="px-6 py-3.5 bg-[#0F172A] hover:bg-slate-800 text-white font-bold rounded-xl transition-all text-sm"
                >
                  Download Current Handbook (PDF)
                </button>
                <button
                  onClick={() =>
                    alert(
                      "Acknowledgment form instructions will be provided via HR."
                    )
                  }
                  className="px-6 py-3.5 bg-slate-100 hover:bg-slate-200 text-[#0F172A] font-bold rounded-xl transition-all text-sm"
                >
                  Acknowledgment Instructions
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 relative overflow-hidden rounded-2xl min-h-[320px] flex flex-col justify-end p-8">
              <div className="absolute inset-0">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent" />
              </div>
              <div className="relative z-10 text-white">
                <h3 className="font-bold text-lg mb-2 text-[#F59E0B]">
                  Important Acknowledgment Notice
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-3">
                  When updated acknowledgment forms are released, staff will
                  receive direct notifications with instructions to sign and
                  return confirmation of receipt to management or HR.
                </p>
                <div className="text-xs text-slate-400">
                  Questions regarding handbook clauses should be directed to
                  administrative support during standard hours.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Section 2: HR and Payroll Support ===== */}
      <section className="py-20 bg-slate-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-[#F59E0B] font-semibold tracking-widest uppercase text-xs">
              Staff Assistance
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] mt-2 mb-4">
              HR and Payroll Support
            </h2>
            <p className="text-slate-600 text-sm">
              For inquiries related to benefits, payroll adjustments, tax
              withholding, or employment verifications, please use the
              placeholder contacts below.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* HR Support Card */}
            <div className="bg-white rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between">
              <div className="absolute inset-0 opacity-15">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80"
                  alt="Office interior"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative z-10">
                <h3 className="text-lg font-bold text-[#0F172A] mb-4 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
                  Human Resources Department
                </h3>
                <div className="space-y-3 text-sm text-slate-600 mb-6">
                  <p>
                    <strong className="text-slate-900">HR Phone:</strong>{" "}
                    [Placeholder: 972-325-1598 Ext. HR]
                  </p>
                  <p>
                    <strong className="text-slate-900">HR Email:</strong>{" "}
                    [Placeholder: hr@onechh.com]
                  </p>
                </div>
                <div className="p-4 bg-slate-50 rounded-2xl text-xs text-slate-500">
                  <strong className="text-slate-700">Support Hours:</strong>{" "}
                  Monday through Friday, 9:00 a.m. – 5:00 p.m.
                </div>
              </div>
            </div>

            {/* Payroll Support Card */}
            <div className="bg-white rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between">
              <div className="absolute inset-0 opacity-15">
                <img
                  src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1000&q=80"
                  alt="Payroll and calculation"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative z-10">
                <h3 className="text-lg font-bold text-[#0F172A] mb-4 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
                  Payroll Support Desk
                </h3>
                <div className="space-y-3 text-sm text-slate-600 mb-6">
                  <p>
                    <strong className="text-slate-900">Payroll Phone:</strong>{" "}
                    [Placeholder: 972-325-1598 Ext. Payroll]
                  </p>
                  <p>
                    <strong className="text-slate-900">Payroll Email:</strong>{" "}
                    [Placeholder: payroll@onechh.com]
                  </p>
                </div>
                <div className="p-4 bg-slate-50 rounded-2xl text-xs text-slate-500">
                  <strong className="text-slate-700">Support Hours:</strong>{" "}
                  Monday through Friday, 9:00 a.m. – 5:00 p.m.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Section 3: HHAeXchange & EVV ===== */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12">
            <div className="max-w-3xl mb-8">
              <span className="text-[#F59E0B] font-semibold tracking-widest uppercase text-xs">
                Electronic Visit Verification
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] mt-2 mb-4">
                HHAeXchange Instructions & Login
              </h2>
              <p className="text-slate-600 text-sm">
                Accurate clock-in/clock-out tracking is required for regulatory
                compliance and timely payroll processing.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-slate-50 p-6 rounded-2xl">
                <h4 className="font-bold text-[#0F172A] mb-2 text-sm">
                  1. Clock-In / Out
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Use the HHAeXchange mobile app or telephony system at the
                  exact location of service delivery to record start and end
                  times.
                </p>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl">
                <h4 className="font-bold text-[#0F172A] mb-2 text-sm">
                  2. EVV Reminders
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Ensure GPS services are enabled on your device. Verify that
                  visit tasks and service codes are accurately marked before
                  submitting.
                </p>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl">
                <h4 className="font-bold text-[#0F172A] mb-2 text-sm">
                  3. Missed Visits & Errors
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  If you experience clock-in errors or miss a visit recording,
                  notify the administrative office immediately and submit a
                  manual adjustment form.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 p-6 bg-amber-50 rounded-2xl">
              <div>
                <h4 className="font-bold text-amber-900 text-sm">
                  Ready to access HHAeXchange?
                </h4>
                <p className="text-xs text-amber-800 mt-0.5">
                  Click below to open the official portal login or mobile
                  application guide.
                </p>
              </div>
              <a
                href="https://ha.hhaexchange.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#F59E0B] hover:bg-[#FBBF24] text-[#0F172A] font-bold rounded-xl transition-all text-xs uppercase tracking-wider"
              >
                HHAeXchange Login Portal
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Section 4: Incident Reporting & Compliance ===== */}
      <section id="reporting" className="py-20 bg-slate-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-[#F59E0B] font-semibold tracking-widest uppercase text-xs">
              Safety & Accountability
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] mt-2 mb-4">
              Incident Reporting & Compliance Protocols
            </h2>
            <p className="text-slate-600 text-sm">
              Staff must follow approved reporting channels for any incidents,
              safety hazards, or compliance concerns. Review the specific
              guidance below.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                title: "Patient Incidents",
                desc: "Report sudden changes in patient condition, falls, or unexpected events immediately to clinical supervision.",
                img: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=600&q=80",
              },
              {
                title: "Employee Injuries",
                desc: "Report any workplace injury sustained on duty to HR and management immediately for proper documentation and care.",
                img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80",
              },
              {
                title: "Safety Concerns",
                desc: "Identify and report environmental hazards in the home or workplace that may threaten client or staff well-being.",
                img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80",
              },
              {
                title: "Missed Visits",
                desc: "Document and report any unfulfilled or missed visit instances to administration to ensure continuity of care.",
                img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80",
              },
              {
                title: "Medication Concerns",
                desc: "Report discrepancies, missed doses, or adverse reactions involving medications immediately to clinical management.",
                img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80",
              },
              {
                title: "Abuse & Neglect",
                desc: "Suspected abuse, neglect, or exploitation must be reported immediately to state authorities and agency compliance officers.",
                img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80",
              },
              {
                title: "Privacy & Confidentiality",
                desc: "Report potential HIPAA breaches, unauthorized disclosures, or data security vulnerabilities promptly.",
                img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80",
              },
              {
                title: "Compliance Concerns",
                desc: "Voice concerns regarding billing accuracy, regulatory standards, or unethical practices without fear of retaliation.",
                img: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=600&q=80",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden flex flex-col justify-between"
              >
                <div className="h-36 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-[#0F172A] mb-2 text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Emergency & Urgent Notice Banner */}
          <div className="bg-[#0F172A] text-white rounded-3xl p-8 sm:p-10">
            <h3 className="text-lg font-bold mb-4 text-[#F59E0B]">
              Emergency vs. Routine Protocol Reference
            </h3>
            <div className="grid sm:grid-cols-3 gap-6 text-xs text-slate-300">
              <div className="bg-white/5 p-4 rounded-xl">
                <strong className="text-white block mb-1">
                  Medical Emergencies
                </strong>
                For any immediate life-threatening situation involving a patient
                or staff member, call <strong>911</strong> right away.
              </div>
              <div className="bg-white/5 p-4 rounded-xl">
                <strong className="text-white block mb-1">
                  Urgent Clinical Concerns
                </strong>
                Current patients have access to a 24/7 on-call extension for
                urgent clinical concerns. (Note: This is not a substitute for
                911).
              </div>
              <div className="bg-white/5 p-4 rounded-xl">
                <strong className="text-white block mb-1">
                  Routine & HR Matters
                </strong>
                Submit standard incident reports, HR queries, or payroll tickets
                during administrative hours (Monday–Friday, 9:00 a.m. – 5:00
                p.m.).
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Footer Call to Action ===== */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#0F172A] mb-3">
            Need Immediate Administrative Support?
          </h2>
          <p className="text-slate-600 text-sm mb-6">
            Our main office is available Monday through Friday during business
            hours.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="tel:9723251598"
              className="px-8 py-3.5 bg-[#F59E0B] hover:bg-[#FBBF24] text-[#0F172A] font-bold rounded-xl transition-all text-sm"
            >
              Call Main Office: 972-325-1598
            </a>
            <Link
              to="/contact"
              className="px-8 py-3.5 bg-slate-100 hover:bg-slate-200 text-[#0F172A] font-bold rounded-xl transition-all text-sm"
            >
              Contact Page
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
