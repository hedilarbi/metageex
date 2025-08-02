import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const HeroSection = () => {
  return (
    <section className="w-full lg:h-[95vh] h-[70vh] relative ">
      <div className="top-half-elipse" />

      <div className=" z-10 w-full h-full lg:mt-32 mt-20">
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
  );
};

export default HeroSection;
