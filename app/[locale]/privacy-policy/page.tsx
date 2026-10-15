import PrivacyPolicyContent from "@/src/components/legal/Privacy";
import { pageMetadata } from "@/app/seo";

export const generateMetadata = pageMetadata("privacy");

export default function PrivacyPolicyPage() {
  return (
    <div>
      <PrivacyPolicyContent />
    </div>
  );
}
