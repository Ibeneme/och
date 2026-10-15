import { buildMetadata } from "@/app/seo";
import PrivacyPolicyContent from "@/src/components/legal/Privacy";

interface PageProps {
  params?: Promise<{ lang?: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  const isSpanish = resolvedParams?.lang === "es";

  return {
    ...buildMetadata({
      title: isSpanish ? "Política de Privacidad" : "Privacy Policy",
      description: isSpanish
        ? "Política de privacidad de One Community Home Health que explica la recopilación y protección de datos."
        : "Privacy Policy for One Community Home Health explaining information collection and data protection practices.",
      path: isSpanish ? "/es/privacy-policy" : "/privacy-policy",
    }),
    robots: { index: true, follow: true },
  };
}

export default function PrivacyPolicyPage() {
  return (
    <div>
      <PrivacyPolicyContent />
    </div>
  );
}