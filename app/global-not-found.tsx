import "./globals.css";
import type { Metadata } from "next";

/**
 * 404 for URLs that match no route (e.g. /nope and /es/nope).
 * Bypasses the [locale] layout, so the language is unknown here: show both.
 * Next.js adds <meta name="robots" content="noindex"> and a 404 status.
 */
export const metadata: Metadata = {
  title: "Page not found | Página no encontrada",
};

const btn =
  "inline-flex items-center justify-center rounded-full px-7 py-3.5 text-base font-bold transition-colors";

export default function GlobalNotFound() {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col items-center justify-center bg-[#F4F4F2] px-6 py-16 text-center text-[#07162C]">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#996515]">
          Error 404
        </p>

        <section lang="en" className="mt-6 max-w-xl">
          <h1 className="text-3xl font-bold sm:text-4xl">
            We couldn&apos;t find the page you&apos;re looking for.
          </h1>
          <p className="mt-3 text-[#07162C]/70">
            The page may have moved or the link may be incorrect.
          </p>
          <a href="/" className={`${btn} mt-6 bg-[#E4B95A] hover:bg-[#EDC878]`}>
            Back to home
          </a>
        </section>

        <hr className="my-10 w-24 border-[#07162C]/20" />

        <section lang="es" className="max-w-xl">
          <h2 className="text-2xl font-bold sm:text-3xl">
            No pudimos encontrar la página que busca.
          </h2>
          <p className="mt-3 text-[#07162C]/70">
            Es posible que la página se haya movido o que el enlace sea
            incorrecto.
          </p>
          <a
            href="/es"
            className={`${btn} mt-6 border-2 border-[#07162C] hover:bg-[#07162C] hover:text-white`}
          >
            Volver al inicio
          </a>
        </section>
      </body>
    </html>
  );
}
