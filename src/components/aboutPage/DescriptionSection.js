import Image from "next/image";
import React from "react";
import aboutImage from "../../../public/images/aboutImage.svg";
const DescriptionSection = () => {
  return (
    <section className="w-full  relative mt-12 lg:mt-24 ">
      <div className="serviceBlueHalfElipse" />
      <div className=" z-20 w-full h-full flex flex-col items-center">
        <div className="flex lg:flex-row flex-col items-center lg:px-12 w-full px-6  lg:mt-10">
          <Image
            src={aboutImage}
            alt="web dev"
            className="w-60 object-cover lg:w-2/5 "
          />

          <p className="text-white  font-inter lg:text-lg text-base font-light leading-normal mt-8 lg:mt-0 text-center lg:text-left">
            Bienvenue chez Metageex, une entreprise de développement dédiée à la
            création d&apos;applications web et mobiles. Nous croyons en
            l&apos;innovation, la qualité et l&apos;excellence dans tout ce que
            nous faisons. Notre mission est de transformer les idées en
            solutions digitales puissantes et efficaces qui répondent aux
            besoins de nos clients et de la société.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DescriptionSection;
