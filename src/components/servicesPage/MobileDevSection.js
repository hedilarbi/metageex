import Image from "next/image";
import React from "react";
import servicesMobileDev from "../../../public/images/servicesMobileDev.svg";
const MobileDevSection = () => {
  return (
    <section className="w-full  relative  mt-32 ">
      <div className=" z-20 w-full h-full flex flex-col items-center">
        <div className="flex lg:flex-row flex-col items-center lg:px-24 w-full px-6 lg:gap-20">
          <Image
            src={servicesMobileDev}
            alt="web dev"
            className="w-40 h-44 lg:flex-1 lg:h-80"
          />
          <div className="lg:w-3/5 w-full">
            <h2 className="font-inter text-white font-semibold lg:text-4xl text-xl text-center lg:text-left">
              Développement d&apos;applications mobiles
              <div className="mobileTitleUnderLine" />
            </h2>
            <div className="h-1 w-3/5 mt-2 bg-gradient-to-r from-[#57B3FE] to-[rgba(9,148,248,0)] hidden lg:block " />
            <p className="text-white opacity-60 font-inter lg:text-xl text-base  text-center lg:text-left font-light leading-normal mt-8">
              Nous développons des applications mobiles natives et hybrides pour
              iOS et Android qui permettent à votre entreprise de rester
              connectée avec ses clients, où qu&apos;ils soient. Nos
              applications mobiles sont conçues pour offrir une expérience
              utilisateur optimale avec des interfaces intuitives et des
              performances élevées. Que vous ayez besoin d&apos;une application
              de commerce électronique, d&apos;une application de service à la
              demande ou d&apos;une solution mobile personnalisée, nous nous
              engageons à fournir des applications de haute qualité qui
              répondent à vos besoins spécifiques.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileDevSection;
