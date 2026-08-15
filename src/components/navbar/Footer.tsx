import {
  HeartHandshake,
  Phone,
  MapPin,
  Clock,
  ShieldCheck,
  Users,
} from "lucide-react";

export const Footer = () => {
  return (
    <footer className="w-full bg-[#07162C] text-white pt-16 pb-12 px-6 md:px-12 border-t border-[#102B4E]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-16">
        {/* Column 1: Quick Links */}
        <div className="space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#E4B95A]">
            Quick Links
          </h4>
          <ul className="space-y-2.5 text-sm">
            <li>
              <a
                href="/"
                className="text-white/70 hover:text-white transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about-us"
                className="text-white/70 hover:text-white transition-colors"
              >
                About Our Agency
              </a>
            </li>
            <li>
              <a
                href="/who-we-serve/seniors"
                className="text-white/70 hover:text-white transition-colors"
              >
                Who We Serve
              </a>
            </li>
            <li>
              <a
                href="/insurance-payment-options"
                className="text-white/70 hover:text-white transition-colors"
              >
                Insurance & Payment
              </a>
            </li>
            <li>
              <a
                href="/careers"
                className="text-white/70 hover:text-white transition-colors"
              >
                Careers & Hiring
              </a>
            </li>
          </ul>
        </div>

        {/* Column 2: Clinical Services */}
        <div className="space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#E4B95A]">
            Clinical Services
          </h4>
          <ul className="space-y-2.5 text-sm">
            <li>
              <a
                href="/services/skilled-nursing"
                className="text-white/70 hover:text-white transition-colors"
              >
                Skilled Nursing
              </a>
            </li>
            <li>
              <a
                href="/services/physical-therapy"
                className="text-white/70 hover:text-white transition-colors"
              >
                Physical Therapy
              </a>
            </li>
            <li>
              <a
                href="/services/occupational-therapy"
                className="text-white/70 hover:text-white transition-colors"
              >
                Occupational Therapy
              </a>
            </li>
            <li>
              <a
                href="/services/speech-therapy"
                className="text-white/70 hover:text-white transition-colors"
              >
                Speech Therapy
              </a>
            </li>
            <li>
              <a
                href="/services/home-health-aide"
                className="text-white/70 hover:text-white transition-colors"
              >
                Home Health Aide
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 & 4 Combined structure for Office Info & CTA layout similar to reference */}
        <div className="lg:col-span-2 space-y-6">
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#E4B95A]">
            Office Info & Get In Touch
          </h4>

          {/* Grid Layout for the 4 info sections */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs">
            {/* Location & Office */}
            <div className="flex items-start gap-2.5">
              <MapPin size={16} className="text-[#E4B95A] shrink-0 mt-0.5" />
              <div>
                <p className="font-bold uppercase tracking-wider text-white/90 mb-0.5">
                  Location & Office
                </p>
                <p className="text-white/70 leading-relaxed">
                  Mansfield, TX 75052
                  <br />
                  <span className="text-[#E4B95A] font-medium">
                    Appointment Only
                  </span>
                </p>
              </div>
            </div>

            {/* Admin Hours */}
            <div className="flex items-start gap-2.5">
              <Clock size={16} className="text-[#E4B95A] shrink-0 mt-0.5" />
              <div>
                <p className="font-bold uppercase tracking-wider text-white/90 mb-0.5">
                  Admin Hours
                </p>
                <p className="text-white/70 leading-relaxed">
                  Mon – Fri: 9:00 AM – 5:00 PM
                  <br />
                  <span className="text-[#E4B95A] font-medium">
                    24/7 On-Call Coming Soon
                  </span>
                </p>
              </div>
            </div>

            {/* Care & Coverage */}
            <div className="flex items-start gap-2.5">
              <ShieldCheck
                size={16}
                className="text-[#E4B95A] shrink-0 mt-0.5"
              />
              <div>
                <p className="font-bold uppercase tracking-wider text-white/90 mb-0.5">
                  Care & Coverage
                </p>
                <p className="text-white/70 leading-relaxed">
                  Expanded Payment Pathways
                  <br />
                  <span className="text-white/90 font-medium">
                    DFW Metroplex Wide
                  </span>
                </p>
              </div>
            </div>

            {/* Portals & Careers */}
            <div className="flex items-start gap-2.5">
              <Users size={16} className="text-[#E4B95A] shrink-0 mt-0.5" />
              <div>
                <p className="font-bold uppercase tracking-wider text-white/90 mb-0.5">
                  Portals & Careers
                </p>
                <p className="text-white/70 leading-relaxed">
                  HHAeXchange Employee Access
                  <br />
                  <span className="text-[#E4B95A] font-medium">
                    2-Year CNA Workflow
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Contact Details & CTA Row */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <a
              href="tel:9723251598"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white text-sm font-semibold py-3 px-4 rounded-xl transition-colors"
            >
              <Phone size={15} className="text-[#E4B95A] shrink-0" />
              <span>(972) 325-1598</span>
            </a>
            <a
              href="/contact#consultation"
              className="inline-flex items-center justify-center gap-2 bg-[#E4B95A] hover:bg-[#D9A93F] text-[#07162C] text-sm font-bold py-3 px-4 rounded-xl transition-colors"
            >
              <HeartHandshake size={16} />
              <span>Request Care Consultation</span>
            </a>
          </div>
        </div>
      </div>

      {/* Massive Display Branding Typography Section (Mimicking the layout style from the reference image) */}
      <div className="max-w-7xl mx-auto pt-4 pb-10 overflow-hidden">
        <h2 className="ohh-serif text-[13vw] lg:text-[11vw] font-bold tracking-tighter leading-none text-white/95 select-none whitespace-nowrap">
          One Community
        </h2>
      </div>

      {/* Bottom Legal Bar */}
      <div className="max-w-7xl mx-auto pt-6 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-white/50">
        <div className="space-y-1">
          <p>
            © {new Date().getFullYear()} JACOP Healthcare Services, Inc. All
            rights reserved.
          </p>
          <p className="text-[11px] text-white/40">
            Operated by JACOP Healthcare Services, Inc. • Now serving new
            patients and accepting referrals.
          </p>
        </div>
        <div className="flex items-center gap-6">
          <a
            href="/privacy-policy"
            className="hover:text-white transition-colors"
          >
            Privacy Policy
          </a>
          <a
            href="/terms-of-service"
            className="hover:text-white transition-colors"
          >
            Terms of Service
          </a>
          <a
            href="/accessibility"
            className="hover:text-white transition-colors"
          >
            Accessibility
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
