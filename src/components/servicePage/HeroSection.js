import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const HeroSection = ({ title, description }) => {
  return (
    <section className="w-full lg:h-screen relative mt-32 lg:mt-0 ">
      <div className="top-half-elipse" />

      <div className=" flex flex-col items-center lg:justify-center mt-14   z-10  w-full h-full ">
        <div className="serviceHeroContainer">
          <div className="relative ">
            <h1 className="font-inter font-semibold lg:text-6xl text-2xl text-white">
              {title}
            </h1>
            <div className="shadowCircle" />
          </div>
          <p className="lg:w-2/3 text-white font-inter lg:text-2xl text-sm text-opacity-60 font-light text-center  leading-loose tracking-wide px-6 mt-8 lg:mt-12">
            {description}
          </p>

          <div className="mt-8 flex space-x-5 text-xs lg:text-base">
            <Link
              href="/contact"
              className="flex justify-center lg:gap-5  gap-2   items-center py-2 lg:py-3 lg:px-6 px-2 rounded-lg  text-center  bg-gradient-to-r from-pr to-pr-dark-opaque text-white"
            >
              <p>Démarrer un projet</p>
              <FaArrowRightLong />
            </Link>
            <Link href="/contact" className="gradient-stroke-box">
              <p>Voir Portfolio</p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
