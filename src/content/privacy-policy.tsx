import type { ReactNode } from "react";

/**
 * Privacy Policy sections, ported from the live policy at
 * onecommunityhomehealth.com/privacypolicy (C2).
 *
 * body === null means "not yet pasted in". While any section is null the page
 * 404s in production (see src/lib/legalGate.ts), so no partial policy ships.
 *
 * Rules when pasting (from the change request):
 *  - Section 6 below is already in, verbatim. Do not edit it.
 *  - Sections 2, 3 and 5 must be rewritten from the third-party inventory of
 *    what the NEW site actually loads, not copied from the old site.
 *  - Section 1: add a paragraph for referral form submissions; keep the
 *    call-tracking sentence only if calls are still recorded/transcribed.
 *  - Entity name: "JACOP Healthcare Services, Inc." (not "JACOP Health Care Services").
 *  - NPP links: /notice-of-privacy-practices  (never the typo or onechh.com URLs).
 *  - Section 11: privacy requests go to privacy@onechh.com (not info@).
 *  - Say "patients", not "clients" (Section 5's advertiser sentence may stay).
 *  - Section 5 opt-outs / Do Not Track / GPC only if ad tags actually run.
 */
export type PolicySection = {
  id: string;
  title: string;
  body: ReactNode | null;
  hint?: string;
};

export const PRIVACY_SECTIONS: PolicySection[] = [
  { id: "information-we-collect", title: "Information We Collect", body: null, hint: "Section 1 (+ referral form paragraph; check call-tracking claim)" },
  { id: "section-2", title: "Section 2", body: null, hint: "Section 2: rebuild from the third-party inventory" },
  { id: "section-3", title: "Section 3", body: null, hint: "Section 3: rebuild from the third-party inventory" },
  { id: "section-4", title: "Section 4", body: null, hint: "Section 4: port as written" },
  { id: "section-5", title: "Section 5", body: null, hint: "Section 5: rebuild from the third-party inventory" },
  {
    id: "text-messaging-sms-terms",
    title: "Text Messaging (SMS) Terms",
    // VERBATIM. Carrier-reviewed 10DLC language. Do not tighten, reformat or summarize.
    body: (
      <p>
        By providing your mobile number to One Community — on a website form, by phone, or in writing — you consent to receive text messages from us about your inquiry, care coordination, scheduling, or employment. Message frequency varies. Message and data rates may apply. Reply STOP at any time to stop receiving texts, or HELP for help; you can also call 972-325-1598. Consent to receive text messages is not a condition of receiving services or employment. No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. Text messaging opt-in data and consent are not sold or shared with any third party except the messaging platform that delivers our texts.
      </p>
    ),
  },
  { id: "section-7", title: "Section 7", body: null, hint: "Section 7: port as written" },
  { id: "section-8", title: "Section 8", body: null, hint: "Section 8: port as written" },
  { id: "section-9", title: "Section 9", body: null, hint: "Section 9: port as written" },
  { id: "section-10", title: "Section 10", body: null, hint: "Section 10: port as written" },
  { id: "contact-us", title: "Contact Us", body: null, hint: "Section 11: use privacy@onechh.com" },
];
