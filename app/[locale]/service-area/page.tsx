import ServiceAreaPage from "@/src/components/service-area/ServiceAreaPage";
import { pageMetadata } from "@/app/seo";

export const generateMetadata = pageMetadata("serviceArea");

export default function Page() {
  return <ServiceAreaPage />;
}
