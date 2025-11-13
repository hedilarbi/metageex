// app/services/developpement-application-web/page.jsx
import React from "react";
import HeroSection from "@/components/servicePage/HeroSection";
import WebAppServicesSection from "@/components/servicePage/WebAppServicesSection";
import Technologies from "@/components/servicePage/technologies/Technologies";
import Techs from "@/components/servicePage/techs/Techs";
import Portfolio from "@/components/servicePage/portfolio/Portfolio";
import { defaultLocale } from "@/lib/i18n";
import {
  getAbsoluteUrl,
  getLanguageAlternates,
  getLocalizedRoute,
  siteUrl,
} from "@/lib/localePath";

const metaByLocale = {
  en: {
    title: "Web application development — Next.js, React, Node | Metageex",
    description:
      "International team specialised in modern web apps: Next.js/React front-ends, Node/Python back-ends, APIs, e-commerce and bespoke back-offices.",
    keywords: [
      "web application development",
      "Next.js agency",
      "React agency",
      "Node.js",
      "SaaS",
      "e-commerce",
      "custom software",
    ],
  },
  fr: {
    title: "Développement d’applications web — Next.js, React, Node | Metageex",
    description:
      "Agence spécialisée en développement d’applications web modernes : Next.js/React, Node, APIs, e-commerce et backoffice sur mesure.",
    keywords: [
      "développement application web",
      "agence développement web",
      "Next.js",
      "React",
      "Node.js",
      "SaaS",
      "e-commerce",
    ],
  },
};

const heroCopy = {
  en: {
    title: "Web application development",
    description:
      "We architect and ship modern, scalable and secure web platforms tailored to your operations.",
    primaryCta: "Start a project",
    secondaryCta: "View portfolio",
  },
  fr: {
    title: "Développement d’applications web",
    description:
      "Nous concevons des plateformes web modernes, scalables et sécurisées adaptées à vos enjeux métier.",
    primaryCta: "Démarrer un projet",
    secondaryCta: "Voir le portfolio",
  },
};

export function generateMetadata({ params }) {
  const locale = params?.locale || defaultLocale;
  const meta = metaByLocale[locale] || metaByLocale.en;
  const canonical = getLocalizedRoute(locale, "servicesWeb");
  const absoluteUrl = getAbsoluteUrl(canonical);
  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: {
      canonical,
      languages: getLanguageAlternates("servicesWeb"),
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

// ---------- JSON-LD (Service + Breadcrumb + FAQ) ----------
function JsonLd({ locale }) {
  const absoluteRoute = (key) =>
    getAbsoluteUrl(getLocalizedRoute(locale, key));
  const absoluteServiceUrl = absoluteRoute("servicesWeb");
  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Développement d’applications web",
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
        name:
          locale === "fr"
            ? "Développement d’applications web"
            : "Web application development",
        item: absoluteServiceUrl,
      },
    ],
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity:
      locale === "fr"
        ? [
            {
              "@type": "Question",
              name:
                "Combien de temps faut-il pour développer une application web ?",
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
                text: "Next.js/React pour le front, Node.js ou Python/PHP pour le back, MongoDB/Firebase/Supabase pour la base de données et un déploiement cloud.",
              },
            },
            {
              "@type": "Question",
              name: "Pouvez-vous intégrer un paiement en ligne ?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Oui. Nous intégrons Stripe, PayPal ou des passerelles locales avec les meilleures pratiques de sécurité.",
              },
            },
            {
              "@type": "Question",
              name: "Proposez-vous un suivi après mise en production ?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Nous assurons support, monitoring, plans d’évolution et optimisation des performances/Core Web Vitals.",
              },
            },
          ]
        : [
            {
              "@type": "Question",
              name: "How long does a web app take to build?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Depending on scope, 3 to 12 weeks for an MVP. We deliver in agile sprints with regular demos.",
              },
            },
            {
              "@type": "Question",
              name: "Which technologies do you use?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Next.js/React on the front-end, Node.js/Python/PHP for the back-end, MongoDB/Firebase/Supabase for data and cloud deployments on AWS.",
              },
            },
            {
              "@type": "Question",
              name: "Can you integrate payments?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. We integrate Stripe, PayPal or local gateways with best security practices.",
              },
            },
            {
              "@type": "Question",
              name: "Do you provide post-launch support?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We handle support, monitoring, evolution plans and Core Web Vitals optimisation.",
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
export default function Page({ params }) {
  const locale = params?.locale || defaultLocale;
  const hero = heroCopy[locale] || heroCopy.en;
  const contactHref = getLocalizedRoute(locale, "contact");
  const portfolioHref = `${getLocalizedRoute(locale, "portfolio")}#web`;

  return (
    <main className="w-full h-full relative overflow-hidden pb-20">
      {/* JSON-LD spécifique à cette page */}
      <JsonLd locale={locale} />
      <HeroSection
        title={hero.title}
        description={hero.description}
        primaryCta={hero.primaryCta}
        primaryHref={contactHref}
        secondaryCta={hero.secondaryCta}
        secondaryHref={portfolioHref}
      />
      <WebAppServicesSection locale={locale} />
      <Technologies locale={locale} />
      <Techs locale={locale} />
      <Portfolio locale={locale} />
    </main>
  );
}
