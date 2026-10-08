import React from "react";
import HomeHealthAideComponent from "@/src/components/services/HomeHealthAide/HomeHealthAide";
import { buildMetadata } from "@/app/seo";

export const metadata = buildMetadata({
  title: "Home Health Aide Services",
  description:
    "Home health aides assist with personal care, bathing, and daily routines so patients stay safe and comfortable at home.",
  path: "/services/home-health-aide",
});

const page = () => {
  return (
    <div>
      <HomeHealthAideComponent/>
    </div>
  );
};

export default page;
