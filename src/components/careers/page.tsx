import { Link } from "react-router-dom";

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-[#FAFAF8] text-slate-800">
      {/* ===== Utility / Announcement Bar ===== */}
      <div className="bg-[#0F172A] text-white text-sm py-3 px-4 text-center tracking-wide">
        <p>
          Now accepting applications for qualified clinical and support team
          members across the Dallas–Fort Worth Metroplex.
        </p>
      </div>

      {/* ===== Hero ===== */}
      <section className="relative bg-[#0F172A] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-15" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <p className="text-[#F59E0B] font-medium tracking-[0.15em] uppercase text-xs mb-5">
              Careers at One Community Home Health
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold leading-[1.15] mb-6 tracking-tight">
              Join a Team That Helps People{" "}
              <span className="text-slate-300">Stay Where They Belong</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
              One Community Home Health is a DBA of JACOP Healthcare Services,
              Inc., a nurse-founded organization serving clients since 2010. We
              deliver compassionate, professional care in the comfort of home
              and are looking for dedicated people who share that commitment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/careers/cna-home-health-aide-application"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#F59E0B] hover:bg-[#FBBF24] text-[#0F172A] font-semibold rounded-full transition-all "
              >
                Join Our CNA / Home Health Aide Talent Network
              </Link>
              <a
                href="tel:9723251598"
                className="inline-flex items-center justify-center px-8 py-4 border border-white/30 hover:bg-white/10 text-white font-semibold rounded-full transition-all"
              >
                Call 972-325-1598
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Trust Strip ===== */}
      <section className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-7">
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 text-sm font-medium text-[#0F172A]">
            {[
              "Nurse-Founded Leadership",
              "Serving Clients Since 2010",
              "Individualized Care",
              "Dignity & Independence at Home",
            ].map((item) => (
              <span key={item} className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Why Work With Us – Wider + Images ===== */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-[#F59E0B] font-medium tracking-[0.15em] uppercase text-xs mb-4">
              Why Join Us
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-[#0F172A] mb-5 tracking-tight">
              Why Work With One Community Home Health
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed">
              We believe home health care is personal. Every visit is built on
              trust, clinical excellence, clear communication, and respect for
              the people we serve.
            </p>
          </div>

          {/* Wider 2×2 grid with images */}
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
                className="group bg-white border border-slate-100 rounded-2xl overflow-hidden  transition-all duration-300"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-7 lg:p-8">
                  <h3 className="font-semibold text-[#0F172A] mb-2.5 text-xl">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-14 text-center text-slate-500 max-w-2xl mx-auto text-[0.95rem] leading-relaxed">
            Our founder established JACOP Healthcare Services, Inc. in 2010.
            That same commitment to quality and person-centered care continues
            under the One Community Home Health brand.
          </p>
        </div>
      </section>

      {/* ===== Current Opportunities – Richer Cards (Images Removed) ===== */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <p className="text-[#F59E0B] font-medium tracking-[0.15em] uppercase text-xs mb-4">
              Open Roles
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-4 tracking-tight">
              Current Opportunities
            </h2>
            <p className="text-lg text-slate-500">
              We hire for a range of clinical and support roles as needs arise.
              Open positions change based on patient needs and staffing.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                role: "Registered Nurses (RN)",
                desc: "Skilled nursing visits, care coordination & clinical leadership",
              },
              {
                role: "Licensed Vocational / Practical Nurses (LVN/LPN)",
                desc: "Hands-on clinical care under RN supervision",
              },
              {
                role: "Physical Therapists",
                desc: "Mobility, strength & functional recovery in the home",
              },
              {
                role: "Occupational Therapists",
                desc: "Daily living skills & adaptive strategies",
              },
              {
                role: "Speech-Language Pathologists",
                desc: "Communication, swallowing & cognitive support",
              },
              {
                role: "Medical Social Workers",
                desc: "Psychosocial support & resource coordination",
              },
              {
                role: "Home Health Aides / CNAs",
                desc: "Personal care, companionship & daily assistance",
              },
              {
                role: "Intake & Office Support",
                desc: "Patient onboarding & referral management",
              },
              {
                role: "Administrative Roles",
                desc: "Operations, scheduling & team coordination",
              },
            ].map((item) => (
              <div
                key={item.role}
                className="group bg-[#FAFAF8] border border-slate-100 rounded-2xl p-7 hover:border-amber-200  transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-semibold text-[#0F172A] text-xl mb-2.5 leading-snug group-hover:text-[#F59E0B] transition-colors">
                    {item.role}
                  </h3>
                  <p className="text-slate-500 leading-relaxed text-sm sm:text-base">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-semibold uppercase tracking-wider text-[#0F172A]">
                  <span>Inquire / Apply</span>
                  <span className="ml-2 text-[#F59E0B] transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-12 text-slate-500 text-[0.95rem] max-w-3xl">
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
              <div className="p-10 sm:p-12 lg:p-14 text-white">
                <p className="text-[#F59E0B] font-medium text-xs uppercase tracking-[0.15em] mb-4">
                  Year-Round Applications
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold mb-5 tracking-tight leading-tight">
                  Join Our CNA & Home Health Aide Talent Network
                </h2>
                <p className="text-slate-300 mb-8 leading-relaxed">
                  One Community Home Health accepts ongoing applications from
                  qualified CNAs and home health aides. Submitting an
                  application does <strong className="text-white">not</strong>{" "}
                  mean a current opening exists. Qualified applicants may be
                  contacted when a patient-care assignment becomes available
                  that matches their qualifications, availability, and service
                  area.
                </p>
                <ul className="space-y-3 text-slate-300 mb-10 text-sm">
                  {[
                    "Applications retained for up to two years",
                    "Routed to info@onechh.com",
                    "Background check only after a matching opportunity & authorization",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="text-[#F59E0B] mt-0.5 font-bold">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/careers/cna-home-health-aide-application"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#F59E0B] hover:bg-[#FBBF24] text-[#0F172A] font-semibold rounded-full transition-all"
                >
                  Apply to the Talent Network
                </Link>
              </div>

              <div className="relative min-h-[320px] lg:min-h-full">
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80"
                  alt="CNA providing home care"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <p className="text-white font-medium text-lg">
                    CNA / Home Health Aide
                    <br />
                    <span className="text-white/70 text-base">
                      Talent Network
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Benefits (Redesigned Layout with Image & Cards) ===== */}
      <section className="py-20 lg:py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5 space-y-6">
              <p className="text-[#F59E0B] font-medium tracking-[0.15em] uppercase text-xs">
                What We Offer
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] tracking-tight">
                Benefits & Schedule
              </h2>
              <p className="text-lg text-slate-500 leading-relaxed">
                We offer competitive compensation and a supportive work
                environment focused on patient care and professional respect.
                Specific benefits and schedule expectations are discussed during
                the hiring process once a matching opportunity is identified.
              </p>
              <div className="pt-4">
                <a
                  href="tel:9723251598"
                  className="inline-flex items-center justify-center px-7 py-3.5 bg-[#0F172A] hover:bg-[#1E293B] text-white font-medium rounded-full transition-all"
                >
                  Inquire About Openings
                </a>
              </div>
            </div>
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
              <div className="bg-[#FAFAF8] border border-slate-100 rounded-2xl p-8">
                <div className="w-12 h-12 rounded-xl bg-amber-100 text-[#F59E0B] flex items-center justify-center font-bold text-xl mb-5">
                  💼
                </div>
                <h3 className="text-xl font-semibold text-[#0F172A] mb-2">
                  Competitive Compensation
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Fair, dependable pay structured around experience, role
                  requirements, and assignment type.
                </p>
              </div>
              <div className="bg-[#FAFAF8] border border-slate-100 rounded-2xl p-8 sm:mt-8">
                <div className="w-12 h-12 rounded-xl bg-amber-100 text-[#F59E0B] flex items-center justify-center font-bold text-xl mb-5">
                  🕒
                </div>
                <h3 className="text-xl font-semibold text-[#0F172A] mb-2">
                  Flexible Scheduling
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Carefully tailored schedules matching patient care demands
                  with your personal availability and region.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== EEO + Employee Resources (Redesigned Split Layout with Image Accents) ===== */}
      <section className="py-20 lg:py-28 bg-[#FAFAF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white border border-slate-100 rounded-3xl p-8 sm:p-10  flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold text-[#0F172A] mb-4 tracking-tight">
                  Equal Employment Opportunity
                </h2>
                <p className="text-slate-500 leading-relaxed mb-6 text-sm sm:text-base">
                  One Community Home Health / JACOP Healthcare Services, Inc. is
                  an equal opportunity employer. We are committed to providing
                  equal employment opportunities to all qualified applicants and
                  employees without regard to race, color, religion, sex,
                  national origin, age, disability, veteran status, or any other
                  protected characteristic.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100">
                <p className="text-slate-500 text-sm">
                  Applicants needing reasonable accommodation may contact us at{" "}
                  <a
                    href="mailto:info@onechh.com"
                    className="text-[#0F172A] font-medium underline underline-offset-2 hover:text-[#F59E0B] transition-colors"
                  >
                    info@onechh.com
                  </a>{" "}
                  or{" "}
                  <a
                    href="tel:9723251598"
                    className="text-[#0F172A] font-medium underline underline-offset-2 hover:text-[#F59E0B] transition-colors"
                  >
                    972-325-1598
                  </a>
                  .
                </p>
              </div>
            </div>

            <div className="bg-[#FEF3C7]/30 border border-amber-100 rounded-3xl p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="inline-block px-3 py-1 bg-amber-100 text-amber-800 text-xs font-semibold rounded-full mb-4">
                  Staff Portal
                </div>
                <h3 className="text-2xl font-bold text-[#0F172A] mb-3">
                  Already part of our team?
                </h3>
                <p className="text-slate-600 mb-8 leading-relaxed text-sm sm:text-base">
                  Visit the Employee Resources page for the employee handbook,
                  HHAeXchange clock-in/EVV access, HR & payroll support, and
                  incident-reporting instructions.
                </p>
              </div>
              <div>
                <Link
                  to="/employee-resources"
                  className="inline-flex items-center justify-center px-7 py-3.5 bg-[#0F172A] hover:bg-[#1E293B] text-white font-medium rounded-full transition-all"
                >
                  Go to Employee Resources
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Final CTA ===== */}
      <section className="py-20 lg:py-28 bg-[#0F172A] text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-5 tracking-tight leading-tight">
            Ready to join a team that helps people stay where they belong?
          </h2>
          <p className="text-lg text-slate-300 mb-10">
            Apply to our CNA / Home Health Aide Talent Network or call us to
            learn about current opportunities.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/careers/cna-home-health-aide-application"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#F59E0B] hover:bg-[#FBBF24] text-[#0F172A] font-semibold rounded-full transition-all"
            >
              Apply to the Talent Network
            </Link>
            <a
              href="tel:9723251598"
              className="inline-flex items-center justify-center px-8 py-4 border border-white/30 hover:bg-white/10 text-white font-semibold rounded-full transition-all"
            >
              Call 972-325-1598
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
