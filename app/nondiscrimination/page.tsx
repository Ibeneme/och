import { buildMetadata } from "@/app/seo";
import NondiscriminationContent from "@/src/components/legal/NondiscriminationContent";
import { LEGAL_LAST_UPDATED } from "@/src/constants/legalDates";
import { taglinesPendingCount } from "@/src/content/taglines";
import { legalGate } from "@/src/lib/legalGate";

export const metadata = {
  ...buildMetadata({
    title: "Nondiscrimination and Language Assistance",
    description:
      "One Community Home Health does not discriminate, and provides free language assistance and auxiliary aids to patients who need them.",
    path: "/nondiscrimination",
  }),
  robots: { index: true, follow: true },
};

export default function NondiscriminationPage() {
  // 404s in production until the 15 official HHS taglines are in src/content/taglines.ts.
  const lastUpdated = legalGate(LEGAL_LAST_UPDATED.nondiscrimination, taglinesPendingCount());
  return <NondiscriminationContent lastUpdated={lastUpdated} />;
}
