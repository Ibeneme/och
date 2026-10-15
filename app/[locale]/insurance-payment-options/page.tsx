import React from "react";
import InsurancePaymentOptionsPage from "@/src/components/insurance/InsurancePaymentOptionsPage";
import { pageMetadata } from "@/app/seo";

export const generateMetadata = pageMetadata("insurance");

type Props = {};

const HomePage = (props: Props) => {
  return (
    <main className="w-full overflow-x-hidden">
      <InsurancePaymentOptionsPage />
    </main>
  );
};

export default HomePage;
