import CoreValuesSection from '@/src/components/about/CoreValuesSection'
import TestimonialsComponent from "./leadership/Testimonials";
import { pageMetadata } from "@/app/seo";

export const generateMetadata = pageMetadata("aboutUs");

const page = () => {
  return (
    <div>
      <TestimonialsComponent />
      <CoreValuesSection />
    </div>
  );
};

export default page;
