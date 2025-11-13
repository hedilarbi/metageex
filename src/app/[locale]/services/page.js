import React from "react";
import HeroSection from "@/components/servicesPage/HeroSection";
import WebDevSection from "@/components/servicesPage/WebDevSection";
import MobileDevSection from "@/components/servicesPage/MobileDevSection";
import StaticSection from "@/components/servicesPage/StaticSection";
import { defaultLocale } from "@/lib/i18n";
import { servicesPageContent } from "@/content/services";
import {
  getAbsoluteUrl,
  getLanguageAlternates,
  getLocalizedRoute,
  siteUrl,
} from "@/lib/localePath";

const servicesMetadata = {
  en: {
    title: "Services — Web, mobile & showcase websites | Metageex",
    description:
      "International tech team for web apps, mobile apps, showcase websites and tailored SaaS solutions.",
    faq: [
      {
        q: "Which services do you provide?",
        a: "Custom web applications (Next.js/React), mobile apps (iOS/Android), showcase & e-commerce websites, API integrations and SaaS platforms.",
      },
      {
        q: "Do you work internationally?",
        a: "Yes. We support teams in Europe, Africa and North America with remote-first processes.",
      },
      {
        q: "Can you take over an existing codebase?",
        a: "Absolutely. We audit the code, define a new roadmap and secure delivery (quality, performance, CI/CD).",
      },
    ],
  },
  fr: {
    title: "Services — Développement web, mobile & sites vitrines | Metageex",
    description:
      "Agence internationale : applications web, mobiles, sites vitrines, e-commerce et solutions SaaS sur mesure.",
    faq: [
      {
        q: "Quels services proposez-vous ?",
        a: "Applications web (Next.js/React), mobiles (iOS/Android), sites vitrines & e-commerce, intégrations API et solutions SaaS.",
      },
      {
        q: "Intervenez-vous à l’international ?",
        a: "Oui, nous accompagnons des clients en Europe, en Afrique et en Amérique du Nord avec des process 100% à distance.",
      },
      {
        q: "Reprenez-vous des projets existants ?",
        a: "Oui. Nous auditons le code, définissons une feuille de route et sécurisons la continuité (qualité, performance, sécurité, CI/CD).",
      },
    ],
  },
};

export function generateMetadata({ params }) {
  const locale = params?.locale || defaultLocale;
  const meta = servicesMetadata[locale] || servicesMetadata.en;
  const canonical = getLocalizedRoute(locale, "services");
  const absoluteUrl = getAbsoluteUrl(canonical);
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical,
      languages: getLanguageAlternates("services"),
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: absoluteUrl,
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
  const meta = servicesMetadata[locale] || servicesMetadata.en;
  const absoluteRoute = (key) =>
    getAbsoluteUrl(getLocalizedRoute(locale, key));
  const absoluteServicesUrl = absoluteRoute("services");

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
        item: absoluteServicesUrl,
      },
    ],
  };

  const collectionPage = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: meta.title,
    url: absoluteServicesUrl,
    about: Object.values(servicesPageContent.sections).map(
      (section) => section[locale]?.title || section.en.title
    ),
    publisher: {
      "@type": "Organization",
      name: "Metageex",
      url: siteUrl,
      logo: getAbsoluteUrl("/icons/icon-512.png"),
    },
  };

  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "Service",
          name:
            servicesPageContent.sections.web[locale]?.title ||
            servicesPageContent.sections.web.en.title,
          url: absoluteRoute("servicesWeb"),
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "Service",
          name:
            servicesPageContent.sections.mobile[locale]?.title ||
            servicesPageContent.sections.mobile.en.title,
          url: absoluteRoute("servicesMobile"),
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "Service",
          name:
            servicesPageContent.sections.showcase[locale]?.title ||
            servicesPageContent.sections.showcase.en.title,
          url: absoluteRoute("servicesShowcase"),
        },
      },
    ],
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: meta.faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
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

export default function ServicesPage({ params }) {
  const locale = params?.locale || defaultLocale;
  return (
    <main className="w-full h-full relative overflow-hidden pb-20">
      <JsonLd locale={locale} />
      <HeroSection locale={locale} />
      <WebDevSection locale={locale} />
      <MobileDevSection locale={locale} />
      <StaticSection locale={locale} />
    </main>
  );
}
