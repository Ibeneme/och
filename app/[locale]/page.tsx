import HomePage from "@/src/components/home_components/HomePage";
import { pageMetadata } from "@/app/seo";

export const generateMetadata = pageMetadata("home");

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <HomePage />
    </div>
  );
}
