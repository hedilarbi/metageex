import React from "react";
import BenefitCard from "../benefitCard/BenefitCard";
import advantage1 from "@public/images/advantage1.svg";
import advantage2 from "@public/images/advantage2.svg";
import advantage3 from "@public/images/advantage3.svg";
import advantage4 from "@public/images/advantage4.svg";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { defaultLocale } from "@/lib/i18n";
import { getLocalizedRoute } from "@/lib/localePath";

const content = {
  en: {
    title: "Solution benefits",
    cta: "Contact us",
    items: [
      {
        icon: advantage1,
        title: "Optimised operations",
        description:
          "Track performance in real time with detailed reporting and take clear, data-driven decisions.",
      },
      {
        icon: advantage2,
        title: "Increased sales",
        description:
          "Boost revenue with online ordering, secure payments and loyalty mechanics.",
        reverse: true,
      },
      {
        icon: advantage3,
        title: "Better guest experience",
        description:
          "Interactive menus and smooth ordering flows make the dining experience effortless.",
      },
      {
        icon: advantage4,
        title: "Accessibility & flexibility",
        description:
          "Manage everything from any device with our responsive web dashboard and mobile apps.",
        reverse: true,
      },
    ],
  },
  fr: {
    title: "Avantages de la solution",
    cta: "Contactez-nous",
    items: [
      {
        icon: advantage1,
        title: "Optimisation de la gestion",
        description:
          "Suivi en temps réel et rapports détaillés pour des décisions basées sur des données fiables.",
      },
      {
        icon: advantage2,
        title: "Augmentation des ventes",
        description:
          "Commandes en ligne, paiement sécurisé et fidélisation pour attirer et retenir vos clients.",
        reverse: true,
      },
      {
        icon: advantage3,
        title: "Expérience client améliorée",
        description:
          "Menus interactifs et parcours de commande fluides pour une expérience sans frictions.",
      },
      {
        icon: advantage4,
        title: "Accessibilité & flexibilité",
        description:
          "Accédez à toutes les fonctionnalités depuis n’importe quel appareil, où que vous soyez.",
        reverse: true,
      },
    ],
  },
};

const AdvantagesSection = ({ locale = defaultLocale }) => {
  const copy = content[locale] || content[defaultLocale];

  return (
    <section className="w-full  mb-40  relative lg:mt-48 mt-14 ">
      <div className=" z-20 w-full h-full flex flex-col items-center  ">
        <div className="w-full h-full flex flex-col items-center pb-20  ">
          <h2 className="font-inter text-white font-semibold lg:text-4xl text-xl text-center">
            {copy.title}
            <div className="titleUnderline" />
          </h2>
          <div className=" flex w-full gap-10 lg:px-12 lg:gap-5 lg:flex-row flex-col  lg:justify-between lg:mt-20 mt-10 px-6">
            {copy.items.map((item) => (
              <BenefitCard key={item.title} {...item} />
            ))}
          </div>
          <Link
            href={getLocalizedRoute(locale, "contact")}
            className="flex justify-center gap-5 items-center lg:py-4 py-3 px-6 rounded-lg  lg:text-base text-sm text-center  bg-gradient-to-r from-pr to-pr-dark-opaque text-white mt-12  "
          >
            <p>{copy.cta}</p>
            <FaArrowRightLong />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
