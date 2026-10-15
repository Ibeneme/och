import { NextResponse, type NextRequest } from "next/server";

/**
 * Locale routing.
 *   /es, /es/...  -> served as-is (Spanish)
 *   /en, /en/...  -> 308 to the un-prefixed URL (one canonical English URL)
 *   everything else -> rewritten internally to /en/... (English, URL unchanged)
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/es" || pathname.startsWith("/es/")) {
    return NextResponse.next();
  }

  if (pathname === "/en" || pathname.startsWith("/en/")) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(3) || "/";
    return NextResponse.redirect(url, 308);
  }

  const url = request.nextUrl.clone();
  url.pathname = `/en${pathname === "/" ? "" : pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  // Skip Next internals, API routes, SEO files and anything with a file extension.
  matcher: [
    "/((?!api|_next|_vercel|robots\\.txt|sitemap\\.xml|.*\\..*).*)",
  ],
};
