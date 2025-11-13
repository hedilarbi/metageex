import { getAbsoluteUrl, siteUrl } from "@/lib/localePath";

export default function SeoJsonLd() {
  const org = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Metageex",
    url: siteUrl,
    logo: getAbsoluteUrl("/icons/icon-512.png"),
    sameAs: [
      // ajoute LinkedIn, X, GitHub si dispo
    ],
    description:
      "Agence internationale de développement web, mobile, SaaS et sites vitrines.",
    areaServed: ["FR", "TN", "CA", "EU"],
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Développement d’applications web",
        },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Développement mobile" },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Sites vitrines & e-commerce",
        },
      },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "SaaS" } },
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Metageex",
    url: siteUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/recherche?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
