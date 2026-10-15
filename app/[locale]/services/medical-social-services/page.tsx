import React from "react";
import MedicalSocialServicesComponent from "@/src/components/services/MedicalSocialServices/MedicalSocialServices";
import { pageMetadata } from "@/app/seo";

export const generateMetadata = pageMetadata("medicalSocial");

const page = () => {
  return (
    <div>
      <MedicalSocialServicesComponent/>
    </div>
  );
};

export default page;
