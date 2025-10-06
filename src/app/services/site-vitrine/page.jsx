// app/services/site-vitrine/page.jsx

import React from "react";
import VitrineHeroSection from "../../../components/vitrineServicePage/VitrineHeroSection";
import VitrineServicesSection from "../../../components/vitrineServicePage/VitrineServicesSection";
import Technologies from "../../../components/vitrineServicePage/technologies/Technologies";
import Techs from "../../../components/servicePage/techs/Techs";
import Portfolio from "../../../components/vitrineServicePage/portfolio/Portfolio";

/* -------------------- SEO / MÉTADONNÉES -------------------- */
export const metadata = {
  title:
    "Création de sites vitrines — WordPress/Next.js, SEO & Responsive | Metageex",
  description:
    "Sites vitrines professionnels : design soigné, SEO on-page, rapidité, formulaires, sécurité et hébergement. Réalisation en WordPress ou Next.js selon votre besoin.",
  keywords: [
    "site vitrine",
    "création site vitrine",
    "agence site vitrine",
    "WordPress",
    "Next.js",
    "SEO",
    "responsive",
    "Tunisie",
    "France",
    "international",
  ],
  alternates: { canonical: "/services/site-vitrine" },
  openGraph: {
    type: "article",
    url: "/services/site-vitrine",
    title:
      "Création de sites vitrines — WordPress/Next.js, SEO & Responsive | Metageex",
    description:
      "Design moderne, SEO on-page, performance et sécurité. Formulaires, analytics et hébergement gérés.",
    siteName: "Metageex",
    images: [{ url: "/opengraph-image.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Création de sites vitrines — WordPress/Next.js, SEO & Responsive | Metageex",
    description:
      "Votre vitrine en ligne, rapide et optimisée pour convertir vos visiteurs en prospects.",
    images: ["/opengraph-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

/* -------- JSON-LD (Service + Breadcrumb + FAQ enrichie) -------- */
function JsonLd() {
  const base = "https://metageex.com";

  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Création de site vitrine",
    provider: {
      "@type": "Organization",
      name: "Metageex",
      url: base,
      logo: `${base}/icons/icon-512.png`,
    },
    areaServed: ["FR", "TN", "CA", "EU"],
    offers: {
      "@type": "Offer",
      url: `${base}/services/site-vitrine`,
      priceCurrency: "EUR",
      priceSpecification: {
        "@type": "PriceSpecification",
        minPrice: "900",
        maxPrice: "6000",
      },
    },
    description:
      "Réalisation de sites vitrines professionnels (WordPress/Next.js) avec SEO on-page, performance, sécurité et hébergement.",
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: `${base}/` },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `${base}/services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Site vitrine",
        item: `${base}/services/site-vitrine`,
      },
    ],
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "En combien de temps livrez-vous un site vitrine ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "2 à 4 semaines en moyenne selon le contenu (pages, visuels, blog) et les fonctionnalités (formulaires, multilingue).",
        },
      },
      {
        "@type": "Question",
        name: "Le site sera-t-il optimisé pour Google ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui : structure sémantique, titres/meta, sitemap/robots, performances (Core Web Vitals) et maillage interne.",
        },
      },
      {
        "@type": "Question",
        name: "Proposez-vous l’hébergement et la maintenance ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui : déploiement, SSL, sauvegardes, mises à jour, correctifs sécurité, anti-spam, monitoring basique.",
        },
      },
      {
        "@type": "Question",
        name: "WordPress ou Next.js : que choisir ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "WordPress pour une édition de contenu très simple. Next.js pour des performances maximales, du sur-mesure et une base technique moderne.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />
    </>
  );
}

export default function Page() {
  return (
    <main className="w-full h-full relative overflow-hidden pb-20">
      <JsonLd />
      <VitrineHeroSection />
      <VitrineServicesSection />
      <Technologies />
      <Techs />
      <Portfolio />
    </main>
  );
}
