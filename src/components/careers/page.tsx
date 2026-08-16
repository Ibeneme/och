import { Link } from "react-router-dom";
import { Phone, ArrowRight, Sparkles } from "lucide-react";

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-[#FAFAF8] text-slate-800">
      {/* ===== Utility / Announcement Bar ===== */}
      <div className="bg-[#0F172A] text-white text-xs sm:text-sm py-3 px-4 text-center tracking-wide font-medium">
        <p className="flex items-center justify-center gap-2">
          <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
          Now accepting applications for qualified clinical and support team
          members across the Dallas–Fort Worth Metroplex.
        </p>
      </div>

      {/* ===== Hero ===== */}
      <section className="relative bg-[#0F172A] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-15" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-yellow-400 font-bold text-xs tracking-wider uppercase mb-6">
              <Sparkles size={14} />
              Careers at One Community Home Health
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-black leading-[1.15] mb-6 tracking-tight">
              Join a Team That Helps People{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">
                Stay Where They Belong
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-200 mb-10 leading-relaxed max-w-2xl font-medium">
              One Community Home Health is a DBA of JACOP Healthcare Services,
              Inc., a nurse-founded organization serving clients since 2010. We
              deliver compassionate, professional care in the comfort of home
              and are looking for dedicated people who share that commitment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/careers/cna-home-health-aide-application"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-yellow-400 hover:bg-yellow-300 text-[#0F172A] font-extrabold rounded-2xl transition-all"
              >
                <span>Join Our CNA / HHA Talent Network</span>
                <ArrowRight size={18} />
              </Link>
              <a
                href="tel:9723251598"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/15 text-white font-bold rounded-2xl transition-all backdrop-blur-sm"
              >
                <Phone size={18} />
                <span>Call 972-325-1598</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Trust Strip – Advanced ===== */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {[
              {
                number: "01",
                label: "Nurse-Founded Leadership",
                sub: "Clinical Excellence",
              },
              {
                number: "02",
                label: "Serving Clients Since 2010",
                sub: "Trusted Track Record",
              },
              {
                number: "03",
                label: "Individualized Care",
                sub: "Person-Centered Approach",
              },
              {
                number: "04",
                label: "Dignity & Independence",
                sub: "At-Home Living",
              },
            ].map((item) => (
              <div key={item.number} className="flex flex-col gap-2">
                <span className="text-yellow-500 font-black text-xs tracking-[0.2em] uppercase">
                  {item.number}
                </span>
                <span className="text-xs uppercase tracking-wider text-slate-500 font-bold">
                  {item.sub}
                </span>
                <span className="text-base font-black text-[#0F172A] leading-snug">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Why Work With Us – Advanced ===== */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <span className="text-xs font-black uppercase tracking-widest text-yellow-500 bg-yellow-500/10 px-3.5 py-1.5 rounded-full">
              Why Join Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black text-[#0F172A] tracking-tight">
              Why Work With One Community Home Health
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              We believe home health care is personal. Every visit is built on
              trust, clinical excellence, clear communication, and respect for
              the people we serve.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {[
              {
                title: "Compassion & Dignity",
                desc: "Every interaction is grounded in respect for the patient and family.",
                image:
                  "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1000&q=80",
                alt: "Caregiver holding patient's hand",
              },
              {
                title: "Clinical Accountability",
                desc: "Nurse-led standards and professional growth opportunities.",
                image:
                  "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1000&q=80",
                alt: "Nurse reviewing care plan",
              },
              {
                title: "Reliable Support",
                desc: "We support patients, families, caregivers—and our team members.",
                image:
                  "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1000&q=80",
                alt: "Team supporting a family",
              },
              {
                title: "Nurse-Founded Culture",
                desc: "Led by Angela Ananti, BSN, RN, with more than two decades of nursing experience.",
                image:
                  "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1000&q=80",
                alt: "Founder and leadership team",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group relative rounded-3xl overflow-hidden aspect-[16/10] min-h-[280px]"
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/95 via-[#0F172A]/50 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-7 lg:p-9">
                  <div className="w-10 h-1 bg-yellow-400 rounded-full mb-4" />
                  <h3 className="font-extrabold text-white text-xl lg:text-2xl mb-2 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-slate-200 leading-relaxed font-medium text-sm lg:text-base max-w-md">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-14 text-center text-slate-600 max-w-2xl mx-auto text-base leading-relaxed font-medium bg-white p-6 rounded-2xl">
            Our founder established JACOP Healthcare Services, Inc. in 2010.
            That same commitment to quality and person-centered care continues
            under the One Community Home Health brand.
          </p>
        </div>
      </section>

      {/* ===== Current Opportunities – Advanced ===== */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <span className="text-xs font-black uppercase tracking-widest text-yellow-500 bg-yellow-500/10 px-3.5 py-1.5 rounded-full">
                Open Roles
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#0F172A] mt-4 mb-4 tracking-tight">
                Current Opportunities
              </h2>
              <p className="text-lg text-slate-600 font-medium">
                We hire for a range of clinical and support roles as needs
                arise. Open positions change based on patient needs and
                staffing.
              </p>
            </div>
            <Link
              to="/careers/cna-home-health-aide-application"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#0F172A] hover:text-yellow-600 transition-colors shrink-0"
            >
              View CNA / HHA Network
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                role: "Registered Nurses (RN)",
                desc: "Skilled nursing visits, care coordination & clinical leadership",
                tag: "Clinical",
              },
              {
                role: "Licensed Vocational / Practical Nurses (LVN/LPN)",
                desc: "Hands-on clinical care under RN supervision",
                tag: "Clinical",
              },
              {
                role: "Physical Therapists",
                desc: "Mobility, strength & functional recovery in the home",
                tag: "Therapy",
              },
              {
                role: "Occupational Therapists",
                desc: "Daily living skills & adaptive strategies",
                tag: "Therapy",
              },
              {
                role: "Speech-Language Pathologists",
                desc: "Communication, swallowing & cognitive support",
                tag: "Therapy",
              },
              {
                role: "Medical Social Workers",
                desc: "Psychosocial support & resource coordination",
                tag: "Support",
              },
              {
                role: "Home Health Aides / CNAs",
                desc: "Personal care, companionship & daily assistance",
                tag: "Care",
              },
              {
                role: "Intake & Office Support",
                desc: "Patient onboarding & referral management",
                tag: "Operations",
              },
              {
                role: "Administrative Roles",
                desc: "Operations, scheduling & team coordination",
                tag: "Operations",
              },
            ].map((item) => (
              <div
                key={item.role}
                className="group relative bg-[#FAFAF8] rounded-2xl p-6 lg:p-7 transition-all duration-300 hover:bg-[#F5F5F0] flex flex-col justify-between min-h-[180px]"
              >
                <div>
                  <span className="inline-block text-[10px] font-black uppercase tracking-widest text-yellow-600 bg-yellow-400/15 px-2.5 py-1 rounded-md mb-4">
                    {item.tag}
                  </span>
                  <h3 className="font-extrabold text-[#0F172A] text-lg lg:text-xl mb-2 leading-snug group-hover:text-yellow-700 transition-colors">
                    {item.role}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm font-medium">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#0F172A]">
                  <span>Inquire / Apply</span>
                  <span className="text-yellow-500 transition-transform duration-300 group-hover:translate-x-1.5">
                    →
                  </span>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-12 text-slate-600 text-base max-w-3xl font-medium bg-yellow-50/60 p-6 rounded-2xl">
            Qualified candidates are encouraged to apply through our CNA / Home
            Health Aide Talent Network or contact us directly about other roles.
          </p>
        </div>
      </section>

      {/* ===== Primary CTA – CNA Talent Network ===== */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0F172A] rounded-3xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="p-10 sm:p-12 lg:p-14 text-white flex flex-col justify-between">
                <div>
                  <span className="inline-block text-yellow-400 font-extrabold text-xs uppercase tracking-[0.15em] mb-4 bg-white/10 px-3 py-1 rounded-full">
                    Year-Round Applications
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-black mb-5 tracking-tight leading-tight">
                    Join Our CNA & Home Health Aide Talent Network
                  </h2>
                  <p className="text-slate-300 mb-8 leading-relaxed font-medium">
                    One Community Home Health accepts ongoing applications from
                    qualified CNAs and home health aides. Submitting an
                    application does{" "}
                    <strong className="text-white font-extrabold underline">
                      not
                    </strong>{" "}
                    mean a current opening exists. Qualified applicants may be
                    contacted when a patient-care assignment becomes available
                    that matches their qualifications, availability, and service
                    area.
                  </p>
                  <ul className="space-y-3.5 text-slate-200 mb-10 text-sm font-semibold">
                    {[
                      "Applications retained for up to two years",
                      "Routed to info@onechh.com",
                      "Background check only after a matching opportunity & authorization",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="w-5 h-5 rounded-full bg-yellow-400 text-[#0F172A] flex items-center justify-center flex-shrink-0 mt-0.5 font-black text-xs">
                          ✓
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <Link
                    to="/careers/cna-home-health-aide-application"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-yellow-400 hover:bg-yellow-300 text-[#0F172A] font-extrabold rounded-2xl transition-all"
                  >
                    <span>Apply to the Talent Network</span>
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>

              <div className="relative min-h-[320px] lg:min-h-full">
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80"
                  alt="CNA providing home care"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-[#0F172A]/30 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <p className="text-white font-extrabold text-lg">
                    CNA / Home Health Aide
                    <br />
                    <span className="text-yellow-400 text-sm font-bold uppercase tracking-wider">
                      Talent Network
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Benefits ===== */}
      <section className="py-20 lg:py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-black tracking-widest uppercase text-yellow-500 bg-yellow-500/10 px-3.5 py-1.5 rounded-full">
                What We Offer
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#0F172A] tracking-tight">
                Benefits & Schedule
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed font-medium">
                We offer competitive compensation and a supportive work
                environment focused on patient care and professional respect.
                Specific benefits and schedule expectations are discussed during
                the hiring process once a matching opportunity is identified.
              </p>
              <div className="pt-4">
                <a
                  href="tel:9723251598"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#0F172A] hover:bg-[#1E293B] text-white font-bold rounded-xl transition-all"
                >
                  <Phone size={16} />
                  <span>Inquire About Openings</span>
                </a>
              </div>
            </div>
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
              <div className="bg-[#FAFAF8] rounded-3xl p-8">
                <div className="w-12 h-12 rounded-2xl bg-yellow-100 text-yellow-600 flex items-center justify-center font-bold text-xl mb-5">
                  💼
                </div>
                <h3 className="text-xl font-extrabold text-[#0F172A] mb-2">
                  Competitive Compensation
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed font-medium">
                  Fair, dependable pay structured around experience, role
                  requirements, and assignment type.
                </p>
              </div>
              <div className="bg-[#FAFAF8] rounded-3xl p-8 sm:mt-8">
                <div className="w-12 h-12 rounded-2xl bg-yellow-100 text-yellow-600 flex items-center justify-center font-bold text-xl mb-5">
                  🕒
                </div>
                <h3 className="text-xl font-extrabold text-[#0F172A] mb-2">
                  Flexible Scheduling
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed font-medium">
                  Carefully tailored schedules matching patient care demands
                  with your personal availability and region.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== EEO + Employee Resources ===== */}
      <section className="py-20 lg:py-28 bg-[#FAFAF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-black text-[#0F172A] mb-4 tracking-tight">
                  Equal Employment Opportunity
                </h2>
                <p className="text-slate-600 leading-relaxed mb-6 text-sm sm:text-base font-medium">
                  One Community Home Health / JACOP Healthcare Services, Inc. is
                  an equal opportunity employer. We are committed to providing
                  equal employment opportunities to all qualified applicants and
                  employees without regard to race, color, religion, sex,
                  national origin, age, disability, veteran status, or any other
                  protected characteristic.
                </p>
              </div>
              <div className="pt-4">
                <p className="text-slate-600 text-sm font-medium">
                  Applicants needing reasonable accommodation may contact us at{" "}
                  <a
                    href="mailto:info@onechh.com"
                    className="text-[#0F172A] font-bold underline underline-offset-2 hover:text-yellow-600 transition-colors"
                  >
                    info@onechh.com
                  </a>{" "}
                  or{" "}
                  <a
                    href="tel:9723251598"
                    className="text-[#0F172A] font-bold underline underline-offset-2 hover:text-yellow-600 transition-colors"
                  >
                    972-325-1598
                  </a>
                  .
                </p>
              </div>
            </div>

            <div className="bg-yellow-50/70 rounded-3xl p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <span className="inline-block px-3.5 py-1 bg-yellow-100 text-yellow-800 text-xs font-extrabold rounded-full mb-4">
                  Staff Portal
                </span>
                <h3 className="text-2xl font-black text-[#0F172A] mb-3">
                  Already part of our team?
                </h3>
                <p className="text-slate-600 mb-8 leading-relaxed text-sm sm:text-base font-medium">
                  Visit the Employee Resources page for the employee handbook,
                  HHAeXchange clock-in/EVV access, HR & payroll support, and
                  incident-reporting instructions.
                </p>
              </div>
              <div>
                <Link
                  to="/employee-resources"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#0F172A] hover:bg-[#1E293B] text-white font-bold rounded-xl transition-all"
                >
                  <span>Go to Employee Resources</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
