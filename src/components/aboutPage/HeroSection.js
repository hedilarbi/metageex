import Image from "next/image";
import React from "react";
import contactHero from "../../../public/images/contactHero.svg";
const HeroSection = () => {
  return (
    <section className="w-full lg:h-screen h-[70vh] relative ">
      <div className="top-half-elipse" />

      <div className=" z-10 w-full h-full lg:mt-32 mt-20">
        <div className="contactHero">
          <Image src={contactHero} alt="contactHero" />
        </div>
        <div className="serviceHeroContainer">
          <div className="h-full w-full flex flex-col items-center justify-center">
            <h1 className="font-inter font-semibold lg:text-6xl text-white inline-block text-2xl">
              À propos de nous
              <div className="titleUnderline" />
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
