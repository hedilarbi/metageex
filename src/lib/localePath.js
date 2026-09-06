import { defaultLocale, locales } from "./i18n";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://auxisdigital.com";

export function getLocalePath(locale, path = "/") {
  const safeLocale = locales.includes(locale) ? locale : defaultLocale;
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  if (safeLocale === defaultLocale) {
    return normalizedPath === "/" ? "/" : normalizedPath;
  }

  return normalizedPath === "/"
    ? `/${safeLocale}`
    : `/${safeLocale}${normalizedPath}`;
}

export const routeSlugs = {
  home: { en: "/", fr: "/" },
  services: { en: "/services", fr: "/services" },
  portfolio: { en: "/portfolio", fr: "/portfolio" },
  about: { en: "/about", fr: "/apropos" },
  contact: { en: "/contact", fr: "/contact" },
  serviceEcommerce: {
    en: "/services/e-commerce-development",
    fr: "/services/developpement-ecommerce",
  },
  serviceCustomWeb: {
    en: "/services/custom-web-platforms",
    fr: "/services/plateformes-web-sur-mesure",
  },
  serviceMobile: {
    en: "/services/mobile-applications",
    fr: "/services/applications-mobiles",
  },
  serviceConsulting: {
    en: "/services/business-growth-consulting",
    fr: "/services/conseil-croissance-strategie",
  },
  serviceOptimization: {
    en: "/services/revenue-conversion-optimization",
    fr: "/services/optimisation-conversion",
  },
  serviceInfrastructure: {
    en: "/services/infrastructure-cost-optimization",
    fr: "/services/optimisation-infrastructure",
  },
  serviceSupport: {
    en: "/services/ongoing-technical-support",
    fr: "/services/support-technique-continu",
  },
};

export function getLocalizedRoute(locale, key) {
  const slugs = routeSlugs[key];
  const slug =
    (slugs && (slugs[locale] || slugs[defaultLocale])) || routeSlugs.home.en;
  return getLocalePath(locale, slug);
}

export function getLanguageAlternates(key) {
  return locales.reduce((acc, locale) => {
    acc[locale] = getLocalizedRoute(locale, key);
    return acc;
  }, {});
}

export function getAbsoluteUrl(path = "/") {
  if (!path) {
    return siteUrl;
  }

  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  const normalized = path.startsWith("/") ? path : `/${path}`;
  return new URL(normalized, siteUrl).toString();
}
