import PersonalAttendantServicesPage from "@/src/components/services/personal-attendant-services/page";
import { pageMetadata } from "@/app/seo";

export const generateMetadata = pageMetadata("personalAttendant");

const page = () => {
  return (
    <div>
      <PersonalAttendantServicesPage />
    </div>
  );
};

export default page;
