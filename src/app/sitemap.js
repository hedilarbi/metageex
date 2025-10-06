// app/sitemap.ts

export default function sitemap() {
  const base = "https://metageex.com";
  const now = new Date().toISOString();

  const staticPages = [
    "", // Accueil
    "/services",
    "/services/developpement-application-web",
    "/services/developpement-application-mobile",
    "/services/site-vitrine",
    "/produits",
    "/apropos",
    "/contact",
    "/portfolio",
    // produits détaillés
    "/produits/solution-restauration",
    "/produits/solution-archive-numerique",
  ];

  return staticPages.map((p) => ({
    url: `${base}${p}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: p === "" ? 1 : 0.7,
  }));
}
