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
import playsdepotImg from "@public/images/playsdepot.png";
import aresImg from "@public/images/ares.png";
import majesticImg from "@public/images/majestic.png";
import sorelhImg from "@public/images/sorelh.png";
import secondechanceImg from "@public/images/secondechance.png";
import hyundaiImg from "@public/images/hyundai.png";
import baitaImg from "@public/images/baita.png";
import le1000Img from "@public/images/le1000.png";
import piccoloImg from "@public/images/piccolo-site.png";
import dealautoproImg from "@public/images/dealautopro.png";
import mcImg from "@public/images/MC.png";
import bsr3rImg from "@public/images/bsr3r.png";
import { defaultLocale } from "@/lib/i18n";
import { getLocalizedRoute } from "@/lib/localePath";
// Exemple images mobiles si tu en as :
// import portfolioMobile1 from "@/public/images/portfolioMobile1.png";

const DATA = [
  {
    id: "playsdepot",
    image: playsdepotImg,
    url: "https://www.playsdepot.com",
    tech: ["Next.js"],
    categories: ["web", "ecommerce"],
    translations: {
      en: {
        title: "Playsdepot — Game recharge cards",
        desc: "Online platform for selling game recharge cards.",
      },
      fr: {
        title: "Playsdepot — Cartes de recharge",
        desc: "Plateforme e-commerce de vente de cartes de recharge de jeux vidéo.",
      },
    },
  },
  {
    id: "ares",
    image: aresImg,
    url: "https://ares-sportswear.com",
    tech: ["WordPress"],
    categories: ["web", "ecommerce"],
    translations: {
      en: {
        title: "Ares — Sportswear & accessories",
        desc: "Online boutique offering premium sportswear and accessories.",
      },
      fr: {
        title: "Ares — Vêtements & accessoires de sport",
        desc: "Boutique e-commerce de vêtements et d'accessoires de sport.",
      },
    },
  },
  {
    id: "majestic",
    image: majesticImg,
    url: "https://majestic-bizerte.tn",
    tech: ["Next.js"],
    categories: ["web", "ecommerce"],
    translations: {
      en: {
        title: "Le Majestic — Cinema ticketing",
        desc: "Online ticketing platform for a cinema with secure payments.",
      },
      fr: {
        title: "Le Majestic — Billetterie de cinéma",
        desc: "Plateforme e-commerce de réservation et billetterie en ligne pour un cinéma.",
      },
    },
  },
  {
    id: "sorelh",
    image: sorelhImg,
    url: "https://maison-sorelh.com",
    tech: ["PrestaShop"],
    categories: ["web", "ecommerce"],
    translations: {
      en: {
        title: "Maison Sorelh — Furniture store",
        desc: "Online boutique specialized in furniture and home decor.",
      },
      fr: {
        title: "Maison Sorelh — Vente de meubles",
        desc: "Boutique e-commerce spécialisée dans la vente de meubles et décoration.",
      },
    },
  },
  {
    id: "secondechance",
    image: secondechanceImg,
    url: "https://unesecondechance.fr",
    tech: ["PrestaShop"],
    categories: ["web", "ecommerce"],
    translations: {
      en: {
        title: "Une Seconde Chance — Furniture store",
        desc: "E-commerce platform specialized in furniture.",
      },
      fr: {
        title: "Une Seconde Chance — Vente de meubles",
        desc: "Site e-commerce spécialisé dans la vente de meubles.",
      },
    },
  },
  {
    id: "hyundai",
    image: hyundaiImg,
    url: "https://hyundai-electronics.fr",
    tech: ["PrestaShop"],
    categories: ["web", "ecommerce"],
    translations: {
      en: {
        title: "Hyundai Electronics — Home appliances",
        desc: "E-commerce platform specialized in home appliances.",
      },
      fr: {
        title: "Hyundai Electronics — Électroménager",
        desc: "Site e-commerce de vente d'électroménager.",
      },
    },
  },
  {
    id: "baita",
    image: baitaImg,
    url: "https://www.baita-home.com",
    tech: ["PrestaShop"],
    categories: ["web", "ecommerce"],
    translations: {
      en: {
        title: "Baita Home — Furniture store",
        desc: "Online boutique specialized in furniture sales.",
      },
      fr: {
        title: "Baita Home — Vente de meubles",
        desc: "Site e-commerce spécialisé dans la vente de meubles.",
      },
    },
  },
  {
    id: "le1000",
    image: le1000Img,
    url: "https://le1000-one.vercel.app",
    tech: ["Next.js"],
    categories: ["web", "vitrine"],
    translations: {
      en: {
        title: "Le 1000 — Resto Bar Relais",
        desc: "Showcase website for a restaurant and bar (In development).",
      },
      fr: {
        title: "Le 1000 — Resto Bar Relais",
        desc: "Site vitrine pour un restaurant et bar relais (En cours de développement).",
      },
    },
  },
  {
    id: "piccolo",
    image: piccoloImg,
    url: "https://piccolo-opal.vercel.app",
    tech: ["Next.js"],
    categories: ["web"],
    translations: {
      en: {
        title: "Piccolo Teatro — Cultural art space",
        desc: "Web application for an art and cultural space (In development).",
      },
      fr: {
        title: "Piccolo Teatro — Espace culturel",
        desc: "Application web pour un espace culturel et artistique (En cours de développement).",
      },
    },
  },
  {
    id: "dealautopro",
    image: dealautoproImg,
    url: "https://dat-client.vercel.app/en",
    tech: ["Next.js"],
    categories: ["web", "ecommerce"],
    translations: {
      en: {
        title: "DealAutoPro — B2B Car Sales",
        desc: "B2B e-commerce platform for damaged cars (In development).",
      },
      fr: {
        title: "DealAutoPro — Vente auto B2B",
        desc: "Plateforme e-commerce B2B de vente de voitures accidentées (En cours de développement).",
      },
    },
  },
  {
    id: "muslimconnect",
    image: mcImg,
    url: "#",
    tech: ["Flutter"],
    categories: ["mobile"],
    translations: {
      en: {
        title: "Muslim Connect — Muslim app",
        desc: "Mobile application dedicated to the Muslim community.",
      },
      fr: {
        title: "Muslim Connect — Application musulmane",
        desc: "Application mobile dédiée à la communauté musulmane.",
      },
    },
  },
  {
    id: "bsr3r",
    image: bsr3rImg,
    url: "https://bsr3r.com",
    tech: ["Next.js"],
    categories: ["web", "ecommerce"],
    translations: {
      en: {
        title: "BSR3R — Hockey team ticketing",
        desc: "Online ticketing and e-commerce platform for a hockey team.",
      },
      fr: {
        title: "BSR3R — Billetterie de hockey",
        desc: "Plateforme e-commerce et de billetterie en ligne pour une équipe de hockey.",
      },
    },
  },
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
    <section id="portfolio" className="py-20 bg-[#050A0F]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="w-full text-center flex flex-col items-center mb-16">
          <h2 className="font-inter text-white font-bold lg:text-4xl text-3xl text-center tracking-tight">
            {copy.title}
            <div className="titleUnderline mt-2" />
          </h2>
          <p className="font-inter font-light text-white/60 mt-6 leading-relaxed lg:text-xl text-base max-w-2xl">
            {copy.subtitle}
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
          {FILTERS.map((key) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={[
                "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border",
                active === key
                  ? "bg-pr text-[#050A0F] border-pr shadow-[0_0_15px_rgba(107,193,255,0.4)]"
                  : "bg-white/5 text-white/70 border-white/10 hover:text-white hover:border-white/30 hover:bg-white/10",
              ].join(" ")}
            >
              {labels[key]}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-20">
          {filtered.map((p) => {
            const translation =
              p.translations[locale] || p.translations.fr || p.translations.en;
            return (
              <article 
                key={p.id} 
                className="group flex flex-col bg-[#08101A] border border-white/5 rounded-3xl overflow-hidden transition-all duration-500 hover:border-pr/50 hover:shadow-[0_0_30px_rgba(107,193,255,0.1)] hover:-translate-y-2"
              >
                <div className="w-full h-64 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08101A] via-transparent to-transparent z-10 opacity-60" />
                  <Image
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src={p.image}
                    alt={translation.title}
                    width={600}
                    height={400}
                    priority={false}
                  />
                </div>
                
                <div className="p-8 flex flex-col flex-grow relative z-20 -mt-6">
                  <div className="flex items-center flex-wrap gap-2 mb-5">
                    {p.categories.slice(0, 2).map((cat) => (
                      <span
                        key={cat}
                        className="bg-pr/10 text-pr border border-pr/20 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider"
                      >
                        {labelFromKey(cat, locale)}
                      </span>
                    ))}
                    {p.tech?.[0] && (
                      <span className="bg-white/5 text-white/70 border border-white/10 px-3 py-1 rounded-full text-xs font-medium">
                        {p.tech[0]}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-pr transition-colors">
                    {translation.title}
                  </h3>
                  <p className="text-white/60 font-light text-sm leading-relaxed mb-8 flex-grow">
                    {translation.desc}
                  </p>

                  <Link
                    href={p.url || "#"}
                    target={p.url?.startsWith("http") ? "_blank" : undefined}
                    className="inline-flex items-center gap-2 text-pr font-medium text-sm hover:text-white transition-colors mt-auto w-fit"
                  >
                    <span>
                      {locale === "fr" ? "View Project" : "View project"}
                    </span>
                    <FaArrowRightLong className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>

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
