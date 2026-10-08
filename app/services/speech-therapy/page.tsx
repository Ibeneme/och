import React from "react";
import SpeechTherapyComponent from "@/src/components/services/SpeechTherapy/SpeechTherapy";
import { buildMetadata } from "@/app/seo";

export const metadata = buildMetadata({
  title: "In-Home Speech Therapy",
  description:
    "Speech-language therapy at home for communication, swallowing, and cognitive challenges after stroke, illness, or injury.",
  path: "/services/speech-therapy",
});

const page = () => {
  return (
    <div>
      <SpeechTherapyComponent/>
    </div>
  );
};

export default page;
