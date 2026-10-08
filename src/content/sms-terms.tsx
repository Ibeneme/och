import type { ReactNode } from "react";

export type SmsSection = { id: string; title: string; body: ReactNode | null };

export const SMS_SECTIONS: SmsSection[] = [
  {
    id: "sms-program-description",
    title: "Program Description",
    body: (
      <>
        <p className="mb-3">One Community may send text messages concerning:</p>
        <ul className="list-disc pl-5 space-y-1 mb-3">
          <li>Responses to inquiries about our services;</li>
          <li>Consultation and appointment scheduling;</li>
          <li>Care coordination and service-related updates;</li>
          <li>
            Employment, caregiver-interest, and application-related
            communications; and
          </li>
          <li>Other informational messages you request or authorize.</li>
        </ul>
        <p>
          We do not use this SMS program to send detailed medical records or
          other sensitive health information. Text messages are not a substitute
          for emergency services. If you are experiencing a medical emergency,
          call 911.
        </p>
      </>
    ),
  },
  {
    id: "sms-consent",
    title: "Consent",
    body: (
      <>
        <p className="mb-3">
          You may opt in to receive text messages from One Community by
          providing your mobile number and affirmatively agreeing to receive
          messages through a website form, by phone, in writing, or through
          another disclosed opt-in method.
        </p>
        <p>
          Your consent to receive text messages is not a condition of purchasing
          or receiving services, obtaining care, or applying for or accepting
          employment. Consent applies only to One Community and the purposes
          described when you opt in.
        </p>
      </>
    ),
  },
  {
    id: "sms-message-frequency",
    title: "Message Frequency",
    body: (
      <p>
        Message frequency varies depending on your inquiry, scheduling needs,
        care-coordination activity, or employment-related communications.
      </p>
    ),
  },
  {
    id: "sms-message-and-data-rates",
    title: "Message and Data Rates",
    body: (
      <p>
        Message and data rates may apply. Your mobile carrier&apos;s rates and
        charges are your responsibility. Contact your carrier for information
        about your messaging or data plan.
      </p>
    ),
  },
  {
    id: "sms-how-to-opt-out",
    title: "How to Opt Out",
    body: (
      <>
        <p className="mb-3">
          You may cancel text messages at any time by replying STOP to any
          message from One Community. After you send STOP, you may receive one
          final message confirming that you have been unsubscribed. After that
          confirmation, we will not send additional text messages unless you opt
          in again.
        </p>
        <p>
          You may also request to stop messages by calling 972-325-1598 or
          emailing info@onechh.com.
        </p>
      </>
    ),
  },
  {
    id: "sms-how-to-get-help",
    title: "How to Get Help",
    body: (
      <>
        <p className="mb-3">
          Reply HELP to any message from One Community for assistance. You may
          also contact us at:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Phone: 972-325-1598</li>
          <li>Email: info@onechh.com</li>
          <li>Address: 3560 Quannah Drive, Grand Prairie, Texas 75052</li>
        </ul>
      </>
    ),
  },
  {
    id: "sms-privacy",
    title: "Privacy",
    body: (
      <>
        <p className="mb-3">
          Your privacy is important to us. Our collection, use, and protection
          of information associated with our text-messaging program are
          described in our{" "}
          <a
            href="https://onecommunityhomehealth.com/privacy-policy/"
            className="text-[#0B4A8F] underline underline-offset-2 hover:text-[#07162C]"
          >
            Privacy Policy
          </a>
          .
        </p>
        <p>
          No mobile information will be shared with third parties or affiliates
          for marketing or promotional purposes. Text-messaging originator
          opt-in data and consent will not be sold, rented, or shared with third
          parties or affiliates for their marketing or promotional purposes. We
          may disclose information to service providers that help us operate and
          deliver text messages, but only as necessary to provide those
          services, or when disclosure is required by law.
        </p>
      </>
    ),
  },
  {
    id: "sms-supported-carriers-and-delivery",
    title: "Supported Carriers and Delivery",
    body: (
      <p>
        Message delivery is subject to effective transmission by your mobile
        carrier and is not guaranteed. Wireless carriers are not liable for
        delayed or undelivered messages. Availability may vary by carrier,
        device, location, and service coverage.
      </p>
    ),
  },
  {
    id: "sms-your-responsibilities",
    title: "Your Responsibilities",
    body: (
      <>
        <p className="mb-3">
          You represent that you are the subscriber or customary user of the
          mobile number you provide and that you are authorized to consent to
          receive messages at that number. If your mobile number changes or is
          reassigned, you agree to opt out or notify One Community promptly.
        </p>
        <p>
          You agree not to use the SMS program for unlawful, abusive, or
          fraudulent purposes or in a manner that interferes with its operation.
        </p>
      </>
    ),
  },
  {
    id: "sms-changes",
    title: "Changes",
    body: (
      <p>
        We may update these SMS Terms and Conditions as our messaging practices,
        services, or legal obligations change. The &quot;Last updated&quot; date
        above identifies the current version. Material changes will be posted on
        this page or communicated as required by law. Your continued
        participation in the SMS program after an update constitutes acceptance
        of the revised terms to the extent permitted by law.
      </p>
    ),
  },
  {
    id: "sms-contact",
    title: "Contact",
    body: (
      <address className="not-italic space-y-1">
        <p className="font-semibold">
          JACOP Health Care Services d/b/a One Community Home Health
        </p>
        <p>3560 Quannah Drive</p>
        <p>Grand Prairie, Texas 75052</p>
        <p>Phone: 972-325-1598</p>
        <p>Email: info@onechh.com</p>
      </address>
    ),
  },
];
