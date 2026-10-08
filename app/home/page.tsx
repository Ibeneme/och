import React from 'react'
import HeroSection from '@/src/components/home_components/HeroSection'
import InsuranceTickerSection from '@/src/components/home_components/InsuranceTickerSection'
import AboutTrustSection from '@/src/components/home_components/AboutTrustSection'
import ServicesLandingPage from '@/src/components/home_components/ServicesLandingPage'
import CoreServicesPage from '@/src/components/home_components/CoreSection'
import Scrollers from '@/src/components/home_components/Scrollers'
import OneCommunitySection from '@/src/components/home_components/OneCommunitySection'
import OneCommunityContact from '@/src/components/home_components/OneCommunityContact'
import { buildMetadata } from "@/app/seo";

export const metadata = buildMetadata({
  title: "Skilled Nursing & In-Home Care",
  description:
    "One Community Home Health delivers skilled nursing, physical therapy, and daily assistance at home, so patients can recover and live well in familiar surroundings.",
  path: "/",
  absolute: true,
});

type Props = {}

const HomePage = (props: Props) => {
  return (
    <main className="w-full overflow-x-hidden">
      <HeroSection />
      <InsuranceTickerSection />
      <AboutTrustSection />
      <ServicesLandingPage />
      <CoreServicesPage />
      <Scrollers />
      <OneCommunitySection />
      <OneCommunityContact />
    </main>
  )
}

export default HomePage