import React from "react";
import SkilledNursingComponent from "@/src/components/services/SkilledNursing/SkilledNursingComponent";
import { buildMetadata } from "@/app/seo";

export const metadata = buildMetadata({
  title: "Skilled Nursing at Home",
  description:
    "Registered nurses provide skilled nursing at home, including assessments, medication oversight, and ongoing clinical care.",
  path: "/services/skilled-nursing",
});

const page = () => {
  return (
    <div>
      <SkilledNursingComponent />
    </div>
  );
};

export default page;
