import FeatureCard from "@/components/featureCard/FeatureCard";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import productHero from "../../../../public/images/productHero.svg";
import Image from "next/image";
import BenefitCard from "@/components/benefitCard/BenefitCard";
import advantage1 from "../../../../public/images/advantage1.svg";
import advantage2 from "../../../../public/images/advantage2.svg";
import advantage3 from "../../../../public/images/advantage3.svg";
import advantage4 from "../../../../public/images/advantage4.svg";
import Link from "next/link";

const page = () => {
  return (
    <main className=" w-full h-full relative overflow-hidden">
      <section className="w-full lg:h-[95vh] h-[70vh] relative ">
        <div className="top-half-elipse" />

        <div className="absolute z-10 w-full h-full lg:top-32 top-20">
          <div className="serviceHeroContainer">
            <div className="relative  lg:w-2/3  w-full">
              <h1 className="font-inter font-semibold lg:text-4xl text-xl text-white text-center">
                Révolutionnez la gestion de votre restaurant avec notre solution
                complète
              </h1>
              <div className="shadowCircle" />
            </div>
            <p className="lg:w-2/3 text-white font-inter lg:text-2xl text-sm text-opacity-60 font-light text-center  leading-loose tracking-wide px-6 mt-4 lg:mt-12">
              Une suite d&apos;outils modernes pour une gestion optimale et une
              expérience client améliorée.
            </p>
            <button className="flex justify-center lg:text-base text-sm gap-5 items-center lg:py-4 py-2 px-6 rounded-lg  text-center  bg-gradient-to-r from-pr to-pr-dark-opaque text-white lg:mt-12 mt-4">
              <p>Contactez Nous</p>
              <FaArrowRightLong />
            </button>
          </div>
        </div>
      </section>
      <section className="w-full lg:h-[70vh] h-[50vh]  relative  ">
        <div className="productBlueLeftElipse" />
        <div className="absolute z-20 w-full h-full flex flex-col items-center  px-6 lg:px-0 ">
          <div className=" lg:w-3/4 w-full mx-auto border-white border-opacity-60 rounded-2xl border lg:h-3/4 h-2/3  ">
            <iframe
              className="w-full h-full rounded-2xl"
              src="https://www.youtube.com/embed/ysSxxIqKNN0?si=i_VocKa0R5aE2flL"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </section>
      <section className="w-full lg:h-[200vh] h-[310vh] relative ">
        <div className="productHero">
          <Image src={productHero} alt="productHero" />
        </div>
        <div className="productBlueRightElipse" />
        <div className="absolute z-20 w-full h-full flex flex-col items-center  ">
          <div className=" w-full  h-full flex flex-col items-center px-12">
            <h2 className="font-inter text-white font-semibold lg:text-4xl lg:text-left text-center text-xl">
              Fonctionnalités Principales
              <div className="titleUnderline" />
            </h2>
            <div className=" flex flex-col lg:flex-row w-full lg:gap-10  gap-8 flex-1 lg:flex-wrap lg:justify-between lg:mt-20 mt-10 px-6 lg:px-0">
              <FeatureCard
                title="Dashboard de gestion"
                content="Gérez facilement votre restaurant avec notre tableau de bord complet disponible en version web et mobile."
                ul={true}
              />
              <FeatureCard
                title="Application mobile pour les commandes en ligne"
                content="Offrez à vos clients la possibilité de passer des commandes en ligne rapidement et facilement grâce à  notre application mobile intuitive. Disponible sur iOS et Android, notre application simplifie le processus de commande pour vos clients."
              />
              <FeatureCard
                title="Application web pour restaurants"
                content="Permettez à vos clients de passer des commandes directement depuis votre site web grâce à notre solution intégrée. Les commandes arrivent instantanément dans votre système de gestion, prêtes à  être traitées."
              />
              <FeatureCard
                title="Menu QR Code"
                content="Simplifiez l'expérience de vos clients avec notre menu QR code accessible depuis n'importe quel smartphone. Les clients peuvent scanner le QR code pour voir le menu, passer des commandes et payer en ligne, sans contact."
              />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full lg:h-[150vh] h-[320vh]  relative mt-20">
        <div className="absolute z-20 w-full h-full flex flex-col items-center  ">
          <div className="w-full h-full flex flex-col items-center pb-20 lg:px-12 px-10">
            <h2 className="font-inter text-white font-semibold lg:text-4xl text-xl text-center">
              Avantages de la Solution
              <div className="titleUnderline" />
            </h2>
            <div className=" flex w-full gap-6 lg:flex-row flex-col    lg:justify-between lg:mt-20 mt-10">
              <BenefitCard
                icon={advantage1}
                title="Optimisation de la gestion"
                content="Optimisez la gestion de votre restaurant avec des outils de suivi en temps réel et des rapports détaillés. Prenez des décisions claires basées sur des données précises et à jour."
              />
              <BenefitCard
                reverse={true}
                icon={advantage2}
                title="Augmentation des ventes"
                content="Augmentez vos ventes grâce à des fonctionnalités de commande en ligne et de paiement sécurisé. Attirez de nouveaux clients et fidélisez les existants avec une expérience d'achat facile et rapide."
              />
              <BenefitCard
                icon={advantage3}
                title="Amélioration de l'expérience client"
                content="Offrez une expérience client exceptionnelle avec des menus interactifs et des options de commande faciles. Facilitez la navigation et la commande pour vos clients, rendant leur expérience agréable et sans stress."
              />
              <BenefitCard
                reverse={true}
                icon={advantage4}
                title="Accessibilité et flexibilité"
                content="Accédez à toutes les fonctionnalités de notre solution depuis n'importe quel appareil, à tout moment. Gérez votre restaurant en déplacement avec notre application mobile ou depuis votre bureau avec notre tableau de bord web."
              />
            </div>
            <Link
              href="/contact"
              className="flex justify-center gap-5 items-center lg:py-4 py-3 px-6 rounded-lg  lg:text-base text-sm text-center  bg-gradient-to-r from-pr to-pr-dark-opaque text-white mt-12  "
            >
              <p>Contactez Nous</p>
              <FaArrowRightLong />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
