import React from "react";
import SpeechTherapyComponent from "@/src/components/services/SpeechTherapy/SpeechTherapy";
import { pageMetadata } from "@/app/seo";

export const generateMetadata = pageMetadata("speechTherapy");

const page = () => {
  return (
    <div>
      <SpeechTherapyComponent/>
    </div>
  );
};

export default page;
