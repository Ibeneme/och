import React from "react";
import InsurancePaymentOptionsPage from "../../src/components/insurance/InsurancePaymentOptionsPage";
import { buildMetadata } from "@/app/seo";

export const metadata = buildMetadata({
  title: "Insurance & Payment Options",
  description:
    "See the insurance plans and payment options accepted by One Community Home Health, and how to verify your coverage for home care.",
  path: "/insurance-payment-options",
});

type Props = {};

const HomePage = (props: Props) => {
  return (
    <main className="w-full overflow-x-hidden">
      <InsurancePaymentOptionsPage />
    </main>
  );
};

export default HomePage;
