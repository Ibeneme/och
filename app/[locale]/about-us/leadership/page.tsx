import JourneyPhilosophySection from "@/src/components/about/leadership/JourneyPhilosophySection";
import LeadershipHero from "@/src/components/about/leadership/LeadershipHero";
import { pageMetadata, toLocale } from "@/app/seo";

export const generateMetadata = pageMetadata("leadership");

const page = async ({ params }: { params: Promise<{ locale: string }> }) => {
  const locale = toLocale((await params).locale);
  return (
    <div>
      <div className="bg-[#0A1F3F] border-b border-[#132E54] py-2.5 px-4 text-center text-xs md:text-sm text-[#F3E5AB] font-medium tracking-wide">
        {locale === "es"
          ? "JACOP Healthcare Services, Inc., al servicio de nuestros clientes desde 2010, ahora opera como One Community Home Health."
          : "JACOP Healthcare Services, Inc., serving clients since 2010, is now doing business as One Community Home Health."}
      </div>
      <LeadershipHero />
      <JourneyPhilosophySection />
    </div>
  );
};

export default page;
