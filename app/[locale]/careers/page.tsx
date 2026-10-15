import CareersPage from "@/src/components/careers/page";
import { pageMetadata } from "@/app/seo";

export const generateMetadata = pageMetadata("careers");

const page = () => {
  return (
    <div>
      <CareersPage />
    </div>
  );
};

export default page;
