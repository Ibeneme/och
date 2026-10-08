import React from "react";
import ChronicDiseaseManagementComp from "@/src/components/services/ChronicDiseaseManagementComp/ChronicDiseaseManagementComp";
import { buildMetadata } from "@/app/seo";

export const metadata = buildMetadata({
  title: "Chronic Disease Management",
  description:
    "In-home support for chronic conditions such as diabetes, heart disease, and COPD, with monitoring, education, and care coordination.",
  path: "/services/chronic-disease-management",
});

const page = () => {
  return (
    <div>
      <ChronicDiseaseManagementComp />
    </div>
  );
};

export default page;
