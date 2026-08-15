import { Home, HeartHandshake, Phone, AlertCircle } from "lucide-react";

export const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#FBF8F2] ohh-sans flex flex-col justify-between">
      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 py-20">
        <div className="max-w-xl w-full text-center space-y-8 bg-white p-8 md:p-12 rounded-3xl border border-[#EFE8D8] shadow-[0_16px_40px_-12px_rgba(10,33,64,0.08)] relative overflow-hidden">
          {/* Decorative top badge */}
          <div className="inline-flex items-center gap-2 bg-[#F3ECDC] px-4 py-1.5 rounded-full text-xs font-bold text-[#0A2140] tracking-wider uppercase">
            <AlertCircle size={14} className="text-[#C89B3C]" />
            <span>Page Not Found</span>
          </div>

          {/* 404 Heading */}
          <div className="space-y-3">
            <h1 className="ohh-serif text-6xl md:text-7xl font-bold text-[#0A2140] tracking-tight">
              404
            </h1>
            <h2 className="ohh-serif text-2xl md:text-3xl font-semibold text-[#2C3947]">
              Let’s get you back on track
            </h2>
            <p className="text-sm md:text-base text-[#5B6B7C] max-w-md mx-auto leading-relaxed">
              The page you are looking for might have been moved, deleted, or
              never existed. Don't worry—compassionate care is just a click
              away.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0A2140] hover:bg-[#123258] text-white text-sm font-bold py-3 px-6 rounded-xl transition-colors shadow-sm"
            >
              <Home size={16} />
              <span>Return Home</span>
            </a>
            <a
              href="/contact#consultation"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#E4B95A] hover:bg-[#D9A93F] text-[#0A2140] text-sm font-bold py-3 px-6 rounded-xl transition-colors"
            >
              <HeartHandshake size={16} />
              <span>Request Care</span>
            </a>
          </div>

          {/* Help Line text */}
          <div className="pt-6 border-t border-[#F0EBDD] text-xs text-[#8A93A0] flex flex-col sm:flex-row items-center justify-center gap-1.5">
            <span>Need immediate assistance? Call us at</span>
            <a
              href="tel:9723251598"
              className="font-semibold text-[#0A2140] hover:text-[#C89B3C] transition-colors inline-flex items-center gap-1"
            >
              <Phone size={12} className="text-[#C89B3C]" />
              <span>(972) 325-1598</span>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
