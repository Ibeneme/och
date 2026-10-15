import CNATalentNetworkPage from "@/src/components/careers/CNATalentNetworkPage";
import { pageMetadata } from "@/app/seo";

export const generateMetadata = pageMetadata("cnaApplication");

const page = () => {
  return (
    <div>
      <CNATalentNetworkPage />
    </div>
  );
};

export default page;
