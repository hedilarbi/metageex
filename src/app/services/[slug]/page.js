import React from "react";
import ServicePage from "@/app/[locale]/services/[slug]/page";
import { defaultLocale } from "@/lib/i18n";

export default function ServiceRootPage({ params }) {
  // Pass the default locale (en) and the slug
  return <ServicePage params={{ ...params, locale: defaultLocale }} />;
}
