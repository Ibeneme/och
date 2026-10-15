import React from "react";
import MedicationManagementComp from "@/src/components/services/MedicationManagementComp/MedicationManagementComp";
import { pageMetadata } from "@/app/seo";

export const generateMetadata = pageMetadata("medicationManagement");

const page = () => {
  return (
    <div>
      <MedicationManagementComp />
    </div>
  );
};

export default page;
