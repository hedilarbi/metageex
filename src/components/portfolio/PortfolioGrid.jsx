// components/portfolio/PortfolioGrid.jsx
"use client";
import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import styles from "@/components/servicePage/portfolio/FeatureCard.module.css";
import portfolioWeb1 from "@public/images/portfolioWeb1.png";
import portfolioWeb2 from "@public/images/portfolioWeb2.png";
import portfolioWeb3 from "@public/images/portfolioWeb3.png";
import portfolioWeb4 from "@public/images/portfolioWeb4.png";
import portfolioWeb5 from "@public/images/portfolioWeb5.png";
import portfolioWeb6 from "@public/images/portfolioWeb6.png";
import portfolioWeb7 from "@public/images/portfolioWeb7.png";
import portfolioWeb8 from "@public/images/portfolioWeb8.png";
import portfolioWeb9 from "@public/images/portfolioWeb9.png";
import portfolioWeb10 from "@public/images/portfolioWeb10.png";
import portfolioMob3 from "@public/images/portfolioMob3.png";
import portfolioMob2 from "@public/images/portfolioMob2.png";
import portfolioMob1 from "@public/images/portfolioMob1.png";
import portfolioMob4 from "@public/images/portfolioMob4.png";
import { defaultLocale } from "@/lib/i18n";
import { getLocalizedRoute } from "@/lib/localePath";
// Exemple images mobiles si tu en as :
// import portfolioMobile1 from "@/public/images/portfolioMobile1.png";

const DATA = [
  {
    id: "courteau",
    image: portfolioWeb1,
    url: "https://lecourteau.com",
    tech: ["Next.js"],
    categories: ["web", "ecommerce"],
    translations: {
      en: {
        title: "Casse-croûte Courteau — Restaurant ordering",
        desc: "Online ordering platform with dynamic menu, payments and backoffice.",
      },
      fr: {
        title: "Casse-croûte Courteau — Restaurant en ligne",
        desc: "Plateforme e-commerce : commande en ligne, menu dynamique, backoffice.",
      },
    },
  },
  {
    id: "megatoit",
    image: portfolioWeb5,
    url: "https://lemegatoit.com",
    tech: ["Next.js"],
    categories: ["web", "backoffice"],
    translations: {
      en: {
        title: "LeMegaToit — Ticketing platform",
        desc: "Event management and ticketing backoffice with secure payments.",
      },
      fr: {
        title: "LeMegaToit — Billetterie en ligne",
        desc: "Backoffice de billetterie : événements, gestion des tickets, paiements sécurisés.",
      },
    },
  },
  {
    id: "tuline",
    image: portfolioWeb4,
    url: "https://tulinecreation.com",
    tech: ["PrestaShop"],
    categories: ["web", "ecommerce"],
    translations: {
      en: {
        title: "Tuline Création — Online boutique",
        desc: "Full e-commerce experience with catalog, payments and order tracking.",
      },
      fr: {
        title: "Tuline Création — Boutique en ligne",
        desc: "E-commerce complet : catalogue produits, paiement en ligne, suivi des commandes.",
      },
    },
  },
  {
    id: "westmount",
    image: portfolioWeb7,
    url: "https://www.westmountlimousines.com",
    tech: ["WordPress"],
    categories: ["web", "vitrine"],
    translations: {
      en: {
        title: "Westmount Limousines — Luxury rentals",
        desc: "Showcase website with online booking for a premium limousine brand.",
      },
      fr: {
        title: "Westmount Limousines — Location haut de gamme",
        desc: "Site vitrine + réservation en ligne pour une agence de limousines.",
      },
    },
  },
  {
    id: "daisy",
    image: portfolioWeb8,
    url: "https://www.daisystore.tn",
    tech: ["PrestaShop"],
    categories: ["web", "ecommerce"],
    translations: {
      en: {
        title: "Daisy Store — Online shop",
        desc: "E-commerce with product catalog, secure checkout and logistics tracking.",
      },
      fr: {
        title: "Daisy Store — Boutique en ligne",
        desc: "Catalogue complet, paiement sécurisé et suivi logistique.",
      },
    },
  },
  {
    id: "neutralivie",
    image: portfolioWeb2,
    url: "https://www.neutralivie.fr",
    tech: ["WordPress"],
    categories: ["web", "vitrine"],
    translations: {
      en: {
        title: "Neutralivie — Wealth management",
        desc: "Corporate showcase website for a wealth management firm.",
      },
      fr: {
        title: "Neutralivie — Cabinet de patrimoine",
        desc: "Site vitrine pour un cabinet de gestion de patrimoine.",
      },
    },
  },
  {
    id: "lemegatoit",
    image: portfolioWeb3,
    url: "https://www.lemegatoit.com",
    tech: ["Next.js"],
    categories: ["web", "ecommerce"],
    translations: {
      en: {
        title: "Megatoit — Ticketing",
        desc: "Ticketing platform with event management and secure payments.",
      },
      fr: {
        title: "Megatoit — Billetterie en ligne",
        desc: "Billetterie en ligne avec gestion des événements et paiements sécurisés.",
      },
    },
  },
  {
    id: "prds",
    image: portfolioWeb6,
    url: "https://prds-service.com",
    tech: ["WordPress"],
    categories: ["web", "vitrine"],
    translations: {
      en: {
        title: "PRDS — Cleaning services",
        desc: "Service website with online booking and intervention tracking.",
      },
      fr: {
        title: "PRDS — Service de nettoyage",
        desc: "Service de nettoyage avec réservation en ligne et gestion des interventions.",
      },
    },
  },
  {
    id: "web2app",
    image: portfolioWeb9,
    url: "https://web2app.fr",
    tech: ["Next.js"],
    categories: ["web", "vitrine"],
    translations: {
      en: {
        title: "Web2App — App factory",
        desc: "Marketing site presenting a service that converts websites into apps.",
      },
      fr: {
        title: "Web2App — Service numérique",
        desc: "Site vitrine présentant la transformation de sites en applications mobiles.",
      },
    },
  },
  {
    id: "courteauBackoffice",
    image: portfolioWeb10,
    url: "https://lecourteau.com",
    tech: ["Next.js"],
    categories: ["web", "backoffice"],
    translations: {
      en: {
        title: "Courteau — Operations backoffice",
        desc: "Internal tool to manage menus, orders and fulfilment for the restaurant.",
      },
      fr: {
        title: "Courteau — Backoffice métier",
        desc: "Backoffice pour gérer menus, commandes et préparation du restaurant.",
      },
    },
  },
  {
    id: "courteauApp",
    image: portfolioMob3,
    url: "https://lecourteau.com",
    tech: ["React Native"],
    categories: ["mobile", "ecommerce"],
    translations: {
      en: {
        title: "Courteau — Mobile ordering app",
        desc: "iOS/Android app with dynamic menu, notifications and loyalty features.",
      },
      fr: {
        title: "Courteau — Application mobile",
        desc: "Application iOS/Android : menu dynamique, notifications et fidélisation.",
      },
    },
  },
  {
    id: "01100",
    image: portfolioMob1,
    url: "https://01100.fr",
    tech: ["React Native"],
    categories: ["mobile", "ecommerce"],
    translations: {
      en: {
        title: "01100 — B2B platform",
        desc: "Mobile app to match B2B companies and manage collaborations.",
      },
      fr: {
        title: "01100",
        desc: "Application mobile pour connecter des entreprises B2B.",
      },
    },
  },
  {
    id: "syrma",
    image: portfolioMob2,
    url: "#",
    tech: ["React Native"],
    categories: ["mobile"],
    translations: {
      en: {
        title: "Syrma — Solar monitoring",
        desc: "Mobile app to monitor solar energy production in real time.",
      },
      fr: {
        title: "Syrma",
        desc: "Application pour suivre la production d'énergie solaire.",
      },
    },
  },
  {
    id: "sakyn",
    image: portfolioMob4,
    url: "#",
    tech: ["React Native"],
    categories: ["mobile", "AI"],
    translations: {
      en: {
        title: "Sakyn — Wellness app",
        desc: "Mindfulness exercises, notifications and analytics within a mobile app.",
      },
      fr: {
        title: "Sakyn — App bien-être",
        desc: "Application mobile d'exercices psychologiques avec notifications et analytics.",
      },
    },
  },
];

const gridCopy = {
  en: {
    title: "Delivered projects",
    subtitle:
      "A snapshot of our work: web, mobile, showcase, e-commerce and backoffice solutions.",
    cta: "Discuss your project",
  },
  fr: {
    title: "Projets réalisés",
    subtitle:
      "Un aperçu de nos travaux : web, mobile, vitrine, e-commerce et backoffice.",
    cta: "Discuter de votre projet",
  },
};

const FILTERS = [
  "all",
  "web",
  "mobile",
  "vitrine",
  "ecommerce",
  "backoffice",
  "AI",
];

const CATEGORY_LABELS = {
  en: {
    all: "All",
    web: "Web",
    mobile: "Mobile",
    vitrine: "Showcase",
    ecommerce: "E-commerce",
    backoffice: "Backoffice",
    AI: "AI",
    other: "Other",
  },
  fr: {
    all: "Tous",
    web: "Web",
    mobile: "Mobile",
    vitrine: "Vitrine",
    ecommerce: "E-commerce",
    backoffice: "Backoffice",
    AI: "IA",
    other: "Autre",
  },
};

export default function PortfolioGrid({ locale = defaultLocale }) {
  const [active, setActive] = useState("all");
  const labels = CATEGORY_LABELS[locale] || CATEGORY_LABELS.en;
  const copy = gridCopy[locale] || gridCopy.en;

  // Lis l’ancre pour activer auto le filtre (#web, #mobile, …)
  useEffect(() => {
    const hash =
      (typeof window !== "undefined" && window.location.hash?.slice(1)) || "";
    if (!hash) return;
    const match = FILTERS.find((key) => key === hash.toLowerCase());
    if (match) setActive(match);
  }, []);

  const filtered = useMemo(() => {
    if (active === "all") return DATA;
    return DATA.filter((p) => p.categories.includes(active));
  }, [active]);

  return (
    <section id="portfolio" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Titre */}
        <div className="w-full text-center flex flex-col items-center mb-10">
          <h2 className="font-inter text-white font-semibold lg:text-4xl text-center text-xl">
            {copy.title}
            <div className="titleUnderline" />
          </h2>
          <p className="font-inter font-normal text-white text-opacity-60 mt-6 leading-relaxed lg:text-2xl text-base">
            {copy.subtitle}
          </p>
        </div>

        {/* Filtres */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {FILTERS.map((key) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={[
                "px-4 py-2 rounded-full text-sm font-medium transition border",
                active === key
                  ? "bg-pr text-white border-transparent"
                  : "bg-transparent text-white/70 border-white/20 hover:text-white",
              ].join(" ")}
            >
              {labels[key]}
            </button>
          ))}
        </div>

        {/* Grille */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {filtered.map((p) => {
            const translation =
              p.translations[locale] || p.translations.fr || p.translations.en;
            return (
              <article key={p.id} className={styles.container}>
                <Image
                  className="w-full h-64 object-cover rounded-2xl"
                  src={p.image}
                  alt={translation.title}
                  width={600}
                  height={400}
                  priority={false}
                />
                <div className="p-8">
                  <div className="flex items-center flex-wrap gap-2 mb-4">
                    {p.categories.slice(0, 2).map((cat) => (
                      <span
                        key={cat}
                        className="bg-pr bg-opacity-10 text-pr px-3 py-1 rounded-full text-sm"
                      >
                        {labelFromKey(cat, locale)}
                      </span>
                    ))}
                    {p.tech?.[0] && (
                      <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                        {p.tech[0]}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">
                    {translation.title}
                  </h3>
                  <p className="text-white opacity-60 mb-6">
                    {translation.desc}
                  </p>

                  <Link
                    href={p.url || "#"}
                    target={p.url?.startsWith("http") ? "_blank" : undefined}
                    className="text-pr hover:text-blue-700 font-medium flex items-center gap-2"
                  >
                    <span>
                      {locale === "fr" ? "Voir le projet" : "View project"}
                    </span>
                    <FaArrowRightLong />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href={getLocalizedRoute(locale, "contact")}
            className="gradient-bg text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition"
          >
            {copy.cta}
          </Link>
        </div>
      </div>

      {/* Ancres invisibles pour activer les filtres via URL */}
      <div id="all" className="sr-only" aria-hidden="true" />
      <div id="web" className="sr-only" aria-hidden="true" />
      <div id="mobile" className="sr-only" aria-hidden="true" />
      <div id="vitrine" className="sr-only" aria-hidden="true" />
      <div id="ecommerce" className="sr-only" aria-hidden="true" />
      <div id="backoffice" className="sr-only" aria-hidden="true" />
      <div id="AI" className="sr-only" aria-hidden="true" />
    </section>
  );
}

function labelFromKey(key, locale) {
  const labels = CATEGORY_LABELS[locale] || CATEGORY_LABELS.en;
  return labels[key] || labels.other;
}
