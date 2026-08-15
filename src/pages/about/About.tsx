import CoreValuesSection from "@/components/about/Corevaluessection";
import CommitmentCareSection from "@/components/about/HomeHealthSection";
import LegacyMissionSection from "@/components/about/Legacy";
import PageHeader from "@/components/headers/PageHeaders";

const AboutPage = () => {
  return (
    <div>
      <PageHeader title="About US" />
      <LegacyMissionSection />
      <CoreValuesSection />
      <CommitmentCareSection />
    </div>
  );
};

export default AboutPage;
