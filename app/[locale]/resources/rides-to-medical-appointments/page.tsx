import RidesResourcePage from "@/src/components/resources/rides-to-medical-appointments";
import { pageMetadata } from "@/app/seo";

export const generateMetadata = pageMetadata("rides");

const page = () => {
  return (
    <div>
      <RidesResourcePage />
    </div>
  );
};

export default page;
