import ReferralsPage from "@/src/components/referrals/Referrals";
import { pageMetadata } from "@/app/seo";

export const generateMetadata = pageMetadata("referrals");

const page = () => {
  return (
    <div>
      <ReferralsPage />
    </div>
  );
};

export default page;
