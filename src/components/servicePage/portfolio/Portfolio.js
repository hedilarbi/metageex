import Image from "next/image";
import React from "react";
import PortfolioImg from "../../../../public/images/portfolio.png";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
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
              src={PortfolioImg}
              alt="modern e-commerce platform interface with clean design"
              width={400}
              height={400}
            />
            <div className="p-8">
              <div className="flex items-center space-x-2 mb-4">
                <span className="bg-pr bg-opacity-10 text-pr px-3 py-1 rounded-full text-sm">
                  E-commerce
                </span>
                <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                  React
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Plateforme E-commerce Luxury
              </h3>
              <p className="text-white opacity-60 mb-6">
                Plateforme e-commerce haut de gamme avec système de
                personnalisation avancé et intégration multi-canaux.
              </p>

              <Link
                href="/"
                className="text-pr hover:text-blue-700 font-medium flex items-center gap-2"
              >
                Voir le projet{" "}
                <div>
                  <FaArrowRightLong />
                </div>
              </Link>
            </div>
          </div>

          <div className={styles.container}>
            <Image
              className="w-full h-64 object-cover rounded-2xl"
              src={PortfolioImg}
              alt="healthcare management system dashboard with charts and patient data"
              width={400}
              height={400}
            />
            <div className="p-8">
              <div className="flex items-center space-x-2 mb-4">
                <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">
                  Healthcare
                </span>
                <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                  Vue.js
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Système de Gestion Hospitalière
              </h3>
              <p className="text-white opacity-60 mb-6">
                Application complète de gestion hospitalière avec dossiers
                patients électroniques et planification.
              </p>

              <Link
                href="/"
                className="text-pr hover:text-blue-700 font-medium flex items-center gap-2"
              >
                Voir le projet{" "}
                <div>
                  <FaArrowRightLong />
                </div>
              </Link>
            </div>
          </div>

          <div className={styles.container}>
            <Image
              className="w-full h-64 object-cover rounded-2xl"
              src={PortfolioImg}
              alt="fintech banking application interface with financial charts"
              width={400}
              height={400}
            />
            <div className="p-8">
              <div className="flex items-center space-x-2 mb-4">
                <span className="bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full text-sm">
                  FinTech
                </span>
                <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                  Node.js
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Application Bancaire Mobile
              </h3>
              <p className="text-white opacity-60 mb-6">
                Solution bancaire digitale complète avec paiements instantanés
                et gestion de portefeuille.
              </p>

              <Link
                href="/"
                className="text-pr hover:text-blue-700 font-medium flex items-center gap-2 "
              >
                <span>Voir le projet </span>

                <FaArrowRightLong />
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button className="gradient-bg text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition">
            Voir Tous Nos Projets
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
