import React from "react";
import DailyLifestyleSupportComp from "@/src/components/services/daily-lifestyle-support/DLS";
import { buildMetadata } from "@/app/seo";

export const metadata = buildMetadata({
  title: "Daily Lifestyle Support",
  description:
    "Help with daily routines, meals, errands, and household tasks so you can keep living independently at home.",
  path: "/services/daily-lifestyle-support",
});

const page = () => {
  return (
    <div>
      <DailyLifestyleSupportComp />
    </div>
  );
};

export default page;
