import GetPaidToCarePage from "@/src/components/services/get-paid-to-care-for-a-loved-one/page";
import { pageMetadata } from "@/app/seo";

export const generateMetadata = pageMetadata("getPaidToCare");

const page = () => {
  return (
    <div>
      <GetPaidToCarePage />
    </div>
  );
};

export default page;
