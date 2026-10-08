import type { MetadataRoute } from "next";
import { SITE_URL } from "./seo";

const routes: { path: string; priority: number }[] = [
  { path: "/", priority: 1 },
  { path: "/about-us", priority: 0.7 },
  { path: "/about-us/leadership", priority: 0.6 },
  { path: "/who-we-serve", priority: 0.8 },
  { path: "/insurance-payment-options", priority: 0.8 },
  { path: "/referrals", priority: 0.8 },
  { path: "/contact", priority: 0.9 },
  { path: "/careers", priority: 0.6 },
  { path: "/careers/cna-home-health-aide-application", priority: 0.6 },
  { path: "/employee-resources", priority: 0.4 },
  { path: "/resources", priority: 0.6 },
  { path: "/services/skilled-nursing", priority: 0.9 },
  { path: "/services/physical-therapy", priority: 0.9 },
  { path: "/services/occupational-therapy", priority: 0.9 },
  { path: "/services/speech-therapy", priority: 0.9 },
  { path: "/services/home-health-aide", priority: 0.9 },
  { path: "/services/medical-social-services", priority: 0.8 },
  { path: "/services/wound-care", priority: 0.8 },
  { path: "/services/post-surgical-care", priority: 0.8 },
  { path: "/services/chronic-disease-management", priority: 0.8 },
  { path: "/services/medication-management", priority: 0.8 },
  { path: "/services/fall-prevention", priority: 0.8 },
  { path: "/services/pediatric-services", priority: 0.8 },
  { path: "/services/adults-with-disabilities", priority: 0.8 },
  { path: "/services/veteran-care", priority: 0.8 },
  { path: "/services/companion-care", priority: 0.7 },
  { path: "/services/respite-care", priority: 0.7 },
  { path: "/services/daily-lifestyle-support", priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority,
  }));
}
