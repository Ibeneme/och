import { buildMetadata } from "@/app/seo";
import PrivacyPolicy from "../privacy-policy/page";
import PrintButton from "./PrintButton"; 

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
    <div className="bg-white py-8">
      {/* Interactive print trigger for users */}
      <div className="no-print mx-auto mb-8 max-w-[720px] px-6 text-right">
        <PrintButton />
      </div>

      {/* Renders the full NPP content cleanly styled for physical or PDF output */}
      <PrivacyPolicy />
    </div>
  );
}
