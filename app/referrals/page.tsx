import ReferralsPage from "../../src/components/referrals/Referrals";
import { buildMetadata } from "@/app/seo";

export const metadata = buildMetadata({
  title: "Referrals for Physicians & Care Partners",
  description:
    "Refer a patient to One Community Home Health. Hospitals, physicians, and care partners can send home health referrals quickly and easily.",
  path: "/referrals",
});

const page = () => {
  return (
    <div>
      <ReferralsPage />
    </div>
  );
};

export default page;
