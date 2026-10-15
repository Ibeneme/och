import ResourcesPage from "@/src/components/resources/ResourcesPage";
import { pageMetadata } from "@/app/seo";

export const generateMetadata = pageMetadata("resources");

const page = () => {
  return (
    <div>
      <ResourcesPage />
    </div>
  );
};

export default page;
