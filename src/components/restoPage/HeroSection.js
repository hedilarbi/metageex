import React from "react";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { defaultLocale } from "@/lib/i18n";
import { getLocalizedRoute } from "@/lib/localePath";

const heroCopy = {
  en: {
    title: "Revolutionise your restaurant operations with our all-in-one suite",
    description:
      "A modern toolbox to streamline management, boost online orders and elevate the guest experience.",
    cta: "Contact us",
  },
  fr: {
    title: "Révolutionnez la gestion de votre restaurant avec notre suite complète",
    description:
      "Des outils modernes pour une gestion optimale et une expérience client améliorée.",
    cta: "Contactez-nous",
  },
};

const HeroSection = ({ locale = defaultLocale }) => {
  const copy = heroCopy[locale] || heroCopy[defaultLocale];

  return (
    <section className="w-full lg:h-[95vh] h-[70vh] relative ">
      <div className="top-half-elipse" />

      <div className=" z-10 w-full h-full lg:mt-32 mt-20">
        <div className="serviceHeroContainer">
          <div className="relative  lg:w-2/3  w-full">
            <h1 className="font-inter font-semibold lg:text-4xl text-xl text-white text-center">
              {copy.title}
            </h1>
            <div className="shadowCircle" />
          </div>
          <p className="lg:w-2/3 text-white font-inter lg:text-2xl text-sm text-opacity-60 font-light text-center  leading-loose tracking-wide px-6 mt-4 lg:mt-12">
            {copy.description}
          </p>
          <Link
            href={getLocalizedRoute(locale, "contact")}
            className="flex justify-center lg:text-base text-sm gap-5 items-center lg:py-4 py-2 px-6 rounded-lg  text-center  bg-gradient-to-r from-pr to-pr-dark-opaque text-white lg:mt-12 mt-4"
          >
            <p>{copy.cta}</p>
            <FaArrowRightLong />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
