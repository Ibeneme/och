import AboutTrustSection from "@/components/home_components/AboutTrustSection";
import BrandPromiseBentoSection from "@/components/home_components/BrandPromiseBentoSection";
import CoreServicesPage from "@/components/home_components/CoreSection";
import InsurancePaymentGridSection from "@/components/home_components/InsurancePaymentGridSection";
import OneCommunitySection from "@/components/home_components/OneCom";
import ServiceAreaAndCtaSection from "@/components/home_components/ServiceAreaAndCtaSection";
import Hero from "@/components/home_components/hero";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <AboutTrustSection />
      <BrandPromiseBentoSection />
      <CoreServicesPage />
      <InsurancePaymentGridSection />
      <OneCommunitySection />
      <ServiceAreaAndCtaSection />
    </div>
  );
};

export default HomePage;
