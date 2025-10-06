import Image from "next/image";
import React from "react";
import portfolioMob1 from "../../../../public/images/portfolioMob1.png";
import portfolioMob2 from "../../../../public/images/portfolioMob2.png";
import portfolioMob3 from "../../../../public/images/portfolioMob3.png";

import Link from "next/link";

import styles from "./FeatureCard.module.css";
const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 ">
      <div className="max-w-7xl mx-auto px-6">
        <div className="w-full text-center flex flex-col items-center mb-16">
          <h2 className="font-inter text-white font-semibold lg:text-4xl text-center text-xl">
            Projets Réalisés
            <div className="titleUnderline" />
          </h2>
          <p className="font-inter font-normal text-white text-opacity-60  mt-8 leading-relaxed lg:text-2xl text-base">
            Découvrez quelques-unes de nos réalisations qui illustrent notre
            expertise et notre capacité d&apos;innovation
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className={styles.container}>
            <Image
              className="w-full h-64 object-cover rounded-2xl"
              src={portfolioMob1}
              alt="modern e-commerce platform interface with clean design"
              width={400}
              height={400}
            />
            <div className="p-8">
              <div className="flex items-center space-x-2 mb-4">
                <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                  React Native
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">01100</h3>
              <p className="text-white opacity-60 mb-6">
                Application mobile marketplace pour la vente et l&apos;achat
                d&apos;articles d&apos;occasion entre particuliers.
              </p>
            </div>
          </div>

          <div className={styles.container}>
            <Image
              className="w-full h-64 object-cover rounded-2xl"
              src={portfolioMob2}
              alt="healthcare management system dashboard with charts and patient data"
              width={400}
              height={400}
            />
            <div className="p-8">
              <div className="flex items-center space-x-2 mb-4">
                <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                  React Native
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Syrma</h3>
              <p className="text-white opacity-60 mb-6">
                Application mobile de suivi de performance de panneaux solaires
                avec visualisation des données en temps réel.
              </p>
            </div>
          </div>

          <div className={styles.container}>
            <Image
              className="w-full h-64 object-cover rounded-2xl"
              src={portfolioMob3}
              alt="fintech banking application interface with financial charts"
              width={400}
              height={400}
            />
            <div className="p-8">
              <div className="flex items-center space-x-2 mb-4">
                <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                  React Native
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Casse-Croûte Courteau
              </h3>
              <p className="text-white opacity-60 mb-6">
                Application mobile de commande en ligne pour un restaurant
              </p>

              {/* <Link
                href="#"
                className="text-pr hover:text-blue-700 font-medium flex items-center gap-2 "
              >
                <span>Voir le projet </span>

                <FaArrowRightLong />
              </Link> */}
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/portfolio/#web"
            className="gradient-bg text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition"
          >
            Voir Tous Nos Projets
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
