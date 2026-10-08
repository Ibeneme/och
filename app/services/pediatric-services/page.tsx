import React from "react";
import PediatricServicesComp from "@/src/components/services/pediatric-services/pediatric-services";
import { buildMetadata } from "@/app/seo";

export const metadata = buildMetadata({
  title: "Pediatric Home Health Services",
  description:
    "Compassionate in-home nursing and therapy for children, with family-centered support to help every child thrive.",
  path: "/services/pediatric-services",
});

const page = () => {
  return (
    <div>
      <PediatricServicesComp />
    </div>
  );
};

export default page;
