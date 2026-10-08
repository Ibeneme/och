import { buildMetadata } from "@/app/seo";
import AccessibilityContent from "@/src/components/legal/AccessibilityContent";
import { LEGAL_LAST_UPDATED } from "@/src/constants/legalDates";
import { a11yPendingCount } from "@/src/content/accessibility";
import { legalGate } from "@/src/lib/legalGate";

export const metadata = {
  ...buildMetadata({
    title: "Accessibility",
    description:
      "One Community Home Health's commitment to an accessible website, the standard we are working toward, and how to reach us if you need help.",
    path: "/accessibility",
  }),
  robots: { index: true, follow: true },
};

export default function AccessibilityPage() {
  // 404s in production until the B15 fixes and known limitations are filled in.
  const lastUpdated = legalGate(LEGAL_LAST_UPDATED.accessibility, a11yPendingCount());
  return <AccessibilityContent lastUpdated={lastUpdated} />;
}
