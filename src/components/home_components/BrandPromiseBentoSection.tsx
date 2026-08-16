import {
  ArrowRight,
  Users,
  ShieldCheck,
  HeartHandshake,
  Bell,
} from "lucide-react";

interface CarePathway {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  badge?: string;
  image: string;
  isDark?: boolean;
  actionType: "button" | "text" | "cta";
  footerText?: string;
  href: string;
}

const carePathways: CarePathway[] = [
  {
    title: "Seniors",
    description:
      "Supporting safety, independence, recovery, and quality of life at home through specialized assistance and personalized care routines.",
    icon: Users,
    image:
      "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=600&q=80",
    actionType: "button",
    footerText: "Request consultation",
    href: "/who-we-serve/seniors",
  },
  {
    title: "Veterans",
    description:
      "Respectful care and direct links to official VA resources for veterans and eligible families seeking dependable home assistance.",
    icon: ShieldCheck,
    badge: "Trusted",
    image:
      "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=600&q=80",
    actionType: "text",
    footerText: "Official VA Resource Integration",
    href: "/services/veteran-care",
  },
  {
    title: "Adults with Disabilities",
    description:
      "Person-centered support that promotes dignity, everyday independence, and tailored assistance structured around unique personal needs.",
    icon: HeartHandshake,
    badge: "Personalized",
    image:
      "https://images.unsplash.com/photo-1599282271323-f4d8e3b18df1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWR1bHQlMjBkaXNhYmlsdHl8ZW58MHx8MHx8fDA%3D",
    actionType: "text",
    footerText: "Customized Daily Support",
    href: "/services/adults-with-disabilities",
  },
  {
    title: "Pediatric Service",
    description:
      "We are expanding our specialized care offerings to support children and young families. Stay connected for updates.",
    icon: Bell,
    badge: "Coming Soon",
    image:
      "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=600&q=80",
    isDark: true,
    actionType: "cta",
    href: "/services/pediatric-services",
  },
];

export default function ServicesLandingPage() {
  return (
    <main className="bg-[#051122] min-h-screen pt-24 sm:pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Sticky intro rail */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28 space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#E4B95A] bg-white/10 w-fit">
                <span className="w-2 h-2 rounded-full bg-[#E4B95A]" />
                Who We Serve
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-[1.08]">
                Compassionate care tailored for every stage of life
                <span className="text-[#E4B95A]">.</span>
              </h1>
              <p className="text-base sm:text-lg text-white/70 font-medium leading-relaxed">
                Professional, nurse-guided support delivered right to your
                doorstep. Explore our dedicated care pathways designed to
                preserve independence, dignity, and peace of mind.
              </p>
              <div className="hidden lg:block h-px w-16 bg-white/15" />
              <div className="hidden lg:flex flex-col gap-3">
                {carePathways.map((pathway, idx) => (
                  <a
                    key={pathway.title}
                    href={`#pathway-${idx}`}
                    className="flex items-center gap-3 text-sm font-bold text-white/60 hover:text-[#E4B95A] transition-colors"
                  >
                    <span className="text-[#E4B95A]/70 text-xs font-mono">
                      0{idx + 1}
                    </span>
                    {pathway.title}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* 2x2 card grid */}
          <div className="lg:col-span-8">
            <div className="grid sm:grid-cols-2 gap-6">
              {carePathways.map((pathway, idx) => {
                const Icon = pathway.icon;
                return (
                  <div
                    key={pathway.title}
                    id={`pathway-${idx}`}
                    className="group relative rounded-[32px] p-8 flex flex-col justify-between scroll-mt-28 bg-[#0C213F]/50 transition-all duration-300 text-white"
                  >
                    {/* Top Section: Icon & Badge */}
                    <div className="flex items-center justify-between mb-8">
                      <div className="w-14 h-14 rounded-2xl bg-[#E4B95A]/10 text-[#E4B95A] flex items-center justify-center">
                        <Icon className="w-7 h-7" strokeWidth={1.75} />
                      </div>
                      {pathway.badge ? (
                        <span className="text-[11px] font-black tracking-wider text-[#07162C] uppercase bg-[#E4B95A] px-3.5 py-1.5 rounded-full">
                          {pathway.badge}
                        </span>
                      ) : (
                        <span className="text-xs font-bold text-white/40 uppercase tracking-widest font-mono">
                          Pathway 0{idx + 1}
                        </span>
                      )}
                    </div>

                    {/* Middle Section: Image banner + text details */}
                    <div className="space-y-6">
                      <div className="relative h-44 w-full rounded-2xl overflow-hidden">
                        <img
                          src={pathway.image}
                          alt={pathway.title}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#07162C]/70 via-transparent to-transparent" />
                      </div>

                      <div>
                        <h3 className="font-serif text-2xl font-semibold tracking-tight text-white mb-3">
                          {pathway.title}
                        </h3>
                        <p className="text-sm text-white/75 font-medium leading-relaxed">
                          {pathway.description}
                        </p>
                      </div>
                    </div>

                    {/* Bottom Section: Actionable Footer */}
                    <div className="pt-8 mt-8">
                      {pathway.actionType === "button" ? (
                        <a
                          href={pathway.href}
                          className="inline-flex items-center text-sm font-bold text-white hover:text-[#E4B95A] transition-colors cursor-pointer w-full justify-between group/link"
                        >
                          <span>{pathway.footerText}</span>
                          <div className="w-8 h-8 rounded-full bg-[#E4B95A] text-[#07162C] flex items-center justify-center transition-transform duration-300 group-hover/link:translate-x-1">
                            <ArrowRight className="w-4 h-4" />
                          </div>
                        </a>
                      ) : pathway.actionType === "cta" ? (
                        <a
                          href={pathway.href}
                          className="w-full bg-[#E4B95A] hover:bg-[#D9A93F] text-[#07162C] font-bold px-6 py-3.5 rounded-full text-sm transition-all text-center cursor-pointer block active:scale-[0.98]"
                        >
                          Explore Pediatric Services
                        </a>
                      ) : (
                        <a
                          href={pathway.href}
                          className="inline-flex items-center justify-between text-xs font-black tracking-widest text-[#E4B95A] uppercase w-full hover:underline"
                        >
                          <span>{pathway.footerText}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
