import AidAndAttendancePage from "@/src/components/services/VeteranCareComp/aid-and-attendance/page";
import { pageMetadata } from "@/app/seo";

export const generateMetadata = pageMetadata("aidAndAttendance");

const page = () => {
  return (
    <div>
      <AidAndAttendancePage />
    </div>
  );
};

export default page;
