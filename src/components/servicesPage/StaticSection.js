import Image from "next/image";
import React from "react";
import servicesVitrine from "../../../public/images/servicesVitrine.svg";
const StaticSection = () => {
  return (
    <section className="w-full  relative mt-32  ">
      <div className="serviceBlueHalfElipse2" />
      <div className=" z-20 w-full h-full flex flex-col items-center">
        <div className="flex lg:flex-row flex-col-reverse items-center lg:px-24 w-full px-6 lg:gap-20">
          <div className="lg:w-3/5 w-full">
            <h2 className="font-inter text-white font-semibold lg:text-4xl text-xl text-center lg:text-left mt-4 lg:mt-0">
              Sites vitrines
              <div className="mobileTitleUnderLine" />
            </h2>
            <div className="h-1 w-3/5 mt-2 bg-gradient-to-r from-[#57B3FE] to-[rgba(9,148,248,0)]  hidden lg:block  " />
            <p className="text-white opacity-60 font-inter lg:text-xl text-base  text-center lg:text-left font-light leading-normal mt-8">
              Nous réalisons des sites vitrines professionnels qui mettent en
              valeur votre entreprise et vos services en ligne. Un site vitrine
              est essentiel pour établir une présence en ligne crédible et
              attirer de nouveaux clients. Nous créons des designs élégants et
              modernes, optimisés pour les moteurs de recherche (SEO) et
              entièrement responsive pour garantir une expérience utilisateur
              parfaite sur tous les appareils. Notre objectif est de fournir un
              site web qui reflète fidèlement l&apos;image de votre entreprise
              et qui vous aide à atteindre vos objectifs commerciaux.
            </p>
          </div>
          <Image
            src={servicesVitrine}
            alt="web dev"
            className="w-40 h-44 lg:flex-1 lg:h-80"
          />
        </div>
      </div>
    </section>
  );
};

export default StaticSection;
