import HeroSection from "../../components/servicesPage/HeroSection";
import WebDevSection from "../../components/servicesPage/WebDevSection";
import MobileDevSection from "../../components/servicesPage/MobileDevSection";
import StaticSection from "../../components/servicesPage/StaticSection";
import React from "react";

/* -------------------- MÉTADONNÉES SEO -------------------- */
export const metadata = {
  title: "Services — Développement web, mobile & sites vitrines | Metageex",
  description:
    "Agence internationale de développement informatique : applications web, applications mobiles, sites vitrines et solutions SaaS sur mesure.",
  keywords: [
    "agence de développement",
    "développement web",
    "développement mobile",
    "site vitrine",
    "SaaS",
    "Next.js",
    "React",
    "Tunisie",
    "France",
    "international",
  ],
  alternates: {
    canonical: "/services",
    // active l’anglais le jour où tu as /en :
    // languages: { fr: "/services", en: "/en/services" },
  },
  openGraph: {
    type: "website",
    url: "/services",
    title: "Services — Développement web, mobile & sites vitrines | Metageex",
    description:
      "Applications web & mobiles, sites vitrines et solutions SaaS. Expertise Next.js/React, Node, AWS, e-commerce et backoffice.",
    siteName: "Metageex",
    images: [{ url: "/opengraph-image.png" }], // ou ton image OG personnalisée
  },
  twitter: {
    card: "summary_large_image",
    title: "Services — Développement web, mobile & sites vitrines | Metageex",
    description:
      "Agence internationale : web, mobile, SaaS, e-commerce, backoffice et cloud.",
    images: ["/opengraph-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

/* -------------------- JSON-LD -------------------- */
function JsonLd() {
  const base = "https://metageex.com";

  // Fil d’Ariane
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
    ],
  };

  // Page de type Collection (liste de services)
  const collectionPage = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Services — Développement web, mobile & sites vitrines",
    url: `${base}/services`,
    about: [
      "Développement d’applications web",
      "Développement d’applications mobiles",
      "Sites vitrines & e-commerce",
      "Solutions SaaS",
    ],
    publisher: {
      "@type": "Organization",
      name: "Metageex",
      url: base,
      logo: `${base}/icons/icon-512.png`,
    },
  };

  // Liste structurée des services (ItemList de Service)
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "Service",
          name: "Développement d’applications web",
          url: `${base}/services/developpement-application-web`,
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "Service",
          name: "Développement d’applications mobiles",
          // crée la page quand tu seras prêt
          url: `${base}/services/developpement-application-mobile`,
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "Service",
          name: "Sites vitrines & e-commerce",
          // crée la page quand tu seras prêt
          url: `${base}/services/site-vitrine`,
        },
      },
    ],
  };

  // Mini FAQ (optionnelle mais utile pour la SERP)
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Quels types de services proposez-vous ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Applications web (Next.js/React), applications mobiles (iOS/Android), sites vitrines & e-commerce, intégrations API et solutions SaaS.",
        },
      },
      {
        "@type": "Question",
        name: "Intervenez-vous à l’international ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui, nous accompagnons des clients en Europe, en Afrique et en Amérique du Nord, avec des process 100% à distance.",
        },
      },
      {
        "@type": "Question",
        name: "Pouvez-vous reprendre un projet existant ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui. Nous auditons le code, élaborons une feuille de route et sécurisons la continuité (qualité, performance, sécurité, CI/CD).",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />
    </>
  );
}

/* -------------------- PAGE -------------------- */
export default function Page() {
  return (
    <main className="w-full h-full relative overflow-hidden pb-20">
      {/* JSON-LD spécifique à /services */}
      <JsonLd />

      <HeroSection />
      <WebDevSection />
      <MobileDevSection />
      <StaticSection />
    </main>
  );
}
