import RequestCarePage from "@/src/components/request-care/page";
import { pageMetadata } from "@/app/seo";

export const generateMetadata = pageMetadata("requestCare");

const page = () => {
    return (
      <div>
        <RequestCarePage />
      </div>
    );
  };
  
  export default page;
