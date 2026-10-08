import React from "react";
import OccupationalTherapyComponent from "@/src/components/services/OccupationalTherapy/OccupationalTherapy";
import { buildMetadata } from "@/app/seo";

export const metadata = buildMetadata({
  title: "In-Home Occupational Therapy",
  description:
    "Occupational therapy at home to help you rebuild independence in daily activities like bathing, dressing, and meal preparation.",
  path: "/services/occupational-therapy",
});

const page = () => {
  return (
    <div>
      <OccupationalTherapyComponent/>
    </div>
  );
};

export default page;
