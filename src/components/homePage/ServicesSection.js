import React from "react";
import ServiceCard from "../serviceCard/ServiceCard";
import WideServiceCard from "../serviceCard/WideServiceCard";
import Image from "next/image";
import hero2 from "../../../public/images/hero2.svg";
import webDev from "../../../public/images/app-development1.svg";
import saasDev from "../../../public/images/app-development5.svg";
import ecommerceDev from "../../../public/images/app-development4.svg";
import mobileDev from "../../../public/images/app-development2.svg";
import vitrine from "../../../public/images/app-development3.svg";

const ServicesSection = () => {
  return (
    <section className="w-full  relative lg:mt-16">
      <div className="hero2">
        <Image src={hero2} alt="hero 2" className="object-contain" />
      </div>
      <div className="full-elipse" />
      <div className="z-20  w-screen  h-full ">
        <div className="w-full flex flex-col items-center h-full mt-4 z-30  ">
          <h2 className="text-white font-inter font-semibold lg:text-5xl text-center text-xl leading-tight">
            Nos Services
            <div className="mobileTitleUnderLine" />
          </h2>
          <div className="flex flex-col lg:flex-row w-full lg:mt-24 mt-16 lg:px-24 px-6 justify-between gap-10 z-30  ">
            <ServiceCard
              icon={webDev}
              title="Développement d'applications web"
              description="Conception et développement d'applications web sur mesure."
            />
            <ServiceCard
              icon={mobileDev}
              title="Développement d'applications mobiles"
              description="Création d'applications mobiles pour iOS et Android."
            />
            <ServiceCard
              icon={vitrine}
              title="Sites vitrines"
              description="Réalisation de sites vitrines pour une présence en ligne professionnelle."
            />
            <div className="lg:hidden">
              <ServiceCard
                icon={ecommerceDev}
                title="Sites e-commerce"
                description="Développement de boutiques en ligne performantes et sécurisées."
              />
            </div>
            <div className="lg:hidden">
              <ServiceCard
                icon={saasDev}
                title="SaaS (Software as a Service)"
                description="Développement de solutions SaaS adaptées à vos besoins d'affaires."
              />
            </div>
          </div>
          <div className=" lg:flex  w-full lg:mt-8 mt-10 px-6 lg:px-24 justify-between gap-10 hidden ">
            <WideServiceCard
              icon={ecommerceDev}
              title="Sites e-commerce"
              description="Développement de boutiques en ligne performantes et sécurisées."
            />
            <WideServiceCard
              icon={saasDev}
              title="SaaS (Software as a Service)"
              description="Développement de solutions SaaS adaptées à vos besoins d'affaires."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
