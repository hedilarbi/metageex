import Image from "next/image";
import React from "react";
import FeatureCard from "../featureCard/FeatureCard";
import productHero from "../../../public/images/productHero.svg";
const FunctionalitiesSection = () => {
  return (
    <section className="w-full  relative lg:mt-48 mt-14 ">
      <div className="productHero">
        <Image src={productHero} alt="productHero" />
      </div>
      <div className="productBlueRightElipse" />
      <div className=" z-20 w-full h-full flex flex-col items-center  ">
        <div className=" w-full  h-full flex flex-col items-center  ">
          <h2 className="font-inter text-white font-semibold lg:text-4xl lg:text-left text-center text-xl">
            Fonctionnalités Principales
            <div className="titleUnderline" />
          </h2>
          <div className=" flex flex-col lg:flex-row w-full lg:gap-10  gap-8 flex-1 lg:flex-wrap lg:justify-between lg:mt-20 mt-10  lg:px-12 px-6">
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
  );
};

export default FunctionalitiesSection;
