import Image from "next/image";
import React from "react";
import portfolioWeb2 from "../../../../public/images/portfolioWeb2.png";
import portfolioWeb6 from "../../../../public/images/portfolioWeb6.png";
import portfolioWeb7 from "../../../../public/images/portfolioWeb7.png";

import Link from "next/link";

import styles from "./FeatureCard.module.css";
import { FaArrowRightLong } from "react-icons/fa6";
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
              src={portfolioWeb2}
              alt="modern e-commerce platform interface with clean design"
              width={400}
              height={400}
            />
            <div className="p-8">
              <div className="flex items-center space-x-2 mb-4">
                <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                  Wordpress
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Neutralivie</h3>
              <p className="text-white opacity-60 mb-6">
                Site vitrine pour un cabinet de gestion de patrimoine
              </p>
              <Link
                href="https://neutralivie.fr"
                target="_blank"
                className="text-pr hover:text-blue-700 font-medium flex items-center gap-2 "
              >
                <span>Voir le projet </span>

                <FaArrowRightLong />
              </Link>
            </div>
          </div>

          <div className={styles.container}>
            <Image
              className="w-full h-64 object-cover rounded-2xl"
              src={portfolioWeb6}
              alt="healthcare management system dashboard with charts and patient data"
              width={400}
              height={400}
            />
            <div className="p-8">
              <div className="flex items-center space-x-2 mb-4">
                <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                  Wordpress
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Prds</h3>
              <p className="text-white opacity-60 mb-6">
                Site vitrine pour une société de nettoyage
              </p>
              <Link
                href="https://prds-service.com"
                target="_blank"
                className="text-pr hover:text-blue-700 font-medium flex items-center gap-2 "
              >
                <span>Voir le projet </span>

                <FaArrowRightLong />
              </Link>
            </div>
          </div>

          <div className={styles.container}>
            <Image
              className="w-full h-64 object-cover rounded-2xl"
              src={portfolioWeb7}
              alt="fintech banking application interface with financial charts"
              width={400}
              height={400}
            />
            <div className="p-8">
              <div className="flex items-center space-x-2 mb-4">
                <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                  Wordpress
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                West Mount Limousine
              </h3>
              <p className="text-white opacity-60 mb-6">
                Site vitrine pour une entreprise de transport de luxe
              </p>

              <Link
                href="https://westmountlimousine.com"
                target="_blank"
                className="text-pr hover:text-blue-700 font-medium flex items-center gap-2 "
              >
                <span>Voir le projet </span>

                <FaArrowRightLong />
              </Link>
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
