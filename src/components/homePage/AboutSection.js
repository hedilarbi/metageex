import Image from "next/image";
import React from "react";
import hero5 from "../../../public/images/hero5.svg";
import metageex from "../../../public/images/metagex3.png";
const AboutSection = () => {
  return (
    <section className="w-full  relative mt-32   ">
      <div className="hero5">
        <Image src={hero5} alt="hero 1" className="object-contain" />
      </div>
      <div className="elipse4" />

      <div className="z-20  w-full h-full">
        <div className="w-full flex flex-col items-center h-full mt-4">
          <h2 className="text-white font-inter font-semibold lg:text-5xl text-xl text-center  leading-tight">
            À propos de nous
            <div className="mobileTitleUnderLine" />
          </h2>
          <div className="flex font-inter lg:mt-20 mt-10 lg:px-36 px-6 ">
            <Image src={metageex} alt="metageex" className=" hidden lg:block" />

            <p className="text-white lg:text-xl text-sm leading-10 font-light lg:text-left text-center ">
              <span className="text-pr font-semibold lg:text-2xl text-base ">
                Chez METAGEEX
              </span>
              , nous croyons fermement que la digitalisation est la clé pour
              propulser les entreprises vers l&apos;avenir. Notre mission est de
              fournir des solutions modernes et performantes qui transforment
              les idées en réalité digitales. Que ce soit par le développement
              d&apos;applications web et mobiles, de sites vitrines, de sites
              e-commerce ou de solutions SaaS, nous nous engageons à offrir des
              produits innovants et de haute qualité qui répondent aux besoins
              spécifiques de chaque client.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
