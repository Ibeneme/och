import React from "react";
import FallPreventionComp from "@/src/components/services/FallPreventionComp/FallPreventionComp";
import { pageMetadata } from "@/app/seo";

export const generateMetadata = pageMetadata("fallPrevention");

const page = () => {
  return (
    <div>
      <FallPreventionComp />
    </div>
  );
};

export default page;
