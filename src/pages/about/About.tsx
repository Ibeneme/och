import { Helmet } from "react-helmet-async";
import CoreValuesSection from "@/components/about/Corevaluessection";
import CommitmentCareSection from "@/components/about/HomeHealthSection";
import LegacyMissionSection from "@/components/about/Legacy";
import PageHeader from "@/components/headers/PageHeaders";

const AboutPage = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Us | One Community Home Health Care",
    description:
      "Learn about the mission, legacy, core values, and commitment to compassionate in-home healthcare at One Community Home Health Care (JACOP Healthcare Services).",
    publisher: {
      "@type": "MedicalOrganization",
      name: "One Community Home Health Care",
      alternateName: "JACOP Healthcare Services, Inc.",
    },
  };

  return (
    <>
      <Helmet>
        <title>About Us | One Community Home Health Care</title>
        <meta
          name="description"
          content="Learn about the mission, legacy, core values, and commitment to compassionate in-home healthcare at One Community Home Health Care (JACOP Healthcare Services)."
        />
        <meta
          name="keywords"
          content="about us, home health agency mission, healthcare values, legacy, JACOP Healthcare, One Community"
        />
        <meta
          property="og:title"
          content="About Us | One Community Home Health Care"
        />
        <meta
          property="og:description"
          content="Discover our mission, legacy, and unwavering commitment to providing professional, compassionate in-home healthcare."
        />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <div>
        <PageHeader title="About US" />
        <LegacyMissionSection />
        <CoreValuesSection />
        <CommitmentCareSection />
      </div>
    </>
  );
};

export default AboutPage;
