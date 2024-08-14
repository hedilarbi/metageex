import Image from "next/image";
import React from "react";
import servicesWebDev from "../../../public/images/servicesWebDev.svg";
const WebDevSection = () => {
  return (
    <section className="w-full  relative mt-32 lg:mt-0 ">
      <div className="serviceBlueHalfElipse" />
      <div className=" z-20 w-full h-full flex flex-col items-center">
        <div className="flex lg:flex-row flex-col-reverse items-center lg:px-24 w-full px-6 lg:gap-20">
          <div className="lg:w-3/5 w-full">
            <h2 className="font-inter text-white font-semibold lg:text-4xl text-xl text-center lg:text-left mt-4 lg:mt-0">
              Développement d&apos;applications web
              <div className="mobileTitleUnderLine" />
            </h2>
            <div className="h-1 w-3/5 mt-2 bg-gradient-to-r from-[#57B3FE] to-[rgba(9,148,248,0)]  hidden lg:block " />

            <p className="text-white opacity-60 font-inter lg:text-xl text-base font-light leading-normal mt-8 text-center lg:text-left">
              Nous créons des applications web sur mesure qui répondent
              précisément aux besoins de votre entreprise. Nos solutions sont
              conçues pour être robustes, évolutives et sécurisées, garantissant
              une expérience utilisateur fluide et performante. Que vous ayez
              besoin d&apos;une plateforme de gestion interne, d&apos;un portail
              client ou d&apos;une application web complexe, notre équipe
              d&apos;experts en développement web utilise les dernières
              technologies et les meilleures pratiques pour vous offrir des
              solutions innovantes et adaptées à vos exigences.
            </p>
          </div>
          <Image
            src={servicesWebDev}
            alt="web dev"
            className="w-40 h-44 lg:flex-1 lg:h-80"
          />
        </div>
      </div>
    </section>
  );
};

export default WebDevSection;
