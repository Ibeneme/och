import React from "react";
import CompanionCareComp from "@/src/components/services/CompanionCareComp/CompanionCareComp";
import { buildMetadata } from "@/app/seo";

export const metadata = buildMetadata({
  title: "Companion Care at Home",
  description:
    "Friendly companionship, conversation, and everyday help that keeps seniors engaged, safe, and connected at home.",
  path: "/services/companion-care",
});

const page = () => {
  return (
    <div>
      <CompanionCareComp />
    </div>
  );
};

export default page;
