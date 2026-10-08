import React from "react";
import FallPreventionComp from "@/src/components/services/FallPreventionComp/FallPreventionComp";
import { buildMetadata } from "@/app/seo";

export const metadata = buildMetadata({
  title: "Fall Prevention Program",
  description:
    "Home safety assessments, strength and balance work, and caregiver education to reduce fall risk for seniors.",
  path: "/services/fall-prevention",
});

const page = () => {
  return (
    <div>
      <FallPreventionComp />
    </div>
  );
};

export default page;
