import { Helmet } from "react-helmet-async";
import WhoWeServePage from "@/components/home_components/WhoWeServePage";

const WhoWeServe = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Who We Serve | One Community Home Health Care",
    description:
      "Discover who we serve at One Community Home Health Care, including seniors, adults with disabilities, and patients needing specialized in-home care.",
    publisher: {
      "@type": "MedicalOrganization",
      name: "One Community Home Health Care",
      alternateName: "JACOP Healthcare Services, Inc.",
    },
  };

  return (
    <>
      <Helmet>
        <title>Who We Serve | One Community Home Health Care</title>
        <meta
          name="description"
          content="Discover who we serve at One Community Home Health Care, including seniors, adults with disabilities, and patients needing specialized in-home care."
        />
        <meta
          name="keywords"
          content="who we serve, senior home care, disability care, patient groups, home health care services, JACOP Healthcare, One Community"
        />
        <meta
          property="og:title"
          content="Who We Serve | One Community Home Health Care"
        />
        <meta
          property="og:description"
          content="Explore the patient groups and communities we support with compassionate, physician-directed in-home healthcare."
        />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <div>
        <WhoWeServePage />
      </div>
    </>
  );
};

export default WhoWeServe;
