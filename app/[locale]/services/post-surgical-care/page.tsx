import React from "react";
import PostSurgicalCareComp from "@/src/components/services/PostSurgicalCareComp/PostSurgicalCareComp";
import { pageMetadata } from "@/app/seo";

export const generateMetadata = pageMetadata("postSurgical");

const page = () => {
  return (
    <div>
      <PostSurgicalCareComp />
    </div>
  );
};

export default page;
