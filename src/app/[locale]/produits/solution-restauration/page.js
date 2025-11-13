import React from "react";
import HeroSection from "@/components/restoPage/HeroSection";
import FunctionalitiesSection from "@/components/restoPage/FunctionalitiesSection";
import AdvantagesSection from "@/components/restoPage/AdvantagesSection";
import { defaultLocale } from "@/lib/i18n";
import {
  getAbsoluteUrl,
  getLanguageAlternates,
  getLocalizedRoute,
} from "@/lib/localePath";

const metaByLocale = {
  en: {
    title: "Restaurant management suite — Ordering, QR menus & dashboard",
    description:
      "Modern SaaS platform for restaurants: management dashboard, online ordering, mobile apps and QR menu experiences.",
  },
  fr: {
    title: "Solution de restauration — commande en ligne, menus QR & dashboard",
    description:
      "Suite SaaS moderne pour les restaurants : dashboard, commandes en ligne, application mobile et menu QR code.",
  },
};

export function generateMetadata({ params }) {
  const locale = params?.locale || defaultLocale;
  const meta = metaByLocale[locale] || metaByLocale.en;
  const canonical = getLocalizedRoute(locale, "productRestaurant");
  const absoluteUrl = getAbsoluteUrl(canonical);
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical,
      languages: getLanguageAlternates("productRestaurant"),
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: absoluteUrl,
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

const RestaurantProductPage = ({ params }) => {
  const locale = params?.locale || defaultLocale;
  return (
    <main className="w-full h-full relative overflow-hidden">
      <HeroSection locale={locale} />
      <FunctionalitiesSection locale={locale} />
      <AdvantagesSection locale={locale} />
    </main>
  );
};

export default RestaurantProductPage;
