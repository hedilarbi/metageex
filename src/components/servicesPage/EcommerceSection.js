import Image from "next/image";
import React from "react";
import servicesEcommerce from "../../../public/images/servicesEcommerce.svg";
const EcommerceSection = () => {
  return (
    <section className="w-full  relative mt-32 ">
      <div className=" z-20 w-full h-full flex flex-col items-center">
        <div className="flex lg:flex-row flex-col items-center lg:px-24 w-full px-6 lg:gap-20 ">
          <Image
            src={servicesEcommerce}
            alt="web dev"
            className="w-40 h-44 lg:flex-1 lg:h-80 object-contain"
          />
          <div className="lg:w-3/5 w-full">
            <h2 className="font-inter text-white font-semibold lg:text-4xl text-xl text-center lg:text-left mt-4 lg:mt-0">
              Sites e-commerce
              <div className="mobileTitleUnderLine" />
            </h2>
            <div className="h-1 w-3/5 mt-2 bg-gradient-to-r from-[#57B3FE] to-[rgba(9,148,248,0)] hidden lg:block " />
            <p className="text-white opacity-60 font-inter lg:text-xl text-base  text-center lg:text-left font-light leading-normal mt-8">
              Nous développons des sites e-commerce performants et sécurisés qui
              vous permettent de vendre vos produits et services en ligne avec
              efficacité. Nos solutions e-commerce incluent des fonctionnalités
              avancées telles que la gestion des produits, des commandes, des
              paiements en ligne sécurisés, des options de livraison et des
              outils de marketing intégrés. Nous nous assurons que votre
              boutique en ligne offre une expérience d&apos;achat fluide et
              agréable à vos clients, tout en vous fournissant les outils
              nécessaires pour gérer et développer votre activité en ligne.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcommerceSection;
