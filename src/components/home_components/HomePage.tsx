import HeroSection from "@/src/components/home_components/HeroSection";
import InsuranceTickerSection from "@/src/components/home_components/InsuranceTickerSection";
import AboutTrustSection from "@/src/components/home_components/AboutTrustSection";
import ServicesLandingPage from "@/src/components/home_components/ServicesLandingPage";
import CoreServicesPage from "@/src/components/home_components/CoreSection";
import Scrollers from "@/src/components/home_components/Scrollers";
import OneCommunitySection from "@/src/components/home_components/OneCommunitySection";
import OneCommunityContact from "@/src/components/home_components/OneCommunityContact";

export default function HomePage() {
  return (
    <div className="w-full overflow-x-hidden">
      <HeroSection />
      <InsuranceTickerSection />
      <AboutTrustSection />
      <ServicesLandingPage />
      <CoreServicesPage />
      <Scrollers />
      <OneCommunitySection />
      <OneCommunityContact />
    </div>
  );
}
