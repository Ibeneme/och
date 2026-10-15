import NondiscriminationContent from "@/src/components/legal/NondiscriminationContent";
import { LEGAL_LAST_UPDATED } from "@/src/constants/legalDates";
import { taglinesPendingCount } from "@/src/content/taglines";
import { legalGate } from "@/src/lib/legalGate";
import { pageMetadata } from "@/app/seo";

export const generateMetadata = pageMetadata("nondiscrimination");

export default function NondiscriminationPage() {
  // 404s in production until the 15 official HHS taglines are in src/content/taglines.ts.
  const lastUpdated = legalGate(LEGAL_LAST_UPDATED.nondiscrimination, taglinesPendingCount());
  return <NondiscriminationContent lastUpdated={lastUpdated} />;
}
