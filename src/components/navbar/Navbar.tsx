import { useState, useEffect } from "react";
import {
  ChevronDown,
  Menu,
  X,
  HeartHandshake,
  Phone,
  Stethoscope,
  Heart,
  Users,
  Shield,
  Briefcase,
  Activity,
  ArrowRight,
  Home,
  CreditCard,
  BookOpen,
  Info,
  UserCheck,
} from "lucide-react";

const SteadyLine = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 170 20"
    className={className}
    aria-hidden="true"
    fill="none"
  >
    <path
      d="M0 10 H55 L62 10 L67 2 L74 18 L80 10 L86 10 L91 6 L96 10 H170"
      stroke="#E4B95A"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="ohh-pulse-path"
    />
  </svg>
);

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<
    string | null
  >(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "unset";
  }, [mobileMenuOpen]);

  const toggleMobileDropdown = (name: string) => {
    setActiveMobileDropdown(activeMobileDropdown === name ? null : name);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setActiveMobileDropdown(null);
  };

  const clinicalServices = [
    {
      href: "/services/skilled-nursing",
      label: "Skilled Nursing",
      desc: "24/7 registered nursing care at home",
    },
    {
      href: "/services/physical-therapy",
      label: "Physical Therapy",
      desc: "Rehabilitation and mobility recovery",
    },
    {
      href: "/services/occupational-therapy",
      label: "Occupational Therapy",
      desc: "Daily living skills adaptation",
    },
    {
      href: "/services/speech-therapy",
      label: "Speech Therapy",
      desc: "Speech and swallowing therapy",
    },
    {
      href: "/services/medical-social-services",
      label: "Medical Social Services",
      desc: "Counseling and community support",
    },
    {
      href: "/services/home-health-aide",
      label: "Home Health Aide",
      desc: "Personal care and daily assistance",
    },
  ];

  const specialtyServices = [
    { href: "/services/wound-care", label: "Wound care" },
    {
      href: "/services/chronic-disease-management",
      label: "Chronic disease care",
    },
    { href: "/services/medication-management", label: "Medication management" },
    { href: "/services/post-surgical-care", label: "Post-surgical care" },
    { href: "/services/fall-prevention", label: "Fall prevention" },
    { href: "/services/veteran-care", label: "Veteran care" },
  ];

  const supportiveServices = [
    { href: "/services/companion-care", label: "Companion Care" },
    { href: "/services/respite-care", label: "Respite Care" },
    {
      href: "/services/daily-lifestyle-support",
      label: "Daily Lifestyle Support",
    },
    {
      href: "/services/adults-with-disabilities",
      label: "Adults with Disabilities",
    },
    {
      href: "/services/pediatric-services",
      label: "Pediatric Services",
      badge: "Coming soon",
    },
  ];

  const aboutLinks = [
    {
      href: "/about-us",
      label: "About our agency",
      icon: Heart,
      desc: "Our mission, vision, and values",
    },
    {
      href: "/about-us/leadership",
      label: "Leadership team",
      icon: Users,
      desc: "Meet our executive leadership",
    },
    {
      href: "/who-we-serve/seniors",
      label: "Who we serve",
      icon: Shield,
      desc: "Seniors and the families we support",
    },
    {
      href: "/careers",
      label: "Careers & hiring",
      icon: Briefcase,
      desc: "Join our team of care professionals",
    },
    {
      href: "/careers/cna-home-health-aide-application",
      label: "CNA / Home Health Aide Application",
      icon: UserCheck,
      desc: "Apply to join our home health aide program",
    },
  ];

  const resourceLinks = [
    {
      href: "/resources",
      label: "Patient & Family Resources",
      icon: BookOpen,
      desc: "Educational guides, FAQs, and forms for patients",
    },
    {
      href: "/employee-resources",
      label: "Employee Resources",
      icon: UserCheck,
      desc: "Handbook, HR/payroll support, EVV, and reporting instructions",
    },
    {
      href: "/contact",
      label: "Contact us",
      icon: Phone,
      desc: "Get in touch or schedule a consultation",
    },
    {
      href: "/referrals",
      label: "Refer a patient",
      icon: HeartHandshake,
      desc: "Start a referral for someone in your care",
    },
  ];

  return (
    <header className="w-full ohh-sans sticky top-0 z-50">
      {/* ========== UTILITY BAR ========== */}
      <div className="bg-[#0A2140] text-white text-[11px] sm:text-[12px] py-2 px-3 sm:px-6 md:px-8 relative z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          <span className="inline-flex items-center gap-1.5 text-[#A8C0D4] truncate">
            <span className="relative flex h-1.5 w-1.5 flex-shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#7FA283] opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#7FA283]" />
            </span>
            <span className="truncate">
              One Community Home Health is a DBA of JACOP Healthcare Services,
              Inc. Serving Clients Since 2010
            </span>
          </span>

          <div className="flex items-center gap-4 sm:gap-5 flex-shrink-0">
            <SteadyLine className="hidden lg:block w-14 h-3 opacity-90" />
            <a
              href="/referrals"
              className="inline-flex items-center gap-1 text-white/75 hover:text-[#E4B95A] transition-colors font-medium group whitespace-nowrap"
            >
              <span>Refer a patient</span>
              <ArrowRight
                size={12}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </a>
            <a
              href="tel:9723251598"
              className="hidden sm:inline-flex items-center gap-1.5 font-semibold text-[#E4B95A] hover:text-[#F1CE7F] transition-colors whitespace-nowrap"
            >
              <Phone size={13} strokeWidth={2.2} />
              <span>(972) 325-1598</span>
            </a>
          </div>
        </div>
      </div>

      {/* ========== MAIN NAV ========== */}
      <div
        className={`px-3 sm:px-6 md:px-8 transition-all duration-300 relative z-50 bg-white backdrop-blur-sm border-b ${
          isScrolled
            ? "py-2.5 border-[#E8DFCB] shadow-[0_1px_12px_rgba(10,33,64,0.06)]"
            : "py-3.5 border-[#F0E9D9]"
        }`}
      >
        <nav
          className="max-w-7xl mx-auto flex items-center justify-between"
          role="navigation"
        >
          {/* Brand */}
          <a
            href="/"
            className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0A2140]/40 rounded-xl p-1 -ml-1"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0A2140] flex items-center justify-center group-hover:bg-[#123258] transition-colors flex-shrink-0">
              <HeartHandshake
                size={18}
                className="text-[#E4B95A] sm:w-5 sm:h-5"
              />
            </div>
            <div className="flex flex-col justify-center leading-none">
              <span className="ohh-serif text-[#0A2140] font-semibold text-[1.15rem] sm:text-[1.35rem] tracking-tight">
                One Community
              </span>
              <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#8A7B5C] font-semibold mt-0.5">
                Home Health Care
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-0.5 xl:gap-1">
            <a
              href="/"
              className="px-3.5 py-2 rounded-lg text-[13px] font-semibold text-[#3A4657] hover:text-[#0A2140] hover:bg-[#F3ECDC]/70 transition-colors"
            >
              Home
            </a>

            {/* SERVICES MEGA MENU */}
            <div className="relative group">
              <button
                aria-expanded="false"
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-[13px] font-semibold text-[#3A4657] hover:text-[#0A2140] hover:bg-[#F3ECDC]/70 transition-colors"
              >
                <span>Services</span>
                <ChevronDown
                  size={14}
                  className="opacity-50 group-hover:rotate-180 transition-transform duration-300"
                />
              </button>

              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 before:absolute before:-top-3 before:left-0 before:w-full before:h-3">
                <div className="w-[880px] max-w-[calc(100vw-2rem)] bg-white rounded-2xl border border-[#EFE8D8] overflow-hidden grid grid-cols-12 shadow-xl shadow-[#0A2140]/[0.06]">
                  {/* Left panel */}
                  <div className="col-span-12 lg:col-span-3 bg-[#F7F1E6] p-6 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#EFE8D8]">
                    <div>
                      <div className="w-10 h-10 rounded-full bg-[#0A2140] flex items-center justify-center mb-5 text-[#E4B95A]">
                        <Stethoscope size={18} />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#8A7B5C]">
                        In-home care
                      </span>
                      <h3 className="ohh-serif text-[1.4rem] text-[#0A2140] font-semibold mt-2.5 leading-snug">
                        Comprehensive clinical care
                      </h3>
                      <p className="text-[13px] text-[#5B6B7C] mt-3 leading-relaxed">
                        Physician-directed healthcare, delivered with steady
                        hands in the comfort of home.
                      </p>
                    </div>
                    <a
                      href="/contact#consultation"
                      className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#0A2140] hover:text-[#123258] transition-colors group/link w-max"
                    >
                      <span className="border-b border-[#E4B95A] pb-0.5">
                        Schedule an assessment
                      </span>
                      <ArrowRight
                        size={14}
                        className="group-hover/link:translate-x-1 transition-transform"
                      />
                    </a>
                  </div>

                  {/* Link columns */}
                  <div className="col-span-12 lg:col-span-9 p-6 flex flex-col gap-6">
                    {/* Clinical */}
                    <div>
                      <div className="flex items-center gap-2 mb-3 text-[11px] font-bold text-[#0A2140] uppercase tracking-[0.12em]">
                        <span>Clinical disciplines</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-0.5">
                        {clinicalServices.map((item) => (
                          <a
                            key={item.href}
                            href={item.href}
                            className="block py-2 px-2.5 rounded-lg hover:bg-[#FBF8F2] transition-colors group/item"
                          >
                            <div className="text-[13.5px] font-semibold text-[#2C3947] group-hover/item:text-[#0A2140]">
                              {item.label}
                            </div>
                            <p className="text-[11.5px] text-[#8A93A0] mt-0.5 leading-snug">
                              {item.desc}
                            </p>
                          </a>
                        ))}
                      </div>
                    </div>

                    <div className="h-px bg-[#F0EBDD]" />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      {/* Specialties */}
                      <div>
                        <div className="flex items-center gap-2 mb-3 text-[11px] font-bold text-[#0A2140] uppercase tracking-[0.12em]">
                          <Activity size={13} className="text-[#C89B3C]" />
                          <span>Specialties</span>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {specialtyServices.map((item) => (
                            <a
                              key={item.href}
                              href={item.href}
                              className="text-[12.5px] font-medium text-[#3A4657] hover:text-[#0A2140] bg-[#FBF8F2] hover:bg-[#F3ECDC] border border-[#F0EBDD] rounded-full px-3 py-1.5 transition-colors"
                            >
                              {item.label}
                            </a>
                          ))}
                        </div>
                      </div>

                      {/* Supportive Care */}
                      <div>
                        <div className="flex items-center gap-2 mb-3 text-[11px] font-bold text-[#0A2140] uppercase tracking-[0.12em]">
                          <Heart size={13} className="text-[#C89B3C]" />
                          <span>Supportive care</span>
                        </div>
                        <ul className="space-y-0.5">
                          {supportiveServices.map((item) => (
                            <li key={item.href}>
                              <a
                                href={item.href}
                                className="flex items-center justify-between py-1.5 px-2.5 -mx-2.5 text-[13px] font-medium text-[#3A4657] hover:text-[#0A2140] hover:bg-[#FBF8F2] rounded-lg transition-colors"
                              >
                                <span>{item.label}</span>
                                {item.badge && (
                                  <span className="text-[10px] bg-[#F3ECDC] text-[#8A7B5C] px-2 py-0.5 rounded-md font-bold tracking-wide">
                                    {item.badge}
                                  </span>
                                )}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ABOUT MEGA MENU — same shell as Services: branded left
                panel + link column, instead of a plain list dropdown */}
            <div className="relative group">
              <button
                aria-expanded="false"
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-[13px] font-semibold text-[#3A4657] hover:text-[#0A2140] hover:bg-[#F3ECDC]/70 transition-colors"
              >
                <span>About</span>
                <ChevronDown
                  size={14}
                  className="opacity-50 group-hover:rotate-180 transition-transform duration-300"
                />
              </button>

              <div className="absolute top-full left-0 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 before:absolute before:-top-3 before:left-0 before:w-full before:h-3">
                <div className="w-[480px] xl:w-[560px] max-w-[calc(100vw-2rem)] bg-white rounded-2xl border border-[#EFE8D8] overflow-hidden grid grid-cols-12 shadow-xl shadow-[#0A2140]/[0.06]">
                  {/* Left panel */}
                  <div className="col-span-12 sm:col-span-4 bg-[#F7F1E6] p-6 flex flex-col justify-between border-b sm:border-b-0 sm:border-r border-[#EFE8D8]">
                    <div>
                      <div className="w-10 h-10 rounded-full bg-[#0A2140] flex items-center justify-center mb-5 text-[#E4B95A]">
                        <Heart size={18} />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#8A7B5C]">
                        Who we are
                      </span>
                      <h3 className="ohh-serif text-[1.25rem] text-[#0A2140] font-semibold mt-2.5 leading-snug">
                        Get to know our team
                      </h3>
                      <p className="text-[13px] text-[#5B6B7C] mt-3 leading-relaxed">
                        Rooted in trust, led by clinicians who call this
                        community home.
                      </p>
                    </div>
                    <a
                      href="/about-us"
                      className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#0A2140] hover:text-[#123258] transition-colors group/link w-max"
                    >
                      <span className="border-b border-[#E4B95A] pb-0.5">
                        Our full story
                      </span>
                      <ArrowRight
                        size={14}
                        className="group-hover/link:translate-x-1 transition-transform"
                      />
                    </a>
                  </div>

                  {/* Link column */}
                  <div className="col-span-12 sm:col-span-8 p-4 flex flex-col justify-center gap-0.5">
                    {aboutLinks.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        className="flex items-start gap-3 p-3 rounded-xl hover:bg-[#FBF8F2] transition-colors group/sub"
                      >
                        <div className="p-2 rounded-lg bg-[#F3ECDC] text-[#0A2140] group-hover/sub:bg-[#0A2140] group-hover/sub:text-[#E4B95A] transition-colors flex-shrink-0">
                          <item.icon size={15} />
                        </div>
                        <div className="pt-0.5">
                          <div className="text-sm font-semibold text-[#2C3947] group-hover/sub:text-[#0A2140]">
                            {item.label}
                          </div>
                          <p className="text-[11.5px] text-[#8A93A0] mt-0.5 leading-snug">
                            {item.desc}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <a
              href="/insurance-payment-options"
              className="px-3.5 py-2 rounded-lg text-[13px] font-semibold text-[#3A4657] hover:text-[#0A2140] hover:bg-[#F3ECDC]/70 transition-colors whitespace-nowrap"
            >
              Insurance & payment
            </a>

            {/* RESOURCES MEGA MENU — same shell as Services/About */}
            <div className="relative group">
              <button
                aria-expanded="false"
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-[13px] font-semibold text-[#3A4657] hover:text-[#0A2140] hover:bg-[#F3ECDC]/70 transition-colors"
              >
                <span>Resources</span>
                <ChevronDown
                  size={14}
                  className="opacity-50 group-hover:rotate-180 transition-transform duration-300"
                />
              </button>

              <div className="absolute top-full right-0 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 before:absolute before:-top-3 before:left-0 before:w-full before:h-3">
                <div className="w-[480px] xl:w-[560px] max-w-[calc(100vw-2rem)] bg-white rounded-2xl border border-[#EFE8D8] overflow-hidden grid grid-cols-12 shadow-xl shadow-[#0A2140]/[0.06]">
                  {/* Left panel */}
                  <div className="col-span-12 sm:col-span-4 bg-[#F7F1E6] p-6 flex flex-col justify-between border-b sm:border-b-0 sm:border-r border-[#EFE8D8]">
                    <div>
                      <div className="w-10 h-10 rounded-full bg-[#0A2140] flex items-center justify-center mb-5 text-[#E4B95A]">
                        <BookOpen size={18} />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#8A7B5C]">
                        Support
                      </span>
                      <h3 className="ohh-serif text-[1.25rem] text-[#0A2140] font-semibold mt-2.5 leading-snug">
                        Guides &amp; resources
                      </h3>
                      <p className="text-[13px] text-[#5B6B7C] mt-3 leading-relaxed">
                        Forms, FAQs, and support for patients, families, and our
                        care team.
                      </p>
                    </div>
                    <a
                      href="/resources"
                      className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#0A2140] hover:text-[#123258] transition-colors group/link w-max"
                    >
                      <span className="border-b border-[#E4B95A] pb-0.5">
                        Browse all resources
                      </span>
                      <ArrowRight
                        size={14}
                        className="group-hover/link:translate-x-1 transition-transform"
                      />
                    </a>
                  </div>

                  {/* Link column */}
                  <div className="col-span-12 sm:col-span-8 p-4 flex flex-col justify-center gap-0.5">
                    {resourceLinks.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        className="flex items-start gap-3 p-3 rounded-xl hover:bg-[#FBF8F2] transition-colors group/sub"
                      >
                        <div className="p-2 rounded-lg bg-[#F3ECDC] text-[#0A2140] group-hover/sub:bg-[#0A2140] group-hover/sub:text-[#E4B95A] transition-colors flex-shrink-0">
                          <item.icon size={15} />
                        </div>
                        <div className="pt-0.5">
                          <div className="text-sm font-semibold text-[#2C3947] group-hover/sub:text-[#0A2140]">
                            {item.label}
                          </div>
                          <p className="text-[11.5px] text-[#8A93A0] mt-0.5 leading-snug">
                            {item.desc}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-2.5">
            <a
              href="/contact"
              className="hidden sm:inline-flex items-center gap-2 bg-[#0A2140] text-white text-[13px] font-bold px-4 md:px-5 py-2.5 rounded-full transition-all active:scale-[0.98] whitespace-nowrap"
            >
              <HeartHandshake size={16} />
              <span>Request care</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="lg:hidden p-2.5 rounded-xl bg-[#F3ECDC] text-[#0A2140] hover:bg-[#EADFC2] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0A2140]/40 active:scale-95"
            >
              <div className="relative w-5 h-5 flex items-center justify-center">
                <span
                  className={`absolute transition-all duration-300 ${
                    mobileMenuOpen
                      ? "rotate-90 opacity-0 scale-50"
                      : "rotate-0 opacity-100 scale-100"
                  }`}
                >
                  <Menu size={20} />
                </span>
                <span
                  className={`absolute transition-all duration-300 ${
                    mobileMenuOpen
                      ? "rotate-0 opacity-100 scale-100 text-[#C89B3C]"
                      : "-rotate-90 opacity-0 scale-50"
                  }`}
                >
                  <X size={20} />
                </span>
              </div>
            </button>
          </div>
        </nav>
      </div>

      {/* ========== MOBILE DRAWER ========== */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[32px] z-40 transition-all duration-300 ease-in-out ${
          mobileMenuOpen
            ? "opacity-100 visible pointer-events-auto"
            : "opacity-0 invisible pointer-events-none"
        }`}
        style={{ height: "100vh" }}
      >
        <div
          className={`absolute inset-0 bg-[#0A2140]/50 backdrop-blur-[3px] transition-opacity duration-300 ${
            mobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeMobileMenu}
        />

        <div
          className={`absolute top-[90px] sm:top-[95px] inset-x-3 sm:inset-x-6 bg-white rounded-2xl border border-[#EFE8D8] overflow-hidden flex flex-col transition-all duration-300 transform origin-top shadow-2xl shadow-[#0A2140]/10 ${
            mobileMenuOpen
              ? "translate-y-0 scale-100 opacity-100"
              : "-translate-y-4 scale-[0.97] opacity-0"
          }`}
          style={{ maxHeight: "calc(100vh - 120px)" }}
        >
          <div className="overflow-y-auto p-3 space-y-1">
            <a
              href="/"
              onClick={closeMobileMenu}
              className="flex items-center gap-3 p-3.5 rounded-xl font-semibold text-[#2C3947] hover:bg-white transition-colors"
            >
              <div className="p-2 rounded-lg bg-[#F3ECDC] text-[#0A2140]">
                <Home size={17} />
              </div>
              Home
            </a>

            {/* Services accordion */}
            <div className="rounded-xl overflow-hidden bg-white/40">
              <button
                onClick={() => toggleMobileDropdown("services")}
                className="flex justify-between items-center w-full p-3.5 font-semibold text-[#2C3947] hover:bg-white transition-colors rounded-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#F3ECDC] text-[#0A2140]">
                    <Stethoscope size={17} />
                  </div>
                  Services
                </div>
                <ChevronDown
                  size={15}
                  className={`text-[#8A7B5C] transition-transform duration-300 ${
                    activeMobileDropdown === "services" ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  activeMobileDropdown === "services"
                    ? "max-h-[1400px] opacity-100 pb-3 px-2"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="space-y-1 text-sm bg-white rounded-xl p-2 border border-[#F0EBDD]">
                  <p className="font-bold text-[#8A7B5C] uppercase tracking-[0.1em] text-[10px] px-3 pt-2 pb-1">
                    Clinical
                  </p>
                  {clinicalServices.map((s) => (
                    <a
                      key={s.href}
                      href={s.href}
                      onClick={closeMobileMenu}
                      className="block p-2.5 text-[#3A4657] hover:text-[#0A2140] hover:bg-[#FBF8F2] rounded-lg font-medium transition-colors"
                    >
                      {s.label}
                    </a>
                  ))}

                  <div className="h-px w-full bg-[#EFE8D8] my-2" />

                  <p className="font-bold text-[#8A7B5C] uppercase tracking-[0.1em] text-[10px] px-3 pt-1 pb-1">
                    Specialties
                  </p>
                  <div className="flex flex-wrap gap-1.5 px-2.5 pb-1">
                    {specialtyServices.map((s) => (
                      <a
                        key={s.href}
                        href={s.href}
                        onClick={closeMobileMenu}
                        className="text-[12px] font-medium text-[#3A4657] hover:text-[#0A2140] bg-[#FBF8F2] hover:bg-white border border-[#F0EBDD] rounded-full px-3 py-1.5 transition-colors"
                      >
                        {s.label}
                      </a>
                    ))}
                  </div>

                  <div className="h-px w-full bg-[#EFE8D8] my-2" />

                  <p className="font-bold text-[#8A7B5C] uppercase tracking-[0.1em] text-[10px] px-3 pt-1 pb-1">
                    Supportive Care
                  </p>
                  {supportiveServices.map((s) => (
                    <a
                      key={s.href}
                      href={s.href}
                      onClick={closeMobileMenu}
                      className="flex items-center justify-between p-2.5 text-[#3A4657] hover:text-[#0A2140] hover:bg-[#FBF8F2] rounded-lg font-medium transition-colors"
                    >
                      <span>{s.label}</span>
                      {s.badge && (
                        <span className="text-[10px] bg-[#F3ECDC] text-[#8A7B5C] px-2 py-0.5 rounded-md font-bold tracking-wide">
                          {s.badge}
                        </span>
                      )}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* About accordion */}
            <div className="rounded-xl overflow-hidden bg-white/40">
              <button
                onClick={() => toggleMobileDropdown("about")}
                className="flex justify-between items-center w-full p-3.5 font-semibold text-[#2C3947] hover:bg-white transition-colors rounded-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#F3ECDC] text-[#0A2140]">
                    <Info size={17} />
                  </div>
                  About us
                </div>
                <ChevronDown
                  size={15}
                  className={`text-[#8A7B5C] transition-transform duration-300 ${
                    activeMobileDropdown === "about" ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  activeMobileDropdown === "about"
                    ? "max-h-[400px] opacity-100 pb-3 px-2"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="space-y-1 text-sm bg-white rounded-xl p-2 border border-[#F0EBDD]">
                  {aboutLinks.map((a) => (
                    <a
                      key={a.href}
                      href={a.href}
                      onClick={closeMobileMenu}
                      className="flex items-center gap-3 p-2.5 text-[#3A4657] hover:text-[#0A2140] hover:bg-[#FBF8F2] rounded-lg font-medium transition-colors group/sub"
                    >
                      <a.icon
                        size={15}
                        className="text-[#8A7B5C] group-hover/sub:text-[#C89B3C] transition-colors"
                      />
                      {a.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <a
              href="/insurance-payment-options"
              onClick={closeMobileMenu}
              className="flex items-center gap-3 p-3.5 rounded-xl font-semibold text-[#2C3947] hover:bg-white transition-colors"
            >
              <div className="p-2 rounded-lg bg-[#F3ECDC] text-[#0A2140]">
                <CreditCard size={17} />
              </div>
              Insurance & payment
            </a>

            {/* Resources accordion (Mobile) */}
            <div className="rounded-xl overflow-hidden bg-white/40">
              <button
                onClick={() => toggleMobileDropdown("resources")}
                className="flex justify-between items-center w-full p-3.5 font-semibold text-[#2C3947] hover:bg-white transition-colors rounded-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#F3ECDC] text-[#0A2140]">
                    <BookOpen size={17} />
                  </div>
                  Resources
                </div>
                <ChevronDown
                  size={15}
                  className={`text-[#8A7B5C] transition-transform duration-300 ${
                    activeMobileDropdown === "resources" ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  activeMobileDropdown === "resources"
                    ? "max-h-[300px] opacity-100 pb-3 px-2"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="space-y-1 text-sm bg-white rounded-xl p-2 border border-[#F0EBDD]">
                  {resourceLinks.map((r) => (
                    <a
                      key={r.href}
                      href={r.href}
                      onClick={closeMobileMenu}
                      className="flex items-center gap-3 p-2.5 text-[#3A4657] hover:text-[#0A2140] hover:bg-[#FBF8F2] rounded-lg font-medium transition-colors group/sub"
                    >
                      <r.icon
                        size={15}
                        className="text-[#8A7B5C] group-hover/sub:text-[#C89B3C] transition-colors"
                      />
                      {r.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-2 pb-3">
              <a
                href="/contact#consultation"
                onClick={closeMobileMenu}
                className="flex items-center justify-center gap-2 w-full text-center bg-[#0A2140] text-white font-bold py-3.5 rounded-full transition-all active:scale-[0.98] hover:shadow-md"
              >
                <HeartHandshake size={18} />
                Request a care consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
