// components/mobileServicePage/MobileAppServicesSection.jsx

import Image from "next/image";
import React from "react";
import { FaCheck } from "react-icons/fa6";
import styles from "../../components/servicePage/FeatureCard.module.css";

// Réutilise une illustration si tu en as une pour le mobile (ex: servicesMobileDev.svg)
import productHero from "../../../public/images/productHero.svg";

const MobileAppServicesSection = () => {
  return (
    <section className="w-full relative font-inter py-10 md:py-20">
      <div className="productHero">
        <Image src={productHero} alt="mobile dev hero" />
      </div>
      <div className="productBlueRightElipse" />

      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="w-full h-full flex flex-col items-center">
          <h2 className="font-inter text-white font-semibold lg:text-4xl lg:text-left text-center text-xl">
            Nos Services de Développement Mobile
            <div className="titleUnderline" />
          </h2>

          <div className="flex flex-col lg:flex-row w-full lg:gap-10 gap-8 flex-1 lg:flex-wrap lg:justify-between lg:mt-20 mt-10 lg:px-12 px-6">
            {/* 1. Apps mobiles complètes */}
            <div className={styles.container}>
              <div className={styles.shadowCircle} />
              <h3 className="text-white font-inter font-semibold lg:text-lg text-base inline-block">
                Applications Mobiles Complètes
                <div className="h-1 w-full mt-2 bg-gradient-to-r from-[#57B3FE] to-[rgba(9,148,248,0)]" />
              </h3>
              <p className="font-inter font-normal text-white text-opacity-60 mt-8 leading-relaxed lg:text-base text-sm">
                Développement d&apos;apps iOS &amp; Android avec React
                Native/Expo, UX/UI soignée, performance et sécurité.
              </p>
              <ul className="mt-6 space-y-2">
                {[
                  "Architecture scalable (monorepo possible)",
                  "Authentification (email/OAuth/SSO)",
                  "Gestion d’état fiable",
                  "Navigation fluide & gestures",
                ].map((t) => (
                  <li
                    key={t}
                    className="flex items-center text-white font-inter font-normal gap-2"
                  >
                    <div className="text-pr">
                      <FaCheck />
                    </div>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 2. Fonctionnalités clés */}
            <div className={styles.container}>
              <div className={styles.shadowCircle} />
              <h3 className="text-white font-inter font-semibold lg:text-lg text-base inline-block">
                Fonctionnalités Clés
                <div className="h-1 w-full mt-2 bg-gradient-to-r from-[#57B3FE] to-[rgba(9,148,248,0)]" />
              </h3>
              <p className="font-inter font-normal text-white text-opacity-60 mt-8 leading-relaxed lg:text-base text-sm">
                Intégrations indispensables pour une app moderne et
                business-ready.
              </p>
              <ul className="mt-6 space-y-2">
                {[
                  "Notifications push & in-app",
                  "Paiements (Stripe, PayPal…) & abonnements",
                  "Chat/temps réel & WebSockets",
                  "Géolocalisation & cartes",
                ].map((t) => (
                  <li
                    key={t}
                    className="flex items-center text-white font-inter font-normal gap-2"
                  >
                    <div className="text-pr">
                      <FaCheck />
                    </div>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 3. Backend & données */}
            <div className={styles.container}>
              <div className={styles.shadowCircle} />
              <h3 className="text-white font-inter font-semibold lg:text-lg text-base inline-block">
                Backend & Données
                <div className="h-1 w-full mt-2 bg-gradient-to-r from-[#57B3FE] to-[rgba(9,148,248,0)]" />
              </h3>
              <p className="font-inter font-normal text-white text-opacity-60 mt-8 leading-relaxed lg:text-base text-sm">
                Backends robustes et temps réel selon vos besoins métier.
              </p>
              <ul className="mt-6 space-y-2">
                {[
                  "Node.js/Express, NestJS",
                  "Firebase/Supabase (Auth, DB, Storage)",
                  "MongoDB/SQL selon usage",
                  "APIs REST/GraphQL sécurisées",
                ].map((t) => (
                  <li
                    key={t}
                    className="flex items-center text-white font-inter font-normal gap-2"
                  >
                    <div className="text-pr">
                      <FaCheck />
                    </div>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 4. Qualité, build et publication */}
            <div className={styles.container}>
              <div className={styles.shadowCircle} />
              <h3 className="text-white font-inter font-semibold lg:text-lg text-base inline-block">
                Qualité, Build & Publication
                <div className="h-1 w-full mt-2 bg-gradient-to-r from-[#57B3FE] to-[rgba(9,148,248,0)]" />
              </h3>
              <p className="font-inter font-normal text-white text-opacity-60 mt-8 leading-relaxed lg:text-base text-sm">
                Du test au store : pipeline complet pour des releases fiables.
              </p>
              <ul className="mt-6 space-y-2">
                {[
                  "Tests (unitaires, e2e) & QA",
                  "CI/CD, EAS builds (Expo)",
                  "Conformité App Store/Play Store",
                  "Monitoring et crash reporting",
                ].map((t) => (
                  <li
                    key={t}
                    className="flex items-center text-white font-inter font-normal gap-2"
                  >
                    <div className="text-pr">
                      <FaCheck />
                    </div>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="/contact"
            className="gradient-bg text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition"
          >
            Discuter de votre application mobile
          </a>
        </div>
      </div>
    </section>
  );
};

export default MobileAppServicesSection;
