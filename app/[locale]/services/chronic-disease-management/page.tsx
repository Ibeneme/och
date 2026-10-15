import React from "react";
import ChronicDiseaseManagementComp from "@/src/components/services/ChronicDiseaseManagementComp/ChronicDiseaseManagementComp";
import { pageMetadata } from "@/app/seo";

export const generateMetadata = pageMetadata("chronicDisease");

const page = () => {
  return (
    <div>
      <ChronicDiseaseManagementComp />
    </div>
  );
};

export default page;
