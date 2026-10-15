import React from "react";
import WoundCareComponent from "@/src/components/services/WoundCare/WoundCareComponent";
import { pageMetadata } from "@/app/seo";

export const generateMetadata = pageMetadata("woundCare");

const page = () => {
  return (
    <div>
      <WoundCareComponent />
    </div>
  );
};

export default page;
