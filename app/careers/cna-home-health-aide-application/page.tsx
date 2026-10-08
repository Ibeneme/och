import CNATalentNetworkPage from "@/src/components/careers/CNATalentNetworkPage";
import { buildMetadata } from "@/app/seo";

export const metadata = buildMetadata({
  title: "CNA & Home Health Aide Application",
  description:
    "Apply to join our CNA and home health aide talent network at One Community Home Health and help deliver compassionate care at home.",
  path: "/careers/cna-home-health-aide-application",
});

const page = () => {
  return (
    <div>
      <CNATalentNetworkPage />
    </div>
  );
};

export default page;
