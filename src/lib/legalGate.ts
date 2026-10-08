import { notFound } from "next/navigation";

/**
 * Keeps unfinished legal text from going live.
 * - Missing publish date  -> production build fails (one-line fix).
 * - Ported text not yet pasted in -> page returns 404 in production, so the
 *   site still deploys but no partial policy is ever shown to the public.
 * In development both just warn and the page renders with visible markers.
 */
export function legalGate(lastUpdated: string, pendingCount: number) {
  const prod = process.env.NODE_ENV === "production";

  if (!lastUpdated) {
    if (prod) {
      throw new Error(
        "Set the go-live date in src/constants/legalDates.ts before deploying.",
      );
    }
    console.warn("[legal] 'Last updated' date is not set.");
  }
  if (pendingCount > 0) {
    if (prod) notFound();
    console.warn(`[legal] ${pendingCount} section(s) still need the ported live text.`);
  }
  return lastUpdated || "[set publish date]";
}
