import { NextResponse } from "next/server";
import { defaultLocale, locales } from "./src/lib/i18n";

const PUBLIC_FILE = /\.(.*)$/;
const LOCALE_PREFIX_EXCLUDE = [
  "/manifest.json",
  "/manifest.webmanifest",
  "/opengraph-image",
  "/robots.txt",
  "/sitemap.xml",
  "/favicon.ico",
];

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Ignore API and public assets
  if (
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    LOCALE_PREFIX_EXCLUDE.includes(pathname) ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  const segments = pathname.split("/");
  const localeInPath = segments[1];

  if (locales.includes(localeInPath)) {
    const response = NextResponse.next();
    response.cookies.set("NEXT_LOCALE", localeInPath, { path: "/" });
    return response;
  }

  const response = NextResponse.next();
  response.cookies.set("NEXT_LOCALE", defaultLocale, { path: "/" });
  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|icons|images).*)"],
};
