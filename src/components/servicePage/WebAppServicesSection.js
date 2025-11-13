import React from "react";
import Image from "next/image";
import { FaCheck } from "react-icons/fa6";
import productHero from "@public/images/productHero.svg";
import styles from "./FeatureCard.module.css";
import { defaultLocale } from "@/lib/i18n";

const content = {
  en: {
    title: "Our web development services",
    subtitle:
      "From full-stack platforms to bespoke tools, we deliver robust and scalable solutions tailored to your operations.",
    cards: [
      {
        title: "Full-stack web applications",
        description:
          "Modern interfaces paired with solid backends to cover dashboards, SaaS platforms and customer portals.",
        bullets: [
          "React/Next.js front-end",
          "Node.js/Python back-end",
          "Headless CMS (WordPress, Prismic)",
          "Optimised databases",
          "REST & GraphQL APIs",
        ],
      },
      {
        title: "E-commerce solutions",
        description:
          "Custom e-commerce experiences with secure payments, catalogue management and marketing automation.",
        bullets: [
          "Product catalogues",
          "Secure payments",
          "Order & logistics management",
          "Advanced analytics",
        ],
      },
      {
        title: "Business management systems",
        description:
          "Tailored CRM, ERP and internal tools to orchestrate your workflows and KPIs.",
        bullets: [
          "Custom CRM",
          "ERP integrations",
          "Real-time dashboards",
          "Process automation",
        ],
      },
      {
        title: "Cloud & DevOps",
        description:
          "Hosting, monitoring and CI/CD pipelines with high availability on AWS/GCP/Azure.",
        bullets: [
          "AWS & cloud deployments",
          "Auto-scaling infrastructure",
          "24/7 monitoring",
          "Automatic backups",
        ],
      },
    ],
  },
  fr: {
    title: "Nos services de développement web",
    subtitle:
      "Applications full-stack, outils métiers et plateformes web performantes, conçues pour vos objectifs.",
    cards: [
      {
        title: "Applications web complètes",
        description:
          "Interfaces modernes et backends robustes pour dashboards, SaaS et portails clients.",
        bullets: [
          "Frontend React/Next.js",
          "Backend Node.js/Python",
          "CMS headless",
          "Bases de données optimisées",
          "APIs REST & GraphQL",
        ],
      },
      {
        title: "Solutions e-commerce",
        description:
          "Boutiques en ligne sur mesure avec paiements sécurisés et gestion avancée.",
        bullets: [
          "Catalogues produits",
          "Paiements sécurisés",
          "Gestion des commandes",
          "Analytics avancées",
        ],
      },
      {
        title: "Systèmes de gestion métiers",
        description:
          "CRM, ERP et outils internes personnalisés pour piloter vos opérations.",
        bullets: [
          "CRM sur mesure",
          "Intégrations ERP",
          "Tableaux de bord",
          "Automatisation",
        ],
      },
      {
        title: "Cloud & DevOps",
        description:
          "Déploiements, monitoring et CI/CD haute disponibilité sur AWS/GCP/Azure.",
        bullets: [
          "Déploiements cloud",
          "Infrastructure auto-scalable",
          "Monitoring 24/7",
          "Sauvegardes automatiques",
        ],
      },
    ],
  },
};

const WebAppServicesSection = ({ locale = defaultLocale }) => {
  const copy = content[locale] || content[defaultLocale];

  return (
    <section className="w-full relative font-inter py-20 md:py-20">
      <div className="productHero">
        <Image src={productHero} alt="productHero" />
      </div>
      <div className="productBlueRightElipse" />
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="w-full h-full flex flex-col items-center">
          <h2 className="font-inter text-white font-semibold lg:text-4xl text-xl text-center">
            {copy.title}
            <div className="titleUnderline" />
          </h2>
          <p className="font-inter font-normal text-white text-opacity-60 mt-8 leading-relaxed lg:text-2xl text-base text-center lg:w-3/4 px-6">
            {copy.subtitle}
          </p>

          <div className="flex flex-col lg:flex-row w-full lg:gap-10 gap-8 lg:flex-wrap lg:justify-between lg:mt-20 mt-10 lg:px-12 px-6">
            {copy.cards.map((card) => (
              <div key={card.title} className={styles.container}>
                <div className={styles.shadowCircle} />
                <h3 className="text-white font-inter font-semibold lg:text-lg text-base inline-block">
                  {card.title}
                  <div className="h-1 w-full mt-2 bg-gradient-to-r from-[#57B3FE] to-[rgba(9,148,248,0)]" />
                </h3>
                <p className="font-inter font-normal text-white text-opacity-60 mt-8 leading-relaxed lg:text-base text-sm">
                  {card.description}
                </p>
                <ul className="mt-6 space-y-2">
                  {card.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-center text-white font-inter font-normal gap-2"
                    >
                      <div className="text-pr">
                        <FaCheck />
                      </div>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebAppServicesSection;
