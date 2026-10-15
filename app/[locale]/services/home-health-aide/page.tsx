import React from "react";
import HomeHealthAideComponent from "@/src/components/services/HomeHealthAide/HomeHealthAide";
import { pageMetadata } from "@/app/seo";

export const generateMetadata = pageMetadata("homeHealthAide");

const page = () => {
  return (
    <div>
      <HomeHealthAideComponent/>
    </div>
  );
};

export default page;
