"use client";

import LegalDocument, { Section, Bullets } from "./LegalDocument";
import { useLanguage } from "@/src/context/LanguageContext";

const COPY = {
  en: {
    title: "Notice of Privacy Practices",
    updated: "Effective date:",
    contents: "Contents",
    agencyBlock: {
      legalName:
        "JACOP Healthcare Services, Inc., doing business as One Community Home Health",
      address: "3560 Quannah Drive · Grand Prairie, TX 75052",
      phone: "Phone 972-325-1598 · Fax 972-674-2923",
      officer: "Privacy Officer: Blessing Obieze, Attorney at Law",
      officerPhone: "Privacy Phone: 972-848-7942",
      email: "Email: privacy@onechh.com",
      effectiveDate: "Effective date: September 13, 2026",
    },
    printButton: "Print / Save as PDF",
    introSubtitle: "Your Information. Your Rights. Our Responsibilities.",
    introText:
      "This notice describes how medical information about you may be used and disclosed and how you can get access to this information. Please review it carefully.",

    rightsSummaryH: "Your Rights",
    rightsSummaryIntro: "You have the right to:",
    rightsSummaryItems: [
      "Get a copy of your paper or electronic medical record",
      "Correct your paper or electronic medical record",
      "Request confidential communication",
      "Ask us to limit the information we share",
      "Get a list of those with whom we've shared your information",
      "Get a copy of this privacy notice",
      "Choose someone to act for you",
      "File a complaint if you believe your privacy rights have been violated",
    ],

    choicesSummaryH: "Your Choices",
    choicesSummaryIntro:
      "You have some choices in the way that we use and share information as we:",
    choicesSummaryItems: [
      "Tell family and friends about your condition",
      "Provide disaster relief",
      "Provide mental health care",
      "Market our services and sell your information",
      "Raise funds",
    ],

    usesSummaryH: "Our Uses and Disclosures",
    usesSummaryIntro: "We may use and share your information as we:",
    usesSummaryItems: [
      "Treat you",
      "Run our organization",
      "Bill for your services",
      "Help with public health and safety issues",
      "Do research",
      "Comply with the law",
    ],
    usesBoxH: "Our Uses and Disclosures Summary",
    usesSummaryBox: [
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
      "To the extent that we have your substance use disorder patient records, subject to 42 CFR part 2, we will not share that information for investigations or legal proceedings against you without (1) your written consent or (2) a court order and a subpoena.",
    ],

    s1H: "Your Rights",
    s1Intro:
      "When it comes to your health information, you have certain rights. This section explains your rights and some of our responsibilities to help you.",

    recH: "Get an electronic or paper copy of your medical record",
    recItems: [
      "You can ask to see or get an electronic or paper copy of your medical record and other health information we have about you. Ask us how to do this.",
      "We will provide a copy or a summary of your health information, usually within 30 days of your request. We may charge a reasonable, cost-based fee.",
      "Under Texas law, if you make your request in writing for an electronic health record, we will provide it no later than the 15th business day after we receive your request, in electronic form unless you agree to receive it another way.",
    ],

    corrH: "Ask us to correct your medical record",
    corrItems: [
      "You can ask us to correct health information about you that you think is incorrect or incomplete. Ask us how to do this.",
      'We may say "no" to your request, but we\'ll tell you why in writing within 60 days.',
    ],

    confH: "Request confidential communications",
    confItems: [
      "You can ask us to contact you in a specific way (for example, home, office, or cell phone) or to send mail to a different address.",
      'We will say "yes" to all reasonable requests.',
    ],

    limH: "Ask us to limit what we use or share",
    limItems: [
      'You can ask us not to use or share certain health information for treatment, payment, or our operations. We are not required to agree to your request, and we may say "no," for example, if it could affect your care. If we agree to your request, we may still share this information in the event that you need emergency treatment.',
      'If you pay for a service or health care item out-of-pocket in full, you can ask us not to share that information for the purpose of payment or our operations with your health insurer. We will say "yes" unless a law requires us to share that information.',
    ],

    listH: "Get a list of those with whom we've shared information",
    listItems: [
      "You can ask for a list (accounting) of the times we've shared your health information for six years prior to the date you ask, who we shared it with, and why.",
      "We will include all the disclosures except for those about treatment, payment, and health care operations, and certain other disclosures (such as any you asked us to make). We'll provide one accounting a year for free but will charge a reasonable, cost-based fee if you ask for another one within 12 months.",
    ],

    copyH: "Get a copy of this privacy notice",
    copyText:
      "You can ask for a paper copy of this notice at any time, even if you have agreed to receive the notice electronically. We will provide you with a paper copy promptly.",

    repH: "Choose someone to act for you",
    repItems: [
      "If someone has authority to act as your personal representative, such as if someone has your medical power of attorney or if someone is your legal guardian, that person can exercise your rights and make choices about your health information.",
      "We will make sure the person has this authority and can act for you before we take any action.",
    ],

    compH: "File a complaint if you feel your rights are violated",
    compItems: [
      "You can complain if you feel we have violated your rights by contacting us using the information on page 1.",
      "You can file a complaint with the U.S. Department of Health and Human Services Office for Civil Rights by sending a letter to 200 Independence Avenue, S.W., Washington, D.C. 20201, calling 1-877-696-6775, or visiting https://www.hhs.gov/hipaa/filing-a-complaint/index.html.",
      "We will not retaliate against you for filing a complaint.",
    ],

    s2H: "Your Choices",
    s2Intro:
      "For certain health information, you can tell us your choices about what we share. If you have a clear preference for how we share your information in the situations described below, talk to us. Tell us what you want us to do, and we will follow your instructions.",
    s2Sub1: "In these cases, you have both the right and choice to tell us to:",
    s2Sub1Items: [
      "Share information with your family, close friends, or others involved in your care or payment for your care",
      "Share information in a disaster relief situation",
    ],
    s2Sub1Note:
      "If you are not able to tell us your preference, for example if you are unconscious, we may go ahead and share your information if we believe it is in your best interest. We may also share your information when needed to lessen a serious and imminent threat to health or safety.",
    s2Sub2:
      "In these cases we never share your information unless you give us written permission:",
    s2Sub2Items: [
      "Marketing purposes",
      "Sale of your information",
      "Most sharing of psychotherapy notes",
    ],
    s2Sub3: "In the case of fundraising:",
    s2Sub3Items: [
      "We may contact you for fundraising efforts, but you can tell us not to contact you again.",
      "If we have your substance use disorder patient records, subject to 42 CFR part 2, we will give you clear and obvious notice in advance and a choice about whether to receive fundraising communications that use your Part 2 information.",
    ],

    s3H: "Our Uses and Disclosures",
    s3Intro:
      "How do we typically use or share your health information?\nWe typically use or share your health information in the following ways.",
    treatH: "Treat you",
    treatText:
      "We can use your health information and share it with other professionals who are treating you.",
    treatEx:
      "Example: Your nurse shares your wound care progress with your physician, and with the physical therapist who visits you at home, so that everyone follows the same plan of care.",

    runH: "Run our organization",
    runText:
      "We can use and share your health information to run our practice, improve your care, and contact you when necessary.",
    runEx:
      "Example: We use health information about you to schedule your visits, assign the right clinician, supervise the care you receive at home, and review the quality of our services.",

    billH: "Bill for your services",
    billText:
      "We can use and share your health information to bill and get payment from health plans or other entities.",
    billEx:
      "Example: We give information about you to Medicare, Texas Medicaid or STAR+PLUS, your managed care plan, or the VA so that your home health visits can be paid for.",

    otherUsesH: "How else can we use or share your health information?",
    otherUsesIntro:
      "We are allowed or required to share your information in other ways -- usually in ways that contribute to the public good, such as public health and research. We have to meet many conditions in the law before we can share your information for these purposes.\n\nIn all cases, including those listed below, if we have substance use disorder patient records about you, subject to 42 CFR part 2, we cannot use or share information in those records in civil, criminal, administrative, or legislative investigations or proceedings against you without (1) your consent or (2) a court order and a subpoena.",

    pubHealthH: "Help with public health and safety issues",
    pubHealthIntro:
      "We can share health information about you for certain situations such as:",
    pubHealthItems: [
      "Preventing disease",
      "Helping with product recalls",
      "Reporting adverse reactions to medications",
      "Reporting suspected abuse, neglect, or domestic violence",
      "Preventing or reducing a serious threat to anyone's health or safety",
    ],

    researchH: "Do research",
    researchText: "We can use or share your information for health research.",

    complyH: "Comply with the law",
    complyItems: [
      "Report required information to Medicare and Medicaid: As a Medicare-certified home health agency, we are required to collect and submit assessment information about you (called OASIS data) to the Centers for Medicare & Medicaid Services. If you receive services paid for by Texas Medicaid, we are also required to record and submit electronic visit verification information about each visit --- including the time your caregiver arrives and leaves --- to the State of Texas and its designated system.",
      "We will share information about you if state or federal laws require it, including with the Department of Health and Human Services if it wants to see that we're complying with federal privacy law.",
    ],

    organH: "Respond to organ and tissue donation requests",
    organText:
      "We can share health information about you with organ procurement organizations.",

    funeralH: "Work with a medical examiner or funeral director",
    funeralText:
      "We can share health information with a coroner, medical examiner, or funeral director when an individual dies.",

    govReqH:
      "Address workers' compensation, law enforcement, and other government requests",
    govReqIntro: "We can use or share health information about you:",
    govReqItems: [
      "For workers' compensation claims",
      "For law enforcement purposes or with a law enforcement official",
      "With health oversight agencies for activities authorized by law",
      "For special government functions such as military, national security, and presidential protective services",
    ],

    lawsuitH: "Respond to lawsuits and legal actions",
    lawsuitText:
      "We can share health information about you in response to a court or administrative order, or in response to a subpoena.",

    s4H: "Our Responsibilities",
    s4Items: [
      "We are required by law to maintain the privacy and security of your protected health information.",
      "We will let you know promptly if a breach occurs that may have compromised the privacy or security of your information.",
      "We must follow the duties and privacy practices described in this notice and give you a copy of it.",
      "We will not use or share your information other than as described in this notice unless you tell us we can in writing. If you tell us we can, you may change your mind at any time. Let us know in writing if you change your mind.",
    ],
    s4Link:
      "For more information see: www.hhs.gov/ocr/privacy/hipaa/understanding/consumers/noticepp.html.",

    s5H: "Changes to the Terms of this Notice",
    s5Text:
      "We can change the terms of this notice, and the changes will apply to all information we have about you. The new notice will be available upon request, in our office, and on our web site.",

    s6H: "Your Rights Under Texas Law",
    s6Intro:
      "Texas law gives you some protections in addition to the federal rights described above.",
    s6Items: [
      "Access to your electronic health record. If you ask us in writing for a copy of your electronic health record, we will give it to you no later than the 15th business day after we receive your request. We will provide it in electronic form unless you agree to receive it another way. (Texas Health and Safety Code Section 181.102)",
      "Notice of electronic disclosure. Your protected health information may be disclosed electronically. We may do so for your treatment, to obtain payment, for our health care operations, and as otherwise authorized or required by state or federal law. Any other electronic disclosure of your protected health information requires your separate written authorization. (Texas Health and Safety Code Section 181.154)",
      "Reporting abuse, neglect, and exploitation. Texas law requires us to report suspected abuse, neglect, or exploitation of a child, an adult who is elderly, or an adult with a disability. We will make these reports as the law requires.",
    ],

    s7H: "Our Practices",
    s7Items: [
      "We do not sell your health information.",
      "We do not use or share your health information for marketing purposes without your written authorization.",
      "We do not use your health information for fundraising.",
    ],

    s8H: "Contact Us",
    s8Text:
      "If you have questions about this notice, want a paper copy, or want to exercise any of the rights described above, please contact our Privacy Officer.",
    s8Address: [
      "Privacy Officer: Blessing Obieze, Attorney at Law",
      "Phone: 972-848-7942 Main office: 972-325-1598",
      "Email: privacy@onechh.com",
      "Mail: JACOP Healthcare Services, Inc., doing business as One Community Home Health, 3560 Quannah Drive, Grand Prairie, TX 75052",
    ],
    s8Complaint:
      "You may also file a complaint with the U.S. Department of Health and Human Services Office for Civil Rights by sending a letter to 200 Independence Avenue, S.W., Washington, D.C. 20201, calling 1-877-696-6775, or visiting https://www.hhs.gov/hipaa/filing-a-complaint/index.html. We will not retaliate against you for filing a complaint.",

    s9H: "Effective Date",
    s9Text: "This Notice of Privacy Practices is effective September 13, 2026.",
  },
  es: {
    title: "Notice of Privacy Practices",
    updated: "Effective date:",
    contents: "Contents",
    agencyBlock: {
      legalName:
        "JACOP Healthcare Services, Inc., doing business as One Community Home Health",
      address: "3560 Quannah Drive · Grand Prairie, TX 75052",
      phone: "Phone 972-325-1598 · Fax 972-674-2923",
      officer: "Privacy Officer: Blessing Obieze, Attorney at Law",
      officerPhone: "Privacy Phone: 972-848-7942",
      email: "Email: privacy@onechh.com",
      effectiveDate: "Effective date: September 13, 2026",
    },
    printButton: "Print / Save as PDF",
    introSubtitle: "Your Information. Your Rights. Our Responsibilities.",
    introText:
      "This notice describes how medical information about you may be used and disclosed and how you can get access to this information. Please review it carefully.",

    rightsSummaryH: "Your Rights",
    rightsSummaryIntro: "You have the right to:",
    rightsSummaryItems: [
      "Get a copy of your paper or electronic medical record",
      "Correct your paper or electronic medical record",
      "Request confidential communication",
      "Ask us to limit the information we share",
      "Get a list of those with whom we've shared your information",
      "Get a copy of this privacy notice",
      "Choose someone to act for you",
      "File a complaint if you believe your privacy rights have been violated",
    ],

    choicesSummaryH: "Your Choices",
    choicesSummaryIntro:
      "You have some choices in the way that we use and share information as we:",
    choicesSummaryItems: [
      "Tell family and friends about your condition",
      "Provide disaster relief",
      "Provide mental health care",
      "Market our services and sell your information",
      "Raise funds",
    ],

    usesSummaryH: "Our Uses and Disclosures",
    usesSummaryIntro: "We may use and share your information as we:",
    usesSummaryItems: [
      "Treat you",
      "Run our organization",
      "Bill for your services",
      "Help with public health and safety issues",
      "Do research",
      "Comply with the law",
    ],
    usesBoxH: "Our Uses and Disclosures Summary",
    usesSummaryBox: [
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
      "To the extent that we have your substance use disorder patient records, subject to 42 CFR part 2, we will not share that information for investigations or legal proceedings against you without (1) your written consent or (2) a court order and a subpoena.",
    ],

    s1H: "Your Rights",
    s1Intro:
      "When it comes to your health information, you have certain rights. This section explains your rights and some of our responsibilities to help you.",

    recH: "Get an electronic or paper copy of your medical record",
    recItems: [
      "You can ask to see or get an electronic or paper copy of your medical record and other health information we have about you. Ask us how to do this.",
      "We will provide a copy or a summary of your health information, usually within 30 days of your request. We may charge a reasonable, cost-based fee.",
      "Under Texas law, if you make your request in writing for an electronic health record, we will provide it no later than the 15th business day after we receive your request, in electronic form unless you agree to receive it another way.",
    ],

    corrH: "Ask us to correct your medical record",
    corrItems: [
      "You can ask us to correct health information about you that you think is incorrect or incomplete. Ask us how to do this.",
      'We may say "no" to your request, but we\'ll tell you why in writing within 60 days.',
    ],

    confH: "Request confidential communications",
    confItems: [
      "You can ask us to contact you in a specific way (for example, home, office, or cell phone) or to send mail to a different address.",
      'We will say "yes" to all reasonable requests.',
    ],

    limH: "Ask us to limit what we use or share",
    limItems: [
      'You can ask us not to use or share certain health information for treatment, payment, or our operations. We are not required to agree to your request, and we may say "no," for example, if it could affect your care. If we agree to your request, we may still share this information in the event that you need emergency treatment.',
      'If you pay for a service or health care item out-of-pocket in full, you can ask us not to share that information for the purpose of payment or our operations with your health insurer. We will say "yes" unless a law requires us to share that information.',
    ],

    listH: "Get a list of those with whom we've shared information",
    listItems: [
      "You can ask for a list (accounting) of the times we've shared your health information for six years prior to the date you ask, who we shared it with, and why.",
      "We will include all the disclosures except for those about treatment, payment, and health care operations, and certain other disclosures (such as any you asked us to make). We'll provide one accounting a year for free but will charge a reasonable, cost-based fee if you ask for another one within 12 months.",
    ],

    copyH: "Get a copy of this privacy notice",
    copyText:
      "You can ask for a paper copy of this notice at any time, even if you have agreed to receive the notice electronically. We will provide you with a paper copy promptly.",

    repH: "Choose someone to act for you",
    repItems: [
      "If someone has authority to act as your personal representative, such as if someone has your medical power of attorney or if someone is your legal guardian, that person can exercise your rights and make choices about your health information.",
      "We will make sure the person has this authority and can act for you before we take any action.",
    ],

    compH: "File a complaint if you feel your rights are violated",
    compItems: [
      "You can complain if you feel we have violated your rights by contacting us using the information on page 1.",
      "You can file a complaint with the U.S. Department of Health and Human Services Office for Civil Rights by sending a letter to 200 Independence Avenue, S.W., Washington, D.C. 20201, calling 1-877-696-6775, or visiting https://www.hhs.gov/hipaa/filing-a-complaint/index.html.",
      "We will not retaliate against you for filing a complaint.",
    ],

    s2H: "Your Choices",
    s2Intro:
      "For certain health information, you can tell us your choices about what we share. If you have a clear preference for how we share your information in the situations described below, talk to us. Tell us what you want us to do, and we will follow your instructions.",
    s2Sub1: "In these cases, you have both the right and choice to tell us to:",
    s2Sub1Items: [
      "Share information with your family, close friends, or others involved in your care or payment for your care",
      "Share information in a disaster relief situation",
    ],
    s2Sub1Note:
      "If you are not able to tell us your preference, for example if you are unconscious, we may go ahead and share your information if we believe it is in your best interest. We may also share your information when needed to lessen a serious and imminent threat to health or safety.",
    s2Sub2:
      "In these cases we never share your information unless you give us written permission:",
    s2Sub2Items: [
      "Marketing purposes",
      "Sale of your information",
      "Most sharing of psychotherapy notes",
    ],
    s2Sub3: "In the case of fundraising:",
    s2Sub3Items: [
      "We may contact you for fundraising efforts, but you can tell us not to contact you again.",
      "If we have your substance use disorder patient records, subject to 42 CFR part 2, we will give you clear and obvious notice in advance and a choice about whether to receive fundraising communications that use your Part 2 information.",
    ],

    s3H: "Our Uses and Disclosures",
    s3Intro:
      "How do we typically use or share your health information?\nWe typically use or share your health information in the following ways.",
    treatH: "Treat you",
    treatText:
      "We can use your health information and share it with other professionals who are treating you.",
    treatEx:
      "Example: Your nurse shares your wound care progress with your physician, and with the physical therapist who visits you at home, so that everyone follows the same plan of care.",

    runH: "Run our organization",
    runText:
      "We can use and share your health information to run our practice, improve your care, and contact you when necessary.",
    runEx:
      "Example: We use health information about you to schedule your visits, assign the right clinician, supervise the care you receive at home, and review the quality of our services.",

    billH: "Bill for your services",
    billText:
      "We can use and share your health information to bill and get payment from health plans or other entities.",
    billEx:
      "Example: We give information about you to Medicare, Texas Medicaid or STAR+PLUS, your managed care plan, or the VA so that your home health visits can be paid for.",

    otherUsesH: "How else can we use or share your health information?",
    otherUsesIntro:
      "We are allowed or required to share your information in other ways -- usually in ways that contribute to the public good, such as public health and research. We have to meet many conditions in the law before we can share your information for these purposes.\n\nIn all cases, including those listed below, if we have substance use disorder patient records about you, subject to 42 CFR part 2, we cannot use or share information in those records in civil, criminal, administrative, or legislative investigations or proceedings against you without (1) your consent or (2) a court order and a subpoena.",

    pubHealthH: "Help with public health and safety issues",
    pubHealthIntro:
      "We can share health information about you for certain situations such as:",
    pubHealthItems: [
      "Preventing disease",
      "Helping with product recalls",
      "Reporting adverse reactions to medications",
      "Reporting suspected abuse, neglect, or domestic violence",
      "Preventing or reducing a serious threat to anyone's health or safety",
    ],

    researchH: "Do research",
    researchText: "We can use or share your information for health research.",

    complyH: "Comply with the law",
    complyItems: [
      "Report required information to Medicare and Medicaid: As a Medicare-certified home health agency, we are required to collect and submit assessment information about you (called OASIS data) to the Centers for Medicare & Medicaid Services. If you receive services paid for by Texas Medicaid, we are also required to record and submit electronic visit verification information about each visit --- including the time your caregiver arrives and leaves --- to the State of Texas and its designated system.",
      "We will share information about you if state or federal laws require it, including with the Department of Health and Human Services if it wants to see that we're complying with federal privacy law.",
    ],

    organH: "Respond to organ and tissue donation requests",
    organText:
      "We can share health information about you with organ procurement organizations.",

    funeralH: "Work with a medical examiner or funeral director",
    funeralText:
      "We can share health information with a coroner, medical examiner, or funeral director when an individual dies.",

    govReqH:
      "Address workers' compensation, law enforcement, and other government requests",
    govReqIntro: "We can use or share health information about you:",
    govReqItems: [
      "For workers' compensation claims",
      "For law enforcement purposes or with a law enforcement official",
      "With health oversight agencies for activities authorized by law",
      "For special government functions such as military, national security, and presidential protective services",
    ],

    lawsuitH: "Respond to lawsuits and legal actions",
    lawsuitText:
      "We can share health information about you in response to a court or administrative order, or in response to a subpoena.",

    s4H: "Our Responsibilities",
    s4Items: [
      "We are required by law to maintain the privacy and security of your protected health information.",
      "We will let you know promptly if a breach occurs that may have compromised the privacy or security of your information.",
      "We must follow the duties and privacy practices described in this notice and give you a copy of it.",
      "We will not use or share your information other than as described in this notice unless you tell us we can in writing. If you tell us we can, you may change your mind at any time. Let us know in writing if you change your mind.",
    ],
    s4Link:
      "For more information see: www.hhs.gov/ocr/privacy/hipaa/understanding/consumers/noticepp.html.",

    s5H: "Changes to the Terms of this Notice",
    s5Text:
      "We can change the terms of this notice, and the changes will apply to all information we have about you. The new notice will be available upon request, in our office, and on our web site.",

    s6H: "Your Rights Under Texas Law",
    s6Intro:
      "Texas law gives you some protections in addition to the federal rights described above.",
    s6Items: [
      "Access to your electronic health record. If you ask us in writing for a copy of your electronic health record, we will give it to you no later than the 15th business day after we receive your request. We will provide it in electronic form unless you agree to receive it another way. (Texas Health and Safety Code Section 181.102)",
      "Notice of electronic disclosure. Your protected health information may be disclosed electronically. We may do so for your treatment, to obtain payment, for our health care operations, and as otherwise authorized or required by state or federal law. Any other electronic disclosure of your protected health information requires your separate written authorization. (Texas Health and Safety Code Section 181.154)",
      "Reporting abuse, neglect, and exploitation. Texas law requires us to report suspected abuse, neglect, or exploitation of a child, an adult who is elderly, or an adult with a disability. We will make these reports as the law requires.",
    ],

    s7H: "Our Practices",
    s7Items: [
      "We do not sell your health information.",
      "We do not use or share your health information for marketing purposes without your written authorization.",
      "We do not use your health information for fundraising.",
    ],

    s8H: "Contact Us",
    s8Text:
      "If you have questions about this notice, want a paper copy, or want to exercise any of the rights described above, please contact our Privacy Officer.",
    s8Address: [
      "Privacy Officer: Blessing Obieze, Attorney at Law",
      "Phone: 972-848-7942 Main office: 972-325-1598",
      "Email: privacy@onechh.com",
      "Mail: JACOP Healthcare Services, Inc., doing business as One Community Home Health, 3560 Quannah Drive, Grand Prairie, TX 75052",
    ],
    s8Complaint:
      "You may also file a complaint with the U.S. Department of Health and Human Services Office for Civil Rights by sending a letter to 200 Independence Avenue, S.W., Washington, D.C. 20201, calling 1-877-696-6775, or visiting https://www.hhs.gov/hipaa/filing-a-complaint/index.html. We will not retaliate against you for filing a complaint.",

    s9H: "Effective Date",
    s9Text: "This Notice of Privacy Practices is effective September 13, 2026.",
  },
} as const;

/* ---------- Layout helpers (clean & shadow-free) ---------- */

function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-xl border border-[#E2E8F0] bg-white p-5 print:break-inside-avoid ${className}`}
    >
      {children}
    </div>
  );
}

function CardTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-3 text-base font-semibold leading-snug text-[#0B4A8F]">
      {children}
    </h3>
  );
}

function Example({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-4 rounded-md border-l-4 border-[#0B4A8F]/40 bg-[#F1F5F9] px-4 py-3 text-sm italic leading-relaxed text-[#334155]">
      {children}
    </p>
  );
}

function SummaryCard({
  title,
  intro,
  items,
}: {
  title: string;
  intro: string;
  items: readonly string[];
}) {
  return (
    <div className="rounded-xl border border-[#E2E8F0] border-t-4 border-t-[#0B4A8F] bg-white p-5 print:break-inside-avoid">
      <h3 className="mb-1 text-base font-bold text-[#0B4A8F]">{title}</h3>
      <p className="mb-3 text-xs text-[#475569]">{intro}</p>
      <Bullets items={[...items]} />
    </div>
  );
}

function CheckIcon() {
  return (
    <svg
      className="h-5 w-5 shrink-0 text-[#0B4A8F]"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0L3.3 9.7a1 1 0 111.4-1.4l3.8 3.8 6.8-6.8a1 1 0 011.4 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function NoticeOfPrivacyPracticesContent() {
  const { language } = useLanguage();
  const L = language === "es" ? "es" : "en";
  const c = COPY[L];
  const a = c.agencyBlock;

  const ids = {
    rights: "your-rights",
    choices: "your-choices",
    uses: "our-uses-and-disclosures",
    responsibilities: "our-responsibilities",
    changes: "changes-to-the-terms",
    texas: "your-rights-under-texas-law",
    practices: "our-practices",
    contact: "contact-us",
    effective: "effective-date",
  };

  return (
    <LegalDocument
      title={c.title}
      lang={L}
      lastUpdated={a.effectiveDate
        .replace("Effective date: ", "")
        .replace("Fecha de vigencia: ", "")}
      lastUpdatedLabel={c.updated}
      contentsLabel={c.contents}
      toc={[
        { id: ids.rights, label: c.s1H },
        { id: ids.choices, label: c.s2H },
        { id: ids.uses, label: c.s3H },
        { id: ids.responsibilities, label: c.s4H },
        { id: ids.changes, label: c.s5H },
        { id: ids.texas, label: c.s6H },
        { id: ids.practices, label: c.s7H },
        { id: ids.contact, label: c.s8H },
      ]}
    >
      {/* Agency identity block */}
      <div className="mb-10 overflow-hidden rounded-xl border border-[#CBD5E1] bg-white">
        <div className="bg-[#0B4A8F] px-6 py-4 text-white">
          <p className="text-base font-bold leading-snug sm:text-lg">
            {a.legalName}
          </p>
        </div>
        <div className="grid gap-6 p-6 text-sm leading-relaxed text-[#1E293B] ">
          <div className="space-y-1">
            <p>{a.address}</p>
            <p>{a.phone}</p>
          </div>
          <div className="space-y-1">
            <p className="font-semibold">{a.officer}</p>
            <p>{a.officerPhone}</p>
            <p>{a.email}</p>
          </div>
          <div className="flex flex-col items-start gap-3 sm:col-span-2 lg:col-span-1 lg:items-end">
            <p className="text-xs font-medium text-[#64748B]">
              {a.effectiveDate}
            </p>
            <button
              onClick={() => window.print()}
              className="inline-flex items-center justify-center rounded-lg bg-[#0B4A8F] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#07162C] print:hidden"
            >
              {c.printButton}
            </button>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="mb-8 rounded-xl border-l-4 border-[#0B4A8F] bg-[#F0F4F8] px-6 py-5">
        <h2 className="mb-2 text-xl font-bold text-[#0B4A8F]">
          {c.introSubtitle}
        </h2>
        <p className="leading-relaxed text-[#1E293B]">{c.introText}</p>
      </div>

      {/* Summary cards */}
      <div className="mb-8 grid gap-5">
        <SummaryCard
          title={c.rightsSummaryH}
          intro={c.rightsSummaryIntro}
          items={c.rightsSummaryItems}
        />
        <SummaryCard
          title={c.choicesSummaryH}
          intro={c.choicesSummaryIntro}
          items={c.choicesSummaryItems}
        />
        <SummaryCard
          title={c.usesSummaryH}
          intro={c.usesSummaryIntro}
          items={c.usesSummaryItems}
        />
      </div>

      {/* Full uses and disclosures summary */}
      <div className="mb-12 rounded-xl border-2 border-[#0B4A8F] bg-[#F0F4F8] p-6 print:break-inside-avoid">
        <h4 className="mb-4 text-base font-semibold text-[#0B4A8F]">
          {c.usesBoxH}
        </h4>
        <div className="md:columns-2 md:gap-10 [&_li]:break-inside-avoid">
          <Bullets items={[...c.usesSummaryBox]} />
        </div>
      </div>

      {/* 1. Your Rights */}
      <Section id={ids.rights} title={c.s1H}>
        <p className="mb-6 leading-relaxed">{c.s1Intro}</p>

        <div className="grid items-start gap-5 md:grid-cols-2">
          <Card className="md:col-span-2">
            <CardTitle>{c.recH}</CardTitle>
            <Bullets items={[...c.recItems]} />
          </Card>

          <Card>
            <CardTitle>{c.corrH}</CardTitle>
            <Bullets items={[...c.corrItems]} />
          </Card>

          <Card>
            <CardTitle>{c.confH}</CardTitle>
            <Bullets items={[...c.confItems]} />
          </Card>

          <Card className="md:col-span-2">
            <CardTitle>{c.limH}</CardTitle>
            <Bullets items={[...c.limItems]} />
          </Card>

          <Card className="md:col-span-2">
            <CardTitle>{c.listH}</CardTitle>
            <Bullets items={[...c.listItems]} />
          </Card>

          <Card>
            <CardTitle>{c.copyH}</CardTitle>
            <p className="leading-relaxed">{c.copyText}</p>
          </Card>

          <Card>
            <CardTitle>{c.repH}</CardTitle>
            <Bullets items={[...c.repItems]} />
          </Card>

          <Card className="md:col-span-2">
            <CardTitle>{c.compH}</CardTitle>
            <Bullets items={[...c.compItems]} />
          </Card>
        </div>
      </Section>

      {/* 2. Your Choices */}
      <Section id={ids.choices} title={c.s2H}>
        <p className="mb-6 leading-relaxed">{c.s2Intro}</p>

        <div className="grid items-start gap-5 md:grid-cols-2">
          <Card>
            <CardTitle>{c.s2Sub1}</CardTitle>
            <Bullets items={[...c.s2Sub1Items]} />
            <p className="mt-4 text-sm leading-relaxed text-[#475569]">
              {c.s2Sub1Note}
            </p>
          </Card>

          <Card>
            <CardTitle>{c.s2Sub2}</CardTitle>
            <Bullets items={[...c.s2Sub2Items]} />
          </Card>

          <Card className="md:col-span-2">
            <CardTitle>{c.s2Sub3}</CardTitle>
            <Bullets items={[...c.s2Sub3Items]} />
          </Card>
        </div>
      </Section>

      {/* 3. Our Uses and Disclosures */}
      <Section id={ids.uses} title={c.s3H}>
        <p className="mb-6 whitespace-pre-line leading-relaxed">{c.s3Intro}</p>

        <div className="grid items-start gap-5 lg:grid-cols-3">
          <Card>
            <CardTitle>{c.treatH}</CardTitle>
            <p className="leading-relaxed">{c.treatText}</p>
            <Example>{c.treatEx}</Example>
          </Card>

          <Card>
            <CardTitle>{c.runH}</CardTitle>
            <p className="leading-relaxed">{c.runText}</p>
            <Example>{c.runEx}</Example>
          </Card>

          <Card>
            <CardTitle>{c.billH}</CardTitle>
            <p className="leading-relaxed">{c.billText}</p>
            <Example>{c.billEx}</Example>
          </Card>
        </div>

        <h3 className="mb-4 mt-10 border-b border-[#E2E8F0] pb-2 text-xl font-bold text-[#0B4A8F]">
          {c.otherUsesH}
        </h3>
        <p className="mb-6 whitespace-pre-line leading-relaxed">
          {c.otherUsesIntro}
        </p>

        <div className="grid items-start gap-5 md:grid-cols-2">
          <Card>
            <CardTitle>{c.pubHealthH}</CardTitle>
            <p className="mb-2 leading-relaxed">{c.pubHealthIntro}</p>
            <Bullets items={[...c.pubHealthItems]} />
          </Card>

          <Card>
            <CardTitle>{c.researchH}</CardTitle>
            <p className="leading-relaxed">{c.researchText}</p>
          </Card>

          <Card className="md:col-span-2">
            <CardTitle>{c.complyH}</CardTitle>
            <Bullets items={[...c.complyItems]} />
          </Card>

          <Card>
            <CardTitle>{c.organH}</CardTitle>
            <p className="leading-relaxed">{c.organText}</p>
          </Card>

          <Card>
            <CardTitle>{c.funeralH}</CardTitle>
            <p className="leading-relaxed">{c.funeralText}</p>
          </Card>

          <Card>
            <CardTitle>{c.govReqH}</CardTitle>
            <p className="mb-2 leading-relaxed">{c.govReqIntro}</p>
            <Bullets items={[...c.govReqItems]} />
          </Card>

          <Card>
            <CardTitle>{c.lawsuitH}</CardTitle>
            <p className="leading-relaxed">{c.lawsuitText}</p>
          </Card>
        </div>
      </Section>

      {/* 4. Our Responsibilities */}
      <Section id={ids.responsibilities} title={c.s4H}>
        <Card>
          <Bullets items={[...c.s4Items]} />
          <p className="mt-4 border-t border-[#E2E8F0] pt-4 text-sm text-[#475569]">
            {c.s4Link}
          </p>
        </Card>
      </Section>

      {/* 5. Changes */}
      <Section id={ids.changes} title={c.s5H}>
        <Card>
          <p className="leading-relaxed">{c.s5Text}</p>
        </Card>
      </Section>

      {/* 6. Texas Law */}
      <Section id={ids.texas} title={c.s6H}>
        <p className="mb-6 leading-relaxed">{c.s6Intro}</p>
        <Card>
          <Bullets items={[...c.s6Items]} />
        </Card>
      </Section>

      {/* 7. Our Practices */}
      <Section id={ids.practices} title={c.s7H}>
        <div className="grid gap-4 sm:grid-cols-3">
          {c.s7Items.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-5 print:break-inside-avoid"
            >
              <CheckIcon />
              <p className="text-sm font-medium leading-relaxed text-[#1E293B]">
                {item}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* 8. Contact */}
      <Section id={ids.contact} title={c.s8H}>
        <p className="mb-6 leading-relaxed">{c.s8Text}</p>

        <div className="grid items-start gap-5 md:grid-cols-2">
          <Card>
            <address className="space-y-1.5 text-sm not-italic leading-relaxed">
              {c.s8Address.map((line, idx) => (
                <p key={idx} className={idx === 0 ? "font-semibold" : ""}>
                  {line}
                </p>
              ))}
            </address>
          </Card>

          <Card>
            <p className="text-sm leading-relaxed">{c.s8Complaint}</p>
          </Card>
        </div>
      </Section>

      {/* 9. Effective Date */}
      <Section id={ids.effective} title={c.s9H}>
        <p className="font-medium">{c.s9Text}</p>
      </Section>
    </LegalDocument>
  );
}
