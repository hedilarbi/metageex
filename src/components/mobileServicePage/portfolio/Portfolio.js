import Image from "next/image";
import React from "react";
import Link from "next/link";
import styles from "./FeatureCard.module.css";
import portfolioMob1 from "@public/images/portfolioMob1.png";
import portfolioMob2 from "@public/images/portfolioMob2.png";
import portfolioMob3 from "@public/images/portfolioMob3.png";
import { defaultLocale } from "@/lib/i18n";
import { getLocalizedRoute } from "@/lib/localePath";

const content = {
  en: {
    title: "Mobile case studies",
    subtitle:
      "Here are a few native-quality apps that show how we handle UX, realtime features and operations.",
    items: [
      {
        title: "01100 — B2B marketplace",
        description:
          "React Native marketplace to source and manage B2B collaborations.",
        stack: "React Native",
        image: portfolioMob1,
      },
      {
        title: "Syrma — Solar monitoring",
        description:
          "Monitoring app that tracks solar panel output in real time.",
        stack: "React Native",
        image: portfolioMob2,
      },
      {
        title: "Courteau — Ordering app",
        description:
          "Mobile ordering experience with notifications and loyalty features.",
        stack: "React Native",
        image: portfolioMob3,
      },
    ],
    cta: "See more projects",
  },
  fr: {
    title: "Projets mobiles réalisés",
    subtitle:
      "Quelques applications natives/hybrides illustrant notre expertise UX, temps réel et opérations.",
    items: [
      {
        title: "01100 — Marketplace B2B",
        description:
          "Application React Native pour mettre en relation des entreprises B2B.",
        stack: "React Native",
        image: portfolioMob1,
      },
      {
        title: "Syrma — Monitoring solaire",
        description:
          "Application qui suit en temps réel les performances de panneaux solaires.",
        stack: "React Native",
        image: portfolioMob2,
      },
      {
        title: "Courteau — App de commande",
        description:
          "Expérience de commande mobile avec notifications et fidélisation.",
        stack: "React Native",
        image: portfolioMob3,
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
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href={`${getLocalizedRoute(locale, "portfolio")}#mobile`}
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
