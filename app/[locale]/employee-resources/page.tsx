import EmployeeResourcesPage from "@/src/components/resources/EmployeeResourcesPage";
import { pageMetadata } from "@/app/seo";

export const generateMetadata = pageMetadata("employeeResources");

const page = () => {
  return (
    <div>
      <EmployeeResourcesPage />
    </div>
  );
};

export default page;
