import React from "react";
import PostSurgicalCareComp from "@/src/components/services/PostSurgicalCareComp/PostSurgicalCareComp";
import { buildMetadata } from "@/app/seo";

export const metadata = buildMetadata({
  title: "Post-Surgical Care at Home",
  description:
    "Recover comfortably at home with post-surgical nursing, therapy, and follow-up support after your hospital stay.",
  path: "/services/post-surgical-care",
});

const page = () => {
  return (
    <div>
      <PostSurgicalCareComp />
    </div>
  );
};

export default page;
