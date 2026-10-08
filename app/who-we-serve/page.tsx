import WhoWeServePage from "@/src/components/home_components/WhoWeServePage";
import { buildMetadata } from "@/app/seo";

export const metadata = buildMetadata({
  title: "Who We Serve",
  description:
    "Home health care for seniors, adults with disabilities, children, veterans, and patients recovering from surgery, illness, or injury.",
  path: "/who-we-serve",
});

const page = () => {
  return (
    <div>
      <WhoWeServePage />
    </div>
  );
};

export default page;
