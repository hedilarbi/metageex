// src/app/layout.js
import { Inter, Sarabun } from "next/font/google";
import "./globals.css";
import NavHeader from "../components/NavHeader";
import Footer from "../components/Footer";
import SeoJsonLd from "../components/SeoJsonLd";

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

const base = new URL("https://metageex.com");

export const metadata = {
  metadataBase: base,
  title: {
    default:
      "Metageex — Agence de développement web, mobile & SaaS | International",
    template: "%s | Metageex",
  },
  description:
    "Agence internationale de développement informatique : applications web & mobiles, SaaS, sites vitrines et e-commerce. Nous accompagnons startups et PME.",
  keywords: [
    "agence de développement informatique",
    "développement web",
    "développement mobile",
    "site vitrine",
    "SaaS",
    "agence web",
    "Tunisie",
    "France",
    "international",
  ],
  alternates: {
    canonical: "/",
    languages: {
      // si tu ajoutes l'anglais plus tard :
      fr: "/",
      en: "/en",
    },
  },
  openGraph: {
    type: "website",
    url: "/",
    title:
      "Metageex — Agence de développement web, mobile & SaaS | International",
    description:
      "Custom web & mobile apps, SaaS, corporate websites. International agency.",
    siteName: "Metageex",
    images: [{ url: "/opengraph-image.png" }], // ou l'OG générée
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Metageex — Agence de développement web, mobile & SaaS | International",
    description:
      "Agence internationale : web, mobile, SaaS, sites vitrines & e-commerce.",
    images: ["/opengraph-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  verification: { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
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
