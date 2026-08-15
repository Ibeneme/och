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
    panel: "bg-[#0A2140] text-white",
    tagColor: "text-slate-300",
    labelAccent: "text-[#E4B95A]",
    footer: "text-[#5B6B7C]",
  },
  amber: {
    panel: "bg-[#E4B95A] text-[#0A2140]",
    tagColor: "text-[#0A2140]/80",
    labelAccent: "text-[#0A2140]",
    footer: "text-[#8A7B5C]",
  },
  emerald: {
    panel: "bg-[#0A2140] text-white",
    tagColor: "text-slate-300",
    labelAccent: "text-[#E4B95A]",
    footer: "text-[#5B6B7C]",
  },
};

export default function CoreValuesSection() {
  return (
    <section className="py-20 px-6 bg-[#FBF8F2] flex items-center justify-center ohh-sans">
      <div className="max-w-7xl mx-auto w-full">
        <div className="mb-14 max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C89B3C]">
            What We Stand On
          </span>
          <h2 className="ohh-serif text-4xl md:text-5xl font-semibold text-[#0A2140] mt-2 tracking-tight">
            Our Core Values
          </h2>
          <p className="text-[#5B6B7C] text-base md:text-lg mt-4 leading-relaxed">
            The principles that guide every interaction and plan of care.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#EFE8D8] rounded-3xl overflow-hidden border border-[#EFE8D8]">
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
                  <div className="ohh-serif mt-7 text-2xl font-semibold tracking-tight leading-none">
                    {value.title}
                  </div>
                  <div
                    className={`mt-3 text-xs uppercase tracking-wide font-semibold ${styles.labelAccent}`}
                  >
                    {value.label}
                  </div>
                </div>
                <div className="px-7 py-7 flex-1 flex flex-col justify-between space-y-5">
                  <p className="text-[#3A4657] text-sm leading-relaxed">
                    {value.description}
                  </p>
                  <div
                    className={`pt-4 border-t border-[#F0EBDD] text-[11px] font-bold uppercase tracking-wider ${styles.footer}`}
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
