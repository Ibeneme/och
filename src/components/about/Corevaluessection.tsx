import {
  HeartHandshake,
  Award,
  UserCheck,
  ShieldCheck,
  Users,
  MapPinned,
} from "lucide-react";

const VALUES = [
  {
    tag: "(care)",
    label: "why we start here",
    title: "Compassion",
    description:
      "Treating every patient and family with genuine empathy, warmth, and kindness.",
    icon: HeartHandshake,
    theme: "navy",
  },
  {
    tag: "(standard)",
    label: "clinical rigor",
    title: "Clinical Excellence",
    description:
      "Upholding rigorous standards of professional nursing and therapy to support safe, effective recovery.",
    icon: Award,
    theme: "amber",
  },
  {
    tag: "(dignity)",
    label: "individual care",
    title: "Respect",
    description:
      "Honoring the individuality, preferences, and dignity of every person in our care.",
    icon: UserCheck,
    theme: "emerald",
  },
  {
    tag: "(daily)",
    label: "you can count on us",
    title: "Reliability",
    description:
      "Providing dependable, responsive service that patients and referral partners can count on every day.",
    icon: ShieldCheck,
    theme: "emerald",
  },
  {
    tag: "(team)",
    label: "coordinated care",
    title: "Collaboration",
    description:
      "Partnering closely with physicians, families, and caregivers to build coordinated, personalized plans of care.",
    icon: Users,
    theme: "amber",
  },
  {
    tag: "(local)",
    label: "dfw metroplex",
    title: "Community",
    description:
      "Serving our neighbors across the Dallas-Fort Worth Metroplex with deep dedication and local accountability.",
    icon: MapPinned,
    theme: "navy",
  },
];

const THEME_STYLES: any = {
  navy: {
    panel: "bg-[#0a1628] text-white",
    tagColor: "text-slate-400",
    labelAccent: "text-[#E4B95A]/80",
    footer: "text-slate-400",
  },
  amber: {
    panel: "bg-[#E4B95A] text-[#0a1628]",
    tagColor: "text-[#0a1628]",
    labelAccent: "text-[#0a1628]",
    footer: "text-[#E4B95A]",
  },
  emerald: {
    panel: "bg-[#0a1628] text-white",
    tagColor: "text-[#0a1628]",
    labelAccent: "text-[#fff]",
    footer: "text-[#0a1628]",
  },
};

export default function CoreValuesSection() {
  return (
    <section className="py-20 px-6 bg-[#faf8f2] flex items-center justify-center font-sans">
      <div className="max-w-7xl mx-auto w-full">
        <div className="mb-14 max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E4B95A]">
            What We Stand On
          </span>
          <h2 className="text-4xl md:text-8xl font-bold text-[#0a1628] mt-2 tracking-tight">
            Our Core Values
          </h2>
          <p className="text-slate-600 text-base md:text-lg mt-4 leading-relaxed">
            The principles that guide every interaction and plan of care.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200 rounded-3xl overflow-hidden border border-slate-200 shadow-sm">
          {VALUES.map((value) => {
            const styles = THEME_STYLES[value.theme as any];
            const Icon = value.icon;
            return (
              <div key={value.title} className="bg-white flex flex-col">
                <div
                  className={`${styles.panel} px-7 pt-8 pb-7 relative`}
                  style={{
                    clipPath:
                      "polygon(0 0, 100% 0, 100% 100%, 28px 100%, 0 calc(100% - 28px))",
                  }}
                >
                  <div className="flex items-start justify-between">
                    <Icon className="w-9 h-9" strokeWidth={1.75} />
                    <span
                      className={`text-xs uppercase mt-1 ${styles.tagColor}`}
                    >
                      {value.tag}
                    </span>
                  </div>
                  <div className="mt-7 text-xl font-extrabold tracking-tight leading-none">
                    {value.title}
                  </div>
                  <div
                    className={`mt-3 text-xs uppercase tracking-wide ${styles.labelAccent}`}
                  >
                    {value.label}
                  </div>
                </div>
                <div className="px-7 py-7 flex-1 flex flex-col justify-between space-y-5">
                  <p className="text-slate-700 text-sm leading-relaxed">
                    {value.description}
                  </p>
                  <div
                    className={`pt-4 border-t border-slate-100 text-[11px] font-bold uppercase tracking-wider ${styles.footer}`}
                  >
                    Core Value
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
