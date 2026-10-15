import React from "react";
import VeteranCareComp from "@/src/components/services/VeteranCareComp/VeteranCareComp";
import { pageMetadata } from "@/app/seo";

export const generateMetadata = pageMetadata("veteranCare");

const page = () => {
  return (
    <div>
      <VeteranCareComp />
    </div>
  );
};

export default page;
