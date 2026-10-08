import React from "react";
import PhysicalTherapyComponent from "@/src/components/services/PhysicalTherapy/PhysicalTherapy";
import { buildMetadata } from "@/app/seo";

export const metadata = buildMetadata({
  title: "In-Home Physical Therapy",
  description:
    "Licensed physical therapists help you regain strength, mobility, and balance at home after surgery, injury, or illness.",
  path: "/services/physical-therapy",
});

const page = () => {
  return (
    <div>
      <PhysicalTherapyComponent />
    </div>
  );
};

export default page;
