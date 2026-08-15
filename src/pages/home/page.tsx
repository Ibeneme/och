import { Helmet } from "react-helmet-async";
import AboutTrustSection from "@/components/home_components/AboutTrustSection";
import BrandPromiseBentoSection from "@/components/home_components/BrandPromiseBentoSection";
import CoreServicesPage from "@/components/home_components/CoreSection";
import InsurancePaymentGridSection from "@/components/home_components/InsurancePaymentGridSection";
import OneCommunitySection from "@/components/home_components/OneCom";
import ServiceAreaAndCtaSection from "@/components/home_components/ServiceAreaAndCtaSection";
import Hero from "@/components/home_components/hero";

const HomePage = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    name: "One Community Home Health Care",
    alternateName: "JACOP Healthcare Services, Inc.",
    telephone: "+1-972-325-1598",
    description:
      "Professional, physician-directed in-home healthcare services including skilled nursing, physical therapy, and supportive care operated by JACOP Healthcare Services.",
    medicalSpecialty: [
      "Skilled Nursing",
      "Physical Therapy",
      "Occupational Therapy",
      "Speech Therapy",
      "Medical Social Services",
      "Home Health Aide",
    ],
  };

  return (
    <>
      <Helmet>
        <title>
          One Community Home Health Care | Skilled Nursing & In-Home Care
        </title>
        <meta
          name="description"
          content="Professional, physician-directed in-home healthcare services including skilled nursing, physical therapy, and supportive care operated by JACOP Healthcare Services."
        />
        <meta
          name="keywords"
          content="home health care, skilled nursing, physical therapy, in-home care, senior care, JACOP Healthcare, One Community"
        />
        <meta
          property="og:title"
          content="One Community Home Health Care | Skilled Nursing & In-Home Care"
        />
        <meta
          property="og:description"
          content="Professional, physician-directed in-home healthcare services delivered with steady hands in the comfort of home."
        />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <div>
        <Hero />
        <AboutTrustSection />
        <BrandPromiseBentoSection />
        <CoreServicesPage />
        <InsurancePaymentGridSection />
        <OneCommunitySection />
        <ServiceAreaAndCtaSection />
      </div>
    </>
  );
};

export default HomePage;
