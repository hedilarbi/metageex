import React from "react";
import MobileHeroSection from "@/components/mobileServicePage/MobileHeroSection";
import MobileAppServicesSection from "@/components/mobileServicePage/MobileAppServicesSection";
import Techs from "@/components/servicePage/techs/Techs";
import Portfolio from "@/components/mobileServicePage/portfolio/Portfolio";
import Technologies from "@/components/mobileServicePage/technologies/Technologies";
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
      "Mobile app development — iOS & Android (React Native/Expo) | Metageex",
    description:
      "Design and development of high-performance mobile apps for iOS and Android: React Native/Expo, API integrations, payments, notifications, App Store & Play Store deployment.",
    keywords: [
      "mobile app development",
      "React Native agency",
      "Expo",
      "iOS",
      "Android",
      "App Store",
      "Play Store",
      "push notifications",
      "in-app payments",
    ],
  },
  fr: {
    title:
      "Développement d’applications mobiles — iOS & Android (React Native/Expo) | Metageex",
    description:
      "Conception et développement d’applications mobiles performantes : React Native/Expo, intégrations API, paiements, notifications, déploiement App Store & Play Store.",
    keywords: [
      "développement application mobile",
      "React Native",
      "Expo",
      "iOS",
      "Android",
      "App Store",
      "Play Store",
      "notifications push",
      "paiement en ligne",
    ],
  },
};

export function generateMetadata({ params }) {
  const locale = params?.locale || defaultLocale;
  const meta = metaByLocale[locale] || metaByLocale.en;
  const canonical = getLocalizedRoute(locale, "servicesMobile");
  const absoluteUrl = getAbsoluteUrl(canonical);
  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: {
      canonical,
      languages: getLanguageAlternates("servicesMobile"),
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
  const absoluteServiceUrl = absoluteRoute("servicesMobile");
  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType:
      locale === "fr"
        ? "Développement d’applications mobiles"
        : "Mobile app development",
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
        minPrice: "3000",
        maxPrice: "50000",
      },
    },
    description:
      locale === "fr"
        ? "Développement d’applications mobiles performantes (iOS & Android) avec React Native/Expo, intégrations API, paiements, notifications push et déploiement stores."
        : "High-performance iOS & Android apps with React Native/Expo: API integrations, payments, push notifications and store deployments.",
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
            ? "Développement d’applications mobiles"
            : "Mobile app development",
        item: absoluteServiceUrl,
      },
    ],
  };

  const faq =
    locale === "fr"
      ? [
          {
            "@type": "Question",
            name: "Combien de temps faut-il pour développer une app mobile ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Entre 4 et 12 semaines pour un MVP selon la complexité (authentification, paiement, temps réel…). Nous travaillons en sprints avec démos régulières.",
            },
          },
          {
            "@type": "Question",
            name: "Pouvez-vous publier sur l’App Store et le Play Store ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Oui. Nous gérons les builds, la conformité, les fiches stores et l’envoi à la review.",
            },
          },
          {
            "@type": "Question",
            name: "Quelles technologies privilégiez-vous ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "React Native/Expo pour un code partagé iOS/Android. Backends Node.js avec Firebase/Supabase/MongoDB selon le besoin.",
            },
          },
          {
            "@type": "Question",
            name: "Assurez-vous la maintenance ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Oui. Monitoring, mises à jour, corrections et évolutions.",
            },
          },
        ]
      : [
          {
            "@type": "Question",
            name: "How long does it take to build a mobile app?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "On average 4–12 weeks for an MVP depending on scope. We work in agile sprints with weekly demos.",
            },
          },
          {
            "@type": "Question",
            name: "Can you handle App Store / Play Store submission?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, we take care of builds, compliance, store listings and review submissions.",
            },
          },
          {
            "@type": "Question",
            name: "Which technologies do you use?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "React Native/Expo with Node.js/Firebase/Supabase backends, plus Stripe, push notifications and analytics.",
            },
          },
          {
            "@type": "Question",
            name: "Do you provide maintenance?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, including monitoring, updates, fixes and roadmap iterations.",
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

export default function MobileServicePage({ params }) {
  const locale = params?.locale || defaultLocale;
  return (
    <main className="w-full h-full relative overflow-hidden pb-20">
      <JsonLd locale={locale} />

      <MobileHeroSection locale={locale} />
      <MobileAppServicesSection locale={locale} />
      <Technologies locale={locale} />
      <Techs locale={locale} />
      <Portfolio locale={locale} />
    </main>
  );
}
