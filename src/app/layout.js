// src/app/layout.js
import { Inter, Sarabun } from "next/font/google";
import "./globals.css";
import NavHeader from "@/components/NavHeader";
import Footer from "@/components/Footer";
import Script from "next/script";

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

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://metageex.com";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: "Metageex",
  title: {
    default: "Metageex — Web, SaaS & Mobile development",
    template: "%s | Metageex",
  },
  description:
    "We build high-performance websites, web apps, SaaS and mobile apps for global clients. From idea to scalable product.",
  keywords: [
    // FR
    "agence web",
    "développement web",
    "applications mobiles",
    "SaaS",
    "site vitrine",
    "e-commerce",
    "Next.js",
    "React",
    // EN (international)
    "web development",
    "mobile app development",
    "SaaS development",
    "custom software",
    "Next.js agency",
    "React",
  ],
  alternates: {
    canonical: "/",
    languages: {
      // Active maintenant (FR par défaut)
      fr: "/",
      // Décommente quand tu crées l’anglais sous /en :
      // "en": "/en",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Metageex",
    locale: "fr_FR",
    alternateLocale: ["en_US"],
    title: "Metageex — Web, SaaS & Mobile development",
    description: "Websites, web apps, SaaS and mobile apps for global clients.",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Metageex — digital solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Metageex — Web, SaaS & Mobile development",
    description: "Websites, web apps, SaaS and mobile apps for global clients.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxSnippet: -1,
      maxImagePreview: "large",
      maxVideoPreview: -1,
    },
  },
  icons: { icon: "/favicon.ico" },
  viewport: { width: "device-width", initialScale: 1, viewportFit: "cover" },
  verification: { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION },
};

export default function RootLayout({ children }) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Metageex",
    url: SITE_URL,
    logo: `${SITE_URL}/icon-512x512.png`,
    sameAs: [
      // Ajoute tes profils si dispo
      // "https://www.linkedin.com/company/xxx",
      // "https://twitter.com/xxx"
    ],
    areaServed: "Worldwide",
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: "contact@metageex.com",
        availableLanguage: ["en", "fr"],
        areaServed: "Worldwide",
      },
    ],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Metageex",
    url: SITE_URL,
    inLanguage: ["fr", "en"],
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/recherche?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="fr">
      <body className={`${inter.variable} ${sarabun.variable} main`}>
        <div className="bgImage" />
        <NavHeader />
        {children}
        <Footer />
        <Script
          id="ld-org"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify(orgJsonLd)}
        </Script>
        <Script
          id="ld-website"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify(websiteJsonLd)}
        </Script>
      </body>
    </html>
  );
}
