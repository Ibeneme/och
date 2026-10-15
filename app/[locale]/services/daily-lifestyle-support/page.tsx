import React from "react";
import DailyLifestyleSupportComp from "@/src/components/services/daily-lifestyle-support/DLS";
import { pageMetadata } from "@/app/seo";

export const generateMetadata = pageMetadata("dailyLifestyle");

const page = () => {
  return (
    <div>
      <DailyLifestyleSupportComp />
    </div>
  );
};

export default page;
