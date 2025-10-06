// app/portfolio/page.jsx

import React from "react";
import PortfolioHero from "../../components/portfolio/PortfolioHero";
import PortfolioGrid from "../../components/portfolio/PortfolioGrid";

/* --------- SEO / MÉTADONNÉES --------- */
export const metadata = {
  title: "Portfolio — Projets web, mobile, vitrine & e-commerce | Metageex",
  description:
    "Découvrez nos réalisations : applications web (Next.js/React), mobiles (React Native/Expo), sites vitrines, e-commerce, backoffices et intégrations cloud.",
  alternates: { canonical: "/portfolio" },
  openGraph: {
    type: "website",
    url: "/portfolio",
    title: "Portfolio — Projets web, mobile, vitrine & e-commerce | Metageex",
    description:
      "Sélection de projets réalisés par Metageex : web, mobile, vitrine, e-commerce et backoffice.",
    images: [{ url: "/opengraph-image.png" }],
    siteName: "Metageex",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio — Projets web, mobile, vitrine & e-commerce | Metageex",
    description:
      "Découvrez nos applications, sites vitrines et solutions e-commerce livrés.",
    images: ["/opengraph-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

/* --------- JSON-LD --------- */
function JsonLd() {
  const base = "https://metageex.com";
  const collection = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Portfolio Metageex",
    url: `${base}/portfolio`,
    about: [
      "Applications web",
      "Applications mobiles",
      "Sites vitrines",
      "E-commerce",
      "Backoffice",
    ],
    publisher: {
      "@type": "Organization",
      name: "Metageex",
      url: base,
      logo: `${base}/icons/icon-512.png`,
    },
  };

  // ItemList minimal (tu peux l’enrichir si tu veux)
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListOrder: "http://schema.org/ItemListOrderAscending",
    name: "Réalisations Metageex",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collection) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }}
      />
    </>
  );
}

export default function Page() {
  return (
    <main className="w-full h-full relative overflow-hidden pb-20">
      <JsonLd />
      <PortfolioHero />
      <PortfolioGrid />
    </main>
  );
}
