import WhoWeServePage from "@/src/components/home_components/WhoWeServePage";
import { pageMetadata } from "@/app/seo";

export const generateMetadata = pageMetadata("whoWeServe");

const page = () => {
  return (
    <div>
      <WhoWeServePage />
    </div>
  );
};

export default page;
