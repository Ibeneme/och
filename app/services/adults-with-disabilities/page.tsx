import React from "react";
import AdultsWithDisabilitiesComp from "@/src/components/services/adults-with-disabilities/adults-with-disabilities";
import { buildMetadata } from "@/app/seo";

export const metadata = buildMetadata({
  title: "Care for Adults with Disabilities",
  description:
    "Personalized in-home care and support that helps adults with disabilities live independently with dignity.",
  path: "/services/adults-with-disabilities",
});

const page = () => {
  return (
    <div>
      <AdultsWithDisabilitiesComp />
    </div>
  );
};

export default page;
