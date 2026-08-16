import {
  HeartHandshake,
  Phone,
  MapPin,
  Clock,
  ShieldCheck,
  Users,
  ArrowUpRight,
} from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Our Agency", href: "/about-us" },
  { label: "Leadership Team", href: "/about-us/leadership" },
  { label: "Who We Serve", href: "/who-we-serve/seniors" },
  { label: "Insurance & Payment", href: "/insurance-payment-options" },
  { label: "Patient Referrals", href: "/referrals" },
  { label: "Resources", href: "/resources" },
  { label: "Employee Resources", href: "/employee-resources" },
  { label: "Careers & Hiring", href: "/careers" },
  {
    label: "CNA Talent Network",
    href: "/careers/cna-home-health-aide-application",
  },
  { label: "Contact Us", href: "/contact" },
];

const clinicalLinks = [
  { label: "Skilled Nursing", href: "/services/skilled-nursing" },
  { label: "Physical Therapy", href: "/services/physical-therapy" },
  { label: "Occupational Therapy", href: "/services/occupational-therapy" },
  { label: "Speech Therapy", href: "/services/speech-therapy" },
  { label: "Home Health Aide", href: "/services/home-health-aide" },
  {
    label: "Medical Social Services",
    href: "/services/medical-social-services",
  },
  { label: "Wound Care", href: "/services/wound-care" },
  {
    label: "Chronic Disease Management",
    href: "/services/chronic-disease-management",
  },
  { label: "Medication Management", href: "/services/medication-management" },
  { label: "Fall Prevention", href: "/services/fall-prevention" },
  { label: "Post-Surgical Care", href: "/services/post-surgical-care" },
];

const supportiveLinks = [
  { label: "Companion Care", href: "/services/companion-care" },
  { label: "Respite Care", href: "/services/respite-care" },
  {
    label: "Daily Lifestyle Support",
    href: "/services/daily-lifestyle-support",
  },
  { label: "Veteran Care", href: "/services/veteran-care" },
  {
    label: "Adults with Disabilities",
    href: "/services/adults-with-disabilities",
  },
  { label: "Pediatric Services", href: "/services/pediatric-services" },
];

const infoItems = [
  {
    icon: MapPin,
    label: "Location & office",
    lines: ["Mansfield, TX 75052"],
    accent: "By appointment only",
  },
  {
    icon: Clock,
    label: "Admin hours",
    lines: ["Mon – Fri, 9:00 AM – 5:00 PM"],
    accent: "24/7 on-call coming soon",
  },
  {
    icon: ShieldCheck,
    label: "Care & coverage",
    lines: ["Expanded payment pathways"],
    accent: "DFW Metroplex wide",
  },
  {
    icon: Users,
    label: "Portals & careers",
    lines: ["HHAeXchange employee access"],
    accent: "2-year CNA workflow",
  },
];

const FooterLinkColumn = ({ title, links }: any) => (
  <div>
    <h4 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#E4B95A]/90 mb-5">
      {title}
    </h4>
    <ul className="space-y-3">
      {links.map((link: any) => (
        <li key={link.href + link.label}>
          <a
            href={link.href}
            className="group inline-flex items-center gap-1.5 text-[13.5px] text-white/65 hover:text-white transition-colors duration-200"
          >
            <span className="relative">
              {link.label}
              <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-[#E4B95A] transition-all duration-300 group-hover:w-full" />
            </span>
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export const Footer = () => {
  return (
    <footer className="w-full bg-[#07162C] text-white border-t border-[#102B4E] relative overflow-hidden">
      {/* faint route motif — a home-to-home care line running the width of the footer */}
      <svg
        className="absolute top-0 left-0 w-full h-24 opacity-[0.08] pointer-events-none"
        viewBox="0 0 1200 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,60 C150,10 300,90 450,50 C600,10 750,90 900,45 C1000,15 1100,55 1200,30"
          fill="none"
          stroke="#E4B95A"
          strokeWidth="2"
          strokeDasharray="1 10"
          strokeLinecap="round"
        />
      </svg>

      {/* Top CTA strip */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 pt-14 pb-12 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 border-b border-white/10">
        <div className="max-w-xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#E4B95A] mb-3">
            Now accepting new patients
          </p>
          <h3 className="ohh-serif text-2xl md:text-3xl font-semibold leading-snug text-white">
            Compassionate home care, right where family is.
          </h3>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 shrink-0">
          <a
            href="tel:9723251598"
            className="inline-flex items-center justify-center gap-2 border border-white/15 hover:border-white/30 bg-white/5 hover:bg-white/10 text-white text-sm font-semibold py-3.5 px-6 rounded-xl transition-colors"
          >
            <Phone size={16} className="text-[#E4B95A] shrink-0" />
            (972) 325-1598
          </a>
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-[#0F6DF9] text-[#fff] text-sm font-bold py-3.5 px-6 rounded-xl transition-colors"
          >
            <HeartHandshake size={16} />
            Request a care consultation
          </a>
        </div>
      </div>

      {/* Main link grid */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-x-8 gap-y-12">
        <div className="lg:col-span-3">
          <FooterLinkColumn title="Navigation" links={navLinks} />
        </div>
        <div className="lg:col-span-3">
          <FooterLinkColumn title="Clinical services" links={clinicalLinks} />
        </div>
        <div className="lg:col-span-3">
          <FooterLinkColumn title="Supportive care" links={supportiveLinks} />
        </div>

        {/* Office info */}
        <div className="lg:col-span-3">
          <h4 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#E4B95A]/90 mb-5">
            Office info
          </h4>
          <div className="space-y-4 mb-6">
            {infoItems.map(({ icon: Icon, label, lines, accent }) => (
              <div key={label} className="flex items-start gap-3">
                <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/5">
                  <Icon size={14} className="text-[#E4B95A]" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-white/50">
                    {label}
                  </p>
                  {lines.map((line) => (
                    <p
                      key={line}
                      className="text-[13.5px] text-white/80 leading-snug"
                    >
                      {line}
                    </p>
                  ))}
                  <p className="text-[12px] text-[#E4B95A] font-medium mt-0.5">
                    {accent}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <a
            href="/contact"
            className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-white hover:text-[#E4B95A] transition-colors"
          >
            Get directions & full contact info
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>

      {/* Brand wordmark */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 pb-10 overflow-hidden">
        <h2 className="ohh-serif text-[13vw] lg:text-[9vw] font-bold tracking-tighter leading-none text-white select-none whitespace-nowrap [-webkit-text-stroke:1px_rgba(255,255,255,0.95)] [-webkit-text-fill-color:transparent] lg:[-webkit-text-fill-color:white] lg:[-webkit-text-stroke:0]">
          One Community
        </h2>
      </div>

      {/* Bottom legal bar */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-6 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-white/45">
        <div className="space-y-1">
          <p>
            © {new Date().getFullYear()} JACOP Healthcare Services, Inc. All
            rights reserved.
          </p>
          <p className="text-[11px] text-white/35">
            Operated by JACOP Healthcare Services, Inc. — now serving new
            patients and accepting referrals.
          </p>
        </div>
        <div className="flex items-center gap-6">
          <a href="/contact" className="hover:text-white transition-colors">
            Privacy policy
          </a>
          <a href="/contact" className="hover:text-white transition-colors">
            Terms of service
          </a>
          <a href="/contact" className="hover:text-white transition-colors">
            Accessibility
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
