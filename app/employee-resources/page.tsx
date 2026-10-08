import EmployeeResourcesPage from "../../src/components/resources/EmployeeResourcesPage";
import { buildMetadata } from "@/app/seo";

export const metadata = buildMetadata({
  title: "Employee Resources",
  description:
    "Forms, policies, and helpful resources for One Community Home Health team members.",
  path: "/employee-resources",
});

const page = () => {
  return (
    <div>
      <EmployeeResourcesPage />
    </div>
  );
};

export default page;
