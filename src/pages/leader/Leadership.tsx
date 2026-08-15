import LeadershipPage from "@/components/about/leadership/Leadership";
import BottomCTAAndFooter from "@/components/about/leadership/LeadershipCTA";
import LeadershipHero from "@/components/about/leadership/LeadershipHero";
import PageHeader from "@/components/headers/PageHeaders";

const Leadership = () => {
  return (
    <div>
      <PageHeader title="About Us - Leadership" />
      <div className="bg-[#0A1F3F] border-b border-[#132E54] py-2.5 px-4 text-center text-xs md:text-sm text-[#F3E5AB] font-medium tracking-wide">
        JACOP Healthcare Services, Inc., serving clients since 2010, is now
        doing business as One Community Home Health.
      </div>
      <LeadershipHero />
      <LeadershipPage />
      <BottomCTAAndFooter />
    </div>
  );
};

export default Leadership;
