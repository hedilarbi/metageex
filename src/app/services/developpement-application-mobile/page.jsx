// app/services/developpement-application-mobile/page.jsx

import React from "react";
import MobileHeroSection from "../../../components/mobileServicePage/MobileHeroSection";
import MobileAppServicesSection from "../../../components/mobileServicePage/MobileAppServicesSection";

import Techs from "../../../components/servicePage/techs/Techs";
import Portfolio from "../../../components/mobileServicePage/portfolio/Portfolio";
import Technologies from "../../../components/mobileServicePage/technologies/Technologies";

/* -------------------- SEO / MÉTADONNÉES -------------------- */
export const metadata = {
  title:
    "Développement d’applications mobiles — iOS & Android (React Native/Expo) | Metageex",
  description:
    "Conception et développement d’applications mobiles performantes pour iOS et Android : React Native/Expo, intégrations API, paiements, notifications, déploiement App Store & Play Store.",
  keywords: [
    "développement application mobile",
    "agence mobile",
    "React Native",
    "Expo",
    "iOS",
    "Android",
    "App Store",
    "Play Store",
    "notifications push",
    "paiement en ligne",
  ],
  alternates: {
    canonical: "/services/developpement-application-mobile",
  },
  openGraph: {
    type: "article",
    url: "/services/developpement-application-mobile",
    title:
      "Développement d’applications mobiles — iOS & Android (React Native/Expo) | Metageex",
    description:
      "Apps mobiles natives/hybrides, UX/UI soignée, performances et sécurité. Intégrations Stripe/PayPal, Firebase/Supabase, déploiement et maintenance.",
    siteName: "Metageex",
    images: [{ url: "/opengraph-image.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Développement d’applications mobiles — iOS & Android (React Native/Expo) | Metageex",
    description:
      "Développement mobile complet : conception, développement, QA, publication et suivi.",
    images: ["/opengraph-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

/* -------------------- JSON-LD (Service + Breadcrumb + FAQ) -------------------- */
function JsonLd() {
  const base = "https://metageex.com";

  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Développement d’applications mobiles",
    provider: {
      "@type": "Organization",
      name: "Metageex",
      url: base,
      logo: `${base}/icons/icon-512.png`,
    },
    areaServed: ["FR", "TN", "CA", "EU"],
    offers: {
      "@type": "Offer",
      url: `${base}/services/developpement-application-mobile`,
      priceCurrency: "EUR",
      priceSpecification: {
        "@type": "PriceSpecification",
        minPrice: "3000",
        maxPrice: "50000",
      },
    },
    description:
      "Développement d’applications mobiles performantes (iOS & Android) avec React Native/Expo, intégrations API, paiements, notifications push et déploiement stores.",
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
        name: "Développement d’applications mobiles",
        item: `${base}/services/developpement-application-mobile`,
      },
    ],
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Combien de temps faut-il pour développer une app mobile ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "En moyenne 4 à 12 semaines pour un MVP, selon la complexité (authentification, paiement, temps réel, etc.). Nous travaillons en sprints avec démos régulières.",
        },
      },
      {
        "@type": "Question",
        name: "Pouvez-vous publier sur l’App Store et le Play Store ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui. Nous gérons les builds, les assets, les fiches stores, la conformité (screenshots, privacy) et l’envoi à la review.",
        },
      },
      {
        "@type": "Question",
        name: "Quelles technologies privilégiez-vous ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "React Native/Expo pour un codebase partagé iOS/Android. Backend Node.js avec Firebase/Supabase/MongoDB selon le besoin, et intégrations Stripe, notifications push, analytics.",
        },
      },
      {
        "@type": "Question",
        name: "Proposez-vous du support et de la maintenance ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui. Monitoring, mises à jour, corrections, évolutions fonctionnelles et optimisation des performances.",
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

      <MobileHeroSection />
      <MobileAppServicesSection />
      <Technologies />
      <Techs />
      <Portfolio />
    </main>
  );
}
