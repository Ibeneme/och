
import CoreValuesSection from '@/src/components/about/CoreValuesSection'
import { buildMetadata } from "@/app/seo";
import TestimonialsComponent from "./leadership/Testimonials";

export const metadata = buildMetadata({
  title: "About Us",
  description:
    "Learn about One Community Home Health, our core values, and our commitment to compassionate, patient-centered home health care.",
  path: "/about-us",
});
const page = () => {
  return (
    <div>
      <TestimonialsComponent />
      <CoreValuesSection />
    </div>
  );
};

export default page;