import React from "react";
import RespiteCareComp from "@/src/components/services/RespiteCareComp/RespiteCareComp";
import { buildMetadata } from "@/app/seo";

export const metadata = buildMetadata({
  title: "Respite Care for Families",
  description:
    "Respite care that gives family caregivers a break while a trained professional looks after their loved one at home.",
  path: "/services/respite-care",
});

const page = () => {
  return (
    <div>
      <RespiteCareComp />
    </div>
  );
};

export default page;
