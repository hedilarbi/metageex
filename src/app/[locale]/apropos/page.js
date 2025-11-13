import React from "react";
import HeroSection from "@/components/aboutPage/HeroSection";
import DescriptionSection from "@/components/aboutPage/DescriptionSection";
import ValuesSection from "@/components/aboutPage/ValuesSection";
import DistingueSection from "@/components/aboutPage/DistingueSection";
import PropositionSection from "@/components/aboutPage/PropositionSection";
import { defaultLocale } from "@/lib/i18n";
import {
  getAbsoluteUrl,
  getLanguageAlternates,
  getLocalizedRoute,
} from "@/lib/localePath";

const aboutMetadata = {
  en: {
    title: "About Metageex — Team & philosophy",
    description:
      "Our mission, culture and methodology to build tailored web, mobile and SaaS products.",
  },
  fr: {
    title: "À propos de Metageex — Équipe & philosophie",
    description:
      "Notre mission, notre culture et notre méthodologie pour concevoir des solutions web, mobiles et SaaS sur mesure.",
  },
};

export function generateMetadata({ params }) {
  const locale = params?.locale || defaultLocale;
  const meta = aboutMetadata[locale] || aboutMetadata.en;
  const canonical = getLocalizedRoute(locale, "about");
  const absoluteUrl = getAbsoluteUrl(canonical);
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical,
      languages: getLanguageAlternates("about"),
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

const AboutPage = ({ params }) => {
  const locale = params?.locale || defaultLocale;

  return (
    <main className=" w-full h-full relative overflow-hidden">
      <HeroSection locale={locale} />
      <DescriptionSection locale={locale} />
      <ValuesSection locale={locale} />
      <DistingueSection locale={locale} />
      <PropositionSection locale={locale} />
    </main>
  );
};

export default AboutPage;
