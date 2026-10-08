import type { ReactNode } from "react";
import { buildMetadata } from "@/app/seo";
import LegalDocument, {
  Section,
  Sub,
  Bullets,
  Callout,
  ExtLink,
} from "@/src/components/legal/LegalDocument";
import { LEGAL_LAST_UPDATED } from "@/src/constants/legalDates";
import PrintButton from "../notice-of-privacy-practices/PrintButton"; // Adjust path if needed

export const metadata = {
  ...buildMetadata({
    title: "Notice of Privacy Practices",
    description:
      "How One Community Home Health may use and disclose your protected health information, and your rights regarding that information.",
    path: "/privacy-policy",
  }),
  robots: { index: true, follow: true },
};

const HHS_COMPLAINT_URL =
  "https://www.hhs.gov/hipaa/filing-a-complaint/index.html";
const HHS_NOTICE_URL =
  "https://www.hhs.gov/ocr/privacy/hipaa/understanding/consumers/noticepp.html";

const TOC = [
  { id: "your-rights", label: "Your Rights" },
  { id: "your-choices", label: "Your Choices" },
  { id: "our-uses-and-disclosures", label: "Our Uses and Disclosures" },
  { id: "detailed-your-rights", label: "Your Rights (Detailed)" },
  { id: "detailed-your-choices", label: "Your Choices (Detailed)" },
  { id: "detailed-our-uses", label: "Our Uses and Disclosures (Detailed)" },
  { id: "our-responsibilities", label: "Our Responsibilities" },
  {
    id: "changes-to-this-notice",
    label: "Changes to the Terms of this Notice",
  },
  { id: "texas-law-rights", label: "Your Rights Under Texas Law" },
  { id: "our-practices", label: "Our Practices" },
  { id: "contact-us", label: "Contact Us" },
];

function Example({ children }: { children: ReactNode }) {
  return (
    <p className="my-3 border-l-4 border-[#CBD5E1] pl-4 text-[#334155]">
      <span className="font-semibold not-italic text-[#07162C]">Example: </span>
      <span className="italic">{children}</span>
    </p>
  );
}

function Note({ children }: { children: ReactNode }) {
  return <p className="mt-3 text-sm font-medium text-[#334155]">{children}</p>;
}

function HhsComplaintLink() {
  return <ExtLink href={HHS_COMPLAINT_URL}>{HHS_COMPLAINT_URL}</ExtLink>;
}

function HhsComplaintText() {
  return (
    <>
      the U.S. Department of Health and Human Services Office for Civil Rights
      by sending a letter to 200 Independence Avenue, S.W., Washington, D.C.
      20201, calling 1-877-696-6775, or visiting <HhsComplaintLink />
    </>
  );
}

export default function PrivacyPolicy() {
  const lastUpdated = LEGAL_LAST_UPDATED.npp ?? "September 13, 2026";

  return (
    <LegalDocument
      title="Notice of Privacy Practices"
      tagline="Your Information. Your Rights. Our Responsibilities."
      lastUpdated={lastUpdated}
      lastUpdatedLabel="Effective date:"
      contentsLabel="Contents"
      identity={
        <div className="space-y-1">
          <p className="font-bold text-[#07162C]">One Community Home Health</p>
          <p>
            JACOP Healthcare Services, Inc., doing business as One Community
            Home Health
          </p>
          <p>3560 Quannah Drive · Grand Prairie, TX 75052</p>
          <p>Phone 972-325-1598 · Fax 972-674-2923</p>
        </div>
      }
      actions={<PrintButton />}
      toc={TOC}
    >
      <p className="mb-8 text-base italic leading-relaxed text-[#334155]">
        This notice describes how medical information about you may be used and
        disclosed and how you can get access to this information. Please review
        it carefully.
      </p>

      <Section id="your-rights" title="Your Rights">
        <p>You have the right to:</p>
        <Bullets
          items={[
            "Get a copy of your paper or electronic medical record",
            "Correct your paper or electronic medical record",
            "Request confidential communication",
            "Ask us to limit the information we share",
            "Get a list of those with whom we've shared your information",
            "Get a copy of this privacy notice",
            "Choose someone to act for you",
            "File a complaint if you believe your privacy rights have been violated",
          ]}
        />
      </Section>

      <Section id="your-choices" title="Your Choices">
        <p>
          You have some choices in the way that we use and share information as
          we:
        </p>
        <Bullets
          items={[
            "Tell family and friends about your condition",
            "Provide disaster relief",
            "Provide mental health care",
            "Market our services and sell your information",
            "Raise funds",
          ]}
        />
      </Section>

      <Section id="our-uses-and-disclosures" title="Our Uses and Disclosures">
        <p>We may use and share your information as we:</p>
        <Callout>
          <Bullets
            items={[
              "Treat you",
              "Run our organization",
              "Bill for your services",
              "Help with public health and safety issues",
              "Do research",
              "Comply with the law",
              "Respond to organ and tissue donation requests",
              "Work with a medical examiner or funeral director",
              "Address workers' compensation, law enforcement, and other government requests",
              "Respond to lawsuits and legal actions",
            ]}
          />
          <Note>
            To the extent that we have your substance use disorder patient
            records, subject to 42 CFR part 2, we will not share that
            information for investigations or legal proceedings against you
            without (1) your written consent or (2) a court order and a
            subpoena.
          </Note>
        </Callout>
      </Section>

      <Section id="detailed-your-rights" title="Your Rights (Detailed)">
        <p>
          When it comes to your health information, you have certain rights.
          This section explains your rights and some of our responsibilities to
          help you.
        </p>

        <Sub>Get an electronic or paper copy of your medical record</Sub>
        <Bullets
          items={[
            "You can ask to see or get an electronic or paper copy of your medical record and other health information we have about you. Ask us how to do this.",
            "We will provide a copy or a summary of your health information, usually within 30 days of your request. We may charge a reasonable, cost-based fee.",
            "Under Texas law, if you make your request in writing for an electronic health record, we will provide it no later than the 15th business day after we receive your request, in electronic form unless you agree to receive it another way.",
          ]}
        />

        <Sub>Ask us to correct your medical record</Sub>
        <Bullets
          items={[
            "You can ask us to correct health information about you that you think is incorrect or incomplete. Ask us how to do this.",
            "We may say “no” to your request, but we'll tell you why in writing within 60 days.",
          ]}
        />

        <Sub>Request confidential communications</Sub>
        <Bullets
          items={[
            "You can ask us to contact you in a specific way (for example, home, office, or cell phone) or to send mail to a different address.",
            "We will say “yes” to all reasonable requests.",
          ]}
        />

        <Sub>Ask us to limit what we use or share</Sub>
        <Bullets
          items={[
            "You can ask us not to use or share certain health information for treatment, payment, or our operations. We are not required to agree to your request, and we may say “no,” for example, if it could affect your care. If we agree to your request, we may still share this information in the event that you need emergency treatment.",
            "If you pay for a service or health care item out-of-pocket in full, you can ask us not to share that information for the purpose of payment or our operations with your health insurer. We will say “yes” unless a law requires us to share that information.",
          ]}
        />

        <Sub>Get a list of those with whom we've shared information</Sub>
        <Bullets
          items={[
            "You can ask for a list (accounting) of the times we've shared your health information for six years prior to the date you ask, who we shared it with, and why.",
            "We will include all the disclosures except for those about treatment, payment, and health care operations, and certain other disclosures (such as any you asked us to make). We'll provide one accounting a year for free but will charge a reasonable, cost-based fee if you ask for another one within 12 months.",
          ]}
        />

        <Sub>Get a copy of this privacy notice</Sub>
        <p>
          You can ask for a paper copy of this notice at any time, even if you
          have agreed to receive the notice electronically. We will provide you
          with a paper copy promptly.
        </p>

        <Sub>Choose someone to act for you</Sub>
        <Bullets
          items={[
            "If someone has authority to act as your personal representative, such as if someone has your medical power of attorney or if someone is your legal guardian, that person can exercise your rights and make choices about your health information.",
            "We will make sure the person has this authority and can act for you before we take any action.",
          ]}
        />

        <Sub>File a complaint if you feel your rights are violated</Sub>
        <Bullets
          items={[
            <>
              You can complain if you feel we have violated your rights by
              contacting us using the details in{" "}
              <a
                href="#contact-us"
                className="text-[#0B4A8F] underline underline-offset-2 hover:text-[#07162C]"
              >
                Contact Us
              </a>{" "}
              below.
            </>,
            <>
              You can file a complaint with <HhsComplaintText />.
            </>,
            "We will not retaliate against you for filing a complaint.",
          ]}
        />
      </Section>

      <Section id="detailed-your-choices" title="Your Choices (Detailed)">
        <p>
          For certain health information, you can tell us your choices about
          what we share. If you have a clear preference for how we share your
          information in the situations described below, talk to us. Tell us
          what you want us to do, and we will follow your instructions.
        </p>

        <Sub>
          In these cases, you have both the right and choice to tell us to:
        </Sub>
        <Bullets
          items={[
            "Share information with your family, close friends, or others involved in your care or payment for your care",
            "Share information in a disaster relief situation",
          ]}
        />
        <p className="mt-3 text-sm italic text-[#334155]">
          If you are not able to tell us your preference, for example if you are
          unconscious, we may go ahead and share your information if we believe
          it is in your best interest. We may also share your information when
          needed to lessen a serious and imminent threat to health or safety.
        </p>

        <Sub>
          In these cases we never share your information unless you give us
          written permission:
        </Sub>
        <Bullets
          items={[
            "Marketing purposes",
            "Sale of your information",
            "Most sharing of psychotherapy notes",
          ]}
        />

        <Sub>In the case of fundraising:</Sub>
        <Bullets
          items={[
            "We may contact you for fundraising efforts, but you can tell us not to contact you again.",
            "If we have your substance use disorder patient records, subject to 42 CFR part 2, we will give you clear and obvious notice in advance and a choice about whether to receive fundraising communications that use your Part 2 information.",
          ]}
        />
      </Section>

      <Section
        id="detailed-our-uses"
        title="Our Uses and Disclosures (Detailed)"
      >
        <p>
          How do we typically use or share your health information? We typically
          use or share your health information in the following ways.
        </p>

        <Sub>Treat you</Sub>
        <p>
          We can use your health information and share it with other
          professionals who are treating you.
        </p>
        <Example>
          Your nurse shares your wound care progress with your physician, and
          with the physical therapist who visits you at home, so that everyone
          follows the same plan of care.
        </Example>

        <Sub>Run our organization</Sub>
        <p>
          We can use and share your health information to run our practice,
          improve your care, and contact you when necessary.
        </p>
        <Example>
          We use health information about you to schedule your visits, assign
          the right clinician, supervise the care you receive at home, and
          review the quality of our services.
        </Example>

        <Sub>Bill for your services</Sub>
        <p>
          We can use and share your health information to bill and get payment
          from health plans or other entities.
        </p>
        <Example>
          We give information about you to Medicare, Texas Medicaid or
          STAR+PLUS, your managed care plan, or the VA so that your home health
          visits can be paid for.
        </Example>

        <Sub>How else can we use or share your health information?</Sub>
        <p>
          We are allowed or required to share your information in other ways —
          usually in ways that contribute to the public good, such as public
          health and research. We have to meet many conditions in the law before
          we can share your information for these purposes.
        </p>
        <Note>
          In all cases, including those listed below, if we have substance use
          disorder patient records about you, subject to 42 CFR part 2, we
          cannot use or share information in those records in civil, criminal,
          administrative, or legislative investigations or proceedings against
          you without (1) your consent or (2) a court order and a subpoena.
        </Note>

        <Sub>Help with public health and safety issues</Sub>
        <p>
          We can share health information about you for certain situations such
          as:
        </p>
        <Bullets
          items={[
            "Preventing disease",
            "Helping with product recalls",
            "Reporting adverse reactions to medications",
            "Reporting suspected abuse, neglect, or domestic violence",
            "Preventing or reducing a serious threat to anyone's health or safety",
          ]}
        />

        <Sub>Do research</Sub>
        <p>We can use or share your information for health research.</p>

        <Sub>Comply with the law</Sub>
        <Bullets
          items={[
            "Report required information to Medicare and Medicaid. As a Medicare-certified home health agency, we are required to collect and submit assessment information about you (called OASIS data) to the Centers for Medicare & Medicaid Services. If you receive services paid for by Texas Medicaid, we are also required to record and submit electronic visit verification information about each visit — including the time your caregiver arrives and leaves — to the State of Texas and its designated system.",
            "We will share information about you if state or federal laws require it, including with the Department of Health and Human Services if it wants to see that we're complying with federal privacy law.",
          ]}
        />

        <Sub>Respond to organ and tissue donation requests</Sub>
        <p>
          We can share health information about you with organ procurement
          organizations.
        </p>

        <Sub>Work with a medical examiner or funeral director</Sub>
        <p>
          We can share health information with a coroner, medical examiner, or
          funeral director when an individual dies.
        </p>

        <Sub>
          Address workers' compensation, law enforcement, and other government
          requests
        </Sub>
        <p>We can use or share health information about you:</p>
        <Bullets
          items={[
            "For workers' compensation claims",
            "For law enforcement purposes or with a law enforcement official",
            "With health oversight agencies for activities authorized by law",
            "For special government functions such as military, national security, and presidential protective services",
          ]}
        />

        <Sub>Respond to lawsuits and legal actions</Sub>
        <p>
          We can share health information about you in response to a court or
          administrative order, or in response to a subpoena.
        </p>
      </Section>

      <Section id="our-responsibilities" title="Our Responsibilities">
        <Bullets
          items={[
            "We are required by law to maintain the privacy and security of your protected health information.",
            "We will let you know promptly if a breach occurs that may have compromised the privacy or security of your information.",
            "We must follow the duties and privacy practices described in this notice and give you a copy of it.",
            "We will not use or share your information other than as described in this notice unless you tell us we can in writing. If you tell us we can, you may change your mind at any time. Let us know in writing if you change your mind.",
          ]}
        />
        <p className="mt-4 text-sm">
          For more information see:{" "}
          <ExtLink href={HHS_NOTICE_URL}>
            www.hhs.gov/ocr/privacy/hipaa/understanding/consumers/noticepp.html
          </ExtLink>
          .
        </p>
      </Section>

      <Section
        id="changes-to-this-notice"
        title="Changes to the Terms of this Notice"
      >
        <p>
          We can change the terms of this notice, and the changes will apply to
          all information we have about you. The new notice will be available
          upon request, in our office, and on our web site.
        </p>
      </Section>

      <Section id="texas-law-rights" title="Your Rights Under Texas Law">
        <p>
          Texas law gives you some protections in addition to the federal rights
          described above.
        </p>
        <Bullets
          items={[
            "Access to your electronic health record. If you ask us in writing for a copy of your electronic health record, we will give it to you no later than the 15th business day after we receive your request. We will provide it in electronic form unless you agree to receive it another way. (Texas Health and Safety Code Section 181.102)",
            "Notice of electronic disclosure. Your protected health information may be disclosed electronically. We may do so for your treatment, to obtain payment, for our health care operations, and as otherwise authorized or required by state or federal law. Any other electronic disclosure of your protected health information requires your separate written authorization. (Texas Health and Safety Code Section 181.154)",
            "Reporting abuse, neglect, and exploitation. Texas law requires us to report suspected abuse, neglect, or exploitation of a child, an adult who is elderly, or an adult with a disability. We will make these reports as the law requires.",
          ]}
        />
      </Section>

      <Section id="our-practices" title="Our Practices">
        <Bullets
          items={[
            "We do not sell your health information.",
            "We do not use or share your health information for marketing purposes without your written authorization.",
            "We do not use your health information for fundraising.",
          ]}
        />
      </Section>

      <Section id="contact-us" title="Contact Us">
        <p>
          If you have questions about this notice, want a paper copy, or want to
          exercise any of the rights described above, please contact our Privacy
          Officer.
        </p>
        <address className="not-italic my-5 space-y-1 rounded-2xl border border-[#CBD5E1] bg-[#F8FAFC] p-5">
          <p className="font-semibold text-[#07162C]">
            Privacy Officer: Blessing Obieze, Attorney at Law
          </p>
          <p>Phone: 972-848-7942 | Main office: 972-325-1598</p>
          <p>
            Email:{" "}
            <a
              href="mailto:privacy@onechh.com"
              className="text-[#0B4A8F] underline underline-offset-2 hover:text-[#07162C]"
            >
              privacy@onechh.com
            </a>
          </p>
          <p>
            Mail: JACOP Healthcare Services, Inc., doing business as One
            Community Home Health, 3560 Quannah Drive, Grand Prairie, TX 75052
          </p>
        </address>
        <p>
          You may also file a complaint with <HhsComplaintText />. We will not
          retaliate against you for filing a complaint.
        </p>
      </Section>
    </LegalDocument>
  );
}
