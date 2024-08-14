import React from "react";
import BenefitCard from "../benefitCard/BenefitCard";
import advantage1 from "../../../public/images/advantage1.svg";
import advantage2 from "../../../public/images/advantage2.svg";
import advantage3 from "../../../public/images/advantage3.svg";
import advantage4 from "../../../public/images/advantage4.svg";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
const AdvantagesSection = () => {
  return (
    <section className="w-full  mb-40  relative lg:mt-48 mt-14 ">
      <div className=" z-20 w-full h-full flex flex-col items-center  ">
        <div className="w-full h-full flex flex-col items-center pb-20  ">
          <h2 className="font-inter text-white font-semibold lg:text-4xl text-xl text-center">
            Avantages de la Solution
            <div className="titleUnderline" />
          </h2>
          <div className=" flex w-full gap-10 lg:px-12 lg:gap-5 lg:flex-row flex-col  lg:justify-between lg:mt-20 mt-10 px-6">
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
  );
};

export default AdvantagesSection;
