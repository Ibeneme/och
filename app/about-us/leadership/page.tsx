import AboutHeader from "@/src/components/about/About";
import JourneyPhilosophySection from "@/src/components/about/leadership/JourneyPhilosophySection";
import { buildMetadata } from "@/app/seo";
import LeadershipHero from "@/src/components/about/leadership/LeadershipHero";
import TestimonialsComponent from "./Testimonials";

export const metadata = buildMetadata({
  title: "Leadership & Our Story",
  description:
    "Meet the leadership behind One Community Home Health, formerly JACOP Healthcare Services, Inc., serving clients since 2010.",
  path: "/about-us/leadership",
});

const page = () => {
  return (
    <div>
     
      <div className="bg-[#0A1F3F] border-b border-[#132E54] py-2.5 px-4 text-center text-xs md:text-sm text-[#F3E5AB] font-medium tracking-wide">
        JACOP Healthcare Services, Inc., serving clients since 2010, is now
        doing business as One Community Home Health.
      </div>
      <LeadershipHero />
      <JourneyPhilosophySection />
      <TestimonialsComponent />
    </div>
  );
};

export default page;
