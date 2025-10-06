// app/robots.ts

export default function robots() {
  const base = "https://metageex.com";
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // évite l’indexation d’assets sans valeur SEO
        disallow: ["/api/", "/_next/", "/private/", "/admin/"],
      },
    ],
    sitemap: `${base}/sitemap.xml`,
    host: "metageex.com",
  };
}
