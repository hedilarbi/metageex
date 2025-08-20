export default function robots() {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://metageex.com";
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"], // adapte si besoin
    },
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
