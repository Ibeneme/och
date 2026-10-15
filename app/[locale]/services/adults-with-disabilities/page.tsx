import React from "react";
import AdultsWithDisabilitiesComp from "@/src/components/services/adults-with-disabilities/adults-with-disabilities";
import { pageMetadata } from "@/app/seo";

export const generateMetadata = pageMetadata("adultsWithDisabilities");

const page = () => {
  return (
    <div>
      <AdultsWithDisabilitiesComp />
    </div>
  );
};

export default page;
