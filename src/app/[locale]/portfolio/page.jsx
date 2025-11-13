import React from "react";
import PortfolioHero from "@/components/portfolio/PortfolioHero";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";
import { defaultLocale } from "@/lib/i18n";
import {
  getAbsoluteUrl,
  getLanguageAlternates,
  getLocalizedRoute,
  siteUrl,
} from "@/lib/localePath";

const portfolioMetadata = {
  en: {
    title: "Portfolio — Web, mobile & e-commerce projects | Metageex",
    description:
      "A selection of delivered products: web apps, mobile apps, showcase websites, e-commerce platforms and custom back-offices.",
  },
  fr: {
    title: "Portfolio — Projets web, mobile, vitrine & e-commerce | Metageex",
    description:
      "Découvrez nos réalisations : applications web et mobiles, sites vitrines, e-commerce, backoffices et intégrations cloud.",
  },
};

export function generateMetadata({ params }) {
  const locale = params?.locale || defaultLocale;
  const meta = portfolioMetadata[locale] || portfolioMetadata.en;
  const canonical = getLocalizedRoute(locale, "portfolio");
  const absoluteUrl = getAbsoluteUrl(canonical);
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical,
      languages: getLanguageAlternates("portfolio"),
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
  const meta = portfolioMetadata[locale] || portfolioMetadata.en;
  const absoluteUrl = getAbsoluteUrl(getLocalizedRoute(locale, "portfolio"));
  const collection = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: meta.title,
    url: absoluteUrl,
    about: [
      locale === "fr" ? "Applications web" : "Web applications",
      locale === "fr" ? "Applications mobiles" : "Mobile applications",
      locale === "fr" ? "Sites vitrines" : "Showcase websites",
      "E-commerce",
      "Backoffice",
    ],
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
    itemListOrder: "http://schema.org/ItemListOrderAscending",
    name: locale === "fr" ? "Réalisations Metageex" : "Metageex portfolio",
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

export default function PortfolioPage({ params }) {
  const locale = params?.locale || defaultLocale;
  return (
    <main className="w-full h-full relative overflow-hidden pb-20">
      <JsonLd locale={locale} />
      <PortfolioHero locale={locale} />
      <PortfolioGrid locale={locale} />
    </main>
  );
}
