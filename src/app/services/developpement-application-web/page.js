// app/services/developpement-application-web/page.jsx
import React from "react";
import HeroSection from "../../../components/servicePage/HeroSection";
import WebAppServicesSection from "../../../components/servicePage/WebAppServicesSection";
import Technologies from "../../../components/servicePage/technologies/Technologies";
import Techs from "../../../components/servicePage/techs/Techs";
import Portfolio from "../../../components/servicePage/portfolio/Portfolio";

// ---------- MÉTADONNÉES SEO ----------
export const metadata = {
  title: "Développement d’applications web — Next.js, React, Node | Metageex",
  description:
    "Agence internationale spécialisée en développement d’applications web modernes et performantes : Next.js, React, Node, APIs, e-commerce et backoffice sur mesure.",
  keywords: [
    "développement application web",
    "agence développement web",
    "Next.js",
    "React",
    "Node.js",
    "site vitrine",
    "SaaS",
    "e-commerce",
    "Tunisie",
    "France",
    "international",
  ],
  alternates: {
    canonical: "/services/developpement-application-web",
    // active l’anglais quand tu auras /en :
    // languages: { fr: "/services/developpement-application-web", en: "/en/services/web-app-development" },
  },
  openGraph: {
    type: "article",
    url: "/services/developpement-application-web",
    title: "Développement d’applications web — Next.js, React, Node | Metageex",
    description:
      "Concevez des apps web scalables et sécurisées : front Next/React, back Node/Python/PHP, bases de données, APIs, déploiements cloud.",
    siteName: "Metageex",
    images: [{ url: "/opengraph-image.png" }], // garde ton image OG ou celle générée
  },
  twitter: {
    card: "summary_large_image",
    title: "Développement d’applications web — Next.js, React, Node | Metageex",
    description:
      "Agence internationale : apps web, e-commerce, backoffice, APIs et cloud.",
    images: ["/opengraph-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

// ---------- JSON-LD (Service + Breadcrumb + FAQ) ----------
function JsonLd() {
  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Développement d’applications web",
    provider: {
      "@type": "Organization",
      name: "Metageex",
      url: "https://metageex.com",
      logo: "https://metageex.com/icons/icon-512.png",
    },
    areaServed: ["FR", "TN", "CA", "EU"],
    offers: {
      "@type": "Offer",
      url: "https://metageex.com/services/developpement-application-web",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "EUR",
        // Laisse la fourchette indicative (tu peux supprimer si tu préfères ne pas afficher de prix)
        minPrice: "2000",
        maxPrice: "30000",
      },
    },
    description:
      "Conception et développement d’applications web modernes (Next.js/React), intégration d’APIs, e-commerce, backoffice et déploiements cloud.",
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: "https://metageex.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://metageex.com/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Développement d’applications web",
        item: "https://metageex.com/services/developpement-application-web",
      },
    ],
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Combien de temps faut-il pour développer une application web ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Selon la complexité, entre 3 et 12 semaines pour un MVP. Nous travaillons en sprints agiles avec des démos régulières.",
        },
      },
      {
        "@type": "Question",
        name: "Quelles technologies utilisez-vous ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Principalement Next.js/React pour le front, Node.js (ou Python/PHP) pour le back, MongoDB/Firebase/Supabase pour la base de données, et un déploiement cloud (AWS, Docker).",
        },
      },
      {
        "@type": "Question",
        name: "Pouvez-vous intégrer un paiement en ligne ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui. Nous intégrons Stripe, PayPal ou des passerelles locales selon le pays, avec des bonnes pratiques de sécurité.",
        },
      },
      {
        "@type": "Question",
        name: "Proposez-vous un suivi après mise en production ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui. Nous proposons support, monitoring, plans d’évolution, et optimisation des performances/Core Web Vitals.",
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

// ---------- PAGE ----------
export default function Page() {
  return (
    <main className="w-full h-full relative overflow-hidden pb-20">
      {/* JSON-LD spécifique à cette page */}
      <JsonLd />

      <HeroSection
        title="Développement d'Applications Web"
        description="Transformez vos idées en applications web modernes, scalables et sécurisées."
      />
      <WebAppServicesSection />
      <Technologies />
      <Techs />
      <Portfolio />
    </main>
  );
}
