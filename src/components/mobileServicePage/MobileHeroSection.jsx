// components/mobileServicePage/MobileHeroSection.jsx

import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const MobileHeroSection = () => {
  return (
    <section className="w-full lg:h-screen relative mt-32 lg:mt-0">
      <div className="top-half-elipse" />

      <div className="flex flex-col items-center lg:justify-center mt-14 z-10 w-full h-full">
        <div className="serviceHeroContainer">
          <div className="relative">
            <h1 className="font-inter font-semibold lg:text-6xl text-2xl text-white text-center">
              Développement d&apos;Applications Mobiles
            </h1>
            <div className="shadowCircle" />
          </div>

          <p className="lg:w-2/3 text-white font-inter lg:text-2xl text-sm text-opacity-60 font-light text-center leading-loose tracking-wide px-6 mt-8 lg:mt-12">
            Des applications iOS &amp; Android performantes, belles et
            scalables, construites avec React Native/Expo, intégrées à vos
            systèmes et prêtes pour l’App Store &amp; le Play Store.
          </p>

          <div className="mt-8 flex space-x-5 text-xs lg:text-base">
            <Link
              href="/contact"
              className="flex justify-center lg:gap-5 gap-2 items-center py-2 lg:py-3 lg:px-6 px-2 rounded-lg bg-gradient-to-r from-pr to-pr-dark-opaque text-white"
            >
              <span>Démarrer un projet</span>
              <FaArrowRightLong />
            </Link>
            <Link href="/portfolio/#mobile" className="gradient-stroke-box">
              <span>Voir Portfolio</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileHeroSection;
