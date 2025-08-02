import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const HeroSection = () => {
  return (
    <section className="w-full lg:h-screen relative mt-32 lg:mt-0 ">
      <div className="top-half-elipse" />

      <div className=" flex flex-col items-center lg:justify-center mt-14   z-10  w-full h-full ">
        <div className="serviceHeroContainer">
          <div className="relative ">
            <h1 className="font-inter font-semibold lg:text-6xl text-2xl text-white">
              Services
            </h1>
            <div className="shadowCircle" />
          </div>
          <p className="lg:w-2/3 text-white font-inter lg:text-2xl text-sm text-opacity-60 font-light text-center  leading-loose tracking-wide px-6 mt-8 lg:mt-12">
            Des solutions digitales sur mesure pour répondre à tous vos besoins
            en développement web, mobile et SaaS
          </p>
          <Link
            href="/contact"
            className="flex justify-center lg:text-base text-sm gap-5 items-center lg:py-4 py-2 px-6 rounded-lg  text-center  bg-gradient-to-r from-pr to-pr-dark-opaque text-white lg:mt-12 mt-8"
          >
            <p>Contactez Nous</p>
            <FaArrowRightLong />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
