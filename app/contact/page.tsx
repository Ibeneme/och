import React from "react";
import ContactPage from "@/src/components/Contact/ContactPage";
import { buildMetadata } from "@/app/seo";

export const metadata = buildMetadata({
  title: "Contact Us",
  description:
    "Contact One Community Home Health to request care, make a referral, or ask about services, coverage, and getting started.",
  path: "/contact",
});

const page = () => {
  return (
    <div>
      <ContactPage />
    </div>
  );
};

export default page;
