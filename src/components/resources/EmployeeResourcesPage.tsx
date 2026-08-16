export default function EmployeeResourcesPage() {
  return (
    <main className="min-h-screen bg-[#070B14] text-slate-100 selection:bg-yellow-500 selection:text-slate-950">
      {/* ===== Brutalist Hero Section with Asymmetric Grid & Marquee vibe ===== */}
      <section className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-32">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-yellow-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-slate-900/80 rounded-lg text-yellow-400 font-mono text-xs uppercase tracking-widest mb-8">
                <span className="w-2 h-2 bg-yellow-400 animate-ping rounded-full" />
                ONE_COMMUNITY_STAFF_HUB_2026
              </div>

              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.95] mb-8">
                Employee <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-500">
                  Resources
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-400 font-light max-w-2xl leading-relaxed mb-10">
                Direct tactical access for One Community Home Health personnel.
                Review protocols, access verification tools, and administrative
                routing without friction.
              </p>

              <div className="flex flex-wrap gap-4 font-mono text-sm">
                <a
                  href="#handbook"
                  className="px-8 py-5 bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-extrabold uppercase tracking-wider rounded-lg transition-all transform hover:-translate-y-0.5"
                >
                  - Handbook & Docs
                </a>
                <a
                  href="#reporting"
                  className="px-8 py-5 bg-slate-900 hover:bg-slate-800 text-slate-200 font-bold uppercase tracking-wider rounded-lg transition-all"
                >
                  - Protocols & Safety
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 bg-slate-900/50 p-8 rounded-xl font-mono text-xs space-y-4 backdrop-blur-md">
              <div className="text-yellow-400 font-bold uppercase tracking-widest pb-3 border-b border-slate-800 flex justify-between items-center">
                <span>System Status</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
              </div>
              <div className="text-slate-400 space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-500">Node:</span>
                  <span className="text-slate-200">Dallas HQ-01</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">EVV Engine:</span>
                  <span className="text-emerald-400">HHAeXchange Online</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Protocol Level:</span>
                  <span className="text-yellow-400">Standard Active</span>
                </div>
              </div>
              <div className="pt-4 border-t border-slate-800 text-slate-500 text-[11px]">
                Unauthorized distribution of internal clinical documents is
                strictly prohibited under HIPAA guidelines.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Priority Escalation Clarity Strip (Asymmetric Bento Flow) ===== */}
      <section className="bg-slate-950 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xs uppercase font-mono tracking-widest text-yellow-400 font-bold">
              [01] Incident & Escalation Routing Matrix
            </h2>
            <span className="text-slate-600 font-mono text-xs">
              Priority Index 1-5
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 font-mono text-xs">
            <div className="bg-red-950/20 p-6 rounded-lg flex flex-col justify-between group hover:bg-red-950/40 transition-colors">
              <div>
                <span className="text-red-400 font-bold block mb-3 text-sm tracking-wide">
                  01 - LIFE EMERGENCY
                </span>
                <p className="text-slate-400 font-sans text-xs leading-relaxed">
                  Call 911 immediately for severe life-threatening medical
                  emergencies.
                </p>
              </div>
              <div className="mt-6 text-[10px] text-red-400/70 uppercase">
                Action: Dial 911
              </div>
            </div>

            <div className="bg-yellow-950/20 p-6 rounded-lg flex flex-col justify-between group hover:bg-yellow-950/40 transition-colors">
              <div>
                <span className="text-yellow-400 font-bold block mb-3 text-sm tracking-wide">
                  02 - URGENT CLINICAL
                </span>
                <p className="text-slate-400 font-sans text-xs leading-relaxed">
                  Utilize the 24/7 on-call clinical extension for immediate
                  patient needs.
                </p>
              </div>
              <div className="mt-6 text-[10px] text-yellow-400/70 uppercase">
                Action: On-Call Line
              </div>
            </div>

            <div className="bg-slate-900/60 p-6 rounded-lg flex flex-col justify-between group hover:bg-slate-900 transition-colors">
              <div>
                <span className="text-slate-200 font-bold block mb-3 text-sm tracking-wide">
                  03 - ROUTINE INCIDENTS
                </span>
                <p className="text-slate-400 font-sans text-xs leading-relaxed">
                  Submit official logs through standard agency reporting
                  workflows.
                </p>
              </div>
              <div className="mt-6 text-[10px] text-slate-500 uppercase">
                Action: Documentation Portal
              </div>
            </div>

            <div className="bg-slate-900/60 p-6 rounded-lg flex flex-col justify-between group hover:bg-slate-900 transition-colors">
              <div>
                <span className="text-slate-200 font-bold block mb-3 text-sm tracking-wide">
                  04 - HR & PAYROLL
                </span>
                <p className="text-slate-400 font-sans text-xs leading-relaxed">
                  Contact administrative desk during standard operating hours.
                </p>
              </div>
              <div className="mt-6 text-[10px] text-slate-500 uppercase">
                Action: Mon-Fri, 9AM-5PM
              </div>
            </div>

            <div className="bg-slate-900/60 p-6 rounded-lg flex flex-col justify-between group hover:bg-slate-900 transition-colors">
              <div>
                <span className="text-slate-200 font-bold block mb-3 text-sm tracking-wide">
                  05 - COMPLIANCE
                </span>
                <p className="text-slate-400 font-sans text-xs leading-relaxed">
                  Report ethics, safety, or confidentiality concerns directly.
                </p>
              </div>
              <div className="mt-6 text-[10px] text-slate-500 uppercase">
                Action: Compliance Officer
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Section 1: Employee Handbook ===== */}
      <section id="handbook" className="py-24 bg-[#0B101D] text-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-block font-mono text-yellow-400 text-xs uppercase tracking-widest bg-yellow-400/10 px-3 py-1 rounded-lg">
                DOCUMENTATION_HUB - v2026.1
              </div>
              <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-white">
                Employee Handbook
              </h2>
              <p className="text-slate-400 text-base leading-relaxed font-light">
                Review the latest agency policies, professional conduct code,
                benefits matrix, and operational guidelines. All active field
                and office staff are required to maintain familiarity with
                current handbook clauses.
              </p>

              <div className="bg-[#05080F] p-8 rounded-xl space-y-4 font-mono text-sm">
                <div className="flex justify-between pb-3 border-b border-slate-800">
                  <span className="text-slate-500">Effective Date:</span>
                  <span className="text-white font-bold">January 1, 2026</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Compliance Status:</span>
                  <span className="text-yellow-400 font-bold">
                    Mandatory Acknowledgment
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-4 font-mono text-sm">
                <button
                  onClick={() => alert("Handbook download initialized.")}
                  className="px-8 py-4 bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-extrabold uppercase rounded-lg transition-all"
                >
                  Download PDF
                </button>
                <button
                  onClick={() =>
                    alert("Acknowledgment form instructions dispatched via HR.")
                  }
                  className="px-8 py-4 bg-[#05080F] hover:bg-slate-900 text-white font-bold uppercase rounded-lg transition-all"
                >
                  Acknowledgment Info
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 bg-gradient-to-br from-yellow-500 to-yellow-600 text-slate-950 p-10 rounded-2xl flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest font-bold bg-slate-950/10 px-3 py-1 rounded-lg inline-block mb-6">
                  NOTICE - ACKNOWLEDGMENT
                </span>
                <h3 className="text-2xl font-black uppercase tracking-tight mb-4">
                  Important Confirmation Notice
                </h3>
                <p className="text-sm leading-relaxed font-medium mb-8">
                  When updated acknowledgment releases are deployed, staff will
                  receive direct notifications with instructions to sign and
                  return confirmation of receipt to management or HR
                  immediately.
                </p>
              </div>
              <div className="font-mono text-xs uppercase tracking-wider text-slate-950/70 pt-6 border-t border-slate-950/20">
                Direct inquiries to administration during operating hours.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Section 2: HR and Payroll Support (Clean White Transition Section) ===== */}
      <section className="py-24 bg-white text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <div className="inline-block font-mono text-yellow-700 text-xs uppercase tracking-widest bg-yellow-100 px-3 py-1 rounded-lg mb-4">
              SUPPORT_CHANNELS - DIRECT
            </div>
            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-slate-950 mb-6">
              HR & Payroll Support
            </h2>
            <p className="text-slate-600 text-base font-light">
              For inquiries regarding benefits adjustments, payroll queries, tax
              withholding, or employment verification, utilize the designated
              administrative desks below.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 font-mono">
            {/* HR Support Card */}
            <div className="bg-slate-50 p-10 rounded-2xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200">
                  <h3 className="text-lg font-bold text-slate-950 uppercase tracking-wider">
                    Human Resources Desk
                  </h3>
                  <span className="w-2.5 h-2.5 bg-yellow-500 rounded-full" />
                </div>
                <div className="space-y-4 text-sm text-slate-700 mb-8">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Phone Ext:</span>
                    <span className="text-slate-900 font-bold">
                      [972-325-1598 xHR]
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Direct Email:</span>
                    <span className="text-yellow-600 font-medium">
                      hr@onechh.com
                    </span>
                  </div>
                </div>
                <div className="p-4 bg-slate-100 rounded-lg text-xs text-slate-600">
                  <span className="text-slate-400 block mb-1">
                    Operating Window:
                  </span>
                  Monday – Friday | 9:00 AM – 5:00 PM CST
                </div>
              </div>
            </div>

            {/* Payroll Support Card */}
            <div className="bg-slate-50 p-10 rounded-2xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200">
                  <h3 className="text-lg font-bold text-slate-950 uppercase tracking-wider">
                    Payroll Support Desk
                  </h3>
                  <span className="w-2.5 h-2.5 bg-yellow-500 rounded-full" />
                </div>
                <div className="space-y-4 text-sm text-slate-700 mb-8">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Phone Ext:</span>
                    <span className="text-slate-900 font-bold">
                      [972-325-1598 xPayroll]
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Direct Email:</span>
                    <span className="text-yellow-600 font-medium">
                      payroll@onechh.com
                    </span>
                  </div>
                </div>
                <div className="p-4 bg-slate-100 rounded-lg text-xs text-slate-600">
                  <span className="text-slate-400 block mb-1">
                    Operating Window:
                  </span>
                  Monday – Friday | 9:00 AM – 5:00 PM CST
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Section 3: HHAeXchange & EVV ===== */}
      <section className="py-24 bg-[#070B14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 p-10 sm:p-16 rounded-2xl">
            <div className="max-w-3xl mb-12">
              <div className="inline-block font-mono text-yellow-400 text-xs uppercase tracking-widest bg-yellow-400/10 px-3 py-1 rounded-lg mb-4">
                COMPLIANCE - EVV PROTOCOL
              </div>
              <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white mb-4">
                HHAeXchange Instructions & Login
              </h2>
              <p className="text-slate-400 text-sm font-light">
                Precise electronic visit verification (EVV) clock-in and
                clock-out tracking is strictly required for regulatory
                compliance and timely payroll disbursement.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12 font-mono">
              <div className="bg-slate-950 p-8 rounded-xl">
                <span className="text-yellow-400 text-xs font-bold block mb-3">
                  01 - TRACKING
                </span>
                <h4 className="font-bold text-white mb-2 text-sm uppercase">
                  Clock-In / Out
                </h4>
                <p className="text-xs text-slate-400 font-sans leading-relaxed">
                  Use the official HHAeXchange mobile application or telephony
                  system at the exact geographic location of service delivery.
                </p>
              </div>

              <div className="bg-slate-950 p-8 rounded-xl">
                <span className="text-yellow-400 text-xs font-bold block mb-3">
                  02 - VERIFY
                </span>
                <h4 className="font-bold text-white mb-2 text-sm uppercase">
                  EVV Reminders
                </h4>
                <p className="text-xs text-slate-400 font-sans leading-relaxed">
                  Ensure device GPS services remain enabled. Confirm visit tasks
                  and applicable service codes before final submission.
                </p>
              </div>

              <div className="bg-slate-950 p-8 rounded-xl">
                <span className="text-yellow-400 text-xs font-bold block mb-3">
                  03 - CORRECTION
                </span>
                <h4 className="font-bold text-white mb-2 text-sm uppercase">
                  Missed Visits
                </h4>
                <p className="text-xs text-slate-400 font-sans leading-relaxed">
                  In case of recording errors or missed check-ins, notify
                  administration immediately and submit manual adjustment
                  tickets.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-6 p-8 bg-yellow-500/10 rounded-xl border-l-4 border-yellow-400">
              <div>
                <h4 className="font-bold text-white text-base uppercase font-mono tracking-tight">
                  Ready to access HHAeXchange Portal?
                </h4>
                <p className="text-xs text-slate-400 font-sans mt-1">
                  Launch the official portal login or mobile application
                  documentation guide.
                </p>
              </div>
              <a
                href="https://ha.hhaexchange.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-extrabold uppercase font-mono text-xs tracking-wider rounded-lg transition-all"
              >
                Launch Portal →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Section 4: Incident Reporting & Compliance (White Section to Blend) ===== */}
      <section id="reporting" className="py-24 bg-white text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <div className="inline-block font-mono text-yellow-700 text-xs uppercase tracking-widest bg-yellow-100 px-3 py-1 rounded-lg mb-4">
              SAFETY - ACCOUNTABILITY MATRIX
            </div>
            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-slate-950 mb-4">
              Incident Reporting & Protocols
            </h2>
            <p className="text-slate-600 text-base font-light">
              Personnel must strictly adhere to established reporting channels
              for all safety incidents, hazards, or compliance flags. Review the
              protocol matrix below.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                title: "Patient Incidents",
                desc: "Report sudden clinical changes, falls, or unexpected adverse events immediately to clinical supervision.",
              },
              {
                title: "Employee Injuries",
                desc: "Report workplace injuries sustained on duty directly to HR and management immediately for proper documentation.",
              },
              {
                title: "Safety Hazards",
                desc: "Identify and report environmental risks in client homes or workplaces threatening staff or client well-being.",
              },
              {
                title: "Missed Visits",
                desc: "Document and report any unfulfilled or missed visits immediately to ensure unbroken continuity of care.",
              },
              {
                title: "Medication Flags",
                desc: "Report discrepancies, missed doses, or adverse reactions involving medications instantly to clinical leadership.",
              },
              {
                title: "Abuse & Neglect",
                desc: "Suspected abuse, exploitation, or neglect must be reported instantly to state authorities and agency compliance.",
              },
              {
                title: "Privacy & HIPAA",
                desc: "Report potential privacy breaches, unauthorized disclosures, or data vulnerabilities without delay.",
              },
              {
                title: "Ethics & Billing",
                desc: "Voice concerns regarding billing precision, regulatory standards, or unethical practices securely.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-50 p-8 rounded-xl flex flex-col justify-between hover:bg-slate-100/80 transition-colors"
              >
                <div>
                  <span className="font-mono text-xs text-yellow-700 block mb-2 font-bold">
                    [REF_0{idx + 1}]
                  </span>
                  <h4 className="font-bold text-slate-950 mb-3 text-base uppercase tracking-tight">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-600 font-sans leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Emergency Notice Banner */}
          <div className="bg-slate-950 text-slate-100 p-10 sm:p-12 rounded-2xl font-mono">
            <h3 className="text-lg font-bold mb-6 text-yellow-400 uppercase tracking-widest">
              - Emergency vs. Routine Protocol Reference
            </h3>
            <div className="grid sm:grid-cols-3 gap-8 text-xs text-slate-300">
              <div className="bg-slate-900 p-6 rounded-xl space-y-2">
                <strong className="text-red-400 block text-sm uppercase font-bold">
                  Medical Emergencies
                </strong>
                <p className="font-sans text-slate-400 leading-relaxed">
                  For any immediate life-threatening situation involving a
                  patient or staff member, dial{" "}
                  <strong className="text-white">911</strong> immediately.
                </p>
              </div>
              <div className="bg-slate-900 p-6 rounded-xl space-y-2">
                <strong className="text-yellow-400 block text-sm uppercase font-bold">
                  Urgent Clinical Needs
                </strong>
                <p className="font-sans text-slate-400 leading-relaxed">
                  Active patients maintain access to a 24/7 on-call clinical
                  extension. (Note: This does not replace 911).
                </p>
              </div>
              <div className="bg-slate-900 p-6 rounded-xl space-y-2">
                <strong className="text-white block text-sm uppercase font-bold">
                  Routine & HR Matters
                </strong>
                <p className="font-sans text-slate-400 leading-relaxed">
                  Submit standard incident logs, HR queries, or tickets during
                  regular operating hours (Monday–Friday, 9:00 AM – 5:00 PM).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
