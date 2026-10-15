import TermsOfServiceContent from "@/src/components/legal/Terms";
import { pageMetadata } from "@/app/seo";

export const generateMetadata = pageMetadata("terms");

export default function TermsOfServicePage() {
  return (
    <>
      <TermsOfServiceContent />
    </>
  );
}
