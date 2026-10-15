import React from "react";
import SkilledNursingComponent from "@/src/components/services/SkilledNursing/SkilledNursingComponent";
import { pageMetadata } from "@/app/seo";

export const generateMetadata = pageMetadata("skilledNursing");

const page = () => {
  return (
    <div>
      <SkilledNursingComponent />
    </div>
  );
};

export default page;
