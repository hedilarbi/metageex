// src/app/layout.js
import { cookies } from "next/headers";
import { Inter, Sarabun } from "next/font/google";
import "./globals.css";
import { defaultLocale, locales } from "@/lib/i18n";
import {
  getLanguageAlternates,
  getLocalizedRoute,
  siteUrl,
} from "@/lib/localePath";
import NavHeader from "@/components/NavHeader";
import Footer from "@/components/Footer";
import SeoJsonLd from "@/components/SeoJsonLd";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const sarabun = Sarabun({
  subsets: ["latin"],
  variable: "--font-sarabun",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const defaultDescription =
  "Auxis Digital is a global agency crafting custom websites, SaaS products and mobile applications for ambitious teams.";
const homeAlternates = getLanguageAlternates("home");

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Auxis Digital — Web, SaaS & mobile development agency",
    template: "%s | Auxis Digital",
  },
  description: defaultDescription,
  alternates: {
    canonical: getLocalizedRoute("en", "home"),
    languages: homeAlternates,
  },
  openGraph: {
    title: "Auxis Digital — Web, SaaS & mobile development agency",
    description: defaultDescription,
    url: siteUrl,
    siteName: "Auxis Digital",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Auxis Digital — Web, SaaS & mobile development agency",
    description: defaultDescription,
    images: ["/opengraph-image.png"],
  },
  icons: {
    icon: "/icon.ico",
    shortcut: "/icon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  const cookieLocale = cookies().get("NEXT_LOCALE")?.value;
  const lang = cookieLocale && locales.includes(cookieLocale)
    ? cookieLocale
    : defaultLocale;

  return (
    <html lang={lang}>
      <body className={`${inter.variable} ${sarabun.variable} main`}>
        <SeoJsonLd />
        <div className="bgImage" />
        <NavHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
