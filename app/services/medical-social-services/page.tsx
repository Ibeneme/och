import React from "react";
import MedicalSocialServicesComponent from "@/src/components/services/MedicalSocialServices/MedicalSocialServices";
import { buildMetadata } from "@/app/seo";

export const metadata = buildMetadata({
  title: "Medical Social Services",
  description:
    "Medical social workers connect patients and families with community resources, emotional support, and long-term care planning.",
  path: "/services/medical-social-services",
});

const page = () => {
  return (
    <div>
      <MedicalSocialServicesComponent/>
    </div>
  );
};

export default page;
