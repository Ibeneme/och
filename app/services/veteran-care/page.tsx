import React from "react";
import VeteranCareComp from "@/src/components/services/VeteranCareComp/VeteranCareComp";
import { buildMetadata } from "@/app/seo";

export const metadata = buildMetadata({
  title: "Veteran Home Care",
  description:
    "Respectful in-home nursing, therapy, and daily support for veterans, tailored to their service-related and everyday health needs.",
  path: "/services/veteran-care",
});

const page = () => {
  return (
    <div>
      <VeteranCareComp />
    </div>
  );
};

export default page;
