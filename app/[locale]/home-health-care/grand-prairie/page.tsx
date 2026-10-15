import CityRoute from "@/src/components/service-area/CityRoute";
import { pageMetadata } from "@/app/seo";

export const generateMetadata = pageMetadata("cityGrandPrairie");

export default function Page({ params }: { params: Promise<{ locale: string }> }) {
  return <CityRoute slug="grand-prairie" params={params} />;
}
