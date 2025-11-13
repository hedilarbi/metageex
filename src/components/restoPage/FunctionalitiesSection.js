import Image from "next/image";
import React from "react";
import FeatureCard from "../featureCard/FeatureCard";
import productHero from "@public/images/productHero.svg";
import { defaultLocale } from "@/lib/i18n";

const cardsCopy = {
  title: {
    en: "Core features",
    fr: "Fonctionnalités principales",
  },
  en: [
    {
      title: "Management dashboard",
      content:
        "Monitor operations in real time with a full dashboard available on web and mobile.",
      ul: true,
    },
    {
      title: "Mobile ordering app",
      content:
        "Allow guests to place orders quickly through an intuitive mobile app (iOS & Android).",
    },
    {
      title: "Web ordering",
      content:
        "Embed ordering into your website. Orders flow instantly to your back-office, ready to be processed.",
    },
    {
      title: "QR code menu",
      content:
        "Offer a contactless experience with QR menus. Guests scan, browse, order and pay from their phone.",
    },
  ],
  fr: [
    {
      title: "Dashboard de gestion",
      content:
        "Pilotez votre restaurant en temps réel avec un tableau de bord complet (web & mobile).",
      ul: true,
    },
    {
      title: "Application mobile de commande",
      content:
        "Permettez à vos clients de commander rapidement via une application mobile intuitive (iOS & Android).",
    },
    {
      title: "Application web pour restaurants",
      content:
        "Recevez des commandes directement depuis votre site grâce à notre solution intégrée.",
    },
    {
      title: "Menu QR code",
      content:
        "Offrez un menu accessible depuis n’importe quel smartphone pour consulter, commander et payer.",
    },
  ],
};

const FunctionalitiesSection = ({ locale = defaultLocale }) => {
  const cards = cardsCopy[locale] || cardsCopy[defaultLocale];
  const sectionTitle = cardsCopy.title[locale] || cardsCopy.title.fr;

  return (
    <section className="w-full  relative lg:mt-48 mt-14 ">
      <div className="productHero">
        <Image src={productHero} alt="productHero" />
      </div>
      <div className="productBlueRightElipse" />
      <div className=" z-20 w-full h-full flex flex-col items-center  ">
        <div className=" w-full  h-full flex flex-col items-center  ">
          <h2 className="font-inter text-white font-semibold lg:text-4xl lg:text-left text-center text-xl">
            {sectionTitle}
            <div className="titleUnderline" />
          </h2>
          <div className=" flex flex-col lg:flex-row w-full lg:gap-10  gap-8 flex-1 lg:flex-wrap lg:justify-between lg:mt-20 mt-10  lg:px-12 px-6">
            {cards.map((card) => (
              <FeatureCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FunctionalitiesSection;
