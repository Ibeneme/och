import React from "react";
import WoundCareComponent from "@/src/components/services/WoundCare/WoundCareComponent";
import { buildMetadata } from "@/app/seo";

export const metadata = buildMetadata({
  title: "In-Home Wound Care",
  description:
    "Skilled wound care at home to support healing, prevent infection, and manage surgical, pressure, and chronic wounds.",
  path: "/services/wound-care",
});

const page = () => {
  return (
    <div>
      <WoundCareComponent />
    </div>
  );
};

export default page;
