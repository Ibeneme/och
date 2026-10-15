import { buildMetadata } from "@/app/seo";
import PrivacyPolicy from "../privacy-policy/page";
import PrintButton from "./PrintButton";
import NoticeOfPrivacyPracticesContent from "@/src/components/legal/NoticeOfPrivacyPractices";

export const metadata = {
  ...buildMetadata({
    title: "Notice of Privacy Practices (Print Version)",
    description:
      "Printable version of the Notice of Privacy Practices for One Community Home Health.",
    path: "/notice-of-privacy-practices",
  }),
  robots: { index: false, follow: false },
};

export default function NoticeOfPrivacyPracticesPrintRoute() {
  return (
    <div className="bg-white">
      {/* Renders the full NPP content cleanly styled for physical or PDF output */}
      <NoticeOfPrivacyPracticesContent />
    </div>
  );
}
