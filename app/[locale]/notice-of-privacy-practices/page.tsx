import NoticeOfPrivacyPracticesContent from "@/src/components/legal/NoticeOfPrivacyPractices";
import { pageMetadata } from "@/app/seo";

export const generateMetadata = pageMetadata("noticeOfPrivacyPractices");

export default function NoticeOfPrivacyPracticesPrintRoute() {
  return (
    <div className="bg-white">
      {/* Renders the full NPP content cleanly styled for physical or PDF output */}
      <NoticeOfPrivacyPracticesContent />
    </div>
  );
}
