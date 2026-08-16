import { Home, HeartHandshake, Phone, MapPinned } from "lucide-react";

export const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#FBF8F2] ohh-sans flex flex-col justify-between">
      <main className="flex-1 flex items-center justify-center px-4 py-20">
        <div className="max-w-3xl w-full bg-white rounded-3xl border border-[#EFE8D8] shadow-[0_16px_40px_-12px_rgba(10,33,64,0.08)] overflow-hidden">
          {/* Signature notched panel */}
          <div
            className="bg-[#0A2140] text-white px-10 sm:px-12 pt-12 pb-10 relative"
            style={{
              clipPath:
                "polygon(0 0, 100% 0, 100% 100%, 36px 100%, 0 calc(100% - 36px))",
            }}
          >
            <div className="absolute -top-16 -right-16 w-56 h-56 bg-[#E4B95A]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="flex items-start justify-between relative z-10">
              <span className="ohh-serif text-7xl md:text-9xl font-semibold tracking-tighter leading-none text-[#E4B95A]">
                404
              </span>
              <span className="text-xs uppercase text-slate-300 mt-3 tracking-widest">
                (lost)
              </span>
            </div>
            <div className="mt-6 flex items-baseline gap-1.5 text-xs uppercase tracking-wide text-slate-300 relative z-10">
              <span className="text-[#E4B95A] font-semibold">status /</span>
              <span>page not found</span>
            </div>
          </div>

          {/* Body */}
          <div className="px-10 sm:px-16 py-12 space-y-10 text-center">
            <div className="space-y-4 max-w-xl mx-auto">
              <h2 className="ohh-serif text-3xl md:text-4xl font-semibold text-[#0A2140]">
                Let&rsquo;s get you back on track
              </h2>
              <p className="text-sm md:text-base text-[#5B6B7C] leading-relaxed">
                The page you&rsquo;re looking for might have been moved,
                deleted, or never existed. Compassionate care is still just a
                click away.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0A2140] hover:bg-[#123258] text-[#E4B95A] text-sm font-bold py-4 px-8 rounded-full transition-colors"
              >
                <Home size={16} />
                <span>Return home</span>
              </a>
              <a
                href="/contact#consultation"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#F3ECDC] hover:bg-[#EADFC2] text-[#0A2140] text-sm font-bold py-4 px-8 rounded-full transition-colors"
              >
                <HeartHandshake size={16} />
                <span>Request care</span>
              </a>
            </div>

            <div className="pt-8 border-t border-[#F0EBDD] flex flex-col sm:flex-row items-center justify-center gap-6">
              <div className="flex items-center gap-1.5 text-xs text-[#8A93A0]">
                <span>Need immediate assistance? Call</span>
                <a
                  href="tel:9723251598"
                  className="font-semibold text-[#0A2140] hover:text-[#C89B3C] transition-colors inline-flex items-center gap-1"
                >
                  <Phone size={12} className="text-[#C89B3C]" />
                  <span>(972) 325-1598</span>
                </a>
              </div>
              <div className="hidden sm:block w-px h-3 bg-[#EFE8D8]" />
              <div className="flex items-center gap-1.5 text-xs text-[#8A93A0]">
                <MapPinned size={12} className="text-[#C89B3C]" />
                <span>Serving the DFW Metroplex</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
