import AccessibilityContent from "@/src/components/legal/AccessibilityContent";
import { LEGAL_LAST_UPDATED } from "@/src/constants/legalDates";
import { a11yPendingCount } from "@/src/content/accessibility";
import { legalGate } from "@/src/lib/legalGate";
import { pageMetadata } from "@/app/seo";

export const generateMetadata = pageMetadata("accessibility");

export default function AccessibilityPage() {
  // 404s in production until the B15 fixes and known limitations are filled in.
  const lastUpdated = legalGate(LEGAL_LAST_UPDATED.accessibility, a11yPendingCount());
  return <AccessibilityContent lastUpdated={lastUpdated} />;
}
