import React from "react";
import PhysicalTherapyComponent from "@/src/components/services/PhysicalTherapy/PhysicalTherapy";
import { pageMetadata } from "@/app/seo";

export const generateMetadata = pageMetadata("physicalTherapy");

const page = () => {
  return (
    <div>
      <PhysicalTherapyComponent />
    </div>
  );
};

export default page;
