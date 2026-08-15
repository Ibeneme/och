import { Coffee, Smile, ClipboardList, HeartHandshake, ShieldCheck, Home, Phone } from "lucide-react";

export default function RespiteCareComp() {
  return (
    <div className="min-h-screen bg-[#FAFAF8] text-slate-800 font-sans">
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
              designed to prevent caregiver burnout and support family well-being.
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
                  Supporting Family Caregivers
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] mt-2 mb-4">
                  Recharge With Confidence While Loved Ones Are Well Cared For
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Family caregivers provide invaluable dedication, but taking
                  time for personal wellness is essential. Our respite care
                  services offer short-term, professional in-home support so you
                  can step away to rest, handle errands, or attend to personal
                  needs knowing your loved one is safe and engaged.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 text-sm font-medium text-slate-700">
                {["Temporary Family Relief", "Supervision & Companionship", "Burnout Prevention", "Short-Term In-Home Support"].map(
                  (item) => (
                    <div key={item} className="bg-white p-4 rounded-2xl flex items-center gap-3 shadow-sm">
                      <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                      {item}
                    </div>
                  )
                )}
              </div>
            </div>
            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-3xl shadow-lg">
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
            <span className="text-[#F59E0B] font-semibold tracking-widest uppercase text-xs">Service Scope</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] mt-2 mb-4">Respite Care Services</h2>
            <p className="text-slate-600 text-sm">
              Our respite programs provide flexible, compassionate coverage tailored to your family schedule.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Coffee, title: "Temporary Family Relief", desc: "Scheduled short-term care giving family members reliable time away for rest and personal appointments." },
              { icon: Smile, title: "Supervision & Companionship", desc: "Attentive oversight and friendly conversation to keep clients safe, stimulated, and comfortable." },
              { icon: ClipboardList, title: "Assistance with Daily Routines", desc: "Support with meals, personal schedules, and daily habits while regular primary caregivers are away." },
              { icon: HeartHandshake, title: "Flexible Scheduling", desc: "Hourly, daily, or overnight coverage options designed around your family’s unique needs." },
              { icon: ShieldCheck, title: "Peace of Mind", desc: "Professional caregivers who follow established routines and communicate clearly with the family." },
              { icon: Home, title: "In-Home Comfort", desc: "Care delivered in the familiar home environment so clients remain comfortable and secure." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white p-6 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-4">
                  <Icon size={24} />
                </div>
                <h3 className="font-bold text-[#0F172A] mb-2 text-base">{title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}