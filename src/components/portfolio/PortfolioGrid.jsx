// components/portfolio/PortfolioGrid.jsx
"use client";
import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

// ⚠️ Réutilise le même style de card que ton composant existant
import styles from "../../components/servicePage/portfolio/FeatureCard.module.css";

// ---- Images existantes (tu peux en ajouter d'autres) ----
import portfolioWeb1 from "../../../public/images/portfolioWeb1.png";
import portfolioWeb2 from "../../../public/images/portfolioWeb2.png";
import portfolioWeb3 from "../../../public/images/portfolioWeb3.png";
import portfolioWeb4 from "../../../public/images/portfolioWeb4.png";
import portfolioWeb5 from "../../../public/images/portfolioWeb5.png";
import portfolioWeb6 from "../../../public/images/portfolioWeb6.png";
import portfolioWeb7 from "../../../public/images/portfolioWeb7.png";
import portfolioWeb8 from "../../../public/images/portfolioWeb8.png";
import portfolioWeb9 from "../../../public/images/portfolioWeb9.png";
import portfolioWeb10 from "../../../public/images/portfolioWeb10.png";
import portfolioMob3 from "../../../public/images/portfolioMob3.png";
import portfolioMob2 from "../../../public/images/portfolioMob2.png";
import portfolioMob1 from "../../../public/images/portfolioMob1.png";
import portfolioMob4 from "../../../public/images/portfolioMob4.png";
// Exemple images mobiles si tu en as :
// import portfolioMobile1 from "@/public/images/portfolioMobile1.png";

const DATA = [
  {
    id: "courteau",
    title: "Casse-croûte Courteau — Restaurant en Ligne",
    desc: "Plateforme e-commerce pour restaurant : commande en ligne, menu dynamique, backoffice.",
    url: "https://lecourteau.com",
    image: portfolioWeb1,
    tech: ["Next.js"],
    categories: ["web", "ecommerce"],
  },
  {
    id: "megatoit",
    title: "LeMegaToit — Billetterie en ligne",
    desc: "Backoffice de billetterie : événements, gestion des tickets, paiements sécurisés.",
    url: "https://lemegatoit.com",
    image: portfolioWeb5,
    tech: ["Next.js"],
    categories: ["web", "backoffice"],
  },
  {
    id: "tuline",
    title: "Tuline Création — Boutique en ligne",
    desc: "E-commerce complet : catalogue produits, paiement en ligne, suivi des commandes.",
    url: "https://tulinecreation.com",
    image: portfolioWeb4,
    tech: ["PrestaShop"],
    categories: ["web", "ecommerce"],
  },
  {
    id: "westmount",
    title: "Westmount Limousines — Location de véhicules",
    desc: "Site vitrine + réservation en ligne pour une agence de limousines haut de gamme.",
    url: "https://www.westmountlimousines.com",
    image: portfolioWeb7,
    tech: ["Wordpress"],
    categories: ["web", "vitrine"],
  },
  {
    id: "daisy",
    title: "Daisy Store — Boutique en ligne",
    desc: "E-commerce complet : catalogue produits, paiement en ligne, suivi des commandes.",
    url: "https://www.daisystore.tn",
    image: portfolioWeb8,
    tech: ["PrestaShop"],
    categories: ["web", "ecommerce"],
  },
  {
    id: "neutralivie",
    title: "Neutralivie — Cabinet de gestion de patrimoine",
    desc: "Site vitrine pour un cabinet de gestion de patrimoine et conseils financiers.",
    url: "https://www.neutralivie.fr",
    image: portfolioWeb2,
    tech: ["Wordpress"],
    categories: ["web", "vitrine"],
  },
  {
    id: "lemegatoit",
    title: "Megatoit — Billetterie en ligne",
    desc: "Billetterie en ligne avec gestion des événements, tickets et paiements sécurisés.",
    url: "https://www.lemegatoit.com",
    image: portfolioWeb3,
    tech: ["Next.js"],
    categories: ["web", "ecommerce"],
  },
  {
    id: "prds",
    title: "Prds — Service de nettoyage",
    desc: "Service de nettoyage avec réservation en ligne et gestion des interventions.",
    url: "https://prds-service.com",
    image: portfolioWeb6,
    tech: ["Wordpress"],
    categories: ["web", "vitrine"],
  },
  {
    id: "web2app",
    title: "Web2App — Service de nettoyage",
    desc: "Transformation de sites web en applications mobiles iOS/Android.",
    url: "https://web2app.fr",
    image: portfolioWeb9,
    tech: ["PrestaShop"],
    categories: ["web", "vitrine"],
  },
  {
    id: "Lecourteau",
    title: "Casse-croûte Courteau — Restaurant en Ligne",
    desc: "Backoffice d'un systeme de commande en ligne avec gestion du menu et des commandes.",
    url: "https://lecourteau.com",
    image: portfolioWeb10,
    tech: ["Next.js"],
    categories: ["web", "backoffice"],
  },
  {
    id: "courteauApp",
    title: "Casse-croûte Courteau — Restaurant en Ligne",
    desc: "Application mobile IOS/Android commande en ligne avec menu dynamique et notifications.",
    url: "https://lecourteau.com",
    image: portfolioMob3,
    tech: ["React Native"],
    categories: ["mobile", "ecommerce"],
  },
  {
    id: "01100",
    title: "01100",
    desc: "App pour retrouver des B2B",
    url: "https://01100.fr",
    image: portfolioMob1,
    tech: ["React Native"],
    categories: ["mobile", "ecommerce"],
  },
  {
    id: "syrma",
    title: "Syrma",
    desc: "App pour suivre la génération d'énergie solaire",
    url: "#",
    image: portfolioMob2,
    tech: ["React Native"],
    categories: ["mobile"],
  },
  {
    id: "sakyn",
    title: "Sakyn — App bien-être",
    desc: "Application mobile iOS/Android d'exercices psychologiques avec notifications et analytics.",
    url: "#",
    image: portfolioMob4,
    tech: ["React Native"],
    categories: ["mobile", "AI"],
  },
  // Exemple mobile (décommente si tu as une image)
  // {
  //   id: "sakyn",
  //   title: "Sakyn — App bien-être",
  //   desc: "Application mobile iOS/Android (Expo) : exercices, notifications, analytics.",
  //   url: "#",
  //   image: portfolioMobile1,
  //   tech: ["React Native", "Expo"],
  //   categories: ["mobile"],
  // },
];

const CATEGORIES = [
  { key: "all", label: "Tous" },
  { key: "web", label: "Web" },
  { key: "mobile", label: "Mobile" },
  { key: "vitrine", label: "Vitrine" },
  { key: "ecommerce", label: "E-commerce" },
  { key: "backoffice", label: "Backoffice" },
  { key: "AI", label: "AI" },
];

export default function PortfolioGrid() {
  const [active, setActive] = useState("all");

  // Lis l’ancre pour activer auto le filtre (#web, #mobile, …)
  useEffect(() => {
    const hash =
      (typeof window !== "undefined" && window.location.hash?.slice(1)) || "";
    if (!hash) return;
    const match = CATEGORIES.find((c) => c.key === hash.toLowerCase());
    if (match) setActive(match.key);
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
            Projets Réalisés
            <div className="titleUnderline" />
          </h2>
          <p className="font-inter font-normal text-white text-opacity-60 mt-6 leading-relaxed lg:text-2xl text-base">
            Un aperçu de nos travaux : web, mobile, vitrine, e-commerce et
            backoffice.
          </p>
        </div>

        {/* Filtres */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {CATEGORIES.map((c) => (
            <button
              key={c.key}
              onClick={() => setActive(c.key)}
              className={[
                "px-4 py-2 rounded-full text-sm font-medium transition border",
                active === c.key
                  ? "bg-pr text-white border-transparent"
                  : "bg-transparent text-white/70 border-white/20 hover:text-white",
              ].join(" ")}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Grille */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {filtered.map((p) => (
            <article key={p.id} className={styles.container}>
              <Image
                className="w-full h-64 object-cover rounded-2xl"
                src={p.image}
                alt={p.title}
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
                      {labelFromKey(cat)}
                    </span>
                  ))}
                  {p.tech?.[0] && (
                    <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                      {p.tech[0]}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{p.title}</h3>
                <p className="text-white opacity-60 mb-6">{p.desc}</p>

                <Link
                  href={p.url || "#"}
                  target={p.url?.startsWith("http") ? "_blank" : undefined}
                  className="text-pr hover:text-blue-700 font-medium flex items-center gap-2"
                >
                  <span>Voir le projet</span>
                  <FaArrowRightLong />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/contact"
            className="gradient-bg text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition"
          >
            Discuter de votre projet
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
    </section>
  );
}

function labelFromKey(key) {
  switch (key) {
    case "web":
      return "Web";
    case "mobile":
      return "Mobile";
    case "vitrine":
      return "Vitrine";
    case "ecommerce":
      return "E-commerce";
    case "backoffice":
      return "Backoffice";
    case "AI":
      return "AI";
    default:
      return "Autre";
  }
}
