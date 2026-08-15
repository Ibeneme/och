import { Helmet } from "react-helmet-async";
import ContactPage from "@/components/Contact/ContactPage";

const Contact = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Us | One Community Home Health Care",
    description:
      "Get in touch with One Community Home Health Care for questions, consultations, and professional in-home healthcare services.",
    publisher: {
      "@type": "MedicalOrganization",
      name: "One Community Home Health Care",
      alternateName: "JACOP Healthcare Services, Inc.",
      telephone: "+1-972-325-1598",
    },
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | One Community Home Health Care</title>
        <meta
          name="description"
          content="Get in touch with One Community Home Health Care for questions, care consultations, and professional in-home healthcare services."
        />
        <meta
          name="keywords"
          content="contact us, home health care contact, care consultation, phone number, JACOP Healthcare, One Community"
        />
        <meta
          property="og:title"
          content="Contact Us | One Community Home Health Care"
        />
        <meta
          property="og:description"
          content="Reach out to our team for care inquiries, schedule an assessment, or contact our office directly."
        />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <div>
        <ContactPage />
      </div>
    </>
  );
};

export default Contact;
