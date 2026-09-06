import React from "react";
import { defaultLocale } from "@/lib/i18n";
import ServicesSection from "@/components/homePage/ServicesSection";
import FinalCtaSection from "@/components/homePage/FinalCtaSection";
import { getAbsoluteUrl, getLanguageAlternates, getLocalizedRoute } from "@/lib/localePath";

export function generateMetadata({ params }) {
  const locale = params?.locale || defaultLocale;
  const canonical = getLocalizedRoute(locale, "services");
  const absoluteUrl = getAbsoluteUrl(canonical);
  const title = locale === "fr" ? "Nos Services | Auxis Digital" : "Our Services | Auxis Digital";
  const description = locale === "fr" 
    ? "Découvrez nos services en développement web, mobile, conseil et optimisation." 
    : "Discover our services in web & mobile development, consulting, and optimization.";

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: getLanguageAlternates("services"),
    },
    openGraph: {
      title,
      description,
      url: absoluteUrl,
    },
  };
}

export default function ServicesOverviewPage({ params }) {
  const locale = params?.locale || defaultLocale;
  
  return (
    <main className="min-h-screen bg-[#050A0F] pt-24">
      {/* Reusing the highly-polished services grid from the homepage */}
      <ServicesSection locale={locale} />
      <FinalCtaSection locale={locale} />
    </main>
  );
}
