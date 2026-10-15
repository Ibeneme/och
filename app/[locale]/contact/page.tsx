import React from "react";
//import ContactPage from "@/src/components/Contact/ContactPage";
import RequestCarePage from "@/src/components/request-care/page";
import { pageMetadata } from "@/app/seo";

export const generateMetadata = pageMetadata("contact");

const page = () => {
  return (
    <div>
        <RequestCarePage />
      {/* <ContactPage /> */}
    </div>
  );
};

export default page;
