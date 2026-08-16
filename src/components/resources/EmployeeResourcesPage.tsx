import {
  BookOpen,
  ShieldAlert,
  Users,
  Wallet,
  Clock,
  ShieldCheck,
  AlertTriangle,
  ExternalLink,
  HeartPulse,
  Briefcase,
  ClipboardList,
  Pill,
  Lock,
  Scale,
} from "lucide-react";

const escalationMatrix = [
  {
    label: "Life-threatening emergency",
    desc: "Call 911 immediately for severe life-threatening medical emergencies.",
    action: "Dial 911",
    tone: "emergency",
  },
  {
    label: "Urgent clinical need",
    desc: "Use the 24/7 on-call clinical extension for immediate patient needs.",
    action: "On-call line",
    tone: "urgent",
  },
  {
    label: "Routine incidents",
    desc: "Submit official logs through standard agency reporting workflows.",
    action: "Documentation portal",
    tone: "routine",
  },
  {
    label: "HR & payroll",
    desc: "Contact the administrative desk during standard operating hours.",
    action: "Mon–Fri, 9 AM–5 PM",
    tone: "routine",
  },
  {
    label: "Compliance",
    desc: "Report ethics, safety, or confidentiality concerns directly.",
    action: "Compliance officer",
    tone: "routine",
  },
];

const evvSteps = [
  {
    icon: Clock,
    title: "Clock in / out",
    desc: "Use the official HHAeXchange mobile application or telephony system at the exact location of service delivery.",
  },
  {
    icon: ShieldCheck,
    title: "EVV reminders",
    desc: "Keep device GPS services enabled. Confirm visit tasks and applicable service codes before final submission.",
  },
  {
    icon: AlertTriangle,
    title: "Missed visits",
    desc: "If a recording error or missed check-in happens, notify administration immediately and submit a manual adjustment ticket.",
  },
];

const incidentTypes = [
  {
    icon: HeartPulse,
    title: "Patient incidents",
    desc: "Report sudden clinical changes, falls, or unexpected adverse events immediately to clinical supervision.",
  },
  {
    icon: Briefcase,
    title: "Employee injuries",
    desc: "Report workplace injuries sustained on duty directly to HR and management immediately for proper documentation.",
  },
  {
    icon: ShieldAlert,
    title: "Safety hazards",
    desc: "Identify and report environmental risks in client homes or workplaces threatening staff or client well-being.",
  },
  {
    icon: ClipboardList,
    title: "Missed visits",
    desc: "Document and report any unfulfilled or missed visits immediately to ensure unbroken continuity of care.",
  },
  {
    icon: Pill,
    title: "Medication flags",
    desc: "Report discrepancies, missed doses, or adverse reactions involving medications instantly to clinical leadership.",
  },
  {
    icon: AlertTriangle,
    title: "Abuse & neglect",
    desc: "Suspected abuse, exploitation, or neglect must be reported instantly to state authorities and agency compliance.",
  },
  {
    icon: Lock,
    title: "Privacy & HIPAA",
    desc: "Report potential privacy breaches, unauthorized disclosures, or data vulnerabilities without delay.",
  },
  {
    icon: Scale,
    title: "Ethics & billing",
    desc: "Voice concerns regarding billing precision, regulatory standards, or unethical practices securely.",
  },
];

const toneStyles: Record<string, { bg: string; label: string }> = {
  emergency: { bg: "bg-[#3E1424]", label: "text-[#F3A8C0]" },
  urgent: { bg: "bg-[#3E2A14]", label: "text-[#F0C48A]" },
  routine: { bg: "bg-white/5", label: "text-white/80" },
};

export default function EmployeeResourcesPage() {
  return (
    <main className="min-h-screen bg-white text-[#3A4657] ohh-sans">
      {/* ===== Hero ===== */}
      <section className="relative overflow-hidden bg-[#0A2140] text-white pt-24 pb-20 lg:pt-28 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#E4B95A] font-semibold text-xs tracking-wider uppercase mb-8">
                <span className="w-2 h-2 rounded-full bg-[#E4B95A] animate-pulse" />
                Staff resource hub
              </div>

              <h1 className="ohh-serif text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.1] mb-6 tracking-tight">
                Employee <span className="text-[#E4B95A]">Resources</span>
              </h1>

              <p className="text-lg text-white/70 max-w-xl leading-relaxed mb-10">
                A single, friction-free place for One Community Home Health
                staff to review policies, access verification tools, and find
                the right administrative contact.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#handbook"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#E4B95A] hover:bg-[#D9A93F] text-[#0A2140] font-bold rounded-full transition-colors"
                >
                  <BookOpen size={16} />
                  Handbook & docs
                </a>
                <a
                  href="#reporting"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 hover:bg-white/15 text-white font-semibold rounded-full transition-colors"
                >
                  <ShieldAlert size={16} />
                  Protocols & safety
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white/5 rounded-3xl p-8 space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-widest text-[#E4B95A]">
                  Quick status
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-white/50">Home office</span>
                  <span className="text-white font-medium">Dallas HQ</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/50">EVV system</span>
                  <span className="text-emerald-400 font-medium">
                    HHAeXchange — online
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/50">Support level</span>
                  <span className="text-[#E4B95A] font-medium">Standard</span>
                </div>
              </div>
              <p className="text-white/40 text-xs leading-relaxed pt-2">
                Unauthorized distribution of internal clinical documents is
                strictly prohibited under HIPAA guidelines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Escalation Matrix Strip ===== */}
      <section className="bg-[#0A2140] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="ohh-serif text-lg sm:text-xl font-semibold text-white">
              Who to contact, and when
            </h2>
            <span className="text-white/40 text-xs font-medium hidden sm:inline">
              5 priority levels
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {escalationMatrix.map((item, idx) => {
              const tone = toneStyles[item.tone];
              return (
                <div
                  key={item.label}
                  className={`${tone.bg} p-6 rounded-2xl flex flex-col justify-between`}
                >
                  <div>
                    <span className="text-[11px] font-bold text-white/40 block mb-2">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`${tone.label} font-bold block mb-2 text-sm leading-snug`}
                    >
                      {item.label}
                    </span>
                    <p className="text-white/60 text-xs leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div
                    className={`${tone.label} mt-5 text-[11px] font-semibold uppercase tracking-wide`}
                  >
                    {item.action}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== Employee Handbook ===== */}
      <section id="handbook" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#C89B3C] bg-[#F3ECDC] px-3.5 py-1.5 rounded-full">
                Current handbook — 2026
              </span>
              <h2 className="ohh-serif text-3xl sm:text-4xl font-semibold text-[#0A2140]">
                Employee handbook
              </h2>
              <p className="text-[#5B6B7C] leading-relaxed">
                Review the latest agency policies, professional conduct code,
                benefits, and operational guidelines. All active field and
                office staff are required to stay familiar with current handbook
                clauses.
              </p>

              <div className="bg-[#FBF8F2] p-6 rounded-2xl space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-[#8A93A0]">Effective date</span>
                  <span className="text-[#0A2140] font-semibold">
                    January 1, 2026
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8A93A0]">Status</span>
                  <span className="text-[#C89B3C] font-semibold">
                    Mandatory acknowledgment
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => alert("Handbook download initialized.")}
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#0A2140] hover:bg-[#123258] text-white font-bold rounded-full transition-colors"
                >
                  Download PDF
                </button>
                <button
                  onClick={() =>
                    alert("Acknowledgment form instructions dispatched via HR.")
                  }
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#F3ECDC] hover:bg-[#EADFC2] text-[#0A2140] font-semibold rounded-full transition-colors"
                >
                  Acknowledgment info
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#0A2140] text-white p-10 rounded-3xl flex flex-col justify-between">
              <div>
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#E4B95A] bg-white/10 px-3 py-1.5 rounded-full mb-6">
                  Acknowledgment notice
                </span>
                <h3 className="ohh-serif text-2xl font-semibold mb-4">
                  Please confirm you've read the latest release
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  When updated acknowledgment releases are deployed, staff
                  receive a direct notification with instructions to sign and
                  return confirmation of receipt to management or HR.
                </p>
              </div>
              <p className="text-white/40 text-xs uppercase tracking-wide pt-8 mt-8">
                Direct inquiries to administration during operating hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== HR & Payroll ===== */}
      <section className="py-24 bg-[#FBF8F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#C89B3C] bg-white px-3.5 py-1.5 rounded-full mb-4">
              Direct support channels
            </span>
            <h2 className="ohh-serif text-3xl sm:text-4xl font-semibold text-[#0A2140] mb-4">
              HR & payroll support
            </h2>
            <p className="text-[#5B6B7C]">
              For inquiries regarding benefits adjustments, payroll queries, tax
              withholding, or employment verification, use the administrative
              desks below.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Users,
                title: "Human Resources desk",
                ext: "972-325-1598 ext. HR",
                email: "hr@onechh.com",
              },
              {
                icon: Wallet,
                title: "Payroll support desk",
                ext: "972-325-1598 ext. Payroll",
                email: "payroll@onechh.com",
              },
            ].map((desk) => (
              <div
                key={desk.title}
                className="bg-white p-8 sm:p-10 rounded-3xl flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-2xl bg-[#F3ECDC] text-[#0A2140] flex items-center justify-center mb-5">
                    <desk.icon size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-[#0A2140] mb-5">
                    {desk.title}
                  </h3>
                  <div className="space-y-3 text-sm mb-6">
                    <div className="flex justify-between">
                      <span className="text-[#8A93A0]">Phone</span>
                      <span className="text-[#0A2140] font-semibold">
                        {desk.ext}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#8A93A0]">Email</span>
                      <span className="text-[#C89B3C] font-medium">
                        {desk.email}
                      </span>
                    </div>
                  </div>
                  <div className="p-4 bg-[#FBF8F2] rounded-full text-xs text-[#5B6B7C]">
                    <span className="text-[#8A93A0] block mb-1">
                      Operating window
                    </span>
                    Monday – Friday | 9:00 AM – 5:00 PM CST
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HHAeXchange & EVV ===== */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0A2140] p-10 sm:p-16 rounded-3xl">
            <div className="max-w-3xl mb-12">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#E4B95A] bg-white/10 px-3.5 py-1.5 rounded-full mb-4">
                EVV compliance
              </span>
              <h2 className="ohh-serif text-3xl sm:text-4xl font-semibold text-white mb-4">
                HHAeXchange instructions & login
              </h2>
              <p className="text-white/60 text-sm leading-relaxed">
                Accurate electronic visit verification (EVV) clock-in and
                clock-out tracking is required for regulatory compliance and
                timely payroll disbursement.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {evvSteps.map((step) => (
                <div key={step.title} className="bg-white/5 p-8 rounded-2xl">
                  <div className="w-10 h-10 rounded-full bg-white/10 text-[#E4B95A] flex items-center justify-center mb-4">
                    <step.icon size={18} />
                  </div>
                  <h4 className="font-semibold text-white mb-2 text-sm">
                    {step.title}
                  </h4>
                  <p className="text-xs text-white/60 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-6 p-8 bg-[#E4B95A]/10 rounded-2xl">
              <div>
                <h4 className="font-semibold text-white text-base">
                  Ready to access the HHAeXchange portal?
                </h4>
                <p className="text-xs text-white/60 mt-1">
                  Launch the official portal login or mobile application
                  documentation guide.
                </p>
              </div>
              <a
                href="https://ha.hhaexchange.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#E4B95A] hover:bg-[#D9A93F] text-[#0A2140] font-bold rounded-full transition-colors text-sm shrink-0"
              >
                Launch portal
                <ExternalLink size={15} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Incident Reporting & Compliance ===== */}
      <section id="reporting" className="py-24 bg-[#FBF8F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#C89B3C] bg-white px-3.5 py-1.5 rounded-full mb-4">
              Safety & accountability
            </span>
            <h2 className="ohh-serif text-3xl sm:text-4xl font-semibold text-[#0A2140] mb-4">
              Incident reporting & protocols
            </h2>
            <p className="text-[#5B6B7C]">
              Personnel should follow the established reporting channels below
              for all safety incidents, hazards, or compliance flags.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {incidentTypes.map((item) => (
              <div
                key={item.title}
                className="bg-white p-7 rounded-2xl hover:bg-white/70 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-[#F3ECDC] text-[#0A2140] flex items-center justify-center mb-4">
                  <item.icon size={18} />
                </div>
                <h4 className="font-semibold text-[#0A2140] mb-2 text-sm">
                  {item.title}
                </h4>
                <p className="text-xs text-[#5B6B7C] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Emergency Notice Banner */}
          <div className="bg-[#0A2140] text-white p-10 sm:p-12 rounded-3xl">
            <h3 className="ohh-serif text-lg font-semibold mb-6 text-[#E4B95A]">
              Emergency vs. routine protocol reference
            </h3>
            <div className="grid sm:grid-cols-3 gap-6 text-sm">
              <div className="bg-[#3E1424] p-6 rounded-2xl space-y-2">
                <strong className="text-[#F3A8C0] block text-sm font-semibold">
                  Medical emergencies
                </strong>
                <p className="text-white/60 leading-relaxed text-xs">
                  For any immediate life-threatening situation involving a
                  patient or staff member, dial{" "}
                  <strong className="text-white">911</strong> immediately.
                </p>
              </div>
              <div className="bg-[#3E2A14] p-6 rounded-2xl space-y-2">
                <strong className="text-[#F0C48A] block text-sm font-semibold">
                  Urgent clinical needs
                </strong>
                <p className="text-white/60 leading-relaxed text-xs">
                  Active patients maintain access to a 24/7 on-call clinical
                  extension. This does not replace 911.
                </p>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl space-y-2">
                <strong className="text-white block text-sm font-semibold">
                  Routine & HR matters
                </strong>
                <p className="text-white/60 leading-relaxed text-xs">
                  Submit standard incident logs, HR queries, or tickets during
                  regular operating hours (Monday–Friday, 9 AM–5 PM).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
