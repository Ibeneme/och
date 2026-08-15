import { Helmet } from "react-helmet-async";
import LeadershipPage from "@/components/about/leadership/Leadership";
import LeadershipHero from "@/components/about/leadership/LeadershipHero";
import PageHeader from "@/components/headers/PageHeaders";

const Leadership = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "Leadership Team | One Community Home Health Care",
    description:
      "Meet the experienced executive leadership and management team at One Community Home Health Care (JACOP Healthcare Services).",
    publisher: {
      "@type": "MedicalOrganization",
      name: "One Community Home Health Care",
      alternateName: "JACOP Healthcare Services, Inc.",
    },
  };

  return (
    <>
      <Helmet>
        <title>Leadership Team | One Community Home Health Care</title>
        <meta
          name="description"
          content="Meet the experienced executive leadership and management team at One Community Home Health Care (JACOP Healthcare Services), dedicated to compassionate clinical excellence."
        />
        <meta
          name="keywords"
          content="leadership team, executive team, management, home health care leadership, JACOP Healthcare, One Community"
        />
        <meta
          property="og:title"
          content="Leadership Team | One Community Home Health Care"
        />
        <meta
          property="og:description"
          content="Meet the experienced executive leadership and management team guiding One Community Home Health Care."
        />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <div>
        <PageHeader title="About Us - Leadership" />
        <div className="bg-[#0A1F3F] border-b border-[#132E54] py-2.5 px-4 text-center text-xs md:text-sm text-[#F3E5AB] font-medium tracking-wide">
          JACOP Healthcare Services, Inc., serving clients since 2010, is now
          doing business as One Community Home Health.
        </div>
        <LeadershipHero />
        <LeadershipPage />
      </div>
    </>
  );
};

export default Leadership;
