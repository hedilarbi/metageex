import Image from "next/image";
import React from "react";

import servicesSaaS from "../../../public/images/servicesSaas.svg";
const SaasSection = () => {
  return (
    <section className="w-full  relative mt-32 mb-40 ">
      <div className="serviceWhiteElipse" />
      <div className=" z-20 w-full h-full flex flex-col items-center">
        <div className="flex lg:flex-row flex-col-reverse items-center lg:px-24 w-full px-6 lg:gap-20">
          <div className="lg:w-3/5 w-full">
            <h2 className="font-inter text-white font-semibold lg:text-4xl text-xl text-center lg:text-left mt-4 lg:mt-0">
              SaaS (Software as a Service)
              <div className="mobileTitleUnderLine" />
            </h2>
            <div className="h-1 w-3/5 mt-2 bg-gradient-to-r from-[#57B3FE] to-[rgba(9,148,248,0)] hidden lg:block " />
            <p className="text-white opacity-60 font-inter lg:text-xl text-base  text-center lg:text-left font-light leading-normal mt-8">
              Nous concevons et développons des solutions SaaS sur mesure qui
              répondent aux besoins spécifiques de votre entreprise. Les
              solutions SaaS que nous créons sont accessibles en ligne et
              peuvent être utilisées par vos clients sans nécessiter
              d&apos;installation complexe. Nos produits SaaS sont conÃ§us pour
              être évolutifs, sécurisés et faciles à utiliser, vous permettant
              de vous concentrer sur la croissance de votre entreprise tout en
              bénéficiant de solutions logicielles puissantes et flexibles. Que
              ce soit pour la gestion d&apos;archives digitales, des solutions
              de restauration ou tout autre besoin, nous fournissons des
              solutions performantes et adaptées à votre secteur
              d&apos;activité.
            </p>
          </div>
          <Image
            src={servicesSaaS}
            alt="web dev"
            className="w-40 h-44 lg:flex-1 lg:h-80"
          />
        </div>
      </div>
    </section>
  );
};

export default SaasSection;
