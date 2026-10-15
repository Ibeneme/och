import { buildMetadata } from "@/app/seo";
import TermsOfServiceContent from "@/src/components/legal/Terms";

interface PageProps {
  params?: Promise<{ lang?: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  const isSpanish = resolvedParams?.lang === "es";

  return {
    ...buildMetadata({
      title: isSpanish ? "Términos de Servicio" : "Terms of Service",
      description: isSpanish
        ? "Términos que rigen el uso del sitio web de One Community Home Health, incluidos nuestros Términos y Condiciones de SMS."
        : "Terms governing the use of the One Community Home Health website, including our SMS Terms and Conditions.",
      path: isSpanish ? "/es/terms-of-service" : "/terms-of-service",
    }),
    robots: { index: true, follow: true },
  };
}

export default function TermsOfServicePage() {
  return (
    <>
      <TermsOfServiceContent />
    </>
  );
}
