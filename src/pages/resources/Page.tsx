import { Helmet } from "react-helmet-async";
import ResourcesPage from "@/components/resources/ResourcesPage";

const Resources = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Patient & Family Resources | One Community Home Health Care",
    description:
      "Access helpful educational guides, patient forms, FAQs, and resources for patients and families receiving care from One Community Home Health Care.",
    publisher: {
      "@type": "MedicalOrganization",
      name: "One Community Home Health Care",
      alternateName: "JACOP Healthcare Services, Inc.",
    },
  };

  return (
    <>
      <Helmet>
        <title>
          Patient & Family Resources | One Community Home Health Care
        </title>
        <meta
          name="description"
          content="Access helpful educational guides, patient forms, FAQs, and resources for patients and families receiving care from One Community Home Health Care."
        />
        <meta
          name="keywords"
          content="patient resources, family resources, home health guides, medical forms, patient education, JACOP Healthcare, One Community"
        />
        <meta
          property="og:title"
          content="Patient & Family Resources | One Community Home Health Care"
        />
        <meta
          property="og:description"
          content="Access educational guides, FAQs, and essential resources for patients and families at One Community Home Health Care."
        />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <div>
        <ResourcesPage />
      </div>
    </>
  );
};

export default Resources;
