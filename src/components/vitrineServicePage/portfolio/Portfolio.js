import Image from "next/image";
import React from "react";
import Link from "next/link";
import styles from "./FeatureCard.module.css";
import portfolioWeb2 from "@public/images/portfolioWeb2.png";
import portfolioWeb6 from "@public/images/portfolioWeb6.png";
import portfolioWeb7 from "@public/images/portfolioWeb7.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { defaultLocale } from "@/lib/i18n";
import { getLocalizedRoute } from "@/lib/localePath";

const content = {
  en: {
    title: "Showcase websites we’ve shipped",
    subtitle:
      "Each site is tailored to the brand, SEO-friendly and optimised for conversions.",
    items: [
      {
        image: portfolioWeb2,
        stack: "WordPress",
        title: "Neutralivie",
        description: "Showcase site for a wealth management firm.",
        url: "https://neutralivie.fr",
      },
      {
        image: portfolioWeb6,
        stack: "WordPress",
        title: "PRDS",
        description: "Corporate site for a cleaning services company.",
        url: "https://prds-service.com",
      },
      {
        image: portfolioWeb7,
        stack: "WordPress",
        title: "Westmount Limousines",
        description: "Luxury transportation service website with booking CTA.",
        url: "https://www.westmountlimousines.com",
      },
    ],
    cta: "See more projects",
  },
  fr: {
    title: "Sites vitrines réalisés",
    subtitle:
      "Chaque site est conçu sur mesure, optimisé SEO et pensé pour convertir vos visiteurs.",
    items: [
      {
        image: portfolioWeb2,
        stack: "WordPress",
        title: "Neutralivie",
        description: "Site vitrine pour un cabinet de gestion de patrimoine.",
        url: "https://neutralivie.fr",
      },
      {
        image: portfolioWeb6,
        stack: "WordPress",
        title: "PRDS",
        description: "Site corporate pour une société de nettoyage.",
        url: "https://prds-service.com",
      },
      {
        image: portfolioWeb7,
        stack: "WordPress",
        title: "Westmount Limousine",
        description: "Site vitrine pour un service de transport haut de gamme.",
        url: "https://www.westmountlimousines.com",
      },
    ],
    cta: "Voir tous nos projets",
  },
};

const Portfolio = ({ locale = defaultLocale }) => {
  const copy = content[locale] || content[defaultLocale];

  return (
    <section id="portfolio" className="py-20 ">
      <div className="max-w-7xl mx-auto px-6">
        <div className="w-full text-center flex flex-col items-center mb-16">
          <h2 className="font-inter text-white font-semibold lg:text-4xl text-center text-xl">
            {copy.title}
            <div className="titleUnderline" />
          </h2>
          <p className="font-inter font-normal text-white text-opacity-60  mt-8 leading-relaxed lg:text-2xl text-base">
            {copy.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {copy.items.map((item) => (
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
                  <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                    {item.stack}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-white opacity-60 mb-6">
                  {item.description}
                </p>
                <Link
                  href={item.url}
                  target="_blank"
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
            href={`${getLocalizedRoute(locale, "portfolio")}#vitrine`}
            className="gradient-bg text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition"
          >
            {copy.cta}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
