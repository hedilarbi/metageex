import { siteUrl } from "@/lib/localePath";

export default function robots() {
  const host = new URL(siteUrl).host;
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // évite l’indexation d’assets sans valeur SEO
        disallow: ["/api/", "/_next/", "/private/", "/admin/"],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host,
  };
}
