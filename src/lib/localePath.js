import { defaultLocale, locales } from "./i18n";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://metageex.com";

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
  servicesWeb: {
    en: "/services/web-application-development",
    fr: "/services/developpement-application-web",
  },
  servicesMobile: {
    en: "/services/mobile-application-development",
    fr: "/services/developpement-application-mobile",
  },
  servicesShowcase: {
    en: "/services/showcase-website-development",
    fr: "/services/site-vitrine",
  },
  productRestaurant: {
    en: "/products/restaurant-solution",
    fr: "/produits/solution-restauration",
  },
  productArchive: {
    en: "/products/digital-archive-solution",
    fr: "/produits/solution-archive-numerique",
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
