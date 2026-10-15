import React from "react";
import RespiteCareComp from "@/src/components/services/RespiteCareComp/RespiteCareComp";
import { pageMetadata } from "@/app/seo";

export const generateMetadata = pageMetadata("respiteCare");

const page = () => {
  return (
    <div>
      <RespiteCareComp />
    </div>
  );
};

export default page;
