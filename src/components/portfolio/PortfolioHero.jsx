// components/portfolio/PortfolioHero.jsx

import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const PortfolioHero = () => {
  return (
    <section className="w-full lg:h-[70vh] h-[50vh] relative mt-20 lg:mt-32 ">
      <div className="top-half-elipse" />
      <div className="flex flex-col items-center lg:justify-center mt-14 z-10 w-full h-full">
        <div className="serviceHeroContainer">
          <div className="relative">
            <h1 className="font-inter font-semibold lg:text-6xl text-2xl text-white text-center">
              Portfolio
            </h1>
            <div className="shadowCircle" />
          </div>
          <p className="lg:w-2/3 text-white font-inter lg:text-2xl text-sm text-opacity-60 font-light text-center leading-loose tracking-wide px-6 mt-8 lg:mt-12">
            Applications web & mobiles, backoffices, sites vitrines et
            e-commerce. Voici une sélection de projets livrés.
          </p>
          <div className="mt-8 flex space-x-5 text-xs lg:text-base">
            <Link
              href="/contact"
              className="flex justify-center lg:gap-5 gap-2 items-center py-2 lg:py-3 lg:px-6 px-2 rounded-lg bg-gradient-to-r from-pr to-pr-dark-opaque text-white"
            >
              <span>Discuter d’un projet</span>
              <FaArrowRightLong />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioHero;
