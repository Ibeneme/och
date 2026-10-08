import CareersPage from "@/src/components/careers/page";
import { buildMetadata } from "@/app/seo";

export const metadata = buildMetadata({
  title: "Careers",
  description:
    "Join the One Community Home Health team. Explore nursing, therapy, and caregiver opportunities and help care for patients at home.",
  path: "/careers",
});

const page = () => {
  return (
    <div>
      <CareersPage />
    </div>
  );
};

export default page;
