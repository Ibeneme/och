import React from "react";
import CompanionCareComp from "@/src/components/services/CompanionCareComp/CompanionCareComp";
import { pageMetadata } from "@/app/seo";

export const generateMetadata = pageMetadata("companionCare");

const page = () => {
  return (
    <div>
      <CompanionCareComp />
    </div>
  );
};

export default page;
