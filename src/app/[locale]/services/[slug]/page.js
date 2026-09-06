import React from "react";
import { notFound } from "next/navigation";
import { defaultLocale } from "@/lib/i18n";
import { routeSlugs } from "@/lib/localePath";
import { servicesData } from "@/content/servicesData";

import ServiceHeroSection from "@/components/servicesPage/ServiceHeroSection";
import ServiceDetailsSection from "@/components/servicesPage/ServiceDetailsSection";
import ServiceTechStackSection from "@/components/servicesPage/ServiceTechStackSection";
import FinalCtaSection from "@/components/homePage/FinalCtaSection";

export default function ServicePage({ params }) {
  const { locale = defaultLocale, slug } = params;
  console.log("ServicePage rendering with params:", params);

  // Find the corresponding service key based on the slug and locale
  let serviceKey = null;
  for (const [key, paths] of Object.entries(routeSlugs)) {
    console.log(`Checking key: ${key}, paths[locale]: ${paths[locale]}, target: /services/${slug}`);
    // routeSlugs[key][locale] returns something like "/services/e-commerce-development"
    // We just need to check if it ends with `/${slug}`
    if (paths[locale] === `/services/${slug}`) {
      serviceKey = key;
      break;
    }
  }

  // If no matching key or data is found, show 404
  if (!serviceKey || !servicesData[serviceKey] || !servicesData[serviceKey][locale]) {
    notFound();
  }

  const data = servicesData[serviceKey][locale];

  return (
    <main className="min-h-screen bg-[#050A0F] pt-20">
      <ServiceHeroSection data={data} />
      <ServiceDetailsSection data={data} />
      <ServiceTechStackSection data={data} />
      <FinalCtaSection locale={locale} />
    </main>
  );
}
