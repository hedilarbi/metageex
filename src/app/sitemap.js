// src/app/sitemap.js
export default function sitemap() {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://metageex.com";
  const now = new Date();

  const urls = [
    { path: "/", changeFrequency: "weekly", priority: 1.0 },
    { path: "/apropos", changeFrequency: "monthly", priority: 0.6 },
    { path: "/contact", changeFrequency: "monthly", priority: 0.5 },
    { path: "/produits", changeFrequency: "weekly", priority: 0.7 },
    {
      path: "/produits/solution-restauration",
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      path: "/produits/solution-archive-numerique",
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  return urls.map(({ path, changeFrequency, priority }) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));
}
