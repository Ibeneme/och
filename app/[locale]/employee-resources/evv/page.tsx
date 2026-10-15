import EmployeeEVVHelpPage from "@/src/components/resources/Evv";
import { pageMetadata } from "@/app/seo";

export const generateMetadata = pageMetadata("evv");

const page = () => {
  return (
    <div>
      <EmployeeEVVHelpPage />
    </div>
  );
};

export default page;
