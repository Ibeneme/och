import ResourcesPage from "../../src/components/resources/ResourcesPage";
import { buildMetadata } from "@/app/seo";

export const metadata = buildMetadata({
  title: "Patient & Family Resources",
  description:
    "Helpful information and resources for patients and families receiving home health care from One Community Home Health.",
  path: "/resources",
});

const page = () => {
  return (
    <div>
      <ResourcesPage />
    </div>
  );
};

export default page;
