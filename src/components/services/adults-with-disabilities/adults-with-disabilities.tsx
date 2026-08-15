import {
  Activity,
  UserCheck,
  HeartPulse,
  ShieldCheck,
  BookOpen,
  Star,
  Phone,
} from "lucide-react";

export default function AdultsWithDisabilitiesComp() {
  return (
    <div className="min-h-screen bg-[#FAFAF8] text-slate-800 font-sans">
      <section className="relative bg-[#0F172A] text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=2000&q=80"
            alt="Adults with disabilities home care"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#F59E0B] font-medium text-xs tracking-wider uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-[#F59E0B] animate-pulse" />
              Specialized Clinical Discipline
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6 tracking-tight">
              Services for Adults with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
                Disabilities
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed">
              Dignified, professional clinical care, therapy, and personal
              support designed to promote independence, safety, and quality of
              life at home.
            </p>
            <a
              href="tel:9723251598"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#F59E0B] hover:bg-[#FBBF24] text-[#0F172A] font-bold rounded-xl transition-all text-sm"
            >
              <Phone size={16} /> Call (972) 325-1598
            </a>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-[#F59E0B] font-semibold tracking-widest uppercase text-xs">
                  Dignity, Safety & Independence
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] mt-2 mb-4">
                  Comprehensive In-Home Support for Adults with Disabilities
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Living with a disability requires personalized care that
                  respects personal dignity while maximizing everyday
                  independence. Our skilled clinical team, therapists, and
                  personal care aides partner with individuals and families to
                  deliver tailored support, therapy, and chronic-condition
                  management at home.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 text-sm font-medium text-slate-700">
                {[
                  "Skilled Clinical Care",
                  "Personal-Care Support",
                  "Specialized Therapy Services",
                  "Caregiver Education",
                ].map((item) => (
                  <div
                    key={item}
                    className="bg-white p-4 rounded-2xl flex items-center gap-3"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-3xl ">
                <img
                  src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1000&q=80"
                  alt="Care for adults with disabilities"
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-[#F59E0B] font-semibold tracking-widest uppercase text-xs">
              Service Scope
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] mt-2 mb-4">
              Adult Disability Care Services
            </h2>
            <p className="text-slate-600 text-sm">
              Our specialized care programs focus on clinical excellence, daily
              independence, and holistic well-being.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Activity,
                title: "Skilled Clinical Care",
                desc: "Professional nursing interventions, health monitoring, and specialized clinical treatments.",
              },
              {
                icon: UserCheck,
                title: "Personal-Care Support",
                desc: "Respectful assistance with daily hygiene, dressing, grooming, and personal routines.",
              },
              {
                icon: HeartPulse,
                title: "Therapy Services",
                desc: "Physical, occupational, and speech therapy to enhance functional mobility and communication.",
              },
              {
                icon: ShieldCheck,
                title: "Independence with Daily Activities",
                desc: "Empowering clients to perform daily tasks with confidence and appropriate adaptive support.",
              },
              {
                icon: BookOpen,
                title: "Caregiver Education",
                desc: "Guidance and training for family members and support networks on safe handling and care techniques.",
              },
              {
                icon: Activity,
                title: "Chronic-Condition Support",
                desc: "Targeted symptom tracking and clinical management for long-term health conditions.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-white p-6 rounded-3xl  transition-shadow"
              >
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-4">
                  <Icon size={24} />
                </div>
                <h3 className="font-bold text-[#0F172A] mb-2 text-base">
                  {title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">{desc}</p>
              </div>
            ))}
            <div className="bg-white p-6 rounded-3xl md:col-span-2 lg:col-span-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-4">
                <Star size={24} />
              </div>
              <h3 className="font-bold text-[#0F172A] mb-2 text-base">
                Dignity, Safety, and Quality of Life
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                A holistic commitment to safeguarding personal autonomy,
                physical safety, and overall happiness at home.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
