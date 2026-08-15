import { useState } from "react";
import {
  Heart,
  Users,
  Shield,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Home,
  Coffee,
  HeartHandshake,
  Smile,
  ClipboardList,
  Utensils,
  Sparkles,
  Award,
  FileText,
  Activity,
  UserCheck,
  HeartPulse,
  BookOpen,
  Star,
  Mail,
  Bell,
  Phone,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";

export default function ServicesRouterApp() {
  const [currentRoute, setCurrentRoute] = useState("/services/companion-care");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Pediatric email signup state
  const [emailInput, setEmailInput] = useState("");
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setEmailSubmitted(true);
    }
  };

  const navLinks = [
    { name: "Companion Care", path: "/services/companion-care" },
    { name: "Respite Care", path: "/services/respite-care" },
    { name: "Daily Lifestyle", path: "/services/daily-lifestyle-support" },
    { name: "Veteran Care", path: "/services/veteran-care" },
    {
      name: "Adults with Disabilities",
      path: "/services/adults-with-disabilities",
    },
    { name: "Pediatric Services", path: "/services/pediatric-services" },
  ];

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-slate-800 font-sans">
      {/* Top Navigation Bar for Route Simulation */}
      <header className="sticky top-0 z-50 bg-[#0F172A] text-white border-b border-slate-800 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#F59E0B] flex items-center justify-center text-[#0F172A] font-extrabold text-xl">
              OC
            </div>
            <div>
              <span className="font-bold text-lg tracking-tight block">
                One Community Home Health
              </span>
              <span className="text-[10px] text-slate-400 block">
                JACOP Healthcare Services, Inc. (est. 2010)
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => setCurrentRoute(link.path)}
                className={`px-3 py-2 rounded-lg text-xs font-semibold transition-all ${
                  currentRoute === link.path
                    ? "bg-[#F59E0B] text-[#0F172A]"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.name}
              </button>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:9723251598"
              className="px-4 py-2.5 bg-[#F59E0B] hover:bg-[#FBBF24] text-[#0F172A] font-bold rounded-xl transition-all text-xs flex items-center gap-2"
            >
              <Phone size={14} /> (972) 325-1598
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-slate-300 hover:text-white"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-[#0F172A] border-t border-slate-800 px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => {
                  setCurrentRoute(link.path);
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                  currentRoute === link.path
                    ? "bg-[#F59E0B] text-[#0F172A]"
                    : "text-slate-300 hover:bg-white/5"
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* ==================== COMPANION CARE ==================== */}
      {currentRoute === "/services/companion-care" && (
        <main>
          <section className="relative bg-[#0F172A] text-white overflow-hidden">
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=2000&q=80"
                alt="Companion care at home"
                className="w-full h-full object-cover opacity-15"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent" />
            </div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#F59E0B] font-medium text-xs tracking-wider uppercase mb-6">
                  <span className="w-2 h-2 rounded-full bg-[#F59E0B] animate-pulse" />
                  Supportive Care Discipline
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6 tracking-tight">
                  Companion Care{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
                    at Home
                  </span>
                </h1>
                <p className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed">
                  Warm social engagement, reassuring safety oversight, and
                  gentle daily support delivered right to your home.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="tel:9723251598"
                    className="px-8 py-4 bg-[#F59E0B] hover:bg-[#FBBF24] text-[#0F172A] font-bold rounded-xl transition-all text-sm flex items-center gap-2"
                  >
                    <Phone size={16} /> Call (972) 325-1598
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-6 space-y-6">
                  <div>
                    <span className="text-[#F59E0B] font-semibold tracking-widest uppercase text-xs">
                      Connection & Comfort
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] mt-2 mb-4">
                      Fostering Meaningful Engagement and Everyday Well-Being
                    </h2>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      Our companion care services focus on building positive,
                      trusting relationships while ensuring safety and comfort
                      in familiar home surroundings. From engaging conversations
                      to light routine assistance, we provide dependable
                      presence and peace of mind for clients and their families.
                    </p>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4 text-sm font-medium text-slate-700">
                    <div className="bg-white p-4 rounded-2xl flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                      Meaningful Companionship
                    </div>
                    <div className="bg-white p-4 rounded-2xl flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                      Safety & Wellbeing Monitoring
                    </div>
                    <div className="bg-white p-4 rounded-2xl flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                      Family Caregiver Support
                    </div>
                    <div className="bg-white p-4 rounded-2xl flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                      Light Household Assistance
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-6">
                  <div className="overflow-hidden rounded-3xl">
                    <img
                      src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1000&q=80"
                      alt="Companion care support"
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
                  Companion Care Services
                </h2>
                <p className="text-slate-600 text-sm">
                  Our companion care offerings are designed to enhance daily
                  life through friendly interaction and dependable support.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-3xl">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-4">
                    <Heart size={24} />
                  </div>
                  <h3 className="font-bold text-[#0F172A] mb-2 text-base">
                    Companionship
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Warm, friendly conversation, shared hobbies, reading, and
                    pleasant social interaction.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-3xl">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-4">
                    <Users size={24} />
                  </div>
                  <h3 className="font-bold text-[#0F172A] mb-2 text-base">
                    Social Engagement
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Encouraging participation in favorite activities, community
                    events, and family connections.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-3xl">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-4">
                    <Shield size={24} />
                  </div>
                  <h3 className="font-bold text-[#0F172A] mb-2 text-base">
                    Safety Monitoring
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Reassuring supervision around the house to prevent hazards
                    and ensure immediate assistance when needed.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-3xl">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-4">
                    <Clock size={24} />
                  </div>
                  <h3 className="font-bold text-[#0F172A] mb-2 text-base">
                    Support with Daily Routines
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Gentle reminders for daily activities, schedules, and
                    routine lifestyle habits.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-3xl">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-4">
                    <Home size={24} />
                  </div>
                  <h3 className="font-bold text-[#0F172A] mb-2 text-base">
                    Light Assistance in the Home
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Help with light organizing, tidying, plant care, and
                    maintaining a comfortable living environment.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-3xl">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-4">
                    <ShieldCheck size={24} />
                  </div>
                  <h3 className="font-bold text-[#0F172A] mb-2 text-base">
                    Family Caregiver Support
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Providing dependable relief and regular updates so family
                    caregivers can rest and recharge with confidence.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
      )}

      {/* ==================== RESPITE CARE ==================== */}
      {currentRoute === "/services/respite-care" && (
        <main>
          <section className="relative bg-[#0F172A] text-white overflow-hidden">
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=2000&q=80"
                alt="Respite care at home"
                className="w-full h-full object-cover opacity-15"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent" />
            </div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#F59E0B] font-medium text-xs tracking-wider uppercase mb-6">
                  <span className="w-2 h-2 rounded-full bg-[#F59E0B] animate-pulse" />
                  Caregiver Relief & Support
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6 tracking-tight">
                  Respite Care{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
                    at Home
                  </span>
                </h1>
                <p className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed">
                  Temporary, dependable relief and professional in-home support
                  designed to prevent caregiver burnout and support family
                  well-being.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="tel:9723251598"
                    className="px-8 py-4 bg-[#F59E0B] hover:bg-[#FBBF24] text-[#0F172A] font-bold rounded-xl transition-all text-sm flex items-center gap-2"
                  >
                    <Phone size={16} /> Call (972) 325-1598
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-6 space-y-6">
                  <div>
                    <span className="text-[#F59E0B] font-semibold tracking-widest uppercase text-xs">
                      Supporting Family Caregivers
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] mt-2 mb-4">
                      Recharge With Confidence While Loved Ones Are Well Cared
                      For
                    </h2>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      Family caregivers provide invaluable dedication, but
                      taking time for personal wellness is essential. Our
                      respite care services offer short-term, professional
                      in-home support so you can step away to rest, handle
                      errands, or attend to personal needs knowing your loved
                      one is safe and engaged.
                    </p>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4 text-sm font-medium text-slate-700">
                    <div className="bg-white p-4 rounded-2xl flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                      Temporary Family Relief
                    </div>
                    <div className="bg-white p-4 rounded-2xl flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                      Supervision & Companionship
                    </div>
                    <div className="bg-white p-4 rounded-2xl flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                      Burnout Prevention
                    </div>
                    <div className="bg-white p-4 rounded-2xl flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                      Short-Term In-Home Support
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-6">
                  <div className="overflow-hidden rounded-3xl">
                    <img
                      src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80"
                      alt="Respite care support"
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
                  Respite Care Services
                </h2>
                <p className="text-slate-600 text-sm">
                  Our respite programs provide flexible, compassionate coverage
                  tailored to your family schedule.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-3xl">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-4">
                    <Coffee size={24} />
                  </div>
                  <h3 className="font-bold text-[#0F172A] mb-2 text-base">
                    Temporary Family Relief
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Scheduled short-term care giving family members reliable
                    time away for rest and personal appointments.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-3xl">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-4">
                    <Smile size={24} />
                  </div>
                  <h3 className="font-bold text-[#0F172A] mb-2 text-base">
                    Supervision & Companionship
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Attentive oversight and friendly conversation to keep
                    clients safe, stimulated, and comfortable.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-3xl">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-4">
                    <ClipboardList size={24} />
                  </div>
                  <h3 className="font-bold text-[#0F172A] mb-2 text-base">
                    Assistance with Daily Routines
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Support with meals, personal schedules, and daily habits
                    while regular primary caregivers are away.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-3xl">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-4">
                    <HeartHandshake size={24} />
                  </div>
                  <h3 className="font-bold text-[#0F172A] mb-2 text-base">
                    Flexible Scheduling
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Hourly, daily, or overnight coverage options designed around
                    your family’s unique needs.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-3xl">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-4">
                    <ShieldCheck size={24} />
                  </div>
                  <h3 className="font-bold text-[#0F172A] mb-2 text-base">
                    Peace of Mind
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Professional caregivers who follow established routines and
                    communicate clearly with the family.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-3xl">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-4">
                    <Home size={24} />
                  </div>
                  <h3 className="font-bold text-[#0F172A] mb-2 text-base">
                    In-Home Comfort
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Care delivered in the familiar home environment so clients
                    remain comfortable and secure.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
      )}

      {/* ==================== DAILY LIFESTYLE SUPPORT ==================== */}
      {currentRoute === "/services/daily-lifestyle-support" && (
        <main>
          <section className="relative bg-[#0F172A] text-white overflow-hidden">
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=2000&q=80"
                alt="Daily lifestyle support at home"
                className="w-full h-full object-cover opacity-15"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent" />
            </div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#F59E0B] font-medium text-xs tracking-wider uppercase mb-6">
                  <span className="w-2 h-2 rounded-full bg-[#F59E0B] animate-pulse" />
                  Everyday Living Support
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6 tracking-tight">
                  Daily Lifestyle{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
                    Support
                  </span>
                </h1>
                <p className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed">
                  Practical assistance with everyday activities that help
                  clients maintain independence, comfort, and a high quality of
                  life at home.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="tel:9723251598"
                    className="px-8 py-4 bg-[#F59E0B] hover:bg-[#FBBF24] text-[#0F172A] font-bold rounded-xl transition-all text-sm flex items-center gap-2"
                  >
                    <Phone size={16} /> Call (972) 325-1598
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-6 space-y-6">
                  <div>
                    <span className="text-[#F59E0B] font-semibold tracking-widest uppercase text-xs">
                      Independence & Comfort
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] mt-2 mb-4">
                      Supporting the Rhythms of Everyday Life
                    </h2>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      Daily lifestyle support focuses on the practical tasks
                      that keep a household running smoothly. Our caregivers
                      assist with meal preparation, light housekeeping, errands,
                      and personal routines so clients can remain independent
                      and comfortable in their own homes.
                    </p>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4 text-sm font-medium text-slate-700">
                    <div className="bg-white p-4 rounded-2xl flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                      Meal Preparation
                    </div>
                    <div className="bg-white p-4 rounded-2xl flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                      Light Housekeeping
                    </div>
                    <div className="bg-white p-4 rounded-2xl flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                      Errands & Shopping
                    </div>
                    <div className="bg-white p-4 rounded-2xl flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                      Personal Routines
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-6">
                  <div className="overflow-hidden rounded-3xl">
                    <img
                      src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1000&q=80"
                      alt="Daily lifestyle support"
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
                  Daily Lifestyle Services
                </h2>
                <p className="text-slate-600 text-sm">
                  Practical, respectful support that preserves dignity and
                  independence.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-3xl">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-4">
                    <Utensils size={24} />
                  </div>
                  <h3 className="font-bold text-[#0F172A] mb-2 text-base">
                    Meal Preparation
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Planning and preparing nutritious meals according to dietary
                    preferences and restrictions.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-3xl">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-4">
                    <Home size={24} />
                  </div>
                  <h3 className="font-bold text-[#0F172A] mb-2 text-base">
                    Light Housekeeping
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Tidying, laundry, dishwashing, and other light household
                    tasks that keep the home comfortable.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-3xl">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-4">
                    <ClipboardList size={24} />
                  </div>
                  <h3 className="font-bold text-[#0F172A] mb-2 text-base">
                    Errands & Appointments
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Assistance with grocery shopping, prescription pickup, and
                    accompaniment to appointments.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-3xl">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-4">
                    <Sparkles size={24} />
                  </div>
                  <h3 className="font-bold text-[#0F172A] mb-2 text-base">
                    Personal Care Routines
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Gentle support with grooming, dressing, and other daily
                    personal care activities.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-3xl">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-4">
                    <Clock size={24} />
                  </div>
                  <h3 className="font-bold text-[#0F172A] mb-2 text-base">
                    Schedule Management
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Help organizing daily schedules, reminders, and preferred
                    routines.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-3xl">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-4">
                    <Heart size={24} />
                  </div>
                  <h3 className="font-bold text-[#0F172A] mb-2 text-base">
                    Companionship During Tasks
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Friendly presence while completing everyday activities,
                    reducing isolation and stress.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
      )}

      {/* ==================== VETERAN CARE ==================== */}
      {currentRoute === "/services/veteran-care" && (
        <main>
          <section className="relative bg-[#0F172A] text-white overflow-hidden">
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=2000&q=80"
                alt="Veteran care services"
                className="w-full h-full object-cover opacity-15"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent" />
            </div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#F59E0B] font-medium text-xs tracking-wider uppercase mb-6">
                  <span className="w-2 h-2 rounded-full bg-[#F59E0B] animate-pulse" />
                  Honoring Those Who Served
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6 tracking-tight">
                  Veteran Care{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
                    at Home
                  </span>
                </h1>
                <p className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed">
                  Specialized clinical and supportive home health services for
                  veterans and their families, coordinated with VA providers.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="tel:9723251598"
                    className="px-8 py-4 bg-[#F59E0B] hover:bg-[#FBBF24] text-[#0F172A] font-bold rounded-xl transition-all text-sm flex items-center gap-2"
                  >
                    <Phone size={16} /> Call (972) 325-1598
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-6 space-y-6">
                  <div>
                    <span className="text-[#F59E0B] font-semibold tracking-widest uppercase text-xs">
                      Respect & Excellence
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] mt-2 mb-4">
                      Dedicated Care for Veterans and Their Families
                    </h2>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      We understand the unique needs of those who have served.
                      Our team delivers high-quality clinical nursing, therapy,
                      and personal care while coordinating closely with VA
                      physicians and case managers to ensure seamless support.
                    </p>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4 text-sm font-medium text-slate-700">
                    <div className="bg-white p-4 rounded-2xl flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                      VA Coordination
                    </div>
                    <div className="bg-white p-4 rounded-2xl flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                      Skilled Clinical Care
                    </div>
                    <div className="bg-white p-4 rounded-2xl flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                      Family Support
                    </div>
                    <div className="bg-white p-4 rounded-2xl flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                      Referral Guidance
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-6">
                  <div className="overflow-hidden rounded-3xl">
                    <img
                      src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1000&q=80"
                      alt="Veteran care support"
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
                  Veteran Care Services
                </h2>
                <p className="text-slate-600 text-sm">
                  Comprehensive in-home clinical and supportive care tailored
                  for veterans.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-3xl">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-4">
                    <Users size={24} />
                  </div>
                  <h3 className="font-bold text-[#0F172A] mb-2 text-base">
                    Support for Veterans & Families
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Comprehensive in-home clinical and supportive care for
                    veterans and eligible family members.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-3xl">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-4">
                    <ClipboardList size={24} />
                  </div>
                  <h3 className="font-bold text-[#0F172A] mb-2 text-base">
                    VA Provider Coordination
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Active communication and reporting with VA physicians, case
                    managers, and care teams.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-3xl">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-4">
                    <Activity size={24} />
                  </div>
                  <h3 className="font-bold text-[#0F172A] mb-2 text-base">
                    Skilled & Supportive Care
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    High-quality clinical nursing, therapy, and personal care
                    tailored to individual needs.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-3xl">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-4">
                    <FileText size={24} />
                  </div>
                  <h3 className="font-bold text-[#0F172A] mb-2 text-base">
                    Referral & Authorization Process
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Guidance and administrative support navigating the necessary
                    VA referral steps.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-3xl">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-4">
                    <Award size={24} />
                  </div>
                  <h3 className="font-bold text-[#0F172A] mb-2 text-base">
                    Respectful, Experienced Team
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Caregivers trained to understand the unique experiences and
                    needs of those who have served.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-3xl">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-4">
                    <HeartPulse size={24} />
                  </div>
                  <h3 className="font-bold text-[#0F172A] mb-2 text-base">
                    Chronic Condition Management
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Ongoing monitoring and support for service-related and
                    age-related health conditions.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
      )}

      {/* ==================== ADULTS WITH DISABILITIES ==================== */}
      {currentRoute === "/services/adults-with-disabilities" && (
        <main>
          <section className="relative bg-[#0F172A] text-white overflow-hidden">
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=2000&q=80"
                alt="Adults with disabilities home care services"
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
                  support designed to promote independence, safety, and quality
                  of life at home.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="tel:9723251598"
                    className="px-8 py-4 bg-[#F59E0B] hover:bg-[#FBBF24] text-[#0F172A] font-bold rounded-xl transition-all text-sm flex items-center gap-2"
                  >
                    <Phone size={16} /> Call (972) 325-1598
                  </a>
                </div>
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
                      personal care aides partner with individuals and families
                      to deliver tailored support, therapy, and
                      chronic-condition management at home.
                    </p>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4 text-sm font-medium text-slate-700">
                    <div className="bg-white p-4 rounded-2xl flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                      Skilled Clinical Care
                    </div>
                    <div className="bg-white p-4 rounded-2xl flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                      Personal-Care Support
                    </div>
                    <div className="bg-white p-4 rounded-2xl flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                      Specialized Therapy Services
                    </div>
                    <div className="bg-white p-4 rounded-2xl flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                      Caregiver Education
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-6">
                  <div className="overflow-hidden rounded-3xl">
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
                  Our specialized care programs focus on clinical excellence,
                  daily independence, and holistic well-being.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-3xl">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-4">
                    <Activity size={24} />
                  </div>
                  <h3 className="font-bold text-[#0F172A] mb-2 text-base">
                    Skilled Clinical Care
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Professional nursing interventions, health monitoring, and
                    specialized clinical treatments.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-3xl">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-4">
                    <UserCheck size={24} />
                  </div>
                  <h3 className="font-bold text-[#0F172A] mb-2 text-base">
                    Personal-Care Support
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Respectful assistance with daily hygiene, dressing,
                    grooming, and personal routines.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-3xl">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-4">
                    <HeartPulse size={24} />
                  </div>
                  <h3 className="font-bold text-[#0F172A] mb-2 text-base">
                    Therapy Services
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Physical, occupational, and speech therapy to enhance
                    functional mobility and communication.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-3xl">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-4">
                    <ShieldCheck size={24} />
                  </div>
                  <h3 className="font-bold text-[#0F172A] mb-2 text-base">
                    Independence with Daily Activities
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Empowering clients to perform daily tasks with confidence
                    and appropriate adaptive support.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-3xl">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-4">
                    <BookOpen size={24} />
                  </div>
                  <h3 className="font-bold text-[#0F172A] mb-2 text-base">
                    Caregiver Education
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Guidance and training for family members and support
                    networks on safe handling and care techniques.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-3xl">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-4">
                    <Activity size={24} />
                  </div>
                  <h3 className="font-bold text-[#0F172A] mb-2 text-base">
                    Chronic-Condition Support
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Targeted symptom tracking and clinical management for
                    long-term health conditions.
                  </p>
                </div>

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
        </main>
      )}

      {/* ==================== PEDIATRIC SERVICES ==================== */}
      {currentRoute === "/services/pediatric-services" && (
        <main>
          <section className="relative bg-[#0F172A] text-white overflow-hidden">
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=2000&q=80"
                alt="Pediatric services expansion coming soon"
                className="w-full h-full object-cover opacity-15"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent" />
            </div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 text-[#F59E0B] font-medium text-xs tracking-wider uppercase mb-6 border border-amber-500/30">
                  <span className="w-2 h-2 rounded-full bg-[#F59E0B] animate-pulse" />
                  Coming Soon
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6 tracking-tight">
                  Pediatric Services{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
                    Are Coming Soon
                  </span>
                </h1>
                <p className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed">
                  One Community Home Health is preparing to expand its services
                  to support children and their families. Pediatric services are
                  not currently available.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="#email-signup"
                    className="px-8 py-4 bg-[#F59E0B] hover:bg-[#FBBF24] text-[#0F172A] font-bold rounded-xl transition-all text-sm flex items-center gap-2"
                  >
                    <Mail size={16} /> Join Email Update List
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-100 space-y-8">
                <div className="flex items-center gap-4 p-4 bg-amber-50 rounded-2xl border border-amber-100">
                  <div className="w-12 h-12 bg-[#F59E0B] text-[#0F172A] rounded-xl flex items-center justify-center shrink-0">
                    <Bell size={24} />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-[#0F172A]">
                      Pediatric Service Is Coming Soon
                    </h2>
                    <p className="text-xs text-slate-600">
                      We are expanding our care offerings to pediatric patients.
                      Please note that services for children are not currently
                      available.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <span className="text-[#F59E0B] font-semibold tracking-widest uppercase text-xs">
                    Program Preview
                  </span>
                  <h3 className="text-2xl font-extrabold text-[#0F172A]">
                    Expanding Family-Centered Care at Home
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    One Community Home Health is preparing to expand its
                    services to support children and their families. Our future
                    pediatric care programs will bring the same high standards
                    of clinical excellence and compassionate in-home support to
                    young patients requiring specialized medical attention in
                    familiar home environments.
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Pediatric services are not currently available. We invite
                    you to join our email list below to receive updates as
                    program information becomes available.
                  </p>
                </div>

                {/* Email Update Signup Form */}
                <div
                  id="email-signup"
                  className="pt-6 border-t border-slate-100"
                >
                  {emailSubmitted ? (
                    <div className="bg-amber-50 p-6 rounded-2xl text-center space-y-3">
                      <div className="w-12 h-12 bg-[#F59E0B] text-[#0F172A] rounded-full flex items-center justify-center mx-auto">
                        <CheckCircle2 size={24} />
                      </div>
                      <h4 className="font-bold text-[#0F172A] text-base">
                        You're on the list!
                      </h4>
                      <p className="text-xs text-slate-600 max-w-sm mx-auto">
                        Thank you for signing up. We will notify you at{" "}
                        <span className="font-semibold">{emailInput}</span> as
                        soon as our pediatric program information is released.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleEmailSubmit} className="space-y-4">
                      <div>
                        <h4 className="font-bold text-[#0F172A] text-base mb-1">
                          Stay Updated on Pediatric Care
                        </h4>
                        <p className="text-xs text-slate-600">
                          Enter your email address to receive launch updates and
                          program announcements.
                        </p>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <input
                          type="email"
                          required
                          placeholder="Enter your email address..."
                          value={emailInput}
                          onChange={(e) => setEmailInput(e.target.value)}
                          className="flex-1 px-4 py-3 bg-slate-50 rounded-xl text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
                        />
                        <button
                          type="submit"
                          className="px-6 py-3 bg-[#F59E0B] hover:bg-[#FBBF24] text-[#0F172A] font-bold rounded-xl transition-all text-sm flex items-center justify-center gap-2 shrink-0"
                        >
                          Sign Up for Updates <ArrowRight size={16} />
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </section>
        </main>
      )}

      {/* Footer */}
      <footer className="bg-[#0F172A] text-white py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="flex items-center justify-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#F59E0B] flex items-center justify-center text-[#0F172A] font-bold text-sm">
              OC
            </div>
            <span className="font-bold text-base">
              One Community Home Health
            </span>
          </div>
          <p className="text-xs text-slate-400 max-w-xl mx-auto">
            JACOP Healthcare Services, Inc., serving clients since 2010, is now
            doing business as One Community Home Health. Providing trusted
            clinical excellence and supportive home care.
          </p>
          <div className="text-xs text-slate-500 pt-4 border-t border-slate-800/60">
            &copy; {new Date().getFullYear()} One Community Home Health. All
            rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
