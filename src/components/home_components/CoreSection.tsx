import { useRef, useState } from "react";
import {
  Stethoscope,
  Activity,
  Hand,
  MessageCircle,
  Heart,
  UserCheck,
  Bandage,
  Pill,
  Hospital,
  Home,
  Coffee,
  Clock,
  Sparkles,
  ShoppingBag,
  Medal,
  Accessibility,
  ArrowRight,
  PhoneCall,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CoreServicesPage() {
  const pageRef = useRef<HTMLElement>(null);
  const [activeTab, setActiveTab] = useState<"clinical" | "specialty">(
    "clinical"
  );

  const clinicalServices = [
    {
      title: "Skilled Nursing",
      description:
        "Professional nursing care including assessments, medication administration, and ongoing clinical monitoring.",
      icon: Stethoscope,
      category: "clinical",
    },
    {
      title: "Physical Therapy",
      description:
        "Restoring mobility, strength, and balance through personalized therapeutic exercise programs.",
      icon: Activity,
      category: "clinical",
    },
    {
      title: "Occupational Therapy",
      description:
        "Helping clients regain independence in daily activities and adapt their environment for safety.",
      icon: Hand,
      category: "clinical",
    },
    {
      title: "Speech Therapy",
      description:
        "Supporting communication, swallowing, and cognitive skills for improved quality of life.",
      icon: MessageCircle,
      category: "clinical",
    },
    {
      title: "Medical Social Services",
      description:
        "Guidance with resources, counseling, and care coordination to support emotional and social needs.",
      icon: Heart,
      category: "clinical",
    },
    {
      title: "Home Health Aide",
      description:
        "Hands-on assistance with personal care, mobility, and daily living tasks under clinical supervision.",
      icon: UserCheck,
      category: "clinical",
    },
  ];

  const specialtyServices = [
    {
      title: "Wound Care",
      description:
        "Expert assessment and management of complex or chronic wounds to promote healing.",
      icon: Bandage,
      category: "specialty",
    },
    {
      title: "Medication & Chronic Disease Management",
      description:
        "Support with medication adherence and ongoing management of chronic health conditions.",
      icon: Pill,
      category: "specialty",
    },
    {
      title: "Post-Surgical / Post-Hospital Care",
      description:
        "Seamless recovery support after surgery or hospital discharge to reduce readmission risk.",
      icon: Hospital,
      category: "specialty",
    },
    {
      title: "Fall Prevention & Home Safety",
      description:
        "Home evaluations and strategies designed to reduce fall risk and improve safety.",
      icon: Home,
      category: "specialty",
    },
    {
      title: "Companion Care",
      description:
        "Friendly presence and engagement to reduce isolation and support emotional wellbeing.",
      icon: Coffee,
      category: "specialty",
    },
    {
      title: "Respite Care",
      description:
        "Temporary relief for family caregivers while ensuring continuous, reliable support.",
      icon: Clock,
      category: "specialty",
    },
    {
      title: "Daily Lifestyle Support",
      description:
        "Assistance with routines, light household tasks, and maintaining independence at home.",
      icon: Sparkles,
      category: "specialty",
    },
    {
      title: "Approved Errand Support",
      description:
        "Help with essential errands such as prescription pickup and light shopping when approved.",
      icon: ShoppingBag,
      category: "specialty",
    },
    {
      title: "Veteran Care",
      description:
        "Respectful, specialized support tailored for veterans and coordinated with available benefits.",
      icon: Medal,
      category: "specialty",
    },
    {
      title: "Adults with Disabilities",
      description:
        "Person-centered care that promotes dignity, autonomy, and individualized daily support.",
      icon: Accessibility,
      category: "specialty",
    },
  ];

  const displayedServices =
    activeTab === "clinical" ? clinicalServices : specialtyServices;

  return (
    <main
      ref={pageRef}
      className="bg-[#F3F1EC] min-h-screen pt-24 sm:pt-32 px-4 sm:px-6 lg:px-8 overflow-x-hidden will-change-transform"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="sp-header text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <span className="sp-eyebrow inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-semibold tracking-[0.18em] uppercase bg-white border border-amber-200 text-amber-700 mb-7 shadow-sm">
            What we provide
          </span>
          <h1 className="sp-heading fp-serif text-4xl sm:text-6xl lg:text-7xl leading-[1.1] font-bold tracking-tight text-slate-900 mb-6">
            Comprehensive care built around your independence{" "}
            <span className="text-amber-700">.</span>
          </h1>
          <p className="sp-subhead text-base sm:text-[17px] text-slate-500 leading-relaxed max-w-2xl mx-auto">
            A full range of clinical disciplines and specialty support services
            delivered with compassion, expertise, and unwavering dedication.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-[#E9E5DC] p-1.5 rounded-full border border-[#DCD5C6] shadow-inner">
            <button
              onClick={() => setActiveTab("clinical")}
              className={`px-6 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                activeTab === "clinical"
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-500 hover:text-slate-900"
              }`}
            >
              Clinical Disciplines ({clinicalServices.length})
            </button>
            <button
              onClick={() => setActiveTab("specialty")}
              className={`px-6 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                activeTab === "specialty"
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-500 hover:text-slate-900"
              }`}
            >
              Specialty Support ({specialtyServices.length})
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="sp-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-24">
          {displayedServices.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="sp-service-card group rounded-[22px] bg-white border border-amber-100 p-6 sm:p-7 flex flex-col justify-between hover:border-amber-300 transition-all duration-300 will-change-transform"
              >
                <div>
                  <div className="flex justify-between items-start mb-5">
                    <div className="w-11 h-11 rounded-xl bg-amber-50 border border-amber-100 text-amber-700 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      <Icon className="w-5 h-5" strokeWidth={1.75} />
                    </div>
                    <span className="text-[10px] font-semibold tracking-wider text-slate-400 uppercase bg-[#F3F1EC] px-2.5 py-1 rounded-full">
                      {service.category === "clinical"
                        ? "Clinical"
                        : "Specialty"}
                    </span>
                  </div>
                  <h3 className="fp-serif text-xl font-medium text-slate-900 mb-2.5 tracking-tight group-hover:text-amber-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 text-[14px] leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-[#EDE8DC] flex items-center justify-between text-xs font-semibold text-slate-700 group-hover:text-amber-700 transition-colors">
                  <span>Learn more about care</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Banner Card */}
        <div className="rounded-[28px] bg-[#051122] text-white p-8 sm:p-12 mb-20 relative overflow-hidden">
          <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-[11px] font-bold tracking-widest uppercase bg-amber-400/20 text-amber-200 border border-amber-500/30 mb-4">
              Personalized Plans
            </div>
            <h2 className="fp-serif text-2xl sm:text-4xl font-bold tracking-tight mb-4 text-white">
              Not sure which care pathway is right for you?
            </h2>
            <p className="text-slate-300 text-[15px] leading-relaxed mb-8">
              Our nurse-founded leadership team will work directly with your
              family and physician to coordinate a custom care plan tailored
              precisely to your needs.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/contact"
                className="bg-[#fff] active:bg-amber-600 text-[#000] font-semibold px-6 py-3.5 rounded-xl text-[14px] transition-colors inline-flex items-center gap-2  cursor-pointer"
              >
                <PhoneCall className="w-4 h-4" /> Request Free Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
