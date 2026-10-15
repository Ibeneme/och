"use client";

import LegalDocument, { Section, Bullets, ExtLink } from "./LegalDocument";
import { useLanguage } from "@/src/context/LanguageContext";

const link = "text-[#0B4A8F] underline underline-offset-2 hover:text-[#07162C]";

const LAST_UPDATED = "July 23, 2026";

const COPY = {
  en: {
    title: "Privacy Policy",
    updated: "Last updated:",
    contents: "Contents",
    intro1:
      'This Privacy Policy explains how JACOP Healthcare Services, Inc., doing business as One Community Home Health ("One Community," "we," "us"), collects, uses, and shares information when you visit oneCommunityHomeHealth.com (the "Site"), submit a form on the Site, or call or text the numbers published on it. This version replaces all earlier versions of this policy.',
    intro2:
      "This policy covers our website and marketing communications. It is not our HIPAA Notice of Privacy Practices. If you receive care from One Community, our use of your health information is governed by HIPAA and our [Notice of Privacy Practices](/notice-of-privacy-practices), which we provide at the start of care and post on this website.",
    s1Title: "1. Information You Give Us",
    s1Items: [
      "Contact and consultation forms: Name, phone number, email address, the service or location you are asking about, and anything you write in the message field. Form submissions are sent directly to our own website server and then to our staff by email. The analytics and advertising tags described in Section 3 do not receive the contents of what you type into our forms.",
      "Referral forms: Patient and physician referral details submitted through our online referral forms, including patient name, contact details, clinical background information needed for intake, and referring provider details.",
      "Caregiver and employment inquiries: Name, phone number, and email address submitted through our caregiver-interest forms. Full job applications are completed on separate hiring and application platforms that we link to; those platforms' own privacy terms also apply to what you enter there.",
      "Phone calls: Calls to the numbers on our Site are connected through our call-tracking provider (see Section 3). Calls may be recorded and transcribed for quality, training, staffing, and compliance purposes.",
      "Text messages: If you give us your mobile number, we may text you about your inquiry, scheduling, or employment. The full SMS terms are in Section 6.",
    ],
    s1Note:
      "Please do not submit detailed medical information, Social Security numbers, or financial account numbers through general website forms. If care is established, we collect what is needed through secure channels covered by HIPAA.",
    s2Title: "2. Information Collected Automatically",
    s2Intro:
      "When you browse the Site, we and the providers listed in Section 3 automatically receive standard technical data: your IP address, device and browser type, the pages you view, how you reached the Site (for example, a search result or an ad, including ad-click identifiers such as a Google click ID), and identifiers stored in cookies. The cookies currently set by the Site fall into four groups:",
    s2Items: [
      "Functional (first-party): Cookies our website software uses to make forms and pages work.",
      "Analytics: Google Analytics cookies (names beginning with _ga).",
      "Advertising: Google Ads cookies (such as _gcl_au and related Google cookies) used to measure ad results and build remarketing audiences.",
      "Call tracking: A CallTrackingMetrics cookie (__ctmid) that connects the phone number you see on the Site with the marketing source that brought you here.",
    ],
    s3Title: "3. The Tools That Run on This Site",
    s3Intro:
      "We keep this list specific on purpose. The following third-party services actually load when you use the Site, and each receives the technical data described in Section 2:",
    s3Items: [
      <>
        Google Analytics 4 — Helps us understand how visitors use the Site
        (pages viewed, traffic sources, approximate location from IP). Data is
        processed by Google. See{" "}
        <ExtLink href="https://policies.google.com/privacy" className={link}>
          Google&apos;s Privacy Policy
        </ExtLink>
        .
      </>,
      <>
        Google Ads conversion tracking and remarketing — Measures whether our
        advertising leads to calls and inquiries, and may add your browser to an
        audience so you can be shown our ads later on other sites. This is the
        kind of activity some state laws call &quot;targeted advertising.&quot;
        Opt-out options are in Section 5.
      </>,
      <>
        Google reCAPTCHA — Protects our contact and consultation forms from spam
        and abuse by analyzing interaction and device data. This Site is
        protected by reCAPTCHA, and the Google{" "}
        <ExtLink href="https://policies.google.com/privacy" className={link}>
          Privacy Policy
        </ExtLink>{" "}
        and{" "}
        <ExtLink href="https://policies.google.com/terms" className={link}>
          Terms of Service
        </ExtLink>{" "}
        apply.
      </>,
      "Google Maps and Google Fonts — The map on some pages and the fonts used across the Site load from Google servers, which receive your IP address when they load.",
      <>
        CallTrackingMetrics — Displays trackable phone numbers, connects and may
        record and transcribe calls and text conversations, and ties them to the
        marketing source that brought you to the Site. See the{" "}
        <ExtLink
          href="https://www.calltrackingmetrics.com/privacy-policy/"
          className={link}
        >
          CallTrackingMetrics Privacy Policy
        </ExtLink>
        .
      </>,
      <>
        Cloudflare — Provides security, content delivery, and privacy-focused,
        aggregate web analytics for the Site. See{" "}
        <ExtLink
          href="https://www.cloudflare.com/privacypolicy/"
          className={link}
        >
          Cloudflare&apos;s Privacy Policy
        </ExtLink>
        .
      </>,
    ],
    s3Note:
      "We do not use Facebook/Meta pixels, TikTok pixels, session-recording tools (such as Hotjar or Microsoft Clarity), or data brokers on this Site. If we add a new tool, we will update this policy.",
    s4Title: "4. How We Use Information",
    s4Items: [
      "To respond to your inquiry, schedule consultations, and coordinate the start of care;",
      "To process and coordinate patient and physician referrals;",
      "To respond to caregiver-interest and employment inquiries;",
      "To understand which pages and advertising bring people to us, and to improve the Site;",
      "To protect the Site and our business from spam, fraud, and abuse; and",
      "To keep records and comply with legal obligations that apply to a licensed Texas home and community support services agency.",
    ],
    s5Title: "5. Advertising and Your Opt-Out Choices",
    s5Intro:
      "We do not sell personal information for money, and we do not share lists of our patients or applicants with advertisers. We do use Google remarketing as described above, which you can turn off at any time:",
    s5Items: [
      <>
        Google ad personalization:{" "}
        <ExtLink
          href="https://adssettings.google.com/"
          className={link}
        >
          adssettings.google.com
        </ExtLink>
      </>,
      <>
        Google Analytics opt-out browser add-on:{" "}
        <ExtLink
          href="https://tools.google.com/dlpage/gaoptout"
          className={link}
        >
          tools.google.com/dlpage/gaoptout
        </ExtLink>
      </>,
      <>
        Industry opt-out for interest-based ads:{" "}
        <ExtLink href="https://optout.aboutads.info/" className={link}>
          optout.aboutads.info
        </ExtLink>
      </>,
    ],
    s5Ending:
      'Blocking or deleting cookies in your browser settings also prevents these tags from recognizing you. The Site does not currently respond automatically to "Do Not Track" or Global Privacy Control browser signals; please use the controls above, or contact us and we will help.',
    s6Title: "6. Text Messaging (SMS) Terms",
    s6Text:
      "By providing your mobile number to One Community — on a website form, by phone, or in writing — you consent to receive text messages from us about your inquiry, care coordination, scheduling, or employment. Message frequency varies. Message and data rates may apply. Reply STOP at any time to stop receiving texts, or HELP for help; you can also call 972-325-1598. Consent to receive text messages is not a condition of receiving services or employment. No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. Text messaging opt-in data and consent are not sold or shared with any third party except the messaging platform that delivers our texts.",
    s7Title: "7. Health Information and HIPAA",
    s7Text:
      "One Community is a HIPAA covered entity. Protected health information we create or receive in providing care is used and disclosed only as permitted by HIPAA and as described in our [Notice of Privacy Practices](/notice-of-privacy-practices) — not under this website policy, and never for third-party advertising. Our website forms are intended for contact information only; the Site is not a channel for submitting medical records or detailed health information beyond secure referral intake, and our advertising and analytics tags are not connected to our clinical or patient record systems.",
    s8Title: "8. When We Share Information",
    s8Items: [
      "Service providers: Service providers that operate parts of the Site and our communications for us, including website hosting and security, the analytics and advertising measurement tools listed in Section 3, our call and text platform, hiring and application platforms, and email. They may use the information only to provide those services to us.",
      "Legal and safety: When required by law, subpoena, or to protect the rights and safety of our patients, staff, or others.",
      "Business transfers: If One Community is ever part of a merger, acquisition, or sale of assets, information may transfer as part of that transaction subject to this policy.",
    ],
    s8Ending:
      "We do not sell, rent, or trade personal information collected through the Site.",
    s9Title: "9. How Long We Keep Information",
    s9Text:
      "Form submissions, call recordings, and related records are kept as long as needed for the purposes above. For inquiries that lead to care or employment, they become part of records we must keep under Texas licensing and federal rules; for inquiries that do not, we keep them only as long as reasonably needed and then delete them in the ordinary course. Analytics and advertising cookie data is retained by the providers in Section 3 according to their published schedules.",
    s10Title: "10. Security",
    s10Text:
      "The Site uses HTTPS encryption, and we limit access to submitted information to staff who need it. No website or transmission method is completely secure, which is one more reason not to submit sensitive details through unencrypted web forms.",
    s11Title: "11. Your Privacy Choices and Rights",
    s11Text:
      "Regardless of where you live, you may contact us to request a copy of the information we hold about you from the Site, correct it, ask us to delete it, or opt out of marketing communications. Call 972-325-1598 or email privacy@onechh.com, and we will respond within a reasonable time. Depending on your state of residence, you may have additional rights under state privacy law; requests about protected health information are handled under HIPAA and our [Notice of Privacy Practices](/notice-of-privacy-practices) instead. We will never treat you differently for exercising a privacy right.",
    s12Title: "12. Children",
    s12Text:
      "The Site is intended for adults — family members, caregivers, and prospective employees. It is not directed to children under 13, and we do not knowingly collect personal information from children online. Care we provide to pediatric patients is arranged with a parent or guardian and governed by HIPAA, not by this website policy.",
    s13Title: "13. Third-Party Links",
    s13Text:
      "The Site links to third-party resources such as government program pages, payer websites, and our external jobs board. Their privacy practices are their own; this policy does not apply there.",
    s14Title: "14. Changes to This Policy",
    s14Text:
      'We may update this policy as our website tools or the law change. The "Last updated" date above reflects the current version, and meaningful changes will be posted on this page.',
    s15Title: "15. Contact Us",
    s15Address: [
      "JACOP Healthcare Services, Inc. d/b/a One Community Home Health",
      "3560 Quannah Drive",
      "Grand Prairie, Texas 75052",
      "Phone: 972-325-1598",
      "Email: privacy@onechh.com",
    ],
  },
  es: {
    title: "Privacy Policy",
    updated: "Last updated:",
    contents: "Contents",
    intro1:
      'This Privacy Policy explains how JACOP Healthcare Services, Inc., doing business as One Community Home Health ("One Community," "we," "us"), collects, uses, and shares information when you visit oneCommunityHomeHealth.com (the "Site"), submit a form on the Site, or call or text the numbers published on it. This version replaces all earlier versions of this policy.',
    intro2:
      "This policy covers our website and marketing communications. It is not our HIPAA Notice of Privacy Practices. If you receive care from One Community, our use of your health information is governed by HIPAA and our [Notice of Privacy Practices](/notice-of-privacy-practices), which we provide at the start of care and post on this website.",
    s1Title: "1. Information You Give Us",
    s1Items: [
      "Contact and consultation forms: Name, phone number, email address, the service or location you are asking about, and anything you write in the message field. Form submissions are sent directly to our own website server and then to our staff by email. The analytics and advertising tags described in Section 3 do not receive the contents of what you type into our forms.",
      "Referral forms: Patient and physician referral details submitted through our online referral forms, including patient name, contact details, clinical background information needed for intake, and referring provider details.",
      "Caregiver and employment inquiries: Name, phone number, and email address submitted through our caregiver-interest forms. Full job applications are completed on separate hiring and application platforms that we link to; those platforms' own privacy terms also apply to what you enter there.",
      "Phone calls: Calls to the numbers on our Site are connected through our call-tracking provider (see Section 3). Calls may be recorded and transcribed for quality, training, staffing, and compliance purposes.",
      "Text messages: If you give us your mobile number, we may text you about your inquiry, scheduling, or employment. The full SMS terms are in Section 6.",
    ],
    s1Note:
      "Please do not submit detailed medical information, Social Security numbers, or financial account numbers through general website forms. If care is established, we collect what is needed through secure channels covered by HIPAA.",
    s2Title: "2. Information Collected Automatically",
    s2Intro:
      "When you browse the Site, we and the providers listed in Section 3 automatically receive standard technical data: your IP address, device and browser type, the pages you view, how you reached the Site (for example, a search result or an ad, including ad-click identifiers such as a Google click ID), and identifiers stored in cookies. The cookies currently set by the Site fall into four groups:",
    s2Items: [
      "Functional (first-party): Cookies our website software uses to make forms and pages work.",
      "Analytics: Google Analytics cookies (names beginning with _ga).",
      "Advertising: Google Ads cookies (such as _gcl_au and related Google cookies) used to measure ad results and build remarketing audiences.",
      "Call tracking: A CallTrackingMetrics cookie (__ctmid) that connects the phone number you see on the Site with the marketing source that brought you here.",
    ],
    s3Title: "3. The Tools That Run on This Site",
    s3Intro:
      "We keep this list specific on purpose. The following third-party services actually load when you use the Site, and each receives the technical data described in Section 2:",
    s3Items: [
      <>
        Google Analytics 4 — Helps us understand how visitors use the Site
        (pages viewed, traffic sources, approximate location from IP). Data is
        processed by Google. See{" "}
        <ExtLink href="https://policies.google.com/privacy" className={link}>
          Google&apos;s Privacy Policy
        </ExtLink>
        .
      </>,
      <>
        Google Ads conversion tracking and remarketing — Measures whether our
        advertising leads to calls and inquiries, and may add your browser to an
        audience so you can be shown our ads later on other sites. This is the
        kind of activity some state laws call &quot;targeted advertising.&quot;
        Opt-out options are in Section 5.
      </>,
      <>
        Google reCAPTCHA — Protects our contact and consultation forms from spam
        and abuse by analyzing interaction and device data. This Site is
        protected by reCAPTCHA, and the Google{" "}
        <ExtLink href="https://policies.google.com/privacy" className={link}>
          Privacy Policy
        </ExtLink>{" "}
        and{" "}
        <ExtLink href="https://policies.google.com/terms" className={link}>
          Terms of Service
        </ExtLink>{" "}
        apply.
      </>,
      "Google Maps and Google Fonts — The map on some pages and the fonts used across the Site load from Google servers, which receive your IP address when they load.",
      <>
        CallTrackingMetrics — Displays trackable phone numbers, connects and may
        record and transcribe calls and text conversations, and ties them to the
        marketing source that brought you to the Site. See the{" "}
        <ExtLink
          href="https://www.calltrackingmetrics.com/privacy-policy/"
          className={link}
        >
          CallTrackingMetrics Privacy Policy
        </ExtLink>
        .
      </>,
      <>
        Cloudflare — Provides security, content delivery, and privacy-focused,
        aggregate web analytics for the Site. See{" "}
        <ExtLink
          href="https://www.cloudflare.com/privacypolicy/"
          className={link}
        >
          Cloudflare&apos;s Privacy Policy
        </ExtLink>
        .
      </>,
    ],
    s3Note:
      "We do not use Facebook/Meta pixels, TikTok pixels, session-recording tools (such as Hotjar or Microsoft Clarity), or data brokers on this Site. If we add a new tool, we will update this policy.",
    s4Title: "4. How We Use Information",
    s4Items: [
      "To respond to your inquiry, schedule consultations, and coordinate the start of care;",
      "To process and coordinate patient and physician referrals;",
      "To respond to caregiver-interest and employment inquiries;",
      "To understand which pages and advertising bring people to us, and to improve the Site;",
      "To protect the Site and our business from spam, fraud, and abuse; and",
      "To keep records and comply with legal obligations that apply to a licensed Texas home and community support services agency.",
    ],
    s5Title: "5. Advertising and Your Opt-Out Choices",
    s5Intro:
      "We do not sell personal information for money, and we do not share lists of our patients or applicants with advertisers. We do use Google remarketing as described above, which you can turn off at any time:",
    s5Items: [
      <>
        Google ad personalization:{" "}
        <ExtLink
          href="https://adssettings.google.com/"
          className={link}
        >
          adssettings.google.com
        </ExtLink>
      </>,
      <>
        Google Analytics opt-out browser add-on:{" "}
        <ExtLink
          href="https://tools.google.com/dlpage/gaoptout"
          className={link}
        >
          tools.google.com/dlpage/gaoptout
        </ExtLink>
      </>,
      <>
        Industry opt-out for interest-based ads:{" "}
        <ExtLink href="https://optout.aboutads.info/" className={link}>
          optout.aboutads.info
        </ExtLink>
      </>,
    ],
    s5Ending:
      'Blocking or deleting cookies in your browser settings also prevents these tags from recognizing you. The Site does not currently respond automatically to "Do Not Track" or Global Privacy Control browser signals; please use the controls above, or contact us and we will help.',
    s6Title: "6. Text Messaging (SMS) Terms",
    s6Text:
      "By providing your mobile number to One Community — on a website form, by phone, or in writing — you consent to receive text messages from us about your inquiry, care coordination, scheduling, or employment. Message frequency varies. Message and data rates may apply. Reply STOP at any time to stop receiving texts, or HELP for help; you can also call 972-325-1598. Consent to receive text messages is not a condition of receiving services or employment. No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. Text messaging opt-in data and consent are not sold or shared with any third party except the messaging platform that delivers our texts.",
    s7Title: "7. Health Information and HIPAA",
    s7Text:
      "One Community is a HIPAA covered entity. Protected health information we create or receive in providing care is used and disclosed only as permitted by HIPAA and as described in our [Notice of Privacy Practices](/notice-of-privacy-practices) — not under this website policy, and never for third-party advertising. Our website forms are intended for contact information only; the Site is not a channel for submitting medical records or detailed health information beyond secure referral intake, and our advertising and analytics tags are not connected to our clinical or patient record systems.",
    s8Title: "8. When We Share Information",
    s8Items: [
      "Service providers: Service providers that operate parts of the Site and our communications for us, including website hosting and security, the analytics and advertising measurement tools listed in Section 3, our call and text platform, hiring and application platforms, and email. They may use the information only to provide those services to us.",
      "Legal and safety: When required by law, subpoena, or to protect the rights and safety of our patients, staff, or others.",
      "Business transfers: If One Community is ever part of a merger, acquisition, or sale of assets, information may transfer as part of that transaction subject to this policy.",
    ],
    s8Ending:
      "We do not sell, rent, or trade personal information collected through the Site.",
    s9Title: "9. How Long We Keep Information",
    s9Text:
      "Form submissions, call recordings, and related records are kept as long as needed for the purposes above. For inquiries that lead to care or employment, they become part of records we must keep under Texas licensing and federal rules; for inquiries that do not, we keep them only as long as reasonably needed and then delete them in the ordinary course. Analytics and advertising cookie data is retained by the providers in Section 3 according to their published schedules.",
    s10Title: "10. Security",
    s10Text:
      "The Site uses HTTPS encryption, and we limit access to submitted information to staff who need it. No website or transmission method is completely secure, which is one more reason not to submit sensitive details through unencrypted web forms.",
    s11Title: "11. Your Privacy Choices and Rights",
    s11Text:
      "Regardless of where you live, you may contact us to request a copy of the information we hold about you from the Site, correct it, ask us to delete it, or opt out of marketing communications. Call 972-325-1598 or email privacy@onechh.com, and we will respond within a reasonable time. Depending on your state of residence, you may have additional rights under state privacy law; requests about protected health information are handled under HIPAA and our [Notice of Privacy Practices](/notice-of-privacy-practices) instead. We will never treat you differently for exercising a privacy right.",
    s12Title: "12. Children",
    s12Text:
      "The Site is intended for adults — family members, caregivers, and prospective employees. It is not directed to children under 13, and we do not knowingly collect personal information from children online. Care we provide to pediatric patients is arranged with a parent or guardian and governed by HIPAA, not by this website policy.",
    s13Title: "13. Third-Party Links",
    s13Text:
      "The Site links to third-party resources such as government program pages, payer websites, and our external jobs board. Their privacy practices are their own; this policy does not apply there.",
    s14Title: "14. Changes to This Policy",
    s14Text:
      'We may update this policy as our website tools or the law change. The "Last updated" date above reflects the current version, and meaningful changes will be posted on this page.',
    s15Title: "15. Contact Us",
    s15Address: [
      "JACOP Healthcare Services, Inc. d/b/a One Community Home Health",
      "3560 Quannah Drive",
      "Grand Prairie, Texas 75052",
      "Phone: 972-325-1598",
      "Email: privacy@onechh.com",
    ],
  },
} as const;

export default function PrivacyPolicyContent() {
  const { language } = useLanguage();
  const L = language === "es" ? "es" : "en";
  const c = COPY[L];

  const ids = {
    intro: "introduction",
    s1: "information-you-give-us",
    s2: "information-collected-automatically",
    s3: "the-tools-that-run-on-this-site",
    s4: "how-we-use-information",
    s5: "advertising-and-your-opt-out-choices",
    s6: "text-messaging-sms-terms",
    s7: "health-information-and-hipaa",
    s8: "when-we-share-information",
    s9: "how-long-we-keep-information",
    s10: "security",
    s11: "your-privacy-choices-and-rights",
    s12: "children",
    s13: "third-party-links",
    s14: "changes-to-this-policy",
    s15: "contact-us",
  };

  return (
    <LegalDocument
      title={c.title}
      lang={L}
      lastUpdated={LAST_UPDATED}
      lastUpdatedLabel={c.updated}
      contentsLabel={c.contents}
      toc={[
        { id: ids.s1, label: c.s1Title },
        { id: ids.s2, label: c.s2Title },
        { id: ids.s3, label: c.s3Title },
        { id: ids.s4, label: c.s4Title },
        { id: ids.s5, label: c.s5Title },
        { id: ids.s6, label: c.s6Title },
        { id: ids.s7, label: c.s7Title },
        { id: ids.s8, label: c.s8Title },
        { id: ids.s9, label: c.s9Title },
        { id: ids.s10, label: c.s10Title },
        { id: ids.s11, label: c.s11Title },
        { id: ids.s12, label: c.s12Title },
        { id: ids.s13, label: c.s13Title },
        { id: ids.s14, label: c.s14Title },
        { id: ids.s15, label: c.s15Title },
      ]}
    >
      <div className="space-y-4">
        <p>{c.intro1}</p>
        <p>{c.intro2}</p>
      </div>

      <Section id={ids.s1} title={c.s1Title}>
        <Bullets items={[...c.s1Items]} />
        <p className="mt-4">{c.s1Note}</p>
      </Section>

      <Section id={ids.s2} title={c.s2Title}>
        <p>{c.s2Intro}</p>
        <Bullets items={[...c.s2Items]} />
      </Section>

      <Section id={ids.s3} title={c.s3Title}>
        <p>{c.s3Intro}</p>
        <Bullets items={[...c.s3Items]} />
        <p className="mt-4">{c.s3Note}</p>
      </Section>

      <Section id={ids.s4} title={c.s4Title}>
        <Bullets items={[...c.s4Items]} />
      </Section>

      <Section id={ids.s5} title={c.s5Title}>
        <p>{c.s5Intro}</p>
        <Bullets items={[...c.s5Items]} />
        <p className="mt-4">{c.s5Ending}</p>
      </Section>

      <Section id={ids.s6} title={c.s6Title}>
        <p>{c.s6Text}</p>
      </Section>

      <Section id={ids.s7} title={c.s7Title}>
        <p>{c.s7Text}</p>
      </Section>

      <Section id={ids.s8} title={c.s8Title}>
        <Bullets items={[...c.s8Items]} />
        <p className="mt-4">{c.s8Ending}</p>
      </Section>

      <Section id={ids.s9} title={c.s9Title}>
        <p>{c.s9Text}</p>
      </Section>

      <Section id={ids.s10} title={c.s10Title}>
        <p>{c.s10Text}</p>
      </Section>

      <Section id={ids.s11} title={c.s11Title}>
        <p>{c.s11Text}</p>
      </Section>

      <Section id={ids.s12} title={c.s12Title}>
        <p>{c.s12Text}</p>
      </Section>

      <Section id={ids.s13} title={c.s13Title}>
        <p>{c.s13Text}</p>
      </Section>

      <Section id={ids.s14} title={c.s14Title}>
        <p>{c.s14Text}</p>
      </Section>

      <Section id={ids.s15} title={c.s15Title}>
        <address className="space-y-1 not-italic">
          {c.s15Address.map((line, idx) => (
            <p key={idx} className={idx === 0 ? "font-semibold" : ""}>
              {line}
            </p>
          ))}
        </address>
      </Section>
    </LegalDocument>
  );
}
