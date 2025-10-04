import React from "react";

import styles from "./FeatureCard.module.css";
import {
  FaCheck,
  FaCode,
  FaLightbulb,
  FaPenRuler,
  FaRocket,
  FaVial,
} from "react-icons/fa6";
import Image from "next/image";
import productHero from "../../../../public/images/productHero.svg";
const Techs = () => {
  return (
    <section id="process" className="w-full  relative  font-inter py-20 ">
      <div className="productHero">
        <Image src={productHero} alt="productHero" />
      </div>
      <div className="productBlueRightElipse" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="w-full text-center flex flex-col items-center mb-16">
          <h2 className="font-inter text-white font-semibold lg:text-4xl text-center text-xl">
            Notre Processus de Développement
            <div className="titleUnderline" />
          </h2>
          <p className="font-inter font-normal text-white text-opacity-60  mt-8 leading-relaxed lg:text-2xl text-base">
            Une méthodologie agile éprouvée qui garantit la qualité, les délais
            et la satisfaction client
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-pr opacity-30"></div>

          <div className="space-y-16">
            <div className="flex items-center">
              <div className="flex-1 pr-8">
                <div className={styles.container}>
                  <div className={styles.shadowCircle} />
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      Analyse &amp; Planification
                    </h3>
                  </div>
                  <p className="text-white text-opacity-60 mb-4">
                    Étude approfondie de vos besoins, analyse de la concurrence
                    et définition des spécifications techniques détaillées.
                  </p>
                  <ul className="space-y-2 text-sm text-white">
                    <li className="flex items-center">
                      <div className="text-pr mr-2">
                        <FaCheck />
                      </div>
                      Audit des besoins métier
                    </li>
                    <li className="flex items-center">
                      <div className="text-pr mr-2">
                        <FaCheck />
                      </div>
                      Architecture technique
                    </li>
                    <li className="flex items-center">
                      <div className="text-pr mr-2">
                        <FaCheck />
                      </div>
                      Planning détaillé
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center relative z-10">
                <div className="text-white text-xl">
                  <FaLightbulb />
                </div>
              </div>
              <div className="flex-1 pl-8"></div>
            </div>

            <div className="flex items-center">
              <div className="flex-1 pr-8"></div>

              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center relative z-10">
                <div className="text-white text-xl">
                  <FaPenRuler />
                </div>
              </div>
              <div className="flex-1 pl-8">
                <div className={styles.container}>
                  <div className={styles.shadowCircle} />
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold">2</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      Design &amp; Prototypage
                    </h3>
                  </div>
                  <p className="text-white text-opacity-60 mb-4">
                    Création des maquettes UX/UI, prototypes interactifs et
                    validation des parcours utilisateur.
                  </p>
                  <ul className="space-y-2 text-sm text-white">
                    <li className="flex items-center">
                      <div className="text-pr mr-2">
                        <FaCheck />
                      </div>
                      Wireframes détaillés
                    </li>
                    <li className="flex items-center">
                      <div className="text-pr mr-2">
                        <FaCheck />
                      </div>
                      Design system
                    </li>
                    <li className="flex items-center">
                      <div className="text-pr mr-2">
                        <FaCheck />
                      </div>
                      Prototypes interactifs
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex items-center">
              <div className="flex-1 pr-8">
                <div className={styles.container}>
                  <div className={styles.shadowCircle} />
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold">3</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      Développement Agile
                    </h3>
                  </div>
                  <p className="text-white text-opacity-60 mb-4">
                    Développement itératif avec démonstrations régulières et
                    ajustements en temps réel.
                  </p>
                  <ul className="space-y-2 text-sm text-white">
                    <li className="flex items-center">
                      <div className="text-pr mr-2">
                        <FaCheck />
                      </div>
                      Sprints de 2 semaines
                    </li>
                    <li className="flex items-center">
                      <div className="text-pr mr-2">
                        <FaCheck />
                      </div>
                      Code reviews systématiques
                    </li>
                    <li className="flex items-center">
                      <div className="text-pr mr-2">
                        <FaCheck />
                      </div>
                      Tests automatisés
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center relative z-10">
                <div className="text-white text-xl">
                  <FaCode />
                </div>
              </div>
              <div className="flex-1 pl-8"></div>
            </div>

            <div className="flex items-center">
              <div className="flex-1 pr-8"></div>
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center relative z-10">
                <div className="text-white text-xl">
                  <FaVial />
                </div>
              </div>
              <div className="flex-1 pl-8">
                <div className={styles.container}>
                  <div className={styles.shadowCircle} />
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold">4</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      Tests &amp; Qualité
                    </h3>
                  </div>
                  <p className="text-white text-opacity-60 mb-4">
                    Tests complets (unitaires, intégration, performance) et
                    assurance qualité rigoureuse.
                  </p>
                  <ul className="space-y-2 text-sm text-white">
                    <li className="flex items-center">
                      <div className="text-pr mr-2">
                        <FaCheck />
                      </div>
                      Tests automatisés
                    </li>
                    <li className="flex items-center">
                      <div className="text-pr mr-2">
                        <FaCheck />
                      </div>
                      Tests de performance
                    </li>
                    <li className="flex items-center">
                      <div className="text-pr mr-2">
                        <FaCheck />
                      </div>
                      Tests de sécurité
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex items-center">
              <div className="flex-1 pr-8">
                <div className={styles.container}>
                  <div className={styles.shadowCircle} />
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold">5</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      Déploiement &amp; Suivi
                    </h3>
                  </div>
                  <p className="text-white text-opacity-60 mb-4">
                    Mise en production sécurisée, formation des équipes et suivi
                    post-lancement.
                  </p>
                  <ul className="space-y-2 text-sm text-white">
                    <li className="flex items-center">
                      <div className="text-pr mr-2">
                        <FaCheck />
                      </div>
                      Déploiement automatisé
                    </li>
                    <li className="flex items-center">
                      <div className="text-pr mr-2">
                        <FaCheck />
                      </div>
                      Formation utilisateurs
                    </li>
                    <li className="flex items-center">
                      <div className="text-pr mr-2">
                        <FaCheck />
                      </div>
                      Support technique
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center relative z-10">
                <div className="text-white text-xl">
                  <FaRocket />
                </div>
              </div>
              <div className="flex-1 pl-8"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Techs;
