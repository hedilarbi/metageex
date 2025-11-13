import Image from "next/image";
import React from "react";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import styles from "./FeatureCard.module.css";
import portfolioWeb1 from "@public/images/portfolioWeb1.png";
import portfolioWeb5 from "@public/images/portfolioWeb5.png";
import portfolioWeb4 from "@public/images/portfolioWeb4.png";
import { defaultLocale } from "@/lib/i18n";
import { getLocalizedRoute } from "@/lib/localePath";

const cards = {
  en: [
    {
      image: portfolioWeb1,
      category: "E-commerce",
      stack: "Next.js",
      title: "Casse-croûte Courteau — Online restaurant",
      description:
        "Ordering platform with dynamic menu, online payments and operations dashboard.",
      url: "https://lecourteau.com",
    },
    {
      image: portfolioWeb5,
      category: "Backoffice",
      stack: "Next.js",
      title: "LeMegatoit — Ticketing backoffice",
      description:
        "Event and ticket management tool with secure payments and reporting.",
      url: "https://lemegatoit.com",
    },
    {
      image: portfolioWeb4,
      category: "E-commerce",
      stack: "PrestaShop",
      title: "Tuline Création — Online boutique",
      description:
        "Complete e-commerce experience with product catalogue, payments and fulfilment.",
      url: "https://tulinecreation.com",
    },
  ],
  fr: [
    {
      image: portfolioWeb1,
      category: "E-commerce",
      stack: "Next.js",
      title: "Casse-croûte Courteau — Restaurant en ligne",
      description:
        "Plateforme de commande avec menu dynamique, paiements en ligne et backoffice.",
      url: "https://lecourteau.com",
    },
    {
      image: portfolioWeb5,
      category: "Backoffice",
      stack: "Next.js",
      title: "LeMegatoit — Billetterie",
      description:
        "Backoffice de gestion d'événements avec paiements sécurisés et reporting.",
      url: "https://lemegatoit.com",
    },
    {
      image: portfolioWeb4,
      category: "E-commerce",
      stack: "PrestaShop",
      title: "Tuline Création — Boutique en ligne",
      description:
        "Solution e-commerce complète : catalogue, paiement sécurisé et suivi des commandes.",
      url: "https://tulinecreation.com",
    },
  ],
};

const copy = {
  en: {
    title: "Delivered projects",
    subtitle:
      "A few web platforms that showcase our ability to ship fast, elegant and powerful products.",
    cta: "See all projects",
  },
  fr: {
    title: "Projets réalisés",
    subtitle:
      "Quelques plateformes web qui illustrent notre capacité à livrer des produits élégants et performants.",
    cta: "Voir tous nos projets",
  },
};

const Portfolio = ({ locale = defaultLocale }) => {
  const texts = copy[locale] || copy[defaultLocale];
  const items = cards[locale] || cards[defaultLocale];

  return (
    <section id="portfolio" className="py-20 ">
      <div className="max-w-7xl mx-auto px-6">
        <div className="w-full text-center flex flex-col items-center mb-16">
          <h2 className="font-inter text-white font-semibold lg:text-4xl text-center text-xl">
            {texts.title}
            <div className="titleUnderline" />
          </h2>
          <p className="font-inter font-normal text-white text-opacity-60  mt-8 leading-relaxed lg:text-2xl text-base">
            {texts.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {items.map((item) => (
            <div key={item.title} className={styles.container}>
              <Image
                className="w-full h-64 object-cover rounded-2xl"
                src={item.image}
                alt={item.title}
                width={400}
                height={400}
              />
              <div className="p-8">
                <div className="flex items-center space-x-2 mb-4">
                  <span className="bg-pr bg-opacity-10 text-pr px-3 py-1 rounded-full text-sm">
                    {item.category}
                  </span>
                  <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                    {item.stack}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-white opacity-60 mb-6">{item.description}</p>

                <Link
                  href={item.url || "#"}
                  target={item.url?.startsWith("http") ? "_blank" : undefined}
                  className="text-pr hover:text-blue-700 font-medium flex items-center gap-2 "
                >
                  <span>
                    {locale === "fr" ? "Voir le projet" : "View project"}
                  </span>
                  <FaArrowRightLong />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href={`${getLocalizedRoute(locale, "portfolio")}#web`}
            className="gradient-bg text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition"
          >
            {texts.cta}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
