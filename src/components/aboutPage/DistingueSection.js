import Image from "next/image";
import React from "react";
import fingerprint from "../../../public/images/fingerprint.svg";
const DistingueSection = () => {
  return (
    <section className="w-full  relative   ">
      <div className=" z-20 w-full h-full flex flex-col items-center">
        <div className="flex lg:flex-row flex-col-reverse items-center lg:px-20 w-full px-6  lg:mt-20">
          <div className="flex flex-col lg:items-start items-center">
            <h2 className="font-inter text-white font-semibold lg:text-4xl text-xl text-center lg:text-left ">
              Ce qui Nous Distingue
              <div className="mobileTitleUnderLine" />
              <div className="h-1 w-full mt-2 bg-gradient-to-r from-[#57B3FE] to-[rgba(9,148,248,0)] hidden lg:block " />
            </h2>

            <p className="text-white  font-inter lg:text-lg text-base font-light leading-normal mt-8  text-center lg:text-left">
              Contrairement à nos concurrents, nous nous distinguons par notre
              approche personnalisée et notre engagement envers la satisfaction
              client. Nous ne nous contentons pas de développer des
              applications; nous créons des solutions sur mesure qui répondent
              aux besoins spécifiques de chaque client. Notre équipe
              d&apos;experts travaille en étroite collaboration avec vous à
              chaque étape du projet, garantissant que le produit final est
              exactement ce que vous aviez imaginé – sinon mieux.
            </p>
          </div>

          <Image
            src={fingerprint}
            alt="web dev"
            className="w-60 object-cover lg:w-2/5 "
          />
        </div>
      </div>
    </section>
  );
};

export default DistingueSection;
