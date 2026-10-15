import React from "react";
import OccupationalTherapyComponent from "@/src/components/services/OccupationalTherapy/OccupationalTherapy";
import { pageMetadata } from "@/app/seo";

export const generateMetadata = pageMetadata("occupationalTherapy");

const page = () => {
  return (
    <div>
      <OccupationalTherapyComponent/>
    </div>
  );
};

export default page;
