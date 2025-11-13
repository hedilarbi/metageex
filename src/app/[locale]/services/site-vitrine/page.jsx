import React from "react";
import VitrineHeroSection from "@/components/vitrineServicePage/VitrineHeroSection";
import VitrineServicesSection from "@/components/vitrineServicePage/VitrineServicesSection";
import Technologies from "@/components/vitrineServicePage/technologies/Technologies";
import Techs from "@/components/servicePage/techs/Techs";
import Portfolio from "@/components/vitrineServicePage/portfolio/Portfolio";
import { defaultLocale } from "@/lib/i18n";
import {
  getAbsoluteUrl,
  getLanguageAlternates,
  getLocalizedRoute,
  siteUrl,
} from "@/lib/localePath";

const metaByLocale = {
  en: {
    title:
      "Showcase website design — WordPress/Next.js, SEO & responsive | Metageex",
    description:
      "Professional showcase websites with tailored design, on-page SEO, speed optimisation, security and hosting. Delivered on WordPress or Next.js.",
    keywords: [
      "showcase website",
      "WordPress agency",
      "Next.js site",
      "SEO",
      "responsive website",
      "B2B website",
    ],
  },
  fr: {
    title:
      "Création de sites vitrines — WordPress/Next.js, SEO & Responsive | Metageex",
    description:
      "Sites vitrines professionnels : design soigné, SEO on-page, vitesse, sécurité et hébergement. Réalisation en WordPress ou Next.js.",
    keywords: [
      "site vitrine",
      "création site vitrine",
      "WordPress",
      "Next.js",
      "SEO",
      "site responsive",
    ],
  },
};

export function generateMetadata({ params }) {
  const locale = params?.locale || defaultLocale;
  const meta = metaByLocale[locale] || metaByLocale.en;
  const canonical = getLocalizedRoute(locale, "servicesShowcase");
  const absoluteUrl = getAbsoluteUrl(canonical);
  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: {
      canonical,
      languages: getLanguageAlternates("servicesShowcase"),
    },
    openGraph: {
      type: "article",
      url: absoluteUrl,
      title: meta.title,
      description: meta.description,
      siteName: "Metageex",
      images: [{ url: "/opengraph-image.png" }],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: ["/opengraph-image.png"],
    },
  };
}

function JsonLd({ locale }) {
  const absoluteRoute = (key) =>
    getAbsoluteUrl(getLocalizedRoute(locale, key));
  const absoluteServiceUrl = absoluteRoute("servicesShowcase");
  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType:
      locale === "fr" ? "Création de site vitrine" : "Showcase website design",
    provider: {
      "@type": "Organization",
      name: "Metageex",
      url: siteUrl,
      logo: getAbsoluteUrl("/icons/icon-512.png"),
    },
    areaServed: ["FR", "TN", "CA", "EU"],
    offers: {
      "@type": "Offer",
      url: absoluteServiceUrl,
      priceCurrency: "EUR",
      priceSpecification: {
        "@type": "PriceSpecification",
        minPrice: "900",
        maxPrice: "6000",
      },
    },
    description:
      locale === "fr"
        ? "Sites vitrines WordPress/Next.js avec SEO on-page, performance, sécurité et hébergement."
        : "WordPress/Next.js showcase websites with on-page SEO, performance, security and hosting.",
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: locale === "fr" ? "Accueil" : "Home",
        item: absoluteRoute("home"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: locale === "fr" ? "Services" : "Services",
        item: absoluteRoute("services"),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: locale === "fr" ? "Site vitrine" : "Showcase website",
        item: absoluteServiceUrl,
      },
    ],
  };

  const faq =
    locale === "fr"
      ? [
          {
            "@type": "Question",
            name: "En combien de temps livrez-vous un site vitrine ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Entre 2 et 4 semaines selon le contenu (pages, visuels, blog) et les fonctionnalités (formulaires, multilingue).",
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
              text: "Oui : déploiement, SSL, sauvegardes, mises à jour, anti-spam et monitoring basique.",
            },
          },
          {
            "@type": "Question",
            name: "WordPress ou Next.js : que choisir ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "WordPress pour une édition de contenu simple. Next.js pour des performances maximales et du sur-mesure.",
            },
          },
        ]
      : [
          {
            "@type": "Question",
            name: "How long does it take to deliver a showcase site?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Roughly 2–4 weeks depending on the amount of content and features (forms, multi-language, blog).",
            },
          },
          {
            "@type": "Question",
            name: "Will the site be SEO friendly?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes: semantic structure, titles/meta, sitemap/robots, Core Web Vitals optimisation and internal linking.",
            },
          },
          {
            "@type": "Question",
            name: "Do you handle hosting and maintenance?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes: deployment, SSL certificates, backups, updates, security hardening and basic monitoring.",
            },
          },
          {
            "@type": "Question",
            name: "WordPress or Next.js?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "WordPress for simple content editing; Next.js for top performance and fully custom experiences.",
            },
          },
        ];

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
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faq,
          }),
        }}
      />
    </>
  );
}

export default function VitrineServicePage({ params }) {
  const locale = params?.locale || defaultLocale;
  return (
    <main className="w-full h-full relative overflow-hidden pb-20">
      <JsonLd locale={locale} />
      <VitrineHeroSection locale={locale} />
      <VitrineServicesSection locale={locale} />
      <Technologies locale={locale} />
      <Techs locale={locale} />
      <Portfolio locale={locale} />
    </main>
  );
}
