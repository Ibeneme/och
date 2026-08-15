import { Helmet } from "react-helmet-async";
import InsurancePaymentOptionsPage from "@/components/insurance/InsurancePaymentOptionsPage";

const Insurance = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Insurance & Payment Options | One Community Home Health Care",
    description:
      "Learn about accepted insurance plans, Medicare, Medicaid, and flexible payment options for home health care services at One Community Home Health Care.",
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
          Insurance & Payment Options | One Community Home Health Care
        </title>
        <meta
          name="description"
          content="Learn about accepted insurance plans, Medicare, Medicaid, and flexible payment options for home health care services at One Community Home Health Care."
        />
        <meta
          name="keywords"
          content="home health insurance, medicare, medicaid, accepted insurance, home health care payment options, JACOP Healthcare"
        />
        <meta
          property="og:title"
          content="Insurance & Payment Options | One Community Home Health Care"
        />
        <meta
          property="og:description"
          content="Explore accepted insurance plans, Medicare, and payment options for our physician-directed home healthcare services."
        />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <div>
        <InsurancePaymentOptionsPage />
      </div>
    </>
  );
};

export default Insurance;
