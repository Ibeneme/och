import React from "react";
import PediatricServicesComp from "@/src/components/services/pediatric-services/pediatric-services";
import { pageMetadata } from "@/app/seo";

export const generateMetadata = pageMetadata("pediatric");

const page = () => {
  return (
    <div>
      <PediatricServicesComp />
    </div>
  );
};

export default page;
