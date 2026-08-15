import { Helmet } from "react-helmet-async";
import ReferralsPage from "@/components/referrals/Referrals";

const Referral = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Refer a Patient | One Community Home Health Care",
    description:
      "Submit a patient referral for physician-directed home health care services with One Community Home Health Care (JACOP Healthcare Services).",
    publisher: {
      "@type": "MedicalOrganization",
      name: "One Community Home Health Care",
      alternateName: "JACOP Healthcare Services, Inc.",
    },
  };

  return (
    <>
      <Helmet>
        <title>Refer a Patient | One Community Home Health Care</title>
        <meta
          name="description"
          content="Submit a patient referral for physician-directed home health care services with One Community Home Health Care (JACOP Healthcare Services)."
        />
        <meta
          name="keywords"
          content="patient referral, refer a patient, home health care referral, JACOP Healthcare, One Community"
        />
        <meta
          property="og:title"
          content="Refer a Patient | One Community Home Health Care"
        />
        <meta
          property="og:description"
          content="Submit a quick and secure patient referral for our in-home healthcare and clinical care services."
        />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <div>
        <ReferralsPage />
      </div>
    </>
  );
};

export default Referral;
