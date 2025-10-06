import Image from "next/image";
import React from "react";

import productHero from "../../../public/images/productHero.svg";
import styles from "./FeatureCard.module.css";
import { FaCheck } from "react-icons/fa6";
const WebAppServicesSection = () => {
  return (
    <section className="w-full  relative  font-inter py-20 md:py-20">
      <div className="productHero">
        <Image src={productHero} alt="productHero" />
      </div>
      <div className="productBlueRightElipse" />
      <div className=" max-w-7xl mx-auto flex flex-col items-center  ">
        <div className=" w-full  h-full flex flex-col items-center  ">
          <h2 className="font-inter text-white font-semibold lg:text-4xl lg:text-left text-center text-xl">
            Nos Services de Développement Web
            <div className="titleUnderline" />
          </h2>
          <div className=" flex flex-col lg:flex-row w-full lg:gap-10  gap-8 flex-1 lg:flex-wrap lg:justify-between lg:mt-20 mt-10  lg:px-12 px-6">
            <div className={styles.container}>
              <div className={styles.shadowCircle} />
              <h3 className="text-white font-inter font-semibold lg:text-lg text-base inline-block">
                Applications Web Complètes
                <div className="h-1 w-full mt-2 bg-gradient-to-r from-[#57B3FE] to-[rgba(9,148,248,0)]  " />
              </h3>
              <p className="font-inter font-normal text-white text-opacity-60  mt-8 leading-relaxed lg:text-base text-sm">
                Développement d&apos;applications web full-stack avec interfaces
                utilisateur modernes et backends robustes.
              </p>
              <ul className="mt-6">
                <li className="flex items-center text-white font-inter font-normal gap-2">
                  <div className="text-pr">
                    <FaCheck />
                  </div>
                  <span>Frontend React/Next js</span>
                </li>
                <li className="flex items-center text-white font-inter font-normal gap-2">
                  <div className="text-pr">
                    <FaCheck />
                  </div>
                  <span>Backend Node.js/Python</span>
                </li>
                <li className="flex items-center text-white font-inter font-normal gap-2">
                  <div className="text-pr">
                    <FaCheck />
                  </div>
                  <span>CMS Wordpress/Prestashop</span>
                </li>
                <li className="flex items-center text-white font-inter font-normal gap-2">
                  <div className="text-pr">
                    <FaCheck />
                  </div>
                  <span>Base de données optimisées</span>
                </li>
                <li className="flex items-center text-white font-inter font-normal gap-2">
                  <div className="text-pr">
                    <FaCheck />
                  </div>
                  <span>APIs RESTful</span>
                </li>
              </ul>
            </div>
            <div className={styles.container}>
              <div className={styles.shadowCircle} />
              <h3 className="text-white font-inter font-semibold lg:text-lg text-base inline-block">
                E-commerce Solutions
                <div className="h-1 w-full mt-2 bg-gradient-to-r from-[#57B3FE] to-[rgba(9,148,248,0)]  " />
              </h3>
              <p className="font-inter font-normal text-white text-opacity-60  mt-8 leading-relaxed lg:text-base text-sm">
                Plateformes e-commerce sur mesure avec systèmes de paiement
                sécurisés et gestion avancée.
              </p>
              <ul className="mt-6">
                <li className="flex items-center text-white font-inter font-normal gap-2">
                  <div className="text-pr">
                    <FaCheck />
                  </div>
                  <span>Catalogues produits</span>
                </li>
                <li className="flex items-center text-white font-inter font-normal gap-2">
                  <div className="text-pr">
                    <FaCheck />
                  </div>
                  <span>Paiements sécurisés</span>
                </li>
                <li className="flex items-center text-white font-inter font-normal gap-2">
                  <div className="text-pr">
                    <FaCheck />
                  </div>
                  <span>Gestion des commandes</span>
                </li>
                <li className="flex items-center text-white font-inter font-normal gap-2">
                  <div className="text-pr">
                    <FaCheck />
                  </div>
                  <span>Analytics avancées</span>
                </li>
              </ul>
            </div>
            <div className={styles.container}>
              <div className={styles.shadowCircle} />
              <h3 className="text-white font-inter font-semibold lg:text-lg text-base inline-block">
                Systèmes de Gestion
                <div className="h-1 w-full mt-2 bg-gradient-to-r from-[#57B3FE] to-[rgba(9,148,248,0)]  " />
              </h3>
              <p className="font-inter font-normal text-white text-opacity-60  mt-8 leading-relaxed lg:text-base text-sm">
                CRM, ERP et systèmes de gestion métier personnalisés pour
                optimiser vos processus.
              </p>
              <ul className="mt-6">
                <li className="flex items-center text-white font-inter font-normal gap-2">
                  <div className="text-pr">
                    <FaCheck />
                  </div>
                  <span>CRM personnalisés</span>
                </li>
                <li className="flex items-center text-white font-inter font-normal gap-2">
                  <div className="text-pr">
                    <FaCheck />
                  </div>
                  <span>Systèmes ERP</span>
                </li>
                <li className="flex items-center text-white font-inter font-normal gap-2">
                  <div className="text-pr">
                    <FaCheck />
                  </div>
                  <span>Tableaux de bord</span>
                </li>
                <li className="flex items-center text-white font-inter font-normal gap-2">
                  <div className="text-pr">
                    <FaCheck />
                  </div>
                  <span>Automatisation</span>
                </li>
              </ul>
            </div>
            <div className={styles.container}>
              <div className={styles.shadowCircle} />
              <h3 className="text-white font-inter font-semibold lg:text-lg text-base inline-block">
                Solutions Cloud
                <div className="h-1 w-full mt-2 bg-gradient-to-r from-[#57B3FE] to-[rgba(9,148,248,0)]  " />
              </h3>
              <p className="font-inter font-normal text-white text-opacity-60  mt-8 leading-relaxed lg:text-base text-sm">
                Déploiement et hébergement cloud avec scalabilité automatique et
                haute disponibilité.
              </p>
              <ul className="mt-6">
                <li className="flex items-center text-white font-inter font-normal gap-2">
                  <div className="text-pr">
                    <FaCheck />
                  </div>
                  <span>AWS</span>
                </li>
                <li className="flex items-center text-white font-inter font-normal gap-2">
                  <div className="text-pr">
                    <FaCheck />
                  </div>
                  <span>Auto-scaling</span>
                </li>
                <li className="flex items-center text-white font-inter font-normal gap-2">
                  <div className="text-pr">
                    <FaCheck />
                  </div>
                  <span>Monitoring 24/7</span>
                </li>
                <li className="flex items-center text-white font-inter font-normal gap-2">
                  <div className="text-pr">
                    <FaCheck />
                  </div>
                  <span>Sauvegarde automatique</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebAppServicesSection;
