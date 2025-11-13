import { siteUrl } from "@/lib/localePath";

export default function sitemap() {
  const now = new Date().toISOString();

  const staticPages = [
    "", // Home
    "/services",
    "/services/web-application-development",
    "/services/mobile-application-development",
    "/services/showcase-website-development",
    "/products/restaurant-solution",
    "/products/digital-archive-solution",
    "/about",
    "/contact",
    "/portfolio",
    // French equivalents
    "/fr/services",
    "/fr/services/developpement-application-web",
    "/fr/services/developpement-application-mobile",
    "/fr/services/site-vitrine",
    "/fr/produits/solution-restauration",
    "/fr/produits/solution-archive-numerique",
    "/fr/apropos",
    "/fr/contact",
    "/fr/portfolio",
  ];

  return staticPages.map((p) => ({
    url: `${siteUrl}${p}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: p === "" ? 1 : 0.7,
  }));
}
