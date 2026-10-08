import Image from "next/image";
import HomePage from "./home/page";
import { buildMetadata } from "@/app/seo";

export const metadata = buildMetadata({
  title: "Skilled Nursing & In-Home Care",
  description:
    "One Community Home Health delivers skilled nursing, physical therapy, and daily assistance at home, so patients can recover and live well in familiar surroundings.",
  path: "/",
  absolute: true,
});

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <HomePage />
    </div>
  );
}
