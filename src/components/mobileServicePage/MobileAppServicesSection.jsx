// components/mobileServicePage/MobileAppServicesSection.jsx

import Image from "next/image";
import React from "react";
import { FaCheck } from "react-icons/fa6";
import Link from "next/link";
import styles from "@/components/servicePage/FeatureCard.module.css";
import productHero from "@public/images/productHero.svg";
import { defaultLocale } from "@/lib/i18n";
import { getLocalizedRoute } from "@/lib/localePath";

const servicesCopy = {
  en: {
    title: "Mobile development services",
    cards: [
      {
        title: "End-to-end mobile apps",
        description:
          "React Native/Expo apps for iOS & Android with polished UX/UI, performance and security.",
        bullets: [
          "Scalable architecture (mono-repo ready)",
          "Authentication (email, OAuth, SSO)",
          "Reliable state management",
          "Smooth navigation & gestures",
        ],
      },
      {
        title: "Core features",
        description:
          "Integrations you expect from a production-ready mobile product.",
        bullets: [
          "Push & in-app notifications",
          "Payments/subscriptions",
          "Chat & realtime features",
          "Geolocation & mapping",
        ],
      },
      {
        title: "Backends & data",
        description:
          "Robust backends, realtime services and integrations tailored to your business logic.",
        bullets: [
          "Node.js/NestJS APIs",
          "Firebase/Supabase (Auth, DB, Storage)",
          "MongoDB/SQL as needed",
          "REST/GraphQL endpoints",
        ],
      },
      {
        title: "Quality & store release",
        description:
          "Testing, build pipelines and store compliance until your app is live.",
        bullets: [
          "Unit & end-to-end tests",
          "CI/CD & Expo Application Services",
          "App Store / Play Store compliance",
          "Monitoring & crash reporting",
        ],
      },
    ],
    cta: "Discuss your mobile app",
  },
  fr: {
    title: "Nos services de développement mobile",
    cards: [
      {
        title: "Applications mobiles complètes",
        description:
          "Apps React Native/Expo iOS & Android avec UX/UI soignée, performance et sécurité.",
        bullets: [
          "Architecture scalable (monorepo)",
          "Authentification (email/OAuth/SSO)",
          "Gestion d’état fiable",
          "Navigation fluide & gestures",
        ],
      },
      {
        title: "Fonctionnalités clés",
        description:
          "Les intégrations indispensables pour une application prête pour le marché.",
        bullets: [
          "Notifications push & in-app",
          "Paiements/abonnements",
          "Chat & temps réel",
          "Géolocalisation & cartes",
        ],
      },
      {
        title: "Backend & données",
        description:
          "Backends robustes et services temps réel alignés sur vos besoins métiers.",
        bullets: [
          "APIs Node.js/NestJS",
          "Firebase/Supabase (Auth, DB, Storage)",
          "MongoDB/SQL selon usage",
          "APIs REST/GraphQL sécurisées",
        ],
      },
      {
        title: "Qualité, build & publication",
        description:
          "Pipeline complet du test au store pour des releases fiables.",
        bullets: [
          "Tests (unitaires, e2e) & QA",
          "CI/CD & builds EAS",
          "Conformité App Store/Play Store",
          "Monitoring & crash reporting",
        ],
      },
    ],
    cta: "Discuter de votre application mobile",
  },
};

const MobileAppServicesSection = ({ locale = defaultLocale }) => {
  const copy = servicesCopy[locale] || servicesCopy[defaultLocale];

  return (
    <section className="w-full relative font-inter py-10 md:py-20">
      <div className="productHero">
        <Image src={productHero} alt="mobile dev hero" />
      </div>
      <div className="productBlueRightElipse" />

      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="w-full h-full flex flex-col items-center">
          <h2 className="font-inter text-white font-semibold lg:text-4xl lg:text-left text-center text-xl">
            {copy.title}
            <div className="titleUnderline" />
          </h2>

          <div className="flex flex-col lg:flex-row w-full lg:gap-10 gap-8 flex-1 lg:flex-wrap lg:justify-between lg:mt-20 mt-10 lg:px-12 px-6">
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

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href={getLocalizedRoute(locale, "contact")}
            className="gradient-bg text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition"
          >
            {copy.cta}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MobileAppServicesSection;
