import React from "react";
import MedicationManagementComp from "@/src/components/services/MedicationManagementComp/MedicationManagementComp";
import { buildMetadata } from "@/app/seo";

export const metadata = buildMetadata({
  title: "Medication Management at Home",
  description:
    "Nurse-led medication management to help patients take the right medications correctly and safely at home.",
  path: "/services/medication-management",
});

const page = () => {
  return (
    <div>
      <MedicationManagementComp />
    </div>
  );
};

export default page;
