import { Helmet } from "react-helmet-async";
import CNATalentNetworkPage from "@/components/careers/CNATalentNetworkPage";

const CareerCNA = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "CNA Talent Network & Careers | One Community Home Health Care",
    description:
      "Join the CNA Talent Network at One Community Home Health Care. Explore rewarding career opportunities for Certified Nursing Assistants and care professionals.",
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
          CNA Talent Network & Careers | One Community Home Health Care
        </title>
        <meta
          name="description"
          content="Join the CNA Talent Network at One Community Home Health Care. Explore rewarding career opportunities for Certified Nursing Assistants and care professionals."
        />
        <meta
          name="keywords"
          content="CNA jobs, Certified Nursing Assistant careers, home health careers, nursing jobs, JACOP Healthcare, One Community"
        />
        <meta
          property="og:title"
          content="CNA Talent Network & Careers | One Community Home Health Care"
        />
        <meta
          property="og:description"
          content="Explore rewarding career opportunities for Certified Nursing Assistants with One Community Home Health Care."
        />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <div>
        <CNATalentNetworkPage />
      </div>
    </>
  );
};

export default CareerCNA;
